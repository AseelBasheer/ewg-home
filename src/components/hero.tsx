"use client";

import { motion } from "framer-motion";
import { BarChart3, Cog, Network, Shield } from "lucide-react";
import { Logo } from "@/components/logo";
import { NetworkBackground } from "@/components/network-background";
import { AnimatedCounter, ScrollReveal } from "@/components/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const pillars = [
  { label: "Automate", description: "Complex operations" },
  { label: "Connect", description: "Organizations & systems" },
  { label: "Transform", description: "Data into decisions" },
];

const capabilities = [
  { icon: Cog, label: "Automation" },
  { icon: Network, label: "Integration" },
  { icon: Shield, label: "Security" },
  { icon: BarChart3, label: "Intelligence" },
];

const stats = [
  { value: 98, suffix: "%", label: "Data Accuracy" },
  { value: 3.2, suffix: "x", label: "Faster Processing", decimals: 1 },
  { value: 60, suffix: "%", label: "Paperwork Reduction" },
];

export function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      <NetworkBackground />
      <div className="hero-glow pointer-events-none absolute inset-0 -z-10" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,transparent_0%,var(--background)_85%)]" />

      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8 flex justify-center"
          >
            <div className="glow-cyan rounded-2xl p-2">
              <Logo size="xl" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <Badge
              variant="outline"
              className="mb-6 px-4 py-1.5 text-xs font-medium tracking-widest uppercase"
            >
              Digital Infrastructure for Trade &amp; Enterprise
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl lg:leading-tight"
          >
            We design secure digital platforms that{" "}
            <span className="text-primary">automate</span> complex operations,{" "}
            <span className="text-silver">connect</span> organizations, and{" "}
            <span className="text-primary">transform</span> data into intelligent business
            processes.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-6 text-lg leading-8 text-muted-foreground"
          >
            East West Global LLC develops advanced digital solutions for international trade
            organizations, commercial enterprises, and cross-border operations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a
              href="#services"
              className={cn(
                buttonVariants({ size: "lg" }),
                "btn-glow w-full bg-primary hover:bg-primary/90 sm:w-auto"
              )}
            >
              Explore Our Solutions
            </a>
            <a
              href="#contact"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "w-full border-primary/40 hover:border-primary/60 hover:bg-primary/10 sm:w-auto"
              )}
            >
              Request a Consultation
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mx-auto mt-14 flex max-w-lg flex-wrap items-center justify-center gap-6 sm:gap-8"
        >
          {capabilities.map(({ icon: Icon, label }, index) => (
            <motion.div
              key={label}
              whileHover={{ scale: 1.08, y: -2 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="flex flex-col items-center gap-2"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/50 bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                <Icon className="h-5 w-5" />
              </div>
              <span className="text-xs font-semibold tracking-wider text-silver uppercase">
                {label}
              </span>
              {index < capabilities.length - 1 && (
                <span className="absolute hidden" aria-hidden />
              )}
            </motion.div>
          ))}
        </motion.div>

        <ScrollReveal className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -4, scale: 1.02 }}
              className="glass-card px-6 py-5 text-center"
            >
              <div className="text-3xl font-bold text-primary sm:text-4xl">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.decimals ?? 0}
                />
              </div>
              <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </ScrollReveal>

        <ScrollReveal className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.label}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="glass-card px-6 py-5 text-center"
            >
              <div
                className={cn(
                  "text-2xl font-bold sm:text-3xl",
                  index === 1 ? "text-silver" : "text-primary"
                )}
              >
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
