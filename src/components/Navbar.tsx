"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BOOKING_ANCHOR, PRIMARY_PHONE_HREF } from "@/app/components/cta";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Why us", href: "#features" },
  { name: "Reviews", href: "#testimonials" },
  { name: "Lost revenue", href: "/missed-call-calculator" },
  { name: "Book", href: BOOKING_ANCHOR },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="absolute top-0 left-0 right-0 z-50"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2.5 shrink-0"
            onClick={() => setIsOpen(false)}
          >
            <span className="inline-flex rounded-xl bg-card/80 p-1 ring-1 ring-border">
              <Image src="/logo-robot.png" alt="Automagixx" width={40} height={40} className="h-9 w-auto" />
            </span>
            <span className="font-display font-bold text-xl text-foreground drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
              Automagixx
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8 relative">
            <div
              className="absolute inset-0 -inset-x-12 -inset-y-4 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.06) 40%, transparent 75%)",
                filter: "blur(20px)",
              }}
            />
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
              >
                <Link
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium relative z-10"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            <Button
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 font-medium"
            >
              <a href={PRIMARY_PHONE_HREF}>Call us now</a>
            </Button>
          </motion.div>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground p-2"
            aria-expanded={isOpen}
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
              className="md:hidden mt-4 pb-4 overflow-hidden"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <Button
                  asChild
                  className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 font-medium w-fit"
                >
                  <a href={PRIMARY_PHONE_HREF}>Call us now</a>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
