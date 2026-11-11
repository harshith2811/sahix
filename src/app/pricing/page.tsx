import React from 'react';
import Link from 'next/link';
import { Check, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export const metadata = {
  title: 'Transparent Engineering Pricing Models | SAHIX',
  description: 'Predictable, milestone-driven pricing structures for seed startups to high-throughput enterprises.'
};

const TIERS = [
  {
    tierCode: '01 // SQUAD',
    name: 'Starter Architecture',
    tagline: 'Best for early MVPs, seed-stage startups, and rapid validation',
    startingAt: '$4,500',
    timeline: '3 - 5 Weeks',
    features: [
      'Production-ready Next.js / React web app',
      'PostgreSQL or Supabase relational backend',
      'User Auth (OAuth, Email, Magic Links)',
      'Tokenized Tailwind responsive design',
      'Automated Vercel / Cloud deployment CI/CD',
      '14-day post-launch warranty & bug fixes'
    ],
    popular: false,
    cta: 'Select Starter Squad'
  },
  {
    tierCode: '02 // SCALE',
    name: 'Scale & Growth',
    tagline: 'For funded scale-ups requiring high concurrency & deep integrations',
    startingAt: '$12,000',
    timeline: '6 - 9 Weeks',
    features: [
      'Full-stack Next.js + Native Mobile app (Flutter/RN)',
      'Event-driven microservices architecture',
      'Custom LLM / AI Copilot integration with RAG',
      'Stripe & multi-currency billing infrastructure',
      'Redis cache layer with sub-50ms p99 latency',
      'Figma interactive tokenized UI/UX prototype',
      'SOC 2 compliance-ready security hardening',
      '45-day post-launch hypercare support'
    ],
    popular: true,
    cta: 'Select Scale Squad'
  },
  {
    tierCode: '03 // BESPOKE',
    name: 'Enterprise Bespoke',
    tagline: 'Mission-critical distributed systems, high throughput & legacy modernization',
    startingAt: '$28,000+',
    timeline: '10 - 16 Weeks',
    features: [
      'Dedicated senior squad (Principal Architect, Senior Devs, QA, Designer)',
      'Multi-region Kubernetes / AWS Terraform infrastructure',
      'Zero-downtime blue/green deployment orchestration',
      'Proprietary ML training pipeline & custom vector search',
      'Enterprise SSO (SAML, Okta, Azure AD) & Audit logging',
      'Full penetration testing & vulnerability sign-off',
      'Custom SLA with guaranteed 1-hour critical response',
      'Comprehensive IP & code repository transfer'
    ],
    popular: false,
    cta: 'Consult Enterprise Solutions'
  }
];

export default function PricingPage() {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* Editorial Header */}
      <div className="border-b border-slate-200 pb-10">
        <div className="flex items-center gap-2 text-xs font-mono text-[#FF6B00] font-semibold mb-3">
          <span>02 // ENGAGEMENT TIERS</span>
          <span className="text-slate-300">•</span>
          <span className="text-slate-500">PREDICTABLE MILESTONE CONTRACTS</span>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-[1.08] uppercase">
              Transparent <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-800 to-[#FF6B00]">
                Investment Frameworks
              </span>
            </h1>
          </div>
          <div className="lg:col-span-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
            No unpredictable hourly billing surprises. Every engagement is governed by fixed deliverables, transparent sprint gates, and verified production benchmarks.
          </div>
        </div>

        {/* 3 Hard Facts Bar */}
        <div className="mt-8 pt-6 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono">
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <div className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold">HOURLY OVERAGES</div>
            <div className="text-sm font-bold text-slate-900 mt-0.5">$0.00 (Guaranteed Scope)</div>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <div className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold">DEPLOYMENT SLA</div>
            <div className="text-sm font-bold text-[#EA580C] mt-0.5">Automated CI/CD Included</div>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <div className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold">WARRANTY WINDOW</div>
            <div className="text-sm font-bold text-slate-900 mt-0.5">Up to 45 Days Hypercare</div>
          </div>
        </div>
      </div>

      {/* 3 Pricing Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {TIERS.map((tier) => (
          <div
            key={tier.name}
            className={`rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 relative ${
              tier.popular
                ? 'bg-gradient-to-b from-[#FFF9F5] to-white border-2 border-[#FF6B00] shadow-xl lg:-translate-y-3'
                : 'bg-white border border-slate-200 hover:border-[#FF6B00] shadow-sm'
            }`}
          >
            {tier.popular && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#FF6B00] text-white font-extrabold text-[11px] font-mono uppercase tracking-wider shadow-md">
                SELECTED BY 70% OF SCALE-UPS
              </div>
            )}

            <div>
              <div className="font-mono text-xs text-[#FF6B00] font-semibold mb-2">{tier.tierCode}</div>
              <div className="text-2xl font-bold text-slate-900">{tier.name}</div>
              <p className="text-xs text-slate-600 mt-2 min-h-[36px]">{tier.tagline}</p>

              <div className="mt-6 pb-6 border-b border-slate-200">
                <span className="text-xs font-mono text-slate-400">STARTING AT</span>
                <div className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mt-1 font-mono">
                  {tier.startingAt}
                </div>
                <div className="text-xs font-mono text-[#EA580C] font-semibold mt-1">
                  Delivery Window: {tier.timeline}
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <div className="text-[11px] font-mono uppercase text-slate-800 font-bold tracking-wider">
                  Contract Deliverables:
                </div>
                {tier.features.map((f, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                    <Check className="w-4 h-4 text-[#FF6B00] flex-shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200">
              <Link
                href="/quote"
                className={`w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 btn-tactile ${
                  tier.popular
                    ? 'bg-[#FF6B00] text-white hover:bg-[#EA580C] shadow-md shadow-[#FF6B00]/25'
                    : 'bg-slate-100 border border-slate-200 text-slate-800 hover:bg-slate-200 hover:border-slate-300'
                }`}
              >
                <span>{tier.cta}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Project Estimator CTA Callout */}
      <div className="rounded-3xl bg-[#FFF9F5] border border-orange-200 p-8 sm:p-12 text-center flex flex-col items-center shadow-md">
        <div className="p-3 rounded-2xl bg-orange-100 border border-orange-200 text-[#FF6B00] mb-4">
          <Zap className="w-7 h-7" />
        </div>
        <div className="text-xs font-mono text-[#EA580C] font-semibold uppercase tracking-wider mb-2">
          REAL-TIME SCOPE SYNTHESIS
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
          Need a Custom Multi-Module Calculation?
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mt-3 max-w-xl leading-relaxed">
          Use our interactive architectural estimator to configure technical platforms, AI pipelines, database schemas, and calculate realistic milestone budgets.
        </p>
        <Link
          href="/quote"
          className="mt-6 px-8 py-3.5 rounded-full bg-[#FF6B00] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#EA580C] transition-all shadow-[0_4px_14px_rgba(255,107,0,0.35)]"
        >
          Open Interactive Estimator
        </Link>
      </div>
    </div>
  );
}
