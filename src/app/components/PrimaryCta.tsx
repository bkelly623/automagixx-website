type PrimaryCtaProps = {
  className?: string;
  /** White button + light text for use on blue backgrounds (e.g. final CTA band). */
  variant?: "default" | "onBlue";
  /** When false, hides the guarantee link under the free-call line (e.g. compact nav). */
  showGuarantee?: boolean;
};

/** Optional calendar section anchor (not the primary CTA). */
export const BOOKING_ANCHOR = "#book-call";

export const PRIMARY_PHONE_HREF = "tel:4846737612";
export const DEMO_PHONE_HREF = "tel:4849929411";
export const DEMO_LINK_LABEL = "Try the Demo (30 seconds)";

export const CTA_LABEL = "Call Us Now";
export const CTA_SUBTEXT = "Speak directly — no forms, no waiting";
export const CTA_MICRO = "Includes a 30-day performance guarantee.";

/** @deprecated Primary conversion is phone; this is only for optional scheduling deep links. */
export const BOOKING_URL = BOOKING_ANCHOR;

export default function PrimaryCta({
  className = "",
  variant = "default",
  showGuarantee = true,
}: PrimaryCtaProps) {
  const isOnBlue = variant === "onBlue";
  return (
    <div className={`inline-flex flex-col items-center justify-center text-center ${className}`}>
      <a
        href={PRIMARY_PHONE_HREF}
        className={
          isOnBlue
            ? "inline-flex items-center justify-center bg-white text-blue-600 px-7 py-3.5 rounded-full hover:bg-gray-100 transition-all duration-200 tracking-tight w-full sm:w-auto"
            : "inline-flex items-center justify-center bg-blue-600 text-white px-7 py-3.5 rounded-full hover:bg-blue-700 transition-all duration-200 tracking-tight w-full sm:w-auto"
        }
      >
        <span className="text-[15px] font-medium tracking-tight">{CTA_LABEL}</span>
      </a>
      <p
        className={`text-[11px] tracking-tight mt-1 max-w-[280px] sm:max-w-none sm:whitespace-nowrap ${
          isOnBlue ? "text-white/90" : "text-gray-600"
        }`}
      >
        {CTA_SUBTEXT}
      </p>
      {showGuarantee ? (
        <a
          href="/guarantee"
          className={`text-[10px] tracking-tight mt-0.5 underline underline-offset-2 ${
            isOnBlue
              ? "text-white/85 hover:text-white"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          {CTA_MICRO}
        </a>
      ) : null}
      <a
        href={DEMO_PHONE_HREF}
        className={`text-[11px] tracking-tight mt-1.5 underline underline-offset-2 font-medium ${
          isOnBlue ? "text-white/80 hover:text-white" : "text-gray-500 hover:text-gray-800"
        }`}
      >
        {DEMO_LINK_LABEL}
      </a>
    </div>
  );
}
