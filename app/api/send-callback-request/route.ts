import { NextRequest, NextResponse } from 'next/server';
import { sendServerEvent, hashForMeta } from '@/lib/analytics/server';
import { generateEventId } from '@/lib/analytics/event-id';

async function sendTelegramMessage(message: string): Promise<boolean> {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.warn('TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID not set');
    return false;
  }

  try {
    const res = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'HTML',
      }),
    });
    if (!res.ok) {
      const err = await res.json();
      console.error('Telegram API error:', err);
      return false;
    }
    return true;
  } catch (e) {
    console.error('Error sending to Telegram:', e);
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone } = body;

    if (!name?.trim() || !phone?.trim()) {
      return NextResponse.json(
        { error: 'Nombre y teléfono son obligatorios' },
        { status: 400 }
      );
    }

    const date = new Date().toLocaleString('es-ES', { timeZone: 'Europe/Madrid' });
    const text =
      `📞 <b>Solicitud de llamada</b>\n\n` +
      `👤 <b>Nombre:</b> ${(name as string).trim()}\n` +
      `📱 <b>Teléfono:</b> ${(phone as string).trim()}\n\n` +
      `📅 ${date}`;

    const sent = await sendTelegramMessage(text);

    // Send Meta CAPI Lead event (server-side, best-effort)
    const eventId = body.event_id || generateEventId();
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
      || request.headers.get('x-real-ip')
      || undefined;
    const userAgent = request.headers.get('user-agent') || undefined;

    const userData: Record<string, string | undefined> = {
      client_ip_address: ip,
      client_user_agent: userAgent,
      fbp: body.fbp,
      fbc: body.fbc,
    };

    if (phone) {
      userData.ph = await hashForMeta((phone as string).trim().replace(/\s+/g, ''));
    }

    sendServerEvent({
      event_name: 'Lead',
      event_id: eventId,
      event_source_url: body.event_source_url || '',
      user_data: userData,
      custom_data: {
        lead_type: 'callback',
        form_name: 'callback_request',
        placement: 'modal',
      },
    }).catch(() => {});

    if (sent) {
      return NextResponse.json({
        success: true,
        message: 'Solicitud enviada. Te llamaremos pronto.',
      });
    }

    return NextResponse.json(
      { error: 'No se pudo enviar. Intenta más tarde.' },
      { status: 502 }
    );
  } catch (e) {
    console.error('send-callback-request error:', e);
    return NextResponse.json(
      { error: 'Error al enviar la solicitud' },
      { status: 500 }
    );
  }
}
