export type LeadStatus = 'New' | 'Contacted' | 'Qualified' | 'Proposal Sent' | 'Converted' | 'Lost';

export interface Lead {
  id: string;
  name: string;
  businessName?: string;
  email: string;
  phone?: string;
  projectType: string;
  budgetRange: string;
  description: string;
  status: LeadStatus;
  createdAt: string;
  source?: string;
  notes?: string;
}

export interface QuoteRequest {
  id: string;
  name: string;
  email: string;
  phone: string;
  projectType: string;
  platform: string[];
  features: string[];
  designComplexity: string;
  timeline: string;
  budget: string;
  estimatedPriceRange: string;
  estimatedWeeks: string;
  createdAt: string;
  status: 'Pending' | 'Reviewed' | 'Approved' | 'Archived';
}

export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  shortDesc: string;
  iconName: string;
  fullDesc: string;
  highlights: string[];
  deliverables: string[];
  technologies: string[];
  pricingStartingAt: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  slug: string;
  client: string;
  industry: string;
  summary: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  metrics: { label: string; value: string }[];
  featuredImage: string;
  year: string;
  liveUrl?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  publishedAt: string;
  readTime: string;
  coverImage: string;
  tags: string[];
}

export interface ClientProject {
  id: string;
  title: string;
  clientName: string;
  status: 'Discovery' | 'Designing' | 'In Development' | 'Testing' | 'Completed';
  progressPercentage: number;
  startDate: string;
  targetLaunch: string;
  milestones: {
    id: string;
    title: string;
    dueDate: string;
    completed: boolean;
  }[];
  deliverables: {
    name: string;
    date: string;
    downloadUrl: string;
    size: string;
  }[];
  recentUpdates: {
    date: string;
    message: string;
    author: string;
  }[];
}
