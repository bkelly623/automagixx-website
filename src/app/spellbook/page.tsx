import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Bot, BrainCircuit, CheckCircle2, FlaskConical, Megaphone, ScrollText, Sparkles, WandSparkles } from "lucide-react";
import { FIRST_EMPLOYEE_PATH } from "@/app/components/cta";
import BrandMark from "@/components/BrandMark";

export const metadata: Metadata = {
  title: "The Automagixx Spellbook | AI Workforce Growth Lab",
  description:
    "A public growth lab documenting the AI employees, experiments, and operating systems Automagixx uses to build itself and serve clients.",
};

const internalEmployees = [
  {
    icon: FlaskConical,
    name: "Market Scout",
    status: "Building",
    job: "Finds niches, lead sources, pain signals, and acquisition angles worth testing.",
    clientVersion: "Local Market Scout for businesses that need better lead lists and market intelligence.",
  },
  {
    icon: Megaphone,
    name: "Content Spellsmith",
    status: "Building",
    job: "Turns strategy, demos, client problems, and proof into posts, scripts, ads, and campaign assets.",
    clientVersion: "Content Rep for businesses that need consistent visibility without hiring a full content team.",
  },
  {
    icon: ScrollText,
    name: "Spellbook Scribe",
    status: "Active concept",
    job: "Documents what we build, what works, what fails, and which internal workflows become client products.",
    clientVersion: "Reporting Analyst / Ops Scribe for teams that need clean process docs and updates.",
  },
  {
    icon: Bot,
    name: "Warm Demo Builder",
    status: "Queued",
    job: "Creates website-to-AI demo agents only after a prospect gives permission to see one.",
    clientVersion: "Website-to-AI Demo Employee for sales teams selling high-trust services.",
  },
];

const experiments = [
  {
    title: "First AI Employee Finder",
    goal: "Convert curiosity into a clear recommendation and strategy call.",
    metric: "Completed recommendations → booked calls",
    status: "Live",
  },
  {
    title: "Warm Website-to-AI Demo",
    goal: "Ask permission first, then build personalized demos only for engaged prospects.",
    metric: "Positive replies → demos sent → calls booked",
    status: "Next",
  },
  {
    title: "AI Content Sample",
    goal: "Use fast personalized creative samples to open conversations with local businesses.",
    metric: "Samples requested → replies → calls booked",
    status: "Next",
  },
];

const principles = [
  "Distribution before product perfection.",
  "One profitable AI employee before a giant platform.",
  "Human judgment where trust, money, or reputation is on the line.",
  "Every internal workflow should become a reusable client asset.",
  "The magic is the demo: show the work, not just the claim.",
];

export default function SpellbookPage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      <div className="absolute inset-0 hero-gradient pointer-events-none" />
      <div className="absolute top-16 left-[8%] h-96 w-96 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-24 right-[8%] h-96 w-96 rounded-full bg-secondary/10 blur-3xl pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6 py-10 md:py-16">
        <header className="flex flex-wrap items-center justify-between gap-4 mb-16">
          <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            ← Back to Automagixx
          </Link>
          <Link
            href={FIRST_EMPLOYEE_PATH}
            className="inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Find your first AI employee
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
          </Link>
        </header>

        <section className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center mb-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 mb-6">
              <WandSparkles className="h-4 w-4 text-primary" aria-hidden />
              <span className="text-sm text-muted-foreground">Public growth lab · AI workforce spellbook</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight text-balance mb-6">
              The <span className="gradient-text">Automagixx Spellbook</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mb-8">
              We are building Automagixx with the same AI employees we sell: scouts, scribes, content reps, demo builders,
              follow-up operators, and workflow assistants. The client playbook stays simple: start with one profitable
              AI employee, prove ROI, then expand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={FIRST_EMPLOYEE_PATH}
                className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-4 font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Find your first AI employee
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
              <Link
                href="/#growth-lab"
                className="inline-flex items-center justify-center rounded-full border border-border px-7 py-4 font-semibold text-foreground hover:bg-muted transition-colors"
              >
                See the growth lab
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-primary/20 via-transparent to-secondary/25 blur-2xl" />
            <div className="relative rounded-[2rem] border border-white/10 glass-strong p-6 sm:p-8 shadow-[var(--shadow-card)]">
              <div className="flex items-center gap-4 mb-6">
                <BrandMark size="md" showWordmark={false} />
                <div>
                  <p className="text-sm text-muted-foreground">Brand character direction</p>
                  <h2 className="font-display text-2xl font-bold">The Robot Wizard</h2>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The mascot is not just decoration. It is a distribution device: the guide who explains AI employees,
                casts automation “spells,” shows before/after transformations, and keeps the story memorable without
                losing the business case.
              </p>
              <div className="rounded-2xl border border-primary/20 bg-primary/10 p-4">
                <p className="text-sm text-primary mb-1">Positioning line</p>
                <p className="font-display text-xl font-bold text-foreground">
                  AI employees do the repetitive work. Humans steer the mission.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-24">
          <div className="mb-10 max-w-3xl">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Internal AI workforce</span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold mt-4 mb-4">
              The employees building the company
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Each internal employee starts as a growth advantage for Automagixx. When it proves useful, we package the
              workflow into something a client can hire.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {internalEmployees.map((employee) => (
              <article key={employee.name} className="glass rounded-3xl p-6 sm:p-7 border border-white/10">
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/25 to-secondary/25">
                      <employee.icon className="h-6 w-6 text-primary" aria-hidden />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold">{employee.name}</h3>
                      <p className="text-sm text-muted-foreground">Internal AI employee</p>
                    </div>
                  </div>
                  <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {employee.status}
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-5">{employee.job}</p>
                <div className="rounded-2xl border border-white/10 bg-background/45 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">Client-ready path</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{employee.clientVersion}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start mb-24">
          <div>
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Experiments</span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold mt-4 mb-4">
              Growth spells currently being tested
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              The scoreboard is simple: replies, demos requested, calls booked, clients closed, and reusable systems born.
            </p>
          </div>
          <div className="space-y-4">
            {experiments.map((experiment) => (
              <article key={experiment.title} className="rounded-3xl border border-white/10 glass p-5 sm:p-6">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <h3 className="font-display text-xl font-bold">{experiment.title}</h3>
                  <span className="rounded-full bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground">
                    {experiment.status}
                  </span>
                </div>
                <p className="text-muted-foreground mb-3">{experiment.goal}</p>
                <p className="text-sm text-primary">Metric: {experiment.metric}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] border border-white/10 glass-strong p-6 sm:p-8 lg:p-10 mb-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm text-primary mb-5">
                <BrainCircuit className="h-4 w-4" aria-hidden />
                Operating principles
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
                The rules behind the magic
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Automagixx should feel magical to customers, but the operating system underneath has to be practical,
                measurable, and safe enough for real businesses.
              </p>
            </div>
            <div className="space-y-3">
              {principles.map((principle) => (
                <div key={principle} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-background/40 p-4">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" aria-hidden />
                  <p className="text-muted-foreground">{principle}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="text-center max-w-3xl mx-auto pb-8">
          <Sparkles className="h-8 w-8 text-primary mx-auto mb-4" aria-hidden />
          <h2 className="font-display text-3xl sm:text-5xl font-bold mb-5">
            Want the first spell cast for your business?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Start with one useful AI employee. If it works, expand into a workforce.
          </p>
          <Link
            href={FIRST_EMPLOYEE_PATH}
            className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Find your first AI employee
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
          </Link>
        </section>
      </div>
    </main>
  );
}
