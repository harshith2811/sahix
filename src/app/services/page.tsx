import React from 'react';
import Link from 'next/link';
import { SERVICES } from '@/lib/data';
import { ArrowRight, CheckCircle2, Terminal, ShieldCheck, Zap } from 'lucide-react';

export const metadata = {
  title: 'Full-Spectrum Engineering Services | SAHIX',
  description: 'Explore our 8 specialized engineering practices: Web, Mobile, AI & Machine Learning, Custom Enterprise Software, Cloud & DevOps, UI/UX, and Automation.'
};

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* Editorial Header */}
      <div className="border-b border-slate-200 pb-10">
        <div className="flex items-center gap-2 text-xs font-mono text-[#FF6B00] font-semibold mb-3">
          <span>01 // ARCHITECTURAL PRACTICES</span>
          <span className="text-slate-300">•</span>
          <span className="text-slate-500">FULL-SPECTRUM SPECIFICATIONS</span>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-[1.08] uppercase">
              Enterprise Digital <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-800 to-[#FF6B00]">
                Engineering Disciplines
              </span>
            </h1>
          </div>
          <div className="lg:col-span-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
            We combine rigorous computer science with product craftsmanship to build scalable, resilient digital infrastructure. All 8 practices include guaranteed milestone delivery.
          </div>
        </div>

        {/* 3 Hard Facts Bar */}
        <div className="mt-8 pt-6 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono">
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <div className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold">LATENCY SLO</div>
            <div className="text-sm font-bold text-slate-900 mt-0.5">&lt; 50ms Edge Global</div>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <div className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold">CONTRACT ASSURANCE</div>
            <div className="text-sm font-bold text-[#EA580C] mt-0.5">Fixed Milestone Pricing</div>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <div className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold">IP OWNERSHIP</div>
            <div className="text-sm font-bold text-slate-900 mt-0.5">100% Client Codebase</div>
          </div>
        </div>
      </div>

      {/* Practice Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SERVICES.map((service, index) => (
          <div
            key={service.id}
            className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 hover:border-[#FF6B00] transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-lg"
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6 font-mono">
                <span className="text-xs font-bold text-[#FF6B00]">PRACTICE // 0{index + 1}</span>
                <span className="text-xs text-[#EA580C] bg-orange-50 px-3 py-1 rounded-full border border-orange-200 font-semibold">
                  Starting at {service.pricingStartingAt}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 group-hover:text-[#FF6B00] transition-colors tracking-tight">
                {service.title}
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {service.fullDesc}
              </p>

              <div className="mt-6 space-y-2.5">
                <div className="text-[11px] font-mono uppercase text-slate-800 font-bold tracking-wider">
                  Verified Deliverables:
                </div>
                {service.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-1.5">
                {service.technologies.map((t) => (
                  <span key={t} className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-100 text-slate-800 border border-slate-200">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
              <Link
                href={`/services/${service.slug}`}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#FF6B00] group-hover:text-[#EA580C] transition-colors"
              >
                <span>Read Detailed Practice Specifications</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/quote"
                className="text-xs font-mono text-slate-500 hover:text-slate-900 transition-colors"
              >
                Estimate Scope →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
