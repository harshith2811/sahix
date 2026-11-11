'use client';

import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Code2, 
  Smartphone, 
  Cpu, 
  Terminal, 
  Cloud, 
  Check, 
  Calculator, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck,
  Send,
  Sliders,
  DollarSign,
  PieChart,
  Zap,
  Timer,
  Users,
  Gauge
} from 'lucide-react';
import { QuoteRequest } from '@/types';
import { soundManager } from '@/lib/audio';
import { TiltCard } from '../ui/TiltCard';
import { BeamButton } from '../ui/BeamButton';

const PROJECT_TYPES = [
  { id: 'web', name: 'Web Application / SaaS', basePrice: 4500, baseWeeks: 4, icon: Code2 },
  { id: 'mobile', name: 'Mobile App (iOS/Android)', basePrice: 6000, baseWeeks: 6, icon: Smartphone },
  { id: 'ai', name: 'AI / LLM / Machine Learning', basePrice: 7500, baseWeeks: 5, icon: Cpu },
  { id: 'custom', name: 'Custom Enterprise Software', basePrice: 8500, baseWeeks: 8, icon: Terminal },
  { id: 'cloud', name: 'Cloud Infrastructure / DevOps', basePrice: 5000, baseWeeks: 3, icon: Cloud },
];

const PLATFORMS = ['Web (Desktop/Mobile)', 'iOS (Apple App Store)', 'Android (Google Play)', 'Cross-Platform (Flutter/RN)', 'Backend API Only'];

const FEATURES_LIST = [
  { id: 'auth', name: 'Advanced Auth & RBAC (Roles)', price: 800, weeks: 1 },
  { id: 'payments', name: 'Payment Gateway (Stripe/PayPal)', price: 1200, weeks: 1 },
  { id: 'ai_copilot', name: 'Custom AI Assistant / RAG', price: 3500, weeks: 2 },
  { id: 'realtime', name: 'Real-time WebSockets / Chat', price: 1500, weeks: 1 },
  { id: 'dashboard', name: 'Interactive Analytics Dashboard', price: 1800, weeks: 1.5 },
  { id: 'cms', name: 'Headless CMS Integration', price: 1000, weeks: 1 },
  { id: 'i18n', name: 'Multi-language Localization', price: 800, weeks: 0.5 },
  { id: 'offline', name: 'Offline Data Sync Resilience', price: 1600, weeks: 1.5 },
];

const DESIGN_COMPLEXITIES = [
  { id: 'clean', name: 'Clean & Functional (Modern Standard)', multiplier: 1.0 },
  { id: 'custom', name: 'Bespoke Brand System & Micro-animations', multiplier: 1.25 },
  { id: 'awwwards', name: 'Futuristic 3D / WebGL / Awwwards Level', multiplier: 1.6 },
];

interface SpeedTier {
  id: string;
  name: string;
  multiplier: number;
  speedBadge: string;
  reductionLabel: string;
  squadSetup: string;
}

const SPEED_TIERS: SpeedTier[] = [
  {
    id: 'standard',
    name: 'Standard Engineering Track',
    multiplier: 1.0,
    speedBadge: 'Standard Track (1.0x)',
    reductionLabel: 'Standard 2-week agile sprints',
    squadSetup: '1 Lead Architect • 2 Senior Full-Stack Engineers • 1 QA Specialist',
  },
  {
    id: 'accelerated',
    name: 'Fast Track (Dedicated Squad)',
    multiplier: 1.25,
    speedBadge: 'Fast Track (-25% Time)',
    reductionLabel: 'Accelerated delivery with dedicated full-time pod',
    squadSetup: '2 Lead Architects • 3 Senior Full-Stack Engineers • 1 DevOps • 1 QA',
  },
  {
    id: 'urgent',
    name: 'Blitz Priority Launch',
    multiplier: 1.45,
    speedBadge: 'Blitz Velocity (-40% Time)',
    reductionLabel: 'Max sprint speed: dual-shift development squad',
    squadSetup: '2 Principal Architects • 4 Senior Engineers • 2 DevOps • 2 QA Specialists',
  },
];

const CURRENCIES = [
  { code: 'USD', symbol: '$', rate: 1.0 },
  { code: 'EUR', symbol: '€', rate: 0.92 },
  { code: 'GBP', symbol: '£', rate: 0.79 },
];

export const ProjectEstimator: React.FC = () => {
  const [selectedType, setSelectedType] = useState('web');
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(['Web (Desktop/Mobile)']);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(['auth', 'dashboard']);
  const [designComplexity, setDesignComplexity] = useState('custom');
  const [speedIndex, setSpeedIndex] = useState(0);
  const [currencyIndex, setCurrencyIndex] = useState(0);
  const [activeHighlightSegment, setActiveHighlightSegment] = useState<string | null>(null);

  // Contact info
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const activeCurrency = CURRENCIES[currencyIndex];
  const activeSpeed = SPEED_TIERS[speedIndex] || SPEED_TIERS[0];

  // Toggle helpers
  const handleTypeSelect = (id: string) => {
    soundManager.play('switch');
    setSelectedType(id);
  };

  const togglePlatform = (p: string) => {
    soundManager.play('click');
    setSelectedPlatforms((prev) =>
      prev.includes(p) ? (prev.length > 1 ? prev.filter((item) => item !== p) : prev) : [...prev, p]
    );
  };

  const toggleFeature = (fId: string) => {
    soundManager.play('click');
    setSelectedFeatures((prev) =>
      prev.includes(fId) ? prev.filter((id) => id !== fId) : [...prev, fId]
    );
  };

  const handleCurrencyChange = (idx: number) => {
    soundManager.play('switch');
    setCurrencyIndex(idx);
  };

  // Calculation
  const currentTypeObj = PROJECT_TYPES.find((t) => t.id === selectedType) || PROJECT_TYPES[0];
  const designObj = DESIGN_COMPLEXITIES.find((d) => d.id === designComplexity) || DESIGN_COMPLEXITIES[0];

  const featuresPriceUSD = selectedFeatures.reduce((acc, fId) => {
    const item = FEATURES_LIST.find((f) => f.id === fId);
    return acc + (item ? item.price : 0);
  }, 0);

  const featuresWeeks = selectedFeatures.reduce((acc, fId) => {
    const item = FEATURES_LIST.find((f) => f.id === fId);
    return acc + (item ? item.weeks : 0);
  }, 0);

  const platformCountMultiplier = 1 + (selectedPlatforms.length - 1) * 0.2;

  const rawTotalUSD = (currentTypeObj.basePrice + featuresPriceUSD) * designObj.multiplier * activeSpeed.multiplier * platformCountMultiplier;
  const rate = activeCurrency.rate;
  const minPrice = Math.round(((rawTotalUSD * 0.9) * rate) / 100) * 100;
  const maxPrice = Math.round(((rawTotalUSD * 1.15) * rate) / 100) * 100;

  const speedDivisor = speedIndex === 2 ? 1.4 : speedIndex === 1 ? 1.2 : 1.0;
  const rawWeeks = (currentTypeObj.baseWeeks + featuresWeeks) / speedDivisor;
  const minWeeks = Math.max(2, Math.round(rawWeeks * 0.85));
  const maxWeeks = Math.max(minWeeks + 2, Math.round(rawWeeks * 1.15));

  // Dynamic visual cost breakdown segments
  const baseCostUSD = currentTypeObj.basePrice;
  const capabilitiesCostUSD = featuresPriceUSD;
  const designMultiplierCostUSD = (baseCostUSD + capabilitiesCostUSD) * (designObj.multiplier - 1.0);
  const speedMultiplierCostUSD = (baseCostUSD + capabilitiesCostUSD) * (activeSpeed.multiplier - 1.0);
  const totalSubtotal = baseCostUSD + capabilitiesCostUSD + designMultiplierCostUSD + speedMultiplierCostUSD;

  const basePct = Math.max(15, Math.round((baseCostUSD / totalSubtotal) * 100));
  const capPct = Math.max(10, Math.round((capabilitiesCostUSD / totalSubtotal) * 100));
  const desPct = Math.max(5, Math.round((designMultiplierCostUSD / totalSubtotal) * 100));
  const spdPct = Math.max(0, 100 - basePct - capPct - desPct);

  const handleSubmitQuote = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    soundManager.play('execute');

    const newQuote: QuoteRequest = {
      id: 'quote-' + Date.now(),
      name,
      email,
      phone,
      projectType: currentTypeObj.name,
      platform: selectedPlatforms,
      features: selectedFeatures.map((fId) => FEATURES_LIST.find((f) => f.id === fId)?.name || fId),
      designComplexity: designObj.name,
      timeline: `${minWeeks} - ${maxWeeks} Weeks`,
      budget: `${activeCurrency.symbol}${minPrice.toLocaleString()} - ${activeCurrency.symbol}${maxPrice.toLocaleString()}`,
      estimatedPriceRange: `${activeCurrency.symbol}${minPrice.toLocaleString()} - ${activeCurrency.symbol}${maxPrice.toLocaleString()}`,
      estimatedWeeks: `${minWeeks} - ${maxWeeks} Weeks`,
      createdAt: new Date().toISOString(),
      status: 'Pending'
    };

    try {
      const existing = JSON.parse(localStorage.getItem('sahix_quotes') || '[]');
      localStorage.setItem('sahix_quotes', JSON.stringify([newQuote, ...existing]));
    } catch (err) {
      console.warn('Storage failed', err);
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      soundManager.play('success');

      try {
        confetti({
          particleCount: 65,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#FF6B00', '#FF7A00', '#EA580C', '#22C55E', '#09090B'],
        });
      } catch {
        // Confetti gracefully skipped if not available
      }
    }, 650);
  };

  return (
    <div className="w-full max-w-6xl mx-auto rounded-3xl bg-white border border-slate-200 shadow-xl p-6 sm:p-10 lg:p-12">
      <div className="flex flex-col lg:flex-row gap-12">
        
        {/* Left Form: Requirements Selection */}
        <div className="lg:w-7/12 flex flex-col gap-8">
          
          {/* Step 1: Project Type */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="text-xs font-mono uppercase tracking-wider text-slate-800 flex items-center gap-2 font-semibold">
                <span className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center text-xs font-bold text-[#FF6B00]">1</span>
                <span>Select Core Project Category</span>
              </label>

              {/* Currency Selector */}
              <div className="flex items-center gap-1 bg-slate-100 p-0.5 rounded-lg border border-slate-200 font-mono text-xs">
                {CURRENCIES.map((c, i) => (
                  <button
                    key={c.code}
                    type="button"
                    onClick={() => handleCurrencyChange(i)}
                    className={`px-2 py-0.5 rounded text-[11px] font-bold transition-all ${
                      currencyIndex === i
                        ? 'bg-[#FF6B00] text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {c.code} ({c.symbol})
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PROJECT_TYPES.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => handleTypeSelect(t.id)}
                  className={`p-4 rounded-xl border text-left transition-all duration-200 flex items-start gap-3 ${
                    selectedType === t.id
                      ? 'bg-orange-50/70 border-[#FF6B00] shadow-[0_2px_10px_rgba(255,107,0,0.15)]'
                      : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className={`p-2 rounded-lg ${selectedType === t.id ? 'bg-[#FF6B00] text-white' : 'bg-white border border-slate-200 text-slate-600'}`}>
                    <t.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">{t.name}</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">
                      Starting ~{activeCurrency.symbol}{Math.round(t.basePrice * activeCurrency.rate).toLocaleString()}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Target Platforms */}
          <div>
            <label className="text-xs font-mono uppercase tracking-wider text-slate-800 flex items-center gap-2 mb-3 font-semibold">
              <span className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center text-xs font-bold text-[#FF6B00]">2</span>
              <span>Target Platforms (Select all that apply)</span>
            </label>
            <div className="flex flex-wrap gap-2">
              {PLATFORMS.map((p) => {
                const active = selectedPlatforms.includes(p);
                return (
                  <button
                    key={p}
                    type="button"
                    onClick={() => togglePlatform(p)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-medium border transition-colors flex items-center gap-2 ${
                      active
                        ? 'bg-orange-50 border-[#FF6B00] text-[#EA580C] font-semibold shadow-xs'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    {active && <Check className="w-3.5 h-3.5 text-[#FF6B00]" />}
                    <span>{p}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 3: Required Features */}
          <div>
            <label className="text-xs font-mono uppercase tracking-wider text-slate-800 flex items-center gap-2 mb-3 font-semibold">
              <span className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center text-xs font-bold text-[#FF6B00]">3</span>
              <span>Key Features & Architecture Capabilities</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {FEATURES_LIST.map((f) => {
                const active = selectedFeatures.includes(f.id);
                return (
                  <button
                    key={f.id}
                    type="button"
                    onClick={() => toggleFeature(f.id)}
                    className={`p-3 rounded-xl border text-left transition-all duration-200 flex items-center justify-between ${
                      active
                        ? 'bg-orange-50/70 border-[#FF6B00] text-slate-900 font-medium shadow-xs'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <span className="text-xs font-medium">{f.name}</span>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${active ? 'bg-[#FF6B00] text-white font-bold' : 'bg-white border border-slate-200 text-slate-500'}`}>
                      +{activeCurrency.symbol}{Math.round(f.price * activeCurrency.rate).toLocaleString()}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 4: Design Complexity */}
          <div>
            <label className="text-xs font-mono uppercase tracking-wider text-slate-800 flex items-center gap-2 mb-3 font-semibold">
              <span className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center text-xs font-bold text-[#FF6B00]">4</span>
              <span>Design System & Interface Fidelity</span>
            </label>
            <div className="grid grid-cols-3 gap-2.5">
              {DESIGN_COMPLEXITIES.map((d) => (
                <button
                  key={d.id}
                  type="button"
                  onClick={() => {
                    soundManager.play('switch');
                    setDesignComplexity(d.id);
                  }}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    designComplexity === d.id
                      ? 'bg-orange-50 border-[#FF6B00] text-slate-950 shadow-xs'
                      : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300'
                  }`}
                >
                  <div className="text-xs font-bold">{d.name.split('(')[0]}</div>
                  <div className="text-[10px] font-mono text-[#EA580C] mt-1 font-semibold">
                    {d.multiplier === 1 ? '1.0x Base' : `${d.multiplier}x Multiplier`}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 5: Interactive Cost vs. Delivery Speed Slider Visualization */}
          <div className="p-5 rounded-2xl bg-orange-50/40 border border-orange-200">
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-mono uppercase tracking-wider text-slate-900 font-bold flex items-center gap-2">
                <Gauge className="w-4 h-4 text-[#FF6B00]" />
                <span>Sprint Velocity vs. Cost Slider</span>
              </label>
              <span className="text-xs font-mono font-black text-[#EA580C] px-2 py-0.5 rounded bg-white border border-orange-200 shadow-xs">
                {activeSpeed.speedBadge}
              </span>
            </div>

            <p className="text-xs text-slate-600 mb-3">
              {activeSpeed.reductionLabel}
            </p>

            <input
              type="range"
              min={0}
              max={2}
              step={1}
              value={speedIndex}
              onChange={(e) => {
                setSpeedIndex(Number(e.target.value));
                soundManager.play('slider');
              }}
              className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#FF6B00]"
            />

            <div className="flex justify-between text-[11px] font-mono text-slate-500 mt-2">
              <span className={speedIndex === 0 ? 'text-[#FF6B00] font-bold' : ''}>Standard (1.0x)</span>
              <span className={speedIndex === 1 ? 'text-[#FF6B00] font-bold' : ''}>Fast Track (1.25x)</span>
              <span className={speedIndex === 2 ? 'text-[#FF6B00] font-bold' : ''}>Blitz (1.45x)</span>
            </div>

            {/* Dedicated Squad Setup Badge */}
            <div className="mt-3 pt-3 border-t border-orange-200/80 flex items-center gap-2 text-[11px] font-mono text-slate-700">
              <Users className="w-3.5 h-3.5 text-[#FF6B00] flex-shrink-0" />
              <span><strong>Squad:</strong> {activeSpeed.squadSetup}</span>
            </div>
          </div>

        </div>

        {/* Right Card: Dynamic Estimate & Contact Submission */}
        <div className="lg:w-5/12 flex flex-col justify-between">
          <TiltCard intensity="subtle" showBeam={true} className="rounded-2xl">
            <div className="rounded-2xl bg-[#FFF9F5] border border-orange-200 p-6 sm:p-8 shadow-md">
              <div className="flex items-center justify-between pb-4 border-b border-orange-200/80">
                <span className="text-xs font-mono uppercase tracking-wider text-[#EA580C] flex items-center gap-1.5 font-bold">
                  <Calculator className="w-4 h-4 text-[#FF6B00]" />
                  Live Indicative Estimate
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white border border-orange-200 text-[#FF6B00] font-bold">
                  {activeSpeed.speedBadge}
                </span>
              </div>

              {/* Price & Timeline Display */}
              <div className="py-6 border-b border-orange-200/80">
                <div className="text-xs text-slate-600 font-medium">Estimated Investment Range:</div>
                <div className="text-3xl sm:text-4xl font-black text-slate-900 mt-1">
                  {activeCurrency.symbol}{minPrice.toLocaleString()} - {activeCurrency.symbol}{maxPrice.toLocaleString()}
                </div>
                <div className="mt-3 flex items-center gap-2 text-xs text-[#EA580C] font-semibold">
                  <Timer className="w-4 h-4 text-[#FF6B00]" />
                  <span>Estimated Delivery: <strong>{minWeeks} to {maxWeeks} Weeks</strong></span>
                </div>
              </div>

              {/* Dynamic Visual Investment Breakdown */}
              <div className="py-4 border-b border-orange-200/80">
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-600 mb-2 font-semibold">
                  <span>INVESTMENT ALLOCATION PROFILE</span>
                  <span className="text-[#EA580C] font-bold">100% SCOPED</span>
                </div>
                
                {/* Segmented Progress Bar */}
                <div className="h-3.5 w-full rounded-full bg-slate-200 overflow-hidden flex shadow-inner">
                  <div
                    style={{ width: `${basePct}%` }}
                    className={`bg-[#09090B] h-full transition-all duration-300 ${activeHighlightSegment === 'base' ? 'ring-2 ring-white scale-y-110' : ''}`}
                    title="Core Base Engine"
                  />
                  <div
                    style={{ width: `${capPct}%` }}
                    className={`bg-[#FF6B00] h-full transition-all duration-300 ${activeHighlightSegment === 'cap' ? 'ring-2 ring-white scale-y-110' : ''}`}
                    title="Architecture Modules"
                  />
                  <div
                    style={{ width: `${desPct}%` }}
                    className={`bg-[#EA580C] h-full transition-all duration-300 ${activeHighlightSegment === 'des' ? 'ring-2 ring-white scale-y-110' : ''}`}
                    title="Design Fidelity"
                  />
                  <div
                    style={{ width: `${spdPct}%` }}
                    className={`bg-amber-400 h-full transition-all duration-300 ${activeHighlightSegment === 'spd' ? 'ring-2 ring-white scale-y-110' : ''}`}
                    title="Sprint Velocity"
                  />
                </div>

                {/* Legend */}
                <div className="grid grid-cols-2 gap-2 mt-2.5 text-[10px] font-mono text-slate-600">
                  <div
                    onMouseEnter={() => setActiveHighlightSegment('base')}
                    onMouseLeave={() => setActiveHighlightSegment(null)}
                    className="flex items-center gap-1.5 cursor-pointer"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#09090B]" />
                    <span>Base Engine ({basePct}%)</span>
                  </div>
                  <div
                    onMouseEnter={() => setActiveHighlightSegment('cap')}
                    onMouseLeave={() => setActiveHighlightSegment(null)}
                    className="flex items-center gap-1.5 cursor-pointer"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#FF6B00]" />
                    <span>Modules ({capPct}%)</span>
                  </div>
                  <div
                    onMouseEnter={() => setActiveHighlightSegment('des')}
                    onMouseLeave={() => setActiveHighlightSegment(null)}
                    className="flex items-center gap-1.5 cursor-pointer"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#EA580C]" />
                    <span>Design ({desPct}%)</span>
                  </div>
                  <div
                    onMouseEnter={() => setActiveHighlightSegment('spd')}
                    onMouseLeave={() => setActiveHighlightSegment(null)}
                    className="flex items-center gap-1.5 cursor-pointer"
                  >
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    <span>Sprint Velocity ({spdPct}%)</span>
                  </div>
                </div>
              </div>

              {/* Selected Summary */}
              <div className="py-4 border-b border-orange-200/80 text-xs text-slate-600 space-y-1.5">
                <div>Type: <span className="text-slate-900 font-medium">{currentTypeObj.name}</span></div>
                <div>Platforms: <span className="text-slate-900 font-medium">{selectedPlatforms.length} selected</span></div>
                <div>Modules: <span className="text-slate-900 font-medium">{selectedFeatures.length} capabilities active</span></div>
              </div>

              {/* Quote Submission Form */}
              {submitted ? (
                <div className="mt-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-center animate-in fade-in zoom-in-95 duration-200">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center mb-2">
                    <Check className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <div className="text-sm font-bold text-slate-900">Quotation Specifications Logged!</div>
                  <p className="text-xs text-slate-600 mt-1">
                    Our architecture squad has received your project parameters. A detailed technical breakdown will arrive within 24 business hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-3 text-xs text-[#FF6B00] font-semibold hover:underline"
                  >
                    Configure another estimate
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmitQuote} className="mt-6 space-y-3">
                  <div className="text-xs font-semibold text-slate-900">
                    Lock in this estimate & request formal proposal:
                  </div>
                  <input
                    type="text"
                    placeholder="Your Full Name *"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#FF6B00]"
                  />
                  <input
                    type="email"
                    placeholder="Business Email Address *"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#FF6B00]"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number (WhatsApp optional)"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#FF6B00]"
                  />
                  <textarea
                    placeholder="Any specific technical requirements or constraints..."
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#FF6B00] resize-none"
                  />

                  <BeamButton
                    type="submit"
                    disabled={isSubmitting}
                    variant="primary"
                    className="w-full py-3.5 rounded-xl text-xs uppercase tracking-wider font-bold"
                  >
                    {isSubmitting ? (
                      <span>Calculating & Locking Scope...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5 mr-2" />
                        <span>Request Formal Architectural Scope</span>
                      </>
                    )}
                  </BeamButton>
                </form>
              )}

              {/* Disclaimer */}
              <p className="mt-4 text-[10px] text-slate-500 leading-normal text-center">
                * Indicative preliminary calculation for planning purposes only. Final commercial quotation is finalized upon completion of the discovery & architecture blueprint phase.
              </p>
            </div>
          </TiltCard>
        </div>

      </div>
    </div>
  );
};
