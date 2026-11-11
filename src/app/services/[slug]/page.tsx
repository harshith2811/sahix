import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { SERVICES, PROJECTS } from '@/lib/data';
import { 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  HelpCircle, 
  Code2, 
  Layers, 
  ShieldCheck, 
  Zap, 
  Cpu, 
  Smartphone, 
  Terminal, 
  Cloud 
} from 'lucide-react';

interface Props {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export default function ServiceDetailPage({ params }: Props) {
  const service = SERVICES.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  // Related projects
  const relatedProjects = PROJECTS.slice(0, 2);

  const faqs = [
    {
      q: `How long does an enterprise ${service.title} project take to build?`,
      a: `Most custom engagements range from 4 to 12 weeks depending on scope, third-party integrations, and testing complexity. We deliver working increments every two-week sprint.`
    },
    {
      q: 'Do we own the full intellectual property and source code?',
      a: 'Yes, 100%. Upon commercial sign-off, all repository access, intellectual property, infrastructure code, and documentation are transferred exclusively to your entity.'
    },
    {
      q: 'How does SAHIX handle post-launch maintenance and continuous support?',
      a: 'We provide dedicated SLA-backed maintenance plans covering proactive 24/7 uptime monitoring, critical security patching, dependency upgrades, and ongoing feature sprints.'
    },
    {
      q: 'Can you integrate with our existing internal team and legacy systems?',
      a: 'Absolutely. We regularly operate as augmented specialized squads embedding alongside existing CTOs, product managers, and internal engineering teams.'
    }
  ];

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-24">
      {/* 1. Hero Section */}
      <div className="text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#EA580C] text-xs font-semibold mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#FF6B00]" />
          <span>Specialized Practice</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-tight">
          {service.title}
        </h1>
        <p className="mt-6 text-base sm:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
          {service.fullDesc}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/quote"
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#FF7A00] to-[#E64500] text-white font-bold text-xs uppercase tracking-wider hover:opacity-95 shadow-[0_4px_14px_rgba(255,107,0,0.35)] transition-all"
          >
            Configure {service.title} Estimate
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 font-semibold text-xs uppercase tracking-wider hover:bg-slate-200 transition-colors"
          >
            Schedule Technical Discovery
          </Link>
        </div>
      </div>

      {/* 2. What We Build & Key Deliverables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-orange-200 shadow-md">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Core Architectural Deliverables</h2>
          <p className="text-xs sm:text-sm text-slate-600 mb-6">
            Every engagement includes comprehensive production-hardened deliverables:
          </p>
          <div className="space-y-4">
            {service.deliverables.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-orange-50/60 border border-orange-100">
                <CheckCircle2 className="w-4 h-4 text-[#FF6B00] flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-800 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-md flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Strategic Business Impact</h2>
            <p className="text-xs sm:text-sm text-slate-600 mb-6">
              How our engineering directly enhances your operational throughput and ROI:
            </p>
            <div className="space-y-4">
              {service.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <Zap className="w-4 h-4 text-[#EA580C] flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-800 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
            <span>Baseline Starting Pricing:</span>
            <span className="text-slate-900 font-bold text-sm">{service.pricingStartingAt}</span>
          </div>
        </div>
      </div>

      {/* 3. Technologies Used */}
      <div className="rounded-3xl bg-slate-50 border border-slate-200 p-8 sm:p-12 shadow-sm">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 text-center mb-8">
          Vetted Technology Stack for {service.title}
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {service.technologies.map((tech) => (
            <div
              key={tech}
              className="px-5 py-3 rounded-2xl bg-white border border-slate-200 text-sm font-mono text-slate-800 flex items-center gap-2 hover:border-[#FF6B00] shadow-sm transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-[#FF6B00]" />
              <span>{tech}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Related Demonstrations / Projects */}
      <div>
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Relevant Case Studies</h2>
            <p className="text-xs text-slate-600 mt-1">Real-world applications delivered by our engineering squad</p>
          </div>
          <Link href="/projects" className="text-xs text-[#FF6B00] hover:underline font-semibold flex items-center gap-1">
            Browse All Projects <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {relatedProjects.map((p) => (
            <div key={p.id} className="rounded-2xl bg-white border border-slate-200 p-6 flex flex-col justify-between shadow-sm">
              <div>
                <span className="text-[10px] font-mono text-[#EA580C] uppercase tracking-wider font-semibold">{p.industry}</span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">{p.title}</h3>
                <p className="text-xs text-slate-600 mt-2 line-clamp-2">{p.summary}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-700">Lat. reduction: {p.metrics[0].value}</span>
                <Link href={`/projects/${p.slug}`} className="text-xs font-semibold text-[#FF6B00] hover:underline flex items-center gap-1">
                  View Architecture <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. FAQs */}
      <div>
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl font-extrabold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-xs text-slate-600 mt-1">Common queries regarding our {service.title} engineering engagements.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {faqs.map((faq, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-[#FF6B00] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-slate-900">{faq.q}</h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 6. Consultation CTA */}
      <div className="p-10 sm:p-14 rounded-3xl bg-[#FFF9F5] border border-orange-200 text-center flex flex-col items-center shadow-md">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
          Ready to kick off {service.title}?
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mt-3 max-w-lg">
          Get a transparent scope, itemized timeline, and dedicated squad allocation within 24 hours.
        </p>
        <div className="mt-8 flex items-center gap-4">
          <Link
            href="/quote"
            className="px-8 py-3.5 rounded-full bg-[#FF6B00] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#EA580C] shadow-md shadow-[#FF6B00]/25 transition-colors"
          >
            Launch Project Estimator
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3.5 rounded-full bg-white border border-slate-200 text-slate-800 text-xs font-semibold uppercase hover:bg-slate-50 transition-colors"
          >
            Contact Team
          </Link>
        </div>
      </div>
    </div>
  );
}
