import { ServiceItem, ProjectItem, BlogPost, ClientProject, Lead, QuoteRequest } from '@/types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'web-dev',
    slug: 'web-development',
    title: 'Web Development',
    shortDesc: 'Ultra-fast, scalable web applications built with Next.js, React, TypeScript, and modern headless architectures.',
    iconName: 'Globe',
    fullDesc: 'We architect and build enterprise-grade web applications designed for maximum performance, bulletproof security, and seamless user experiences. From high-throughput SaaS platforms to complex customer portals, we deliver digital products that scale with your growth.',
    highlights: [
      'Sub-second initial page loads and 99.99% uptime',
      'Micro-frontend and headless CMS integrations',
      'End-to-end type safety with TypeScript & Next.js App Router',
      'SEO-optimized, accessible, and responsive layouts'
    ],
    deliverables: [
      'Production-ready Next.js / React application',
      'Comprehensive API & architecture documentation',
      'Automated CI/CD deployment pipelines',
      'Lighthouse 95+ performance audit report'
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'GraphQL', 'Node.js', 'Vercel'],
    pricingStartingAt: '$4,500'
  },
  {
    id: 'mobile-dev',
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    shortDesc: 'Native iOS & Android apps, plus high-performance cross-platform Flutter and React Native solutions.',
    iconName: 'Smartphone',
    fullDesc: 'Transform your concepts into intuitive, fluid mobile applications that users love. We develop native iOS (Swift) and Android (Kotlin) apps as well as unified cross-platform solutions that achieve 60fps animations, offline resilience, and seamless hardware access.',
    highlights: [
      'Single codebase efficiency with React Native & Flutter',
      'Native Swift & Kotlin for hardware-intensive applications',
      'Biometric authentication & secure offline encrypted storage',
      'App Store & Google Play Store submission management'
    ],
    deliverables: [
      'Signed iOS IPA & Android AAB production builds',
      'Interactive Figma UI/UX design prototype',
      'Push notification & deep linking infrastructure',
      'Automated crash reporting & analytics setup'
    ],
    technologies: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Firebase', 'Fastlane'],
    pricingStartingAt: '$6,000'
  },
  {
    id: 'ai-dev',
    slug: 'ai-development',
    title: 'AI & Machine Learning',
    shortDesc: 'Custom LLM integrations, predictive analytics models, computer vision, and autonomous agent workflows.',
    iconName: 'Cpu',
    fullDesc: 'Empower your enterprise with state-of-the-art artificial intelligence. We build custom retrieval-augmented generation (RAG) pipelines, fine-tuned large language models, computer vision systems, and automated cognitive agents tailored to your domain data.',
    highlights: [
      'Enterprise RAG systems with vector databases (Pinecone, pgvector)',
      'Custom LLM fine-tuning and agentic workflow orchestration',
      'Real-time predictive intelligence and anomaly detection',
      'Private, compliant model deployment (on-prem or private VPC)'
    ],
    deliverables: [
      'Custom AI microservice with REST/gRPC endpoints',
      'Model training pipeline & validation reports',
      'Vector search indexing & embedding pipeline',
      'Security guardrails & compliance governance layer'
    ],
    technologies: ['Python', 'PyTorch', 'TensorFlow', 'LangChain', 'OpenAI', 'Anthropic', 'Pinecone', 'Hugging Face'],
    pricingStartingAt: '$7,500'
  },
  {
    id: 'custom-dev',
    slug: 'custom-software-development',
    title: 'Custom Software Development',
    shortDesc: 'Bespoke enterprise software, distributed systems, API ecosystems, and core business platforms.',
    iconName: 'Terminal',
    fullDesc: 'When off-the-shelf software falls short, SAHIX engineers tailor-made software solutions designed to solve your specific technical challenges and automate mission-critical operations with uncompromised precision.',
    highlights: [
      'Modular microservices architecture for effortless horizontal scaling',
      'Legacy system modernization and zero-downtime migration',
      'Robust relational & distributed database engineering',
      'Strict SOC 2, HIPAA, and GDPR compliance-ready engineering'
    ],
    deliverables: [
      'Modular backend services with OpenAPI/Swagger specifications',
      'Database schema, migrations, and indexing strategy',
      'Comprehensive unit, integration, and e2e test suite',
      'Infrastructure as Code (Terraform / Docker Compose)'
    ],
    technologies: ['Node.js', 'Go', 'Python', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes'],
    pricingStartingAt: '$8,000'
  },
  {
    id: 'cloud-dev',
    slug: 'cloud-solutions',
    title: 'Cloud Solutions & DevOps',
    shortDesc: 'Cloud migration, serverless architecture, Kubernetes clustering, CI/CD automation, and cost optimization.',
    iconName: 'Cloud',
    fullDesc: 'Build resilient, self-healing cloud infrastructure on AWS, Google Cloud, or Azure. We design infrastructure as code, establish automated continuous delivery pipelines, and optimize resource allocation to drastically cut cloud bills while boosting reliability.',
    highlights: [
      'Multi-region high availability architectures',
      'Terraform-based reproducible Infrastructure as Code',
      'Zero-downtime blue/green deployment pipelines',
      '30-50% cloud infrastructure cost optimization audits'
    ],
    deliverables: [
      'Terraform infrastructure repositories',
      'Production Kubernetes / ECS cluster deployment',
      'Prometheus, Grafana, and Datadog monitoring dashboards',
      'Disaster recovery & automated backup playbooks'
    ],
    technologies: ['AWS', 'Google Cloud', 'Terraform', 'Kubernetes', 'Docker', 'GitHub Actions', 'Datadog'],
    pricingStartingAt: '$5,000'
  },
  {
    id: 'uiux-dev',
    slug: 'ui-ux-design',
    title: 'UI/UX Design & Design Systems',
    shortDesc: 'Intuitive interface design, user journey mapping, design systems, and pixel-perfect interactive prototypes.',
    iconName: 'Layout',
    fullDesc: 'We craft human-centric interfaces that turn complex functionality into effortless user journeys. With comprehensive Figma design systems, motion prototyping, and rigorous usability testing, we ensure every interaction delights your users.',
    highlights: [
      'Comprehensive tokenized Figma design systems',
      'Data-driven user research and wireframing',
      'Micro-interactions and motion design specifications',
      'Accessible contrast compliance (WCAG 2.1 AA)'
    ],
    deliverables: [
      'Interactive Figma prototype with component libraries',
      'Design tokens & developer handover documentation',
      'Usability testing reports and conversion optimization insights',
      'Asset package (SVGs, illustrations, icon sets)'
    ],
    technologies: ['Figma', 'Principle', 'Adobe Suite', 'Tokens Studio', 'Storybook'],
    pricingStartingAt: '$3,800'
  },
  {
    id: 'ecom-dev',
    slug: 'ecommerce-development',
    title: 'E-Commerce Development',
    shortDesc: 'Headless storefronts, custom checkout funnels, payment gateways, and inventory synchronization.',
    iconName: 'ShoppingBag',
    fullDesc: 'Build hyper-converting commerce experiences. By uncoupling the frontend from legacy monoliths using headless Shopify, Medusa, or custom commerce engines, we deliver blazing-fast page loads that maximize checkout conversions.',
    highlights: [
      'Sub-second headless storefronts that drive 2x higher conversions',
      'Multi-currency, international localization and tax automation',
      'Custom ERP, warehouse, and inventory sync integrations',
      'Stripe, Apple Pay, PayPal, and crypto payment gateway integration'
    ],
    deliverables: [
      'Full headless e-commerce store deployment',
      'Custom checkout workflow with anti-fraud rules',
      'Analytics & conversion funnel tracking instrumentation',
      'Staff admin training & catalog management manuals'
    ],
    technologies: ['Shopify Plus', 'Medusa.js', 'Next.js', 'Stripe', 'Algolia', 'Sanity CMS'],
    pricingStartingAt: '$5,500'
  },
  {
    id: 'auto-dev',
    slug: 'business-automation',
    title: 'Business Automation & Workflow',
    shortDesc: 'Automated workflow pipelines, ERP/CRM synchronization, data scrapers, and robotic process automation.',
    iconName: 'Zap',
    fullDesc: 'Eliminate repetitive manual bottlenecks and scale your operations without linear headcount increases. We engineer custom automation flows, data synchronization pipelines, and smart bot assistants that keep your business operating 24/7.',
    highlights: [
      'Cross-platform CRM, ERP, and communication synchronization',
      'Intelligent document processing and automated extraction',
      'Webhook brokers and event-driven microservices',
      'Zero-human-intervention transaction workflows'
    ],
    deliverables: [
      'Reliable webhook & event-driven automation engine',
      'Audit logging and error recovery notification pipelines',
      'Integration bridges connecting legacy and modern SaaS tools',
      'Operational time-saved analytics dashboard'
    ],
    technologies: ['Temporal.io', 'n8n', 'Node.js', 'Kafka', 'PostgreSQL', 'Zapier Enterprise'],
    pricingStartingAt: '$4,000'
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'nexuspay',
    title: 'NexusPay Global Cloud Payment Engine',
    slug: 'nexuspay-payment-engine',
    client: 'Nexus Financial Inc.',
    industry: 'Fintech & Banking',
    summary: 'Ultra-low latency global payment orchestration platform processing $80M+ monthly transactions with 99.999% uptime.',
    challenge: 'NexusPay operated on a monolithic system experiencing severe degradation during peak volume spikes, with transaction failure rates rising above 3.2% and slow settlement speeds.',
    solution: 'SAHIX redesigned the core transaction pipeline into an event-driven microservices architecture using Go, Kafka, and distributed PostgreSQL, complemented by a sleek Next.js merchant portal.',
    results: [
      'Reduced average transaction processing latency from 850ms to 42ms',
      'Zero downtime recorded across 14 months of high-volume processing',
      'Handled 400% surge in peak black-Friday transaction volume seamlessly',
      'Passed strict Level 1 PCI-DSS compliance audit with zero findings'
    ],
    technologies: ['Go', 'Next.js', 'Kafka', 'PostgreSQL', 'Docker', 'AWS'],
    metrics: [
      { label: 'Latency Reduction', value: '95%' },
      { label: 'Monthly Volume', value: '$80M+' },
      { label: 'System Uptime', value: '99.999%' },
      { label: 'PCI-DSS', value: 'Level 1' }
    ],
    featuredImage: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80',
    year: '2025',
    liveUrl: 'https://sahix.example.com/cases/nexuspay'
  },
  {
    id: 'aetherhealth',
    title: 'AetherHealth AI Diagnostic Copilot',
    slug: 'aetherhealth-ai-copilot',
    client: 'Aether Medical Systems',
    industry: 'Healthcare & Life Sciences',
    summary: 'HIPAA-compliant AI diagnostic assistant analyzing radiological scans and clinical notes with 98.4% diagnostic concordance.',
    challenge: 'Radiologists faced severe backlogs reviewing hundreds of scans daily, leading to burnout and turnaround times exceeding 48 hours for non-emergency patients.',
    solution: 'Engineered a private vision-language AI model deployed on secured private hospital clusters with zero external cloud data transfer, paired with an ergonomic WebGL imaging viewer.',
    results: [
      'Reduced initial scan review triage time by 64%',
      'Achieved 98.4% concordance with senior board-certified radiologists',
      'Fully HIPAA and HITECH compliant private zero-knowledge architecture',
      'Over 120,000 patient scans triaged across 18 medical centers'
    ],
    technologies: ['Python', 'PyTorch', 'Next.js', 'WebGL', 'Docker', 'Kubernetes'],
    metrics: [
      { label: 'Triage Speed', value: '+64%' },
      { label: 'Accuracy', value: '98.4%' },
      { label: 'Hospitals Live', value: '18' },
      { label: 'HIPAA', value: '100% Compliant' }
    ],
    featuredImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80',
    year: '2025',
    liveUrl: 'https://sahix.example.com/cases/aetherhealth'
  },
  {
    id: 'omnilogix',
    title: 'OmniLogix Autonomous Supply Chain Network',
    slug: 'omnilogix-supply-chain',
    client: 'OmniLogix Global Freight',
    industry: 'Logistics & Supply Chain',
    summary: 'Real-time telemetry tracking and predictive route optimization across 14,000 freight carriers worldwide.',
    challenge: 'Fragmented carrier communication caused blind spots in transit tracking, resulting in significant detention fines and inefficient warehouse cross-docking.',
    solution: 'Built an IoT ingestion engine handling 25,000 telemetry pings per second with TimescaleDB, accompanied by a dynamic map interface utilizing Mapbox GL and real-time WebSockets.',
    results: [
      'Eliminated 92% of blind-spot tracking delays across active cargo',
      'Saved $3.4M in carrier detention fines in the first year of operation',
      'Real-time automated rerouting around severe weather anomalies',
      'Mobile driver app adopted by over 24,000 contracted logistics drivers'
    ],
    technologies: ['TypeScript', 'Node.js', 'TimescaleDB', 'Redis', 'React', 'Mapbox GL'],
    metrics: [
      { label: 'Active Fleets', value: '14,000+' },
      { label: 'Annual Savings', value: '$3.4M' },
      { label: 'Tracking Delay', value: '-92%' },
      { label: 'Telemetry/sec', value: '25k' }
    ],
    featuredImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    year: '2024',
    liveUrl: 'https://sahix.example.com/cases/omnilogix'
  },
  {
    id: 'quantumscale',
    title: 'QuantumScale Developer Cloud Platform',
    slug: 'quantumscale-cloud-platform',
    client: 'QuantumScale Inc.',
    industry: 'DevOps & Developer Tools',
    summary: 'Next-generation cloud development environment enabling one-click container previews and automated staging branches.',
    challenge: 'Engineering teams spent up to 45 minutes provisioning staging environments for pull requests, slowing down release velocity.',
    solution: 'Designed an orchestration engine utilizing Firecracker microVMs and WireGuard networking to spin up isolated full-stack staging environments in under 3.5 seconds.',
    results: [
      'Instant preview environment provisioned in 3.4 seconds',
      'Increased engineering deployment frequency by 320%',
      'Cut cloud idle staging expenditure by 58%',
      'Supports over 10,000 daily active developer builds'
    ],
    technologies: ['Rust', 'Go', 'Next.js', 'Firecracker', 'Docker', 'AWS'],
    metrics: [
      { label: 'Spin-up Time', value: '3.4s' },
      { label: 'Release Velocity', value: '+320%' },
      { label: 'Cost Reduction', value: '58%' },
      { label: 'Daily Builds', value: '10k+' }
    ],
    featuredImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    year: '2025',
    liveUrl: 'https://sahix.example.com/cases/quantumscale'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    slug: 'engineering-future-scalable-microservices-2026',
    title: 'Architecting Resilient Distributed Systems: Lessons from Scaling to 10M Requests',
    excerpt: 'How we eliminate single points of failure, manage distributed transactions, and achieve sub-50ms latency using event-driven architectures.',
    content: `When scaling modern enterprise systems, traditional monolithic paradigms inevitably create bottlenecks. In this deep dive, we explore how SAHIX engineers multi-region resilient clusters using Go, Apache Kafka, and distributed data partitions.

### 1. The Core Bottleneck: Distributed State
The hardest problem in scalable architecture is handling distributed transactional state. By replacing synchronous REST-to-REST HTTP chains with asynchronous event logs, services can respond immediately while background processors guarantee eventual consistency.

### 2. Idempotency at Scale
Network partitions are not anomalies—they are guarantees. Every endpoint must be engineered with deterministic idempotency keys stored in an in-memory Redis cluster with atomic TTLs.

### 3. Graceful Degradation
Under unexpected load spikes, mission-critical services should degrade gracefully rather than collapsing entirely. Implementing circuit breakers with sensible fallbacks ensures 99.99% user-facing availability.`,
    category: 'Architecture',
    author: {
      name: 'Sahil K.',
      role: 'Chief Technology Architect',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    },
    publishedAt: 'Nov 02, 2026',
    readTime: '6 min read',
    coverImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80',
    tags: ['Microservices', 'Distributed Systems', 'Cloud', 'DevOps']
  },
  {
    id: 'post-2',
    slug: 'nextjs-performance-optimization-masterclass',
    title: 'Achieving 100/100 Lighthouse Scores on Next.js Enterprise Apps',
    excerpt: 'Detailed breakdown of streaming SSR, partial prerendering, critical CSS extraction, and image loading pipelines that guarantee instant web performance.',
    content: `Web performance is not merely a technical vanity metric—it is the single highest predictor of digital conversion rates. A 100ms delay in page load time can reduce conversion by 7%.

### The Four Pillars of Zero-Latency Next.js:
1. **Streaming Server Components**: Send the shell instantly, stream heavy data blocks as they resolve.
2. **Bundle Trimming**: Eliminating bloated third-party libraries in favor of native Web APIs.
3. **Dynamic Font Subsetting**: Zero layout shifts with preloaded variable font glyphs.
4. **Optimized Asset Pipeline**: Serving modern AVIF and WebP formats with responsive density descriptors.`,
    category: 'Frontend',
    author: {
      name: 'Elena Rostova',
      role: 'Lead Frontend Engineer',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80'
    },
    publishedAt: 'Oct 28, 2026',
    readTime: '5 min read',
    coverImage: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
    tags: ['Next.js', 'React', 'Performance', 'Web Development']
  },
  {
    id: 'post-3',
    slug: 'enterprise-rag-ai-implementation-guide',
    title: 'Building Enterprise-Grade RAG Systems: Beyond Basic Vector Search',
    excerpt: 'Why standard naive RAG pipelines fail in production, and how hybrid dense-sparse retrieval, reranking, and query decomposition create dependable AI systems.',
    content: `While spinning up a naive LangChain RAG demo takes thirty minutes, productionizing retrieval systems across millions of complex internal documents requires rigorous data engineering.

### Why Simple Cosine Similarity Fails:
Dense vector embeddings excel at semantic concepts but frequently fail on exact part numbers, contract clauses, and specific dates. The solution lies in **hybrid search**—combining BM25 keyword matching with dense neural embeddings, evaluated through cross-encoder rerankers.`,
    category: 'AI & Data',
    author: {
      name: 'Marcus Vance',
      role: 'Head of AI Research',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
    },
    publishedAt: 'Oct 15, 2026',
    readTime: '8 min read',
    coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    tags: ['AI', 'Machine Learning', 'RAG', 'Vector DB']
  }
];

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description: 'We analyze your core business objectives, technical constraints, target users, and market landscape to establish clear technical specifications and milestone roadmaps.',
    duration: 'Week 1'
  },
  {
    number: '02',
    title: 'Architecture & Planning',
    description: 'Our system architects blueprint the tech stack, database schemas, microservice boundaries, API contracts, and security protocols before writing code.',
    duration: 'Week 2'
  },
  {
    number: '03',
    title: 'UI/UX Interactive Design',
    description: 'We construct full tokenized Figma design systems, dynamic wireframes, and interactive clickable prototypes tailored for maximum engagement and conversion.',
    duration: 'Weeks 2 - 3'
  },
  {
    number: '04',
    title: 'Agile Development',
    description: 'Engineers build in rapid two-week sprints with automated CI/CD deployments. You get live staging access to test every feature as it gets crafted.',
    duration: 'Weeks 4 - 8'
  },
  {
    number: '05',
    title: 'Testing & QA Hardening',
    description: 'Comprehensive automated test suites, end-to-end Cypress tests, penetration security audits, and cross-browser/device validation ensure bug-free operation.',
    duration: 'Weeks 8 - 9'
  },
  {
    number: '06',
    title: 'Deployment & Launch',
    description: 'Zero-downtime blue/green deployment to production cloud infrastructure with live telemetry, automated monitoring, and DNS traffic switching.',
    duration: 'Week 10'
  },
  {
    number: '07',
    title: 'Maintenance & Scale',
    description: 'Continuous monitoring, security patches, proactive performance tuning, and on-demand feature iterations as your user base multiplies.',
    duration: 'Ongoing'
  }
];

export const TECH_STACK = [
  { name: 'Next.js', category: 'Frontend', level: 'Core' },
  { name: 'React', category: 'Frontend', level: 'Core' },
  { name: 'TypeScript', category: 'Language', level: 'Core' },
  { name: 'Tailwind CSS', category: 'Styling', level: 'Core' },
  { name: 'Node.js', category: 'Backend', level: 'Core' },
  { name: 'Python', category: 'AI & Data', level: 'Core' },
  { name: 'Go', category: 'High-Perf Backend', level: 'Core' },
  { name: 'Flutter', category: 'Mobile', level: 'Mobile' },
  { name: 'React Native', category: 'Mobile', level: 'Mobile' },
  { name: 'PostgreSQL', category: 'Database', level: 'Storage' },
  { name: 'MongoDB', category: 'Database', level: 'Storage' },
  { name: 'Redis', category: 'Cache', level: 'Storage' },
  { name: 'AWS', category: 'Cloud', level: 'DevOps' },
  { name: 'Google Cloud', category: 'Cloud', level: 'DevOps' },
  { name: 'Docker', category: 'Container', level: 'DevOps' },
  { name: 'Kubernetes', category: 'Orchestration', level: 'DevOps' },
  { name: 'TensorFlow', category: 'Machine Learning', level: 'AI' },
  { name: 'PyTorch', category: 'Machine Learning', level: 'AI' }
];

export const INITIAL_LEADS: Lead[] = [
  {
    id: 'lead-1',
    name: 'Sarah Jenkins',
    businessName: 'Veloce Logistics',
    email: 'sarah.j@velocelogistics.com',
    phone: '+1 (555) 234-8901',
    projectType: 'Custom Software Development',
    budgetRange: '$25,000 - $50,000',
    description: 'Need a dispatch management portal with real-time GPS fleet tracking and automated bill-of-lading generation.',
    status: 'New',
    createdAt: '2026-11-04T10:15:00Z',
    source: 'Website Contact Form'
  },
  {
    id: 'lead-2',
    name: 'Alexander Chen',
    businessName: 'Aura Fintech',
    email: 'alex.chen@aurapay.io',
    phone: '+1 (555) 876-5432',
    projectType: 'Web & Mobile Development',
    budgetRange: '$50,000 - $100,000',
    description: 'Developing a cross-border remittance app with multi-currency digital wallets and instant biometric verification.',
    status: 'Qualified',
    createdAt: '2026-11-03T14:40:00Z',
    source: 'Project Estimator'
  },
  {
    id: 'lead-3',
    name: 'Dr. Michael Torres',
    businessName: 'Apex Health Systems',
    email: 'm.torres@apexhealth.org',
    phone: '+1 (555) 432-1098',
    projectType: 'AI & Machine Learning',
    budgetRange: '$50,000 - $100,000',
    description: 'Looking to build an automated clinical documentation copilot to extract structured diagnoses from audio consultations.',
    status: 'Proposal Sent',
    createdAt: '2026-11-02T09:20:00Z',
    source: 'Direct Referral'
  }
];

export const INITIAL_QUOTES: QuoteRequest[] = [
  {
    id: 'quote-1',
    name: 'Alexander Chen',
    email: 'alex.chen@aurapay.io',
    phone: '+1 (555) 876-5432',
    projectType: 'Mobile App',
    platform: ['iOS', 'Android'],
    features: ['Biometric Auth', 'Payment Processing', 'Real-time Chat', 'Push Notifications'],
    designComplexity: 'Custom Futuristic Design',
    timeline: '8 - 12 Weeks',
    budget: '$30,000 - $60,000',
    estimatedPriceRange: '$35,000 - $52,000',
    estimatedWeeks: '10 - 12 Weeks',
    createdAt: '2026-11-03T14:40:00Z',
    status: 'Reviewed'
  },
  {
    id: 'quote-2',
    name: 'David Miller',
    email: 'david@synthetix.design',
    phone: '+1 (555) 678-9012',
    projectType: 'Web Application',
    platform: ['Web / Cloud'],
    features: ['Interactive 3D / WebGL', 'User Auth', 'CMS Integration', 'Custom Dashboards'],
    designComplexity: 'Awwwards-level Premium',
    timeline: '6 - 8 Weeks',
    budget: '$20,000 - $40,000',
    estimatedPriceRange: '$24,000 - $34,000',
    estimatedWeeks: '6 - 8 Weeks',
    createdAt: '2026-11-01T16:05:00Z',
    status: 'Approved'
  }
];

export const INITIAL_CLIENT_PROJECT: ClientProject = {
  id: 'proj-8821',
  title: 'SAHIX NovaCloud Portal Engine',
  clientName: 'Acme Enterprise Labs',
  status: 'In Development',
  progressPercentage: 68,
  startDate: 'Oct 08, 2026',
  targetLaunch: 'Dec 15, 2026',
  milestones: [
    { id: 'm1', title: 'Technical Architecture & API Contracts', dueDate: 'Oct 18, 2026', completed: true },
    { id: 'm2', title: 'Figma Tokenized UI/UX System & Prototypes', dueDate: 'Oct 28, 2026', completed: true },
    { id: 'm3', title: 'Core Backend Microservices & Auth Flow', dueDate: 'Nov 12, 2026', completed: true },
    { id: 'm4', title: 'Frontend Portal & Dashboard Integration', dueDate: 'Nov 26, 2026', completed: false },
    { id: 'm5', title: 'Load Testing, Security Pen-Test & QA', dueDate: 'Dec 05, 2026', completed: false },
    { id: 'm6', title: 'Production Cloud Deployment & Handover', dueDate: 'Dec 15, 2026', completed: false }
  ],
  deliverables: [
    { name: 'Architecture_Specification_v1.4.pdf', date: 'Oct 18, 2026', downloadUrl: '#', size: '4.2 MB' },
    { name: 'UI_UX_Design_System_Figma_Handoff.zip', date: 'Oct 28, 2026', downloadUrl: '#', size: '28.6 MB' },
    { name: 'OpenAPI_v3_Schema_Export.json', date: 'Nov 04, 2026', downloadUrl: '#', size: '640 KB' }
  ],
  recentUpdates: [
    {
      date: 'Nov 04, 2026',
      message: 'Completed Phase 3 milestone: Auth microservice passed load testing with 5,000 concurrent tokens/sec.',
      author: 'Lead Architect'
    },
    {
      date: 'Oct 29, 2026',
      message: 'Client approved high-fidelity Figma interactive prototype for tablet and desktop viewports.',
      author: 'UI/UX Director'
    },
    {
      date: 'Oct 18, 2026',
      message: 'Architecture blueprint finalized. Infrastructure provisioned on AWS eu-central-1 via Terraform.',
      author: 'DevOps Lead'
    }
  ]
};
