"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Archive,
  CheckCircle2,
  FileInput,
  ScanSearch,
  Settings2,
} from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const steps = [
  {
    id: "intake",
    title: "Document Intake",
    icon: FileInput,
    description:
      "Attachments are captured from multiple channels — email, API, portal uploads — and indexed automatically.",
    metrics: { time: "0.2s", accuracy: "99.8%" },
  },
  {
    id: "validation",
    title: "AI Validation",
    icon: ScanSearch,
    description:
      "Machine learning models verify document integrity, extract key fields, and flag anomalies for review.",
    metrics: { time: "1.4s", accuracy: "97.2%" },
  },
  {
    id: "processing",
    title: "Workflow Processing",
    icon: Settings2,
    description:
      "Automated routing assigns tasks, enforces business rules, and orchestrates multi-agency approvals.",
    metrics: { time: "4.8s", accuracy: "100%" },
  },
  {
    id: "approval",
    title: "Digital Approval",
    icon: CheckCircle2,
    description:
      "Stakeholders review, sign, and approve transactions through secure digital signatures and audit trails.",
    metrics: { time: "2.1s", accuracy: "99.9%" },
  },
  {
    id: "archive",
    title: "Secure Archive",
    icon: Archive,
    description:
      "Completed attachments are stored in centralized databases with full compliance and retrieval capabilities.",
    metrics: { time: "0.5s", accuracy: "100%" },
  },
];

export function WorkflowVisualization() {
  const [activeStep, setActiveStep] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const runDemo = () => {
    if (isRunning) return;
    setIsRunning(true);
    setActiveStep(0);

    let step = 0;
    const interval = setInterval(() => {
      step += 1;
      if (step >= steps.length) {
        clearInterval(interval);
        setIsRunning(false);
        return;
      }
      setActiveStep(step);
    }, 1200);
  };

  const current = steps[activeStep];
  const Icon = current.icon;

  return (
    <section id="workflow" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <Badge variant="section" className="mb-6">
            Workflow Automation
          </Badge>
          <h2 className="section-title text-foreground">
            See the process in action
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            Click any step or run the demo to watch how commercial attachments flow through
            our automated pipeline — from intake to secure archive.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="mt-12">
          <div className="flex justify-center">
            <button
              type="button"
              onClick={runDemo}
              disabled={isRunning}
              className={cn(
                "inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium transition-all",
                isRunning
                  ? "cursor-not-allowed bg-muted text-muted-foreground"
                  : "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg"
              )}
            >
              {isRunning ? (
                <>
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-foreground opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-foreground" />
                  </span>
                  Running Demo...
                </>
              ) : (
                <>
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Run Live Demo
                </>
              )}
            </button>
          </div>
        </ScrollReveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-5 lg:gap-4">
          {steps.map((step, index) => {
            const StepIcon = step.icon;
            const isActive = index === activeStep;
            const isPast = index < activeStep;

            return (
              <ScrollReveal key={step.id} delay={index * 0.08} direction="up">
                <button
                  type="button"
                  onClick={() => {
                    setActiveStep(index);
                    setIsRunning(false);
                  }}
                  className="group w-full text-left"
                >
                  <div className="relative flex flex-col items-center">
                    {index < steps.length - 1 && (
                      <div className="absolute left-[calc(50%+24px)] top-6 hidden h-0.5 w-[calc(100%-48px)] lg:block">
                        <div className="h-full w-full bg-border/60" />
                        <motion.div
                          className="absolute inset-y-0 left-0 bg-gold"
                          initial={{ width: "0%" }}
                          animate={{ width: isPast || isActive ? "100%" : "0%" }}
                          transition={{ duration: 0.5 }}
                        />
                      </div>
                    )}

                    <motion.div
                      className={cn(
                        "relative z-10 flex h-12 w-12 items-center justify-center rounded-xl border-2 transition-colors",
                        isActive
                          ? "border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                          : isPast
                            ? "border-gold bg-gold/10 text-gold"
                            : "border-border/60 bg-card text-muted-foreground group-hover:border-primary/40"
                      )}
                      animate={isActive ? { scale: [1, 1.08, 1] } : { scale: 1 }}
                      transition={{ duration: 0.4 }}
                    >
                      <StepIcon className="h-5 w-5" />
                    </motion.div>

                    <p
                      className={cn(
                        "mt-3 text-center text-xs font-semibold sm:text-sm",
                        isActive ? "text-primary" : "text-muted-foreground"
                      )}
                    >
                      {step.title}
                    </p>
                  </div>
                </button>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={0.2} className="mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
              className="mx-auto max-w-2xl rounded-2xl border border-border/60 bg-card p-6 shadow-sm sm:p-8"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground">{current.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {current.description}
                  </p>
                  <div className="mt-4 flex gap-6">
                    <div>
                      <p className="text-xs text-muted-foreground">Avg. Time</p>
                      <p className="text-lg font-bold text-primary">{current.metrics.time}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Accuracy</p>
                      <p className="text-lg font-bold text-gold">{current.metrics.accuracy}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 h-1.5 overflow-hidden rounded-full bg-muted">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-primary to-gold"
                  initial={{ width: "0%" }}
                  animate={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              </div>
              <p className="mt-2 text-right text-xs text-muted-foreground">
                Step {activeStep + 1} of {steps.length}
              </p>
            </motion.div>
          </AnimatePresence>
        </ScrollReveal>
      </div>
    </section>
  );
}
