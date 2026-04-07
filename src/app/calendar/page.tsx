import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { Calendar } from "lucide-react";
import { BookingIframe, BookingSmsDisclaimer } from "@/components/BookingEmbed";
import { PRIMARY_PHONE_DISPLAY, PRIMARY_PHONE_HREF } from "@/app/components/cta";

export const metadata: Metadata = {
  title: "Schedule a Call | Automagixx",
  description: "Book a time with Automagixx — AI receptionists and growth systems for local businesses.",
};

export default function CalendarPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
      <div className="border-b border-border/60 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            ← Back to home
          </Link>
          <a
            href={PRIMARY_PHONE_HREF}
            className="text-sm font-display font-semibold tabular-nums text-foreground hover:text-primary transition-colors"
          >
            {PRIMARY_PHONE_DISPLAY}
          </a>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 max-w-[880px]">
        <div className="flex items-center gap-3 mb-3 text-primary">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 ring-1 ring-primary/25">
            <Calendar className="h-5 w-5" strokeWidth={2} aria-hidden />
          </span>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Scheduling</p>
        </div>
        <h1 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">Schedule a call</h1>
        <p className="text-muted-foreground text-[15px] md:text-base max-w-2xl leading-relaxed mb-10">
          Prefer the fastest path? Call or text{" "}
          <a href={PRIMARY_PHONE_HREF} className="text-primary font-semibold underline underline-offset-2">
            {PRIMARY_PHONE_DISPLAY}
          </a>{" "}
          first. Otherwise, grab a slot below.
        </p>

        <BookingIframe />

        <div className="mt-8">
          <BookingSmsDisclaimer />
        </div>
      </div>
    </main>
  );
}
