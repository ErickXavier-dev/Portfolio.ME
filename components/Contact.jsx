"use client";

import { useEffect, useState } from "react";
import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  const [emailLink, setEmailLink] = useState("");
  const [visibleEmail, setVisibleEmail] = useState("Click to reveal email");

  useEffect(() => {
    // xaviererick879 at gmail dot com
    const parts = ["xaviererick879", "gmail.com"];
    const email = parts.join("@");
    setEmailLink(`mailto:${email}`);
    setVisibleEmail(email);
  }, []);

  return (
    <section id="contact" className="py-24 px-6 bg-background border-t border-border flex flex-col justify-center items-center">
      <div className="max-w-xl w-full text-center">
        {/* Contact Card */}
        <div className="bg-surface border border-border rounded-lg p-10 md:p-14 hover:border-accent-primary transition-colors duration-300">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-text-primary mb-4">
            Let's build something.
          </h2>
          
          <div className="h-0.5 w-12 bg-accent-primary mx-auto mb-8"></div>

          {/* Social CTAs */}
          <div className="flex justify-center gap-4 mb-8">
            {emailLink && (
              <a
                href={emailLink}
                className="px-4 py-2 border border-border rounded font-mono text-xs text-text-muted hover:text-accent-primary hover:border-accent-primary transition-all duration-300"
              >
                [Email]
              </a>
            )}
            <a
              href="https://linkedin.com/in/erickxavier"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-border rounded font-mono text-xs text-text-muted hover:text-accent-primary hover:border-accent-primary transition-all duration-300"
            >
              [LinkedIn]
            </a>
            <a
              href="https://github.com/ErickXavier-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-border rounded font-mono text-xs text-text-muted hover:text-accent-primary hover:border-accent-primary transition-all duration-300"
            >
              [GitHub]
            </a>
          </div>

          {/* Client-Side email string */}
          <div className="font-mono text-sm text-accent-secondary py-2 break-all bg-background border border-border rounded px-4 inline-block">
            {visibleEmail}
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-xs font-mono text-text-muted">
          <p>© 2025 Erick Xavier · Built with intent.</p>
        </footer>
      </div>
    </section>
  );
}
