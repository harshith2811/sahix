import React from 'react';
import { ContactForm } from '@/components/forms/ContactForm';
import { Mail, MessageSquare, Clock, ShieldCheck } from 'lucide-react';

export const metadata = {
  title: 'Contact SAHIX | Book a Technical Consultation',
  description: 'Initiate your software project discovery with SAHIX. Reach our solutions architects directly via form, email, or WhatsApp.'
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* Editorial Header */}
      <div className="border-b border-slate-200 pb-10">
        <div className="flex items-center gap-2 text-xs font-mono text-[#FF6B00] font-semibold mb-3">
          <span>04 // DIRECT ARCHITECT ACCESS</span>
          <span className="text-slate-300">•</span>
          <span className="text-slate-500">RAPID DISCOVERY DISPATCH</span>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-[1.08] uppercase">
              Initiate Technical <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-800 to-[#FF6B00]">
                Discovery & Consultation
              </span>
            </h1>
          </div>
          <div className="lg:col-span-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
            Connect directly with our senior software architects. Every new initiative receives a technical feasibility analysis within 4 hours.
          </div>
        </div>

        {/* 3 Hard Facts Bar */}
        <div className="mt-8 pt-6 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono">
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <div className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold">RESPONSE SLA</div>
            <div className="text-sm font-bold text-slate-900 mt-0.5">&lt; 4 Hours Guaranteed</div>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <div className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold">CONFIDENTIALITY</div>
            <div className="text-sm font-bold text-[#EA580C] mt-0.5">Mutual NDA Enforced</div>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <div className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold">DELIVERABLE</div>
            <div className="text-sm font-bold text-slate-900 mt-0.5">Free Architecture Spec</div>
          </div>
        </div>
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-7 rounded-3xl bg-white border border-slate-200 hover:border-[#FF6B00] shadow-sm transition-colors flex items-start gap-4">
          <div className="p-3 rounded-2xl bg-orange-50 text-[#FF6B00] border border-orange-200">
            <Mail className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-mono text-slate-500 uppercase tracking-wider font-semibold">DIRECT EMAIL</div>
            <a href="mailto:solutions@sahix.digital" className="text-sm font-bold text-slate-900 hover:text-[#FF6B00] mt-1 block font-mono">
              solutions@sahix.digital
            </a>
            <div className="text-[11px] text-slate-500 mt-1">Average reply: &lt; 4 hours</div>
          </div>
        </div>

        <div className="p-7 rounded-3xl bg-white border border-slate-200 hover:border-emerald-500 shadow-sm transition-colors flex items-start gap-4">
          <div className="p-3 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200">
            <MessageSquare className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-mono text-slate-500 uppercase tracking-wider font-semibold">WHATSAPP DISPATCH</div>
            <a href="https://wa.me/15551234567" target="_blank" rel="noreferrer" className="text-sm font-bold text-slate-900 hover:text-emerald-600 mt-1 block font-mono">
              +1 (555) 123-4567
            </a>
            <div className="text-[11px] text-slate-500 mt-1">Direct architect briefing line</div>
          </div>
        </div>

        <div className="p-7 rounded-3xl bg-white border border-slate-200 hover:border-orange-400 shadow-sm transition-colors flex items-start gap-4">
          <div className="p-3 rounded-2xl bg-orange-50 text-[#EA580C] border border-orange-200">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-mono text-slate-500 uppercase tracking-wider font-semibold">GLOBAL COVERAGE</div>
            <div className="text-sm font-bold text-slate-900 mt-1">24/7 Distributed Squads</div>
            <div className="text-[11px] text-slate-500 mt-1">New York • Zurich • Singapore</div>
          </div>
        </div>
      </div>

      {/* Main Interactive Contact Form */}
      <ContactForm />
    </div>
  );
}
