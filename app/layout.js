import "./globals.css";

export const metadata = {
  title: "Erick Xavier | Full-Stack Engineer · AI/ML · Cybersecurity",
  description: "CTO @ IEDC Amrita | MCA AI & Data Science student. I build production-grade institutional systems: AI chatbots for government infrastructure, IoT devices, and enterprise platforms.",
  metadataBase: new URL("https://erickxavier.dev"), // Fallback base URL for metadata
  openGraph: {
    title: "Erick Xavier | Full-Stack Engineer",
    description: "CTO @ IEDC Amrita | MCA AI & Data Science student. Builder of enterprise platforms, local-first AI RAG solutions, and secure check-in systems.",
    url: "https://erickxavier.dev",
    siteName: "Erick Xavier Portfolio",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Erick Xavier",
    "jobTitle": "Full-Stack Engineer & Chief Technical Officer",
    "worksFor": {
      "@type": "Organization",
      "name": "IEDC Amrita Vishwa Vidyapeetham, Kochi",
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Amrita Vishwa Vidyapeetham",
    },
    "url": "https://erickxavier.dev",
    "sameAs": [
      "https://github.com/ErickXavier-dev",
      "https://linkedin.com/in/erickxavier"
    ],
    "description": "CTO of IEDC Amrita Kochi and founder of Software Innovators Club. Building production AI, IoT, and enterprise tools."
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" 
          rel="stylesheet" 
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-text-primary selection:bg-accent-primary/20">
        {children}
      </body>
    </html>
  );
}
