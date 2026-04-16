import { pushDataLayer, getFbp, getFbc } from './dataLayer';
import { generateEventId } from './event-id';

interface ContactClickParams {
  contact_method: 'whatsapp' | 'phone';
  placement: string;
  cta_text?: string;
}

export function trackContactClick(params: ContactClickParams): string {
  const eventId = generateEventId();

  pushDataLayer('contact', {
    contact_method: params.contact_method,
    placement: params.placement,
    cta_text: params.cta_text || '',
    page_url: typeof window !== 'undefined' ? window.location.href : '',
    event_id: eventId,
  });

  sendToCapi({
    event_name: 'Contact',
    event_id: eventId,
    custom_data: {
      contact_method: params.contact_method,
      placement: params.placement,
      cta_text: params.cta_text || '',
    },
    user_data: {},
  }).catch(() => {
    /* pixel already fired */
  });

  return eventId;
}

interface ViewContentParams {
  content_name: string;
  content_category: string;
  content_type: 'vehicle';
  content_ids?: string[];
  value?: number;
  currency?: string;
}

export function trackViewContent(params: ViewContentParams): void {
  pushDataLayer('view_content', {
    content_name: params.content_name,
    content_category: params.content_category,
    content_type: params.content_type,
    content_ids: params.content_ids || [],
    value: params.value,
    currency: params.currency || 'EUR',
  });
}

export interface LeadParams {
  lead_type: 'callback' | 'subscription' | 'purchase' | 'enterprise';
  form_name: string;
  placement: string;
  content_name?: string;
  content_category?: string;
  value?: number;
  currency?: string;
  email?: string;
  phone?: string;
}

export function trackLead(params: LeadParams): string {
  const eventId = generateEventId();

  pushDataLayer('lead', {
    lead_type: params.lead_type,
    form_name: params.form_name,
    placement: params.placement,
    content_name: params.content_name || '',
    content_category: params.content_category || '',
    value: params.value,
    currency: params.currency || 'EUR',
    event_id: eventId,
  });

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
    user_data: {
      email: params.email,
      phone: params.phone,
    },
  }).catch(() => {
    /* pixel already fired */
  });

  return eventId;
}

export function trackVirtualPageView(pathname: string): void {
  pushDataLayer('virtual_page_view', {
    page_path: pathname,
    page_location: typeof window !== 'undefined' ? window.location.href : '',
    page_title: typeof document !== 'undefined' ? document.title : '',
  });
}

interface CapiPayload {
  event_name: string;
  event_id: string;
  custom_data?: Record<string, unknown>;
  user_data?: Record<string, unknown>;
}

async function sendToCapi(payload: CapiPayload): Promise<void> {
  await fetch('/api/meta-conversions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      event_name: payload.event_name,
      event_id: payload.event_id,
      event_source_url: typeof window !== 'undefined' ? window.location.href : '',
      custom_data: payload.custom_data,
      user_data: {
        ...payload.user_data,
        fbp: getFbp(),
        fbc: getFbc(),
      },
    }),
  });
}
