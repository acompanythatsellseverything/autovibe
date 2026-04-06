/**
 * Meta Pixel (fbq) client-side wrapper.
 * Handles initialization and provides a safe fbq() call.
 */

declare global {
  interface Window {
    fbq: (...args: unknown[]) => void;
    _fbq: (...args: unknown[]) => void;
  }
}

const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

/** Whether the pixel script has been injected */
let initialized = false;

/**
 * Initialize Meta Pixel. Safe to call multiple times — only injects once.
 */
export function initMetaPixel(): void {
  if (typeof window === 'undefined' || initialized || !PIXEL_ID) return;
  initialized = true;

  // Standard Meta Pixel base code
  /* eslint-disable */
  (function (f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
    if (f.fbq) return;
    n = f.fbq = function () {
      // eslint-disable-next-line prefer-rest-params
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = '2.0';
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
  /* eslint-enable */

  window.fbq('init', PIXEL_ID);
  window.fbq('track', 'PageView');
}

/**
 * Safe fbq() wrapper. No-ops if pixel is not loaded.
 */
export function fbq(...args: unknown[]): void {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq(...args);
  }
}

/**
 * Read the _fbp cookie (set by Meta Pixel).
 */
export function getFbp(): string | undefined {
  if (typeof document === 'undefined') return undefined;
  const match = document.cookie.match(/(?:^|;\s*)_fbp=([^;]*)/);
  return match?.[1] || undefined;
}

/**
 * Read the _fbc cookie (set when user arrives via fb ad click).
 */
export function getFbc(): string | undefined {
  if (typeof document === 'undefined') return undefined;
  const match = document.cookie.match(/(?:^|;\s*)_fbc=([^;]*)/);
  return match?.[1] || undefined;
}
