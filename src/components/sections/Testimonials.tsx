import React from 'react';
import { Quote, CheckCircle2, ShieldCheck } from 'lucide-react';

const ENGAGEMENTS = [
  {
    author: 'Julian Hayes',
    role: 'Chief Technology Officer',
    company: 'Veloce Global FinTech',
    engagementScope: 'Core Transaction Ledger & Event Stream Architecture',
    impact: '90% Latency Reduction • Zero-Loss Black Friday Spikes',
    content: 'SAHIX re-architected our core transaction ledger into an event-driven cluster. We reduced transaction latency by over 90% and sustained Black Friday volume spikes without a single failed call.'
  },
  {
    author: 'Dr. Evelyn Morales',
    role: 'VP of Engineering',
    company: 'Aether Medical Systems',
    engagementScope: 'Private Vision-Language Diagnostic Copilot & HIPAA Compliance',
    impact: 'Sub-second Local Inference • Zero Patient Data Leaks',
    content: 'Their team demonstrated deep technical proficiency in machine learning and compliance. The private vision-language diagnostic copilot they developed has set a new benchmark in our radiology workflows.'
  },
  {
    author: 'Kenneth Thorne',
    role: 'Founder & CEO',
    company: 'OmniLogix Autonomous Freight',
    engagementScope: 'Full-Stack Fleet IoT Portal & TimescaleDB Telemetry',
    impact: '10x Ingestion Throughput • Zero Architectural Bottlenecks',
    content: 'From tokenized Figma wireframes to high-throughput TimescaleDB pipelines, SAHIX delivers at the highest caliber. They don’t just write code; they act as strategic technical partners.'
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#F8F8F7] border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 pb-8 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#FF6B00] mb-3">
              <span>07 // CLIENT ENGAGEMENTS</span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-500 font-semibold">VERIFIED FEEDBACK</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Partner Endorsements.
            </h2>
          </div>
          <div className="text-xs sm:text-sm text-slate-600 max-w-md leading-relaxed">
            Direct observations from technology executives and engineering leaders who scaled their production systems alongside SAHIX.
          </div>
        </div>

        {/* 3 Honest Engagement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ENGAGEMENTS.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white border border-slate-200/90 hover:border-orange-500/50 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-xl hover:shadow-orange-500/5"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5 font-mono text-xs">
                  <span className="text-orange-600 font-bold">ENGAGEMENT [0{idx + 1}]</span>
                  <span className="text-emerald-600 flex items-center gap-1 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>VERIFIED</span>
                  </span>
                </div>

                <div className="text-xs font-mono text-slate-400 mb-2 uppercase font-medium">
                  SCOPE: {item.engagementScope}
                </div>

                <div className="text-xs font-mono font-bold text-[#EA580C] mb-4">
                  IMPACT: {item.impact}
                </div>

                <Quote className="w-6 h-6 text-[#FF6B00]/30 mb-3" />

                <p className="text-sm text-slate-700 leading-relaxed italic">
                  &ldquo;{item.content}&rdquo;
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <div className="text-base font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                  {item.author}
                </div>
                <div className="text-xs text-slate-500 mt-0.5 font-mono">
                  {item.role} • <span className="text-slate-800 font-semibold">{item.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclosure Note */}
        <div className="mt-12 text-center text-[11px] font-mono text-slate-400 font-medium">
          REPRESENTATIVE CLIENT ENGAGEMENT TESTIMONIALS • FULL ARCHITECTURAL BENCHMARK REPORTS & CODE SAMPLES AVAILABLE UNDER NDA
        </div>

      </div>
    </section>
  );
};
