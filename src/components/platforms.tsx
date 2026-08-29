"use client";

import {
  Building2,
  Database,
  Globe2,
  Package,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/scroll-reveal";

const platforms = [
  {
    id: "ew-trade",
    name: "EW Trade",
    tagline: "International Trade Management Platform",
    description:
      "A centralized environment for managing import, export, suppliers, buyers, transactions, documentation, shipments, and trade intelligence.",
    icon: Globe2,
    capabilities: [
      "Trade Management",
      "Supplier & Buyer Management",
      "Document Management",
      "Shipment Tracking",
      "Trade Analytics",
      "Business Matching",
    ],
  },
  {
    id: "ew-customs",
    name: "EW Customs",
    tagline: "Smart Customs & Import/Export Automation",
    description:
      "A digital platform designed to streamline customs-related workflows and connect documentation, declarations, approvals, and operational data.",
    icon: Package,
  },
  {
    id: "ew-attachments",
    name: "EW Attachments",
    tagline: "Commercial Attachments Management Platform",
    description:
      "A centralized platform designed to help commercial offices manage companies, trade opportunities, reports, business relationships, events, documents, and market intelligence.",
    icon: Building2,
  },
  {
    id: "ew-datahub",
    name: "EW DataHub",
    tagline: "Centralized Data & Information Platform",
    description:
      "A secure data environment that brings information from multiple sources together into one structured and intelligent system.",
    icon: Database,
  },
  {
    id: "ew-secureflow",
    name: "EW SecureFlow",
    tagline: "Digital Workflow & Document Management",
    description:
      "A secure workflow environment for managing requests, documents, approvals, tasks, communications, and organizational processes.",
    icon: Workflow,
  },
];

export function Platforms() {
  return (
    <section id="platforms" className="border-t border-border/60 bg-muted/30 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <Badge variant="outline" className="mb-4">
            Our Platforms
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            One Digital Ecosystem. Multiple Business Solutions.
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            East West Global develops modular platforms that can be customized to meet the
            operational requirements of enterprises and international trade organizations.
          </p>
        </ScrollReveal>

        <StaggerContainer className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {platforms.map((platform, index) => {
            const Icon = platform.icon;

            return (
              <StaggerItem
                key={platform.id}
                className={index === 0 ? "lg:col-span-2" : undefined}
              >
                <article className="flex h-full flex-col rounded-xl border border-border/60 bg-card p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8">
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ${
                        index % 2 === 0
                          ? "bg-primary/10 text-primary"
                          : "bg-gold/15 text-gold"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold tracking-wide text-primary">
                        {platform.name}
                      </p>
                      <h3 className="mt-1 text-lg font-semibold leading-snug text-foreground">
                        {platform.tagline}
                      </h3>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-muted-foreground">
                    {platform.description}
                  </p>

                  {platform.capabilities && (
                    <div className="mt-5">
                      <p className="text-xs font-semibold uppercase tracking-wider text-foreground/70">
                        Key capabilities
                      </p>
                      <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                        {platform.capabilities.map((capability) => (
                          <li
                            key={capability}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary/70" />
                            <span>{capability}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </article>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <ScrollReveal delay={0.1} className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-foreground sm:text-2xl">
            Modular. Scalable. Connected.
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
            Our platforms can be deployed as independent solutions or integrated into a larger
            digital ecosystem.
          </p>
          <div className="mt-8">
            <a href="#contact" className={buttonVariants({ size: "lg" })}>
              Request a Platform Demonstration
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
