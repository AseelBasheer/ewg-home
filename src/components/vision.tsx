"use client";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { ScrollReveal } from "@/components/scroll-reveal";

export function Vision() {
  return (
    <section id="vision" className="border-t border-border/60 bg-primary py-24 text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <Badge
            variant="secondary"
            className="mb-4 border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground"
          >
            The Future of Digital Operations
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Have a Complex Process That Needs to Be Automated?
          </h2>
          <p className="mt-6 text-base leading-7 text-primary-foreground/85">
            Whether you are modernizing trade operations, transforming international commerce,
            or building enterprise platforms — East West Global can help you design the right
            technology roadmap.
          </p>
          <div className="mt-10">
            <a
              href="#contact"
              className={buttonVariants({
                size: "lg",
                className:
                  "bg-primary-foreground text-primary hover:bg-primary-foreground/90 w-full sm:w-auto",
              })}
            >
              Request a Consultation
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
