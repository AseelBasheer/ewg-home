"use client";

import { Badge } from "@/components/ui/badge";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/scroll-reveal";

const technologies = [
  {
    title: "Automation",
    description:
      "Automate repetitive processes and eliminate unnecessary manual work.",
  },
  {
    title: "Artificial Intelligence",
    description:
      "Use intelligent technologies to process documents, classify information, identify patterns, and support decision-making.",
  },
  {
    title: "Cloud Technology",
    description:
      "Build scalable digital infrastructure designed for secure access and organizational growth.",
  },
  {
    title: "Data Intelligence",
    description:
      "Turn large volumes of operational data into meaningful insights.",
  },
  {
    title: "APIs & Integration",
    description:
      "Connect systems and enable secure exchange of information across platforms.",
  },
  {
    title: "Cybersecurity",
    description:
      "Protect sensitive information through security-focused architecture, access controls, encryption, monitoring, and auditability.",
  },
];

export function Technology() {
  return (
    <section id="technology" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <Badge variant="outline" className="mb-4">
            Our Core Technology
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Built on proven, secure foundations
          </h2>
        </ScrollReveal>

        <StaggerContainer className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {technologies.map((tech, index) => (
            <StaggerItem key={tech.title}>
              <div className="rounded-xl border border-border/60 bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
                <div
                  className={`mb-3 flex h-10 w-10 items-center justify-center rounded-lg text-sm font-bold ${
                    index % 2 === 0
                      ? "bg-primary/10 text-primary"
                      : "bg-gold/15 text-gold"
                  }`}
                >
                  {tech.title.charAt(0)}
                </div>
                <h3 className="font-semibold text-foreground">{tech.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {tech.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
