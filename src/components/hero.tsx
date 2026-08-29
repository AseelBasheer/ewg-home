"use client";

import { motion } from "framer-motion";
import { Logo } from "@/components/logo";
import { NetworkBackground } from "@/components/network-background";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";

const pillars = [
  { label: "Automate", description: "Complex operations" },
  { label: "Connect", description: "Organizations & systems" },
  { label: "Transform", description: "Data into decisions" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <NetworkBackground />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(26,58,107,0.12),transparent)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,transparent_0%,var(--background)_70%)]" />

      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8 flex justify-center"
          >
            <Logo size="xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <Badge variant="secondary" className="mb-6 px-3 py-1 text-xs font-medium">
              Digital Infrastructure for Trade &amp; Enterprise
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            We design secure digital platforms that{" "}
            <span className="text-primary">automate</span> complex operations,{" "}
            <span className="text-gold">connect</span> organizations, and transform data into
            intelligent business processes.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-6 text-lg leading-8 text-muted-foreground"
          >
            East West Global LLC develops advanced digital solutions for international trade
            organizations, commercial enterprises, and cross-border operations — from trade and customs automation to document management, workflow
            orchestration, data intelligence, and secure system integration.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a href="#services" className={buttonVariants({ size: "lg", className: "w-full sm:w-auto" })}>
              Explore Our Solutions
            </a>
            <a
              href="#contact"
              className={buttonVariants({ variant: "outline", size: "lg", className: "w-full sm:w-auto" })}
            >
              Request a Consultation
            </a>
          </motion.div>
        </div>

        <ScrollReveal className="mx-auto mt-20 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.label}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="rounded-xl border border-border/60 bg-card/70 px-6 py-5 text-center backdrop-blur-sm"
            >
              <div className={`text-2xl font-bold sm:text-3xl ${index === 1 ? "text-gold" : "text-primary"}`}>
                {pillar.label}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">{pillar.description}</div>
            </motion.div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
