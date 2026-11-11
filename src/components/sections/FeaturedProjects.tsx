'use client';

import React from 'react';
import Link from 'next/link';
import { PROJECTS } from '@/lib/data';
import { ArrowUpRight, CheckCircle2, Layers } from 'lucide-react';
import { TiltCard } from '@/components/ui/TiltCard';
import { soundManager } from '@/lib/audio';

export const FeaturedProjects: React.FC = () => {
  return (
    <section id="projects" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#F8F8F7] border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 pb-8 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#FF6B00] mb-3">
              <span>04 // CASE STUDY ARCHIVES</span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-500 font-semibold">PRODUCTION PROOF</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Selected Systems In Production.
            </h2>
          </div>
          <Link
            href="/projects"
            onClick={() => soundManager.play('click')}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-bold text-orange-600 hover:text-orange-700 transition-colors group"
          >
            <span>VIEW ALL CASE ARCHIVES</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Project Cards Grid with Tactile 3D Tilt & Traveling Beam Glows */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <TiltCard
              key={project.id}
              intensity="subtle"
              showBeam={true}
              className="rounded-3xl"
            >
              <div className="group relative rounded-3xl bg-white border border-slate-200/90 hover:border-orange-500/50 overflow-hidden transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-orange-500/5 flex flex-col justify-between h-full">
                
                {/* Media Preview Header */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100">
                  <img
                    src={project.featuredImage}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  
                  {/* Gradient Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-80" />

                  {/* Industry & Status Badges */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-white/90 backdrop-blur-md text-slate-900 font-bold border border-slate-200 shadow-sm">
                      {project.industry.toUpperCase()}
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-orange-50 text-orange-700 border border-orange-200 font-bold backdrop-blur-md">
                      ARCH-0{idx + 1}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4">
                    <span className="text-xs font-mono text-slate-700 bg-white/90 px-2.5 py-1 rounded-md border border-slate-200 font-semibold shadow-sm">
                      RELEASE {project.year}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-mono text-slate-400 mb-1 font-semibold">
                      CLIENT // {project.client.toUpperCase()}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-orange-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {project.summary}
                    </p>

                    {/* Benchmark Metrics Grid */}
                    <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 py-4 border-y border-slate-100 font-mono">
                      {project.metrics.map((metric, i) => (
                        <div key={i} className="flex flex-col">
                          <span className="text-lg sm:text-xl font-black text-slate-900">
                            {metric.value}
                          </span>
                          <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">
                            {metric.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Stack Badges */}
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-100 text-slate-800 border border-slate-200 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer Link */}
                  <div className="mt-6 pt-4 flex items-center justify-between border-t border-slate-100">
                    <span className="text-xs font-mono text-slate-400 font-medium">
                      VERIFIED PRODUCTION DEPLOYMENT
                    </span>
                    <Link
                      href={`/projects/${project.slug}`}
                      onClick={() => soundManager.play('click')}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-600 group-hover:text-orange-700 transition-colors"
                    >
                      <span>Read Technical Case Study</span>
                      <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                    </Link>
                  </div>
                </div>

              </div>
            </TiltCard>
          ))}
        </div>

      </div>
    </section>
  );
};
