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
          <Badge variant="section" className="mb-6">
            Our Core Technology
          </Badge>
          <h2 className="section-title text-foreground">
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
                        ? "bg-primary text-primary-foreground"
                        : "bg-card text-silver border border-silver/30"
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
