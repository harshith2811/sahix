'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SERVICES } from '@/lib/data';
import { 
  Code2, 
  Smartphone, 
  Cpu, 
  Terminal, 
  Cloud, 
  Layout, 
  ShoppingBag, 
  Zap, 
  ArrowRight,
  CheckCircle2,
  Layers,
  Sparkles
} from 'lucide-react';
import { soundManager } from '@/lib/audio';
import { TiltCard } from '../ui/TiltCard';

const ICON_MAP: Record<string, React.ElementType> = {
  Globe: Code2,
  Smartphone: Smartphone,
  Cpu: Cpu,
  Terminal: Terminal,
  Cloud: Cloud,
  Layout: Layout,
  ShoppingBag: ShoppingBag,
  Zap: Zap,
};

export const ServicesSection: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const activeService = SERVICES[selectedIdx] || SERVICES[0];
  const ActiveIcon = ICON_MAP[activeService.iconName] || Code2;

  const handleSelectService = (idx: number) => {
    soundManager.play('switch');
    setSelectedIdx(idx);
  };

  return (
    <section id="services" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200">
      
      {/* Background ambient lighting */}
      <div 
        className="pointer-events-none absolute top-1/3 right-10 w-[600px] h-[600px] rounded-full z-0 opacity-25"
        style={{
          background: 'radial-gradient(circle, rgba(255, 107, 0, 0.15) 0%, transparent 70%)',
          filter: 'blur(90px)'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 pb-8 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#FF6B00] mb-3">
              <span>02 // ARCHITECTURAL CAPABILITIES</span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-500 font-semibold">8 DISCIPLINES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Full-Lifecycle Digital Engineering.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md leading-relaxed">
            Select a discipline to inspect architectural deliverables, verified technology stacks, and deployment investment tiers.
          </p>
        </div>

        {/* Master-Detail Architectural Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: 8 Disciplines Master Selector */}
          <div className="lg:col-span-5 flex flex-col gap-2.5">
            {SERVICES.map((service, idx) => {
              const Icon = ICON_MAP[service.iconName] || Code2;
              const isSelected = idx === selectedIdx;

              return (
                <button
                  key={service.id}
                  onClick={() => handleSelectService(idx)}
                  className={`p-4 sm:p-5 rounded-2xl border text-left transition-all duration-200 flex items-center justify-between group ${
                    isSelected
                      ? 'bg-orange-50/80 border-[#FF6B00] shadow-md shadow-orange-500/10'
                      : 'bg-[#FAFAFA] border-slate-200/80 hover:border-orange-300 hover:bg-orange-50/30'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                      isSelected
                        ? 'bg-[#FF6B00] text-white shadow-md shadow-orange-500/30'
                        : 'bg-white text-slate-500 border border-slate-200 group-hover:text-orange-600 group-hover:border-orange-200'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className={`text-[11px] font-mono font-bold ${isSelected ? 'text-[#EA580C]' : 'text-slate-400'}`}>
                          0{idx + 1}
                        </span>
                        <div className={`text-sm sm:text-base font-bold transition-colors ${
                          isSelected ? 'text-slate-950' : 'text-slate-800 group-hover:text-slate-950'
                        }`}>
                          {service.title}
                        </div>
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                        {service.technologies.slice(0, 3).join(' • ')}
                      </div>
                    </div>
                  </div>

                  <div className="text-right flex-shrink-0">
                    <div className="text-[11px] font-mono text-slate-400">FROM</div>
                    <div className="text-xs font-mono font-bold text-slate-900">{service.pricingStartingAt}</div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Architectural Detail Spotlight Workstation */}
          <div className="lg:col-span-7 sticky top-28">
            <TiltCard intensity="subtle" showBeam={true} className="rounded-3xl">
              <div className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200 shadow-xl backdrop-blur-2xl">
                
                {/* Spotlight Header */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#FF6B00] text-white flex items-center justify-center shadow-lg shadow-orange-500/25">
                      <ActiveIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-orange-600 font-bold uppercase tracking-wider">
                        DISCIPLINE SPECIFICATION [0{selectedIdx + 1}]
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
                        {activeService.title}
                      </h3>
                    </div>
                  </div>

                  <div className="px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-xs font-mono text-slate-800">
                    INVESTMENT: <span className="text-[#EA580C] font-bold">{activeService.pricingStartingAt}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-6 text-sm sm:text-base text-slate-600 leading-relaxed">
                  {activeService.fullDesc}
                </p>

                {/* Key Architectural Highlights */}
                <div className="mt-7">
                  <div className="text-xs font-mono uppercase text-slate-500 tracking-wider mb-3 font-semibold">
                    ENGINEERING HIGHLIGHTS & ARCHITECTURE
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeService.highlights.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-orange-50/50 border border-orange-100 text-xs text-slate-800 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#FF6B00] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Production Deliverables */}
                <div className="mt-6 pt-6 border-t border-slate-100">
                  <div className="text-xs font-mono uppercase text-slate-500 tracking-wider mb-3 font-semibold">
                    FORMAL PHASE DELIVERABLES
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                    {activeService.deliverables.map((deliv, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00]" />
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies Grid */}
                <div className="mt-6 pt-6 border-t border-slate-100 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-slate-500 mr-2 font-medium">TECH STACK:</span>
                  {activeService.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-xs font-mono text-slate-800 font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                  <Link
                    href={`/services/${activeService.slug}`}
                    onClick={() => soundManager.play('click')}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FF6B00] text-white font-bold text-xs sm:text-sm btn-tactile hover:bg-[#EA580C] shadow-lg shadow-orange-500/25"
                  >
                    <span>Inspect Full {activeService.title} Roadmap</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </Link>

                  <Link
                    href="/quote"
                    onClick={() => soundManager.play('click')}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-slate-300 text-slate-800 font-mono text-xs sm:text-sm hover:border-orange-400 hover:text-orange-600 transition-colors shadow-sm"
                  >
                    <span>Configure Quote →</span>
                  </Link>
                </div>

              </div>
            </TiltCard>
          </div>

        </div>

        {/* Tailored Squad Consultation Callout */}
        <div className="mt-16 p-7 sm:p-9 rounded-3xl bg-[#FFF9F5] border border-orange-200 shadow-lg shadow-orange-500/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-xl sm:text-2xl font-black text-slate-900">
              Need a hybrid cross-functional squad or enterprise SLA?
            </div>
            <div className="text-xs sm:text-sm text-slate-600 mt-1.5 max-w-2xl">
              We deploy dedicated pods with senior tech leads, full-stack engineers, and cloud architects integrated directly into your Slack or Teams workspace.
            </div>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <Link
              href="/contact"
              onClick={() => soundManager.play('click')}
              className="px-6 py-3 rounded-full bg-[#FF6B00] text-white font-bold text-xs sm:text-sm btn-tactile hover:bg-[#EA580C] shadow-lg shadow-orange-500/25"
            >
              Book Architecture Session
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};
