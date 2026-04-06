"use client";

import { motion } from "framer-motion";
import { Zap, Shield, TrendingUp, Clock, Users, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Fast to stand up",
    description:
      "Practical rollout for real businesses — not a six-month science project. We focus on capture first.",
  },
  {
    icon: Shield,
    title: "Built for trust",
    description:
      "Professional, on-brand experiences your customers recognize — not a gimmicky bot that erodes confidence.",
  },
  {
    icon: TrendingUp,
    title: "Revenue-focused",
    description:
      "Every piece is aimed at answered calls, faster replies, and follow-up that doesn’t fall through the cracks.",
  },
  {
    icon: Clock,
    title: "Always-on capture",
    description:
      "When you’re on a job, in the field, or off the clock, inbound opportunities still get handled.",
  },
  {
    icon: Users,
    title: "Human handoff",
    description:
      "When someone needs you, the path to a real person stays clear — AI supports, it doesn’t replace judgment.",
  },
  {
    icon: BarChart3,
    title: "Clear outcomes",
    description:
      "You should feel the difference in booked jobs and fewer dropped leads — not get lost in dashboards.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 relative overflow-hidden scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Why Automagixx</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mt-4 mb-6">
              For teams that can&apos;t afford to{" "}
              <span className="gradient-text">miss the moment</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Most local businesses don&apos;t need more software — they need{" "}
              <span className="text-foreground font-medium">response, capture, and follow-through</span>{" "}
              that actually runs. That&apos;s what we build.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="glass rounded-xl p-6"
              >
                <div className="text-3xl font-display font-bold gradient-text">Voice first</div>
                <div className="text-sm text-muted-foreground mt-1">Primary wedge</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="glass rounded-xl p-6"
              >
                <div className="text-3xl font-display font-bold gradient-text">Full stack</div>
                <div className="text-sm text-muted-foreground mt-1">Messages → follow-up</div>
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
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="group"
              >
                <div className="glass rounded-xl p-6 h-full hover:border-primary/30 transition-colors duration-300 border border-transparent">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
                    <feature.icon className="w-6 h-6 text-primary" />
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
