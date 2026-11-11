'use client';

import React, { useRef, useState, useEffect } from 'react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: 'subtle' | 'standard' | 'high';
  showBeam?: boolean;
  glowColor?: string;
  onClick?: () => void;
}

export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  intensity = 'standard',
  showBeam = true,
  glowColor = 'rgba(255, 107, 0, 0.15)',
  onClick,
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50, active: false });
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(media.matches);
    const listener = () => setIsReducedMotion(media.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, []);

  const maxTilt = intensity === 'subtle' ? 4 : intensity === 'high' ? 10 : 6;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isReducedMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    setRotation({ x: rotateX, y: rotateY });
    setSpotlight({
      x: Math.round((x / rect.width) * 100),
      y: Math.round((y / rect.height) * 100),
      active: true,
    });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setSpotlight((prev) => ({ ...prev, active: false }));
  };

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group/tilt relative transition-transform duration-300 ease-out will-change-transform ${className}`}
      style={{
        transform: isReducedMotion
          ? 'none'
          : `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
      }}
    >
      {/* Traveling Border Beam Glow Overlay */}
      {showBeam && (
        <div
          className="border-beam-overlay"
          aria-hidden="true"
        />
      )}

      {/* Interactive dynamic cursor spotlight */}
      {spotlight.active && !isReducedMotion && (
        <div
          className="pointer-events-none absolute -inset-px rounded-[inherit] z-20 opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 280px at ${spotlight.x}% ${spotlight.y}%, ${glowColor}, transparent 75%)`,
          }}
          aria-hidden="true"
        />
      )}

      {children}
    </div>
  );
};
