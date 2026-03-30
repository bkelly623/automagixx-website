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
- Local phone: `484-673-7612`
- Live demo line: `484-992-9411` (**Test the Demo** — ~30 seconds)
- Positioning: Philadelphia area / regional trust

---

## 3) Website Conversion Rules (Canonical)

### Single CTA System (Landing Conversion CTA)
Canonical strings and `tel:` hrefs live in **`src/app/components/cta.ts`**.

- **Primary conversion:** **`Call Us Now`** → `tel:4846737612`
- **Micro line (guarantee):** `Includes a 30-day performance guarantee.` → `/guarantee` (under the primary button on **`HeroCallCard`**, **`DualCtaCards`**, and **`NavCtaPair`**).
- **Secondary conversion:** **`Test the Demo`** → `tel:4849929411`
- **Demo subtext** (under the demo button only): `Hear how it works in about 30 seconds`. **No** extra standalone `484-992-9411` link row under demo cards — the demo **button** is the tap target.
- **`DualCtaCards` on the homepage:** rendered **only** after the **funnel / missed-revenue block**, after **How It Works**, and in the **final gradient CTA** — not after every section.
- **Optional scheduling:** in-page **GoHighLevel** calendar at **`#book-call`** (still not the primary CTA).
- Embed details:
  - Section id: `book-call` (after main content flow; copy still **prefers call + demo** before calendar).
  - Headline (current): `Optional: schedule a time online` with body that links primary line, **`Test the Demo`**, and `DEMO_SUBTEXT` before the iframe.
  - Iframe: `api.leadconnectorhq.com/widget/booking/deaNfs7Dq6XtD6FzYMR8`
  - Helper script: `link.msgsndr.com/js/form_embed.js` (loaded via `next/script`, `afterInteractive`).
  - **Layout:** block iframe with **responsive `min-h`** (`720px` → `900px` by breakpoint), not absolute positioning — avoids clipping the calendar; no `scrolling="no"`.
- **Hero:** two-column grid, **`items-center`** on large screens; **left column** is **left-aligned** — headline, subhead, then **`HeroCallCard`** (primary + guarantee link). **Right column:** “Live demo” card — supporting headline/body, then **`Test the Demo`**, then **`DEMO_SUBTEXT`** (no duplicate phone row).
- **Final CTA band:** gradient blue; **`DualCtaCards variant="onBlue"`** (white / outline treatments for readability).
- **Header nav:** logo + links **`hidden md:flex`**; robot asset in a **white rounded plate + ring** (same idea in **footer** on dark background) to reduce PNG transparency “checkerboard.” CTA cluster uses **`NavCtaPair`** with **`compact`** on small widths; **`flex-row flex-nowrap`** so **Call** + **Test the Demo** stay **side-by-side** on mobile. **`min-h-24`** + **`py-2 md:py-0`** for vertical balance.

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
- Hero:
  - Headline: `Stop Missing Calls.` / `Start Capturing More Jobs.`
  - Contractor-friendly subhead; primary path is **`HeroCallCard`** (**`Call Us Now`** + guarantee link) — no separate “or call us” line in the hero stack.
  - Right column: **Live demo** card — e.g. `Hear it on your phone` + short supporting line, then **`Test the Demo`** (`tel:4849929411`), then **`DEMO_SUBTEXT`** (no extra phone link under the card).
- **Second section (funnel):** missed-revenue framing — eyebrow `Where revenue leaks`, headline about **competitor** booking missed jobs (styled emphasis), stat copy (`10–30%`), **simple example** revenue math card, then **`DualCtaCards`**.
- Core service section uses:
  - title: `Missed Revenue Recovery System`
  - required bullet list (calls answered, lead capture, missed-call text-back, booking, no lost opportunities)
- How It Works is a 5-step flow (sentence case as on page):
  1. Customer calls your business
  2. We answer instantly — even after hours
  3. We capture their information and qualify the job
  4. We book the job or follow up automatically
  5. You get the job you would have missed
- **Pricing / guarantee:** homepage no longer carries a dedicated **$397/month** price-anchor block; the **30-day performance guarantee** remains **`CTA_MICRO`** on CTAs and is linked from **footer** (`/guarantee`).
- **Book a call** (`#book-call`): embedded GHL calendar framed as **optional** scheduling; copy stresses **call first**, demo second, calendar if preferred; post-scheduling note about optional prep link (not “must use form” as primary path).
- **Booking compliance disclosure** (under GHL embed): exact SMS consent language with links to `/privacy-policy` (Privacy Policy) and `/terms` (Terms of Service):
  - `By submitting this form, you agree to receive SMS messages from Automagixx related to your inquiry, including appointment reminders and service updates. Message frequency varies. Message & data rates may apply. Reply STOP to opt out or HELP for help. See Privacy Policy and Terms of Service.`
- Outcomes section:
  - `What Happens When You Stop Missing Calls`
  - bullet outcomes (no fake percentages in that section)
- Industry cards updated to exact contractor-focused industries/copy.
- Secondary services section added with the 5 specified items.
- Client dashboard section headline: `See Exactly How Much Revenue You're Recovering`; sample metrics:
  - Calls Answered: 87
  - Jobs Booked: 26
  - Estimated Revenue Captured: $13,400
  - Response Time: Instant
- Testimonials replaced with realistic entries (and old `Mike R.` removed).
- Footer contact email updated to:
  - `brendan@automagixx.com`

### CTA implementation (no `PrimaryCta.tsx`)
- **`src/app/components/cta.ts`:** single source for **`PRIMARY_PHONE_HREF`**, **`DEMO_PHONE_HREF`**, **`CTA_LABEL`**, **`DEMO_LABEL`**, **`CTA_MICRO`**, **`DEMO_SUBTEXT`**, **`BOOKING_ANCHOR` / `BOOKING_URL`**.
- **`NavCtaPair`:** paired CTAs (call + demo + micro/subtext) for **fixed nav** and **`ChatWidget`** drawer (**`compact`** on small widths).
- **`HeroCallCard`:** primary call card for **hero left column** (primary + guarantee link).
- **`DualCtaCards`:** two-card grid (**Talk to us** / **Try it live**); **`variant="onBlue"`** for the final section.

### Intake (`/intake`) — Post-booking prep
- **Purpose:** business context + missed-revenue signals for the call — **not** duplicate contact capture (name / email / phone removed; those come from booking).
- **Route:** `src/app/intake/page.tsx` (client form) → **`POST /api/intake`** → **FormSubmit** (`formsubmit.co/ajax`) → **`brendan@automagixx.com`**, subject `Automagixx Intake Form Submission`.
- **Header:** title `Quick Questions Before Your Call`; subtext `Takes 60 seconds. Helps me see where you're likely losing jobs.`
- **Fields:** business name; business type (dropdown + **Other** text); calls per day (`0–10`, `10–30`, `30+`); what happens when a call is missed; average job value bands; how soon they want to fix it; optional notes textarea.
- **Success copy:** `Got it. Looking forward to speaking with you.`
- **Success state (current):**
  - Headline: `You're all set.`
  - Body: `I'll review this before our call so we can get straight to what matters.`
  - Secondary line invites optional pre-call briefing via button.
  - Button: `See what we'll go over →` → `/onboarding` (no auto-redirect).
- **Mobile UX:** shared input classes use **darker placeholders on small screens** (`placeholder:text-gray-700 sm:placeholder:text-gray-500`), **`text-[16px]` on mobile inputs** (readability / iOS), selects use **`invalid:text-gray-800`** for empty required state.

### Onboarding Briefing Page (`/onboarding`)
- Purpose: optional pre-call briefing page (not a sales page; no extra forms).
- Content sections:
  - `Before the Call` eyebrow
  - `What We'll Show You On The Call` headline + intro
  - `On the call, we'll break down:` bullet list
  - `What to expect` section (explicitly not high-pressure)
  - `Before we talk` prep bullet list
  - Closing line: `I'll call you directly at the scheduled time.`
- Routing rules:
  - Linked from `/intake` success state button.
  - Not added to top navigation.
  - Not promoted as a major homepage CTA.

### Legal Pages / Compliance
- New routes:
  - `/privacy-policy` (`src/app/privacy-policy/page.tsx`)
  - `/terms` (`src/app/terms/page.tsx`)
- Homepage booking section includes SMS compliance disclosure text beneath the calendar.
- Disclosure links:
  - `Privacy Policy` → `/privacy-policy`
  - `Terms of Service` → `/terms`
- Footer includes links to `/privacy-policy` and `/terms`.
- `Privacy Policy` page includes: Information We Collect, How We Use Information (appointments/services/SMS+email communications), SMS Communications (consent language), `No Sharing Clause (CRITICAL)`, Data Security, User Rights, Cookies & Tracking, and Contact (`brendan@automagixx.com`).
- `Terms of Service` page includes: Services, SMS Program, Opt-Out (STOP) and Help (HELP), Support contact, No Guarantees, Carrier Disclaimer, Age Restriction (18+), and Privacy (governed by Privacy Policy).

---

## 5) Chatbot System (Current Architecture)

### Global Widget
- Global render in `src/app/layout.tsx` via `ChatWidget`.
- Widget component: `src/app/components/ChatWidget.tsx`
- API route: `src/app/api/chat/route.ts`

### Bot Behavior
- Uses OpenAI chat completions endpoint.
- Prompt is contractor/profit-recovery oriented and **call-first**.
- Explicitly blocks technical/AI-jargon messaging in assistant tone.
- Priority order in system prompt: **(1)** main phone `(484) 673-7612`, **(2)** demo line `484-992-9411`, **(3)** optional online scheduling section `/#book-call` only if the visitor insists.

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

Recent commits (newest first):
- `88c912e` Homepage CTAs: hero balance, **Test the Demo** copy, fewer **`DualCtaCards`** placements, **`NavCtaPair`** mobile row layout, logo plate, funnel headline polish.
- `6d97a42` Refine hero layout, **`DualCtaCards`**, robot logo, funnel section order.
- `ec8f047` Update BRAIN for phone-first CTAs and demo line.
- `d351000` Prioritize phone and demo CTAs over embedded booking.
- `85ff1a5` Expand privacy/terms copy and update booking SMS disclosure text.
- `33074d3` Add onboarding flow and legal compliance pages.
- `23c8b03` Streamline intake form fields and improve mobile placeholder contrast (`/intake` + `api/intake`).
- `23929b9` Center nav CTA on mobile; fix GHL booking iframe height and clipping.
- `3f2b521` Nav: hide logo on mobile, optional guarantee line in nav, CTA alignment tweaks.
- `6ba1f22` Add GoHighLevel `#book-call` section, anchor CTAs, update BRAIN.
- `160301a` Update pricing copy and 30-day performance guarantee wording (historical price anchor + CTA micro line).
- `0c3261c` Refine conversion copy and add guarantee/intake support (broader homepage/CTA/guarantee/intake work).
- `30ddc8a` Fix chat API key fallback and normalize widget bubble launcher
- `577012e` Refine chat bubble launcher styling and text contrast
- `5077bbd` Polish chat launcher visibility and update contact email
- `7a556fa` Refocus site around contractor lead recovery funnel
- `f2e6fa5` Upgrade Next.js to 15.5.9 for security fixes
- `ef94fca` Refocus Automagixx site on service-business revenue recovery

**Cumulative since prior BRAIN-era baseline (`30ddc8a` / Calendly era):**
- **Conversion:** Primary → **`tel:4846737612`** (`Call Us Now`); secondary → **`Test the Demo`** / **`tel:4849929411`**; optional **GoHighLevel** calendar at `#book-call`.
- **Nav:** Mobile: no logo cluster; **`NavCtaPair`** centered; **guarantee micro-line** under primary + **demo** stack (**side-by-side** with **`Test the Demo`**). Desktop: logo plate + links + CTAs.
- **GHL iframe:** Tall **min-height** block iframe (no absolute fill) so the calendar is not cut off.
- **Intake:** Short post-booking form (no duplicate contact fields); new question set; email payload fields aligned; mobile-friendly placeholders.
- **Post-booking flow:** `/intake` success state now offers optional `/onboarding` briefing (no redirect).
- **Compliance/legal:** Booking-section SMS disclosure updated with full consent/disclosure language; `/privacy-policy` + `/terms` pages live and linked from disclosure + footer (including critical no-sharing clause and SMS opt-out/help clauses).

---

## 8) Known Open Items / Next Pass Candidates

These are not blockers, but should be evaluated deliberately:

0. **`npm run build` / prerender:** `/dashboard/analytics` currently requires **`supabaseUrl`** (and related Supabase env). Local/production builds fail static generation for that route until env is configured or the page is made dynamic/guarded.
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
- `src/app/components/cta.ts` (CTA labels + phone hrefs)
- `src/app/components/NavCtaPair.tsx` / `DualCtaCards.tsx` / `HeroCallCard.tsx`
- `src/app/components/ChatWidget.tsx` (chat launcher + UI)
- `src/app/api/chat/route.ts` (server-side OpenAI call)
- `src/app/intake/page.tsx` (post-booking intake form)
- `src/app/api/intake/route.ts` (intake → FormSubmit email)
- `src/app/onboarding/page.tsx` (optional pre-call briefing)
- `src/app/privacy-policy/page.tsx` (privacy policy)
- `src/app/terms/page.tsx` (terms of service)

---

## 10) Operating Principle

If priorities get noisy, use this:

**Automagixx helps service businesses stop missing jobs by capturing calls, leads, and bookings faster, with clear ROI-oriented messaging — call `(484) 673-7612` first (or **Test the Demo** at `484-992-9411`), use optional `#book-call` scheduling only if preferred; `/intake` + `/onboarding` support booked conversations; compliance reinforced with booking SMS disclosure plus `/privacy-policy` and `/terms`.**

