"use client";

import { motion } from "framer-motion";
import { Bot, MessageSquare, Workflow, Star, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Receptionist",
    description:
      "Answers instantly, captures details, and books appointments — so missed rings stop turning into missed revenue.",
    features: ["24/7 availability", "Natural conversations", "Booking & capture", "On-brand voice"],
    gradient: "from-primary to-cyan-400",
  },
  {
    icon: MessageSquare,
    title: "Smart message response",
    description:
      "Faster replies across text, web inquiries, and DMs — without living on your phone all day.",
    features: ["Text & web", "Social / DMs", "Speed where it matters", "Consistent tone"],
    gradient: "from-secondary to-pink-500",
  },
  {
    icon: Workflow,
    title: "Follow-up & lead flow",
    description:
      "Automated nurture and reminders so quotes and inquiries don’t go cold after the first touch.",
    features: ["Follow-up sequences", "Reactivation", "Pipeline hygiene", "Less manual chasing"],
    gradient: "from-primary to-secondary",
  },
  {
    icon: Star,
    title: "Reviews & reputation",
    description:
      "Stronger Google presence and trust — with less awkward manual follow-up.",
    features: ["Review prompts", "Trust signals", "Reputation rhythm", "Local visibility"],
    gradient: "from-cyan-400 to-primary",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden scroll-mt-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">What we automate</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mt-4 mb-6">
            Built to <span className="gradient-text">capture more business</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Lead with voice AI, then layer the replies, follow-up, and reputation systems that keep
            revenue moving.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative"
            >
              <div className="glass rounded-2xl p-8 h-full relative overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.06)] hover:shadow-[0_0_60px_rgba(45,212,191,0.12)] transition-shadow duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>

                <h3 className="text-xl font-display font-bold text-foreground mb-4 flex items-center gap-2">
                  {service.title}
                  <ArrowUpRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
