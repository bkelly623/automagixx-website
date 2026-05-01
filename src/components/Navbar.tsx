"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import BrandMark from "@/components/BrandMark";
import { FIRST_EMPLOYEE_PATH, PRIMARY_PHONE_DISPLAY, PRIMARY_PHONE_HREF } from "@/app/components/cta";

const navLinks = [
  { name: "First employee", href: "#first-employee" },
  { name: "AI employees", href: "#employees" },
  { name: "System", href: "#system" },
  { name: "Growth Lab", href: "/spellbook" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] glass-strong backdrop-blur-xl supports-[backdrop-filter]:bg-background/70"
    >
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2 group shrink-0" onClick={() => setIsOpen(false)}>
            <BrandMark size="sm" />
          </Link>

          <div className="hidden lg:flex items-center gap-6 xl:gap-8 relative flex-1 justify-end min-w-0">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium relative z-10 whitespace-nowrap"
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.06 * index, duration: 0.35 }}
                whileHover={{ y: -2 }}
              >
                {link.name}
              </motion.a>
            ))}

            <a
              href={PRIMARY_PHONE_HREF}
              className="relative z-10 flex items-center gap-2 font-display font-semibold text-foreground tabular-nums tracking-tight text-sm xl:text-base hover:text-primary transition-colors whitespace-nowrap shrink-0"
            >
              <Phone className="w-4 h-4 text-primary shrink-0" aria-hidden />
              {PRIMARY_PHONE_DISPLAY}
            </a>

            <motion.div
              className="relative z-10 shrink-0"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.35, duration: 0.35 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 xl:px-8 text-sm font-semibold shadow-[0_0_24px_hsl(174_72%_56%/0.25)] whitespace-nowrap"
              >
                <Link href={FIRST_EMPLOYEE_PATH}>
                  Find your AI employee
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-foreground p-2 shrink-0"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-4 pb-4 overflow-hidden border-t border-border/40 pt-4"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href={PRIMARY_PHONE_HREF}
                  className="flex items-center gap-2 font-display font-semibold text-foreground tabular-nums w-fit"
                  onClick={() => setIsOpen(false)}
                >
                  <Phone className="w-4 h-4 text-primary" aria-hidden />
                  {PRIMARY_PHONE_DISPLAY}
                </a>
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 font-semibold w-fit"
                >
                  <Link href={FIRST_EMPLOYEE_PATH} onClick={() => setIsOpen(false)}>
                    Find your AI employee
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
