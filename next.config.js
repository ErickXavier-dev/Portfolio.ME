/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  /**
   * Security headers are set dynamically (with per-request CSP nonce) by
   * middleware.js. This static block serves only as a defence-in-depth fallback
   * for requests that bypass middleware (e.g. static asset cache hits).
   *
   * NOTE: Do NOT add a Content-Security-Policy here — it would conflict with
   * the nonce-based policy in middleware.js and cause the browser to reject
   * inline scripts that have a valid nonce.
   */
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), payment=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
          { key: "Cross-Origin-Resource-Policy", value: "same-origin" },
        ],
      },
    ];
  },

  /**
   * Allow Next.js Image Optimisation to serve images from the external icon
   * CDNs used by Skills.jsx.  Only needed if you ever switch skill icons to
   * use next/image; safe to keep as allow-list in the meantime.
   */
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.simpleicons.org" },
      { protocol: "https", hostname: "api.iconify.design" },
    ],
  },
};

module.exports = nextConfig;

