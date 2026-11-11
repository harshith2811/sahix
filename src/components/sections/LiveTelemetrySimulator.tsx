'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';
import Link from 'next/link';
import { 
  Activity, 
  Cpu, 
  Zap, 
  Server, 
  ShieldCheck, 
  Database, 
  RotateCw, 
  ArrowRight, 
  Sliders, 
  Check, 
  Flame, 
  Sparkles,
  TrendingDown,
  Layers,
  Globe,
  Gauge
} from 'lucide-react';
import { soundManager } from '@/lib/audio';
import { TiltCard } from '@/components/ui/TiltCard';
import { BeamButton } from '@/components/ui/BeamButton';

interface ArchLayer {
  id: string;
  name: string;
  tag: string;
  description: string;
  icon: React.ElementType;
  latencyReductionMs: number;
  costSavingsPct: number;
  throughputBoostMultiplier: number;
}

const ARCH_LAYERS: ArchLayer[] = [
  {
    id: 'edge_cdn',
    name: 'Distributed Edge Mesh (32 PoPs)',
    tag: 'NETWORKING',
    description: 'Terminates TLS 1.3 at edge locations within 20ms of 95% of world population.',
    icon: Globe,
    latencyReductionMs: 65,
    costSavingsPct: 28,
    throughputBoostMultiplier: 2.8,
  },
  {
    id: 'multi_db',
    name: 'Multi-Region Active-Active Database',
    tag: 'STORAGE',
    description: 'Sub-millisecond read replicas synced across US-East, EU-Central, and AP-South.',
    icon: Database,
    latencyReductionMs: 25,
    costSavingsPct: 10,
    throughputBoostMultiplier: 1.6,
  },
  {
    id: 'vector_cache',
    name: 'AI Semantic Vector Cache',
    tag: 'AI / LLM',
    description: 'Precomputes cosine embeddings to serve 75%+ repeated LLM queries from cache.',
    icon: Cpu,
    latencyReductionMs: 38,
    costSavingsPct: 32,
    throughputBoostMultiplier: 2.2,
  },
  {
    id: 'waf_shield',
    name: 'Autonomous WAF & Rate Limiter',
    tag: 'SECURITY',
    description: 'Zero-overhead behavioral anomaly inspection neutralizing DDoS & scraping.',
    icon: ShieldCheck,
    latencyReductionMs: 0,
    costSavingsPct: 14,
    throughputBoostMultiplier: 1.2,
  },
];

export const LiveTelemetrySimulator: React.FC = () => {
  const [concurrency, setConcurrency] = useState<number>(45000);
  const [activeLayers, setActiveLayers] = useState<string[]>(['edge_cdn', 'multi_db', 'vector_cache', 'waf_shield']);
  const [scenario, setScenario] = useState<'normal' | 'viral' | 'resilient'>('normal');

  // Pre-seed logs and waveform so telemetry looks immediately active on page load
  const [logs, setLogs] = useState<string[]>([
    '[US-EAST] GET /api/v4/agent/inference 200 OK • 12.4ms [CACHE_HIT]',
    '[EU-CENTRAL] GET /api/v4/catalog/query 200 OK • 14.1ms [CACHE_HIT]',
    '[AP-SOUTH] GET /api/v4/checkout/session 200 OK • 15.8ms [CACHE_HIT]',
    '[US-EAST] GET /api/v4/telemetry 200 OK • 11.9ms [CACHE_HIT]',
  ]);

  const [waveformData, setWaveformData] = useState<number[]>([
    14.2, 13.8, 14.5, 12.9, 13.4, 15.1, 14.0, 13.7, 12.8, 14.6, 
    13.9, 13.2, 14.4, 15.0, 13.5, 14.1, 12.7, 13.6, 14.8, 13.3, 
    14.0, 13.9, 14.5, 13.8, 14.2
  ]);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const latestMetricsRef = useRef({ p99: '14.2', isHit: true });

  // Toggle architecture layer
  const toggleLayer = (id: string) => {
    soundManager.play('switch');
    setActiveLayers((prev) =>
      prev.includes(id) ? (prev.length > 1 ? prev.filter((item) => item !== id) : prev) : [...prev, id]
    );
  };

  // Switch scenario preset
  const applyScenario = (sc: 'normal' | 'viral' | 'resilient') => {
    setScenario(sc);
    soundManager.play('execute');
    if (sc === 'normal') {
      setConcurrency(25000);
      setActiveLayers(['edge_cdn', 'multi_db']);
    } else if (sc === 'viral') {
      setConcurrency(180000);
      setActiveLayers(['edge_cdn', 'multi_db', 'vector_cache', 'waf_shield']);
    } else if (sc === 'resilient') {
      setConcurrency(65000);
      setActiveLayers(['edge_cdn', 'multi_db', 'waf_shield']);
    }
  };

  const triggerStressSpike = () => {
    soundManager.play('execute');
    setConcurrency(250000);
  };

  // Dynamic calculations based on state
  const metrics = useMemo(() => {
    const baseLatency = 148; // ms
    const baseThroughput = 22000; // req/s

    let latencyReduction = 0;
    let costSavings = 0;
    let throughputMultiplier = 1.0;

    ARCH_LAYERS.forEach((layer) => {
      if (activeLayers.includes(layer.id)) {
        latencyReduction += layer.latencyReductionMs;
        costSavings += layer.costSavingsPct;
        throughputMultiplier *= layer.throughputBoostMultiplier;
      }
    });

    const loadFactor = concurrency / 100000;
    const loadLatencyJitter = Math.max(0, (loadFactor - 0.5) * 8);

    const calculatedLatency = Math.max(8.4, baseLatency - latencyReduction + loadLatencyJitter);
    const maxCapacity = Math.round(baseThroughput * throughputMultiplier);
    const calculatedCostSavings = Math.min(68, Math.round(costSavings * (activeLayers.length / 4)));
    const errorRate = activeLayers.includes('waf_shield') ? '0.0001%' : '0.42%';
    const p99 = calculatedLatency.toFixed(1);

    latestMetricsRef.current = {
      p99,
      isHit: activeLayers.includes('edge_cdn') || activeLayers.includes('vector_cache')
    };

    return {
      p99,
      maxCapacity: (maxCapacity / 1000).toFixed(0) + 'k',
      costSavings: calculatedCostSavings,
      errorRate,
      utilizationPct: Math.min(100, Math.round((concurrency / maxCapacity) * 100)),
    };
  }, [concurrency, activeLayers]);

  // Telemetry stream generator running steadily via ref without teardown on slider move
  useEffect(() => {
    const regions = ['US-EAST', 'EU-CENTRAL', 'AP-SOUTH', 'SA-EAST', 'AF-SOUTH'];
    const endpoints = ['/api/v4/agent/inference', '/api/v4/catalog/query', '/api/v4/checkout/session', '/api/v4/telemetry'];

    const interval = setInterval(() => {
      const region = regions[Math.floor(Math.random() * regions.length)];
      const ep = endpoints[Math.floor(Math.random() * endpoints.length)];
      const { p99, isHit } = latestMetricsRef.current;
      const lat = (parseFloat(p99) + (Math.random() * 3.6 - 1.8)).toFixed(1);
      const tag = isHit ? 'CACHE_HIT' : 'ORIGIN_FETCH';

      const entry = `[${region}] GET ${ep} 200 OK • ${lat}ms [${tag}]`;
      setLogs((prev) => [entry, ...prev.slice(0, 5)]);

      setWaveformData((prev) => {
        const next = [...prev.slice(-28), parseFloat(lat)];
        return next;
      });
    }, 600);

    return () => clearInterval(interval);
  }, []);

  // Draw telemetry waveform on canvas with Retina / HiDPI scaling
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = Math.min(typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1, 2);
    const w = canvas.parentElement?.clientWidth || 400;
    const h = 100;

    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);

    ctx.clearRect(0, 0, w, h);

    if (waveformData.length < 2) return;

    // Draw horizontal grid lines
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.lineWidth = 1;
    for (let y = 20; y < h; y += 25) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }

    const step = w / (waveformData.length - 1);

    // Create path
    ctx.beginPath();
    waveformData.forEach((val, i) => {
      // Map latency between 0 and 150ms to canvas height
      const y = h - ((val - 5) / 140) * (h - 20) - 10;
      if (i === 0) ctx.moveTo(0, y);
      else ctx.lineTo(i * step, y);
    });

    // Stroke path with radiant orange
    ctx.strokeStyle = '#FF6B00';
    ctx.lineWidth = 2.2;
    ctx.stroke();

    // Fill underneath
    ctx.lineTo(w, h);
    ctx.lineTo(0, h);
    ctx.closePath();

    const gradient = ctx.createLinearGradient(0, 0, 0, h);
    gradient.addColorStop(0, 'rgba(255, 107, 0, 0.22)');
    gradient.addColorStop(1, 'rgba(255, 107, 0, 0.0)');
    ctx.fillStyle = gradient;
    ctx.fill();

    // Pulse head dot
    const lastX = (waveformData.length - 1) * step;
    const lastVal = waveformData[waveformData.length - 1];
    const lastY = h - ((lastVal - 5) / 140) * (h - 20) - 10;

    ctx.beginPath();
    ctx.arc(lastX, lastY, 4, 0, Math.PI * 2);
    ctx.fillStyle = '#EA580C';
    ctx.fill();
    ctx.shadowColor = '#FF6B00';
    ctx.shadowBlur = 8;
  }, [waveformData]);

  return (
    <section id="simulator" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#FAFAFA] border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-8 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#FF6B00] mb-3">
              <Activity className="w-4 h-4 text-[#FF6B00]" />
              <span>03 // TELEMETRY & ARCHITECTURE BENCHMARK LAB</span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-500 font-semibold">LIVE SIMULATION</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Interactive Systems Simulator.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md leading-relaxed">
            Adjust concurrent traffic velocity, toggle edge caching layers, and observe real-time simulated p99 latency, RPS throughput, and cloud cost efficiency.
          </p>
        </div>

        {/* Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Controls */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            
            {/* Scenario Quick Presets */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-800 font-bold flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-[#FF6B00]" />
                  Simulation Scenarios
                </span>
                <span className="text-[10px] font-mono text-slate-400">ONE-CLICK BENCHMARKS</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'normal', label: 'Production Baseline', desc: '25k req/s' },
                  { id: 'viral', label: 'Viral Product Spike', desc: '180k req/s' },
                  { id: 'resilient', label: 'Zero-Trust Mesh', desc: '65k req/s' },
                ].map((sc) => (
                  <button
                    key={sc.id}
                    onClick={() => applyScenario(sc.id as 'normal' | 'viral' | 'resilient')}
                    className={`p-3 rounded-xl border text-left transition-all duration-200 ${
                      scenario === sc.id
                        ? 'bg-orange-50 border-[#FF6B00] text-slate-900 shadow-sm'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <div className="text-xs font-bold leading-tight">{sc.label}</div>
                    <div className="text-[10px] font-mono text-[#EA580C] mt-1">{sc.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Concurrency Load Slider */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-800 font-bold flex items-center gap-1.5">
                  <Sliders className="w-4 h-4 text-[#FF6B00]" />
                  Concurrent Traffic Velocity
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-base font-black font-mono text-[#FF6B00]">
                    {concurrency.toLocaleString()} req/s
                  </span>
                  <button
                    onClick={triggerStressSpike}
                    className="px-2 py-0.5 rounded bg-orange-100 hover:bg-orange-200 text-orange-800 text-[10px] font-mono font-bold transition-colors"
                    title="Surge load to 250k req/s"
                  >
                    SURGE
                  </button>
                </div>
              </div>
              <p className="text-xs text-slate-500 mb-4">
                Simulate peak synthetic traffic hitting the global edge layer.
              </p>

              <input
                type="range"
                min={5000}
                max={250000}
                step={5000}
                value={concurrency}
                onChange={(e) => {
                  setConcurrency(Number(e.target.value));
                  soundManager.play('slider');
                }}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#FF6B00]"
              />

              <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-2">
                <span>5,000 req/s</span>
                <span>125,000 req/s</span>
                <span>250,000 req/s (Max)</span>
              </div>
            </div>

            {/* Architecture Layers Toggle Stack */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-800 font-bold mb-4 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-[#FF6B00]" />
                Architectural Acceleration Layers
              </div>

              <div className="space-y-3">
                {ARCH_LAYERS.map((layer) => {
                  const isActive = activeLayers.includes(layer.id);
                  const Icon = layer.icon;

                  return (
                    <div
                      key={layer.id}
                      onClick={() => toggleLayer(layer.id)}
                      className={`p-3.5 rounded-xl border cursor-pointer transition-all duration-200 flex items-start justify-between gap-3 ${
                        isActive
                          ? 'bg-orange-50/70 border-orange-300 shadow-xs'
                          : 'bg-slate-50 border-slate-200 opacity-60 hover:opacity-80'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                            isActive
                              ? 'bg-[#FF6B00] text-white shadow-sm shadow-orange-500/30'
                              : 'bg-slate-200 text-slate-500'
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-slate-900">{layer.name}</span>
                            <span className="text-[9px] font-mono font-bold px-1.5 py-0.2 rounded bg-white border border-slate-200 text-slate-600">
                              {layer.tag}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                            {layer.description}
                          </p>
                        </div>
                      </div>

                      <div
                        className={`w-5 h-5 rounded-md flex items-center justify-center border flex-shrink-0 mt-1 transition-colors ${
                          isActive
                            ? 'bg-[#FF6B00] border-[#FF6B00] text-white'
                            : 'bg-white border-slate-300'
                        }`}
                      >
                        {isActive && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Live Telemetry Output Station */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            
            <TiltCard showBeam={true} intensity="subtle" className="rounded-3xl">
              <div className="p-7 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xl">
                
                {/* Station Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-mono font-bold text-slate-900">
                      LIVE CLUSTER TELEMETRY
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-orange-50 text-orange-700 border border-orange-200 font-bold">
                    PROD ENGINE ACTIVE
                  </span>
                </div>

                {/* Main 4 Metric Cards */}
                <div className="grid grid-cols-2 gap-4 my-6">
                  
                  {/* P99 Latency */}
                  <div className="p-4 rounded-2xl bg-orange-50/50 border border-orange-200">
                    <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                      GLOBAL P99 LATENCY
                    </div>
                    <div className="text-3xl sm:text-4xl font-black text-slate-950 font-mono mt-1">
                      {metrics.p99}
                      <span className="text-sm font-normal text-slate-500 ml-1">ms</span>
                    </div>
                    <div className="text-[11px] text-[#EA580C] font-semibold mt-1 flex items-center gap-1">
                      <TrendingDown className="w-3.5 h-3.5" />
                      <span>Optimized SLA (&lt; 20ms)</span>
                    </div>
                  </div>

                  {/* Peak Throughput */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                      PEAK THROUGHPUT
                    </div>
                    <div className="text-3xl sm:text-4xl font-black text-slate-900 font-mono mt-1">
                      {metrics.maxCapacity}
                      <span className="text-sm font-normal text-slate-500 ml-1">req/s</span>
                    </div>
                    <div className="text-[11px] text-emerald-600 font-semibold mt-1">
                      Load: {metrics.utilizationPct}% utilized
                    </div>
                  </div>

                  {/* Cost Reduction */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                      CLOUD INFRA REDUCTION
                    </div>
                    <div className="text-3xl sm:text-4xl font-black text-[#EA580C] font-mono mt-1">
                      -{metrics.costSavings}%
                    </div>
                    <div className="text-[11px] text-slate-500 mt-1">
                      Via edge & RAG caching
                    </div>
                  </div>

                  {/* SLA Uptime */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                      FAULT TOLERANCE
                    </div>
                    <div className="text-3xl sm:text-4xl font-black text-slate-900 font-mono mt-1">
                      99.999%
                    </div>
                    <div className="text-[11px] text-emerald-600 font-semibold mt-1">
                      Err rate: {metrics.errorRate}
                    </div>
                  </div>

                </div>

                {/* Real-time Waveform Canvas */}
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-2">
                    <span>LIVE LATENCY JITTER PROFILE (REAL-TIME STREAM)</span>
                    <span className="text-[#FF6B00] font-bold">~{metrics.p99}ms AVG</span>
                  </div>
                  <div className="w-full h-24 rounded-xl bg-slate-50 border border-slate-200 overflow-hidden relative">
                    <canvas ref={canvasRef} className="w-full h-full block" />
                  </div>
                </div>

                {/* Live Simulated Event Feed */}
                <div className="mt-5 pt-4 border-t border-slate-100">
                  <div className="text-[11px] font-mono uppercase text-slate-500 tracking-wider mb-2 font-semibold">
                    REAL-TIME INGRESS LOG STREAM:
                  </div>
                  <div className="bg-[#090D14] text-slate-300 p-3 rounded-xl font-mono text-[11px] space-y-1 h-32 overflow-hidden border border-slate-800">
                    {logs.map((log, i) => (
                      <div key={i} className="flex items-center gap-2 truncate">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                        <span className="truncate">{log}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Next Step CTA */}
                <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                  <div className="text-xs text-slate-600">
                    Want this high-throughput architecture for your platform?
                  </div>
                  <BeamButton
                    href="/quote"
                    variant="primary"
                    className="px-5 py-2.5 rounded-full text-xs font-bold"
                  >
                    <span>Deploy Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-2" />
                  </BeamButton>
                </div>

              </div>
            </TiltCard>

          </div>

        </div>

      </div>
    </section>
  );
};
