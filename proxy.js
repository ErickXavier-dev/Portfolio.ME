import { NextResponse } from "next/server";

const isDev = process.env.NODE_ENV === "development";

/**
 * Edge Proxy (Next.js 16 — proxy.js convention).
 *
 * Runs before every matched request. Generates a per-request CSP nonce
 * and sets all security response headers.
 */
export default function proxy(request) {
  // Generate a random nonce using the Web Crypto API (Edge-compatible)
  const array = new Uint8Array(16);
  crypto.getRandomValues(array);
  const nonce = btoa(String.fromCharCode(...array));

  // Build a strict Content-Security-Policy.
  // In development, React requires 'unsafe-eval' for HMR and stack traces.
  // In production, it is never included — the nonce is sufficient.
  if (isDev) {
    // eslint-disable-next-line no-console
    console.warn("[CSP] unsafe-eval active — development mode only.");
  }

  const scriptSrc = isDev
    ? `script-src 'self' 'nonce-${nonce}' 'strict-dynamic' 'unsafe-eval'`
    : `script-src 'self' 'nonce-${nonce}' 'strict-dynamic'`;

  const csp = [
    `default-src 'self'`,
    scriptSrc,
    // 'unsafe-inline' required for Tailwind utility classes and framer-motion inline styles.
    `style-src 'self' 'unsafe-inline'`,
    // Fonts are self-hosted via next/font — no external font CDN needed.
    `font-src 'self'`,
    // logos.hunter.io — used for issuer brand logos in Certifications.jsx.
    `img-src 'self' data: https://cdn.simpleicons.org https://api.iconify.design https://logos.hunter.io`,
    // Vercel Analytics + Speed Insights beacon endpoints.
    `connect-src 'self' https://vitals.vercel-insights.com https://va.vercel-scripts.com`,
    `media-src 'none'`,
    `object-src 'none'`,
    `frame-ancestors 'none'`,
    `base-uri 'self'`,
    `form-action 'self'`,
    `upgrade-insecure-requests`,
  ].join("; ");

  // Forward nonce to the layout via request header (read by layout.js → headers())
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);

  // Build response with mutated headers
  const response = NextResponse.next({
    request: { headers: requestHeaders },
  });

  // Set security response headers
  response.headers.set("Content-Security-Policy", csp);
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=(), payment=()"
  );
  response.headers.set(
    "Strict-Transport-Security",
    "max-age=63072000; includeSubDomains; preload"
  );
  response.headers.set("Cross-Origin-Opener-Policy", "same-origin");
  response.headers.set("Cross-Origin-Resource-Policy", "same-origin");

  return response;
}

/**
 * Only run on page navigations — skip static assets and image optimisation
 * to avoid overhead on every /_next/* request.
 */
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
