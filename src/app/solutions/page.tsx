import React from 'react';
import Link from 'next/link';
import { Sparkles, ShieldCheck, Zap, ArrowRight, Layers, Globe } from 'lucide-react';

export const metadata = {
  title: 'Industry Solutions | SAHIX',
  description: 'Specialized enterprise domain solutions for FinTech, Healthcare, Logistics, SaaS, and E-commerce.'
};

const INDUSTRIES = [
  {
    name: 'FinTech & Digital Banking',
    tagline: 'PCI-DSS Level 1 compliant ledgers, payment gateways, and trading desks',
    desc: 'We engineer event-driven transaction pipelines, algorithmic reconciliation engines, and multi-currency wallets that eliminate settlement delays and guarantee zero double-spends.',
    capabilities: ['Sub-50ms core banking ledgers', 'Real-time AML & fraud anomaly scoring', 'Stripe, Plaid, and SWIFT integrations'],
    href: '/projects/nexuspay-payment-engine'
  },
  {
    name: 'Healthcare & Life Sciences',
    tagline: 'HIPAA & HITECH compliant clinical copilots and telemedicine networks',
    desc: 'Empower clinicians with private, zero-data-leakage AI assistants, DICOM medical imaging viewers, and secure electronic health record (EHR/FHIR) sync architectures.',
    capabilities: ['Zero-knowledge HIPAA encrypted data stores', 'Private vision-language diagnostic models', 'HL7 / FHIR protocol bridges'],
    href: '/projects/aetherhealth-ai-copilot'
  },
  {
    name: 'Logistics, Freight & IoT Telemetry',
    tagline: 'Autonomous route optimization and multi-carrier telematics at scale',
    desc: 'Process tens of thousands of sensor and GPS pings per second with distributed time-series databases. Provide real-time freight tracking with automated cross-docking dispatch.',
    capabilities: ['TimescaleDB & Kafka stream ingestion', 'Dynamic Mapbox GL spatial routing', 'Offline-resilient driver mobile applications'],
    href: '/projects/omnilogix-supply-chain'
  },
  {
    name: 'Developer Platforms & DevOps',
    tagline: 'Containerized staging engines, microVM previews, and CI/CD tools',
    desc: 'Accelerate engineering velocity across your organization with self-service developer infrastructure, Firecracker microVM sandboxes, and automated pull-request staging clusters.',
    capabilities: ['3-second microVM environment provisioning', 'Terraform & Kubernetes cluster management', 'WireGuard mesh overlay networks'],
    href: '/projects/quantumscale-cloud-platform'
  }
];

export default function SolutionsPage() {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20">
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#EA580C] text-xs font-semibold mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#FF6B00]" />
          <span>Domain Expertise</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-tight">
          Solutions by Industry
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
          Deep vertical experience navigating regulatory requirements, security standards, and high-concurrency workloads.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {INDUSTRIES.map((ind, idx) => (
          <div
            key={idx}
            className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 hover:border-[#FF6B00] transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-md"
          >
            <div>
              <span className="text-[10px] font-mono text-[#FF6B00] uppercase tracking-wider font-bold">
                VERTICAL 0{idx + 1}
              </span>
              <h2 className="text-2xl font-bold text-slate-900 group-hover:text-[#FF6B00] transition-colors mt-1">
                {ind.name}
              </h2>
              <div className="text-xs font-mono text-[#EA580C] mt-1 font-semibold">
                {ind.tagline}
              </div>
              <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {ind.desc}
              </p>

              <div className="mt-6 space-y-2">
                {ind.capabilities.map((c, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#FF6B00]" />
                    <span>{c}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
              <Link
                href={ind.href}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FF6B00] group-hover:text-[#EA580C] transition-colors"
              >
                <span>Read Featured Case Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link href="/quote" className="text-xs text-slate-500 hover:text-slate-900 font-medium">
                Request Scope →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
