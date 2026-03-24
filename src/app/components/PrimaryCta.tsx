type PrimaryCtaProps = {
  className?: string;
};

export const BOOKING_URL = "https://calendly.com/automagixx/30min";
export const CTA_LABEL = "See Where You're Losing Jobs";
export const CTA_SUBTEXT = "Free 10-minute call — we’ll show you exactly where you're losing money";
export const CTA_MICRO = "Includes a 30-day performance guarantee.";

export default function PrimaryCta({ className = "" }: PrimaryCtaProps) {
  return (
    <div className={`inline-flex flex-col items-center text-center ${className}`}>
      <a
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center bg-blue-600 text-white px-7 py-3.5 rounded-full hover:bg-blue-700 transition-all duration-200 tracking-tight w-full sm:w-auto"
      >
        <span className="text-[15px] font-medium tracking-tight">{CTA_LABEL}</span>
      </a>
      <p className="text-[11px] text-gray-600 tracking-tight mt-1 whitespace-nowrap">
        {CTA_SUBTEXT}
      </p>
      <a href="/guarantee" className="text-[10px] text-gray-500 tracking-tight mt-0.5 underline underline-offset-2 hover:text-gray-700">
        {CTA_MICRO}
      </a>
    </div>
  );
}
