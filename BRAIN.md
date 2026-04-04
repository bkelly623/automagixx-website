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
| **Framework** | Next.js **15.5.x** (App Router), React 19, Tailwind 4 |
| **Homepage** | `src/app/page.tsx` |
| **Global shell** | `src/app/layout.tsx` (metadata + `ChatWidget` on every page) |

Local commands (repo root):

- `npm run dev` — dev server  
- `npm run lint` — ESLint  
- `npm run build` — production build  

---

## 2) Brand & positioning (current)

### What Automagixx is

- **Not** “just an AI receptionist” on the website: **voice AI / AI receptionist is the primary wedge**, but the story is a **practical suite of AI-powered systems** for **small, local service businesses**.
- **Core promise:** help businesses **capture more opportunities**, **respond faster**, **follow up automatically**, and **build trust** — with a **premium**, **high-conviction** tone.
- **Theme:** moderate **“magic”** branding — *quietly powerful*, *effortless*, *it works like magic* — **not** cheesy, childish, or gimmicky.

### Audience (homepage reflects this)

Especially: **trades / home services**, **salons & beauty**, **med spa / wellness**, and **other local service businesses** where **missed calls**, **slow replies**, and **weak follow-up** cost revenue.

### Voice & copy guardrails

- **Do:** sharp, concise, exciting-but-professional, useful, confidence-building.
- **Avoid:** generic AI-agency sludge (“cutting-edge solutions,” “leverage technology,” “streamline operations”), boring template filler, and **mixing phone numbers** (see §3).

---

## 3) Canonical phone numbers & CTAs

**All homepage and shared CTA behavior must match `src/app/components/cta.ts`.**  
Do not hardcode alternate numbers in UI without updating this file and this brain.

| Role | Display | `tel:` href | Usage |
|------|---------|-------------|--------|
| **Primary business** (call / text us, nav “Call Us Now”, main conversions) | `(917) 572-7734` | `tel:+19175727734` | Every **business** CTA |
| **Live voice demo ONLY** | `(484) 673-7612` | `tel:+14846737612` | Every **demo** CTA |

**Never mix:** business actions → 917; demo/hear-the-AI → 484.

### Exported labels (`cta.ts`)

- `CTA_LABEL_NAV` — **Call Us Now** (header)  
- `HERO_PRIMARY_CTA_LABEL` — **Call or Text Us**  
- `DEMO_CTA_LABEL` — **Try the Live Demo**  
- `DEMO_CARD_BUTTON_LABEL` — **Try the Demo**  
- `CTA_MICRO` — **Includes a 30-day performance guarantee.** → links `/guarantee` (where used)  
- `DEMO_SUBTEXT` — **Call and hear the system — about 30 seconds.**  
- `BOOKING_ANCHOR` / `BOOKING_URL` — **`#book-call`** (optional scheduling; not primary conversion)

### Shared components

| Component | Role |
|-----------|------|
| `NavCtaPair.tsx` | Header: primary **Call Us Now** → 917 (optional demo stack when `showDemo`) |
| `DualCtaCards.tsx` | Paired **business** + **demo** cards; `variant="onBlue"` on final dark CTA band; shows both numbers clearly |
| `cta.ts` | Single source for hrefs, display strings, labels |

**Note:** There is **no** `HeroCallCard` in this codebase; hero CTAs are inline in `page.tsx`.

### Chat API alignment

`src/app/api/chat/route.ts` embeds the same two numbers in the system prompt and fallbacks. **Update both `cta.ts` and `route.ts` if numbers ever change** (or centralize further).

---

## 4) Homepage structure (`src/app/page.tsx`)

Long-scroll, **sticky header**, max content width **~1200px** (`shell`), light-first UI with **dark navy CTA bands**. Section **ids** match nav anchors.

**Order:**

1. **Header** — Logo (`/logo-robot.png`) + wordmark; nav (lg+): Services, How It Works, The Magic, Outcomes, Industries, Demo, Contact; **Call Us Now** → 917.  
2. **Hero** — Two columns: headline (*AI That Captures Every Opportunity — Like Magic.*), punchy subcopy, **Call or Text Us** + **Try the Live Demo**, lines for both numbers; right **featured live demo card** (eyebrow, “Hear It Work,” CTA → 484).  
3. **Problem / opportunity gap** — `#problem` — centered; **THE OPPORTUNITY GAP**; four pain cards.  
4. **Services** — `#services` — six explicit services (AI Receptionist through Reviews & Reputation) + optional layering line.  
5. **How it works** — `#how-it-works` — four steps.  
6. **The Magic** — `#magic` — emotional / brand section; centered.  
7. **Outcomes** — `#outcomes` — six outcome cards (2×3).  
8. **Industries** — `#industries` — eight compact tiles.  
9. **Demo** — `#demo` — centered proof block; demo → 484.  
10. **Strong CTA** — `#contact` — dark band; dual buttons (917 + 484).  
11. **Calendar** — `#book-call` — GHL iframe + SMS disclosure + `form_embed.js` script; copy stresses **call/text 917 first**, calendar optional.  
12. **Final CTA** — dark gradient band + `DualCtaCards variant="onBlue"`.  
13. **Footer** — company line, 917, demo 484, `brendan@automagixx.com`, Privacy, Terms, Guarantee.

### GoHighLevel booking embed (do not break)

- **Iframe src:** `https://api.leadconnectorhq.com/widget/booking/deaNfs7Dq6XtD6FzYMR8`  
- **Script:** `https://link.msgsndr.com/js/form_embed.js` (`next/script`, `afterInteractive`)  
- **Disclosure** under iframe: SMS consent text with links to **`/privacy-policy`** and **`/terms-of-service`**.

---

## 5) Other routes (high level)

| Path | Purpose |
|------|---------|
| `/intake` | Post-booking context form → `POST /api/intake` → FormSubmit → `brendan@automagixx.com` |
| `/onboarding` | Optional pre-call briefing; linked from intake success, not main nav |
| `/guarantee` | 30-day performance guarantee |
| `/privacy-policy` | Privacy policy |
| `/terms-of-service` | Terms of service (canonical legal URL for footer + calendar disclosure) |
| `/terms` | Redirects to `/terms-of-service` |
| `/consent` | LeadConnector SMS consent embed |
| `/dashboard`, `/dashboard/analytics` | Internal/dashboard (analytics may need Supabase env for build) |
| `/test-chatbot` | Chatbot test page |

---

## 6) Chat widget

- **File:** `src/app/components/ChatWidget.tsx`  
- **Mounted:** `layout.tsx` (global)  
- **API:** `POST /api/chat` → OpenAI `gpt-4o-mini`  
- **Env keys tried:** `OPENAI_API_KEY`, `OPENAI_KEY`, `EXPO_PUBLIC_OPENAI_API_KEY`, `NEXT_PUBLIC_OPENAI_API_KEY`  
- Opening copy uses **`PRIMARY_PHONE_DISPLAY`** / **`DEMO_PHONE_DISPLAY`** from `cta.ts`.

---

## 7) Deployment (Vercel)

- `.env*` is gitignored; production secrets live in **Vercel project env**.  
- **Redeploy** can pin an **old commit SHA** — verify the live deployment matches **latest `main`** when debugging “stale” UI.  
- Confirm **correct Git repo/branch** and **domain → project** mapping.

---

## 8) Key files (quick index)

- `src/app/page.tsx` — homepage  
- `src/app/layout.tsx` — root layout, metadata, `ChatWidget`  
- `src/app/globals.css` — global styles (e.g. smooth scroll, selection)  
- `src/app/components/cta.ts` — **phone + CTA constants**  
- `src/app/components/NavCtaPair.tsx`, `DualCtaCards.tsx`  
- `src/app/components/ChatWidget.tsx`  
- `src/app/api/chat/route.ts`  
- `src/app/intake/page.tsx`, `src/app/api/intake/route.ts`  
- `src/app/onboarding/page.tsx`  
- `public/logo-robot.png` — brand mark  

---

## 9) Known follow-ups (non-blocking)

- **`/dashboard/analytics`:** static generation may require **Supabase** env vars; local/production builds can fail that route until env is set or the page is guarded/dynamic.  
- Whenever **copy, sections, or numbers** change on the homepage, **update this BRAIN** in the same PR.

---

## 10) Operating principle (one line)

**Automagixx sells practical AI systems for local businesses—lead with voice AI, show the full capture/follow-up/reputation stack—primary conversion **call/text `(917) 572-7734`**, live demo **`(484) 673-7612`**, optional book at `#book-call`; keep the magic theme premium, not gimmicky; legal and SMS compliance via `/privacy-policy` and `/terms-of-service`.**

---

## 11) Recent ground truth (git)

Newest first (verify with `git log`):

- `ab2d5fa` — Homepage: premium long-scroll, six services, industries, strict 917/484 split.  
- `87c34ab` — Robot logo in nav/footer, layout/CTA polish.  
- Earlier: legal copy, GHL embed, consent page, CTA/chat alignment.

---

*Last brain refresh: aligned with `cta.ts`, `page.tsx`, `api/chat/route.ts`, and shared CTAs.*
