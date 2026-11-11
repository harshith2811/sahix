import React from 'react';
import Link from 'next/link';
import { ArrowRight, PhoneCall, MessageSquare, CheckCircle2, ShieldCheck } from 'lucide-react';

export const CtaBanner: React.FC = () => {
  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200 overflow-hidden">
      
      {/* Background warm amber glow */}
      <div 
        className="pointer-events-none absolute inset-0 w-full h-full opacity-35"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(255, 107, 0, 0.15) 0%, rgba(255, 122, 0, 0.06) 40%, transparent 70%)',
          filter: 'blur(80px)'
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto rounded-3xl bg-gradient-to-b from-[#FFF9F5] to-white border border-orange-300 p-8 sm:p-16 text-center shadow-xl shadow-orange-500/5 backdrop-blur-2xl">
        
        {/* Specification marker */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-orange-700 text-xs font-mono mb-6 shadow-sm font-semibold">
          <span>08 // INITIATE ARCHITECTURE ROADMAP</span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.12] max-w-3xl mx-auto">
          Ready to Architect Your Next Production Platform?
        </h2>

        <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Partner with SAHIX to eliminate technical debt, meet critical compliance SLOs, and deploy high-throughput digital systems. Receive a detailed architecture roadmap and milestone budget within 48 business hours.
        </p>

        {/* Action Row */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/quote"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#FF6B00] text-white font-bold text-sm btn-tactile hover:bg-[#EA580C] shadow-lg shadow-orange-500/25"
          >
            <span>Configure Project Estimate</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-slate-800 font-semibold text-sm border border-slate-300 hover:border-orange-400 hover:bg-orange-50/50 hover:text-orange-700 btn-tactile shadow-sm transition-all"
          >
            <PhoneCall className="w-4 h-4 text-orange-600" />
            <span>Book Technical Consultation</span>
          </Link>
        </div>

        {/* WhatsApp & SLA commitment */}
        <div className="mt-10 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-600">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span className="font-semibold">CONFIDENTIAL NDA PROTECTED</span>
          </div>
          <span className="text-slate-300">•</span>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#EA580C]" />
            <span className="font-semibold">48-HOUR ARCHITECTURE PROPOSAL SLA</span>
          </div>
          <span className="text-slate-300">•</span>
          <a
            href="https://wa.me/15551234567?text=Hello%20SAHIX,%20I%20would%20like%20to%20discuss%20a%20new%20software%20project."
            target="_blank"
            rel="noreferrer"
            className="text-emerald-700 hover:underline font-bold inline-flex items-center gap-1.5"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Direct WhatsApp Channel</span>
          </a>
        </div>

      </div>
    </section>
  );
};
