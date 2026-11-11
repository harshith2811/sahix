'use client';

import React from 'react';
import { MessageSquare } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/15551234567?text=Hello%20SAHIX%20team,%20I'd%20like%20to%20discuss%20a%20software%20project."
      target="_blank"
      rel="noreferrer"
      aria-label="Direct WhatsApp Consultation"
      className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.35)] hover:shadow-[0_10px_40px_rgba(37,211,102,0.6)] hover:scale-110 transition-all duration-300 flex items-center gap-2 group"
    >
      <MessageSquare className="w-6 h-6 fill-white text-white" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 text-xs font-bold text-white px-0 group-hover:pr-2">
        Chat with Solutions Architect
      </span>
    </a>
  );
};
