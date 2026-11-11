import React from 'react';
import Link from 'next/link';
import { PROJECTS } from '@/lib/data';
import { Sparkles, ArrowUpRight } from 'lucide-react';

export const metadata = {
  title: 'Engineering Portfolio & Case Studies | SAHIX',
  description: 'Explore verified architecture case studies across FinTech, Healthcare, Autonomous Logistics, and Developer Cloud.'
};

export default function ProjectsPage() {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#EA580C] text-xs font-semibold mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#FF6B00]" />
          <span>Case Studies & Demonstrations</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-tight">
          Selected Engineering Works
        </h1>
        <p className="mt-4 text-base text-slate-600">
          A showcase of mission-critical systems designed to handle high transaction volumes, low latencies, and stringent compliance standards.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            className="rounded-3xl bg-white border border-slate-200 hover:border-[#FF6B00] overflow-hidden transition-all duration-300 group flex flex-col justify-between shadow-sm"
          >
            <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-100">
              <img
                src={project.featuredImage}
                alt={project.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
              
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/95 backdrop-blur-md text-slate-800 border border-slate-200 shadow-sm">
                  {project.industry}
                </span>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-orange-50 text-[#EA580C] border border-orange-200 font-semibold backdrop-blur-md shadow-sm">
                  DEMO CASE
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 group-hover:text-[#FF6B00] transition-colors">
                  {project.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                  {project.summary}
                </p>

                <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 py-4 border-y border-slate-100">
                  {project.metrics.map((m, idx) => (
                    <div key={idx}>
                      <div className="text-lg font-black text-slate-900">{m.value}</div>
                      <div className="text-[10px] text-slate-500 uppercase font-mono">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((t) => (
                    <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                      {t}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FF6B00] group-hover:text-[#EA580C]"
                >
                  <span>Read Case Study</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
