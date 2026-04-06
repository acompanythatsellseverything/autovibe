/**
 * Server-side Meta Conversions API helper.
 * Used from API routes to send events directly to Meta.
 */

const PIXEL_ID = process.env.META_PIXEL_ID;
const ACCESS_TOKEN = process.env.META_ACCESS_TOKEN;
const TEST_EVENT_CODE = process.env.META_TEST_EVENT_CODE;
const API_VERSION = 'v21.0';

interface ServerEventParams {
  event_name: string;
  event_id: string;
  event_source_url: string;
  user_data?: {
    client_ip_address?: string;
    client_user_agent?: string;
    fbp?: string;
    fbc?: string;
    em?: string; // hashed email
    ph?: string; // hashed phone
  };
  custom_data?: Record<string, unknown>;
}

/**
 * Send a single event to Meta Conversions API.
 * Returns true on success, false on failure. Never throws.
 */
export async function sendServerEvent(params: ServerEventParams): Promise<boolean> {
  if (!PIXEL_ID || !ACCESS_TOKEN) {
    if (process.env.NODE_ENV === 'development') {
      console.log('[Meta CAPI] Skipped — META_PIXEL_ID or META_ACCESS_TOKEN not set');
      console.log('[Meta CAPI] Event:', JSON.stringify(params, null, 2));
    }
    return false;
  }

  const eventData: Record<string, unknown> = {
    event_name: params.event_name,
    event_time: Math.floor(Date.now() / 1000),
    event_id: params.event_id,
    event_source_url: params.event_source_url,
    action_source: 'website',
    user_data: params.user_data || {},
    custom_data: params.custom_data || {},
  };

  const body: Record<string, unknown> = {
    data: [eventData],
  };

  if (TEST_EVENT_CODE) {
    body.test_event_code = TEST_EVENT_CODE;
  }

  try {
    const url = `https://graph.facebook.com/${API_VERSION}/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('[Meta CAPI] Error:', response.status, errorData);
      return false;
    }

    if (process.env.NODE_ENV === 'development') {
      console.log('[Meta CAPI] Sent:', params.event_name, params.event_id);
    }

    return true;
  } catch (error) {
    console.error('[Meta CAPI] Network error:', error);
    return false;
  }
}

/**
 * Hash a value with SHA-256 for user_data fields (email, phone).
 * Meta requires lowercase, trimmed, SHA-256 hashed values.
 */
export async function hashForMeta(value: string): Promise<string> {
  const normalized = value.trim().toLowerCase();
  const encoder = new TextEncoder();
  const data = encoder.encode(normalized);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}
