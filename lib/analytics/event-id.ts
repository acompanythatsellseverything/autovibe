/**
 * Generate a unique event ID for Meta Pixel + CAPI deduplication.
 * Uses crypto.randomUUID when available, falls back to timestamp + random.
 */
export function generateEventId(): string {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(36).substring(2, 11)}`;
}
