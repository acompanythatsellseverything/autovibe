declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function pushDataLayer(event: string, params: Record<string, unknown> = {}): void {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}

type ConsentValue = 'granted' | 'denied';

export function updateConsent(granted: boolean): void {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  if (!window.gtag) {
    window.gtag = function (...args: unknown[]) {
      window.dataLayer.push(args as unknown as Record<string, unknown>);
    };
  }
  const v: ConsentValue = granted ? 'granted' : 'denied';
  window.gtag('consent', 'update', {
    analytics_storage: v,
    ad_storage: v,
    ad_user_data: v,
    ad_personalization: v,
  });
}

export function resetDataLayer(keys: string[]): void {
  if (typeof window === 'undefined') return;
  const reset: Record<string, unknown> = {};
  for (const k of keys) reset[k] = undefined;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(reset);
}

export function getFbp(): string | undefined {
  if (typeof document === 'undefined') return undefined;
  const match = document.cookie.match(/(?:^|;\s*)_fbp=([^;]*)/);
  return match?.[1] || undefined;
}

export function getFbc(): string | undefined {
  if (typeof document === 'undefined') return undefined;
  const match = document.cookie.match(/(?:^|;\s*)_fbc=([^;]*)/);
  return match?.[1] || undefined;
}
