import React from 'react';
import { Hero } from '@/components/hero/Hero';
import { StatsSection } from '@/components/sections/StatsSection';
import { LiveTelemetrySimulator } from '@/components/sections/LiveTelemetrySimulator';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { FeaturedProjects } from '@/components/sections/FeaturedProjects';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { ProcessTimeline } from '@/components/sections/ProcessTimeline';
import { TechStackGrid } from '@/components/sections/TechStackGrid';
import { Testimonials } from '@/components/sections/Testimonials';
import { CtaBanner } from '@/components/sections/CtaBanner';

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <StatsSection />
      <LiveTelemetrySimulator />
      <ServicesSection />
      <FeaturedProjects />
      <WhyChooseUs />
      <ProcessTimeline />
      <TechStackGrid />
      <Testimonials />
      <CtaBanner />
    </div>
  );
}
