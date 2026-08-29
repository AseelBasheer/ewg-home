"use client";

import {
  Activity,
  DatabaseBackup,
  FileSearch,
  KeyRound,
  Link2,
  Lock,
  ShieldCheck,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/scroll-reveal";

const securityPillars = [
  {
    title: "Secure Access",
    description:
      "Role-based access controls help ensure that users can access only the information and functions appropriate to their responsibilities.",
    icon: Lock,
  },
  {
    title: "Data Protection",
    description:
      "Sensitive information can be protected through encryption and secure data-management practices.",
    icon: ShieldCheck,
  },
  {
    title: "Identity & Access Management",
    description:
      "Control who can access systems, what they can access, and how access is managed.",
    icon: KeyRound,
  },
  {
    title: "Audit Trails",
    description:
      "Maintain detailed records of system activities, changes, approvals, and transactions.",
    icon: FileSearch,
  },
  {
    title: "Secure Integration",
    description:
      "Connect external systems through controlled APIs and secure integration architecture.",
    icon: Link2,
  },
  {
    title: "Backup & Recovery",
    description:
      "Design systems with data resilience and recovery requirements in mind.",
    icon: DatabaseBackup,
  },
  {
    title: "Continuous Monitoring",
    description:
      "Support visibility into system activity, access, and operational events.",
    icon: Activity,
  },
];

export function Security() {
  return (
    <section id="security" className="border-t border-border/60 bg-muted/30 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <Badge variant="outline" className="mb-4">
            Security &amp; Data Protection
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Security Built Into Every Layer
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            Digital transformation requires more than functionality.
          </p>
          <p className="mt-2 text-base leading-7 text-muted-foreground">It requires trust.</p>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            East West Global designs systems with security, access control, data protection,
            monitoring, and auditability in mind.
          </p>
        </ScrollReveal>

        <StaggerContainer className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {securityPillars.map((pillar, index) => {
            const Icon = pillar.icon;

            return (
              <StaggerItem
                key={pillar.title}
                className={index === securityPillars.length - 1 ? "sm:col-span-2 lg:col-span-1" : undefined}
              >
                <article className="h-full rounded-xl border border-border/60 bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
                  <div
                    className={`mb-4 flex h-10 w-10 items-center justify-center rounded-lg ${
                      index % 2 === 0
                        ? "bg-primary text-primary-foreground"
                        : "bg-card text-silver border border-silver/30"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-foreground">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {pillar.description}
                  </p>
                </article>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <ScrollReveal delay={0.1} className="mt-16">
          <blockquote className="rounded-xl border border-primary/20 bg-primary px-6 py-8 text-center text-primary-foreground sm:px-10 sm:py-10">
            <p className="text-lg font-semibold leading-relaxed sm:text-xl">
              Security is not a feature. It is part of the architecture.
            </p>
          </blockquote>
        </ScrollReveal>
      </div>
    </section>
  );
}
