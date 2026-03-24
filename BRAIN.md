# AUTOMAGIXX WEBSITE BRAIN

This file is the continuity anchor for the `automagixx-website` project.
If context is lost, read this file first.

---

## 1) Project Identity and Strategy

### Current Public Brand
- Brand: **Automagixx**
- Domain: `automagixx.com`
- Current go-to-market: contractor/service-business revenue recovery

### Core Positioning (External Messaging)
- Automagixx is framed as a **profit recovery company for service contractors**.
- We do **not** lead with AI/SaaS/tool language in customer-facing copy.
- We sell outcomes:
  - more booked jobs
  - fewer missed calls
  - faster lead response
  - recovered lost revenue

### Strategic Thesis
- Most local service businesses leak revenue through:
  - unanswered calls
  - after-hours voicemail
  - delayed follow-up
  - weak scheduling/admin workflows
- Core framing:
  - "Stop missing calls."
  - "Capture more jobs."
  - "Recover lost revenue."
  - "Replace voicemail with bookings."

### Offer Ladder (Business Direction)
- Wedge offer: **Missed Revenue Recovery System**
- Expansion offers (secondary/upsell):
  - lead follow-up automation
  - website lead capture systems
  - missed call recovery workflows
  - internal workflow automation
  - reporting/performance tracking

### Long-Term Direction
- Agency first (cash + learning + proof), then internal automation infrastructure, then larger agentic operations layer/platform.

---

## 2) Target Customer and Market Focus

### Primary Market
- Home-service / field-service businesses, especially:
  - plumbing
  - HVAC
  - electrical
  - garage door
  - locksmith
  - roofing
  - pest control

### Current Geographic Trust Signals
- Local phone: `484-424-9624`
- Positioning: Philadelphia area / regional trust

---

## 3) Website Conversion Rules (Canonical)

### Single CTA System (Landing Conversion CTA)
- Button text: `See Where You're Losing Jobs`
- Subtext: `Free 10-minute call — no commitment`
- Link everywhere for conversion CTA buttons: `https://calendly.com/automagixx/30min`

### Messaging Guardrails
- Avoid customer-facing jargon like:
  - AI-powered
  - automation platform
  - LLM
  - agents
- Use contractor-friendly, result-first language.

---

## 4) Current Implementation State (What is Live in Code)

Primary page is `src/app/page.tsx`.

### Implemented Sections/Content
- Hero has been rewritten to:
  - `Stop Missing Calls. Start Capturing More Jobs.`
  - contractor-friendly subheadline
  - visible phone line: `Or call us: 484-424-9624`
- Core service section uses:
  - title: `Missed Revenue Recovery System`
  - required bullet list (calls answered, lead capture, missed-call text-back, booking, no lost opportunities)
- How It Works is a 5-step flow:
  1. Customer Calls Your Business
  2. System Answers Instantly
  3. Lead Information Is Captured
  4. Appointment Is Booked
  5. You Get Notified
- Price anchor section:
  - `Simple, Transparent Pricing`
  - `Systems start at $397/month depending on call volume and workflow needs.`
- Outcomes section:
  - `What Happens When You Stop Missing Calls`
  - bullet outcomes (no fake percentages in that section)
- Industry cards updated to exact contractor-focused industries/copy.
- Secondary services section added with the 5 specified items.
- Client dashboard section retained with realistic sample metrics:
  - Calls Answered: 87
  - Jobs Booked: 26
  - Estimated Revenue Captured: $13,400
  - Response Time: Instant
- Testimonials replaced with realistic entries (and old `Mike R.` removed).
- Footer contact email updated to:
  - `brendan@automagixx.com`

### CTA Component Standardization
- Reusable component: `src/app/components/PrimaryCta.tsx`
- Encodes canonical CTA label, subtext, and booking URL.
- Homepage conversion CTAs are standardized through this component.

---

## 5) Chatbot System (Current Architecture)

### Global Widget
- Global render in `src/app/layout.tsx` via `ChatWidget`.
- Widget component: `src/app/components/ChatWidget.tsx`
- API route: `src/app/api/chat/route.ts`

### Bot Behavior
- Uses OpenAI chat completions endpoint.
- Prompt is contractor/profit-recovery oriented.
- Explicitly blocks technical/AI-jargon messaging in assistant tone.

### Env Key Resolution (Current Fallbacks)
`route.ts` checks:
- `OPENAI_API_KEY`
- `OPENAI_KEY`
- `EXPO_PUBLIC_OPENAI_API_KEY`
- `NEXT_PUBLIC_OPENAI_API_KEY`

If no key is present, route returns:
- `"Chat isn’t configured right now..."` style response.

### Important Deployment Note
- `.env*` is gitignored in this repo.
- Local `.env` does **not** deploy to Vercel.
- For production chatbot functionality, env vars must be set in Vercel project settings for the right environments.

---

## 6) Deployment and Vercel Lessons Learned

### Repository / Branch
- Repo: `bkelly623/automagixx-website`
- Branch: `main`

### Critical Vercel Behavior
- "Redeploy" can redeploy an older commit SHA.
- To pick up new code, ensure deployment is created from latest commit (not just rerun old one).

### Verification Pattern
- Always verify live deployment SHA matches latest pushed commit.
- If live UI looks stale, check:
  - deployment commit SHA
  - domain mapped project
  - Git integration + branch settings

---

## 7) Recent Implementation Timeline (Ground Truth)

Recent commits:
- `30ddc8a` Fix chat API key fallback and normalize widget bubble launcher
- `577012e` Refine chat bubble launcher styling and text contrast
- `5077bbd` Polish chat launcher visibility and update contact email
- `7a556fa` Refocus site around contractor lead recovery funnel
- `f2e6fa5` Upgrade Next.js to 15.5.9 for security fixes
- `ef94fca` Refocus Automagixx site on service-business revenue recovery

---

## 8) Known Open Items / Next Pass Candidates

These are not blockers, but should be evaluated deliberately:

1. **Revenue calculator block** in `src/app/page.tsx`
- Still contains "simple example" style numbers (`10–30%`, `$18,000+`).
- If strict no-example/no-implied-stat framing is desired globally, rewrite or remove.

2. **Literal interpretation of "all buttons" rule**
- Landing CTAs are standardized.
- Functional UI buttons (chat send/close, dashboard auth controls) remain non-CTA by necessity.
- Keep this interpretation unless explicitly changed.

3. **Phase-1 demo stack expansion** (future)
- AI phone demo section
- CRM capture + booking confirmations + SMS flow integration
- Keep scope tied to revenue-first sequence.

---

## 9) Local Dev / Ops Quickstart

From repo root:
- `npm run dev`
- `npm run lint`
- `npm run build`

Important files:
- `src/app/page.tsx` (homepage)
- `src/app/layout.tsx` (global wrapper + chat widget mount)
- `src/app/components/PrimaryCta.tsx` (single CTA source)
- `src/app/components/ChatWidget.tsx` (chat launcher + UI)
- `src/app/api/chat/route.ts` (server-side OpenAI call)

---

## 10) Operating Principle

If priorities get noisy, use this:

**Automagixx helps service businesses stop missing jobs by capturing calls, leads, and bookings faster, with clear ROI-oriented messaging and a single conversion path.**

