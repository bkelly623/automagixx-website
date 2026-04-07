import Link from "next/link";
import { cn } from "@/lib/utils";

const IFRAME_SRC = "https://api.leadconnectorhq.com/widget/booking/deaNfs7Dq6XtD6FzYMR8";
const IFRAME_ID = "deaNfs7Dq6XtD6FzYMR8_1775089987086";

type BookingEmbedProps = {
  iframeClassName?: string;
  wrapperClassName?: string;
};

export function BookingIframe({ iframeClassName, wrapperClassName }: BookingEmbedProps) {
  return (
    <div className={cn("rounded-2xl border border-border bg-card overflow-hidden shadow-[0_12px_40px_-24px_rgba(0,0,0,0.4)]", wrapperClassName)}>
      <iframe
        src={IFRAME_SRC}
        id={IFRAME_ID}
        className={cn(
          "block w-full min-h-[720px] md:min-h-[820px] lg:min-h-[900px] border-0 overflow-hidden",
          iframeClassName,
        )}
        style={{ width: "100%", border: "none", overflow: "hidden" }}
        scrolling="no"
        title="Schedule time with Automagixx"
      />
    </div>
  );
}

export function BookingSmsDisclaimer({ className }: { className?: string }) {
  return (
    <p
      className={cn(
        "text-[12px] text-muted-foreground text-center tracking-tight max-w-2xl mx-auto leading-relaxed",
        className,
      )}
    >
      By submitting this form, you agree to receive SMS messages from Automagixx related to your inquiry,
      including appointment reminders and service updates. Message frequency varies. Message &amp; data rates
      may apply. Reply STOP to opt out or HELP for help. See{" "}
      <Link href="/privacy-policy" className="underline underline-offset-2 hover:text-foreground">
        Privacy Policy
      </Link>{" "}
      and{" "}
      <Link href="/terms-of-service" className="underline underline-offset-2 hover:text-foreground">
        Terms of Service
      </Link>
      .
    </p>
  );
}
