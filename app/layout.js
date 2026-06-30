import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { headers } from "next/headers";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";


// ── Self-hosted fonts via next/font ────────────────────────────────────────
// These are downloaded at build time and served from your own domain —
// eliminating the render-blocking Google Fonts network request entirely.
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  preload: false, // mono font is not LCP-critical — defer it
});

// ── SEO Metadata ───────────────────────────────────────────────────────────
export const metadata = {
  title: "Erick Xavier | Full-Stack Engineer · AI/ML · Cybersecurity",
  description:
    "AI Intern @ KMRL | CTO @ IEDC Amrita | MCA AI & Data Science student. I build production-grade institutional systems: AI chatbots for government infrastructure, IoT devices, and enterprise platforms.",
  metadataBase: new URL("https://erickxavier.dev"),

  // Canonical URL — prevents duplicate-content penalties
  alternates: {
    canonical: "https://erickxavier.dev",
  },

  openGraph: {
    title: "Erick Xavier | Full-Stack Engineer",
    description:
      "AI Intern @ KMRL | CTO @ IEDC Amrita | MCA AI & Data Science student. Builder of enterprise platforms, local-first AI RAG solutions, and secure check-in systems.",
    url: "https://erickxavier.dev",
    siteName: "Erick Xavier Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Erick Xavier — Full-Stack Engineer · AI/ML · Cybersecurity",
      },
    ],
  },

  // Twitter / X card
  twitter: {
    card: "summary_large_image",
    title: "Erick Xavier | Full-Stack Engineer · AI/ML",
    description:
      "AI Intern @ KMRL & CTO @ IEDC Amrita. Building production AI, IoT, and enterprise tools.",
    creator: "@erickxavier",
    images: ["/opengraph-image"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

// Viewport export — themeColor must be here in Next.js 16+, not in metadata
export const viewport = {
  themeColor: "#0D0F14",
};

// ── Root Layout ─────────────────────────────────────────────────────────────
// async — needed to read the per-request nonce from proxy.js via headers()
export default async function RootLayout({ children }) {
  // Read the CSP nonce injected by proxy.js — falls back to "" in dev
  // when the proxy hasn't matched (e.g., prefetch requests).
  const nonce = (await headers()).get("x-nonce") ?? "";

  // Structured data (JSON-LD) — Person schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Erick Xavier",
    jobTitle: "Full-Stack Engineer & Chief Technical Officer",
    worksFor: [
      {
        "@type": "Organization",
        name: "Kochi Metro Rail Limited (KMRL)",
      },
      {
        "@type": "Organization",
        name: "IEDC Amrita Vishwa Vidyapeetham, Kochi",
      },
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Amrita Vishwa Vidyapeetham",
    },
    url: "https://erickxavier.dev",
    sameAs: [
      "https://github.com/ErickXavier-dev",
      "https://linkedin.com/in/erickxavier",
      "https://x.com/ErickXavier879",
      "https://www.instagram.com/erickxavier879",
    ],
    description:
      "AI Intern at KMRL, CTO of IEDC Amrita Kochi, and founder of Software Innovators Club. Building production AI, IoT, and enterprise tools.",
  };

  return (
    <html
      lang="en"
      className={`scroll-smooth ${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        {/*
         * JSON-LD structured data — nonce attribute allows this inline script
         * through our strict CSP (which disallows unsafe-inline for scripts).
         *
         * suppressHydrationWarning: browsers intentionally zero-out the nonce
         * attribute after reading it (prevents nonce leaking via CSS selectors).
         * React hydration then sees nonce="" vs the real nonce from SSR and
         * would log a mismatch warning. This suppresses that expected delta.
         */}
        <script
          type="application/ld+json"
          nonce={nonce}
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-text-primary selection:bg-accent-primary/20">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

