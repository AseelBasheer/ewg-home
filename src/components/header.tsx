"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/components/logo";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#why-us", label: "Why Us" },
  { href: "#services", label: "Solutions" },
  { href: "#platforms", label: "Platforms" },
  { href: "#approach", label: "Approach" },
  { href: "#technology", label: "Technology" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(scrollTop > 20);
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    for (const section of sections) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-primary/20 bg-background/90 shadow-lg shadow-primary/5 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary via-primary to-silver transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden
      />

      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center transition-opacity hover:opacity-90">
          <Logo size="sm" />
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-all",
                activeSection === link.href
                  ? "bg-primary/15 text-primary"
                  : "text-muted-foreground hover:bg-primary/10 hover:text-foreground"
              )}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className={cn(buttonVariants({ size: "sm" }), "btn-glow ml-2 bg-primary hover:bg-primary/90")}
          >
            Request a Consultation
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((open) => !open)}
        >
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <div
        className={cn(
          "border-t border-primary/20 bg-background/95 backdrop-blur-xl lg:hidden",
          mobileOpen ? "block" : "hidden"
        )}
      >
        <nav className="flex flex-col gap-1 px-4 py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
                activeSection === link.href
                  ? "bg-primary/15 text-primary"
                  : "text-muted-foreground hover:bg-primary/10 hover:text-foreground"
              )}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className={cn(buttonVariants({ size: "sm", className: "btn-glow mt-2" }))}
            onClick={() => setMobileOpen(false)}
          >
            Request a Consultation
          </a>
        </nav>
      </div>
    </header>
  );
}
