import React from 'react';
import Link from 'next/link';
import { BLOG_POSTS } from '@/lib/data';
import { Sparkles, Clock, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Engineering Insights & Architectural Dispatches | SAHIX',
  description: 'Technical breakdowns, microservice architectures, Next.js performance tuning, and enterprise AI implementations from SAHIX engineers.'
};

export default function InsightsPage() {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#EA580C] text-xs font-semibold mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#FF6B00]" />
          <span>Engineering Dispatches</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-tight">
          SAHIX Insights & Technical Blog
        </h1>
        <p className="mt-4 text-base text-slate-600">
          Real-world architecture patterns, latency benchmarks, and lessons from high-throughput distributed systems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {BLOG_POSTS.map((post) => (
          <div
            key={post.id}
            className="rounded-3xl bg-white border border-slate-200 hover:border-[#FF6B00] overflow-hidden transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-md"
          >
            <div>
              <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-mono uppercase bg-white/95 backdrop-blur-md text-[#EA580C] border border-orange-200 font-semibold shadow-sm">
                  {post.category}
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-[11px] text-slate-500 font-mono mb-2">
                  <span>{post.publishedAt}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#FF6B00]" /> {post.readTime}
                  </span>
                </div>

                <h2 className="text-lg font-bold text-slate-900 group-hover:text-[#FF6B00] transition-colors leading-snug">
                  {post.title}
                </h2>
                <p className="text-xs text-slate-600 mt-2.5 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>
            </div>

            <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between mt-4">
              <div className="flex items-center gap-2">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-6 h-6 rounded-full object-cover border border-slate-200"
                />
                <span className="text-xs text-slate-800 font-medium">{post.author.name}</span>
              </div>
              <Link
                href={`/insights/${post.slug}`}
                className="text-xs font-semibold text-[#FF6B00] group-hover:text-[#EA580C] inline-flex items-center gap-1"
              >
                <span>Read</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
