"use client";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { ScrollReveal } from "@/components/scroll-reveal";
import { cn } from "@/lib/utils";

export function Vision() {
  return (
    <section id="vision" className="relative border-t border-primary/20 py-24">
      <div className="hero-glow pointer-events-none absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <Badge variant="outline" className="mb-4 border-primary/40 bg-primary/10 text-primary">
            The Future of Digital Operations
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Have a Complex Process That Needs to Be{" "}
            <span className="gradient-text">Automated?</span>
          </h2>
          <p className="mt-6 text-base leading-7 text-muted-foreground">
            Whether you are modernizing trade operations, transforming international commerce,
            or building enterprise platforms — East West Global can help you design the right
            technology roadmap.
          </p>
          <div className="mt-10">
            <a
              href="#contact"
              className={cn(
                buttonVariants({ size: "lg" }),
                "btn-glow w-full bg-primary hover:bg-primary/90 sm:w-auto"
              )}
            >
              Request a Consultation
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
