"use client";

import { ArrowDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/scroll-reveal";

const traditionalSteps = [
  "Paper",
  "Manual Entry",
  "Email",
  "Waiting",
  "Approval",
  "Data Re-entry",
  "Reporting",
];

const ewgSteps = [
  "Digital Request",
  "Automated Routing",
  "Intelligent Validation",
  "Digital Approval",
  "Automated Notification",
  "Centralized Record",
  "Real-Time Analytics",
];

function ProcessColumn({
  title,
  steps,
  variant,
}: {
  title: string;
  steps: string[];
  variant: "traditional" | "ewg";
}) {
  const isEwg = variant === "ewg";

  return (
    <article
      className={`flex h-full flex-col rounded-xl border p-6 sm:p-8 ${
        isEwg
          ? "border-primary/30 bg-primary/5 shadow-sm"
          : "border-border/60 bg-card shadow-sm"
      }`}
    >
      <h3
        className={`text-lg font-semibold ${
          isEwg ? "text-foreground" : "text-foreground"
        }`}
      >
        {title}
      </h3>

      <ol className="mt-6 flex flex-1 flex-col items-center">
        {steps.map((step, index) => (
          <li key={step} className="flex w-full flex-col items-center">
            <span
              className={`w-full rounded-lg px-4 py-3 text-center text-sm font-medium sm:text-base ${
                isEwg
                  ? "border border-primary/50 bg-primary text-primary-foreground"
                  : "border border-border/60 bg-card text-foreground"
              }`}
            >
              {step}
            </span>
            {index < steps.length - 1 && (
              <ArrowDown
                className={`my-2 h-4 w-4 shrink-0 ${
                  isEwg ? "text-primary/60" : "text-muted-foreground/50"
                }`}
                aria-hidden
              />
            )}
          </li>
        ))}
      </ol>
    </article>
  );
}

export function DigitalWorkflow() {
  return (
    <section id="digital-workflow" className="border-t border-border/60 bg-muted/30 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <Badge variant="outline" className="mb-4">
            Digital Workflow
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            From Manual Processes to Intelligent Workflows
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            Every organization has processes.
          </p>
          <p className="mt-2 text-base leading-7 text-muted-foreground">
            Our job is to make them work better.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          <ProcessColumn
            title="Traditional Process"
            steps={traditionalSteps}
            variant="traditional"
          />
          <ProcessColumn
            title="East West Global Process"
            steps={ewgSteps}
            variant="ewg"
          />
        </ScrollReveal>

        <ScrollReveal delay={0.15} className="mt-12 text-center">
          <p className="mx-auto max-w-2xl text-base leading-7 text-muted-foreground">
            The result is a more connected, transparent, and measurable operation.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
