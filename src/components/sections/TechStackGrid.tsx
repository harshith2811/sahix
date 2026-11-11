'use client';

import React from 'react';
import { TECH_STACK } from '@/lib/data';
import { Layers, Terminal, Cpu, Database, Cloud } from 'lucide-react';
import { TiltCard } from '../ui/TiltCard';

const CATEGORY_MAP: Record<string, { label: string; icon: React.ElementType; desc: string }> = {
  Frontend: {
    label: 'Client Runtimes & Frontends',
    icon: Layers,
    desc: 'High-throughput, reactive UI engines with sub-second time-to-interactive.'
  },
  Backend: {
    label: 'Distributed Services & APIs',
    icon: Terminal,
    desc: 'Stateless microservices, event streams, and cryptographic gateways.'
  },
  Cloud: {
    label: 'Cloud Infrastructure & DevOps',
    icon: Cloud,
    desc: 'Elastic container orchestration, continuous delivery, and edge caches.'
  },
  Database: {
    label: 'Storage & Vector Compute',
    icon: Database,
    desc: 'ACID transactional databases, low-latency key-value stores, and vector indexes.'
  }
};

export const TechStackGrid: React.FC = () => {
  const categories = ['Frontend', 'Backend', 'Cloud', 'Database'];

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 pb-8 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#FF6B00] mb-3">
              <span>07 // ARCHITECTURAL TOOLCHAIN</span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-500 font-semibold">PRODUCTION PROVEN</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Selected Engineering Arsenal.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md leading-relaxed">
            We build exclusively on modern, battle-tested open-source ecosystems vetted for long-term viability, developer ergonomics, and runtime efficiency.
          </p>
        </div>

        {/* 4 Categorized Toolchain Layers with TiltCard */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {categories.map((catKey) => {
            const meta = CATEGORY_MAP[catKey] || CATEGORY_MAP.Frontend;
            const Icon = meta.icon;
            const items = TECH_STACK.filter(t => t.category.toLowerCase() === catKey.toLowerCase() || (catKey === 'Cloud' && (t.category === 'Cloud' || t.category === 'DevOps')));

            return (
              <TiltCard
                key={catKey}
                intensity="subtle"
                showBeam={true}
                className="rounded-3xl"
              >
                <div className="p-7 rounded-3xl bg-[#FAFAFA] border border-slate-200/90 hover:border-orange-500/50 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-xl hover:shadow-orange-500/5 h-full">
                  <div>
                    <div className="flex items-center gap-3 pb-4 border-b border-slate-100 mb-5">
                      <div className="p-2.5 rounded-xl bg-orange-50 text-[#FF6B00] border border-orange-200 group-hover:bg-[#FF6B00] group-hover:text-white transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold">
                          TIER // {catKey.toUpperCase()}
                        </div>
                        <div className="text-base sm:text-lg font-bold text-slate-900">
                          {meta.label}
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed mb-6">
                      {meta.desc}
                    </p>

                    {/* Technology Badges */}
                    <div className="flex flex-wrap gap-2">
                      {items.map((tech) => (
                        <div
                          key={tech.name}
                          className="px-3.5 py-1.5 rounded-xl bg-white border border-slate-200/90 group-hover:border-orange-300 transition-colors flex items-center gap-2 shadow-xs"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00]" />
                          <span className="text-xs font-mono font-bold text-slate-800">{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-slate-100 text-[11px] font-mono text-slate-400 flex items-center justify-between font-semibold">
                    <span>DEPLOYED ACROSS CLIENT CLUSTERS</span>
                    <span className="text-emerald-600">STATUS: STABLE</span>
                  </div>
                </div>
              </TiltCard>
            );
          })}
        </div>

      </div>
    </section>
  );
};
