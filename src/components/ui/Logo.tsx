import React from 'react';
import Link from 'next/link';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true,
}) => {
  const iconDimensions = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
  }[size];

  const textSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
  }[size];

  const subSizes = {
    sm: 'text-[8px] tracking-[0.25em]',
    md: 'text-[10px] tracking-[0.3em]',
    lg: 'text-xs tracking-[0.35em]',
  }[size];

  return (
    <Link href="/" className={`inline-flex items-center gap-3 group select-none ${className}`}>
      {/* High-fidelity Vector Ribbon Knot Emblem recreating the reference image 2 */}
      <div className={`relative ${iconDimensions} flex-shrink-0 transition-transform duration-300 group-hover:scale-105`}>
        <svg
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_0_12px_rgba(255,107,0,0.6)]"
        >
          <defs>
            <linearGradient id="sahixOrangeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFA600" />
              <stop offset="50%" stopColor="#FF6B00" />
              <stop offset="100%" stopColor="#E64500" />
            </linearGradient>
            <linearGradient id="sahixGoldGlow" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFD166" />
              <stop offset="100%" stopColor="#FF5500" />
            </linearGradient>
            <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Intersecting Ribbon Loops */}
          <path
            d="M60 14 C40 14, 24 30, 24 50 C24 66, 38 80, 52 92 L60 100 L68 92 C82 80, 96 66, 96 50 C96 30, 80 14, 60 14 Z"
            fill="none"
            stroke="url(#sahixOrangeGrad)"
            strokeWidth="14"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 60 C14 40, 30 24, 50 24 C66 24, 80 38, 92 52 L100 60 L92 68 C80 82, 66 96, 50 96 C30 96, 14 80, 14 60 Z"
            fill="none"
            stroke="url(#sahixGoldGlow)"
            strokeWidth="14"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.9"
          />

          {/* Center Asterisk / Sparkle Icon */}
          <circle cx="60" cy="60" r="14" fill="#FFFFFF" stroke="#FF6B00" strokeWidth="2.5" />
          <path
            d="M60 52 L60 68 M52 60 L68 60 M54 54 L66 66 M54 66 L66 54"
            stroke="#FF6B00"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Top-Right Growth Icon Badge */}
          <circle cx="86" cy="34" r="11" fill="#FFFFFF" stroke="rgba(255,107,0,0.5)" strokeWidth="1.5" />
          <path
            d="M80 38 L83 34 L87 36 L92 30 M92 30 L88 30 M92 30 L92 34"
            stroke="#09090B"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Top-Left Network / Nodes Icon Badge */}
          <circle cx="34" cy="34" r="11" fill="#FFFFFF" stroke="rgba(255,107,0,0.5)" strokeWidth="1.5" />
          <circle cx="31" cy="32" r="2" fill="#09090B" />
          <circle cx="38" cy="30" r="2" fill="#09090B" />
          <circle cx="35" cy="38" r="2" fill="#09090B" />
          <path d="M31 32 L38 30 M31 32 L35 38" stroke="#09090B" strokeWidth="1.2" />

          {/* Bottom Code Bracket Icon Badge */}
          <circle cx="70" cy="86" r="11" fill="#FFFFFF" stroke="rgba(255,107,0,0.5)" strokeWidth="1.5" />
          <path
            d="M67 83 L64 86 L67 89 M73 83 L76 86 L73 89"
            stroke="#09090B"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Brand Wordmark */}
      <div className="flex flex-col">
        <div className={`font-black tracking-tight leading-none text-[#09090B] ${textSizes} flex items-center`}>
          <span>S</span>
          <span className="text-[#FF6B00] transition-colors duration-300 group-hover:text-[#EA580C]">A</span>
          <span>HIX</span>
        </div>
        {showSubtitle && (
          <div className={`text-[#64748B] font-medium uppercase mt-0.5 group-hover:text-[#09090B] transition-colors duration-200 flex items-center gap-1.5 ${subSizes}`}>
            <span className="w-2.5 h-[1px] bg-[#FF6B00]/70 inline-block"></span>
            DIGITAL SOFTWARE
            <span className="w-2.5 h-[1px] bg-[#FF6B00]/70 inline-block"></span>
          </div>
        )}
      </div>
    </Link>
  );
};
