"use client";

import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/scroll-reveal";

const chain = [
  "People",
  "Processes",
  "Data",
  "Documents",
  "Systems",
  "Decisions",
];

export function Ecosystem() {
  return (
    <section id="ecosystem" className="border-t border-border/60 bg-primary py-24 text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <Badge
            variant="secondary"
            className="mb-4 border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground"
          >
            Our Approach
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Built for organizations that need more than software
          </h2>
          <p className="mt-6 text-base leading-7 text-primary-foreground/85">
            We do not simply develop applications. We design complete digital ecosystems that
            connect every layer of your operations.
          </p>
          <p className="mt-4 text-base leading-7 text-primary-foreground/85">
            Our goal is to create technology that becomes part of the organization&apos;s
            infrastructure.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15} className="mt-16">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {chain.map((item, index) => (
              <div key={item} className="flex items-center gap-2 sm:gap-3">
                <span className="rounded-lg bg-primary-foreground/10 px-4 py-2.5 text-sm font-semibold sm:text-base">
                  {item}
                </span>
                {index < chain.length - 1 && (
                  <span className="text-gold text-lg font-light" aria-hidden>
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
