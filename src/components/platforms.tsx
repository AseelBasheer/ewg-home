"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
import { ScrollReveal } from "@/components/scroll-reveal";
import { cn } from "@/lib/utils";

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
  const [activeId, setActiveId] = useState(platforms[0].id);
  const active = platforms.find((p) => p.id === activeId) ?? platforms[0];
  const ActiveIcon = active.icon;

  return (
    <section id="platforms" className="section-glow relative border-t border-border/60 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <Badge variant="section" className="mb-6">
            Our Platforms
          </Badge>
          <h2 className="section-title text-foreground">
            One Digital Ecosystem.{" "}
            <span className="text-primary">Multiple Business Solutions.</span>
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            East West Global develops modular platforms that can be customized to meet the
            operational requirements of enterprises and international trade organizations.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="mt-12">
          <div className="flex flex-wrap justify-center gap-2">
            {platforms.map((platform) => {
              const Icon = platform.icon;
              const isActive = platform.id === activeId;

              return (
                <button
                  key={platform.id}
                  type="button"
                  onClick={() => setActiveId(platform.id)}
                  className={cn(
                    "flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium transition-all duration-300",
                    isActive
                      ? "border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                      : "border-border/60 bg-card text-muted-foreground hover:border-primary/40 hover:text-primary"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {platform.name}
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15} className="mt-8">
          <AnimatePresence mode="wait">
            <motion.article
              key={active.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card glow-cyan p-8 sm:p-10"
            >
              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-primary/50 bg-primary text-primary-foreground">
                  <ActiveIcon className="h-7 w-7" />
                </div>
                <div>
                  <p className="text-sm font-semibold tracking-wide text-primary">{active.name}</p>
                  <h3 className="mt-1 text-xl font-semibold leading-snug text-foreground sm:text-2xl">
                    {active.tagline}
                  </h3>
                </div>
              </div>

              <p className="mt-5 text-base leading-7 text-muted-foreground">{active.description}</p>

              {active.capabilities && (
                <div className="mt-6">
                  <p className="text-xs font-semibold tracking-wider text-silver uppercase">
                    Key capabilities
                  </p>
                  <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
                    {active.capabilities.map((capability) => (
                      <li
                        key={capability}
                        className="flex items-center gap-2 rounded-lg border border-primary/50 bg-primary px-3 py-2 text-sm text-primary-foreground"
                      >
                        <ShieldCheck className="h-4 w-4 shrink-0 text-primary" />
                        {capability}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.article>
          </AnimatePresence>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-foreground sm:text-2xl">
            Modular. Scalable. Connected.
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
            Our platforms can be deployed as independent solutions or integrated into a larger
            digital ecosystem.
          </p>
          <div className="mt-8">
            <a
              href="#contact"
              className={cn(buttonVariants({ size: "lg" }), "btn-glow bg-primary hover:bg-primary/90")}
            >
              Request a Platform Demonstration
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
