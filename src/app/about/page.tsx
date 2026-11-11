import React from 'react';
import { Target, Compass, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'About SAHIX | Future-Driven Software Development',
  description: 'Learn about SAHIX, our engineering ethos, leadership principles, and mission to engineer tomorrow’s digital world.'
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20">
      
      {/* Editorial Header */}
      <div className="border-b border-slate-200 pb-10">
        <div className="flex items-center gap-2 text-xs font-mono text-[#FF6B00] font-semibold mb-3">
          <span>03 // COMPANY MANIFESTO</span>
          <span className="text-slate-300">•</span>
          <span className="text-slate-500">ENGINEERING ETHOS & TRAJECTORY</span>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-[1.08] uppercase">
              Engineering <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-800 to-[#FF6B00]">
                Tomorrow&apos;s Digital World
              </span>
            </h1>
          </div>
          <div className="lg:col-span-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
            SAHIX is a specialized digital software architecture firm founded to turn complex technical challenges into durable competitive advantages.
          </div>
        </div>

        {/* 3 Hard Facts Bar */}
        <div className="mt-8 pt-6 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono">
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <div className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold">DEPLOYMENT REACH</div>
            <div className="text-sm font-bold text-slate-900 mt-0.5">32 Global Edge PoPs</div>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <div className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold">CODEBASE QUALITY</div>
            <div className="text-sm font-bold text-[#EA580C] mt-0.5">100% Typed & SAST Audited</div>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <div className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold">COMMUNICATION</div>
            <div className="text-sm font-bold text-slate-900 mt-0.5">Direct Lead Architect Access</div>
          </div>
        </div>
      </div>

      {/* Mission & Vision Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-orange-200 shadow-md relative overflow-hidden group">
          <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-[#FF6B00] mb-6">
            <Target className="w-6 h-6" />
          </div>
          <div className="font-mono text-xs text-[#EA580C] font-semibold mb-2">MISSION STATEMENT</div>
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Our Core Mission</h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            To empower global innovators, high-velocity startups, and progressive enterprises with bespoke software that outpaces legacy architecture. We build with uncompromised attention to performance, zero-trust security, and clean developer experience.
          </p>
        </div>

        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-md relative overflow-hidden group">
          <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-[#FF6B00] mb-6">
            <Compass className="w-6 h-6" />
          </div>
          <div className="font-mono text-xs text-slate-600 font-semibold mb-2">FUTURE VISION</div>
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Our Vision</h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            A future where software systems scale predictably, adapt through cognitive AI orchestration, and maintain 99.999% availability without human intervention. We envision SAHIX as the premier international benchmark in modern digital craftsmanship.
          </p>
        </div>
      </div>

      {/* Values Grid */}
      <div>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-6 border-b border-slate-200">
          <div>
            <div className="text-xs font-mono text-[#FF6B00] font-semibold mb-2">OPERATIONAL DISCIPLINE</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">The SAHIX Principles</h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md">
            The fundamental tenets that govern every pull request, sprint review, and system design document.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'First-Principles Engineering',
              desc: 'We never adopt frameworks or patterns out of convenience. Every architecture decision is weighed against raw performance, memory efficiency, and operational costs.'
            },
            {
              title: 'Uncompromised Type Safety',
              desc: 'We eliminate whole categories of runtime bugs by mandating strict end-to-end typing from database schemas down to frontend UI props.'
            },
            {
              title: 'Radical Transparency',
              desc: 'Clients receive uninterrupted visibility into our git commit streams, test coverage metrics, and staging continuous deployment environments.'
            },
            {
              title: 'Obsession with Latency',
              desc: 'Every millisecond shaved translates directly to client revenue. We design sub-50ms edge processing workflows by default.'
            },
            {
              title: 'Security by Design',
              desc: 'Security is not an afterthought added before launch. It is baked into our CI/CD pipelines through automated vulnerability scanning and RBAC enforcement.'
            },
            {
              title: 'Long-Term Ownership',
              desc: 'We build systems designed to be maintained and evolved for decades, not thrown away after the initial launch sprint.'
            }
          ].map((val, idx) => (
            <div key={idx} className="p-7 rounded-2xl bg-white border border-slate-200 hover:border-[#FF6B00] shadow-sm transition-colors flex flex-col justify-between">
              <div>
                <div className="font-mono text-xs font-bold text-[#FF6B00] mb-3">PRINCIPLE // 0{idx + 1}</div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{val.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{val.desc}</p>
              </div>
              <div className="mt-6 pt-3 border-t border-slate-100 text-[10px] font-mono text-slate-400">
                ENFORCED IN CODE REVIEWS
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Callout */}
      <div className="p-8 sm:p-12 rounded-3xl bg-[#FFF9F5] border border-orange-200 text-center flex flex-col items-center shadow-md">
        <div className="text-xs font-mono text-[#EA580C] font-semibold uppercase tracking-wider mb-2">
          DIRECT ARCHITECT ENGAGEMENT
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
          Ready to partner with SAHIX?
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mt-3 max-w-xl leading-relaxed">
          Speak with our principal software architects to analyze your upcoming initiative and receive an objective feasibility review.
        </p>
        <Link
          href="/contact"
          className="mt-6 px-8 py-3.5 rounded-full bg-[#FF6B00] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#EA580C] transition-all shadow-[0_4px_14px_rgba(255,107,0,0.35)]"
        >
          Book An Architecture Briefing
        </Link>
      </div>
    </div>
  );
}
