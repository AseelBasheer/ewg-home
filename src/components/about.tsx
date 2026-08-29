"use client";

import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/scroll-reveal";

export function About() {
  return (
    <section id="about" className="border-t border-border/60 bg-muted/30 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <Badge variant="section" className="mb-6">
            About East West Global
          </Badge>
          <h2 className="section-title text-foreground">
            Building the digital infrastructure of tomorrow
          </h2>
          <p className="mt-6 text-base leading-7 text-muted-foreground">
            East West Global LLC is a technology and digital transformation company focused
            on developing secure, intelligent, and scalable digital systems.
          </p>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            We specialize in data automation, workflow automation, platform development, system
            integration, artificial intelligence, and digital transformation.
          </p>
          <blockquote className="mt-10 border-l-4 border-primary pl-6 text-left sm:text-center sm:border-l-0 sm:pl-0">
            <p className="text-lg font-semibold italic text-foreground sm:text-xl">
              Our mission is simple: transform complex processes into connected, intelligent,
              and secure digital environments.
            </p>
          </blockquote>
        </ScrollReveal>
      </div>
    </section>
  );
}
