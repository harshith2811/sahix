'use client';

import React, { useState } from 'react';
import { PROCESS_STEPS } from '@/lib/data';
import { CheckCircle2, Clock, ArrowRight, ArrowLeft } from 'lucide-react';

const STEP_DELIVERABLES: Record<number, string[]> = {
  1: [
    'System requirement specifications & business domain analysis',
    'High-level technical feasibility report & risk matrix',
    'Stakeholder milestone schedule & resource allocation plan'
  ],
  2: [
    'Database schema ERD & microservice boundary definitions',
    'API contract specification (OpenAPI / GraphQL / tRPC)',
    'Cloud infrastructure topology & security boundary diagrams'
  ],
  3: [
    'Tokenized Figma component library & interactive prototype',
    'Design system documentation with accessibility annotations',
    'Production design tokens (CSS variables & Tailwind exports)'
  ],
  4: [
    'Bi-weekly staging environment builds with automated CI/CD',
    'Unit & integration test suites with > 85% branch coverage',
    'Direct Loom video walk-throughs & synchronous sprint reviews'
  ],
  5: [
    'Automated static code security analysis (SAST) report',
    'Third-party dependency vulnerability mitigation audit',
    'Cross-browser rendering & responsive device sign-off'
  ],
  6: [
    'Zero-downtime blue/green or rolling canary deployment',
    'Global Anycast CDN caching & SSL/TLS certificate setup',
    'Real-time observability dashboards (DataDog / Prometheus)'
  ],
  7: [
    '24/7 automated error monitoring with PagerDuty integration',
    'Monthly dependency security & framework upgrade sprints',
    'Proactive infrastructure capacity planning & query tuning'
  ]
};

export const ProcessTimeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const currentStep = PROCESS_STEPS[activeStep] || PROCESS_STEPS[0];
  const stepNumber = parseInt(currentStep.number, 10) || activeStep + 1;
  const deliverables = STEP_DELIVERABLES[stepNumber] || STEP_DELIVERABLES[1];

  return (
    <section id="process" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#FAFAFA] border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 pb-8 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#FF6B00] mb-3">
              <span>05 // SPRINT EXECUTION ENGINE</span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-500 font-semibold">7-PHASE LIFECYCLE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Deterministic Software Delivery.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md leading-relaxed">
            From initial domain architecture to automated production deployment, our disciplined workflow eliminates chaos and ensures transparency.
          </p>
        </div>

        {/* 7-Step Navigation Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 mb-8">
          {PROCESS_STEPS.map((step, idx) => {
            const isCurrent = activeStep === idx;
            const isCompleted = idx < activeStep;

            return (
              <button
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`p-3.5 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between ${
                  isCurrent
                    ? 'bg-orange-50 border-[#FF6B00] text-orange-600 shadow-sm'
                    : 'bg-white border-slate-200/90 hover:border-orange-300 text-slate-600'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`font-mono text-xs font-bold ${isCurrent ? 'text-orange-600' : 'text-slate-400'}`}>
                    {step.number}
                  </span>
                  {isCompleted && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />}
                </div>
                <div className={`mt-2 text-xs font-bold truncate ${isCurrent ? 'text-slate-950' : 'text-slate-700'}`}>
                  {step.title.split(' ')[0]}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Deep-Dive Workstation */}
        <div className="beam-container rounded-3xl p-[1px] bg-gradient-to-b from-orange-400/40 via-orange-200/50 to-orange-400/30 shadow-[0_20px_50px_rgba(255,107,0,0.08),0_4px_20px_rgba(0,0,0,0.06)]">
          <div className="bg-white rounded-3xl p-7 sm:p-12 border border-slate-200 shadow-sm backdrop-blur-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-4 font-mono text-xs">
                  <span className="text-3xl font-extrabold text-[#FF6B00]">
                    PHASE {currentStep.number}
                  </span>
                  <span className="h-6 w-[1px] bg-slate-200" />
                  <div className="flex items-center gap-1.5 text-orange-700 bg-orange-50 px-3 py-1 rounded-full border border-orange-200 font-semibold">
                    <Clock className="w-3.5 h-3.5 text-[#FF6B00]" />
                    <span>TIMELINE: {currentStep.duration}</span>
                  </div>
                </div>

                <h3 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
                  {currentStep.title}
                </h3>

                <p className="mt-5 text-sm sm:text-base text-slate-600 leading-relaxed">
                  {currentStep.description}
                </p>

                {/* Navigation Buttons */}
                <div className="mt-8 flex items-center gap-3">
                  <button
                    disabled={activeStep === 0}
                    onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-mono border border-slate-300 text-slate-700 disabled:opacity-25 disabled:cursor-not-allowed hover:bg-slate-50 btn-tactile"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>PREVIOUS PHASE</span>
                  </button>
                  <button
                    disabled={activeStep === PROCESS_STEPS.length - 1}
                    onClick={() => setActiveStep((prev) => Math.min(PROCESS_STEPS.length - 1, prev + 1))}
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-mono font-bold bg-[#FF6B00] text-white hover:bg-[#EA580C] disabled:opacity-25 disabled:cursor-not-allowed shadow-md shadow-orange-500/25 btn-tactile"
                  >
                    <span>NEXT PHASE</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Deliverables Manifest Box */}
              <div className="lg:col-span-5 bg-slate-50 p-6 sm:p-7 rounded-2xl border border-slate-200 font-mono">
                <div className="text-xs uppercase tracking-wider text-[#FF6B00] font-bold mb-4 pb-3 border-b border-slate-200 flex items-center justify-between">
                  <span>PHASE DELIVERABLES MANIFEST</span>
                  <span className="text-emerald-600 font-bold">VERIFIABLE</span>
                </div>
                <ul className="space-y-3.5 text-xs text-slate-700">
                  {deliverables.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#FF6B00] flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
