import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Terminal, Sparkles, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-4 flex items-center justify-center bg-[#FAFAFA]">
      <div className="w-full max-w-lg rounded-3xl bg-white border border-slate-200 p-8 sm:p-12 text-center shadow-xl flex flex-col items-center">
        
        <div className="w-16 h-16 rounded-2xl bg-orange-50 border border-orange-200 flex items-center justify-center text-[#FF6B00] mb-6 shadow-sm">
          <Terminal className="w-8 h-8" />
        </div>

        <span className="text-xs font-mono text-[#FF6B00] uppercase tracking-wider font-bold">
          ERROR 404 • ROUTE UNRESOLVED
        </span>

        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 mt-2">
          Page Not Found
        </h1>

        <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm">
          The requested route does not exist in our production cluster or has been migrated to a new architectural namespace.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 w-full">
          <Link
            href="/"
            className="w-full sm:w-1/2 py-3 rounded-xl bg-gradient-to-r from-[#FF7A00] to-[#E64500] text-white font-bold text-xs uppercase tracking-wider hover:opacity-95 shadow-[0_4px_14px_rgba(255,107,0,0.35)] transition-opacity flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </Link>

          <Link
            href="/services"
            className="w-full sm:w-1/2 py-3 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 font-semibold text-xs uppercase tracking-wider hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"
          >
            <span>Explore Services</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
