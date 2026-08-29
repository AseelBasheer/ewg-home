"use client";

import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/scroll-reveal";

export function Mission() {
  return (
    <section id="mission" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <Badge variant="outline" className="mb-4">
            Our Mission
          </Badge>
          <p className="text-lg leading-8 text-muted-foreground sm:text-xl">
            To help organizations modernize the way they manage information, people, documents,
            transactions, and business processes through advanced digital technologies.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
