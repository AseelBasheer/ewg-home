"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollReveal } from "@/components/scroll-reveal";

const helpTopics = [
  "Digital Transformation",
  "Trade Automation",
  "Customs Automation",
  "Commercial Attachments",
  "Workflow Automation",
  "AI & Data Solutions",
  "System Integration",
  "Enterprise Platforms",
  "Document Management",
];

type FormStatus = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    // Simulate form submission — replace with your backend or email service
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setStatus("success");
  }

  return (
    <section id="contact" className="border-t border-border/60 bg-muted/30 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <Badge variant="outline" className="mb-4">
            Contact Us
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Let&apos;s Build Your Digital Future
          </h2>
          <p className="mt-4 text-lg font-medium text-foreground">
            Have a Complex Process That Needs to Be Automated?
          </p>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            Tell us about your organization, your current challenges, and what you want to
            achieve.
          </p>
          <p className="mt-2 text-base leading-7 text-muted-foreground">
            Our team can help you evaluate the opportunity and design a technology roadmap.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal delay={0.05}>
            <div>
              <h3 className="text-lg font-semibold text-foreground">What We Can Help With</h3>
              <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {helpTopics.map((topic) => (
                  <li
                    key={topic}
                    className="rounded-lg border border-border/60 bg-card px-3 py-2 text-sm text-foreground"
                  >
                    {topic}
                  </li>
                ))}
              </ul>

              <div className="mt-10 rounded-xl border border-primary/20 bg-primary p-6 text-primary-foreground">
                <p className="font-semibold">East West Global LLC</p>
                <p className="mt-2 text-sm text-primary-foreground/85">
                  Data Automation | Digital Transformation | Intelligent Systems
                </p>
                <p className="mt-3 text-sm leading-6 text-primary-foreground/85">
                  We build technology that connects operations, data, and decisions.
                </p>
                <div className="mt-5 space-y-2 text-sm">
                  <a
                    href="mailto:info@ewglobal-llc.com"
                    className="block transition-colors hover:text-gold"
                  >
                    info@ewglobal-llc.com
                  </a>
                  <a
                    href="https://ewglobal-llc.com"
                    className="block transition-colors hover:text-gold"
                  >
                    ewglobal-llc.com
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <Card className="border-border/60 shadow-sm">
              <CardHeader>
                <CardTitle>Request a Consultation</CardTitle>
                <CardDescription>
                  Share your project details and our team will follow up with you.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {status === "success" ? (
                  <div className="flex flex-col items-center justify-center py-8 text-center">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">Request submitted!</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Thank you for reaching out. We&apos;ll be in touch soon.
                    </p>
                    <Button variant="outline" className="mt-6" onClick={() => setStatus("idle")}>
                      Submit another request
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-foreground">
                          Name
                        </label>
                        <Input id="name" name="name" placeholder="Your name" required />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="company" className="text-sm font-medium text-foreground">
                          Company
                        </label>
                        <Input id="company" name="company" placeholder="Your company" />
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-foreground">
                          Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="you@company.com"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-foreground">
                          Phone
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="country" className="text-sm font-medium text-foreground">
                          Country
                        </label>
                        <Input id="country" name="country" placeholder="Your country" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="industry" className="text-sm font-medium text-foreground">
                          Industry
                        </label>
                        <Input id="industry" name="industry" placeholder="Your industry" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="project" className="text-sm font-medium text-foreground">
                        Tell us about your project
                      </label>
                      <Textarea
                        id="project"
                        name="project"
                        placeholder="Describe your organization, challenges, and goals..."
                        rows={5}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full" disabled={status === "submitting"}>
                      {status === "submitting" ? "Submitting..." : "Submit Request"}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
