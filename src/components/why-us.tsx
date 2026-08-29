"use client";

import { Badge } from "@/components/ui/badge";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/scroll-reveal";

const reasons = [
  {
    title: "Business Understanding",
    description:
      "We focus on understanding the business process before developing the technology.",
  },
  {
    title: "End-to-End Solutions",
    description:
      "From strategy and architecture to development, integration, deployment, and support.",
  },
  {
    title: "Security by Design",
    description:
      "Security is considered from the beginning of the architecture, not added as an afterthought.",
  },
  {
    title: "Scalable Architecture",
    description:
      "Our systems are designed to grow with the organization.",
  },
  {
    title: "Data-Driven",
    description:
      "We transform operational data into actionable information.",
  },
  {
    title: "Long-Term Partnership",
    description:
      "We aim to become a technology partner, not simply a software vendor.",
  },
];

export function WhyUs() {
  return (
    <section id="why-us" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <Badge variant="outline" className="mb-4">
            Why East West Global?
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            A partner built for lasting impact
          </h2>
        </ScrollReveal>

        <StaggerContainer className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <StaggerItem key={reason.title}>
              <div className="h-full rounded-xl border border-border/60 bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
                <div
                  className={`mb-3 flex h-10 w-10 items-center justify-center rounded-lg text-sm font-bold ${
                    index % 2 === 0
                      ? "bg-primary/10 text-primary"
                      : "bg-gold/15 text-gold"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="font-semibold text-foreground">{reason.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
