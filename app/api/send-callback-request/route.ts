import { NextRequest, NextResponse } from 'next/server';

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
    const { name, message, phone } = body;

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
      `📱 <b>Teléfono:</b> ${(phone as string).trim()}\n` +
      (message?.trim()
        ? `\n💬 <b>Mensaje:</b>\n${(message as string).trim()}\n`
        : '') +
      `\n📅 ${date}`;

    const sent = await sendTelegramMessage(text);

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
