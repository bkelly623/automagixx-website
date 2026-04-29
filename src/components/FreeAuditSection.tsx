"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles, WandSparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CALENDAR_PATH } from "@/app/components/cta";

const steps = [
  "We identify the highest-value role an AI employee could fill first.",
  "You get a simple recommendation: employee, workflow, offer, and pilot path.",
  "If there is a fit, we build the first managed employee and improve it with usage data.",
];

export default function FreeAuditSection() {
  return (
    <section
      id="first-employee"
      className="relative py-20 md:py-28 overflow-hidden scroll-mt-28 border-y border-border/60 bg-gradient-to-b from-background via-card/20 to-background"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-[10%] w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-[8%] w-64 h-64 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-5">
              <WandSparkles className="w-4 h-4 text-primary" aria-hidden />
              <span className="text-sm text-muted-foreground">First AI Employee Finder</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold leading-tight mb-4">
              Do not automate everything. Hire the <span className="gradient-text">first employee that pays</span>.
            </h2>
            <p className="text-muted-foreground text-lg max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
              The first job is not to build a giant system. It is to find the one AI employee most likely to create
              cashflow, prove ROI, and earn the right to expand.
            </p>
            <Button
              size="lg"
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 font-semibold group"
            >
              <Link href={CALENDAR_PATH}>
                Find my first AI employee
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="relative"
          >
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-primary/25 via-transparent to-secondary/20 blur-xl opacity-80 pointer-events-none" />
            <div className="relative rounded-3xl border border-white/10 glass-strong glow p-6 sm:p-8 shadow-[var(--shadow-card)]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-primary-foreground" aria-hidden />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-foreground">Recommendation spell</h3>
                  <p className="text-sm text-muted-foreground">Revenue-first, not tool-first.</p>
                </div>
              </div>

              <div className="space-y-4">
                {steps.map((step, index) => (
                  <div key={step} className="flex gap-3 rounded-2xl border border-white/10 bg-background/40 p-4">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden />
                    <p className="text-muted-foreground leading-relaxed">
                      <span className="text-foreground font-semibold">Step {index + 1}: </span>
                      {step}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-primary/20 bg-primary/10 p-4 text-sm text-muted-foreground">
                Warm prospect upgrade: if someone engages, we can spin up a lightweight website-to-AI demo for their
                business before asking for a bigger commitment.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
