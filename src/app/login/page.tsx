'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Logo } from '@/components/ui/Logo';
import { Lock, Mail, ArrowRight, UserCheck, Shield, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();
  const [role, setRole] = useState<'client' | 'admin'>('client');
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (role === 'admin') {
      router.push('/admin');
    } else {
      router.push('/dashboard');
    }
  };

  return (
    <div className="min-h-screen pt-28 pb-16 px-4 flex items-center justify-center bg-[#FAFAFA]">
      <div className="w-full max-w-md rounded-3xl bg-white border border-slate-200 p-8 sm:p-10 shadow-xl flex flex-col items-center">
        
        <Logo size="md" className="mb-6" />

        <div className="flex rounded-xl bg-slate-100 p-1 border border-slate-200 w-full mb-6">
          <button
            type="button"
            onClick={() => setRole('client')}
            className={`w-1/2 py-2 rounded-lg text-xs font-semibold transition-all ${
              role === 'client' ? 'bg-[#FF6B00] text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Client Portal
          </button>
          <button
            type="button"
            onClick={() => setRole('admin')}
            className={`w-1/2 py-2 rounded-lg text-xs font-semibold transition-all ${
              role === 'admin' ? 'bg-[#FF6B00] text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Admin CRM
          </button>
        </div>

        <h1 className="text-xl font-bold text-slate-900 text-center">
          {role === 'admin'
            ? 'Administrator Access Control'
            : isRegister
            ? 'Create Your Client Account'
            : 'Access Your Project Portal'}
        </h1>
        <p className="text-xs text-slate-600 text-center mt-1 mb-6">
          {role === 'admin'
            ? 'Authorized personnel only. Logs monitored.'
            : 'Track real-time sprints, milestones, and deliverables.'}
        </p>

        <form onSubmit={handleSubmit} className="w-full space-y-4">
          {isRegister && role === 'client' && (
            <div>
              <label className="text-[11px] font-mono uppercase text-slate-700 font-semibold block mb-1">
                Full Legal Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="David Sterling"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#FF6B00] focus:bg-white transition-colors"
              />
            </div>
          )}

          <div>
            <label className="text-[11px] font-mono uppercase text-slate-700 font-semibold block mb-1">
              Email Address
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={role === 'admin' ? 'admin@sahix.digital' : 'client@enterprise.com'}
                className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#FF6B00] focus:bg-white transition-colors"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="text-[11px] font-mono uppercase text-slate-700 font-semibold">
                Password
              </label>
              {!isRegister && (
                <button
                  type="button"
                  onClick={() => alert('Demo environment: Enter any password to proceed.')}
                  className="text-[10px] text-[#FF6B00] hover:underline font-semibold"
                >
                  Forgot password?
                </button>
              )}
            </div>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#FF6B00] focus:bg-white transition-colors"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-[#FF7A00] to-[#E64500] text-white font-bold text-xs uppercase tracking-wider hover:opacity-95 shadow-[0_4px_14px_rgba(255,107,0,0.35)] flex items-center justify-center gap-2 mt-2 transition-opacity"
          >
            <span>{isRegister ? 'Register Project Profile' : 'Authenticate & Enter'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {role === 'client' && (
          <div className="mt-6 text-center text-xs text-slate-600">
            {isRegister ? (
              <span>
                Already have an assigned portal?{' '}
                <button onClick={() => setIsRegister(false)} className="text-[#FF6B00] hover:underline font-semibold">
                  Sign In
                </button>
              </span>
            ) : (
              <span>
                First-time enterprise client?{' '}
                <button onClick={() => setIsRegister(true)} className="text-[#FF6B00] hover:underline font-semibold">
                  Register Profile
                </button>
              </span>
            )}
          </div>
        )}

        <div className="mt-6 pt-4 border-t border-slate-200 w-full flex items-center justify-center gap-2 text-[10px] text-slate-500 font-mono">
          <Shield className="w-3 h-3 text-[#FF6B00]" />
          <span>256-bit TLS Encrypted Session</span>
        </div>
      </div>
    </div>
  );
}
