"use client";

import { motion } from "framer-motion";
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
    <section id="ecosystem" className="relative border-t border-primary/20 bg-gradient-to-b from-primary/20 to-background py-24">
      <div className="hero-glow pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <Badge variant="outline" className="mb-4">
            Our Approach
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Built for organizations that need more than software
          </h2>
          <p className="mt-6 text-base leading-7 text-muted-foreground">
            We do not simply develop applications. We design complete digital ecosystems that
            connect every layer of your operations.
          </p>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            Our goal is to create technology that becomes part of the organization&apos;s
            infrastructure.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15} className="mt-16">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {chain.map((item, index) => (
              <div key={item} className="flex items-center gap-2 sm:gap-3">
                <motion.span
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="glass-card cursor-default px-4 py-2.5 text-sm font-semibold sm:text-base"
                >
                  {item}
                </motion.span>
                {index < chain.length - 1 && (
                  <span className="text-primary text-lg font-light" aria-hidden>
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
