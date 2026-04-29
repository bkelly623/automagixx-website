"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Check, MessageCircle, WandSparkles } from "lucide-react";

const wedges = [
  {
    title: "Find Your First AI Employee",
    description: "The front-door offer: identify the AI employee most likely to create ROI first.",
  },
  {
    title: "Free AI Content Sample",
    description: "A low-friction door opener: show prospects what their content rep could create.",
  },
  {
    title: "Warm Website-to-AI Demo",
    description: "For engaged prospects only: ask permission first, then build a lightweight demo from their website.",
  },
];

export default function Testimonials() {
  return (
    <section id="growth-lab" className="py-24 relative overflow-hidden scroll-mt-28">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">The growth lab</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mt-4 mb-6">
            Automagixx will use the same AI workforce it <span className="gradient-text">installs for clients</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            The point is not to talk about automation. The point is to demonstrate it publicly: lead generation,
            content, follow-up, demos, and delivery systems built with AI employees.
          </p>
          <Link
            href="/spellbook"
            className="mt-7 inline-flex items-center justify-center rounded-full border border-primary/30 bg-primary/10 px-6 py-3 text-sm font-semibold text-primary hover:bg-primary/15 transition-colors"
          >
            Open the Automagixx Spellbook
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {wedges.map((wedge, index) => (
            <motion.div
              key={wedge.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              whileHover={{ y: -5, transition: { duration: 0.25 } }}
              className="group"
            >
              <div className="glass rounded-2xl p-8 h-full relative overflow-hidden">
                <WandSparkles className="w-10 h-10 text-primary/25 absolute top-6 right-6" />
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6">
                  <span className="text-primary-foreground font-bold">{index + 1}</span>
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-3">{wedge.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{wedge.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-14 rounded-3xl border border-white/10 glass-strong p-6 sm:p-8"
        >
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-sm text-primary mb-4">
                <MessageCircle className="w-4 h-4" aria-hidden />
                Warm demo rule
              </div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-3">
                Build demos only after the prospect raises their hand.
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We can engage first with: “I put together a quick AI employee demo idea for your site — can I send it
                over?” If they say yes, then we spend the tokens/time to build the actual demo.
              </p>
            </div>
            <div className="space-y-3">
              {[
                "Reduces wasted build cost",
                "Creates curiosity before the demo exists",
                "Turns the demo into a permission-based follow-up",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-background/40 p-4">
                  <Check className="w-5 h-5 text-primary shrink-0" aria-hidden />
                  <span className="text-muted-foreground">{item}</span>
                  <ArrowRight className="w-4 h-4 text-primary/70 ml-auto" aria-hidden />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
