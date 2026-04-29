"use client";

import { FormEvent, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles, WandSparkles } from "lucide-react";
import { CALENDAR_PATH } from "@/app/components/cta";

type Recommendation = {
  employee: string;
  why: string;
  pilot: string;
};

const inputClass =
  "w-full rounded-2xl border border-white/10 bg-background/70 px-4 py-3 text-[16px] text-foreground placeholder:text-muted-foreground focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/20";

const selectClass = `${inputClass} appearance-none`;

function getRecommendation(form: Record<string, string>): Recommendation {
  const bottleneck = form.bottleneck;
  const goal = form.goal;

  if (bottleneck === "Missed calls" || goal === "Capture more leads") {
    return {
      employee: "Missed Call Recovery Rep",
      why: "Your fastest ROI is likely capturing demand that already exists before it leaks to a competitor.",
      pilot: "30-day missed-call recovery pilot with call summaries, lead capture, and urgent handoff rules.",
    };
  }

  if (bottleneck === "Slow follow-up" || goal === "Book more appointments") {
    return {
      employee: "Lead Rescue Rep + Appointment Setter",
      why: "You probably do not need more leads first. You need faster follow-up and a cleaner path to booked calls.",
      pilot: "Lead follow-up pilot for new, missed, and stale leads with booking prompts and reminders.",
    };
  }

  if (bottleneck === "Content inconsistency" || goal === "Create more content") {
    return {
      employee: "Content Rep",
      why: "Your bottleneck is attention. A content employee can turn your offer, proof, and customer problems into daily distribution.",
      pilot: "AI content sample pack: hooks, posts, promo scripts, and one short-form content concept.",
    };
  }

  if (bottleneck === "Reviews/reputation") {
    return {
      employee: "Review & Reputation Rep",
      why: "Trust compounds. More recent reviews and faster feedback handling can improve conversion across every channel.",
      pilot: "Review request and feedback triage pilot with human approval before sensitive responses.",
    };
  }

  return {
    employee: "Custom AI Operations Assistant",
    why: "Your best first employee should remove a repeated task your team already performs manually every week.",
    pilot: "Workflow-mapping sprint to choose one repeatable process, build the employee, and measure saved time or recovered revenue.",
  };
}

export default function FirstAiEmployeePage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<Record<string, string>>({});

  const recommendation = useMemo(() => getRecommendation(formData), [formData]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const data = Object.fromEntries(Array.from(fd.entries()).map(([key, value]) => [key, String(value)]));

    setFormData(data);
    setLoading(true);
    await fetch("/api/intake", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...data,
        source: "First AI Employee Finder",
        notes: `Goal: ${data.goal || ""}\nBottleneck: ${data.bottleneck || ""}\nCurrent tools: ${data.currentTools || ""}\nWebsite: ${data.website || ""}\nNotes: ${data.notes || ""}`,
      }),
    }).catch(() => null);
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      <div className="absolute inset-0 hero-gradient pointer-events-none" />
      <div className="absolute top-20 left-[10%] h-80 w-80 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-[8%] h-96 w-96 rounded-full bg-secondary/10 blur-3xl pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6 py-10 md:py-16">
        <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
          ← Back to Automagixx
        </Link>

        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-14 items-start mt-10">
          <section>
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 mb-6">
              <WandSparkles className="h-4 w-4 text-primary" aria-hidden />
              <span className="text-sm text-muted-foreground">First AI Employee Finder</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-balance mb-6">
              Find the AI employee most likely to <span className="gradient-text">pay for itself first</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8">
              Answer a few questions. We will recommend the first AI employee to hire, why it makes sense, and what a
              small pilot should look like.
            </p>

            <div className="grid sm:grid-cols-3 gap-3 max-w-2xl">
              {["No tool overwhelm", "ROI-first recommendation", "Warm demo path if there is fit"].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-card/40 p-4 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary mb-2" aria-hidden />
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section className="relative">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-primary/25 via-transparent to-secondary/20 blur-xl opacity-80" />
            <div className="relative rounded-3xl border border-white/10 glass-strong p-6 sm:p-8 shadow-[var(--shadow-card)]">
              {submitted ? (
                <div>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary mb-5">
                    <Sparkles className="h-6 w-6 text-primary-foreground" aria-hidden />
                  </div>
                  <h2 className="font-display text-3xl font-bold mb-3">Your first AI employee</h2>
                  <div className="rounded-2xl border border-primary/20 bg-primary/10 p-5 mb-5">
                    <p className="text-sm text-primary mb-1">Recommended hire</p>
                    <p className="font-display text-2xl font-bold">{recommendation.employee}</p>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">{recommendation.why}</p>
                  <p className="text-muted-foreground leading-relaxed mb-7">
                    <span className="text-foreground font-semibold">Suggested pilot: </span>
                    {recommendation.pilot}
                  </p>
                  <Link
                    href={CALENDAR_PATH}
                    className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    Book the AI employee strategy call
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Business name</label>
                    <input name="businessName" required placeholder="e.g. Smith Plumbing" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Website</label>
                    <input name="website" placeholder="https://..." className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">What kind of business is it?</label>
                    <input name="businessType" required placeholder="Plumbing, med spa, dental, agency, etc." className={inputClass} />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Main goal</label>
                      <select name="goal" required className={selectClass} defaultValue="">
                        <option value="" disabled>Select…</option>
                        <option>Capture more leads</option>
                        <option>Book more appointments</option>
                        <option>Create more content</option>
                        <option>Save admin time</option>
                        <option>Improve reviews/reputation</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Biggest bottleneck</label>
                      <select name="bottleneck" required className={selectClass} defaultValue="">
                        <option value="" disabled>Select…</option>
                        <option>Missed calls</option>
                        <option>Slow follow-up</option>
                        <option>Content inconsistency</option>
                        <option>Reviews/reputation</option>
                        <option>Manual admin work</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Current tools/team</label>
                    <input name="currentTools" placeholder="GHL, HubSpot, Google Calendar, receptionist, VA, etc." className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email or phone</label>
                    <input name="contact" required placeholder="Where should we send the recommendation/follow-up?" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Anything else?</label>
                    <textarea name="notes" rows={3} placeholder="Optional context" className={inputClass} />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex w-full items-center justify-center rounded-full bg-primary px-7 py-4 font-semibold text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-60"
                  >
                    {loading ? "Casting recommendation..." : "Find my first AI employee"}
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                  </button>
                </form>
              )}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
