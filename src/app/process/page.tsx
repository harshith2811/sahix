import React from 'react';
import Link from 'next/link';
import { PROCESS_STEPS } from '@/lib/data';
import { Sparkles, CheckCircle2, Clock, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Our 7-Step Development Process | SAHIX',
  description: 'Learn how SAHIX executes software projects: from discovery and architecture to deployment and ongoing scale.'
};

export default function ProcessPage() {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-16">
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#EA580C] text-xs font-semibold mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#FF6B00]" />
          <span>Predictable Engineering</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-tight">
          How We Build Digital Products
        </h1>
        <p className="mt-4 text-base text-slate-600">
          A disciplined, battle-tested engineering methodology designed to mitigate architectural risk, ensure rapid sprint turnaround, and hit launch deadlines.
        </p>
      </div>

      <div className="space-y-8">
        {PROCESS_STEPS.map((step) => (
          <div
            key={step.number}
            className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-[#FF6B00] shadow-sm transition-colors flex flex-col md:flex-row md:items-center justify-between gap-6"
          >
            <div className="flex items-start gap-5">
              <span className="font-mono text-3xl sm:text-4xl font-black text-[#FF6B00]">
                {step.number}
              </span>
              <div>
                <div className="flex items-center gap-3">
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                    {step.title}
                  </h2>
                  <span className="text-[11px] font-mono text-[#EA580C] bg-orange-50 px-2.5 py-0.5 rounded-full border border-orange-200 font-semibold">
                    {step.duration}
                  </span>
                </div>
                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
                  {step.description}
                </p>
              </div>
            </div>

            <div className="flex-shrink-0">
              <Link
                href="/quote"
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-50 border border-slate-200 text-slate-700 hover:border-[#FF6B00] hover:text-[#FF6B00] hover:bg-white transition-colors inline-flex items-center gap-1.5"
              >
                <span>Initiate Stage</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="p-8 sm:p-12 rounded-3xl bg-[#FFF9F5] border border-orange-200 text-center flex flex-col items-center shadow-md">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
          Ready to experience frictionless development?
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-md">
          Start with Step 01: A complimentary 45-minute discovery consultation with our senior solutions architect.
        </p>
        <Link
          href="/contact"
          className="mt-6 px-8 py-3.5 rounded-full bg-[#FF6B00] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#EA580C] transition-colors shadow-md shadow-[#FF6B00]/25"
        >
          Book Discovery Workshop
        </Link>
      </div>
    </div>
  );
}
