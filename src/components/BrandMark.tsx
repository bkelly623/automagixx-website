import { Sparkles, WandSparkles } from "lucide-react";

type BrandMarkProps = {
  size?: "sm" | "md" | "lg";
  showWordmark?: boolean;
  className?: string;
};

const sizeMap = {
  sm: { wrap: "h-9 w-9", face: "text-[16px]", word: "text-xl" },
  md: { wrap: "h-11 w-11", face: "text-[19px]", word: "text-2xl" },
  lg: { wrap: "h-20 w-20", face: "text-[34px]", word: "text-4xl" },
};

export default function BrandMark({ size = "md", showWordmark = true, className = "" }: BrandMarkProps) {
  const sizes = sizeMap[size];

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <div className={`brand-orb relative ${sizes.wrap} shrink-0`} aria-hidden>
        <div className="absolute -top-2 left-1/2 h-5 w-8 -translate-x-1/2 rounded-t-full border border-primary/50 bg-background/80 shadow-[0_0_18px_hsl(174_72%_56%/0.25)]" />
        <div className="absolute -top-4 right-0 rotate-12 text-primary drop-shadow-[0_0_10px_hsl(174_72%_56%/0.7)]">
          <WandSparkles className="h-4 w-4" strokeWidth={2.2} />
        </div>
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/90 via-cyan-300 to-secondary shadow-[0_0_35px_hsl(174_72%_56%/0.32)]" />
        <div className="absolute inset-[3px] rounded-[0.9rem] bg-background/92" />
        <div className="absolute left-1/2 top-[55%] flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_10px_hsl(174_72%_56%/0.9)]" />
          <span className="h-2 w-2 rounded-full bg-secondary shadow-[0_0_10px_hsl(262_83%_68%/0.9)]" />
        </div>
        <div className="absolute bottom-2 left-1/2 h-1 w-5 -translate-x-1/2 rounded-full bg-white/25" />
        <Sparkles className="absolute -bottom-1 -right-1 h-4 w-4 text-primary drop-shadow-[0_0_10px_hsl(174_72%_56%/0.8)]" />
      </div>

      {showWordmark ? (
        <span className={`font-display font-bold tracking-tight text-foreground ${sizes.word}`}>
          Automa<span className="gradient-text">gixx</span>
        </span>
      ) : null}
    </div>
  );
}
