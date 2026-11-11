'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Shield, X, Check } from 'lucide-react';

export const CookieBanner: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem('sahix_cookie_consent');
      if (!consent) {
        const timer = setTimeout(() => setVisible(true), 1200);
        return () => clearTimeout(timer);
      }
    } catch {
      // LocalStorage access fallback
    }
  }, []);

  const handleConsent = (type: 'all' | 'essential') => {
    try {
      localStorage.setItem('sahix_cookie_consent', type);
    } catch {
      // fallback
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Privacy and Cookie Settings"
      className="fixed bottom-4 left-4 right-4 sm:right-auto sm:left-6 sm:max-w-md z-50 rounded-2xl bg-white/95 border border-orange-300 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.1),0_0_25px_rgba(255,107,0,0.1)] backdrop-blur-xl"
    >
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-xl bg-orange-50 text-[#FF6B00] border border-orange-200 flex-shrink-0 mt-0.5">
          <Shield className="w-4 h-4" />
        </div>
        <div className="flex-1 text-xs">
          <div className="font-semibold text-slate-900 mb-1 flex items-center justify-between">
            <span>Privacy & Technical Cookies</span>
            <button
              onClick={() => handleConsent('essential')}
              className="text-slate-400 hover:text-slate-800 p-0.5 rounded transition-colors"
              aria-label="Dismiss cookie notice"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <p className="text-slate-600 leading-relaxed mb-3">
            SAHIX uses telemetry to maintain cloud reliability and measure engineering performance SLOs. Read our{' '}
            <Link href="/privacy" className="text-orange-600 underline font-medium hover:text-orange-700">
              Privacy Policy
            </Link>.
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleConsent('all')}
              className="px-3.5 py-1.5 rounded-lg bg-[#FF6B00] text-white font-semibold text-xs btn-tactile hover:bg-[#EA580C] shadow-sm flex items-center gap-1.5"
            >
              <Check className="w-3 h-3 stroke-[3]" />
              <span>Accept All</span>
            </button>
            <button
              onClick={() => handleConsent('essential')}
              className="px-3 py-1.5 rounded-lg border border-slate-300 text-slate-700 hover:text-slate-900 hover:bg-slate-50 text-xs transition-colors"
            >
              Essential Only
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
