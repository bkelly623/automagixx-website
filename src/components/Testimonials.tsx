"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Home services owner",
    role: "HVAC / plumbing (Northeast)",
    content:
      "We were bleeding calls after hours. Now every ring gets answered and booked — it paid for itself in the first month.",
    rating: 5,
    image: "HS",
  },
  {
    name: "Salon director",
    role: "Beauty / appointments",
    content:
      "Clients hate waiting for a text back. Responses are instant and the tone matches our brand. Front desk stress dropped hard.",
    rating: 5,
    image: "SD",
  },
  {
    name: "Local contractor",
    role: "Roofing / field team",
    content:
      "I’m on roofs all day. Automagixx catches what I’d miss and keeps follow-up from dying — that’s money I was leaving on the table.",
    rating: 5,
    image: "LC",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden scroll-mt-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Proof</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mt-4 mb-6">
            Built for <span className="gradient-text">real operators</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Composite feedback from the kind of local businesses Automagixx is built for — trades,
            beauty, and high-touch service.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="glass rounded-2xl p-8 h-full relative">
                <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />

                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-muted-foreground mb-8 leading-relaxed">&ldquo;{testimonial.content}&rdquo;</p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <span className="text-primary-foreground font-semibold text-sm">{testimonial.image}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
