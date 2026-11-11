import React from 'react';
import { Zap, Server, Code, ShieldCheck, CheckCircle2, ArrowUpRight } from 'lucide-react';

const BENCHMARKS = [
  {
    index: '01',
    metric: '< 50ms',
    label: 'Edge Latency P99',
    slo: 'Verified via 32 Anycast Edge PoPs',
    detail: 'Requests terminate at the closest edge worker with warm memory caches, guaranteeing sub-50ms roundtrip delivery for 99% of global user traffic.'
  },
  {
    index: '02',
    metric: '99.99%',
    label: 'Architecture Availability SLA',
    slo: 'Multi-region Kubernetes Orchestration',
    detail: 'Stateless services with automated health checks, self-healing container restarts, and zero-downtime rolling canary deployments.'
  },
  {
    index: '03',
    metric: '100%',
    label: 'Type-Safe Software Contracts',
    slo: 'Strict Schema & API Synchronization',
    detail: 'Eliminating runtime type drift through automated tRPC, OpenAPI, and SQL migration type generation from database layer to React frontends.'
  },
  {
    index: '04',
    metric: 'Zero-Trust',
    label: 'Security & Compliance Guardrails',
    slo: 'OWASP Top-10 & SOC 2 Type II Aligned',
    detail: 'Automated static code security analysis (SAST), dependency vulnerability audits, mutual TLS internal communication, and encrypted secrets vaulting.'
  }
];

export const StatsSection: React.FC = () => {
  return (
    <section id="capabilities" className="relative py-24 px-4 sm:px-6 lg:px-8 border-y border-slate-200 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto">
        
        {/* Editorial Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 pb-8 border-b border-slate-200">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2 text-xs font-mono text-[#FF6B00] mb-3">
              <span>01 // INFRASTRUCTURE SLOS</span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-500 font-semibold">VERIFIED MEASUREMENTS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Built on Modern Infrastructure. Measured by Hard SLOs.
            </h2>
          </div>
          <div className="lg:col-span-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
            We reject vanity metrics. Every system SAHIX engineers is benchmarked against real-world latency, availability, and cryptographic integrity targets.
          </div>
        </div>

        {/* Asymmetric Benchmark Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BENCHMARKS.map((item) => (
            <div
              key={item.index}
              className="relative p-7 rounded-2xl bg-white border border-slate-200/90 hover:border-orange-500/50 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-xl hover:shadow-orange-500/5"
            >
              {/* Header: Index & SLO tag */}
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5 font-mono text-xs text-slate-500">
                  <span>SPEC [{item.index}]</span>
                  <span className="text-orange-600 flex items-center gap-1 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>ENFORCED</span>
                  </span>
                </div>

                {/* Big Metric Display */}
                <div className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-mono group-hover:text-[#FF6B00] transition-colors">
                  {item.metric}
                </div>

                <div className="text-sm font-bold text-slate-900 mt-2">
                  {item.label}
                </div>

                <div className="text-xs font-mono text-[#EA580C] font-semibold mt-1">
                  {item.slo}
                </div>

                <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                  {item.detail}
                </p>
              </div>

              {/* Card Footer Line */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>TARGET: CONTINUOUS</span>
                <span className="group-hover:text-[#FF6B00] font-semibold transition-colors">SPECIFICATION →</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
