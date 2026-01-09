import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { carName, permanence, mileage, finalPrice, name, phone, email } = await request.json();

    // Validate required fields (email is optional)
    if (!carName || !permanence || !mileage || !finalPrice || !name || !phone) {
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

    // Get email configuration from environment variables
    const recipientEmail = process.env.RECIPIENT_EMAIL || process.env.CONTACT_EMAIL;
    
    if (!recipientEmail) {
      console.error('RECIPIENT_EMAIL or CONTACT_EMAIL environment variable is not set');
      // In development, just log the data
      console.log('=== FORM SUBMISSION ===');
      console.log('Car:', carName);
      console.log('Permanence:', permanence, 'months');
      console.log('Mileage:', mileage, 'km/month');
      console.log('Final Price:', finalPrice, '€');
      console.log('Name:', name);
      console.log('Phone:', phone);
      if (email) {
        console.log('Email:', email);
      }
      console.log('======================');
      
      return NextResponse.json(
        { 
          message: 'Email configuration not set. Data logged to console.',
          success: true 
        },
        { status: 200 }
      );
    }

    // Email subject and body
    const subject = `Nueva solicitud de suscripción - ${carName}`;
    const emailBody = `
Nueva solicitud de suscripción de coche

Detalles del vehículo:
- Modelo: ${carName}
- Permanencia: ${permanence} meses
- Kilometraje: ${mileage} km/mes
- Cuota mensual: ${finalPrice}€

Información de contacto:
- Nombre: ${name}
- Teléfono: ${phone}
${email && email.trim() ? `- Email: ${email}` : ''}

Fecha: ${new Date().toLocaleString('es-ES', { timeZone: 'Europe/Madrid' })}
    `.trim();

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

      if (!resendResponse.ok) {
        throw new Error('Error al enviar email con Resend');
      }

      return NextResponse.json({ success: true, message: 'Email enviado correctamente' });
    }

    // Option 2: If using SMTP (via nodemailer) - uncomment and configure if needed
    /*
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      const nodemailer = require('nodemailer');
      
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: process.env.SMTP_PORT === '465',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: process.env.SMTP_FROM || process.env.SMTP_USER,
        to: recipientEmail,
        subject: subject,
        text: emailBody,
      });

      return NextResponse.json({ success: true, message: 'Email enviado correctamente' });
    }
    */

    // Option 3: SendGrid (if configured)
    if (process.env.SENDGRID_API_KEY) {
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

      if (!sendgridResponse.ok) {
        throw new Error('Error al enviar email con SendGrid');
      }

      return NextResponse.json({ success: true, message: 'Email enviado correctamente' });
    }

    // Fallback: Log to console if no email service is configured
    console.log('=== FORM SUBMISSION ===');
    console.log('Car:', carName);
    console.log('Permanence:', permanence, 'months');
    console.log('Mileage:', mileage, 'km/month');
    console.log('Final Price:', finalPrice, '€');
    console.log('Name:', name);
    console.log('Phone:', phone);
    if (email) {
      console.log('Email:', email);
    }
    console.log('Recipient Email:', recipientEmail);
    console.log('======================');
    
    return NextResponse.json(
      { 
        message: 'Email service not configured. Data logged to console. Please set up RESEND_API_KEY, SENDGRID_API_KEY, or SMTP configuration.',
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

