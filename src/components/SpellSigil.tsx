import { Sparkles, WandSparkles } from "lucide-react";

type SpellSigilProps = {
  label: string;
  title: string;
  description: string;
};

export default function SpellSigil({ label, title, description }: SpellSigilProps) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 glass p-6">
      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full border border-primary/20" />
      <div className="absolute -right-3 top-8 h-16 w-16 rounded-full border border-secondary/25" />
      <div className="relative z-10">
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/25 to-secondary/25 ring-1 ring-white/10">
          <WandSparkles className="h-6 w-6 text-primary" aria-hidden />
        </div>
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary">{label}</p>
        <h3 className="mb-3 font-display text-xl font-bold text-foreground">{title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
      </div>
      <Sparkles className="absolute bottom-5 right-5 h-5 w-5 text-primary/50" aria-hidden />
    </div>
  );
}
