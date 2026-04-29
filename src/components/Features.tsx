"use client";

import { motion } from "framer-motion";
import { BarChart3, Brain, ClipboardCheck, Handshake, Route, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Route,
    title: "Outcome-first design",
    description: "Every employee starts with a revenue or time-saving job, not a shiny tool demo.",
  },
  {
    icon: Brain,
    title: "Managed memory",
    description: "Your AI employee improves from scripts, FAQs, conversations, and workflow feedback.",
  },
  {
    icon: Handshake,
    title: "Human approval",
    description: "Sensitive actions can route to you first, so automation scales without reckless autonomy.",
  },
  {
    icon: ClipboardCheck,
    title: "Pilot before platform",
    description: "We prove one useful employee before expanding into a full AI workforce.",
  },
  {
    icon: ShieldCheck,
    title: "Business-safe deployment",
    description: "Clear handoffs, logs, and guardrails keep the system useful instead of chaotic.",
  },
  {
    icon: BarChart3,
    title: "Measured by ROI",
    description: "The scoreboard is leads captured, calls booked, hours saved, and revenue recovered.",
  },
];

export default function Features() {
  return (
    <section id="system" className="py-24 relative overflow-hidden scroll-mt-28">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">How Automagixx works</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mt-4 mb-6">
              A self-selling AI company, built to prove the <span className="gradient-text">magic is real</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Automagixx is not just selling agents. The company is being built around its own AI workforce: agents that
              research markets, create content, prepare outreach, follow up, support prospects, and help deliver client
              systems.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="glass rounded-xl p-6"
              >
                <div className="text-3xl font-display font-bold gradient-text">1</div>
                <div className="text-sm text-muted-foreground mt-1">profitable employee first</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="glass rounded-xl p-6"
              >
                <div className="text-3xl font-display font-bold gradient-text">24/7</div>
                <div className="text-sm text-muted-foreground mt-1">follow-up, capture, and support</div>
              </motion.div>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="group"
              >
                <div className="glass rounded-xl p-6 h-full hover:border-primary/30 transition-colors duration-300">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
                    <feature.icon className="w-6 h-6 text-primary" aria-hidden />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
