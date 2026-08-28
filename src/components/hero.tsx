"use client";

import { motion } from "framer-motion";
import { Logo } from "@/components/logo";
import { NetworkBackground } from "@/components/network-background";
import { AnimatedCounter, ScrollReveal } from "@/components/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";

const stats = [
  { value: 98, suffix: "%", label: "Data Accuracy", decimals: 0 },
  { value: 3.2, suffix: "x", label: "Faster Processing", decimals: 1 },
  { value: 60, suffix: "%", label: "Paperwork Reduction", decimals: 0 },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <NetworkBackground />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(26,58,107,0.12),transparent)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,transparent_0%,var(--background)_70%)]" />

      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
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
              Data Automation &amp; Digital Transformation
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Smart systems for{" "}
            <span className="text-primary">commercial</span>{" "}
            <span className="text-gold">attachments</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl"
          >
            East West Global LLC specializes in data automation and the digital transformation
            of commercial attachments — designing and implementing advanced technical solutions
            that turn traditional procedures into smart, interconnected electronic systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a href="#dashboard" className={buttonVariants({ size: "lg", className: "w-full sm:w-auto" })}>
              Explore Platform
            </a>
            <a
              href="#workflow"
              className={buttonVariants({ variant: "outline", size: "lg", className: "w-full sm:w-auto" })}
            >
              Watch Workflow Demo
            </a>
          </motion.div>
        </div>

        <ScrollReveal className="mx-auto mt-20 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="rounded-xl border border-border/60 bg-card/70 px-6 py-5 text-center backdrop-blur-sm"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl font-bold text-primary sm:text-4xl">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                />
              </div>
              <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
