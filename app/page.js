import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Leadership from "@/components/Leadership";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-background">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Leadership />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}
