import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import type { LucideIcon } from "lucide-react";
import {
  Sparkles,
  MessageSquare,
  Share2,
  Workflow,
  RotateCcw,
  Star,
  CheckCircle2,
  Wand2,
  Headphones,
} from "lucide-react";
import NavCtaPair from "./components/NavCtaPair";
import DualCtaCards from "./components/DualCtaCards";
import {
  DEMO_CARD_BUTTON_LABEL,
  DEMO_CTA_LABEL,
  DEMO_PHONE_DISPLAY,
  DEMO_PHONE_HREF,
  HERO_PRIMARY_CTA_LABEL,
  PRIMARY_PHONE_DISPLAY,
  PRIMARY_PHONE_HREF,
} from "./components/cta";

const shell = "max-w-[1200px] mx-auto px-5 sm:px-8";
const eyebrow =
  "text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-emerald-600";
const eyebrowCenter = `${eyebrow} mb-4`;

/** Homepage card system — soft shadow, consistent radius, calm hover lift */
const cardSurface =
  "rounded-2xl border border-slate-200/90 bg-white shadow-[0_2px_12px_rgba(15,23,42,0.045)] transition-all duration-300 ease-out";
const cardSurfaceHover =
  "hover:border-slate-300/90 hover:shadow-[0_22px_48px_-22px_rgba(15,23,42,0.1)]";
const cardSurfaceAccentHover =
  "hover:border-emerald-200/75 hover:shadow-[0_24px_56px_-26px_rgba(5,150,105,0.13)]";

const cardPremium =
  `group relative flex h-full flex-col ${cardSurface} ${cardSurfaceHover} ${cardSurfaceAccentHover} p-7 sm:p-8`;

const cardFlagshipService =
  "group relative flex h-full flex-col rounded-2xl border border-emerald-200/65 bg-white p-7 sm:p-8 shadow-[0_10px_32px_-14px_rgba(5,150,105,0.2)] ring-1 ring-emerald-500/12 transition-all duration-300 ease-out hover:border-emerald-300/80 hover:shadow-[0_28px_64px_-28px_rgba(5,150,105,0.22)] hover:ring-emerald-500/22";

const painCardClass = `${cardSurface} ${cardSurfaceHover} ${cardSurfaceAccentHover} p-6 sm:p-7 text-left`;

const howCardClass = `${cardSurface} ${cardSurfaceHover} ${cardSurfaceAccentHover} relative p-7`;

const outcomeCardClass = `${cardSurface} ${cardSurfaceHover} flex flex-col gap-4 p-6 sm:p-7 sm:flex-row sm:items-start`;

const painPoints = [
  {
    title: "Missed calls",
    body: "Unanswered rings turn into missed revenue — especially after hours.",
  },
  {
    title: "Slow replies",
    body: "Interested leads cool off when they wait hours for a text back.",
  },
  {
    title: "No follow-up",
    body: "Old leads and quotes go cold without a consistent nurture path.",
  },
  {
    title: "Trust erosion",
    body: "Customers remember silence. Reputation takes a hit when they feel ignored.",
  },
];

const services: {
  title: string;
  description: string;
  icon: LucideIcon;
  grad: string;
  iconClass: string;
}[] = [
  {
    title: "AI Receptionist",
    description:
      "Answers instantly, captures details, and books appointments — without missing a ring.",
    icon: Headphones,
    grad: "from-emerald-500/18 to-teal-500/10",
    iconClass: "text-emerald-600",
  },
  {
    title: "Smart Message Response",
    description:
      "Faster responses across text, web inquiries, and messages — without living on your phone.",
    icon: MessageSquare,
    grad: "from-teal-500/12 to-green-500/8",
    iconClass: "text-teal-600",
  },
  {
    title: "Social / DM Response",
    description:
      "Catch Instagram, Facebook, and DMs before inbound leads go cold.",
    icon: Share2,
    grad: "from-green-500/12 to-teal-500/8",
    iconClass: "text-green-600",
  },
  {
    title: "Lead Follow-Up Automation",
    description:
      "Remind, nurture, and move leads forward automatically — instead of letting them slip away.",
    icon: Workflow,
    grad: "from-cyan-500/12 to-emerald-500/8",
    iconClass: "text-cyan-600",
  },
  {
    title: "Old Lead Reactivation",
    description: "Re-engage past leads and missed opportunities that can still convert.",
    icon: RotateCcw,
    grad: "from-amber-500/14 to-orange-500/8",
    iconClass: "text-amber-700",
  },
  {
    title: "Reviews & Reputation",
    description:
      "Stronger Google reviews and trust — without the manual follow-up chase.",
    icon: Star,
    grad: "from-amber-400/14 to-yellow-500/8",
    iconClass: "text-amber-600",
  },
];

const howSteps = [
  {
    step: "01",
    title: "A customer reaches out",
    body: "Calls, texts, DMs, and inquiries come in throughout the day.",
  },
  {
    step: "02",
    title: "Automagixx responds fast",
    body: "AI handles the first response, captures information, and keeps the conversation moving.",
  },
  {
    step: "03",
    title: "The lead gets guided forward",
    body: "Appointments get booked, follow-up gets triggered, and opportunities stay alive.",
  },
  {
    step: "04",
    title: "You stay focused on the business",
    body: "Less chasing. Less admin. More captured revenue.",
  },
];

const outcomes: { lead: string; tail: string }[] = [
  { lead: "More appointments booked", tail: "without adding staff" },
  { lead: "Faster replies", tail: "across the channels you actually use" },
  { lead: "Fewer missed opportunities", tail: "stronger capture from first contact to close" },
  { lead: "Less time on repetitive admin", tail: "more time on the work that pays" },
  { lead: "Better follow-up", tail: "without manual effort" },
  { lead: "Stronger trust & reputation", tail: "where new customers look first" },
];

const industries = [
  "Plumbing",
  "HVAC / Electrical / Home Services",
  "Roofing / Garage Door / Field Services",
  "Hair Salons",
  "Nail / Lash / Beauty Studios",
  "Med Spas / Aesthetics",
  "Dental / Chiropractic / Wellness",
  "Other Local Service Businesses",
];

const navLinkClass =
  "text-[14px] font-medium text-slate-600 hover:text-slate-900 transition-colors whitespace-nowrap";

export default function Home() {
  return (
    <div
      id="top"
      className="min-h-screen bg-[#f6f7fa] text-slate-900 font-sans antialiased selection:bg-emerald-500/15 selection:text-slate-900"
    >
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl supports-[backdrop-filter]:bg-white/80 shadow-[0_1px_0_rgba(15,23,42,0.04)]">
        <div className={shell}>
          <div className="flex items-center justify-between gap-4 min-h-[4.5rem] sm:min-h-[5rem] lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-6">
            <Link href="/#top" className="flex items-center gap-3 shrink-0 group lg:justify-self-start">
              <span className="inline-flex rounded-2xl bg-white p-1.5 shadow-[0_2px_12px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/90 group-hover:ring-slate-300 transition-all">
                <Image
                  src="/logo-robot.png"
                  alt="Automagixx"
                  width={160}
                  height={160}
                  className="h-9 w-auto sm:h-10 block"
                  priority
                />
              </span>
              <span className="hidden sm:inline text-[17px] font-semibold tracking-tight text-slate-900">
                Automagixx
              </span>
            </Link>

            <nav
              className="hidden lg:flex lg:justify-self-center items-center justify-center gap-6 xl:gap-7 flex-wrap"
              aria-label="Primary"
            >
              <a href="#services" className={navLinkClass}>
                Services
              </a>
              <a href="#how-it-works" className={navLinkClass}>
                How It Works
              </a>
              <a href="#magic" className={navLinkClass}>
                The Magic
              </a>
              <a href="#outcomes" className={navLinkClass}>
                Outcomes
              </a>
              <a href="#industries" className={navLinkClass}>
                Industries
              </a>
              <a href="#demo" className={navLinkClass}>
                Demo
              </a>
              <a href="#contact" className={navLinkClass}>
                Contact
              </a>
            </nav>

            <div className="shrink-0 lg:justify-self-end">
              <NavCtaPair compact showDemo={false} showGuarantee={false} primaryLabel="nav" />
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-[5.5rem] sm:pt-28 pb-20 sm:pb-28 px-5 sm:px-8 overflow-hidden bg-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-20%,rgba(16,185,129,0.12),transparent_55%)]" />
        <div className="pointer-events-none absolute top-1/2 right-0 w-[min(100%,560px)] h-[560px] -translate-y-1/2 bg-gradient-to-bl from-teal-400/[0.11] via-green-400/[0.06] to-transparent rounded-full blur-3xl" />

        <div className={`${shell} relative z-10`}>
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-16 items-center">
            <div className="space-y-8 lg:space-y-9 max-w-xl lg:max-w-none">
              <h1 className="text-[2.35rem] sm:text-5xl lg:text-[3.25rem] xl:text-[3.45rem] font-semibold tracking-[-0.03em] leading-[1.05] text-slate-950">
                AI That Captures Every Opportunity —{" "}
                <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 bg-clip-text text-transparent">
                  Like Magic.
                </span>
              </h1>
              <p className="text-lg sm:text-[1.125rem] text-slate-600 leading-[1.65] font-medium">
                Calls, texts, and messages handled faster.
                <br className="hidden sm:block" /> Leads followed up automatically.
                <br className="hidden sm:block" /> More opportunities captured — without adding more
                chaos.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-1">
                <a
                  href={PRIMARY_PHONE_HREF}
                  className="inline-flex items-center justify-center rounded-full bg-emerald-600 text-white px-8 py-4 text-[15px] font-semibold tracking-tight shadow-[0_4px_20px_rgba(5,150,105,0.38)] hover:bg-emerald-700 hover:shadow-[0_8px_28px_rgba(5,150,105,0.42)] transition-all active:scale-[0.98]"
                >
                  {HERO_PRIMARY_CTA_LABEL}
                </a>
                <a
                  href={DEMO_PHONE_HREF}
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-4 text-[15px] font-semibold text-slate-900 tracking-tight shadow-sm hover:border-emerald-200 hover:shadow-md transition-all active:scale-[0.98]"
                >
                  {DEMO_CTA_LABEL}
                </a>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-[14px] text-slate-500">
                <span>
                  <span className="font-semibold text-slate-700">Call/Text:</span>{" "}
                  {PRIMARY_PHONE_DISPLAY}
                </span>
                <span className="hidden sm:inline text-slate-300">|</span>
                <span>
                  <span className="font-semibold text-slate-700">Demo:</span> {DEMO_PHONE_DISPLAY}
                </span>
              </div>
            </div>

            <div className="relative lg:pl-4">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-emerald-500/20 via-teal-500/15 to-green-500/20 blur-xl opacity-80" />
              <div className="relative flex flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-gradient-to-br from-white via-slate-50/90 to-emerald-50/45 shadow-[0_22px_56px_-22px_rgba(15,23,42,0.22)] p-7 sm:p-8 text-left">
                <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-emerald-400/10 blur-2xl" />
                <div className="pointer-events-none absolute right-5 top-5 opacity-[0.35]">
                  <Sparkles className="h-4 w-4 text-teal-500" strokeWidth={1.5} />
                </div>
                <p className={`${eyebrow} mb-2`}>Live voice AI demo</p>
                <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900">
                  Hear It Work
                </h2>
                <p className="mt-3 text-left text-[14px] sm:text-[15px] text-slate-600 leading-relaxed">
                  Call the live demo and hear a real conversation — clear, fast, and on-brand.
                </p>
                <div className="mt-6 border-t border-slate-200/75 pt-6">
                  <a
                    href={DEMO_PHONE_HREF}
                    className="inline-flex w-full items-center justify-center rounded-full bg-slate-900 text-white px-7 py-3.5 text-[15px] font-semibold tracking-tight shadow-[0_6px_20px_rgba(15,23,42,0.2)] transition-all duration-150 ease-out hover:bg-slate-800 hover:shadow-[0_10px_28px_rgba(15,23,42,0.25)] active:scale-[0.99]"
                  >
                    {DEMO_CARD_BUTTON_LABEL}
                  </a>
                  <p className="mt-3 text-left text-[13px] font-medium text-slate-500 tabular-nums tracking-tight">
                    {DEMO_PHONE_DISPLAY}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem / opportunity gap */}
      <section
        id="problem"
        className="scroll-mt-28 py-20 sm:py-28 px-5 sm:px-8 bg-slate-50/90 border-y border-slate-200/60"
      >
        <div className={shell}>
          <div className="max-w-[52rem] mx-auto text-center mb-14 sm:mb-16">
            <p className={eyebrowCenter}>The opportunity gap</p>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold tracking-tight text-slate-900 leading-[1.12]">
              Most Businesses Are Losing Opportunities Every Day
            </h2>
            <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-[40rem] mx-auto">
              Missed calls. Slow replies. Forgotten follow-up.
              <br />
              <span className="font-semibold text-slate-800">
                Most businesses do not have a lead problem — they have a response and capture
                problem.
              </span>
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {painPoints.map((p) => (
              <div key={p.title} className={painCardClass}>
                <p className="text-[15px] font-semibold tracking-tight text-slate-900">{p.title}</p>
                <p className="mt-2.5 text-[14px] text-slate-600 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Revenue impact — calculator teaser */}
      <section
        aria-labelledby="revenue-impact-heading"
        className="scroll-mt-28 py-20 sm:py-24 px-5 sm:px-8 bg-white border-y border-slate-100"
      >
        <div className={shell}>
          <div className="max-w-[36rem] mx-auto text-center">
            <p className={eyebrowCenter}>Revenue impact</p>
            <h2
              id="revenue-impact-heading"
              className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 leading-[1.12]"
            >
              How Much Are Missed Calls Costing You?
            </h2>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              Most businesses underestimate this — the numbers are usually worse than you think.
            </p>

            <div className="mt-10 sm:mt-12 rounded-2xl border border-slate-800/60 bg-slate-950 px-7 py-9 sm:px-10 sm:py-10 text-center shadow-[0_28px_64px_-20px_rgba(0,0,0,0.45)]">
              <p
                className="text-[clamp(1.85rem,6vw,2.35rem)] font-bold leading-none tracking-tight text-[#00ff88]"
                style={{
                  textShadow:
                    "0 0 40px rgba(0, 255, 136, 0.32), 0 0 72px rgba(0, 255, 136, 0.1)",
                }}
              >
                $12,450
                <span className="text-[1.05rem] sm:text-xl font-semibold text-white/50 ml-1.5">
                  /month
                </span>
              </p>
              <p className="mt-4 text-[13px] font-medium uppercase tracking-[0.16em] text-white/40">
                From missed calls alone
              </p>
              <p className="mt-6 text-[15px] text-white/70 leading-relaxed max-w-[28ch] mx-auto">
                This is what not answering the phone is costing businesses like yours.
              </p>
            </div>

            <Link
              href="/missed-call-calculator"
              className="mt-10 inline-flex items-center justify-center rounded-full bg-emerald-600 text-white px-9 py-4 text-[15px] font-semibold tracking-tight shadow-[0_8px_28px_rgba(5,150,105,0.35)] transition-all duration-150 ease-out hover:bg-emerald-700 hover:shadow-[0_12px_32px_rgba(5,150,105,0.4)] active:scale-[0.98]"
            >
              Calculate Your Lost Revenue
            </Link>
            <p className="mt-2.5 text-[13px] text-slate-500">Takes 10 seconds</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="scroll-mt-28 py-20 sm:py-28 px-5 sm:px-8 bg-white">
        <div className={shell}>
          <div className="max-w-[48rem] mx-auto text-center mb-14 sm:mb-16">
            <p className={eyebrowCenter}>What we help you automate</p>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold tracking-tight text-slate-900 leading-[1.12]">
              AI Systems Built To Capture More Business
            </h2>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Start with AI call handling — then automate the replies, follow-up, reputation, and
              lead flow that keep revenue moving.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
            {services.map((s, i) => {
              const Icon = s.icon;
              const flagship = i === 0;
              const cardClass = flagship ? cardFlagshipService : cardPremium;
              const iconWrap = flagship
                ? "mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br shadow-[0_8px_24px_-8px_rgba(5,150,105,0.25)]"
                : "mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br";
              const iconSize = flagship ? "h-7 w-7" : "h-6 w-6";
              return (
                <div key={s.title} className={cardClass}>
                  <div className={`${iconWrap} ${s.grad} ${s.iconClass}`}>
                    <Icon className={iconSize} strokeWidth={flagship ? 1.65 : 1.75} />
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight text-slate-900 leading-snug">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-[14px] sm:text-[15px] text-slate-600 leading-relaxed flex-1">
                    {s.description}
                  </p>
                </div>
              );
            })}
          </div>
          <p className="mt-12 text-center text-[14px] text-slate-500 max-w-[40rem] mx-auto leading-relaxed">
            Additional automations and marketing workflows can be layered in based on your business
            needs.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section
        id="how-it-works"
        className="scroll-mt-28 py-20 sm:py-28 px-5 sm:px-8 bg-gradient-to-b from-slate-50/80 via-white to-white border-t border-slate-100"
      >
        <div className={shell}>
          <div className="max-w-[40rem] mb-14 sm:mb-16">
            <p className={`${eyebrow} mb-4`}>How it works</p>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-semibold tracking-tight text-slate-900 leading-tight">
              Simple On The Surface. Powerful Behind It.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {howSteps.map((item) => (
              <div key={item.step} className={howCardClass}>
                <span className="text-[11px] font-bold text-emerald-600 tracking-[0.22em]">
                  {item.step}
                </span>
                <h3 className="text-[17px] font-semibold mt-4 mb-2 tracking-tight text-slate-900 leading-snug">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-[14px] sm:text-[15px] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Magic */}
      <section
        id="magic"
        className="scroll-mt-28 relative py-24 sm:py-32 px-5 sm:px-8 overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-white"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_50%_35%,rgba(20,184,166,0.11),transparent_60%)]" />
        <div className="pointer-events-none absolute top-[18%] left-[12%] h-48 w-48 rounded-full bg-emerald-400/[0.07] blur-3xl" />
        <div className="pointer-events-none absolute bottom-[12%] right-[10%] h-56 w-56 rounded-full bg-green-400/[0.06] blur-3xl" />
        <div className={`${shell} relative z-10`}>
          <div className="max-w-[40rem] mx-auto text-center">
            <div className="inline-flex items-center justify-center gap-2 rounded-full border border-teal-200/60 bg-white/80 px-4 py-2 mb-10 shadow-[0_2px_16px_rgba(20,184,166,0.08)] backdrop-blur-sm">
              <Wand2 className="w-4 h-4 text-teal-600" strokeWidth={1.75} />
              <span className="text-[11px] font-semibold text-teal-800 tracking-[0.18em] uppercase">
                The magic
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-semibold tracking-tight text-slate-900 leading-[1.1]">
              This Is What AI Should Feel Like
            </h2>
            <div className="mt-10 space-y-4 sm:space-y-5 text-lg sm:text-xl text-slate-600 leading-relaxed">
              <p className="text-slate-600">No confusing dashboards.</p>
              <p className="text-slate-600">No constant babysitting.</p>
              <p className="text-slate-600">No extra headcount just to keep up.</p>
              <p className="text-slate-700 font-medium pt-3 max-w-[36ch] mx-auto">
                Just a system that works quietly in the background — capturing opportunities, replying
                faster, and keeping business moving.
              </p>
              <p className="text-xl sm:text-2xl font-semibold text-slate-900 pt-6 tracking-tight">
                Reliable. Fast. Effortless.
              </p>
              <div className="relative pt-8 pb-2 inline-block">
                <span
                  className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[4.5rem] w-[min(100vw,14rem)] rounded-full bg-gradient-to-r from-emerald-400/20 via-teal-400/18 to-green-400/20 blur-2xl"
                  aria-hidden
                />
                <p className="relative text-[1.75rem] sm:text-4xl font-semibold tracking-tight bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 bg-clip-text text-transparent">
                  Like magic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section
        id="outcomes"
        className="scroll-mt-28 py-20 sm:py-28 px-5 sm:px-8 bg-slate-50/90 border-y border-slate-200/60"
      >
        <div className={shell}>
          <div className="max-w-[40rem] mb-12 sm:mb-14">
            <p className={`${eyebrow} mb-4`}>What changes</p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
              What You Notice First
            </h2>
          </div>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 max-w-[1100px]">
            {outcomes.map((o) => (
              <li key={o.lead} className={outcomeCardClass}>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-600/[0.08] text-emerald-600 ring-1 ring-emerald-600/[0.1] shadow-[0_2px_8px_rgba(5,150,105,0.06)]">
                  <CheckCircle2 className="h-5 w-5" strokeWidth={2} />
                </span>
                <div className="min-w-0 pt-0.5">
                  <p className="text-[16px] font-semibold text-slate-900 leading-snug tracking-tight">
                    {o.lead}
                  </p>
                  <p className="mt-2 text-[14px] text-slate-600 leading-relaxed">{o.tail}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="scroll-mt-28 py-20 sm:py-28 px-5 sm:px-8 bg-white">
        <div className={shell}>
          <div className="max-w-[48rem] mx-auto text-center mb-12 sm:mb-14">
            <p className={eyebrowCenter}>Industries we serve</p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 leading-tight">
              Built For Local Businesses That Need To Respond Fast
            </h2>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              Automagixx is especially useful where missed calls, slow replies, and weak follow-up
              turn into lost revenue.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-[1000px] mx-auto">
            {industries.map((name) => (
              <div
                key={name}
                className="flex items-center justify-center rounded-2xl border border-slate-200/90 bg-slate-50/60 px-4 py-4 text-center text-[13px] sm:text-[14px] font-semibold text-slate-800 leading-snug shadow-[0_2px_10px_rgba(15,23,42,0.04)] transition-all duration-300 ease-out hover:border-emerald-200/80 hover:bg-white hover:shadow-[0_16px_40px_-20px_rgba(5,150,105,0.12)] min-h-[4.25rem]"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo */}
      <section id="demo" className="scroll-mt-28 py-20 sm:py-28 px-5 sm:px-8 bg-slate-50/50">
        <div className={shell}>
          <div className="max-w-[44rem] mx-auto text-center relative rounded-2xl border border-slate-200/90 bg-gradient-to-br from-white via-emerald-50/40 to-teal-50/30 p-10 sm:p-14 shadow-[0_24px_60px_-28px_rgba(5,150,105,0.2)] overflow-hidden transition-shadow duration-300 hover:shadow-[0_28px_64px_-28px_rgba(5,150,105,0.24)]">
            <div className="pointer-events-none absolute top-0 right-0 w-40 h-40 bg-green-400/10 rounded-full blur-3xl" />
            <Sparkles
              className="w-9 h-9 text-emerald-600 mx-auto mb-5 relative"
              strokeWidth={1.5}
            />
            <p className={`${eyebrow} mb-3`}>Try it live</p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 relative">
              Hear The Voice AI In Action
            </h2>
            <p className="mt-5 text-lg text-slate-600 max-w-xl mx-auto leading-relaxed relative">
              Call the live demo and hear how Automagixx answers, responds, and guides a real
              conversation.
            </p>
            <a
              href={DEMO_PHONE_HREF}
              className="mt-10 relative inline-flex items-center justify-center rounded-full bg-emerald-600 text-white px-10 py-4 text-[16px] font-semibold hover:bg-emerald-700 transition-all shadow-[0_8px_24px_rgba(5,150,105,0.35)]"
            >
              Try the Demo → {DEMO_PHONE_DISPLAY}
            </a>
            <p className="mt-4 text-[15px] font-semibold text-slate-700 tabular-nums">
              {DEMO_PHONE_DISPLAY}
            </p>
          </div>
        </div>
      </section>

      {/* Strong CTA */}
      <section
        id="contact"
        className="scroll-mt-28 relative py-20 sm:py-28 px-5 sm:px-8 overflow-hidden bg-gradient-to-b from-[#0f172a] via-[#0a1f18] to-[#061a14] text-white"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(16,185,129,0.2),transparent_50%)]" />
        <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[min(100%,800px)] h-48 bg-teal-500/10 blur-3xl rounded-full" />
        <div className={`${shell} relative z-10 text-center`}>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-semibold tracking-tight text-white">
            Want This Set Up For Your Business?
          </h2>
          <p className="mt-5 text-lg text-white/85 max-w-xl mx-auto leading-relaxed">
            If you want AI to help capture calls, respond faster, and follow up automatically,
            let&apos;s talk.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 max-w-2xl mx-auto">
            <a
              href={PRIMARY_PHONE_HREF}
              className="inline-flex items-center justify-center rounded-full bg-white text-slate-900 px-10 py-4 text-[16px] font-semibold hover:bg-gray-100 transition-all shadow-[0_8px_32px_rgba(0,0,0,0.35)]"
            >
              Call or Text Us → {PRIMARY_PHONE_DISPLAY}
            </a>
            <a
              href={DEMO_PHONE_HREF}
              className="inline-flex items-center justify-center rounded-full border-2 border-white/80 text-white px-10 py-4 text-[16px] font-semibold hover:bg-white/10 transition-all"
            >
              Try the Demo → {DEMO_PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* Calendar */}
      <section
        id="book-call"
        className="scroll-mt-28 py-20 sm:py-28 px-5 sm:px-8 bg-[#f1f3f7] border-y border-slate-200/70"
      >
        <div className={`${shell} max-w-[880px]`}>
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 text-center tracking-tight">
            Prefer To Pick A Time?
          </h2>
          <p className="text-center text-slate-600 text-[15px] sm:text-base max-w-lg mx-auto mt-4 leading-relaxed">
            Scheduling is optional.
            <br />
            For the fastest path, call or text{" "}
            <a
              href={PRIMARY_PHONE_HREF}
              className="text-emerald-700 font-semibold underline underline-offset-2 hover:text-emerald-800"
            >
              {PRIMARY_PHONE_DISPLAY}
            </a>{" "}
            first.
            <br />
            If you&apos;d rather book a time, use the calendar below.
          </p>
          <div className="mt-10 rounded-2xl border border-slate-200/90 bg-white shadow-[0_12px_40px_-24px_rgba(15,23,42,0.12)] overflow-hidden">
            <iframe
              src="https://api.leadconnectorhq.com/widget/booking/deaNfs7Dq6XtD6FzYMR8"
              id="deaNfs7Dq6XtD6FzYMR8_1775089987086"
              className="block w-full min-h-[720px] sm:min-h-[820px] lg:min-h-[900px] border-0 overflow-hidden"
              style={{ width: "100%", border: "none", overflow: "hidden" }}
              scrolling="no"
              title="Schedule time with Automagixx"
            />
          </div>
          <p className="text-[12px] text-slate-500 text-center mt-6 tracking-tight max-w-2xl mx-auto leading-relaxed">
            By submitting this form, you agree to receive SMS messages from Automagixx related to
            your inquiry, including appointment reminders and service updates. Message frequency
            varies. Message &amp; data rates may apply. Reply STOP to opt out or HELP for help. See{" "}
            <a href="/privacy-policy" className="underline underline-offset-2 hover:text-slate-700">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="/terms-of-service" className="underline underline-offset-2 hover:text-slate-700">
              Terms of Service
            </a>
            .
          </p>
        </div>
        <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden py-20 sm:py-28 px-5 sm:px-8 bg-gradient-to-br from-slate-950 via-[#0b221c] to-emerald-950 text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 85% 55% at 20% 0%, rgba(255,255,255,0.12), transparent 50%)",
          }}
        />
        <div className={`${shell} relative z-10`}>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Ready To Capture More Opportunities?
            </h2>
            <p className="mt-4 text-lg text-white/88 leading-relaxed">
              One call. One demo. Then Automagixx starts doing the heavy lifting.
            </p>
          </div>
          <DualCtaCards variant="onBlue" />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#070b14] text-slate-400 py-16 sm:py-20 px-5 sm:px-8 border-t border-slate-800/80">
        <div className={`${shell} flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12`}>
          <div className="flex flex-col sm:flex-row sm:items-start gap-6 max-w-md mx-auto lg:mx-0 text-center sm:text-left">
            <span className="inline-flex rounded-2xl bg-white p-2 ring-1 ring-slate-700/60 shadow-lg mx-auto sm:mx-0 shrink-0">
              <Image
                src="/logo-robot.png"
                alt="Automagixx"
                width={120}
                height={120}
                className="h-12 w-auto sm:h-14 block"
              />
            </span>
            <div>
              <p className="text-white font-semibold tracking-tight text-lg">Automagixx</p>
              <p className="text-[15px] mt-3 leading-relaxed text-slate-400">
                AI systems for local businesses that want to respond faster, capture more
                opportunities, and grow with less friction.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 text-[15px] text-center lg:text-right">
            <a
              href={PRIMARY_PHONE_HREF}
              className="text-slate-200 font-medium hover:text-white transition-colors"
            >
              {PRIMARY_PHONE_DISPLAY}
            </a>
            <a
              href={DEMO_PHONE_HREF}
              className="text-slate-300 hover:text-white transition-colors"
            >
              Demo: {DEMO_PHONE_DISPLAY}
            </a>
            <a
              href="mailto:brendan@automagixx.com"
              className="text-slate-300 hover:text-white transition-colors"
            >
              brendan@automagixx.com
            </a>
            <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center lg:justify-end mt-4 text-[14px]">
              <a href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy
              </a>
              <a href="/terms-of-service" className="hover:text-white transition-colors">
                Terms
              </a>
              <a href="/guarantee" className="hover:text-white transition-colors">
                Guarantee
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
