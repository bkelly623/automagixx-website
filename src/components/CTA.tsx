"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Mail, Phone, Sparkles } from "lucide-react";
import { FIRST_EMPLOYEE_PATH, PRIMARY_PHONE_DISPLAY, PRIMARY_PHONE_HREF } from "@/app/components/cta";
import Link from "next/link";
import { TestDriveLink } from "@/components/TestDriveLink";

export default function CTA() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden scroll-mt-28">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-primary/10" />
            <div className="absolute inset-0 glass" />

            <motion.div
              className="absolute top-0 right-0 w-80 h-80 rounded-full bg-primary/20 blur-3xl"
              animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-secondary/20 blur-3xl"
              animate={{ scale: [1.3, 1, 1.3], opacity: [0.4, 0.2, 0.4] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative z-10 py-16 px-8 md:py-20 md:px-16 text-center">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm text-primary mb-6"
              >
                <Sparkles className="w-4 h-4" aria-hidden />
                Build the first employee. Earn the full workforce.
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6"
              >
                Ready to hire an <span className="gradient-text">AI employee</span> that actually has a job?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
              >
                We will help you choose the first role, design the workflow, and launch a managed AI employee aimed at
                leads, bookings, follow-up, content, or operations.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button
                  size="lg"
                  asChild
                  className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 font-semibold group"
                >
                  <Link href={FIRST_EMPLOYEE_PATH} className="inline-flex items-center justify-center">
                    Find your first AI employee
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 font-semibold border-foreground/20 hover:bg-foreground/5"
                  asChild
                >
                  <TestDriveLink className="inline-flex items-center justify-center">
                    <Calendar className="mr-2 w-4 h-4" />
                    See a live AI demo
                  </TestDriveLink>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center text-muted-foreground"
              >
                <a
                  href={PRIMARY_PHONE_HREF}
                  className="flex items-center gap-2 hover:text-primary transition-colors tabular-nums"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  {PRIMARY_PHONE_DISPLAY}
                </a>
                <a
                  href="mailto:brendan@automagixx.com"
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  brendan@automagixx.com
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
