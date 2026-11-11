# SAHIX — Digital Software & Architecture

> **"Engineering Tomorrow's Digital World."**

SAHIX is a futuristic, world-class software development company web platform built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion aesthetics. The design features a pristine White & Radiant Orange luxury modern tech atmosphere with warm golden-orange lighting, glassmorphism floating pill navigation, an interactive floating code editor window with live execution, a global Command Palette (`⌘K`), real-time architecture & telemetry simulator, interactive project estimator, client dashboard, admin CRM, and complete multi-page architecture.

---

## 🚀 Key Features & Highlights

1. **Brand Identity & Color Palette**:
   - Signature Palette: Pure White (`#FFFFFF`), Warm Porcelain (`#FAFAFA`), Radiant High-Tech Orange (`#FF6B00` / `#FFA048`), Warm Gold beam light (`#D6A45B`), and High-Contrast Slate Charcoal (`#09090B`).
   - High-fidelity vector ribbon knot emblem with embedded growth, share/network, sparkle, and code icons, matching the official SAHIX branding.
2. **Interactive Hero Section**:
   - Oversized typography: `FUTURE-DRIVEN SOFTWARE { DEVELOPMENT }` with glowing orange braces.
   - Interactive Floating Code Editor with multiple tabs (Rust, TypeScript, Next.js, Python, Go), live code execution, output terminal drawer, and line editing.
   - Cursor-reactive particle wave grid canvas.
   - Circuit connector trace leading to a glowing golden-orange security lock chip.
   - Floating cookie consent banner with accept/decline actions.
   - Social links and "Scroll to explore" pill indicator.
3. **Global Spotlight Command Palette (`⌘K` / `Ctrl+K`)**:
   - Fuzzy-search across all 8 architectural practices, production case studies, engineering articles, and direct system actions with full keyboard navigation.
4. **Interactive Architecture & Live Telemetry Simulator**:
   - Dynamic concurrency traffic slider (`1,000` to `500,000+` RPS), real-time p99 latency waveforms, edge caching, global failover switches, and streaming ingress logs.
5. **Interactive Project Estimator (`/quote`)**:
   - Dynamic real-time calculation engine with cost vs. delivery speed slider, squad breakdown, platform pickers, and direct proposal lead submission.
6. **Full Multi-Page Structure (36+ Prerendered Pages)**:
   - Homepage (`/`)
   - About Us (`/about`)
   - Services Catalog (`/services`)
   - Dedicated Services Pages (`/services/web-development`, `mobile-app-development`, `ai-development`, `custom-software-development`, `cloud-solutions`, `ui-ux-design`, `ecommerce-development`, `business-automation`)
   - Case Studies & Portfolio (`/projects` and `/projects/[slug]`)
   - Transparent Pricing Plans (`/pricing`)
   - Solutions by Industry (`/solutions`)
   - 7-Step Development Lifecycle Timeline (`/process`)
   - Technology Matrix (`/technologies`)
   - Engineering Insights & Blog (`/insights` and `/insights/[slug]`)
   - Contact with WhatsApp shortcut (`/contact`)
   - Interactive Project Estimator (`/quote`)
   - Dual-Portal Login / Register (`/login`)
   - Authenticated Client Dashboard (`/dashboard`)
   - Protected Admin CRM & Lead Pipeline Manager (`/admin`)
   - Legal Notices (`/privacy`, `/terms`)
   - Custom Cyberpunk 404 (`/not-found`)
7. **Backend & Data Storage**:
   - Next.js server route handlers: `/api/leads` and `/api/quotes`.
   - Browser localStorage persistence for instantaneous demonstration without external database setup.
   - Supabase / PostgreSQL-ready types and schema definitions.

---

## 🛠️ Technology Stack

- **Framework**: Next.js 14.2+ (App Router)
- **Language**: TypeScript 5.6+
- **Styling**: Tailwind CSS 3.4+
- **Icons**: Lucide React
- **Animations**: Tailwind Keyframe animations, GPU-accelerated CSS transforms, Web Audio API, Haptic Feedback

---

## 💻 Quick Start & Installation

### 1. Prerequisites
- Node.js 18+ (tested with Node.js v22.11)
- npm or pnpm

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build Production Bundle
```bash
npm run build
npm run start
```

---

## 📁 Project Architecture

```
sahix/
├── src/
│   ├── app/                      # Next.js App Router (All 22+ pages & API routes)
│   │   ├── page.tsx              # Homepage
│   │   ├── layout.tsx            # Global layout with floating Navbar & Footer
│   │   ├── not-found.tsx         # Custom 404 page
│   │   ├── about/                # About SAHIX
│   │   ├── services/             # Services overview and [slug] landing pages
│   │   ├── projects/             # Portfolio and [slug] case studies
│   │   ├── pricing/              # Transparent pricing plans
│   │   ├── solutions/            # Industry vertical solutions
│   │   ├── process/              # 7-Step development timeline
│   │   ├── technologies/         # Evaluated technology stack
│   │   ├── insights/             # Technical blog and articles
│   │   ├── contact/              # Contact form & WhatsApp bridge
│   │   ├── quote/                # Interactive Project Estimator
│   │   ├── login/                # Auth portal
│   │   ├── dashboard/            # Client Portal
│   │   ├── admin/                # Admin CRM & pipeline control
│   │   ├── privacy/              # Privacy policy
│   │   ├── terms/                # Terms of service
│   │   └── api/                  # Server route handlers (/api/leads, /api/quotes)
│   ├── components/
│   │   ├── navigation/           # Glassmorphism Navbar & Mobile menu
│   │   ├── hero/                 # Hero section with interactive code playground & lock chip
│   │   ├── sections/             # Stats, Telemetry, Services, Projects, WhyUs, Timeline, TechStack, Testimonials, CTA
│   │   ├── estimator/            # Interactive Project Estimator
│   │   ├── forms/                # Contact form with validation & anti-spam
│   │   ├── portal/               # Client project progress & deliverables
│   │   ├── admin/                # Admin CRM pipeline table & status updates
│   │   ├── footer/               # Global footer
│   │   └── ui/                   # Logo, TiltCard, BeamButton, CommandPalette, WhatsApp float button
│   ├── lib/
│   │   ├── data.ts               # Complete initial data (services, projects, blog, leads, quotes)
│   │   └── audio.ts              # Tactile sound & haptic engine
│   ├── styles/
│   │   └── globals.css           # Glassmorphism styles, border-beam glow, light canvas
│   └── types/
│       └── index.ts              # Strict TypeScript interfaces
```

---

## 🌐 Deployment Instructions

### Vercel (Recommended)
1. Push repository to GitHub.
2. Import project in Vercel.
3. Deploy! Next.js App Router is optimized natively on Vercel with zero extra config required.

---

© 2026 SAHIX Digital Software Inc. All rights reserved.
