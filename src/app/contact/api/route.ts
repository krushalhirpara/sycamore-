import { NextRequest, NextResponse } from 'next/server';

interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  marketplace: string;
  revenue?: string;
  message: string;
  honeypot?: string;
}

function validateEmail(email: string): boolean {
  return /^\S+@\S+\.\S+$/.test(email);
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactPayload = await request.json();

    // 1. Honeypot bot detection — if the field has any value, it's a bot
    if (body.honeypot && body.honeypot.trim() !== '') {
      // Return 200 silently to not reveal the trap
      return NextResponse.json({ success: true });
    }

    // 2. Server-side validation
    const errors: string[] = [];

    if (!body.name || body.name.trim().length < 2) {
      errors.push('Name must be at least 2 characters.');
    }
    if (!body.email || !validateEmail(body.email)) {
      errors.push('A valid email address is required.');
    }
    if (!body.marketplace || body.marketplace.trim() === '') {
      errors.push('Marketplace selection is required.');
    }
    if (!body.message || body.message.trim().length < 20) {
      errors.push('Message must be at least 20 characters.');
    }

    if (errors.length > 0) {
      return NextResponse.json(
        { success: false, errors },
        { status: 422 }
      );
    }

    // 3. In a real implementation, forward to CRM / email service here.
    // e.g. send to a Resend.com email endpoint, Notion DB, or Airtable.
    // For now, we log the submission and return success.
    console.log('[Contact Form Submission]', {
      name: body.name,
      email: body.email,
      phone: body.phone || 'Not provided',
      company: body.company || 'Not provided',
      marketplace: body.marketplace,
      revenue: body.revenue || 'Not provided',
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error('[Contact API Error]', error);
    return NextResponse.json(
      { success: false, errors: ['An internal server error occurred.'] },
      { status: 500 }
    );
  }
}

// Reject non-POST methods
export async function GET() {
  return NextResponse.json({ error: 'Method not allowed.' }, { status: 405 });
}
