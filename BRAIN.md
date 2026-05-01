# Automagixx Website — Project Brain

**This file is the single source of truth for product, messaging, and implementation context for the `automagixx-website` repo.**  
If continuity is lost, read this first. **Keep it updated when behavior, copy, or conversion rules change.**

---

## 1) Repository & basics

| Item | Value |
|------|--------|
| **Repo** | `github.com:bkelly623/automagixx-website` |
| **Primary branch** | `main` |
| **Public domain** | `automagixx.com` |
| **Framework** | Next.js **15.5.x** (App Router), **React 18.3**, **Tailwind CSS 3.4** (PostCSS), **shadcn-style UI** (`src/components/ui`), **Framer Motion** |
| **Design source** | Homepage layout/visual language ported from **`bkelly623/remix-of-agency-flow-showcase`** (Vite + React Router original); this repo **stays Next.js** for APIs, booking embed, and Vercel. |
| **Homepage entry** | `src/app/page.tsx` → renders `src/components/HomePage.tsx` (client shell). |
| **Global shell** | `src/app/layout.tsx` (metadata + `Providers` + `globals.css` + `ChatWidget` on every page). |

Local commands (repo root):

- `npm run dev` — dev server  
- `npm run lint` — ESLint  
- `npm run build` — production build  

**Clone note:** The showcase repo clones cleanly over **SSH** (`git@github.com:bkelly623/remix-of-agency-flow-showcase.git`). HTTPS clone may fail without credentials if the repo is private.

---

## 2) Brand & positioning (current)

### What Automagixx is

- **Voice AI / AI receptionist** is the primary wedge; the story is a **practical suite** of AI-powered systems for **small, local service businesses**.
- **Core promise:** capture more opportunities, respond faster, follow up automatically, build trust — **premium**, high-conviction tone on a **dark, glassmorphism** marketing UI.

### Audience

Trades / home services, salons & beauty, med spa / wellness, and other local businesses where **missed calls**, **slow replies**, and **weak follow-up** cost revenue.

### Voice & copy guardrails

- **Do:** sharp, concise, professional; revenue-aware without sounding desperate on every surface.
- **Avoid:** generic AI-agency sludge, template filler, and **mixing phone numbers** (see §3).

---

## 3) Canonical phone numbers & CTAs

**All CTAs must match `src/app/components/cta.ts`.** Update **`api/chat/route.ts`** if numbers change.

| Role | Display | `tel:` href |
|------|---------|-------------|
| **Primary business** | `(917) 572-7734` | `tel:+19175727734` |
| **Live voice demo ONLY** | `(484) 673-7612` | `tel:+14846737612` |

**Never mix:** business → 917; demo → 484.

### Key exports (`cta.ts`)

- `HERO_PRIMARY_CTA_LABEL`, `DEMO_CTA_LABEL`, `BOOKING_ANCHOR` (`#book-call`), `DEMO_CARD_BUTTON_LABEL`, `CTA_MICRO`, etc.

### Legacy / secondary UI

| File | Role |
|------|------|
| `NavCtaPair.tsx` | Used inside **`ChatWidget`** (not the main marketing nav). |
| `DualCtaCards.tsx` | Available for future use; **not** on the current long-scroll homepage. |

---

## 4) Homepage structure (marketing)

**Intent:** Match the **agency-flow / Lovable** template sections and copy; **only** swap Automagixx branding, real phone/email, booking anchor, and legal URLs.

Implemented in **`src/components/HomePage.tsx`** (client):

1. **`Navbar`** — `/logo-robot.png` + **Automagixx** wordmark; links **Services / Features / Reviews / Contact** (same as template); **Book a Demo** → `BOOKING_ANCHOR` (`#book-call`).  
2. **`Hero`** — Template headline (**5-Star Google Reviews on Autopilot**), subline ending with **Automagixx**; **Test Drive Our AI** → `DEMO_PHONE_HREF` (484); **Watch Demo** opens **Vimeo** (`VIMEO_VIDEO_ID` in `Hero.tsx`); stats **500+ / 10k+ / 4.9★**; hero image + floating card as in showcase.  
3. **`Services`** — Original four cards: **AI Receptionists**, **5-Star Review Generation**, **High-End Web Design**, **Increase Lead Flow** (template copy).  
4. **`Features`** — **Why Choose Us** column + **99.9%** / **&lt;2s** boxes + six feature tiles (template copy).  
5. **`Testimonials`** — **Loved by 500+ Businesses**, trust bar; quotes reference **Automagixx** where the template said Agency Flow.  
6. **`CTA`** — **Ready to Transform Your Business?**; **Book a Free Demo** → `#book-call`; **Schedule a Call** → primary **917**; contact line **917** + **brendan@automagixx.com**.  
7. **`BookingSection`** — GHL iframe + `form_embed.js` + SMS disclosure (Automagixx-specific).  
8. **`Footer`** — Five-column layout like template; **Automagixx** + logo; **Legal** → `/privacy-policy`, `/terms-of-service`; **Resources** includes calculator, guarantee, `#book-call`.

---

## 5) Other routes (high level)

| Path | Purpose |
|------|---------|
| `/missed-call-calculator` | `MissedCallCalculator` client widget; preset map in `MissedCallCalculator.tsx`. |
| `/intake` | Post-booking form → `POST /api/intake`. |
| `/onboarding` | Optional pre-call briefing. |
| `/guarantee` | 30-day performance guarantee. |
| `/privacy-policy`, `/terms-of-service` | Legal. |
| `/consent` | LeadConnector SMS consent embed. |
| `/dashboard`, `/dashboard/analytics` | Internal; analytics may need Supabase env. |
| `/api/chat`, `/api/intake` | Server routes (unchanged contract). |

---

## 6) Chat widget

- **`src/app/components/ChatWidget.tsx`** — global; uses `PRIMARY_PHONE_DISPLAY` / `DEMO_PHONE_DISPLAY` from `cta.ts`.  
- **`POST /api/chat`** — OpenAI; numbers echoed in prompt/fallbacks.

---

## 7) Styling & components

- **Tailwind:** `tailwind.config.ts` + `postcss.config.mjs` (Tailwind 3, **not** Tailwind 4 `@import "tailwindcss"`).  
- **Globals:** `src/app/globals.css` — design tokens, glass/gradient utilities, scrollbar, missed-calculator keyframes.  
- **Path alias:** `@/*` → `./src/*` (`tsconfig.json`).  
- **shadcn UI:** `src/components/ui/*` — **`chart.tsx` removed** (conflicted with Recharts 3; dashboard uses Recharts directly). **`NavLink.tsx` removed** (was React Router–only).

---

## 8) Deployment (Vercel)

- Production secrets in Vercel env.  
- Confirm deployment SHA vs `main` when debugging stale UI.

---

## 9) Operating principle (one line)

**Automagixx sells practical AI for local businesses on a Next.js app: marketing UI from the agency-flow showcase pattern; primary conversion **call/text 917**, live demo **484**, optional book **`#book-call`**; legal/SMS via `/privacy-policy` and `/terms-of-service`.**

---

## 10) Recent ground truth

- **Agency-flow integration:** Ported showcase components into `src/components/*`, rebranded to Automagixx, preserved `cta.ts`, booking iframe + script, calculator, APIs, chat, legal routes.  
- **Stack shift:** Tailwind **4 → 3**, React **19 → 18.3** for Radix/shadcn compatibility.  

---

*Last brain refresh: aligned with post-showcase-merge `page.tsx`, `HomePage.tsx`, `BookingSection.tsx`, `cta.ts`, `tailwind.config.ts`, `globals.css`.*

## Brand direction update — premium over theatrical

Automagixx should keep the memorable name and subtle “it works like magic” feeling, but buyer-facing copy should avoid fantasy/theatrical language. The brand should feel powerful, premium, practical, and operationally credible.

Current rule:

> Memorable brand, ruthless business outcomes.

Use terms like:
- AI employees
- operating system
- growth lab
- revenue recovery
- lead rescue
- workflow transformation
- opportunity audit
- proof, demos, ROI

Avoid overusing terms like:
- spell
- wizard
- casting
- apprentice
- familiar
- fantasy-world language

The `/spellbook` route may remain technically for now, but navigation/copy should present it as the Automagixx Growth Lab.
