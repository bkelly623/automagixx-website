"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Bot, Sparkles, WandSparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FIRST_EMPLOYEE_PATH } from "@/app/components/cta";
import { TestDriveLink } from "@/components/TestDriveLink";

const proofPoints = [
  "AI employees, not generic bots",
  "Built to sell, support, and follow up",
  "Human-approved where it matters",
];

const employeeCards = [
  { title: "Lead Rescue Rep", text: "Follows up with missed, stale, and unconverted leads." },
  { title: "Appointment Setter", text: "Qualifies prospects and books calls or estimates." },
  { title: "Content Rep", text: "Turns your offers into posts, promos, and campaign assets." },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 md:pt-32">
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-[8%] w-80 h-80 rounded-full bg-primary/15 blur-3xl"
          animate={{ scale: [1, 1.18, 1], opacity: [0.35, 0.65, 0.35] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-12 right-[8%] w-96 h-96 rounded-full bg-secondary/15 blur-3xl"
          animate={{ scale: [1.18, 1, 1.18], opacity: [0.55, 0.3, 0.55] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
            >
              <WandSparkles className="w-4 h-4 text-primary" aria-hidden />
              <span className="text-sm text-muted-foreground">Managed AI employees for small businesses</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight mb-6 text-balance"
            >
              Hire your first <span className="gradient-text">AI employee</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Automagixx builds AI workers that capture leads, follow up, book appointments, create content, recover
              revenue, and keep your business moving 24/7 — without adding payroll.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.24 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 min-h-[3.75rem] text-base font-semibold group shadow-[0_0_45px_hsl(174_72%_56%/0.28)]"
              >
                <Link href={FIRST_EMPLOYEE_PATH}>
                  Find your first AI employee
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="rounded-full px-8 min-h-[3.75rem] text-base font-semibold border-border hover:bg-muted"
              >
                <TestDriveLink>
                  See a live AI demo
                  <Sparkles className="ml-2 w-5 h-5" />
                </TestDriveLink>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.34 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start mt-10"
            >
              {proofPoints.map((point) => (
                <span key={point} className="rounded-full border border-border/80 bg-muted/30 px-4 py-2 text-sm text-muted-foreground">
                  {point}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="relative"
          >
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-primary/20 via-transparent to-secondary/25 blur-2xl" />
            <div className="relative glass-strong rounded-[2rem] p-5 sm:p-6 glow overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-primary/10 blur-3xl" />
              <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5 mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-[0_0_35px_hsl(174_72%_56%/0.25)]">
                    <Bot className="w-6 h-6 text-primary-foreground" aria-hidden />
                  </div>
                  <div>
                    <div className="font-display font-bold text-foreground">AI Workforce Console</div>
                    <div className="text-sm text-muted-foreground">Automagixx operating layer</div>
                  </div>
                </div>
                <span className="rounded-full bg-primary/15 text-primary text-xs font-semibold px-3 py-1">LIVE</span>
              </div>

              <div className="space-y-4">
                {employeeCards.map((employee, index) => (
                  <motion.div
                    key={employee.title}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.35 + index * 0.1 }}
                    className="rounded-2xl border border-white/10 bg-background/45 p-4"
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-1 w-2.5 h-2.5 rounded-full bg-primary animate-pulse-glow shrink-0" />
                      <div>
                        <h3 className="font-display font-semibold text-foreground">{employee.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{employee.text}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl bg-gradient-to-r from-primary/15 to-secondary/15 border border-white/10 p-4">
                <div className="text-sm text-muted-foreground">Core spell</div>
                <div className="font-display font-bold text-lg text-foreground mt-1">
                  Sell the AI workforce by running the company with one.
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
