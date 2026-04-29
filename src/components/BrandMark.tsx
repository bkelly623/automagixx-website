import { Sparkles, WandSparkles } from "lucide-react";

type BrandMarkProps = {
  size?: "sm" | "md" | "lg";
  showWordmark?: boolean;
  className?: string;
};

const sizeMap = {
  sm: { wrap: "h-10 w-10", letter: "text-xl", wand: "h-3.5 w-3.5 -top-2 -right-1", word: "text-xl" },
  md: { wrap: "h-12 w-12", letter: "text-2xl", wand: "h-4 w-4 -top-3 right-0", word: "text-2xl" },
  lg: { wrap: "h-20 w-20", letter: "text-4xl", wand: "h-6 w-6 -top-5 right-1", word: "text-4xl" },
};

export default function BrandMark({ size = "md", showWordmark = true, className = "" }: BrandMarkProps) {
  const sizes = sizeMap[size];

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <div className={`brand-orb relative ${sizes.wrap} shrink-0`} aria-hidden>
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary via-cyan-300 to-secondary shadow-[0_0_35px_hsl(174_72%_56%/0.32)]" />
        <div className="absolute inset-[3px] rounded-[0.9rem] bg-background" />
        <div className="absolute inset-[6px] rounded-xl border border-white/10 bg-gradient-to-br from-white/8 to-white/0" />
        <span
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[46%] font-display font-black leading-none text-foreground ${sizes.letter}`}
        >
          A
        </span>
        <div className={`absolute ${sizes.wand} rotate-12 text-primary drop-shadow-[0_0_10px_hsl(174_72%_56%/0.8)]`}>
          <WandSparkles className="h-full w-full" strokeWidth={2.6} />
        </div>
        <Sparkles className="absolute -bottom-1 -right-1 h-3.5 w-3.5 text-primary drop-shadow-[0_0_10px_hsl(174_72%_56%/0.8)]" />
      </div>

      {showWordmark ? (
        <span className={`font-display font-bold tracking-tight text-foreground ${sizes.word}`}>
          Automa<span className="gradient-text">gixx</span>
        </span>
      ) : null}
    </div>
  );
}
