type PrimaryCtaProps = {
  className?: string;
  /** White button + light text for use on blue backgrounds (e.g. final CTA band). */
  variant?: "default" | "onBlue";
};

export const BOOKING_ANCHOR = "#book-call";
export const CTA_LABEL = "See Where You're Losing Jobs";
export const CTA_SUBTEXT = "Free 10-minute call — we'll show you exactly where you're losing money";
export const CTA_MICRO = "Includes a 30-day performance guarantee.";

/** @deprecated Use BOOKING_ANCHOR — CTAs scroll to the on-page booking section. */
export const BOOKING_URL = BOOKING_ANCHOR;

export default function PrimaryCta({
  className = "",
  variant = "default",
}: PrimaryCtaProps) {
  const isOnBlue = variant === "onBlue";
  return (
    <div className={`inline-flex flex-col items-center text-center ${className}`}>
      <a
        href={BOOKING_ANCHOR}
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
    </div>
  );
}
