'use client';

import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  isAccent: boolean;
  pulsePhase: number;
}

export const HeroParticleCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let animationFrameId: number;
    let isVisible = true;
    let dpr = Math.min(typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1, 2);

    let width = canvas.parentElement?.clientWidth || window.innerWidth;
    let height = canvas.parentElement?.clientHeight || window.innerHeight;

    const resizeCanvas = () => {
      if (!canvas) return;
      width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.parentElement?.clientHeight || window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
      initParticles();
    };

    let mouse = {
      x: width * 0.7,
      y: height * 0.3,
      targetX: width * 0.7,
      targetY: height * 0.3,
      isActive: false,
    };

    const handleResize = () => {
      resizeCanvas();
    };

    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.isActive = true;
    };

    const handleMouseLeave = () => {
      mouse.isActive = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Pause animation when scrolled offscreen to conserve CPU/battery
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
          if (isVisible && !animationFrameId) {
            lastTime = performance.now();
            animationFrameId = requestAnimationFrame(render);
          }
        });
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);

    // Particle setup
    let particles: Particle[] = [];
    const count = Math.min(65, Math.max(25, Math.floor((width * height) / 18000)));

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < count; i++) {
        const isAccent = Math.random() < 0.24;
        const radius = isAccent ? Math.random() * 2 + 2 : Math.random() * 1.5 + 1;
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          radius,
          baseRadius: radius,
          isAccent,
          pulsePhase: Math.random() * Math.PI * 2,
        });
      }
    };

    resizeCanvas();

    let lastTime = performance.now();

    const render = (time: number) => {
      if (!isVisible) {
        animationFrameId = 0;
        return;
      }

      lastTime = time;
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.09;
      mouse.y += (mouse.targetY - mouse.y) * 0.09;

      // Mouse radiance gradient halo
      if (mouse.isActive && !prefersReducedMotion) {
        const mouseGradient = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          190
        );
        mouseGradient.addColorStop(0, 'rgba(255, 107, 0, 0.14)');
        mouseGradient.addColorStop(0.45, 'rgba(255, 120, 20, 0.05)');
        mouseGradient.addColorStop(1, 'rgba(255, 107, 0, 0)');
        ctx.fillStyle = mouseGradient;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 190, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw connections
      const maxDistance = 115;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.24;
            const hasAccent = particles[i].isAccent || particles[j].isAccent;
            ctx.strokeStyle = hasAccent
              ? `rgba(255, 107, 0, ${alpha * 1.6})`
              : `rgba(203, 213, 225, ${alpha})`;
            ctx.lineWidth = hasAccent ? 1.2 : 0.8;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Update & draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!prefersReducedMotion) {
          p.x += p.vx;
          p.y += p.vy;

          // Wrap edges smoothly
          if (p.x < -10) p.x = width + 10;
          if (p.x > width + 10) p.x = -10;
          if (p.y < -10) p.y = height + 10;
          if (p.y > height + 10) p.y = -10;

          // Mouse proximity repulsion
          if (mouse.isActive) {
            const mdx = p.x - mouse.x;
            const mdy = p.y - mouse.y;
            const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
            if (mDist < 130 && mDist > 0) {
              const force = (130 - mDist) / 130;
              p.x += (mdx / mDist) * force * 1.6;
              p.y += (mdy / mDist) * force * 1.6;
            }
          }

          p.pulsePhase += 0.03;
        }

        // Draw particle node
        ctx.beginPath();
        const pulse = p.isAccent ? Math.sin(p.pulsePhase) * 0.8 : 0;
        const currentRadius = Math.max(1, p.radius + pulse);
        ctx.arc(p.x, p.y, currentRadius, 0, Math.PI * 2);

        if (p.isAccent) {
          ctx.fillStyle = '#FF6B00';
          ctx.shadowColor = 'rgba(255, 107, 0, 0.45)';
          ctx.shadowBlur = 8;
        } else {
          ctx.fillStyle = 'rgba(148, 163, 184, 0.65)';
          ctx.shadowColor = 'transparent';
          ctx.shadowBlur = 0;
        }

        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0 opacity-80"
      aria-hidden="true"
    />
  );
};
