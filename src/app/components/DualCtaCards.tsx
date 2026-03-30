import {
  CTA_LABEL,
  CTA_MICRO,
  DEMO_LABEL,
  DEMO_PHONE_HREF,
  DEMO_SUBTEXT,
  PRIMARY_PHONE_HREF,
} from "./cta";

type DualCtaCardsProps = {
  className?: string;
  variant?: "default" | "onBlue";
};

export default function DualCtaCards({
  className = "",
  variant = "default",
}: DualCtaCardsProps) {
  const onBlue = variant === "onBlue";

  const cardBase = onBlue
    ? "rounded-2xl border border-white/25 bg-white/10 backdrop-blur-md shadow-lg p-6 sm:p-8 text-center flex flex-col items-center transition hover:bg-white/15"
    : "rounded-2xl border border-gray-200 bg-white shadow-lg p-6 sm:p-8 text-center flex flex-col items-center transition hover:shadow-xl hover:-translate-y-0.5";

  const primaryBtn = onBlue
    ? "inline-flex items-center justify-center bg-white text-blue-600 px-7 py-3.5 rounded-full hover:bg-gray-100 transition-all text-[15px] font-semibold tracking-tight w-full"
    : "inline-flex items-center justify-center bg-blue-600 text-white px-7 py-3.5 rounded-full hover:bg-blue-700 transition-all text-[15px] font-semibold tracking-tight w-full";

  const demoBtn = onBlue
    ? "inline-flex items-center justify-center border-2 border-white/80 text-white px-5 py-2.5 rounded-full hover:bg-white/10 transition-all text-[14px] font-semibold tracking-tight w-full"
    : "inline-flex items-center justify-center border-2 border-blue-200 text-blue-700 bg-white px-5 py-2.5 rounded-full hover:bg-blue-50 transition-all text-[14px] font-semibold tracking-tight w-full";

  const microCls = onBlue
    ? "text-[10px] text-white/85 hover:text-white tracking-tight mt-1 underline underline-offset-2"
    : "text-[10px] text-gray-500 hover:text-gray-700 tracking-tight mt-1 underline underline-offset-2";

  const demoSubCls = onBlue ? "text-[11px] text-white/80 tracking-tight mt-1" : "text-[11px] text-gray-500 tracking-tight mt-1";

  const phoneDemoCls = onBlue ? "text-[14px] font-semibold text-white hover:text-white/90 underline underline-offset-2 mt-3" : "text-[14px] font-semibold text-blue-700 hover:text-blue-800 underline underline-offset-2 mt-3";

  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 w-full max-w-3xl mx-auto ${className}`}
    >
      <div className={cardBase}>
        <p className={`text-[13px] font-semibold tracking-tight mb-3 ${onBlue ? "text-white" : "text-blue-600"}`}>
          Talk to us
        </p>
        <a href={PRIMARY_PHONE_HREF} className={primaryBtn}>
          {CTA_LABEL}
        </a>
        <a href="/guarantee" className={microCls}>
          {CTA_MICRO}
        </a>
      </div>
      <div className={cardBase}>
        <p className={`text-[13px] font-semibold tracking-tight mb-3 ${onBlue ? "text-white" : "text-blue-600"}`}>
          Try it live
        </p>
        <a href={DEMO_PHONE_HREF} className={demoBtn}>
          {DEMO_LABEL}
        </a>
        <p className={demoSubCls}>{DEMO_SUBTEXT}</p>
        <a href={DEMO_PHONE_HREF} className={phoneDemoCls}>
          484-992-9411
        </a>
      </div>
    </div>
  );
}
