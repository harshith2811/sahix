import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { BLOG_POSTS } from '@/lib/data';
import { ArrowLeft, Clock, Share2, Sparkles } from 'lucide-react';

interface Props {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return BLOG_POSTS.map((b) => ({ slug: b.slug }));
}

export default function SingleBlogPostPage({ params }: Props) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-12">
      <Link
        href="/insights"
        className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Insights</span>
      </Link>

      <div>
        <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-3">
          <span className="px-2.5 py-0.5 rounded-full bg-orange-50 border border-orange-200 text-[#EA580C] font-semibold">
            {post.category}
          </span>
          <span>•</span>
          <span>{post.publishedAt}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          {post.title}
        </h1>

        {/* Author bar */}
        <div className="mt-6 flex items-center justify-between py-4 border-y border-slate-200">
          <div className="flex items-center gap-3">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-10 h-10 rounded-full object-cover border border-slate-200"
            />
            <div>
              <div className="text-xs sm:text-sm font-bold text-slate-900">{post.author.name}</div>
              <div className="text-[11px] text-slate-500">{post.author.role}</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-medium">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Cover image */}
      <div className="relative rounded-3xl overflow-hidden h-72 sm:h-96 w-full border border-slate-200 shadow-sm">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Article Content */}
      <div className="max-w-none text-sm sm:text-base text-slate-700 leading-relaxed space-y-6">
        {post.content.split('\n\n').map((paragraph, idx) => {
          if (paragraph.startsWith('### ')) {
            return (
              <h2 key={idx} className="text-xl sm:text-2xl font-bold text-slate-900 mt-8 mb-4">
                {paragraph.replace('### ', '')}
              </h2>
            );
          }
          return (
            <p key={idx} className="leading-relaxed">
              {paragraph}
            </p>
          );
        })}
      </div>

      {/* Footer CTA */}
      <div className="mt-16 p-8 rounded-3xl bg-[#FFF9F5] border border-orange-200 text-center flex flex-col items-center shadow-md">
        <h3 className="text-xl font-bold text-slate-900">Need architectural guidance on your stack?</h3>
        <p className="text-xs text-slate-600 mt-2 max-w-md">
          Our engineering leads can review your architecture diagram and suggest latency and cost optimizations.
        </p>
        <Link
          href="/quote"
          className="mt-5 px-6 py-3 rounded-full bg-[#FF6B00] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#EA580C] shadow-md shadow-[#FF6B00]/25 transition-colors"
        >
          Book An Engineering Review
        </Link>
      </div>
    </div>
  );
}
