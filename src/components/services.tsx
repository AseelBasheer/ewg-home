"use client";

import {
  ArrowRight,
  BarChart3,
  Building2,
  FileSearch,
  Globe2,
  Link2,
  Package,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollReveal } from "@/components/scroll-reveal";

const solutions = [
  {
    id: "trade",
    icon: Globe2,
    title: "Trade Automation",
    subtitle: "Digitalizing International Trade",
    description:
      "Our trade automation solutions help organizations manage international commercial operations through centralized digital platforms.",
    capabilities: [
      "Import & export management",
      "Trade documentation",
      "Supplier management",
      "Buyer management",
      "Purchase and sales workflows",
      "Shipment tracking",
      "Document management",
      "Transaction management",
      "Notifications and approvals",
      "Reporting and analytics",
    ],
  },
  {
    id: "customs",
    icon: Package,
    title: "Customs Automation",
    subtitle: "Smarter Customs. Faster Processes.",
    description:
      "Modern customs operations require accurate data, secure documentation, efficient workflows, and real-time visibility.",
    capabilities: [
      "Import declarations",
      "Export declarations",
      "Customs documentation",
      "Invoice processing",
      "Certificate management",
      "Document verification",
      "HS Code management",
      "Automated workflows",
      "Approval management",
      "Risk-based analysis",
      "Shipment tracking",
      "Audit trails",
      "Reporting dashboards",
    ],
  },
  {
    id: "commercial",
    icon: Building2,
    title: "Commercial Attachments Management",
    subtitle: "A Digital Platform for Global Commercial Operations",
    description:
      "Our platform concept enables commercial offices and international representations to manage their activities through one centralized environment.",
    capabilities: [
      "Company registration",
      "Business opportunity management",
      "Importer and exporter databases",
      "Supplier databases",
      "Buyer databases",
      "Trade inquiries",
      "Market research",
      "Business matchmaking",
      "Commercial reports",
      "Document management",
      "Correspondence",
      "Events and meetings",
      "Performance tracking",
      "Centralized analytics",
    ],
  },
  {
    id: "idp",
    icon: FileSearch,
    title: "Intelligent Document Processing",
    subtitle: "Turn documents into structured data.",
    description:
      "Our technology can help organizations process documents with AI-assisted extraction, classification, validation, organization, and routing.",
    capabilities: [
      "Invoices",
      "Contracts",
      "Certificates",
      "Customs documents",
      "Purchase orders",
      "Shipping documents",
      "Official forms",
      "Business correspondence",
    ],
    footer:
      "AI-assisted processing can extract, classify, validate, organize, and route information automatically.",
  },
  {
    id: "workflow",
    icon: Workflow,
    title: "Workflow Automation",
    subtitle: "Replace fragmented manual processes with structured digital workflows.",
    description: null,
    workflowSteps: [
      "Requests",
      "Review",
      "Approval",
      "Processing",
      "Notification",
      "Completion",
      "Reporting",
    ],
  },
  {
    id: "bi",
    icon: BarChart3,
    title: "Data & Business Intelligence",
    subtitle: "Transform organizational data into meaningful information.",
    description: "Our dashboards can provide:",
    capabilities: [
      "Real-time KPIs",
      "Operational performance",
      "Transaction monitoring",
      "Financial indicators",
      "Trade statistics",
      "Geographic analysis",
      "Management reports",
      "Automated alerts",
    ],
  },
  {
    id: "integration",
    icon: Link2,
    title: "Secure System Integration",
    subtitle: "Your organization may already have multiple systems. We help connect them.",
    description:
      "The result is a connected digital environment instead of isolated systems.",
    systems: [
      "ERP",
      "CRM",
      "Databases",
      "External Systems",
      "APIs",
      "Payment Systems",
      "Cloud Platforms",
    ],
  },
];

function CapabilityList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-2 text-sm leading-6 text-muted-foreground"
        >
          <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary/70" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function Services() {
  return (
    <section id="services" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <Badge variant="outline" className="mb-4">
            Our Solutions
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Technology Designed Around Your Operations
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            East West Global develops digital solutions for organizations that need to automate
            complex workflows, manage large volumes of information, and connect multiple systems.
          </p>
        </ScrollReveal>

        <ScrollReveal className="mt-16">
          <Accordion
            defaultValue={["trade"]}
            className="rounded-xl border border-border/60 bg-card shadow-sm"
          >
            {solutions.map((solution) => {
              const Icon = solution.icon;

              return (
                <AccordionItem
                  key={solution.id}
                  value={solution.id}
                  className="border-border/60 px-4 sm:px-6"
                >
                  <AccordionTrigger className="py-5 text-base hover:no-underline sm:text-lg">
                    <span className="flex items-start gap-3 text-left">
                      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="flex flex-col gap-0.5">
                        <span className="font-semibold text-foreground">{solution.title}</span>
                        <span className="text-sm font-normal text-muted-foreground">
                          {solution.subtitle}
                        </span>
                      </span>
                    </span>
                  </AccordionTrigger>

                  <AccordionContent className="pb-6">
                    {solution.description && (
                      <p className="text-sm leading-7 text-muted-foreground">
                        {solution.description}
                      </p>
                    )}

                    {solution.capabilities && (
                      <CapabilityList items={solution.capabilities} />
                    )}

                    {solution.footer && (
                      <p className="mt-4 text-sm leading-7 text-muted-foreground">
                        {solution.footer}
                      </p>
                    )}

                    {solution.workflowSteps && (
                      <div className="mt-4 flex flex-wrap items-center gap-2">
                        {solution.workflowSteps.map((step, index) => (
                          <span key={step} className="flex items-center gap-2">
                            <span className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-sm font-medium text-foreground">
                              {step}
                            </span>
                            {index < solution.workflowSteps!.length - 1 && (
                              <ArrowRight className="hidden h-4 w-4 text-muted-foreground sm:block" />
                            )}
                          </span>
                        ))}
                      </div>
                    )}

                    {solution.systems && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {solution.systems.map((system, index) => (
                          <span key={system} className="flex items-center gap-2">
                            <Badge variant="secondary" className="font-normal">
                              {system}
                            </Badge>
                            {index < solution.systems!.length - 1 && (
                              <span className="text-muted-foreground">+</span>
                            )}
                          </span>
                        ))}
                      </div>
                    )}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </ScrollReveal>
      </div>
    </section>
  );
}
