import { Suspense } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Leadership from "@/components/Leadership";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";

/** Minimal height-preserving skeleton — prevents CLS during Suspense hydration */
function SectionSkeleton() {
  return (
    <div
      className="py-24 px-6 max-w-6xl mx-auto border-t border-border animate-pulse"
      aria-hidden="true"
    >
      <div className="h-8 w-48 bg-surface rounded mb-4 mx-auto" />
      <div className="h-4 w-64 bg-surface rounded mx-auto" />
    </div>
  );
}

export default function Home() {
  return (
    <main
      id="main-content"
      aria-label="Portfolio content"
      className="min-h-screen relative overflow-hidden bg-background"
    >
      {/* Fixed animated particle network — sits behind all sections */}
      <ParticleBackground />

      {/* Page sections — z-10 keeps them above the canvas */}
      <div className="relative z-10">
        {/* Hero is above the fold — rendered immediately, no Suspense */}
        <Hero />

        {/* About and Leadership are Server Components — stream with no JS cost */}
        <About />

        {/*
         * Skills has heavy client-side state (filter + marquee animation).
         * Suspense lets the server stream the rest of the page without waiting
         * for this component's client bundle to hydrate.
         */}
        <Suspense fallback={<SectionSkeleton />}>
          <Skills />
        </Suspense>

        {/*
         * Projects renders a bento grid — also wrapped so it doesn't block
         * Leadership/Certifications from streaming on slow connections.
         */}
        <Suspense fallback={<SectionSkeleton />}>
          <Projects />
        </Suspense>

        <Leadership />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}

