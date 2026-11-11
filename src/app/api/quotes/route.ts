import { NextResponse } from 'next/server';
import { INITIAL_QUOTES } from '@/lib/data';
import { QuoteRequest } from '@/types';

let quotesStore: QuoteRequest[] = [...INITIAL_QUOTES];

export async function GET() {
  return NextResponse.json({
    success: true,
    count: quotesStore.length,
    quotes: quotesStore
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.name || !body.email) {
      return NextResponse.json(
        { success: false, error: 'Name and email are required' },
        { status: 400 }
      );
    }

    const newQuote: QuoteRequest = {
      id: 'quote-' + Date.now(),
      name: body.name,
      email: body.email,
      phone: body.phone || '',
      projectType: body.projectType || 'Web Application',
      platform: body.platform || ['Web'],
      features: body.features || [],
      designComplexity: body.designComplexity || 'Standard',
      timeline: body.timeline || '4 - 8 Weeks',
      budget: body.budget || '$10,000 - $25,000',
      estimatedPriceRange: body.estimatedPriceRange || '$12,000 - $18,000',
      estimatedWeeks: body.estimatedWeeks || '6 - 8 Weeks',
      createdAt: new Date().toISOString(),
      status: 'Pending'
    };

    quotesStore.unshift(newQuote);

    return NextResponse.json({
      success: true,
      message: 'Quotation estimate stored successfully',
      quote: newQuote
    });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err.message || 'Server error' },
      { status: 500 }
    );
  }
}
