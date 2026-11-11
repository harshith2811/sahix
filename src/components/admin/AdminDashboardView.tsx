'use client';

import React, { useState, useEffect } from 'react';
import { INITIAL_LEADS, INITIAL_QUOTES } from '@/lib/data';
import { Lead, QuoteRequest, LeadStatus } from '@/types';
import { 
  Users, 
  FileText, 
  CheckCircle, 
  Clock, 
  DollarSign, 
  TrendingUp, 
  Filter, 
  Mail, 
  Phone, 
  Search,
  ExternalLink,
  ChevronDown
} from 'lucide-react';

const STATUS_COLORS: Record<LeadStatus, string> = {
  'New': 'bg-blue-50 text-blue-700 border-blue-200',
  'Contacted': 'bg-amber-50 text-amber-700 border-amber-200',
  'Qualified': 'bg-purple-50 text-purple-700 border-purple-200',
  'Proposal Sent': 'bg-orange-50 text-orange-700 border-orange-200',
  'Converted': 'bg-green-50 text-green-700 border-green-200',
  'Lost': 'bg-slate-100 text-slate-600 border-slate-200'
};

const STATUS_OPTIONS: LeadStatus[] = ['New', 'Contacted', 'Qualified', 'Proposal Sent', 'Converted', 'Lost'];

export const AdminDashboardView: React.FC = () => {
  const [leads, setLeads] = useState<Lead[]>(INITIAL_LEADS);
  const [quotes, setQuotes] = useState<QuoteRequest[]>(INITIAL_QUOTES);
  const [filterStatus, setFilterStatus] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'leads' | 'quotes'>('leads');

  useEffect(() => {
    try {
      const storedLeads = localStorage.getItem('sahix_leads');
      if (storedLeads) {
        setLeads([...JSON.parse(storedLeads), ...INITIAL_LEADS]);
      }
      const storedQuotes = localStorage.getItem('sahix_quotes');
      if (storedQuotes) {
        setQuotes([...JSON.parse(storedQuotes), ...INITIAL_QUOTES]);
      }
    } catch (e) {
      console.warn('Storage read warning', e);
    }
  }, []);

  const handleStatusChange = (leadId: string, newStatus: LeadStatus) => {
    const updated = leads.map((l) => (l.id === leadId ? { ...l, status: newStatus } : l));
    setLeads(updated);
    try {
      localStorage.setItem('sahix_leads', JSON.stringify(updated));
    } catch (e) {
      console.warn(e);
    }
  };

  const filteredLeads = leads.filter((lead) => {
    const matchesFilter = filterStatus === 'All' || lead.status === filterStatus;
    const matchesSearch =
      lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (lead.businessName && lead.businessName.toLowerCase().includes(searchQuery.toLowerCase())) ||
      lead.email.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const totalPipelineValue = leads.length * 35000;
  const newLeadsCount = leads.filter((l) => l.status === 'New').length;

  return (
    <div className="w-full max-w-7xl mx-auto space-y-8">
      
      {/* Admin Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#EA580C] mb-1 font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#FF6B00]" />
            <span>SAHIX CONTROL PLANE • ADMIN CRM</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Lead Pipeline & Quotation Analytics
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setActiveTab('leads')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'leads'
                ? 'bg-[#FF6B00] text-white shadow-sm'
                : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900'
            }`}
          >
            Direct Leads ({leads.length})
          </button>
          <button
            onClick={() => setActiveTab('quotes')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'quotes'
                ? 'bg-[#FF6B00] text-white shadow-sm'
                : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900'
            }`}
          >
            Quotes Configured ({quotes.length})
          </button>
        </div>
      </div>

      {/* KPI Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
            <span>Total Enquiries</span>
            <Users className="w-4 h-4 text-[#FF6B00]" />
          </div>
          <div className="text-3xl font-extrabold text-slate-900 mt-2">
            {leads.length + quotes.length}
          </div>
          <div className="text-[11px] text-emerald-600 mt-1 font-mono font-medium">
            +{newLeadsCount} requiring action
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
            <span>New Inbound Leads</span>
            <Clock className="w-4 h-4 text-[#FF6B00]" />
          </div>
          <div className="text-3xl font-extrabold text-slate-900 mt-2">
            {newLeadsCount}
          </div>
          <div className="text-[11px] text-slate-500 mt-1 font-mono">
            Sub-4hr response target
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
            <span>Pipeline Value (Est.)</span>
            <DollarSign className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="text-3xl font-extrabold text-slate-900 mt-2">
            ${totalPipelineValue.toLocaleString()}
          </div>
          <div className="text-[11px] text-emerald-600 mt-1 font-mono font-medium">
            Across active proposals
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
            <span>Conversion Velocity</span>
            <TrendingUp className="w-4 h-4 text-[#FF6B00]" />
          </div>
          <div className="text-3xl font-extrabold text-slate-900 mt-2">
            34.2%
          </div>
          <div className="text-[11px] text-slate-500 mt-1 font-mono">
            Discovery to Proposal
          </div>
        </div>
      </div>

      {activeTab === 'leads' ? (
        /* Leads View */
        <div className="rounded-2xl bg-white border border-slate-200 p-6 space-y-6 shadow-sm">
          {/* Filter Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search leads by client or email..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#FF6B00] focus:bg-white"
              />
            </div>

            <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
              <span className="text-xs text-slate-500 flex-shrink-0">Status:</span>
              {['All', ...STATUS_OPTIONS].map((status) => (
                <button
                  key={status}
                  onClick={() => setFilterStatus(status)}
                  className={`px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                    filterStatus === status
                      ? 'bg-[#FF6B00] text-white font-semibold'
                      : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>

          {/* Leads Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-600 font-mono uppercase text-[10px] tracking-wider border-b border-slate-200">
                <tr>
                  <th className="py-3 px-4">Contact & Business</th>
                  <th className="py-3 px-4">Project & Budget</th>
                  <th className="py-3 px-4">Description Snippet</th>
                  <th className="py-3 px-4">Current Status</th>
                  <th className="py-3 px-4">Created</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredLeads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-4">
                      <div className="font-bold text-slate-900 text-sm">{lead.name}</div>
                      <div className="text-slate-500 text-xs mt-0.5">{lead.businessName || 'Independent'}</div>
                      <div className="flex items-center gap-3 mt-1.5 text-[11px] text-slate-500">
                        <a href={`mailto:${lead.email}`} className="hover:text-slate-900 flex items-center gap-1">
                          <Mail className="w-3 h-3 text-[#FF6B00]" /> {lead.email}
                        </a>
                        {lead.phone && (
                          <a href={`tel:${lead.phone}`} className="hover:text-slate-900 flex items-center gap-1">
                            <Phone className="w-3 h-3 text-[#FF6B00]" /> {lead.phone}
                          </a>
                        )}
                      </div>
                    </td>

                    <td className="py-4 px-4">
                      <div className="font-semibold text-[#EA580C]">{lead.projectType}</div>
                      <div className="text-[11px] text-slate-500 mt-0.5 font-mono">{lead.budgetRange}</div>
                    </td>

                    <td className="py-4 px-4 max-w-xs">
                      <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                        {lead.description}
                      </p>
                    </td>

                    <td className="py-4 px-4">
                      <select
                        value={lead.status}
                        onChange={(e) => handleStatusChange(lead.id, e.target.value as LeadStatus)}
                        className={`px-2.5 py-1 rounded-lg text-xs font-semibold border focus:outline-none bg-white ${STATUS_COLORS[lead.status]}`}
                      >
                        {STATUS_OPTIONS.map((opt) => (
                          <option key={opt} value={opt} className="bg-white text-slate-900">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </td>

                    <td className="py-4 px-4 text-slate-500 font-mono text-[11px] whitespace-nowrap">
                      {new Date(lead.createdAt).toLocaleDateString()}
                    </td>

                    <td className="py-4 px-4 text-right">
                      <a
                        href={`https://wa.me/?text=Hello%20${encodeURIComponent(lead.name)},%20this%20is%20SAHIX%20regarding%20your%20project%20inquiry.`}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3 py-1 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold hover:bg-emerald-600 hover:text-white transition-colors inline-block"
                      >
                        WhatsApp
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        /* Quotes View */
        <div className="rounded-2xl bg-white border border-slate-200 p-6 space-y-4 shadow-sm">
          <h3 className="text-base font-bold text-slate-900 mb-2">
            Interactive Project Estimator Inbound Submissions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {quotes.map((q) => (
              <div key={q.id} className="p-5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 text-sm">{q.name}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-orange-100 text-orange-800 border border-orange-200 font-semibold">
                      {q.status}
                    </span>
                  </div>
                  <div className="text-xs text-slate-500 mt-1 font-mono">{q.email} • {q.phone}</div>

                  <div className="mt-4 pt-3 border-t border-slate-200 grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-slate-500">Scope:</span> <span className="text-slate-800 font-semibold">{q.projectType}</span>
                    </div>
                    <div>
                      <span className="text-slate-500">Estimated:</span> <span className="text-[#EA580C] font-bold">{q.estimatedPriceRange}</span>
                    </div>
                    <div>
                      <span className="text-slate-500">Timeline:</span> <span className="text-slate-800">{q.estimatedWeeks}</span>
                    </div>
                    <div>
                      <span className="text-slate-500">Fidelity:</span> <span className="text-slate-800">{q.designComplexity}</span>
                    </div>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-1">
                    {q.features.map((f, i) => (
                      <span key={i} className="text-[10px] bg-white border border-slate-200 px-2 py-0.5 rounded text-slate-700 font-medium">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-mono text-[10px]">
                    {new Date(q.createdAt).toLocaleDateString()}
                  </span>
                  <a
                    href={`mailto:${q.email}?subject=SAHIX%20Architectural%20Proposal%20for%20${encodeURIComponent(q.projectType)}`}
                    className="text-[#FF6B00] hover:underline font-semibold"
                  >
                    Send Proposal PDF →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};
