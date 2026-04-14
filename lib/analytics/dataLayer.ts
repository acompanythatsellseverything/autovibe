declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

export function pushDataLayer(event: string, params: Record<string, unknown> = {}): void {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
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
