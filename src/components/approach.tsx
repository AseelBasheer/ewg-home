"use client";

import { Badge } from "@/components/ui/badge";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/scroll-reveal";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We analyze your existing processes, systems, data, and operational requirements.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We design the digital architecture, workflows, interfaces, security model, and user experience.",
  },
  {
    number: "03",
    title: "Digitize",
    description:
      "We convert paper-based and manual processes into structured digital workflows.",
  },
  {
    number: "04",
    title: "Automate",
    description:
      "We automate repetitive tasks, approvals, notifications, validations, and information routing.",
  },
  {
    number: "05",
    title: "Integrate",
    description:
      "We connect your existing systems, databases, APIs, payment systems, and external platforms.",
  },
  {
    number: "06",
    title: "Optimize",
    description:
      "We continuously improve performance through analytics, automation, and intelligent technologies.",
  },
];

export function Approach() {
  return (
    <section id="approach" className="border-t border-border/60 bg-muted/30 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <Badge variant="outline" className="mb-4">
            Our Digital Transformation Approach
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            From discovery to optimization
          </h2>
        </ScrollReveal>

        <StaggerContainer className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <StaggerItem key={step.number}>
              <div className="relative rounded-xl border border-border/60 bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
                <span className="text-3xl font-bold text-primary/20">{step.number}</span>
                <h3 className="mt-2 text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
