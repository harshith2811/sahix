'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from '../ui/Logo';
import { 
  ChevronDown, 
  Sparkles, 
  Globe, 
  Menu, 
  X, 
  ArrowRight, 
  Code2, 
  Smartphone, 
  Cpu, 
  Terminal, 
  Cloud, 
  Layout, 
  ShoppingBag, 
  Zap,
  Search,
  Volume2,
  VolumeX,
  Command
} from 'lucide-react';
import { soundManager } from '@/lib/audio';

const SERVICES_MENU = [
  { name: 'Web Development', href: '/services/web-development', icon: Code2, desc: 'Ultra-fast Next.js & React enterprise apps' },
  { name: 'Mobile App Development', href: '/services/mobile-app-development', icon: Smartphone, desc: 'Native iOS & Android, Flutter apps' },
  { name: 'AI & Machine Learning', href: '/services/ai-development', icon: Cpu, desc: 'Enterprise LLMs, RAG & agents' },
  { name: 'Custom Software', href: '/services/custom-software-development', icon: Terminal, desc: 'Bespoke microservices & systems' },
  { name: 'Cloud & DevOps', href: '/services/cloud-solutions', icon: Cloud, desc: 'Kubernetes, AWS, CI/CD automation' },
  { name: 'UI/UX Design', href: '/services/ui-ux-design', icon: Layout, desc: 'Tokenized Figma systems & prototypes' },
  { name: 'E-Commerce Development', href: '/services/ecommerce-development', icon: ShoppingBag, desc: 'High-converting headless commerce' },
  { name: 'Business Automation', href: '/services/business-automation', icon: Zap, desc: 'Event-driven workflows & bots' },
];

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('English');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    setIsMuted(soundManager.isMuted());
    const handleSoundToggle = (e: Event) => {
      const custom = e as CustomEvent<{ muted: boolean }>;
      setIsMuted(custom.detail.muted);
    };
    window.addEventListener('sahix-sound-toggle', handleSoundToggle);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setServicesOpen(false);
        setLangOpen(false);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('sahix-sound-toggle', handleSoundToggle);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const openPalette = () => {
    soundManager.play('blip');
    window.dispatchEvent(new CustomEvent('sahix-open-palette'));
  };

  const handleToggleSound = () => {
    const next = soundManager.toggleMute();
    setIsMuted(next);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pt-4 sm:pt-6">
      {/* Floating Glassmorphic Container */}
      <nav
        className={`w-full max-w-7xl rounded-full border transition-all duration-300 px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-xl border-[#FF6B00]/30 shadow-[0_10px_30px_rgba(255,107,0,0.08),0_2px_8px_rgba(0,0,0,0.04)]'
            : 'bg-white/85 backdrop-blur-lg border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.04)]'
        }`}
      >
        {/* Left: Brand Logo */}
        <Logo size="sm" showSubtitle={false} />

        {/* Center: Navigation Links */}
        <div className="hidden lg:flex items-center gap-1.5 xl:gap-2">
          {/* Home Link with Star Pill Indicator */}
          <Link
            href="/"
            onClick={() => soundManager.play('click')}
            className={`px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-medium flex items-center gap-1.5 transition-all duration-200 ${
              pathname === '/'
                ? 'bg-orange-50 text-orange-600 border border-orange-300 shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#FF6B00]" />
            <span>Home</span>
          </Link>

          <Link
            href="/about"
            onClick={() => soundManager.play('click')}
            className={`hidden 2xl:flex px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-medium transition-all duration-200 ${
              pathname === '/about'
                ? 'bg-orange-50 text-orange-600 border border-orange-300 shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
            }`}
          >
            About
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              onClick={() => {
                soundManager.play('click');
                setServicesOpen(!servicesOpen);
              }}
              aria-haspopup="true"
              aria-expanded={servicesOpen}
              className={`px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-medium flex items-center gap-1 transition-all duration-200 ${
                pathname.startsWith('/services')
                  ? 'bg-orange-50 text-orange-600 border border-orange-300 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
              }`}
            >
              <span>Services</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180 text-[#FF6B00]' : ''}`} />
            </button>

            {/* Megamenu dropdown */}
            {servicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[580px]">
                <div className="bg-white/98 backdrop-blur-2xl border border-orange-200 rounded-2xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.1),0_0_20px_rgba(255,107,0,0.08)] grid grid-cols-2 gap-2">
                  {SERVICES_MENU.map((srv, idx) => (
                    <Link
                      key={srv.href}
                      href={srv.href}
                      onClick={() => {
                        soundManager.play('click');
                        setServicesOpen(false);
                      }}
                      className="group/item p-3 rounded-xl hover:bg-orange-50/70 transition-all duration-200 border border-transparent hover:border-orange-200 flex items-start gap-3"
                    >
                      <div className="p-2 rounded-lg bg-orange-50 border border-orange-200 text-[#FF6B00] group-hover/item:bg-[#FF6B00] group-hover/item:text-white transition-colors duration-200">
                        <srv.icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-900 group-hover/item:text-orange-600 transition-colors flex items-center gap-1.5">
                          <span className="font-mono text-[10px] text-[#EA580C]">0{idx + 1}</span>
                          <span>{srv.name}</span>
                        </div>
                        <div className="text-[11px] text-slate-500 leading-tight line-clamp-1 mt-0.5">
                          {srv.desc}
                        </div>
                      </div>
                    </Link>
                  ))}
                  <div className="col-span-2 pt-2 border-t border-slate-100 flex items-center justify-between px-2">
                    <Link
                      href="/services"
                      onClick={() => setServicesOpen(false)}
                      className="text-xs text-[#FF6B00] hover:text-[#EA580C] flex items-center gap-1 font-mono font-medium"
                    >
                      Explore All 8 Practices <ArrowRight className="w-3 h-3" />
                    </Link>
                    <Link
                      href="/quote"
                      onClick={() => setServicesOpen(false)}
                      className="text-[11px] text-slate-500 hover:text-slate-800 font-mono"
                    >
                      Interactive Estimator →
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/pricing"
            onClick={() => soundManager.play('click')}
            className={`px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-medium transition-all duration-200 ${
              pathname === '/pricing'
                ? 'bg-orange-50 text-orange-600 border border-orange-300 shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
            }`}
          >
            Pricing
          </Link>

          <Link
            href="/solutions"
            onClick={() => soundManager.play('click')}
            className={`hidden xl:flex px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-medium transition-all duration-200 ${
              pathname === '/solutions'
                ? 'bg-orange-50 text-orange-600 border border-orange-300 shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
            }`}
          >
            Solutions
          </Link>

          <Link
            href="/projects"
            onClick={() => soundManager.play('click')}
            className={`px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-medium transition-all duration-200 ${
              pathname.startsWith('/projects')
                ? 'bg-orange-50 text-orange-600 border border-orange-300 shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
            }`}
          >
            Projects
          </Link>

          <Link
            href="/process"
            onClick={() => soundManager.play('click')}
            className={`hidden xl:flex px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-medium transition-all duration-200 ${
              pathname === '/process'
                ? 'bg-orange-50 text-orange-600 border border-orange-300 shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
            }`}
          >
            Process
          </Link>

          <Link
            href="/insights"
            onClick={() => soundManager.play('click')}
            className={`hidden 2xl:flex px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-medium transition-all duration-200 ${
              pathname.startsWith('/insights')
                ? 'bg-orange-50 text-orange-600 border border-orange-300 shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
            }`}
          >
            Insights
          </Link>

          {/* Language Selector */}
          <div className="relative" onMouseLeave={() => setLangOpen(false)}>
            <button
              onClick={() => {
                soundManager.play('click');
                setLangOpen(!langOpen);
              }}
              aria-haspopup="true"
              aria-expanded={langOpen}
              className="px-3 py-1.5 rounded-full text-xs font-medium text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300 flex items-center gap-1.5 transition-all duration-200"
            >
              <Globe className="w-3.5 h-3.5 text-[#FF6B00]" />
              <span>{currentLang}</span>
              <ChevronDown className="w-3 h-3 text-slate-400" />
            </button>

            {langOpen && (
              <div className="absolute right-0 top-full mt-2 w-32 bg-white border border-slate-200 rounded-xl shadow-xl p-1.5 backdrop-blur-xl z-50">
                {['English', 'Deutsch', 'Español', 'Français', '日本語'].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      setCurrentLang(lang);
                      setLangOpen(false);
                      soundManager.play('click');
                    }}
                    className={`w-full text-left px-3 py-1.5 rounded-lg text-xs transition-colors ${
                      currentLang === lang ? 'bg-orange-50 text-orange-600 font-semibold' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right: Command Spotlight, Sound FX Toggle & Auth Buttons */}
        <div className="hidden sm:flex items-center gap-2">
          {/* Spotlight Search Modal Button */}
          <button
            onClick={openPalette}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100/80 hover:bg-orange-50 text-slate-600 hover:text-[#FF6B00] border border-slate-200/90 hover:border-orange-300 text-xs font-mono transition-all btn-tactile"
            aria-label="Open Command Spotlight (Ctrl+K)"
            title="Open Command Spotlight (Ctrl+K)"
          >
            <Search className="w-3.5 h-3.5 text-[#FF6B00]" />
            <span className="hidden xl:inline text-[11px]">Spotlight</span>
            <kbd className="hidden sm:inline-block px-1.5 py-0.2 rounded bg-white border border-slate-200 text-[10px] font-bold text-slate-500">
              ⌘K
            </kbd>
          </button>

          {/* High-Tech Audio FX Toggle */}
          <button
            onClick={handleToggleSound}
            className={`p-2 rounded-full border transition-all btn-tactile ${
              isMuted
                ? 'bg-slate-100 text-slate-400 border-slate-200 hover:text-slate-700'
                : 'bg-orange-50 text-[#FF6B00] border-orange-300 shadow-xs'
            }`}
            title={isMuted ? 'Enable high-tech sound effects' : 'Mute sound effects'}
            aria-label={isMuted ? 'Enable high-tech sound effects' : 'Mute sound effects'}
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
          </button>

          <Link
            href="/login"
            onClick={() => soundManager.play('click')}
            className="px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-700 border border-slate-300 hover:border-orange-400 hover:bg-orange-50/50 hover:text-orange-700 btn-tactile transition-all duration-200"
          >
            Login
          </Link>

          <Link
            href="/quote"
            onClick={() => soundManager.play('click')}
            className="px-4 py-1.5 rounded-full text-xs font-bold bg-[#FF6B00] text-white shadow-[0_4px_14px_rgba(255,107,0,0.3)] hover:bg-[#EA580C] btn-tactile btn-beam transition-all duration-200"
          >
            Start Project
          </Link>
        </div>

        {/* Mobile Action & Hamburger Button */}
        <div className="flex lg:hidden items-center gap-1.5">
          <button
            onClick={openPalette}
            className="p-2 rounded-full bg-slate-100 border border-slate-200 text-slate-700 hover:bg-slate-200 btn-tactile"
            aria-label="Open Command Search"
          >
            <Search className="w-4 h-4 text-[#FF6B00]" />
          </button>
          
          <button
            onClick={handleToggleSound}
            className={`p-2 rounded-full border transition-all btn-tactile ${
              isMuted ? 'bg-slate-100 text-slate-400 border-slate-200' : 'bg-orange-50 text-[#FF6B00] border-orange-300'
            }`}
            aria-label="Toggle Sound"
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-drawer"
            className="p-2 rounded-full bg-slate-100 border border-slate-200 text-slate-700 hover:bg-slate-200 btn-tactile"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#FF6B00]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          role="dialog"
          aria-label="Mobile Navigation"
          className="fixed inset-x-4 top-20 max-h-[82vh] overflow-y-auto bg-white/98 border border-slate-200 rounded-3xl p-6 shadow-2xl backdrop-blur-2xl z-50 lg:hidden flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-200"
        >
          <div className="flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openPalette();
              }}
              className="flex items-center justify-between px-3 py-2.5 rounded-xl bg-orange-50/80 border border-orange-200 text-slate-900 font-semibold"
            >
              <div className="flex items-center gap-2 text-xs font-mono">
                <Search className="w-4 h-4 text-[#FF6B00]" />
                <span>Command Spotlight</span>
              </div>
              <kbd className="px-1.5 py-0.5 rounded bg-white text-[10px] text-slate-600 font-bold">⌘K</kbd>
            </button>

            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 px-3 py-2 rounded-xl text-slate-900 font-semibold hover:bg-orange-50"
            >
              <Sparkles className="w-4 h-4 text-[#FF6B00]" />
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl text-slate-600 font-medium hover:text-slate-900 hover:bg-orange-50/50"
            >
              About SAHIX
            </Link>
            <Link
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl text-slate-600 font-medium hover:text-slate-900 hover:bg-orange-50/50 flex items-center justify-between"
            >
              <span>Services (All 8 Practices)</span>
              <ChevronDown className="w-4 h-4" />
            </Link>
            <div className="pl-6 grid grid-cols-1 sm:grid-cols-2 gap-1.5 border-l border-slate-200 ml-3 py-1">
              {SERVICES_MENU.map((s, idx) => (
                <Link
                  key={s.href}
                  href={s.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 text-xs text-slate-600 hover:text-orange-600 flex items-center gap-2"
                >
                  <span className="font-mono text-[10px] text-[#FF6B00]">0{idx + 1}</span>
                  <span>{s.name}</span>
                </Link>
              ))}
            </div>
            <Link
              href="/projects"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl text-slate-600 font-medium hover:text-slate-900 hover:bg-orange-50/50"
            >
              Projects & Case Studies
            </Link>
            <Link
              href="/pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl text-slate-600 font-medium hover:text-slate-900 hover:bg-orange-50/50"
            >
              Pricing Plans
            </Link>
            <Link
              href="/solutions"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl text-slate-600 font-medium hover:text-slate-900 hover:bg-orange-50/50"
            >
              Solutions by Industry
            </Link>
            <Link
              href="/process"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl text-slate-600 font-medium hover:text-slate-900 hover:bg-orange-50/50"
            >
              Our 7-Step Process
            </Link>
            <Link
              href="/insights"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl text-slate-600 font-medium hover:text-slate-900 hover:bg-orange-50/50"
            >
              Tech Insights / Blog
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl text-slate-600 font-medium hover:text-slate-900 hover:bg-orange-50/50"
            >
              Contact Us
            </Link>
          </div>

          <div className="pt-4 border-t border-slate-200 flex flex-col gap-3">
            <Link
              href="/quote"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-xl bg-[#FF6B00] text-white font-bold shadow-lg shadow-orange-500/25 text-sm btn-tactile btn-beam hover:bg-[#EA580C]"
            >
              Start Your Project (Instant Estimate)
            </Link>
            <div className="grid grid-cols-2 gap-2">
              <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="text-center py-2 rounded-xl border border-slate-300 text-slate-800 text-xs font-semibold btn-tactile hover:bg-slate-50"
              >
                Client Portal
              </Link>
              <Link
                href="/admin"
                onClick={() => setMobileMenuOpen(false)}
                className="text-center py-2 rounded-xl border border-orange-300 bg-orange-50 text-orange-700 text-xs font-semibold btn-tactile hover:bg-orange-100"
              >
                Admin CRM
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
