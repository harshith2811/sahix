import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy | SAHIX Digital Software',
  description: 'Our data protection commitments, GDPR compliance, and non-disclosure standards.'
};

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Return to Home</span>
      </Link>

      <div className="flex items-center gap-3">
        <ShieldCheck className="w-8 h-8 text-[#FF6B00]" />
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900">
          Privacy Policy & Data Security
        </h1>
      </div>
      <p className="text-xs font-mono text-slate-500">
        Effective Date: November 05, 2026 • Version 2.4
      </p>

      <div className="max-w-none text-xs sm:text-sm text-slate-700 leading-relaxed space-y-6 bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900">1. Scope of Policy</h2>
        <p>
          SAHIX Digital Software Inc. (&ldquo;SAHIX&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;) is committed to protecting the privacy and security of our clients, prospective business partners, and website visitors. This privacy policy describes our practices regarding information collected via our website, project estimator, client dashboard, and direct technical consultations.
        </p>

        <h2 className="text-lg font-bold text-slate-900">2. Client Data & Source Code Ownership</h2>
        <p>
          We strictly adhere to zero-data-leakage engineering standards. All technical briefs, code repositories, database schemas, and proprietary algorithms disclosed during discovery or project execution are covered under our binding Mutual Non-Disclosure Agreement (NDA). We do not use client proprietary data to train public foundation models without explicit written consent.
        </p>

        <h2 className="text-lg font-bold text-slate-900">3. Information Collected</h2>
        <p>
          We collect standard professional business contact information when voluntarily submitted via our quotation forms or contact interfaces: Name, business email, organization name, phone number, and technical project scope requirements.
        </p>

        <h2 className="text-lg font-bold text-slate-900">4. GDPR & International Transfers</h2>
        <p>
          SAHIX complies with GDPR, CCPA, and international data transfer standards. You reserve the right to request deletion, rectification, or export of your personal contact records at any time by contacting privacy@sahix.digital.
        </p>
      </div>
    </div>
  );
}
