"use client";

import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/scroll-reveal";

export function CompanyVision() {
  return (
    <section id="company-vision" className="border-t border-primary/30 bg-primary py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <Badge
            variant="section"
            className="mb-6 border-white/50 bg-background text-foreground"
          >
            Our Vision
          </Badge>
          <p className="text-lg leading-8 text-primary-foreground sm:text-xl">
            To become a trusted technology partner for organizations seeking to build the next
            generation of digital infrastructure for commerce and enterprise.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
