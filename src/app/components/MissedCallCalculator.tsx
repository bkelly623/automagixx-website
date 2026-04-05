"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const BG = "#0a0a0a";
const GREEN = "#00ff88";
const BLUE = "#3b82f6";

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
  roofing: { label: "Roofing", missed: 8, conversion: 25, avg: 8000 },
  hvac: { label: "HVAC", missed: 6, conversion: 30, avg: 1200 },
  plumbing: { label: "Plumbing", missed: 7, conversion: 35, avg: 850 },
  salon: { label: "Salon", missed: 5, conversion: 40, avg: 150 },
  dental: { label: "Dental", missed: 4, conversion: 45, avg: 400 },
  other: { label: "Other", missed: 5, conversion: 30, avg: 500 },
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

function periodLabel(period: PeriodId): string {
  switch (period) {
    case "daily":
      return "day";
    case "weekly":
      return "week";
    case "monthly":
      return "month";
    case "annually":
      return "year";
    default:
      return "period";
  }
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
      setMissedCalls(
        Math.round(startMissed + (p.missed - startMissed) * e),
      );
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

  const dailyLoss =
    missedCalls * (conversion / 100) * avgValue;
  const totalLost = dailyLoss * periodDays;
  const xCount = Math.round(
    missedCalls * (conversion / 100) * periodDays,
  );

  const animatedTotal = useAnimatedNumber(totalLost, 600);
  const [showFixLine, setShowFixLine] = useState(false);

  useEffect(() => {
    setShowFixLine(false);
    const id = window.setTimeout(() => setShowFixLine(true), 900);
    return () => clearTimeout(id);
  }, [totalLost]);

  const avgLinear = avgToLinear(avgValue);

  const pillBase =
    "rounded-full px-3 py-2 text-[13px] font-medium transition-all duration-150 ease-in-out whitespace-nowrap shrink-0 border";
  const pillInactive =
    "border-white/15 bg-white/5 text-white hover:border-white/25 hover:bg-white/10";
  const pillActive = "border-transparent bg-[#00ff88] text-[#0a0a0a]";

  return (
    <div
      className="min-h-screen w-full font-sans text-white transition-colors duration-150 ease-in-out"
      style={{ backgroundColor: BG }}
    >
      <div className="mx-auto flex min-h-screen max-w-[480px] flex-col px-4 py-8 sm:py-10">
        <header className="mb-8 text-center">
          <h1 className="text-balance text-[22px] font-semibold leading-tight tracking-tight text-white sm:text-[24px]">
            How Much Revenue Are You Losing From Missed Calls?
          </h1>
          <p className="mt-3 text-[13px] leading-relaxed text-white/55">
            Most businesses underestimate this. The numbers are usually worse
            than you think.
          </p>
        </header>

        <div className="flex flex-1 flex-col gap-8">
          {/* 1. Business type */}
          <section className="space-y-3">
            <p className="text-[13px] font-medium text-white/90">
              What type of business are you?
            </p>
            <div className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
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
          </section>

          {/* 2–4. Sliders */}
          <section className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between gap-2">
                <label
                  htmlFor="missed-calls"
                  className="text-[13px] font-medium text-white/90"
                >
                  Missed Calls Per Day
                </label>
                <span className="text-[13px] tabular-nums text-[#00ff88]">
                  {missedCalls}
                </span>
              </div>
              <input
                id="missed-calls"
                type="range"
                min={1}
                max={50}
                value={missedCalls}
                onChange={(e) => setMissedCalls(Number(e.target.value))}
                className="h-2 w-full cursor-pointer appearance-none rounded-full bg-white/10 accent-[#00ff88] transition-[background] duration-150 ease-in-out [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-[#00ff88] [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#00ff88]"
                style={{ accentColor: GREEN }}
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between gap-2">
                <label
                  htmlFor="conversion"
                  className="text-[13px] font-medium text-white/90"
                >
                  Calls That Convert to Customers
                </label>
                <span className="text-[13px] tabular-nums text-[#00ff88]">
                  {conversion}%
                </span>
              </div>
              <input
                id="conversion"
                type="range"
                min={5}
                max={80}
                value={conversion}
                onChange={(e) => setConversion(Number(e.target.value))}
                className="h-2 w-full cursor-pointer appearance-none rounded-full bg-white/10 accent-[#00ff88] transition-[background] duration-150 ease-in-out [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-[#00ff88] [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#00ff88]"
                style={{ accentColor: GREEN }}
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between gap-2">
                <label
                  htmlFor="avg-value"
                  className="text-[13px] font-medium text-white/90"
                >
                  Average Job or Service Value
                </label>
                <span className="text-[13px] tabular-nums text-[#00ff88]">
                  {formatMoney(avgValue)}
                </span>
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
                className="h-2 w-full cursor-pointer appearance-none rounded-full bg-white/10 accent-[#00ff88] transition-[background] duration-150 ease-in-out [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-[#00ff88] [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#00ff88]"
                style={{ accentColor: GREEN }}
              />
            </div>
          </section>

          {/* Period */}
          <section className="space-y-3">
            <p className="text-[13px] font-medium text-white/90">Period</p>
            <div className="flex flex-wrap gap-2">
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
          </section>

          {/* Output */}
          <section className="flex flex-col items-center py-4 text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-white/45">
              Estimated Revenue Lost
            </p>
            <p
              className="mt-2 text-[40px] font-bold leading-none tracking-tight text-[#00ff88] sm:text-[48px]"
              style={{
                textShadow:
                  "0 0 28px rgba(0, 255, 136, 0.35), 0 0 60px rgba(0, 255, 136, 0.12)",
              }}
            >
              {formatMoney(animatedTotal)}
            </p>
            <p className="mt-5 max-w-[32ch] text-[14px] leading-relaxed text-white/80">
              That&apos;s {xCount} missed customers per {periodLabel(period)}
            </p>
            <p
              className="mt-2 max-w-[34ch] text-[14px] leading-relaxed"
              style={{ color: BLUE }}
            >
              Approximately {xCount} jobs going to your competitors every{" "}
              {periodLabel(period)}
            </p>

            <p className="mt-8 max-w-[34ch] text-[14px] leading-relaxed text-white/70">
              This is what your phone not getting answered is costing you.
            </p>
            <p
              className={`mt-3 max-w-[34ch] text-[14px] leading-relaxed text-white/60 transition-opacity duration-500 ease-out ${
                showFixLine ? "opacity-100" : "opacity-0"
              }`}
            >
              This is exactly what we fix automatically.
            </p>
          </section>

          <footer className="mt-auto border-t border-white/10 pt-8 text-center">
            <p className="text-[13px] font-semibold tracking-tight text-[#00ff88]">
              Automagixx
            </p>
            <p className="mt-1 text-[12px] leading-relaxed text-white/45">
              Turn your missed calls into money — like magic.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}
