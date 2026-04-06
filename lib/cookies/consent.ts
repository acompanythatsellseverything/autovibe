/**
 * Cookie consent management.
 * Stores user preference in a cookie (accessible server-side too).
 */

export type CookieConsent = 'all' | 'essential' | null;

const CONSENT_COOKIE = 'cookie_consent';
const CONSENT_MAX_AGE = 365 * 24 * 60 * 60; // 1 year in seconds

/** Read the current consent value from the cookie. */
export function getConsent(): CookieConsent {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(new RegExp(`(?:^|;\\s*)${CONSENT_COOKIE}=([^;]*)`));
  const value = match?.[1];
  if (value === 'all' || value === 'essential') return value;
  return null;
}

/** Save the consent value as a cookie. */
export function setConsent(value: 'all' | 'essential'): void {
  if (typeof document === 'undefined') return;
  document.cookie = `${CONSENT_COOKIE}=${value}; path=/; max-age=${CONSENT_MAX_AGE}; SameSite=Lax`;
}

/** Whether non-essential (analytics) cookies are allowed. */
export function isAnalyticsAllowed(): boolean {
  return getConsent() === 'all';
}
