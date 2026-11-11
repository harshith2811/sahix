'use client';

import React from 'react';
import Link from 'next/link';
import { soundManager } from '@/lib/audio';

interface BeamButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'dark';
  className?: string;
  title?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const BeamButton: React.FC<BeamButtonProps> = ({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  title,
  type = 'button',
  disabled = false,
}) => {
  const handleClick = (e: React.MouseEvent) => {
    soundManager.play('click');
    if (onClick) onClick();
  };

  const baseStyle =
    'relative inline-flex items-center justify-center font-bold transition-all duration-200 btn-tactile btn-beam disabled:opacity-50 disabled:pointer-events-none select-none';

  const variants = {
    primary:
      'bg-gradient-to-r from-[#FF7A00] to-[#E64500] text-white shadow-[0_4px_18px_rgba(255,107,0,0.32)] hover:shadow-[0_6px_24px_rgba(255,107,0,0.45)] border border-orange-400/30',
    secondary:
      'bg-white text-slate-800 border border-slate-300 hover:border-orange-400 hover:bg-orange-50/40 hover:text-orange-700 shadow-xs',
    dark:
      'bg-[#0D1117] text-white border border-slate-800 hover:border-orange-500 shadow-lg shadow-black/30',
  };

  const combinedClass = `${baseStyle} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} onClick={handleClick} className={combinedClass} title={title}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={handleClick}
      className={combinedClass}
      title={title}
    >
      {children}
    </button>
  );
};
