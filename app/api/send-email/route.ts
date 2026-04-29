import { NextRequest, NextResponse } from 'next/server';
import { sendServerEvent, hashForMeta } from '@/lib/analytics/server';
import { generateEventId } from '@/lib/analytics/event-id';

// Helper function to send message to Telegram
async function sendTelegramMessage(message: string): Promise<boolean> {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.warn('Telegram bot token or chat ID not configured');
    return false;
  }

  try {
    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'HTML',
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Telegram API error:', errorData);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Error sending Telegram message:', error);
    return false;
  }
}

// Helper function to format message based on type
function formatMessage(data: any): string {
  const { type, carName, name, phone, email } = data;
  const date = new Date().toLocaleString('es-ES', { timeZone: 'Europe/Madrid' });

  let message = `🚗 <b>Nueva solicitud - ${type === 'empresas' ? 'Empresas' : type === 'compra' ? 'Compra' : 'Suscripción'}</b>\n\n`;
  message += `📋 <b>Vehículo:</b> ${carName}\n\n`;

  // Format based on type
  if (type === 'suscripcion' || !type) {
    // Suscripcion format
    message += `📅 <b>Permanencia:</b> ${data.permanence} meses\n`;
    message += `🛣️ <b>Kilometraje:</b> ${data.mileage} km/mes\n`;
    message += `💰 <b>Cuota mensual:</b> ${data.finalPrice}€\n`;
  } else if (type === 'empresas') {
    // Empresas format
    message += `📅 <b>Duración:</b> ${data.rentalDays} días\n`;
    message += `💰 <b>Precio por día:</b> ${data.pricePerDay}€\n`;
    message += `💵 <b>Precio total:</b> ${data.totalPrice}€\n`;
  } else if (type === 'compra') {
    // Compra format
    message += `💳 <b>Opción:</b> ${data.purchaseOption === 'fixed' ? 'Pago único' : 'Financiación'}\n`;
    message += `💰 <b>Precio:</b> ${data.price}€\n`;
    if (data.purchaseOption === 'installment') {
      message += `📅 <b>Plazo:</b> ${data.installmentMonths} meses\n`;
      message += `💵 <b>Cuota mensual:</b> ${data.monthlyPayment}€\n`;
    }
  }

  message += `\n👤 <b>Información de contacto:</b>\n`;
  message += `• Nombre: ${name}\n`;
  message += `• Teléfono: ${phone}\n`;
  if (email && email.trim()) {
    message += `• Email: ${email}\n`;
  }
  message += `\n📅 Fecha: ${date}`;

  return message;
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { carName, name, phone, email, type } = data;

    // Validate required fields (email is optional)
    if (!carName || !name || !phone) {
      return NextResponse.json(
        { error: 'Los campos obligatorios son: nombre y teléfono' },
        { status: 400 }
      );
    }

    // Validate email format if provided
    if (email && email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.trim())) {
        return NextResponse.json(
          { error: 'Email inválido' },
          { status: 400 }
        );
      }
    }

    // Send to Telegram
    const telegramMessage = formatMessage(data);
    const telegramSent = await sendTelegramMessage(telegramMessage);

    // Also send email if configured (backward compatibility)
    let emailSent = false;

    // Get email configuration from environment variables
    const recipientEmail = process.env.RECIPIENT_EMAIL || process.env.CONTACT_EMAIL;
    
    if (recipientEmail) {
      // Email subject and body
      const typeLabel = type === 'empresas' ? 'Empresas' : type === 'compra' ? 'Compra' : 'Suscripción';
      const subject = `Nueva solicitud de ${typeLabel} - ${carName}`;
      
      let emailBody = `Nueva solicitud de ${typeLabel} de coche\n\n`;
      emailBody += `Detalles del vehículo:\n`;
      emailBody += `- Modelo: ${carName}\n`;
      
      if (type === 'suscripcion' || !type) {
        emailBody += `- Permanencia: ${data.permanence} meses\n`;
        emailBody += `- Kilometraje: ${data.mileage} km/mes\n`;
        emailBody += `- Cuota mensual: ${data.finalPrice}€\n`;
      } else if (type === 'empresas') {
        emailBody += `- Duración: ${data.rentalDays} días\n`;
        emailBody += `- Precio por día: ${data.pricePerDay}€\n`;
        emailBody += `- Precio total: ${data.totalPrice}€\n`;
      } else if (type === 'compra') {
        emailBody += `- Opción: ${data.purchaseOption === 'fixed' ? 'Pago único' : 'Financiación'}\n`;
        emailBody += `- Precio: ${data.price}€\n`;
        if (data.purchaseOption === 'installment') {
          emailBody += `- Plazo: ${data.installmentMonths} meses\n`;
          emailBody += `- Cuota mensual: ${data.monthlyPayment}€\n`;
        }
      }
      
      emailBody += `\nInformación de contacto:\n`;
      emailBody += `- Nombre: ${name}\n`;
      emailBody += `- Teléfono: ${phone}\n`;
      if (email && email.trim()) {
        emailBody += `- Email: ${email}\n`;
      }
      emailBody += `\nFecha: ${new Date().toLocaleString('es-ES', { timeZone: 'Europe/Madrid' })}`;

      // Try to send email using configured method
      // Option 1: If using Resend (recommended for Next.js)
      if (process.env.RESEND_API_KEY) {
        const resendResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: process.env.RESEND_FROM_EMAIL || 'noreply@autovibe.com',
            to: recipientEmail,
            subject: subject,
            text: emailBody,
          }),
        });

        if (resendResponse.ok) {
          emailSent = true;
        }
      }

      // Option 2: SendGrid (if configured)
      if (!emailSent && process.env.SENDGRID_API_KEY) {
        const sendgridResponse = await fetch('https://api.sendgrid.com/v3/mail/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
          },
          body: JSON.stringify({
            personalizations: [
              {
                to: [{ email: recipientEmail }],
              },
            ],
            from: { email: process.env.SENDGRID_FROM_EMAIL || 'noreply@autovibe.com' },
            subject: subject,
            content: [
              {
                type: 'text/plain',
                value: emailBody,
              },
            ],
          }),
        });

        if (sendgridResponse.ok) {
          emailSent = true;
        }
      }
    }

    // Send Meta CAPI Lead event (server-side, best-effort)
    const eventId = data.event_id || generateEventId();
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
      || request.headers.get('x-real-ip')
      || undefined;
    const userAgent = request.headers.get('user-agent') || undefined;

    const userData: Record<string, string | undefined> = {
      client_ip_address: ip,
      client_user_agent: userAgent,
      fbp: data.fbp,
      fbc: data.fbc,
    };

    if (phone) {
      userData.ph = await hashForMeta(phone.replace(/\s+/g, ''));
    }
    if (email?.trim()) {
      userData.em = await hashForMeta(email.trim());
    }

    const leadType = type === 'empresas' ? 'enterprise' : type === 'compra' ? 'purchase' : 'subscription';
    sendServerEvent({
      event_name: 'Lead',
      event_id: eventId,
      event_source_url: data.event_source_url || '',
      user_data: userData,
      custom_data: {
        lead_type: leadType,
        form_name: `${leadType}_config`,
        placement: 'car_detail',
        content_name: carName,
        content_category: type || 'suscripcion',
        value: data.finalPrice || data.price || data.totalPrice,
        currency: 'EUR',
      },
    }).catch(() => {});

    // Return success if at least one method worked (Telegram or Email)
    if (telegramSent || emailSent) {
      return NextResponse.json({
        success: true,
        message: 'Solicitud enviada correctamente',
        telegram: telegramSent,
        email: emailSent,
      });
    }

    // Fallback: Log to console if no service is configured
    console.log('=== FORM SUBMISSION ===');
    console.log('Type:', type || 'suscripcion');
    console.log('Car:', carName);
    console.log('Data:', JSON.stringify(data, null, 2));
    console.log('======================');
    
    return NextResponse.json(
      { 
        message: 'No notification service configured. Data logged to console. Please set up TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID, or email service.',
        success: true 
      },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: error.message || 'Error al enviar el email' },
      { status: 500 }
    );
  }
}

