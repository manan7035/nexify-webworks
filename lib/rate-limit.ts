const hits = new Map<string, number[]>();

export interface RateLimitResult {
  allowed: boolean;
  retryAfterSeconds: number;
}

export function rateLimitByIp(
  ip: string,
  limit = 10,
  windowMs = 60_000
): RateLimitResult {
  const now = Date.now();
  const cutoff = now - windowMs;

  const timestamps = (hits.get(ip) ?? []).filter((t) => t > cutoff);

  if (timestamps.length >= limit) {
    const oldest = timestamps[0];
    const retryAfterSeconds = Math.max(
      1,
      Math.ceil((oldest + windowMs - now) / 1000)
    );
    hits.set(ip, timestamps);
    return { allowed: false, retryAfterSeconds };
  }

  timestamps.push(now);
  hits.set(ip, timestamps);
  return { allowed: true, retryAfterSeconds: 0 };
}
