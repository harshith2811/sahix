import React from 'react';
import { ProjectEstimator } from '@/components/estimator/ProjectEstimator';
import { Calculator } from 'lucide-react';

export const metadata = {
  title: 'Interactive Project Estimator & Scope Calculator | SAHIX',
  description: 'Configure your software requirements in real-time. Calculate indicative budgets and timelines for Web, Mobile, AI, and Cloud architectures.'
};

export default function QuotePage() {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* Editorial Header */}
      <div className="border-b border-slate-200 pb-10">
        <div className="flex items-center gap-2 text-xs font-mono text-[#FF6B00] font-semibold mb-3">
          <span>05 // INTERACTIVE ESTIMATOR</span>
          <span className="text-slate-300">•</span>
          <span className="text-slate-500">REAL-TIME SCOPE SYNTHESIZER</span>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-[1.08] uppercase">
              Configure Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-800 to-[#FF6B00]">
                Technical Architecture
              </span>
            </h1>
          </div>
          <div className="lg:col-span-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
            Select your target platforms, architectural tier, and core functional modules to synthesize an immediate indicative investment range and delivery timeline.
          </div>
        </div>

        {/* 3 Hard Facts Bar */}
        <div className="mt-8 pt-6 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono">
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <div className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold">COMPUTATION ENGINE</div>
            <div className="text-sm font-bold text-slate-900 mt-0.5">Real-time Deterministic</div>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <div className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold">ESTIMATE FIDELITY</div>
            <div className="text-sm font-bold text-[#EA580C] mt-0.5">Milestone Calibrated</div>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <div className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold">COMMITMENT</div>
            <div className="text-sm font-bold text-slate-900 mt-0.5">Zero Obligation Review</div>
          </div>
        </div>
      </div>

      <ProjectEstimator />
    </div>
  );
}
