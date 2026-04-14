import { NextRequest, NextResponse } from 'next/server';
import { sendServerEvent, hashForMeta } from '@/lib/analytics/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { event_name, event_id, event_source_url, custom_data, user_data } = body;

    if (!event_name || !event_id) {
      return NextResponse.json({ error: 'Missing event_name or event_id' }, { status: 400 });
    }

    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
      || request.headers.get('x-real-ip')
      || undefined;
    const userAgent = request.headers.get('user-agent') || undefined;

    const rawEmail = typeof user_data?.email === 'string' ? user_data.email : undefined;
    const rawPhone = typeof user_data?.phone === 'string' ? user_data.phone : undefined;

    const em = rawEmail ? await hashForMeta(rawEmail) : undefined;
    const ph = rawPhone ? await hashForMeta(rawPhone.replace(/\D/g, '')) : undefined;

    const enrichedUserData = {
      fbp: user_data?.fbp,
      fbc: user_data?.fbc,
      em,
      ph,
      client_ip_address: ip,
      client_user_agent: userAgent,
    };

    const success = await sendServerEvent({
      event_name,
      event_id,
      event_source_url: event_source_url || '',
      user_data: enrichedUserData,
      custom_data: custom_data || {},
    });

    return NextResponse.json({ success });
  } catch (error) {
    console.error('[meta-conversions] Error:', error);
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}
