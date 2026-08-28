"use client";

import { Badge } from "@/components/ui/badge";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/scroll-reveal";

export function About() {
  return (
    <section id="about" className="border-t border-border/60 bg-muted/30 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal direction="right">
            <Badge variant="outline" className="mb-4">
              Company Introduction
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Advancing information management and business processes
            </h2>
            <p className="mt-6 text-base leading-7 text-muted-foreground">
              We are a company specializing in data automation and the development of digital
              systems and platforms. We design and implement advanced technical solutions aimed
              at developing information management mechanisms and business processes — transforming
              traditional procedures into smart and interconnected electronic systems.
            </p>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              Our solutions serve government agencies and overseas commercial attachments,
              enabling organizations to manage data, documents, orders, transactions, reports,
              and business relationships through secure, unified technology.
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              {
                title: "Digital Systems & Platforms",
                description:
                  "Custom-built platforms that digitize and connect every layer of your commercial operations.",
              },
              {
                title: "Information Management",
                description:
                  "Advanced mechanisms for organizing, storing, and retrieving business data with precision.",
              },
              {
                title: "Process Transformation",
                description:
                  "Converting manual, paper-based workflows into streamlined electronic procedures.",
              },
              {
                title: "Secure Integration",
                description:
                  "Interconnected systems that maintain data security across agencies and partners.",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="rounded-xl border border-border/60 bg-card p-5 shadow-sm transition-shadow hover:shadow-md">
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
