"use client";

import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/scroll-reveal";

export function CompanyVision() {
  return (
    <section id="company-vision" className="border-t border-border/60 bg-primary py-24 text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <Badge
            variant="secondary"
            className="mb-4 border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground"
          >
            Our Vision
          </Badge>
          <p className="text-lg leading-8 text-primary-foreground/90 sm:text-xl">
            To become a trusted technology partner for organizations seeking to build the next
            generation of digital infrastructure for commerce and enterprise.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
