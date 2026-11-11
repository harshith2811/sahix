'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Search, 
  Sparkles, 
  Code2, 
  Smartphone, 
  Cpu, 
  Cloud, 
  Terminal, 
  Layout, 
  ShoppingBag, 
  Zap, 
  Calculator, 
  Layers, 
  MessageSquare, 
  Volume2, 
  VolumeX, 
  ArrowRight, 
  CornerDownLeft, 
  X,
  Compass,
  FileCode2,
  Activity,
  ShieldCheck,
  Check,
  ExternalLink,
  BookOpen,
  Filter
} from 'lucide-react';
import { soundManager } from '@/lib/audio';

type CategoryType = 'All' | 'Tools' | 'Services' | 'Projects' | 'Navigation' | 'Actions';

interface PaletteItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'Tools' | 'Services' | 'Projects' | 'Navigation' | 'Actions';
  icon: React.ElementType;
  shortcut?: string;
  action: () => void;
}

export const CommandPalette: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('All');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [copiedNotice, setCopiedNotice] = useState(false);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const listRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setIsMuted(soundManager.isMuted());
    const handleSoundToggle = (e: Event) => {
      const custom = e as CustomEvent<{ muted: boolean }>;
      setIsMuted(custom.detail.muted);
    };
    window.addEventListener('sahix-sound-toggle', handleSoundToggle);
    return () => window.removeEventListener('sahix-sound-toggle', handleSoundToggle);
  }, []);

  // Global keydown listener for Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => {
          const next = !prev;
          if (next) soundManager.play('blip');
          return next;
        });
      }
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    const handleCustomOpen = () => {
      setIsOpen(true);
      soundManager.play('blip');
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('sahix-open-palette', handleCustomOpen);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('sahix-open-palette', handleCustomOpen);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
    } else {
      setQuery('');
      setSelectedCategory('All');
    }
  }, [isOpen]);

  const items: PaletteItem[] = useMemo(() => [
    // Interactive Tools
    {
      id: 'tool-sim',
      title: 'Launch Live Architecture & Telemetry Simulator',
      subtitle: 'Tune concurrent load, edge caching, and inspect real-time p99 latency',
      category: 'Tools',
      icon: Activity,
      shortcut: 'SIM',
      action: () => {
        setIsOpen(false);
        const el = document.getElementById('simulator');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          router.push('/#simulator');
        }
      },
    },
    {
      id: 'tool-estimator',
      title: 'Interactive Project Estimator',
      subtitle: 'Calculate project investment, delivery weeks, and team configuration',
      category: 'Tools',
      icon: Calculator,
      shortcut: 'EST',
      action: () => {
        setIsOpen(false);
        router.push('/quote');
      },
    },
    {
      id: 'action-sound',
      title: isMuted ? 'Enable High-Tech Audio Feedback' : 'Mute High-Tech Audio Feedback',
      subtitle: isMuted ? 'Turn on subtle synthesized click, blip, and sweep sound effects' : 'Silence synthesized audio feedback',
      category: 'Actions',
      icon: isMuted ? VolumeX : Volume2,
      shortcut: 'SND',
      action: () => {
        const next = soundManager.toggleMute();
        setIsMuted(next);
      },
    },
    {
      id: 'action-whatsapp',
      title: 'Instant WhatsApp Architecture Consultation',
      subtitle: 'Direct encrypted channel with our lead software architects',
      category: 'Actions',
      icon: MessageSquare,
      shortcut: 'WA',
      action: () => {
        setIsOpen(false);
        const msg = encodeURIComponent('Hello SAHIX team, I would like to schedule an architecture consultation for an upcoming software project.');
        window.open(`https://wa.me/919999999999?text=${msg}`, '_blank');
      },
    },
    {
      id: 'action-copy-email',
      title: 'Copy Enterprise Inquiries Email',
      subtitle: 'hello@sahix.com (Click to copy to clipboard)',
      category: 'Actions',
      icon: Check,
      action: () => {
        if (typeof navigator !== 'undefined' && navigator.clipboard) {
          navigator.clipboard.writeText('hello@sahix.com');
          soundManager.play('success');
          setCopiedNotice(true);
          setTimeout(() => setCopiedNotice(false), 2000);
        }
      },
    },

    // Production Case Studies
    {
      id: 'proj-nexuspay',
      title: 'NexusPay Distributed Payment Engine',
      subtitle: 'FinTech • 450,000 req/s • 8.4ms p99 latency • Zero-downtime ledger',
      category: 'Projects',
      icon: Layers,
      shortcut: 'NEX',
      action: () => {
        setIsOpen(false);
        router.push('/projects/nexuspay-payment-engine');
      },
    },
    {
      id: 'proj-aetherhealth',
      title: 'AetherHealth AI Clinical Copilot',
      subtitle: 'HealthTech • 99.4% diagnostic accuracy • HIPAA compliant LLM RAG pipeline',
      category: 'Projects',
      icon: Cpu,
      shortcut: 'AET',
      action: () => {
        setIsOpen(false);
        router.push('/projects/aetherhealth-ai-copilot');
      },
    },
    {
      id: 'proj-omnilogix',
      title: 'OmniLogix Autonomous Supply Chain Platform',
      subtitle: 'Logistics • 60% dispatch turnaround • Real-time geospatial telemetry',
      category: 'Projects',
      icon: Compass,
      shortcut: 'OMN',
      action: () => {
        setIsOpen(false);
        router.push('/projects/omnilogix-supply-chain');
      },
    },
    {
      id: 'proj-quantumscale',
      title: 'QuantumScale Cloud Orchestration Platform',
      subtitle: 'Cloud / DevOps • 99.999% SLA • Multi-region Terraform & Kubernetes',
      category: 'Projects',
      icon: Cloud,
      shortcut: 'QTM',
      action: () => {
        setIsOpen(false);
        router.push('/projects/quantumscale-cloud-platform');
      },
    },

    // Services
    {
      id: 'srv-web',
      title: 'Web Application Development',
      subtitle: 'Ultra-fast Next.js 14, React 18, edge computing & headless architectures',
      category: 'Services',
      icon: Code2,
      action: () => {
        setIsOpen(false);
        router.push('/services/web-development');
      },
    },
    {
      id: 'srv-mobile',
      title: 'Mobile App Development',
      subtitle: 'Native iOS & Android, Flutter, cross-platform enterprise mobile apps',
      category: 'Services',
      icon: Smartphone,
      action: () => {
        setIsOpen(false);
        router.push('/services/mobile-app-development');
      },
    },
    {
      id: 'srv-ai',
      title: 'AI & Machine Learning Systems',
      subtitle: 'Autonomous agents, enterprise LLM pipelines, vector search & RAG',
      category: 'Services',
      icon: Cpu,
      action: () => {
        setIsOpen(false);
        router.push('/services/ai-development');
      },
    },
    {
      id: 'srv-cloud',
      title: 'Cloud Solutions & DevOps',
      subtitle: 'Multi-region Kubernetes, AWS/GCP architecture, Terraform automation',
      category: 'Services',
      icon: Cloud,
      action: () => {
        setIsOpen(false);
        router.push('/services/cloud-solutions');
      },
    },
    {
      id: 'srv-custom',
      title: 'Custom Enterprise Software',
      subtitle: 'Bespoke microservices, high-throughput engines, Rust & Go backends',
      category: 'Services',
      icon: Terminal,
      action: () => {
        setIsOpen(false);
        router.push('/services/custom-software-development');
      },
    },
    {
      id: 'srv-design',
      title: 'UI/UX Design Systems',
      subtitle: 'Tokenized Figma architectures, tactile design, Awwwards-grade motion',
      category: 'Services',
      icon: Layout,
      action: () => {
        setIsOpen(false);
        router.push('/services/ui-ux-design');
      },
    },
    {
      id: 'srv-ecom',
      title: 'Headless E-Commerce Development',
      subtitle: 'Shopify Plus, Medusa, custom checkout & high-volume cart engines',
      category: 'Services',
      icon: ShoppingBag,
      action: () => {
        setIsOpen(false);
        router.push('/services/ecommerce-development');
      },
    },
    {
      id: 'srv-auto',
      title: 'Business Workflow Automation',
      subtitle: 'Event-driven integrations, internal tooling, RPA & process optimization',
      category: 'Services',
      icon: Zap,
      action: () => {
        setIsOpen(false);
        router.push('/services/business-automation');
      },
    },

    // Navigation
    {
      id: 'nav-home',
      title: 'Home // Mission Control',
      subtitle: 'Hero workstation, telemetry, capabilities, and verified case studies',
      category: 'Navigation',
      icon: Sparkles,
      shortcut: 'G H',
      action: () => {
        setIsOpen(false);
        router.push('/');
      },
    },
    {
      id: 'nav-projects',
      title: 'Projects & Production Proof',
      subtitle: 'Verified case studies, architecture diagrams, and throughput metrics',
      category: 'Navigation',
      icon: Layers,
      shortcut: 'G P',
      action: () => {
        setIsOpen(false);
        router.push('/projects');
      },
    },
    {
      id: 'nav-pricing',
      title: 'Pricing & Transparent Packages',
      subtitle: 'Starter MVP, Growth Scaling, and Enterprise SLA retainers',
      category: 'Navigation',
      icon: Calculator,
      shortcut: 'G $',
      action: () => {
        setIsOpen(false);
        router.push('/pricing');
      },
    },
    {
      id: 'nav-solutions',
      title: 'Solutions by Industry',
      subtitle: 'FinTech, HealthTech, AI SaaS, E-Commerce, Logistics & EdTech',
      category: 'Navigation',
      icon: Compass,
      action: () => {
        setIsOpen(false);
        router.push('/solutions');
      },
    },
    {
      id: 'nav-process',
      title: '7-Step Engineering Lifecycle',
      subtitle: 'From Architecture Discovery to Zero-Downtime Deployment',
      category: 'Navigation',
      icon: FileCode2,
      action: () => {
        setIsOpen(false);
        router.push('/process');
      },
    },
    {
      id: 'nav-insights',
      title: 'Engineering Insights & Tech Blog',
      subtitle: 'Deep dives on Rust, Next.js App Router, distributed systems & AI RAG',
      category: 'Navigation',
      icon: BookOpen,
      action: () => {
        setIsOpen(false);
        router.push('/insights');
      },
    },
    {
      id: 'nav-about',
      title: 'About SAHIX Digital Software',
      subtitle: 'Company mission, leadership, core engineering values & culture',
      category: 'Navigation',
      icon: ShieldCheck,
      action: () => {
        setIsOpen(false);
        router.push('/about');
      },
    },
    {
      id: 'nav-portal',
      title: 'Client Portal Login',
      subtitle: 'Access live project boards, sprint deliverables, and staging builds',
      category: 'Navigation',
      icon: ShieldCheck,
      action: () => {
        setIsOpen(false);
        router.push('/login');
      },
    },
  ], [isMuted, router]);

  // Filtered items based on query & selected category
  const filteredItems = useMemo(() => {
    let result = items;
    if (selectedCategory !== 'All') {
      result = result.filter((item) => item.category === selectedCategory);
    }
    if (!query.trim()) return result;
    const lower = query.toLowerCase();
    return result.filter(
      (item) =>
        item.title.toLowerCase().includes(lower) ||
        item.subtitle.toLowerCase().includes(lower) ||
        item.category.toLowerCase().includes(lower) ||
        (item.shortcut && item.shortcut.toLowerCase().includes(lower))
    );
  }, [items, query, selectedCategory]);

  // Auto-scroll selected item into view on keyboard navigation
  useEffect(() => {
    if (listRef.current) {
      const activeElement = listRef.current.children[selectedIndex] as HTMLElement | undefined;
      if (activeElement) {
        activeElement.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [selectedIndex]);

  // Handle keyboard list navigation
  const handleKeyDownList = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      soundManager.play('click');
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredItems.length));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      soundManager.play('click');
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % Math.max(1, filteredItems.length));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        soundManager.play('execute');
        filteredItems[selectedIndex].action();
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="High-Tech Command Palette"
      className="fixed inset-0 z-[100] flex items-start justify-center pt-14 sm:pt-20 px-4 bg-slate-950/60 backdrop-blur-md animate-in fade-in duration-150"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="w-full max-w-2xl rounded-2xl bg-white border border-slate-200/90 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3),0_0_35px_rgba(255,107,0,0.18)] overflow-hidden flex flex-col animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDownList}
      >
        {/* Top Search Input Bar */}
        <div className="relative flex items-center px-4 py-3.5 border-b border-slate-200 bg-slate-50/80">
          <Search className="w-5 h-5 text-[#FF6B00] mr-3 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Type a command, project, service, or search anything..."
            className="w-full bg-transparent text-sm sm:text-base font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => {
                setQuery('');
                setSelectedIndex(0);
              }}
              className="p-1 rounded-md text-slate-400 hover:text-slate-600 mr-2"
              aria-label="Clear query"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded bg-white border border-slate-200 font-mono text-[10px] text-slate-500 shadow-xs">
            ESC
          </kbd>
        </div>

        {/* Quick Category Filter Pills */}
        <div className="px-4 py-2 border-b border-slate-100 bg-white flex items-center gap-1.5 overflow-x-auto text-xs font-mono">
          <Filter className="w-3.5 h-3.5 text-slate-400 mr-1 flex-shrink-0" />
          {(['All', 'Tools', 'Services', 'Projects', 'Navigation', 'Actions'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => {
                soundManager.play('click');
                setSelectedCategory(cat);
                setSelectedIndex(0);
              }}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-orange-50 text-[#EA580C] border border-orange-300 shadow-xs'
                  : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50 border border-transparent'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Notice Banner if email copied */}
        {copiedNotice && (
          <div className="px-4 py-2 bg-emerald-50 border-b border-emerald-200 text-emerald-800 text-xs font-mono flex items-center gap-2">
            <Check className="w-3.5 h-3.5 text-emerald-600" />
            <span>Copied hello@sahix.com to clipboard!</span>
          </div>
        )}

        {/* Results List */}
        <div ref={listRef} className="max-h-[55vh] overflow-y-auto p-2 space-y-1">
          {filteredItems.length === 0 ? (
            <div className="py-12 text-center text-slate-500 text-xs font-mono">
              No matching specifications or commands found for &quot;{query}&quot;.
            </div>
          ) : (
            filteredItems.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  onClick={() => {
                    soundManager.play('execute');
                    item.action();
                  }}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`px-3.5 py-2.5 rounded-xl flex items-center justify-between cursor-pointer transition-all duration-150 ${
                    isSelected
                      ? 'bg-orange-50/90 text-slate-900 border border-orange-300 shadow-sm'
                      : 'text-slate-700 hover:bg-slate-50 border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                        isSelected
                          ? 'bg-[#FF6B00] text-white shadow-sm shadow-orange-500/30'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <div className="flex items-center gap-2">
                        <span className={`text-xs font-bold truncate ${isSelected ? 'text-slate-950' : 'text-slate-800'}`}>
                          {item.title}
                        </span>
                        <span className="text-[10px] font-mono uppercase px-1.5 py-0.2 rounded bg-slate-100 text-slate-500 border border-slate-200 flex-shrink-0">
                          {item.category}
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-500 truncate mt-0.5">
                        {item.subtitle}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 ml-3 flex-shrink-0">
                    {item.shortcut && (
                      <kbd className="hidden sm:inline-block px-1.5 py-0.5 rounded bg-white border border-slate-200 font-mono text-[10px] text-slate-600 font-bold">
                        {item.shortcut}
                      </kbd>
                    )}
                    {isSelected && (
                      <CornerDownLeft className="w-3.5 h-3.5 text-[#FF6B00]" />
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer Shortcut Navigation Bar */}
        <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-[11px] font-mono text-slate-500">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-white border border-slate-200 rounded text-[10px]">↑</kbd>
              <kbd className="px-1.5 py-0.5 bg-white border border-slate-200 rounded text-[10px]">↓</kbd>
              <span>to navigate</span>
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-white border border-slate-200 rounded text-[10px]">↵</kbd>
              <span>to select</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="flex h-1.5 w-1.5 rounded-full bg-[#FF6B00] animate-pulse" />
            <span className="text-slate-700 font-semibold">SAHIX SPOTLIGHT [V4]</span>
          </div>
        </div>
      </div>
    </div>
  );
};
