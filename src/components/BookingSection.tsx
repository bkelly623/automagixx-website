import Link from "next/link";
import Script from "next/script";
import { PRIMARY_PHONE_DISPLAY, PRIMARY_PHONE_HREF } from "@/app/components/cta";

export default function BookingSection() {
  return (
    <section
      id="book-call"
      className="scroll-mt-24 py-20 md:py-24 border-t border-border bg-muted/20"
    >
      <div className="container mx-auto px-6 max-w-[880px]">
        <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground text-center tracking-tight">
          Prefer to pick a time?
        </h2>
        <p className="text-center text-muted-foreground text-[15px] md:text-base max-w-lg mx-auto mt-4 leading-relaxed">
          Scheduling is optional.
          <br />
          For the fastest path, call or text{" "}
          <Link
            href={PRIMARY_PHONE_HREF}
            className="text-primary font-semibold underline underline-offset-2 hover:text-primary/90"
          >
            {PRIMARY_PHONE_DISPLAY}
          </Link>{" "}
          first.
          <br />
          If you&apos;d rather book a time, use the calendar below.
        </p>
        <div className="mt-10 rounded-2xl border border-border bg-card overflow-hidden shadow-[0_12px_40px_-24px_rgba(0,0,0,0.4)]">
          <iframe
            src="https://api.leadconnectorhq.com/widget/booking/deaNfs7Dq6XtD6FzYMR8"
            id="deaNfs7Dq6XtD6FzYMR8_1775089987086"
            className="block w-full min-h-[720px] md:min-h-[820px] lg:min-h-[900px] border-0 overflow-hidden"
            style={{ width: "100%", border: "none", overflow: "hidden" }}
            scrolling="no"
            title="Schedule time with Automagixx"
          />
        </div>
        <p className="text-[12px] text-muted-foreground text-center mt-6 tracking-tight max-w-2xl mx-auto leading-relaxed">
          By submitting this form, you agree to receive SMS messages from Automagixx related to
          your inquiry, including appointment reminders and service updates. Message frequency
          varies. Message &amp; data rates may apply. Reply STOP to opt out or HELP for help. See{" "}
          <Link href="/privacy-policy" className="underline underline-offset-2 hover:text-foreground">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link href="/terms-of-service" className="underline underline-offset-2 hover:text-foreground">
            Terms of Service
          </Link>
          .
        </p>
      </div>
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
    </section>
  );
}
