import { NextResponse } from 'next/server';
import { INITIAL_LEADS } from '@/lib/data';
import { Lead } from '@/types';

// In-memory demo store
let leadsStore: Lead[] = [...INITIAL_LEADS];

export async function GET() {
  return NextResponse.json({
    success: true,
    count: leadsStore.length,
    leads: leadsStore
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Honeypot spam check
    if (body.honeypot) {
      return NextResponse.json({ success: true, message: 'Received' });
    }

    if (!body.name || !body.email || !body.description) {
      return NextResponse.json(
        { success: false, error: 'Missing mandatory fields' },
        { status: 400 }
      );
    }

    const newLead: Lead = {
      id: 'lead-' + Date.now(),
      name: body.name,
      businessName: body.businessName || '',
      email: body.email,
      phone: body.phone || '',
      projectType: body.projectType || 'Custom Software',
      budgetRange: body.budgetRange || '$25,000+',
      description: body.description,
      status: 'New',
      createdAt: new Date().toISOString(),
      source: body.source || 'API Submission'
    };

    leadsStore.unshift(newLead);

    return NextResponse.json({
      success: true,
      message: 'Lead logged successfully to SAHIX pipeline',
      lead: newLead
    });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
