"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const BG = "#0a0a0a";
const GREEN = "#00ff88";
/** Competitor line — spec accent for contrast on dark UI */
const ACCENT_BLUE = "#3b82f6";

const MIN_AVG = 50;
const MAX_AVG = 10000;

type BusinessId =
  | "roofing"
  | "hvac"
  | "plumbing"
  | "salon"
  | "dental"
  | "other";

type PeriodId = "daily" | "weekly" | "monthly" | "annually";

const PERIODS: { id: PeriodId; label: string; days: number }[] = [
  { id: "daily", label: "Daily", days: 1 },
  { id: "weekly", label: "Weekly", days: 7 },
  { id: "monthly", label: "Monthly", days: 30 },
  { id: "annually", label: "Annually", days: 365 },
];

const BUSINESSES: Record<
  BusinessId,
  { label: string; missed: number; conversion: number; avg: number }
> = {
  roofing: { label: "Roofing", missed: 10, conversion: 35, avg: 9000 },
  hvac: { label: "HVAC", missed: 12, conversion: 40, avg: 1800 },
  plumbing: { label: "Plumbing", missed: 10, conversion: 45, avg: 700 },
  salon: { label: "Salon", missed: 12, conversion: 55, avg: 150 },
  dental: { label: "Dental", missed: 8, conversion: 55, avg: 700 },
  other: { label: "Other", missed: 8, conversion: 40, avg: 800 },
};

function avgToLinear(avg: number): number {
  const clamped = Math.min(MAX_AVG, Math.max(MIN_AVG, avg));
  return (100 * Math.log(clamped / MIN_AVG)) / Math.log(MAX_AVG / MIN_AVG);
}

function linearToAvg(linear: number): number {
  const t = Math.min(100, Math.max(0, linear)) / 100;
  return Math.round(MIN_AVG * Math.pow(MAX_AVG / MIN_AVG, t));
}

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

function formatMoney(n: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(Math.round(n));
}

function useAnimatedNumber(target: number, durationMs: number): number {
  const [value, setValue] = useState(target);
  const displayRef = useRef(target);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const from = displayRef.current;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(1, elapsed / durationMs);
      const e = easeOutCubic(t);
      const next = from + (target - from) * e;
      displayRef.current = next;
      setValue(next);
      if (t < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, [target, durationMs]);

  return value;
}

export default function MissedCallCalculator() {
  const [business, setBusiness] = useState<BusinessId>("roofing");
  const [missedCalls, setMissedCalls] = useState(BUSINESSES.roofing.missed);
  const [conversion, setConversion] = useState(BUSINESSES.roofing.conversion);
  const [avgValue, setAvgValue] = useState(BUSINESSES.roofing.avg);
  const [period, setPeriod] = useState<PeriodId>("monthly");

  const presetRafRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (presetRafRef.current != null) {
        cancelAnimationFrame(presetRafRef.current);
      }
    };
  }, []);

  const selectBusiness = (id: BusinessId) => {
    setBusiness(id);
    const p = BUSINESSES[id];

    if (presetRafRef.current != null) {
      cancelAnimationFrame(presetRafRef.current);
      presetRafRef.current = null;
    }

    const startMissed = missedCalls;
    const startConv = conversion;
    const startAvg = avgValue;
    const duration = 550;
    const t0 = performance.now();

    const step = (now: number) => {
      const t = Math.min(1, (now - t0) / duration);
      const e = easeOutCubic(t);
      setMissedCalls(Math.round(startMissed + (p.missed - startMissed) * e));
      setConversion(Math.round(startConv + (p.conversion - startConv) * e));
      setAvgValue(Math.round(startAvg + (p.avg - startAvg) * e));
      if (t < 1) {
        presetRafRef.current = requestAnimationFrame(step);
      } else {
        setMissedCalls(p.missed);
        setConversion(p.conversion);
        setAvgValue(p.avg);
        presetRafRef.current = null;
      }
    };
    presetRafRef.current = requestAnimationFrame(step);
  };

  const periodDays = useMemo(
    () => PERIODS.find((p) => p.id === period)?.days ?? 30,
    [period],
  );

  const dailyLoss = missedCalls * (conversion / 100) * avgValue;
  const totalLost = dailyLoss * periodDays;
  const xCount = Math.round(missedCalls * (conversion / 100) * periodDays);

  const animatedTotal = useAnimatedNumber(totalLost, 600);
  const avgLinear = avgToLinear(avgValue);

  const pillBase =
    "rounded-full px-4 py-2.5 text-[13px] font-semibold whitespace-nowrap shrink-0 border transition-all duration-200 ease-out active:scale-[0.98]";
  const pillInactive =
    "border-white/14 bg-[#111]/90 text-white/95 hover:border-white/24 hover:bg-[#161616]";
  const pillActive = "border-transparent bg-[#00ff88] text-[#0a0a0a] shadow-[0_0_20px_rgba(0,255,136,0.25)]";

  const sliderLabel = "text-[10px] font-semibold uppercase tracking-[0.12em] text-white/48";
  const sliderValue =
    "text-[13px] font-bold tabular-nums tracking-tight text-[#8cffb3]";

  return (
    <div
      className="min-h-screen w-full font-sans text-white antialiased"
      style={{ backgroundColor: BG }}
    >
      <div className="mx-auto flex min-h-screen max-w-[420px] flex-col items-center px-4 py-5 sm:py-7">
        <h1 className="mb-6 text-center text-lg font-semibold leading-snug tracking-tight text-white/90 sm:text-[1.125rem]">
          How Much Revenue Are You Losing?
        </h1>

        <div className="flex w-full flex-col items-center gap-4">
          <div className="flex w-full flex-wrap justify-center gap-1.5">
            {(Object.keys(BUSINESSES) as BusinessId[]).map((id) => (
              <button
                key={id}
                type="button"
                onClick={() => selectBusiness(id)}
                className={`${pillBase} ${business === id ? pillActive : pillInactive}`}
              >
                {BUSINESSES[id].label}
              </button>
            ))}
          </div>

          <div className="w-full space-y-3">
            <div className="space-y-1">
              <div className="flex items-baseline justify-between gap-3">
                <label htmlFor="missed-calls" className={sliderLabel}>
                  Missed / day
                </label>
                <span className={sliderValue}>{missedCalls}</span>
              </div>
              <input
                id="missed-calls"
                type="range"
                min={1}
                max={50}
                value={missedCalls}
                onChange={(e) => setMissedCalls(Number(e.target.value))}
                className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-white/10 accent-[#00ff88] transition-[opacity,transform] duration-150 [&::-moz-range-thumb]:h-3.5 [&::-moz-range-thumb]:w-3.5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-[#00ff88] [&::-webkit-slider-thumb]:h-3.5 [&::-webkit-slider-thumb]:w-3.5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#00ff88]"
                style={{ accentColor: GREEN }}
              />
            </div>

            <div className="space-y-1">
              <div className="flex items-baseline justify-between gap-3">
                <label htmlFor="conversion" className={sliderLabel}>
                  Close rate
                </label>
                <span className={sliderValue}>{conversion}%</span>
              </div>
              <input
                id="conversion"
                type="range"
                min={5}
                max={80}
                value={conversion}
                onChange={(e) => setConversion(Number(e.target.value))}
                className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-white/10 accent-[#00ff88] transition-[opacity,transform] duration-150 [&::-moz-range-thumb]:h-3.5 [&::-moz-range-thumb]:w-3.5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-[#00ff88] [&::-webkit-slider-thumb]:h-3.5 [&::-webkit-slider-thumb]:w-3.5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#00ff88]"
                style={{ accentColor: GREEN }}
              />
            </div>

            <div className="space-y-1">
              <div className="flex items-baseline justify-between gap-3">
                <label htmlFor="avg-value" className={sliderLabel}>
                  Avg job value
                </label>
                <span className={sliderValue}>{formatMoney(avgValue)}</span>
              </div>
              <input
                id="avg-value"
                type="range"
                min={0}
                max={100}
                step={0.25}
                value={avgLinear}
                onChange={(e) =>
                  setAvgValue(linearToAvg(Number(e.target.value)))
                }
                className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-white/10 accent-[#00ff88] transition-[opacity,transform] duration-150 [&::-moz-range-thumb]:h-3.5 [&::-moz-range-thumb]:w-3.5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-[#00ff88] [&::-webkit-slider-thumb]:h-3.5 [&::-webkit-slider-thumb]:w-3.5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#00ff88]"
                style={{ accentColor: GREEN }}
              />
            </div>
          </div>

          <div className="flex w-full flex-wrap justify-center gap-1.5 pt-0.5">
            {PERIODS.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setPeriod(p.id)}
                className={`${pillBase} ${period === p.id ? pillActive : pillInactive}`}
              >
                {p.label}
              </button>
            ))}
          </div>

          <section className="w-full pt-2 text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/38">
              You&apos;re Losing
            </p>
            <p
              className="missed-calc-result-pulse mt-1.5 text-[3rem] font-extrabold leading-[1.02] tracking-[-0.02em] text-[#00ff88] sm:text-[4.25rem] drop-shadow-[0_0_25px_rgba(0,255,136,0.35)]"
            >
              {formatMoney(animatedTotal)}
            </p>
            <p className="mt-2 max-w-[28ch] text-[13px] font-semibold leading-snug text-white/80 mx-auto">
              That&apos;s {xCount} customers you never even spoke to
            </p>
            <p
              className="mt-1 max-w-[30ch] text-[12px] font-semibold leading-snug mx-auto"
              style={{ color: ACCENT_BLUE }}
            >
              That&apos;s {xCount} jobs your competitors are taking from you
            </p>
          </section>

          <p
            className="mt-auto pt-8 text-center text-[11px] font-semibold tracking-tight"
            style={{ color: "rgba(0, 255, 136, 0.6)" }}
          >
            Automagixx
          </p>
        </div>
      </div>
    </div>
  );
}
