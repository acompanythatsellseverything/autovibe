/**
 * Centralized Meta event tracking functions.
 * Client-side only — fires Pixel events and optionally sends to CAPI.
 */

import { fbq, getFbp, getFbc } from './meta-pixel';
import { generateEventId } from './event-id';

// ─── Contact Click (WhatsApp / Phone) ────────────────────────────────────────

interface ContactClickParams {
  contact_method: 'whatsapp' | 'phone';
  placement: string;
  cta_text?: string;
}

export function trackContactClick(params: ContactClickParams): void {
  fbq('track', 'Contact', {
    contact_method: params.contact_method,
    placement: params.placement,
    cta_text: params.cta_text || '',
    page_url: typeof window !== 'undefined' ? window.location.href : '',
  });
}

// ─── ViewContent (Car detail pages) ──────────────────────────────────────────

interface ViewContentParams {
  content_name: string;
  content_category: string;
  content_type: 'vehicle';
  content_ids?: string[];
  value?: number;
  currency?: string;
}

export function trackViewContent(params: ViewContentParams): void {
  fbq('track', 'ViewContent', {
    content_name: params.content_name,
    content_category: params.content_category,
    content_type: params.content_type,
    content_ids: params.content_ids || [],
    value: params.value,
    currency: params.currency || 'EUR',
  });
}

// ─── Lead (Form submissions) ─────────────────────────────────────────────────

export interface LeadParams {
  lead_type: 'callback' | 'subscription' | 'purchase' | 'enterprise';
  form_name: string;
  placement: string;
  content_name?: string;
  content_category?: string;
  value?: number;
  currency?: string;
}

/**
 * Track a Lead event client-side AND send to CAPI for deduplication.
 * Returns the event_id so the server route can also use it.
 */
export function trackLead(params: LeadParams): string {
  const eventId = generateEventId();

  fbq('track', 'Lead', {
    lead_type: params.lead_type,
    form_name: params.form_name,
    placement: params.placement,
    content_name: params.content_name || '',
    content_category: params.content_category || '',
    value: params.value,
    currency: params.currency || 'EUR',
    event_id: eventId,
  });

  // Fire CAPI in the background (best-effort)
  sendToCapi({
    event_name: 'Lead',
    event_id: eventId,
    custom_data: {
      lead_type: params.lead_type,
      form_name: params.form_name,
      placement: params.placement,
      content_name: params.content_name || '',
      content_category: params.content_category || '',
      value: params.value,
      currency: params.currency || 'EUR',
    },
  }).catch(() => {
    // Silently ignore — Pixel already fired
  });

  return eventId;
}

// ─── CAPI helper ─────────────────────────────────────────────────────────────

interface CapiPayload {
  event_name: string;
  event_id: string;
  custom_data?: Record<string, unknown>;
  user_data?: Record<string, unknown>;
}

async function sendToCapi(payload: CapiPayload): Promise<void> {
  const fbp = getFbp();
  const fbc = getFbc();

  await fetch('/api/meta-conversions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      event_name: payload.event_name,
      event_id: payload.event_id,
      event_source_url: window.location.href,
      custom_data: payload.custom_data,
      user_data: {
        ...payload.user_data,
        fbp,
        fbc,
      },
    }),
  });
}
