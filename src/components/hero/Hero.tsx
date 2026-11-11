'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  RotateCw, 
  Terminal, 
  Cpu, 
  Server, 
  Layers, 
  CheckCircle2, 
  Play, 
  ArrowDown, 
  Activity, 
  ShieldCheck, 
  Zap, 
  Copy, 
  Check, 
  Code2, 
  Sliders, 
  Sparkles, 
  Command,
  Edit3,
  Undo2
} from 'lucide-react';
import { HeroParticleCanvas } from './HeroParticleCanvas';
import { soundManager } from '@/lib/audio';
import { TiltCard } from '../ui/TiltCard';
import { BeamButton } from '../ui/BeamButton';

interface ArchitectureProfile {
  id: 'rust' | 'ts' | 'nextjs' | 'python' | 'go';
  name: string;
  badge: string;
  filename: string;
  language: string;
  p99Latency: string;
  p99BypassLatency: string;
  throughput: string;
  clusterStatus: string;
  defaultCode: string;
  outputLog: string;
}

const PROFILES: Record<string, ArchitectureProfile> = {
  rust: {
    id: 'rust',
    name: '01 // Edge Mesh',
    badge: 'ZERO-OVERHEAD RUNTIME',
    filename: 'mesh_router.rs',
    language: 'Rust 1.82',
    p99Latency: '8.4 ms',
    p99BypassLatency: '142.6 ms',
    throughput: '320k req/s',
    clusterStatus: 'Active (32 PoPs)',
    defaultCode: `pub async fn route_stream(req: Request) -> Result<Response> {
    let telemetry = TelemetryScope::init("sahix-edge");
    let node = MeshRouter::resolve_optimal_pop(&req).await?;
    
    // Zero-trust cryptographic verification & SIMD routing
    node.verify_quantum_signature(&req.auth_header)?;
    let stream = node.forward_duplex(req).await?;
    telemetry.record_p99(stream.metrics());
    Ok(stream)
}`,
    outputLog: '[RUST-ENGINE] SIMD memory pool allocated: 0 malloc latency. TLS 1.3 handshake 2.1ms across 32 edge nodes.'
  },
  ts: {
    id: 'ts',
    name: '02 // AI Agent',
    badge: 'VECTOR RAG PIPELINE',
    filename: 'agent_graph.ts',
    language: 'TypeScript 5.6',
    p99Latency: '24.2 ms',
    p99BypassLatency: '185.0 ms',
    throughput: '45k tokens/s',
    clusterStatus: 'Optimized (GPU-v4)',
    defaultCode: `export async function executeAgentGraph(prompt: UserPrompt) {
  const context = await vectorStore.querySimilar({
    vector: await embed(prompt.query),
    threshold: 0.96,
    limit: 8
  });

  return streamAgentDecision({
    systemPrompt: SAHIX_CORE_DIRECTIVE,
    ragEvidence: context,
    toolchain: [DatabaseTool, CodeInterpreter, NotificationTool]
  });
}`,
    outputLog: '[AI-RUNTIME] Vector index cosine similarity 0.98. Streaming token latency 7.4ms first-token response.'
  },
  nextjs: {
    id: 'nextjs',
    name: '03 // Web Core',
    badge: 'NEXT.JS 14 APP ROUTER',
    filename: 'page_runtime.tsx',
    language: 'React 18 / Next.js 14',
    p99Latency: '14.8 ms',
    p99BypassLatency: '160.4 ms',
    throughput: '120k req/s',
    clusterStatus: 'SSR Edge Cached',
    defaultCode: `export default async function EnterpriseDashboard() {
  const [telemetry, services] = await Promise.all([
    fetchEdgeTelemetry({ next: { revalidate: 30 } }),
    queryServiceManifests()
  ]);

  return (
    <LiveClusterGrid telemetry={telemetry}>
      <ServiceTopology nodes={services.active} />
    </LiveClusterGrid>
  );
}`,
    outputLog: '[NEXT-SSR] Core Web Vitals: LCP 0.52s, CLS 0.00, INP 18ms. Streaming hydration footprint: 28kb gzip.'
  },
  python: {
    id: 'python',
    name: '04 // ML Pipeline',
    badge: 'DISTRIBUTED TENSORFLOW/TORCH',
    filename: 'embeddings_worker.py',
    language: 'Python 3.12',
    p99Latency: '32.1 ms',
    p99BypassLatency: '210.8 ms',
    throughput: '85k vectors/s',
    clusterStatus: 'CUDA 12.4 Cluster',
    defaultCode: `@ray.remote(num_gpus=1)
def process_tensor_batch(batch_data: list[TensorItem]) -> list[Vector]:
    embeddings = model.encode(batch_data, normalize_embeddings=True)
    hnsw_index.batch_insert(embeddings, metadata=batch_data)
    telemetry.push_metric("tensor.throughput", len(batch_data))
    return embeddings`,
    outputLog: '[PY-CLUSTER] Ray cluster worker pool active. GPU memory utilization 84%. Quantized INT8 quantization enabled.'
  },
  go: {
    id: 'go',
    name: '05 // High-Throughput Ingestion',
    badge: 'LOCK-FREE CHANNELS',
    filename: 'telemetry_stream.go',
    language: 'Go 1.23',
    p99Latency: '4.8 ms',
    p99BypassLatency: '98.2 ms',
    throughput: '650k events/s',
    clusterStatus: 'Ring Buffer Pool',
    defaultCode: `func IngestTelemetry(ctx context.Context, stream <-chan Event) error {
    pool := sync.Pool{New: func() any { return new(EventBatch) }}
    for event := range stream {
        batch := pool.Get().(*EventBatch)
        batch.Append(event)
        if batch.IsFull() {
            go kafkaProducer.PublishBatch(batch)
        }
    }
    return nil
}`,
    outputLog: '[GO-INGEST] Ring buffer zero allocations per packet. 650k events/s processed through memory channels.'
  }
};

// High-tech syntax highlighter helper
function highlightCode(code: string): React.ReactNode[] {
  const keywords = new Set([
    'pub', 'async', 'fn', 'let', 'export', 'default', 'function', 'return',
    'def', 'func', 'import', 'const', 'await', 'package', 'type', 'struct',
    'if', 'else', 'for', 'range', 'match', 'case', 'go', 'select'
  ]);
  const types = new Set([
    'Request', 'Response', 'Result', 'TelemetryScope', 'MeshRouter', 'UserPrompt',
    'EnterpriseDashboard', 'LiveClusterGrid', 'ServiceTopology', 'TensorItem',
    'Vector', 'Event', 'EventBatch', 'Context', 'error', 'int', 'string', 'bool'
  ]);

  return code.split('\n').map((line, lineIdx) => {
    // If whole line is a comment
    const trimmed = line.trim();
    if (trimmed.startsWith('//') || trimmed.startsWith('#')) {
      return (
        <span key={lineIdx} className="text-slate-500 italic">
          {line}
        </span>
      );
    }

    // Tokenize line by strings and words
    const parts = line.split(/(".*?"|'.*?'|\b)/g);
    return (
      <span key={lineIdx}>
        {parts.map((part, partIdx) => {
          if (part.startsWith('"') || part.startsWith("'")) {
            return (
              <span key={partIdx} className="text-emerald-400">
                {part}
              </span>
            );
          }
          if (keywords.has(part)) {
            return (
              <span key={partIdx} className="text-[#FF7A00] font-semibold">
                {part}
              </span>
            );
          }
          if (types.has(part)) {
            return (
              <span key={partIdx} className="text-sky-300">
                {part}
              </span>
            );
          }
          if (/^\d+(\.\d+)?$/.test(part)) {
            return (
              <span key={partIdx} className="text-amber-300">
                {part}
              </span>
            );
          }
          return <span key={partIdx}>{part}</span>;
        })}
      </span>
    );
  });
}

export const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'rust' | 'ts' | 'nextjs' | 'python' | 'go'>('rust');
  const [userCodes, setUserCodes] = useState<Record<string, string>>({
    rust: PROFILES.rust.defaultCode,
    ts: PROFILES.ts.defaultCode,
    nextjs: PROFILES.nextjs.defaultCode,
    python: PROFILES.python.defaultCode,
    go: PROFILES.go.defaultCode,
  });
  const [isEditing, setIsEditing] = useState(false);
  const [isExecuting, setIsExecuting] = useState(false);
  const [executionStep, setExecutionStep] = useState<string | null>(null);
  const [executionCount, setExecutionCount] = useState(0);
  const [copied, setCopied] = useState(false);
  const [hoveredLine, setHoveredLine] = useState<number | null>(null);
  const [cachingEnabled, setCachingEnabled] = useState(true);

  const profile = PROFILES[activeTab];
  const currentCode = userCodes[activeTab] || profile.defaultCode;
  const isModified = currentCode !== profile.defaultCode;

  const handleTabChange = (tab: 'rust' | 'ts' | 'nextjs' | 'python' | 'go') => {
    soundManager.play('switch');
    setActiveTab(tab);
    setExecutionStep(null);
  };

  const handleRunSimulation = () => {
    soundManager.play('execute');
    setIsExecuting(true);
    setExecutionStep('Parsing AST syntax & verifying type bounds...');

    setTimeout(() => {
      setExecutionStep('Optimizing bytecode with LLVM SIMD acceleration...');
    }, 200);

    setTimeout(() => {
      setExecutionStep('Synthetic load dispatched: 10,000 concurrent streaming packets...');
    }, 400);

    setTimeout(() => {
      setIsExecuting(false);
      setExecutionStep(null);
      setExecutionCount((prev) => prev + 1);
      soundManager.play('success');
    }, 650);
  };

  const handleCopyCode = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(currentCode);
      soundManager.play('click');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleResetCode = () => {
    soundManager.play('click');
    setUserCodes((prev) => ({
      ...prev,
      [activeTab]: profile.defaultCode,
    }));
  };

  const openCommandPalette = () => {
    soundManager.play('blip');
    window.dispatchEvent(new CustomEvent('sahix-open-palette'));
  };

  const highlightedLines = highlightCode(currentCode);
  const activeLatency = cachingEnabled ? profile.p99Latency : profile.p99BypassLatency;

  return (
    <section className="relative min-h-[94vh] pt-28 pb-12 lg:pt-36 lg:pb-16 px-4 sm:px-6 lg:px-12 flex flex-col justify-between overflow-hidden bg-white bg-grid-trace">
      
      {/* Interactive Particle / Wave Grid Canvas */}
      <HeroParticleCanvas />

      {/* Radiant Amber-Orange Light Beam */}
      <div 
        className="pointer-events-none absolute -top-20 right-0 w-[600px] sm:w-[900px] h-[600px] sm:h-[800px] z-0 opacity-80"
        style={{
          background: 'radial-gradient(circle at 75% 15%, rgba(255, 120, 20, 0.16) 0%, rgba(255, 107, 0, 0.08) 35%, transparent 70%)',
          filter: 'blur(70px)'
        }}
      />
      
      {/* Secondary Ambient Warmth */}
      <div 
        className="pointer-events-none absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full z-0 opacity-40"
        style={{
          background: 'radial-gradient(circle, rgba(255, 107, 0, 0.08) 0%, transparent 70%)',
          filter: 'blur(90px)'
        }}
      />

      {/* Main Architectural Hero Grid */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center my-auto">
        
        {/* Left Column: Monograph Typography & Hard Engineering Facts */}
        <div className="lg:col-span-6 flex flex-col items-start text-left">
          
          {/* Engineering Status Beacon + Command Palette trigger */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-orange-800 text-xs font-mono shadow-xs backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-[#FF6B00] animate-pulse" />
              <span className="text-slate-900 font-bold">SAHIX</span>
              <span className="text-orange-300">|</span>
              <span className="text-orange-700 font-semibold">SPEC V4.2</span>
            </div>

            <button
              onClick={openCommandPalette}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 border border-slate-200 hover:border-[#FF6B00] text-slate-600 hover:text-[#FF6B00] text-xs font-mono transition-all btn-tactile shadow-xs"
              title="Open Command Spotlight (Ctrl+K / Cmd+K)"
            >
              <Command className="w-3.5 h-3.5 text-[#FF6B00]" />
              <span>Spotlight</span>
              <kbd className="px-1.5 py-0.2 rounded bg-slate-100 text-[10px] text-slate-500 font-bold">⌘K</kbd>
            </button>
          </div>

          {/* Monumental Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.06] text-[#09090B] uppercase font-sans">
            <span className="block text-[#09090B]">
              DIGITAL SOFTWARE
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700">
              ENGINEERED FOR
            </span>
            <span className="flex items-center flex-wrap mt-1">
              <span className="text-[#FF6B00] font-mono mr-2 sm:mr-3 drop-shadow-[0_0_15px_rgba(255,107,0,0.35)]">
                &#123;
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A00] via-[#FF6B00] to-[#EA580C] tracking-tight">
                VELOCITY & SCALE
              </span>
              <span className="text-[#FF6B00] font-mono ml-2 sm:mr-3 drop-shadow-[0_0_15px_rgba(255,107,0,0.35)]">
                &#125;
              </span>
            </span>
          </h1>

          {/* Plain, category-first copy */}
          <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-xl font-normal leading-relaxed">
            We engineer high-throughput web applications, distributed cloud infrastructure, and autonomous AI systems for founders and enterprise product teams.
          </p>

          {/* 3 Hard Facts Bar */}
          <div className="mt-7 pt-6 border-t border-slate-200 w-full max-w-xl grid grid-cols-3 gap-3 font-mono">
            <div>
              <div className="text-[11px] text-slate-500 uppercase tracking-wider">LATENCY SLO</div>
              <div className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">&lt; 15ms Edge</div>
            </div>
            <div>
              <div className="text-[11px] text-slate-500 uppercase tracking-wider">UPTIME TARGET</div>
              <div className="text-base sm:text-lg font-bold text-[#EA580C] mt-0.5">99.999% SLA</div>
            </div>
            <div>
              <div className="text-[11px] text-slate-500 uppercase tracking-wider">CODE SAFETY</div>
              <div className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">100% Typed</div>
            </div>
          </div>

          {/* Action Row with Beam Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <BeamButton
              href="/quote"
              variant="primary"
              className="px-7 py-3.5 rounded-full text-sm font-bold"
            >
              <span>Configure Project Estimate</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5] ml-2" />
            </BeamButton>

            <BeamButton
              href="#simulator"
              variant="secondary"
              className="px-6 py-3.5 rounded-full text-sm font-semibold"
            >
              <Activity className="w-4 h-4 text-[#FF6B00] mr-2" />
              <span>Launch Simulator</span>
            </BeamButton>
          </div>
        </div>

        {/* Right Column: Authentic Living Architecture Console with Interactive Playground */}
        <div className="lg:col-span-6 relative w-full pt-4 lg:pt-0">
          
          <TiltCard intensity="subtle" showBeam={true} className="rounded-2xl">
            <div className="bg-[#0D1117] rounded-2xl p-4 sm:p-5 backdrop-blur-2xl border border-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.4),0_0_25px_rgba(255,107,0,0.12)]">
              
              {/* Header Bar: Window controls & Tab Switcher */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3.5 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#FF5F56] inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#FFBD2E] inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#27C93F] inline-block" />
                </div>

                {/* 5 Architecture Language Tabs */}
                <div className="flex items-center gap-1 bg-black/60 p-1 rounded-xl border border-slate-800 overflow-x-auto max-w-[280px] sm:max-w-none">
                  {(['rust', 'ts', 'nextjs', 'python', 'go'] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => handleTabChange(tab)}
                      className={`px-2 py-1 rounded-lg text-[10px] sm:text-[11px] font-mono transition-all ${
                        activeTab === tab
                          ? 'bg-[#FF6B00] text-white font-bold shadow-[0_0_12px_rgba(255,107,0,0.4)]'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {tab.toUpperCase()}
                    </button>
                  ))}
                </div>

                {/* Simulation & Copy Action Controls */}
                <div className="flex items-center gap-1.5">
                  {/* Edit Toggle */}
                  <button
                    onClick={() => {
                      soundManager.play('click');
                      setIsEditing(!isEditing);
                    }}
                    className={`p-1.5 rounded-lg border transition-all btn-tactile text-xs font-mono flex items-center gap-1 ${
                      isEditing
                        ? 'bg-orange-500/20 text-[#FF7A00] border-orange-500'
                        : 'bg-white/5 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                    title={isEditing ? 'View Syntax Highlighting' : 'Edit Source Code'}
                    aria-label="Toggle edit mode"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                  </button>

                  {/* Reset Code if modified */}
                  {isModified && (
                    <button
                      onClick={handleResetCode}
                      className="p-1.5 rounded-lg bg-white/5 border border-slate-800 hover:border-slate-700 text-amber-400 hover:text-white transition-all btn-tactile"
                      title="Reset code to default"
                      aria-label="Reset code"
                    >
                      <Undo2 className="w-3.5 h-3.5" />
                    </button>
                  )}

                  {/* Copy Button */}
                  <button
                    onClick={handleCopyCode}
                    className="p-1.5 rounded-lg bg-white/5 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-all btn-tactile"
                    title={copied ? 'Copied code!' : 'Copy snippet'}
                    aria-label="Copy code snippet"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>

                  {/* Run Button */}
                  <button
                    onClick={handleRunSimulation}
                    disabled={isExecuting}
                    className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#FF6B00]/20 border border-[#FF6B00]/40 hover:border-[#FF6B00] text-[#FF7A00] hover:text-white transition-all btn-tactile font-mono text-[10px] font-bold"
                    title="Simulate runtime execution"
                    aria-label="Simulate runtime execution"
                  >
                    <RotateCw className={`w-3.5 h-3.5 ${isExecuting ? 'animate-spin' : ''}`} />
                    <span>RUN</span>
                  </button>
                </div>
              </div>

              {/* Architecture Telemetry Strip */}
              <div className="grid grid-cols-3 gap-2 py-2.5 px-3 my-3 bg-[#080B11] rounded-xl border border-slate-800/80 font-mono text-[11px]">
                <div>
                  <div className="text-slate-500 text-[10px]">P99 LATENCY</div>
                  <div className="text-white font-bold">{activeLatency}</div>
                </div>
                <div>
                  <div className="text-slate-500 text-[10px]">THROUGHPUT</div>
                  <div className="text-[#FF7A00] font-bold">{profile.throughput}</div>
                </div>
                <div>
                  <div className="text-slate-500 text-[10px]">CLUSTER MESH</div>
                  <div className="text-[#4ADE80] font-bold truncate">{profile.clusterStatus}</div>
                </div>
              </div>

              {/* File Title Bar & Interactive Configuration Switch */}
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2 px-1">
                <div className="flex items-center gap-1.5 text-white">
                  <Terminal className="w-3.5 h-3.5 text-[#FF6B00]" />
                  <span>{profile.filename}</span>
                  {isModified && (
                    <span className="text-[9px] px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 font-bold">
                      MODIFIED
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      soundManager.play('switch');
                      setCachingEnabled(!cachingEnabled);
                    }}
                    className={`text-[9px] px-2 py-0.5 rounded border transition-colors ${
                      cachingEnabled
                        ? 'bg-emerald-950/60 border-emerald-700/60 text-emerald-300'
                        : 'bg-red-950/60 border-red-700/60 text-red-300'
                    }`}
                  >
                    EDGE CACHE: {cachingEnabled ? 'ENABLED' : 'BYPASS'}
                  </button>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-white/5 border border-slate-800 text-slate-300">
                    {profile.language}
                  </span>
                </div>
              </div>

              {/* Code Snippet Box (Editable or Highlighted View) */}
              {isEditing ? (
                <div className="bg-[#07090E] p-2.5 rounded-xl border border-orange-500/50">
                  <div className="text-[10px] font-mono text-orange-400 mb-1 flex items-center justify-between">
                    <span>EDITING LIVE ARCHITECTURE LOGIC:</span>
                    <span className="text-slate-500">Click &quot;RUN&quot; to test workload</span>
                  </div>
                  <textarea
                    value={currentCode}
                    onChange={(e) => {
                      const val = e.target.value;
                      setUserCodes((prev) => ({
                        ...prev,
                        [activeTab]: val,
                      }));
                    }}
                    rows={8}
                    className="w-full bg-transparent font-mono text-xs text-slate-100 outline-none resize-none leading-relaxed selection:bg-[#FF6B00]"
                    spellCheck={false}
                  />
                </div>
              ) : (
                <div className="font-mono text-xs leading-relaxed text-slate-200 bg-[#07090E] p-3 rounded-xl border border-slate-800/90 overflow-x-auto max-h-56">
                  <table className="w-full border-collapse">
                    <tbody>
                      {highlightedLines.map((lineNode, idx) => {
                        const lineNum = idx + 1;
                        const isHovered = hoveredLine === lineNum;
                        return (
                          <tr
                            key={idx}
                            onMouseEnter={() => setHoveredLine(lineNum)}
                            onMouseLeave={() => setHoveredLine(null)}
                            className={`transition-colors ${isHovered ? 'bg-[#FF6B00]/15' : ''}`}
                          >
                            <td className="w-8 pr-3 text-right select-none text-slate-600 font-mono text-[11px]">
                              {lineNum}
                            </td>
                            <td className="whitespace-pre font-mono text-[11px] text-slate-200">
                              {lineNode}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Live Execution Output Console Drawer */}
              <div className="mt-3 pt-3 border-t border-slate-800 flex items-start gap-2 text-[11px] font-mono">
                <span className="text-[#4ADE80] flex-shrink-0 mt-0.5">●</span>
                <div className="text-slate-400 leading-normal flex-1">
                  <div>{profile.outputLog}</div>
                  {isExecuting && executionStep && (
                    <div className="text-orange-400 mt-1 flex items-center gap-2">
                      <span className="inline-block w-2 h-2 rounded-full bg-orange-400 animate-ping" />
                      <span>{executionStep}</span>
                    </div>
                  )}
                  {executionCount > 0 && !isExecuting && (
                    <div className="text-emerald-400 mt-1">
                      → Benchmark run #{executionCount} passed: latency {activeLatency}, 0 leaks, edge throughput verified.
                    </div>
                  )}
                </div>
              </div>

            </div>
          </TiltCard>

          {/* Architecture Validation Micro-Badge */}
          <div className="mt-3 flex items-center justify-between px-2 text-[11px] font-mono text-slate-600">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#FF6B00]" />
              <span>SOC2 TYPE II • OWASP TOP-10 COMPLIANT</span>
            </div>
            <span className="text-emerald-600 font-semibold">VERIFIED PRODUCTION READY</span>
          </div>

        </div>

      </div>

      {/* Hero Bottom Telemetry Bar */}
      <div className="relative z-20 max-w-7xl mx-auto w-full pt-10 mt-6 border-t border-slate-200 flex flex-col lg:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-600 text-center lg:text-left">
        
        {/* Left: Operational Regions */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
          <span className="text-slate-500 font-medium">REGIONS:</span>
          <span className="text-slate-900 font-semibold">US-EAST</span>
          <span className="text-slate-300">•</span>
          <span className="text-slate-900 font-semibold">EU-CENTRAL</span>
          <span className="text-slate-300">•</span>
          <span className="text-slate-900 font-semibold">AP-SOUTH</span>
        </div>

        {/* Center: System Status */}
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
          <span className="text-slate-900 font-semibold">ALL GLOBAL SYSTEMS OPERATIONAL</span>
        </div>

        {/* Right: Scroll to explore simulator */}
        <a
          href="#simulator"
          className="inline-flex items-center gap-2 text-slate-600 hover:text-orange-600 transition-colors group"
        >
          <span>EXPLORE TELEMETRY BENCHMARK LAB</span>
          <div className="w-6 h-6 rounded bg-slate-100 border border-slate-200 flex items-center justify-center group-hover:border-orange-400 text-slate-700 group-hover:text-orange-600 transition-colors">
            <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
          </div>
        </a>

      </div>

    </section>
  );
};
