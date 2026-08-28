"use client";

import { Badge } from "@/components/ui/badge";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/scroll-reveal";

const outcomes = [
  {
    title: "Higher Efficiency",
    description:
      "Raise performance across departments by automating repetitive tasks and eliminating bottlenecks.",
  },
  {
    title: "Less Paperwork",
    description:
      "Drastically reduce manual documentation through fully digitized workflows and electronic records.",
  },
  {
    title: "Faster Transactions",
    description:
      "Accelerate processing times for orders, approvals, and cross-agency communications.",
  },
  {
    title: "Better Data Quality",
    description:
      "Improve data accuracy and reporting quality with centralized databases and intelligent validation.",
  },
];

export function Vision() {
  return (
    <section id="vision" className="border-t border-border/60 bg-primary py-24 text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <Badge
            variant="secondary"
            className="mb-4 border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground"
          >
            Our Vision
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            An integrated digital environment for commercial attachments
          </h2>
          <p className="mt-6 text-base leading-7 text-primary-foreground/85">
            Our vision is to build an integrated digital environment for managing commercial
            attachments — enabling government agencies and overseas commercial entities to manage
            data, documents, orders, transactions, reports, and business relationships through
            a secure and unified centralized platform.
          </p>
        </ScrollReveal>

        <StaggerContainer className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {outcomes.map((outcome, index) => (
            <StaggerItem key={outcome.title}>
              <div className="text-center">
                <div
                  className={`mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold transition-transform hover:scale-110 ${
                    index % 2 === 0
                      ? "bg-primary-foreground/10 text-primary-foreground"
                      : "bg-gold/20 text-gold"
                  }`}
                >
                  {outcome.title.charAt(0)}
                </div>
                <h3 className="text-lg font-semibold">{outcome.title}</h3>
                <p className="mt-2 text-sm leading-6 text-primary-foreground/75">
                  {outcome.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
