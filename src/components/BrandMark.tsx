import { Sparkles, WandSparkles } from "lucide-react";

type BrandMarkProps = {
  size?: "sm" | "md" | "lg";
  showWordmark?: boolean;
  className?: string;
};

const sizeMap = {
  sm: {
    wrap: "h-10 w-10",
    hat: "h-3 w-7 -top-1.5",
    wand: "h-3.5 w-3.5 -top-3 -right-1",
    eyes: "h-2 w-2 gap-1.5",
    mouth: "h-1 w-5 bottom-2",
    sparkle: "h-3.5 w-3.5",
    word: "text-xl",
  },
  md: {
    wrap: "h-12 w-12",
    hat: "h-4 w-8 -top-2",
    wand: "h-4 w-4 -top-4 right-0",
    eyes: "h-2.5 w-2.5 gap-2",
    mouth: "h-1 w-6 bottom-2.5",
    sparkle: "h-4 w-4",
    word: "text-2xl",
  },
  lg: {
    wrap: "h-20 w-20",
    hat: "h-7 w-14 -top-4",
    wand: "h-6 w-6 -top-6 right-1",
    eyes: "h-4 w-4 gap-3",
    mouth: "h-1.5 w-9 bottom-4",
    sparkle: "h-6 w-6",
    word: "text-4xl",
  },
};

export default function BrandMark({ size = "md", showWordmark = true, className = "" }: BrandMarkProps) {
  const sizes = sizeMap[size];

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <div className={`brand-orb relative ${sizes.wrap} shrink-0`} aria-hidden>
        <div
          className={`absolute left-1/2 ${sizes.hat} -translate-x-1/2 rounded-t-full border border-primary/70 bg-background shadow-[0_0_18px_hsl(174_72%_56%/0.28)]`}
        />
        <div className={`absolute ${sizes.wand} rotate-12 text-primary drop-shadow-[0_0_10px_hsl(174_72%_56%/0.7)]`}>
          <WandSparkles className="h-full w-full" strokeWidth={2.4} />
        </div>
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary via-cyan-300 to-secondary shadow-[0_0_35px_hsl(174_72%_56%/0.32)]" />
        <div className="absolute inset-[3px] rounded-[0.9rem] bg-background" />
        <div className={`absolute left-1/2 top-[54%] flex -translate-x-1/2 -translate-y-1/2 items-center ${sizes.eyes}`}>
          <span className="h-full w-full rounded-full bg-primary shadow-[0_0_10px_hsl(174_72%_56%/0.95)]" />
          <span className="h-full w-full rounded-full bg-secondary shadow-[0_0_10px_hsl(262_83%_68%/0.95)]" />
        </div>
        <div className={`absolute left-1/2 ${sizes.mouth} -translate-x-1/2 rounded-full bg-white/35`} />
        <Sparkles className={`absolute -bottom-1 -right-1 ${sizes.sparkle} text-primary drop-shadow-[0_0_10px_hsl(174_72%_56%/0.8)]`} />
      </div>

      {showWordmark ? (
        <span className={`font-display font-bold tracking-tight text-foreground ${sizes.word}`}>
          Automa<span className="gradient-text">gixx</span>
        </span>
      ) : null}
    </div>
  );
}
