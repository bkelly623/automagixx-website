import {
  CTA_LABEL,
  CTA_MICRO,
  DEMO_LABEL,
  DEMO_PHONE_HREF,
  DEMO_SUBTEXT,
  PRIMARY_PHONE_HREF,
} from "./cta";

type NavCtaPairProps = {
  className?: string;
  /** Tighter layout for chat drawer / small widths. */
  compact?: boolean;
};

export default function NavCtaPair({ className = "", compact = false }: NavCtaPairProps) {
  const gap = compact ? "gap-2" : "gap-3";
  const btnPrimary = compact
    ? "px-3 py-2 text-[11px] sm:px-4 sm:py-2.5 sm:text-[13px]"
    : "px-5 py-3 text-[14px] sm:text-[15px]";
  const btnDemo = compact
    ? "px-2.5 py-2 text-[11px] sm:px-3 sm:py-2 sm:text-[12px]"
    : "px-4 py-2.5 text-[13px] sm:text-[14px]";

  return (
    <div
      className={`flex flex-row flex-nowrap items-start justify-center sm:justify-end ${gap} ${className}`}
    >
      <div className="flex flex-col items-center sm:items-start text-center sm:text-left min-w-0 shrink">
        <a
          href={PRIMARY_PHONE_HREF}
          className={`inline-flex items-center justify-center bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-200 tracking-tight font-medium whitespace-nowrap ${btnPrimary}`}
        >
          {CTA_LABEL}
        </a>
        <a
          href="/guarantee"
          className="text-[9px] sm:text-[10px] text-gray-500 hover:text-gray-700 tracking-tight mt-1 underline underline-offset-2 max-w-[200px] leading-tight"
        >
          {CTA_MICRO}
        </a>
      </div>
      <div className="flex flex-col items-center sm:items-start text-center sm:text-left min-w-0 shrink">
        <a
          href={DEMO_PHONE_HREF}
          className={`inline-flex items-center justify-center rounded-full border-2 border-blue-200 text-blue-700 bg-white hover:bg-blue-50 transition-all duration-200 tracking-tight font-semibold whitespace-nowrap ${btnDemo}`}
        >
          {DEMO_LABEL}
        </a>
        <p className="text-[9px] sm:text-[10px] text-gray-500 tracking-tight mt-1 max-w-[9.5rem] sm:max-w-[11rem] leading-tight">
          {DEMO_SUBTEXT}
        </p>
      </div>
    </div>
  );
}
