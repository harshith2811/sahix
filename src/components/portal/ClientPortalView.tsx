'use client';

import React, { useState } from 'react';
import { INITIAL_CLIENT_PROJECT } from '@/lib/data';
import { 
  CheckCircle2, 
  Clock, 
  FileText, 
  Download, 
  MessageSquare, 
  Calendar, 
  TrendingUp, 
  ShieldCheck,
  Send,
  UserCheck
} from 'lucide-react';

export const ClientPortalView: React.FC = () => {
  const [project, setProject] = useState(INITIAL_CLIENT_PROJECT);
  const [ticketMessage, setTicketMessage] = useState('');
  const [ticketSent, setTicketSent] = useState(false);

  const handleSendTicket = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ticketMessage.trim()) return;

    setProject({
      ...project,
      recentUpdates: [
        {
          date: 'Just now',
          message: `Client Ticket: ${ticketMessage}`,
          author: 'Client (You)'
        },
        ...project.recentUpdates
      ]
    });
    setTicketMessage('');
    setTicketSent(true);
    setTimeout(() => setTicketSent(false), 4000);
  };

  return (
    <div className="w-full max-w-7xl mx-auto space-y-8">
      {/* Top Banner / Client Welcome */}
      <div className="rounded-3xl bg-gradient-to-r from-orange-50 via-white to-orange-50 border border-orange-200 p-6 sm:p-8 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#EA580C] mb-2 font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>AUTHENTICATED CLIENT ENVIRONMENT • ID #{project.id}</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
            {project.title}
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Enterprise Client: <span className="text-slate-900 font-semibold">{project.clientName}</span> | Current Phase: <span className="text-[#FF6B00] font-semibold">{project.status}</span>
          </p>
        </div>

        <div className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex-shrink-0">
          <div>
            <div className="text-[11px] font-mono text-slate-400 uppercase">Target Launch</div>
            <div className="text-sm font-bold text-slate-900 flex items-center gap-1.5 mt-0.5">
              <Calendar className="w-4 h-4 text-[#FF6B00]" />
              <span>{project.targetLaunch}</span>
            </div>
          </div>
          <div className="h-8 w-[1px] bg-slate-200" />
          <div>
            <div className="text-[11px] font-mono text-slate-400 uppercase">Sprint Velocity</div>
            <div className="text-sm font-bold text-emerald-600 flex items-center gap-1 mt-0.5">
              <TrendingUp className="w-4 h-4" />
              <span>On Schedule</span>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
        <div className="flex items-center justify-between text-xs sm:text-sm mb-3">
          <span className="font-semibold text-slate-900">Overall Milestone Completion</span>
          <span className="font-mono font-bold text-[#FF6B00]">{project.progressPercentage}%</span>
        </div>
        <div className="w-full h-3 rounded-full bg-slate-100 overflow-hidden border border-slate-200">
          <div
            className="h-full bg-gradient-to-r from-[#FF7A00] to-[#E64500] rounded-full transition-all duration-700 shadow-[0_0_10px_rgba(255,107,0,0.3)]"
            style={{ width: `${project.progressPercentage}%` }}
          />
        </div>
      </div>

      {/* 2-Column Grid: Milestones & Deliverables */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Milestones */}
        <div className="lg:col-span-7 rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center justify-between">
              <span>Sprint Milestones Roadmap</span>
              <span className="text-xs font-mono text-slate-500">6 Phases</span>
            </h3>

            <div className="space-y-4">
              {project.milestones.map((m) => (
                <div
                  key={m.id}
                  className={`p-4 rounded-xl border flex items-center justify-between gap-4 transition-colors ${
                    m.completed
                      ? 'bg-emerald-50/60 border-emerald-200 text-slate-900'
                      : 'bg-slate-50 border-slate-200 text-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {m.completed ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    ) : (
                      <Clock className="w-5 h-5 text-[#FF6B00] flex-shrink-0" />
                    )}
                    <div>
                      <div className={`text-xs sm:text-sm font-semibold ${m.completed ? 'text-slate-900' : 'text-slate-800'}`}>
                        {m.title}
                      </div>
                      <div className="text-[11px] text-slate-500 mt-0.5">
                        Due: {m.dueDate}
                      </div>
                    </div>
                  </div>

                  <span className={`text-[10px] font-mono px-2.5 py-1 rounded-md uppercase font-semibold ${
                    m.completed ? 'bg-emerald-100 text-emerald-800' : 'bg-orange-100 text-orange-800'
                  }`}>
                    {m.completed ? 'Completed' : 'In Sprint'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Signed Deliverables & Direct Architect Feed */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Deliverables Card */}
          <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
            <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center justify-between">
              <span>Verified Artifacts & Specs</span>
              <ShieldCheck className="w-4 h-4 text-[#FF6B00]" />
            </h3>

            <div className="space-y-2.5">
              {project.deliverables.map((doc, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#FF6B00] transition-colors flex items-center justify-between"
                >
                  <div className="flex items-center gap-2.5 overflow-hidden">
                    <FileText className="w-4 h-4 text-[#FF6B00] flex-shrink-0" />
                    <div className="truncate">
                      <div className="text-xs font-semibold text-slate-900 truncate">{doc.name}</div>
                      <div className="text-[10px] text-slate-500">{doc.date} • {doc.size}</div>
                    </div>
                  </div>
                  <a
                    href={doc.downloadUrl}
                    onClick={(e) => { e.preventDefault(); alert(`Downloading signed artifact: ${doc.name}`); }}
                    className="p-2 rounded-lg bg-white border border-slate-200 hover:bg-[#FF6B00] hover:text-white transition-colors text-slate-600"
                    title="Download artifact"
                  >
                    <Download className="w-3.5 h-3.5" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Direct Support & Updates Feed */}
          <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
            <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-[#FF6B00]" />
              <span>Architect Dispatch & Feed</span>
            </h3>

            <div className="space-y-3 max-h-56 overflow-y-auto pr-1">
              {project.recentUpdates.map((u, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 mb-1">
                    <span className="font-semibold text-slate-700">{u.author}</span>
                    <span>{u.date}</span>
                  </div>
                  <p className="text-slate-700 leading-relaxed">
                    {u.message}
                  </p>
                </div>
              ))}
            </div>

            {/* Support Message Box */}
            <form onSubmit={handleSendTicket} className="mt-4 pt-4 border-t border-slate-200 space-y-2">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Post priority question to lead architect..."
                  value={ticketMessage}
                  onChange={(e) => setTicketMessage(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#FF6B00] focus:bg-white"
                />
                <button
                  type="submit"
                  className="p-2 rounded-xl bg-[#FF6B00] text-white hover:bg-[#EA580C] transition-colors"
                  aria-label="Send Message"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              {ticketSent && (
                <div className="text-[11px] text-emerald-600 font-medium">
                  Dispatch transmitted to project squad.
                </div>
              )}
            </form>
          </div>

        </div>

      </div>
    </div>
  );
};
