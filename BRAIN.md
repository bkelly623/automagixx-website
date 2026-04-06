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

Implemented in **`src/components/HomePage.tsx`** (client), composed of:

1. **`Navbar`** — Logo `/logo-robot.png`, Automagixx wordmark, anchors + `/missed-call-calculator`, `#book-call`, primary **Call us now** → 917.  
2. **`Hero`** — Headline, missed-call framing, bullets, **Call or Text** + **Try the Live Demo** (484), optional **Vimeo** overview (`VIMEO_VIDEO_ID` in `Hero.tsx` — replace if you want your own video).  
3. **`Services`** — Four glass cards (AI receptionist, messages, follow-up, reviews).  
4. **`Features`** — Six “why Automagixx” tiles + two highlight stats.  
5. **`Testimonials`** — Composite-style quotes (labeled as such).  
6. **`CTA`** — `#contact` band; phones + email; links to booking anchor.  
7. **`BookingSection`** — `#book-call` — **GoHighLevel iframe** + SMS disclosure + **`form_embed.js`** via `next/script` (same as historical implementation).  
8. **`Footer`** — Product / contact / legal links to real routes and `cta` phones.

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
