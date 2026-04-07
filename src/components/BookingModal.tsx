"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import Link from "next/link";
import { Calendar, Sparkles } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { BookingIframe, BookingSmsDisclaimer } from "@/components/BookingEmbed";
import { PRIMARY_PHONE_DISPLAY, PRIMARY_PHONE_HREF } from "@/app/components/cta";
import {
  bookingHashIsOpen,
  clearBookingHash,
  subscribeOpenBooking,
} from "@/lib/openBooking";

export default function BookingModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const syncFromHash = () => {
      if (bookingHashIsOpen()) setOpen(true);
    };
    syncFromHash();
    const unsub = subscribeOpenBooking(() => setOpen(true));
    const onHash = () => {
      if (bookingHashIsOpen()) setOpen(true);
      else setOpen(false);
    };
    window.addEventListener("hashchange", onHash);
    return () => {
      unsub();
      window.removeEventListener("hashchange", onHash);
    };
  }, []);

  function handleOpenChange(next: boolean) {
    setOpen(next);
    if (!next) clearBookingHash();
  }

  return (
    <>
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogContent className="max-h-[min(92vh,900px)] w-[min(100vw-1.5rem,560px)] max-w-none translate-x-[-50%] translate-y-[-50%] gap-0 border border-white/10 bg-card/95 p-0 text-foreground shadow-[0_0_0_1px_hsl(210_40%_98%/0.06),0_25px_80px_-20px_hsl(0_0%_0%/0.65)] backdrop-blur-xl sm:rounded-2xl overflow-hidden flex flex-col">
          <div className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-primary/15 via-card to-secondary/10 px-5 pt-6 pb-4 sm:px-6">
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/20 blur-3xl"
              aria-hidden
            />
            <DialogHeader className="relative space-y-3 text-left">
              <div className="flex items-center gap-2 text-primary">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/15 ring-1 ring-primary/25">
                  <Sparkles className="h-4 w-4" strokeWidth={2} aria-hidden />
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Automagixx
                </span>
              </div>
              <DialogTitle className="font-display text-xl sm:text-2xl font-bold tracking-tight text-foreground pr-10">
                <span className="inline-flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary shrink-0" aria-hidden />
                  Schedule a call
                </span>
              </DialogTitle>
              <DialogDescription className="text-[14px] leading-relaxed text-muted-foreground">
                Pick a time that works. Prefer speed? Call or text{" "}
                <Link
                  href={PRIMARY_PHONE_HREF}
                  className="font-semibold text-primary underline underline-offset-2 hover:text-primary/90"
                >
                  {PRIMARY_PHONE_DISPLAY}
                </Link>{" "}
                first — we&apos;ll still honor this calendar if you&apos;d rather book online.
              </DialogDescription>
            </DialogHeader>
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto bg-muted/15 p-3 sm:p-4">
            <BookingIframe
              wrapperClassName="rounded-xl border-border/80 shadow-lg ring-1 ring-white/5"
              iframeClassName="min-h-[min(52vh,560px)] sm:min-h-[580px] md:min-h-[620px]"
            />
          </div>

          <div className="border-t border-border/60 bg-card/80 px-4 py-3 sm:px-5">
            <BookingSmsDisclaimer className="!text-left sm:!text-center text-[11px] sm:text-[12px]" />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
