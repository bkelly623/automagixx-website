type PrimaryCtaProps = {
  className?: string;
};

export const BOOKING_URL = "https://calendly.com/automagixx/30min";
export const CTA_LABEL = "See Where You're Losing Jobs";
export const CTA_SUBTEXT = "Free 10-minute call — no commitment";

export default function PrimaryCta({ className = "" }: PrimaryCtaProps) {
  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex flex-col items-center justify-center bg-blue-600 text-white px-7 py-3.5 rounded-full hover:bg-blue-700 transition-all duration-200 tracking-tight w-full sm:w-auto text-center ${className}`}
    >
      <span className="text-[15px] font-medium tracking-tight">{CTA_LABEL}</span>
      <span className="text-[11px] text-blue-50/90 tracking-tight mt-0.5">
        {CTA_SUBTEXT}
      </span>
    </a>
  );
}
