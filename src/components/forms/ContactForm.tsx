'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, MessageSquare, ShieldCheck, PhoneCall } from 'lucide-react';
import { Lead } from '@/types';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    email: '',
    phone: '',
    projectType: 'Web Development',
    budgetRange: '$15,000 - $30,000',
    description: '',
    honeypot: '' // anti-spam
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Spam honeypot detection
    if (formData.honeypot) {
      setStatus('success');
      return;
    }

    if (!formData.fullName || !formData.email || !formData.description) {
      setStatus('error');
      setErrorMessage('Please fill in all mandatory fields (Name, Email, Project Description).');
      return;
    }

    setStatus('submitting');

    try {
      // Create new Lead record
      const newLead: Lead = {
        id: 'lead-' + Date.now(),
        name: formData.fullName,
        businessName: formData.businessName,
        email: formData.email,
        phone: formData.phone,
        projectType: formData.projectType,
        budgetRange: formData.budgetRange,
        description: formData.description,
        status: 'New',
        createdAt: new Date().toISOString(),
        source: 'Website Contact Page'
      };

      // Store in browser database (localStorage)
      const existingLeads = JSON.parse(localStorage.getItem('sahix_leads') || '[]');
      localStorage.setItem('sahix_leads', JSON.stringify([newLead, ...existingLeads]));

      // Simulate network request
      await new Promise((resolve) => setTimeout(resolve, 800));

      setStatus('success');
      setFormData({
        fullName: '',
        businessName: '',
        email: '',
        phone: '',
        projectType: 'Web Development',
        budgetRange: '$15,000 - $30,000',
        description: '',
        honeypot: ''
      });
    } catch (err) {
      console.error(err);
      setStatus('error');
      setErrorMessage('An error occurred while transmitting your request. Please try contacting via WhatsApp directly.');
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto rounded-3xl bg-white border border-slate-200 p-6 sm:p-10 shadow-xl">
      
      {status === 'success' ? (
        <div className="py-12 text-center flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5 border border-emerald-200">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900">Transmission Successful</h3>
          <p className="mt-3 text-sm text-slate-600 max-w-md">
            Thank you for reaching out to SAHIX. Your requirements have been logged into our lead pipeline and assigned to a Lead Solutions Architect.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <button
              onClick={() => setStatus('idle')}
              className="px-6 py-2.5 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold hover:bg-slate-200 transition-colors"
            >
              Submit Another Message
            </button>
            <a
              href="https://wa.me/15551234567"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-2.5 rounded-full bg-[#25D366] text-white text-xs font-bold hover:bg-[#1ebd59] transition-colors flex items-center gap-2 shadow-sm"
            >
              <MessageSquare className="w-4 h-4" />
              Chat on WhatsApp Now
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Initiate Project Discovery
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Tell us about your objectives. We will prepare an initial architecture blueprint.
              </p>
            </div>
            
            {/* WhatsApp shortcut button */}
            <a
              href="https://wa.me/15551234567?text=Hi%20SAHIX,%20I'd%20like%20to%20consult%20on%20a%20new%20software%20project"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold hover:bg-[#25D366] hover:text-white transition-all flex items-center gap-2 flex-shrink-0"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Direct</span>
            </a>
          </div>

          {/* Hidden spam honeypot field */}
          <input
            type="text"
            name="honeypot"
            value={formData.honeypot}
            onChange={handleChange}
            style={{ display: 'none' }}
            tabIndex={-1}
            autoComplete="off"
          />

          {status === 'error' && (
            <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="text-xs font-mono uppercase text-slate-700 font-semibold block mb-2">
                Full Name <span className="text-[#FF6B00]">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. David Sterling"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#FF6B00] focus:bg-white transition-colors"
              />
            </div>

            <div>
              <label className="text-xs font-mono uppercase text-slate-700 font-semibold block mb-2">
                Business / Entity Name
              </label>
              <input
                type="text"
                name="businessName"
                value={formData.businessName}
                onChange={handleChange}
                placeholder="e.g. Apex Dynamics Ltd"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#FF6B00] focus:bg-white transition-colors"
              />
            </div>

            <div>
              <label className="text-xs font-mono uppercase text-slate-700 font-semibold block mb-2">
                Work Email <span className="text-[#FF6B00]">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="david@company.com"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#FF6B00] focus:bg-white transition-colors"
              />
            </div>

            <div>
              <label className="text-xs font-mono uppercase text-slate-700 font-semibold block mb-2">
                Direct Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 019-2834"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#FF6B00] focus:bg-white transition-colors"
              />
            </div>

            <div>
              <label className="text-xs font-mono uppercase text-slate-700 font-semibold block mb-2">
                Project Category
              </label>
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#FF6B00] focus:bg-white transition-colors"
              >
                <option value="Web Development">Web Application / Platform</option>
                <option value="Mobile App Development">Mobile App (iOS/Android)</option>
                <option value="AI & Machine Learning">AI & Machine Learning / RAG</option>
                <option value="Custom Software">Custom Enterprise Software</option>
                <option value="Cloud Solutions">Cloud Infrastructure / DevOps</option>
                <option value="UI/UX Design">UI/UX Design Systems</option>
                <option value="E-Commerce">Headless E-Commerce</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-mono uppercase text-slate-700 font-semibold block mb-2">
                Anticipated Budget Range
              </label>
              <select
                name="budgetRange"
                value={formData.budgetRange}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#FF6B00] focus:bg-white transition-colors"
              >
                <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                <option value="$50,000 - $100,000">$50,000 - $100,000</option>
                <option value="$100,000+">$100,000+ (Enterprise)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-xs font-mono uppercase text-slate-700 font-semibold block mb-2">
              Project Description & Objectives <span className="text-[#FF6B00]">*</span>
            </label>
            <textarea
              name="description"
              required
              rows={4}
              value={formData.description}
              onChange={handleChange}
              placeholder="Outline what you are building, target users, any legacy systems to integrate, and timeline milestones..."
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#FF6B00] focus:bg-white transition-colors resize-none"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <ShieldCheck className="w-4 h-4 text-[#FF6B00]" />
              <span>Strict NDA Protected. Your technical IP is safe.</span>
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#FF7A00] to-[#E64500] text-white font-bold text-xs uppercase tracking-wider hover:opacity-95 shadow-[0_4px_14px_rgba(255,107,0,0.35)] transition-opacity flex items-center justify-center gap-2"
            >
              {status === 'submitting' ? (
                <span>Transmitting Data...</span>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Book Free Consultation</span>
                </>
              )}
            </button>
          </div>
        </form>
      )}

    </div>
  );
};
