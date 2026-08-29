"use client";

import { Badge } from "@/components/ui/badge";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/scroll-reveal";

const principles = ["Simpler", "Faster", "Smarter", "More Secure", "More Connected"];

export function Philosophy() {
  return (
    <section id="philosophy" className="border-t border-border/60 bg-muted/30 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <Badge variant="section" className="mb-6">
            Our Philosophy
          </Badge>
          <h2 className="section-title text-foreground">
            Technology should simplify, not complicate
          </h2>
          <p className="mt-6 text-base leading-7 text-muted-foreground">
            Technology should not make operations more complicated. It should make them:
          </p>
        </ScrollReveal>

        <StaggerContainer className="mt-12 flex flex-wrap justify-center gap-3">
          {principles.map((principle, index) => (
            <StaggerItem key={principle}>
              <span
                className={`inline-block rounded-full px-5 py-2.5 text-sm font-semibold sm:text-base ${
                  index === principles.length - 1
                    ? "border border-silver/50 bg-card text-silver"
                    : "border border-primary/50 bg-primary text-primary-foreground"
                }`}
              >
                {principle}
              </span>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
