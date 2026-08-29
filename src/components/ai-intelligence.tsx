"use client";

import {
  ArrowRight,
  BarChart3,
  FileSearch,
  Layers,
  LayoutDashboard,
  Search,
  TrendingUp,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/scroll-reveal";

const capabilities = [
  {
    title: "Intelligent Document Processing",
    description:
      "Automatically extract and organize information from business documents.",
    icon: FileSearch,
  },
  {
    title: "Automated Classification",
    description:
      "Classify documents, transactions, requests, and records according to predefined rules and intelligent models.",
    icon: Layers,
  },
  {
    title: "Predictive Analytics",
    description:
      "Identify patterns and trends that can support operational planning and decision-making.",
    icon: TrendingUp,
  },
  {
    title: "Intelligent Search",
    description:
      "Help users find relevant information across large databases and document repositories.",
    icon: Search,
  },
  {
    title: "Executive Dashboards",
    description:
      "Provide leadership with real-time visibility into key operations.",
    icon: LayoutDashboard,
  },
  {
    title: "Automated Reporting",
    description:
      "Generate structured reports from live organizational data.",
    icon: BarChart3,
  },
];

const dataFlow = ["Data", "Information", "Intelligence", "Action"];

export function AiIntelligence() {
  return (
    <section id="ai-intelligence" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <Badge variant="outline" className="mb-4">
            AI &amp; Data Intelligence
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Turn Data Into Intelligence
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            Organizations generate enormous amounts of information every day.
          </p>
          <p className="mt-2 text-base leading-7 text-muted-foreground">
            The challenge is not collecting data.
          </p>
          <p className="mt-2 text-base leading-7 text-muted-foreground">
            The challenge is turning that data into useful decisions.
          </p>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            East West Global applies artificial intelligence, automation, analytics, and structured
            data architecture to help organizations understand and use their information more
            effectively.
          </p>
        </ScrollReveal>

        <StaggerContainer className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;

            return (
              <StaggerItem key={capability.title}>
                <article className="h-full rounded-xl border border-border/60 bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
                  <div
                    className={`mb-4 flex h-10 w-10 items-center justify-center rounded-lg ${
                      index % 2 === 0
                        ? "bg-primary/10 text-primary"
                        : "bg-gold/15 text-gold"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-foreground">{capability.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {capability.description}
                  </p>
                </article>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <ScrollReveal delay={0.1} className="mt-16 text-center">
          <p className="text-lg font-semibold text-foreground sm:text-xl">
            From Data → Information → Intelligence → Action
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {dataFlow.map((step, index) => (
              <span key={step} className="flex items-center gap-2 sm:gap-3">
                <span className="rounded-lg border border-primary/20 bg-primary/5 px-4 py-2.5 text-sm font-semibold text-foreground sm:text-base">
                  {step}
                </span>
                {index < dataFlow.length - 1 && (
                  <ArrowRight className="hidden h-5 w-5 text-gold sm:block" aria-hidden />
                )}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
