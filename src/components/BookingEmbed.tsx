import Link from "next/link";
import { cn } from "@/lib/utils";

const IFRAME_SRC = "https://api.leadconnectorhq.com/widget/booking/deaNfs7Dq6XtD6FzYMR8";
const IFRAME_ID = "deaNfs7Dq6XtD6FzYMR8_1775089987086";

type BookingEmbedProps = {
  iframeClassName?: string;
  wrapperClassName?: string;
  /**
   * Fill parent flex area (booking modal): iframe stretches to remaining viewport height.
   */
  variant?: "default" | "modal";
};

export function BookingIframe({
  iframeClassName,
  wrapperClassName,
  variant = "default",
}: BookingEmbedProps) {
  const isModal = variant === "modal";

  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-card overflow-hidden shadow-[0_12px_40px_-24px_rgba(0,0,0,0.4)]",
        isModal && "relative h-full min-h-0 w-full flex-1",
        wrapperClassName,
      )}
    >
      <iframe
        src={IFRAME_SRC}
        id={IFRAME_ID}
        className={cn(
          isModal
            ? "absolute inset-0 block h-full w-full min-h-0 border-0"
            : "block w-full min-h-[720px] md:min-h-[820px] lg:min-h-[900px] border-0 overflow-hidden",
          iframeClassName,
        )}
        style={
          isModal
            ? { width: "100%", height: "100%", border: "none" }
            : { width: "100%", border: "none", overflow: "hidden" }
        }
        // LeadConnector calendar + post-slot form is taller than one viewport; "no" clips content.
        scrolling={isModal ? "yes" : "no"}
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
