"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import BrandMark from "@/components/BrandMark";

const footerColumns: {
  title: string;
  links: { label: string; href: string }[];
}[] = [
  {
    title: "AI Employees",
    links: [
      { label: "Lead Rescue Rep", href: "/#employees" },
      { label: "Appointment Setter", href: "/#employees" },
      { label: "Content Rep", href: "/#employees" },
      { label: "Missed Call Recovery", href: "/#employees" },
    ],
  },
  {
    title: "System",
    links: [
      { label: "First Employee Finder", href: "/#first-employee" },
      { label: "Growth Lab", href: "/spellbook" },
      { label: "Live Demo", href: "/test-chatbot" },
      { label: "Book a Call", href: "/calendar" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Automagixx", href: "/" },
      { label: "Contact", href: "/#contact" },
      { label: "Guarantee", href: "/guarantee" },
      { label: "Support", href: "mailto:brendan@automagixx.com" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
      { label: "Cookie Policy", href: "/privacy-policy" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="py-16 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/" className="mb-4 inline-flex">
                <BrandMark size="md" />
              </Link>
              <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
                Managed AI employees for small businesses. Built around useful work, measurable ROI, and practical
                automation that feels powerful without becoming a gimmick.
              </p>
            </motion.div>
          </div>

          {footerColumns.map((col, index) => (
            <motion.div
              key={col.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <h3 className="font-semibold text-foreground mb-4">{col.title}</h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground text-sm hover:text-primary transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} Automagixx. All rights reserved.</p>
          <div className="flex gap-6">
            {["X", "LinkedIn", "YouTube"].map((social) => (
              <span key={social} className="text-muted-foreground text-sm cursor-default opacity-60" aria-hidden>
                {social}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
