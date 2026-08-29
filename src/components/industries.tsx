"use client";

import {
  Building2,
  Factory,
  Globe2,
  Package,
  ShoppingCart,
  Wallet,
  Workflow,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/scroll-reveal";

const industries = [
  {
    title: "International Trade",
    description:
      "Automate trade operations and connect buyers, sellers, suppliers, documents, and transactions.",
    icon: Globe2,
  },
  {
    title: "Customs & Logistics",
    description:
      "Digitize documentation, workflows, approvals, tracking, and operational reporting.",
    icon: Package,
  },
  {
    title: "Commercial Attachments",
    description:
      "Centralize global commercial activities, business relationships, market intelligence, and reporting.",
    icon: Building2,
  },
  {
    title: "Enterprise",
    description:
      "Connect departments, automate workflows, and create unified information environments.",
    icon: Workflow,
  },
  {
    title: "Financial Services",
    description:
      "Build secure workflows, data platforms, document systems, and intelligent reporting solutions.",
    icon: Wallet,
  },
  {
    title: "Retail & E-Commerce",
    description:
      "Automate transactions, data management, inventory processes, customer operations, and analytics.",
    icon: ShoppingCart,
  },
  {
    title: "Manufacturing",
    description:
      "Connect operational processes, supply chains, data, documents, and reporting.",
    icon: Factory,
  },
];

export function Industries() {
  return (
    <section id="industries" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <Badge variant="outline" className="mb-4">
            Industries We Serve
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Digital Solutions for Complex Organizations
          </h2>
        </ScrollReveal>

        <StaggerContainer className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <StaggerItem key={industry.title}>
                <article className="glass-card flex h-full flex-col p-6">
                  <div
                    className={`mb-4 flex h-10 w-10 items-center justify-center rounded-lg ${
                      index % 2 === 0
                        ? "bg-primary text-primary-foreground"
                        : "bg-card text-silver border border-silver/30"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold leading-snug text-foreground">{industry.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {industry.description}
                  </p>
                </article>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
