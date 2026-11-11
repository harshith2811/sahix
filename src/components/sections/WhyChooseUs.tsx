'use client';

import React from 'react';
import { Flame, Cpu, Layers, MessagesSquare, ShieldCheck, LifeBuoy, CheckCircle2 } from 'lucide-react';
import { TiltCard } from '../ui/TiltCard';

const GATES = [
  {
    gate: '01',
    title: 'Zero Low-Code Bloatware',
    commitment: 'Every component, database migration, and microservice is custom-authored for your precise business logic and scaling profile.'
  },
  {
    gate: '02',
    title: 'Battle-Tested Tech Foundation',
    commitment: 'Engineered exclusively on Next.js 14 App Router, TypeScript, Go, Rust, and Docker—eliminating legacy technical debt from Day 1.'
  },
  {
    gate: '03',
    title: 'Elastic Scalability Built-In',
    commitment: 'Stateless server architectures and distributed query caching allow seamless 10x traffic bursts without manual intervention.'
  },
  {
    gate: '04',
    title: 'Direct Architect Communication',
    commitment: 'No non-technical account managers. You collaborate directly with senior lead engineers via dedicated Slack channels and weekly demo builds.'
  },
  {
    gate: '05',
    title: 'Zero-Trust Security Hardening',
    commitment: 'Automated static security analysis (SAST), secrets vaulting, mutual TLS, and architectural compliance with SOC 2 Type II standards.'
  },
  {
    gate: '06',
    title: 'Continuous Post-Launch Evolution',
    commitment: '24/7 automated error capturing, proactive uptime monitoring, kernel patches, and rapid iterative roadmap sprints.'
  }
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: The SAHIX Manifesto */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="flex items-center gap-2 text-xs font-mono text-[#FF6B00] mb-3">
              <span>05 // THE SAHIX MANIFESTO</span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-500 font-semibold">DISCIPLINE</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.08]">
              Why Engineering Leaders Choose SAHIX.
            </h2>

            <p className="mt-6 text-sm sm:text-base text-slate-600 leading-relaxed">
              We bridge the divide between world-class visual art direction and rigorous computer science. We do not sell generic templates or bill for passive hours.
            </p>

            {/* Technical Verification Highlights */}
            <div className="mt-8 space-y-3 font-mono text-xs text-slate-600">
              <div className="p-4 rounded-xl bg-orange-50/60 border border-orange-100 flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span className="text-slate-900 font-medium">Direct access to Lead Architects (No middle layers)</span>
              </div>
              <div className="p-4 rounded-xl bg-orange-50/60 border border-orange-100 flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span className="text-slate-900 font-medium">Strict CI/CD automated test coverage on every merge</span>
              </div>
              <div className="p-4 rounded-xl bg-orange-50/60 border border-orange-100 flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span className="text-slate-900 font-medium">Transparent milestone-based contracts with zero lock-in</span>
              </div>
            </div>
          </div>

          {/* Right Column: 6 Engineering Verification Gates with Tactile Tilt */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {GATES.map((gate) => (
              <TiltCard
                key={gate.gate}
                intensity="subtle"
                showBeam={true}
                className="rounded-2xl"
              >
                <div className="p-6 sm:p-7 rounded-2xl bg-[#FAFAFA] border border-slate-200/90 hover:border-orange-500/50 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-xl hover:shadow-orange-500/5 h-full">
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4 font-mono text-xs text-slate-500">
                      <span>GATE // [{gate.gate}]</span>
                      <span className="text-orange-600 group-hover:text-[#EA580C] font-semibold transition-colors">VERIFIED</span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-orange-600 transition-colors mb-2.5">
                      {gate.title}
                    </h3>

                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                      {gate.commitment}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-100 text-[10px] font-mono text-slate-400 font-semibold">
                    GUARANTEED IN CONTRACT
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
