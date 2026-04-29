"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CalendarCheck, Megaphone, MessageSquareReply, PhoneCall, Star, WandSparkles } from "lucide-react";

const employees = [
  {
    icon: MessageSquareReply,
    title: "Lead Rescue Rep",
    description: "Revives missed, stale, and unconverted leads with fast follow-up and booked-next-step prompts.",
    features: ["Missed lead follow-up", "Text/email sequences", "Lead qualification", "Human handoff"],
    gradient: "from-primary to-cyan-400",
  },
  {
    icon: CalendarCheck,
    title: "Appointment Setter",
    description: "Qualifies prospects, answers common questions, and books calls, estimates, or consultations.",
    features: ["Calendar booking", "Pre-call questions", "Reminder follow-ups", "No-show reduction"],
    gradient: "from-secondary to-pink-500",
  },
  {
    icon: Megaphone,
    title: "Content Rep",
    description: "Turns your offer, proof, and customer problems into social posts, promos, and campaign assets.",
    features: ["Post ideas", "Short scripts", "Offer angles", "AI video samples"],
    gradient: "from-primary to-secondary",
  },
  {
    icon: PhoneCall,
    title: "Missed Call Recovery Rep",
    description: "Captures demand when your team is busy, closed, or unable to answer every call in real time.",
    features: ["24/7 responses", "Urgent routing", "Lead capture", "Call summaries"],
    gradient: "from-cyan-400 to-primary",
  },
  {
    icon: Star,
    title: "Review & Reputation Rep",
    description: "Requests reviews from happy customers and triages negative feedback before it becomes public damage.",
    features: ["Review requests", "Feedback routing", "Response drafts", "Reputation tracking"],
    gradient: "from-amber-300 to-secondary",
  },
  {
    icon: WandSparkles,
    title: "Custom AI Employee",
    description: "If the highest-ROI job is unique to your business, we design the employee around your workflow.",
    features: ["Workflow mapping", "Tool integration", "Custom memory", "Managed improvement"],
    gradient: "from-violet-400 to-primary",
  },
];

export default function Services() {
  return (
    <section id="employees" className="py-24 relative overflow-hidden scroll-mt-28">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">The AI employee menu</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mt-4 mb-6">
            Start with the employee most likely to <span className="gradient-text">make you money</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            We do not try to sell you as much automation as possible. We help you pick one managed AI employee tied to a business outcome, prove it, then expand if the numbers justify it.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {employees.map((employee, index) => (
            <motion.div
              key={employee.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className="group relative"
            >
              <div className="glass rounded-2xl p-7 h-full relative overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.08)] hover:shadow-[0_0_60px_rgba(255,255,255,0.14)] transition-shadow duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${employee.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <employee.icon className="w-7 h-7 text-primary-foreground" aria-hidden />
                </div>

                <h3 className="text-xl font-display font-bold text-foreground mb-3 flex items-center gap-2">
                  {employee.title}
                  <ArrowUpRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{employee.description}</p>

                <ul className="space-y-2">
                  {employee.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${employee.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
