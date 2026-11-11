'use client';

import React from 'react';
import Link from 'next/link';
import { Logo } from '../ui/Logo';
import { 
  Twitter, 
  Linkedin, 
  Github, 
  Instagram, 
  ArrowRight, 
  Mail, 
  MapPin, 
  Phone,
  ShieldCheck,
  Lock
} from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#F8F9FA] border-t border-slate-200 pt-20 pb-12 px-4 sm:px-6 lg:px-8 text-slate-600">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-200">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Logo size="md" />
            <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm">
              Future-driven software development company delivering cutting-edge web, mobile, AI, and distributed cloud solutions to businesses worldwide.
            </p>
            
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter / X"
                className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-[#FF6B00] hover:border-[#FF6B00] shadow-sm transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-[#FF6B00] hover:border-[#FF6B00] shadow-sm transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-[#FF6B00] hover:border-[#FF6B00] shadow-sm transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-[#FF6B00] hover:border-[#FF6B00] shadow-sm transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>

            <div className="mt-6 flex items-center gap-2 text-xs text-slate-500">
              <ShieldCheck className="w-4 h-4 text-[#FF6B00]" />
              <span>SOC 2 Type II Certified • PCI-DSS Compliant</span>
            </div>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-900 font-bold mb-4">
              Core Capabilities
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/services/web-development" className="text-slate-600 hover:text-[#FF6B00] transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/mobile-app-development" className="text-slate-600 hover:text-[#FF6B00] transition-colors">
                  Mobile Application Development
                </Link>
              </li>
              <li>
                <Link href="/services/ai-development" className="text-slate-600 hover:text-[#FF6B00] transition-colors">
                  AI & Machine Learning
                </Link>
              </li>
              <li>
                <Link href="/services/custom-software-development" className="text-slate-600 hover:text-[#FF6B00] transition-colors">
                  Custom Software Development
                </Link>
              </li>
              <li>
                <Link href="/services/cloud-solutions" className="text-slate-600 hover:text-[#FF6B00] transition-colors">
                  Cloud Solutions & DevOps
                </Link>
              </li>
              <li>
                <Link href="/services/ui-ux-design" className="text-slate-600 hover:text-[#FF6B00] transition-colors">
                  UI/UX Design Systems
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Solutions */}
          <div className="lg:col-span-2">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-900 font-bold mb-4">
              Company & Links
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/about" className="text-slate-600 hover:text-[#FF6B00] transition-colors">
                  About SAHIX
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-slate-600 hover:text-[#FF6B00] transition-colors">
                  Projects & Case Studies
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-slate-600 hover:text-[#FF6B00] transition-colors">
                  Pricing Models
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-slate-600 hover:text-[#FF6B00] transition-colors">
                  Industry Solutions
                </Link>
              </li>
              <li>
                <Link href="/process" className="text-slate-600 hover:text-[#FF6B00] transition-colors">
                  Our Process
                </Link>
              </li>
              <li>
                <Link href="/technologies" className="text-slate-600 hover:text-[#FF6B00] transition-colors">
                  Technology Stack
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-slate-600 hover:text-[#FF6B00] transition-colors">
                  Engineering Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-600 hover:text-[#FF6B00] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Portals & Newsletter */}
          <div className="lg:col-span-3 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-slate-900 font-bold mb-4">
                Client & Admin Access
              </div>
              <div className="flex flex-col gap-2">
                <Link
                  href="/dashboard"
                  className="px-3 py-2 rounded-xl bg-white border border-slate-200 text-xs font-medium text-slate-800 hover:border-[#FF6B00] shadow-sm transition-colors flex items-center justify-between"
                >
                  <span>Client Dashboard</span>
                  <Lock className="w-3.5 h-3.5 text-[#FF6B00]" />
                </Link>
                <Link
                  href="/admin"
                  className="px-3 py-2 rounded-xl bg-white border border-slate-200 text-xs font-medium text-[#FF6B00] hover:border-[#FF6B00] shadow-sm transition-colors flex items-center justify-between"
                >
                  <span>Admin CRM Portal</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#FF6B00]" />
                </Link>
              </div>

              <div className="mt-6">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-900 font-bold mb-2">
                  Stay Updated
                </div>
                <p className="text-[11px] text-slate-500 mb-2.5">
                  Monthly engineering breakthroughs, architecture patterns, and tech dispatches.
                </p>
                <form 
                  onSubmit={(e) => { 
                    e.preventDefault(); 
                    const target = e.currentTarget;
                    const input = target.querySelector('input') as HTMLInputElement;
                    if (input) input.value = '';
                    const btn = target.querySelector('button');
                    if (btn) {
                      btn.textContent = '✓ Subscribed';
                      setTimeout(() => { if (btn) btn.textContent = 'Submit'; }, 3000);
                    }
                  }} 
                  className="flex items-center gap-1.5"
                >
                  <input
                    type="email"
                    placeholder="Enter business email"
                    required
                    className="w-full px-3 py-2 rounded-xl bg-white border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#FF6B00]"
                  />
                  <button
                    type="submit"
                    className="px-3 py-2 rounded-xl bg-[#FF6B00] text-white font-semibold text-xs hover:bg-[#EA580C] shadow-sm btn-tactile transition-colors flex-shrink-0"
                    aria-label="Subscribe"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div>
            &copy; {new Date().getFullYear()} SAHIX Digital Software Inc. All rights reserved. Product names, logos, and brands are property of their respective owners.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-900 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-900 transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/quote" className="hover:text-[#FF6B00] transition-colors">
              Project Estimator
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
