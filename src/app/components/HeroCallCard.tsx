import { CTA_LABEL, CTA_MICRO, PRIMARY_PHONE_HREF } from "./cta";

export default function HeroCallCard() {
  return (
    <div className="relative max-w-md mx-auto lg:mx-0">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/12 to-blue-600/8 rounded-2xl blur-xl" />
      <div className="relative rounded-2xl border border-gray-200 bg-white shadow-xl p-6 sm:p-8 text-center flex flex-col items-center">
        <p className="text-blue-600 font-semibold text-[13px] sm:text-[14px] tracking-tight mb-3">
          Ready when you are
        </p>
        <a
          href={PRIMARY_PHONE_HREF}
          className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all text-[16px] sm:text-[17px] font-semibold tracking-tight w-full shadow-md hover:shadow-lg"
        >
          {CTA_LABEL}
        </a>
        <a
          href="/guarantee"
          className="text-[10px] sm:text-[11px] text-gray-500 hover:text-gray-800 tracking-tight mt-2 underline underline-offset-2"
        >
          {CTA_MICRO}
        </a>
      </div>
    </div>
  );
}
