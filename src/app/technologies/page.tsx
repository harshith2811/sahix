import React from 'react';
import Link from 'next/link';
import { TECH_STACK } from '@/lib/data';
import { Sparkles, Terminal, ShieldCheck, Zap } from 'lucide-react';

export const metadata = {
  title: 'Technology Stack & Engineering Standards | SAHIX',
  description: 'Our evaluated technology matrix across Frontend, High-Performance Backends, AI & Data, Databases, and DevOps.'
};

const CATEGORIES = ['All', 'Frontend', 'Language', 'High-Perf Backend', 'Backend', 'AI & Data', 'Mobile', 'Database', 'Cache', 'Cloud', 'Container', 'Orchestration'];

export default function TechnologiesPage() {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#EA580C] text-xs font-semibold mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#FF6B00]" />
          <span>Engineering Architecture</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-tight">
          Technologies We Rely On
        </h1>
        <p className="mt-4 text-base text-slate-600">
          We select proven, community-backed open-source foundations and state-of-the-art managed services that guarantee developer velocity and high uptime.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {TECH_STACK.map((tech) => (
          <div
            key={tech.name}
            className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#FF6B00] shadow-sm transition-all duration-300 flex flex-col justify-between group"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-slate-500 uppercase font-semibold">
                {tech.category}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00]" />
            </div>
            <div className="mt-6 text-xl font-bold text-slate-900 group-hover:text-[#FF6B00] transition-colors">
              {tech.name}
            </div>
          </div>
        ))}
      </div>

      <div className="p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <Zap className="w-8 h-8 text-[#FF6B00] mb-3" />
          <h3 className="text-lg font-bold text-slate-900 mb-2">Zero Architectural Lock-in</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            All codebases are built with standard Docker containers and cloud-agnostic configurations so you can run anywhere without proprietary vendor traps.
          </p>
        </div>
        <div>
          <ShieldCheck className="w-8 h-8 text-emerald-600 mb-3" />
          <h3 className="text-lg font-bold text-slate-900 mb-2">Automated Dependabot & SAST</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Continuous static analysis security scans (SAST) run on every branch to catch CVE vulnerabilities before code reaches staging.
          </p>
        </div>
        <div>
          <Terminal className="w-8 h-8 text-[#EA580C] mb-3" />
          <h3 className="text-lg font-bold text-slate-900 mb-2">Strict Type Contracts</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Automated schema generation with Zod, OpenAPI, and tRPC ensures backend contracts match frontend interfaces without manual synchronization errors.
          </p>
        </div>
      </div>
    </div>
  );
}
