import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { PROJECTS } from '@/lib/data';
import { ArrowLeft, CheckCircle2, Sparkles, ExternalLink, ShieldCheck } from 'lucide-react';

interface Props {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export default function ProjectCaseStudyPage({ params }: Props) {
  const project = PROJECTS.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-16">
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Projects</span>
      </Link>

      {/* Case Header */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-orange-50 text-[#EA580C] border border-orange-200 font-mono">
            {project.industry}
          </span>
          <span className="text-xs text-slate-500 font-mono">Delivered: {project.year}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          {project.title}
        </h1>

        <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
          {project.summary}
        </p>

        {/* Highlight Metrics */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-2xl bg-[#FFF9F5] border border-orange-200 shadow-md">
          {project.metrics.map((m, idx) => (
            <div key={idx}>
              <div className="text-2xl sm:text-3xl font-black text-slate-900">{m.value}</div>
              <div className="text-xs text-[#EA580C] uppercase tracking-wider font-mono font-semibold mt-0.5">{m.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Graphic */}
      <div className="relative rounded-3xl overflow-hidden border border-slate-200 h-80 sm:h-96 w-full shadow-sm">
        <img
          src={project.featuredImage}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-80" />
      </div>

      {/* Challenge & Solution Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 mb-3">The Architectural Challenge</h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {project.challenge}
          </p>
        </div>

        <div className="p-8 rounded-2xl bg-white border border-orange-300 shadow-sm">
          <h2 className="text-xl font-bold text-[#EA580C] mb-3">The SAHIX Solution</h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {project.solution}
          </p>
        </div>
      </div>

      {/* Tangible Results */}
      <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Production Milestones & Business Impact</h2>
        <div className="space-y-4">
          {project.results.map((res, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm text-slate-700 font-medium">{res}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack */}
      <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <div className="text-xs font-mono text-slate-500 uppercase font-semibold">Deployed Technology Stack</div>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.technologies.map((t) => (
              <span key={t} className="px-3 py-1 rounded-lg bg-white border border-slate-200 text-xs font-mono text-slate-800 shadow-sm">
                {t}
              </span>
            ))}
          </div>
        </div>

        <Link
          href="/quote"
          className="px-6 py-3 rounded-full bg-[#FF6B00] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#EA580C] shadow-md shadow-[#FF6B00]/25 transition-colors flex-shrink-0"
        >
          Build Similar Architecture
        </Link>
      </div>
    </div>
  );
}
