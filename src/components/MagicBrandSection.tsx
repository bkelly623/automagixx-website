"use client";

import { motion } from "framer-motion";
import BrandMark from "@/components/BrandMark";
import SpellSigil from "@/components/SpellSigil";

const spells = [
  {
    label: "Spell 01",
    title: "The Scout",
    description: "Finds markets, prospects, pain signals, and angles before a human opens a spreadsheet.",
  },
  {
    label: "Spell 02",
    title: "The Scribe",
    description: "Turns messy work into posts, reports, playbooks, follow-ups, and reusable operating memory.",
  },
  {
    label: "Spell 03",
    title: "The Closer's Familiar",
    description: "Prepares calls, follows up, answers questions, and keeps warm leads from going cold.",
  },
];

export default function MagicBrandSection() {
  return (
    <section className="relative overflow-hidden border-y border-border/60 bg-gradient-to-b from-background via-card/30 to-background py-20 md:py-28">
      <div className="absolute inset-0 magic-grid opacity-40" />
      <div className="absolute left-[8%] top-1/4 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-1/4 right-[10%] h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
          >
            <BrandMark size="lg" className="mb-7" />
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Brand engine</span>
            <h2 className="mt-4 mb-5 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              The magic is not decoration. It is the <span className="gradient-text">distribution system</span>.
            </h2>
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
              Automagixx uses a robot-wizard world to make AI employees memorable: spells are workflows, apprentices are
              first hires, the Spellbook documents experiments, and every demo becomes a little magic trick with a
              business outcome.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {spells.map((spell, index) => (
              <motion.div
                key={spell.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <SpellSigil {...spell} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
