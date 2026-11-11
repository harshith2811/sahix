-- ==============================================================
-- SAHIX DIGITAL SOFTWARE - POSTGRESQL / SUPABASE PRODUCTION SCHEMA
-- ==============================================================

-- 1. Enable UUID Extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. Create Enums
CREATE TYPE lead_status AS ENUM (
  'New',
  'Contacted',
  'Qualified',
  'Proposal Sent',
  'Converted',
  'Lost'
);

CREATE TYPE quote_status AS ENUM (
  'Pending',
  'Reviewed',
  'Approved',
  'Archived'
);

CREATE TYPE project_phase AS ENUM (
  'Discovery',
  'Designing',
  'In Development',
  'Testing',
  'Completed'
);

-- 3. Leads Table (Contact Form Inbound)
CREATE TABLE IF NOT EXISTS public.leads (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  name TEXT NOT NULL,
  business_name TEXT,
  email TEXT NOT NULL,
  phone TEXT,
  project_type TEXT NOT NULL,
  budget_range TEXT NOT NULL,
  description TEXT NOT NULL,
  status lead_status DEFAULT 'New' NOT NULL,
  source TEXT DEFAULT 'Website Contact Form',
  notes TEXT
);

-- 4. Quotes Table (Project Estimator Inbound)
CREATE TABLE IF NOT EXISTS public.quote_requests (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  project_type TEXT NOT NULL,
  platforms TEXT[] DEFAULT '{}',
  features TEXT[] DEFAULT '{}',
  design_complexity TEXT NOT NULL,
  timeline TEXT NOT NULL,
  budget TEXT NOT NULL,
  estimated_price_range TEXT NOT NULL,
  estimated_weeks TEXT NOT NULL,
  status quote_status DEFAULT 'Pending' NOT NULL
);

-- 5. Client Projects Table (Client Portal)
CREATE TABLE IF NOT EXISTS public.client_projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  title TEXT NOT NULL,
  client_name TEXT NOT NULL,
  client_email TEXT NOT NULL,
  status project_phase DEFAULT 'In Development' NOT NULL,
  progress_percentage INTEGER DEFAULT 0 CHECK (progress_percentage >= 0 AND progress_percentage <= 100),
  start_date DATE NOT NULL,
  target_launch DATE NOT NULL
);

-- 6. Project Milestones Table
CREATE TABLE IF NOT EXISTS public.project_milestones (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  project_id UUID REFERENCES public.client_projects(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  due_date DATE NOT NULL,
  completed BOOLEAN DEFAULT FALSE,
  order_index INTEGER DEFAULT 0
);

-- 7. Deliverables & Artifacts Table
CREATE TABLE IF NOT EXISTS public.project_deliverables (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  project_id UUID REFERENCES public.client_projects(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  file_url TEXT NOT NULL,
  file_size TEXT NOT NULL,
  uploaded_at TIMESTAMPTZ DEFAULT NOW()
);

-- 8. Row Level Security (RLS) Setup
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quote_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.client_projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.project_milestones ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.project_deliverables ENABLE ROW LEVEL SECURITY;

-- Allow public anonymous inserts for leads and quote requests
CREATE POLICY "Allow public submissions for leads" ON public.leads
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public submissions for quotes" ON public.quote_requests
  FOR INSERT WITH CHECK (true);

-- Admins can read and update all tables
CREATE POLICY "Admins full access to leads" ON public.leads
  FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Admins full access to quotes" ON public.quote_requests
  FOR ALL USING (auth.role() = 'authenticated');
