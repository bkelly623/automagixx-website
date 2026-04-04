import Script from "next/script";
import {
  Sparkles,
  Phone,
  MessageSquare,
  RefreshCw,
  Star,
  CheckCircle2,
  Wand2,
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

const sectionEyebrow = "text-[12px] font-semibold uppercase tracking-[0.2em] text-blue-600/90 mb-4";
const cardBase =
  "rounded-3xl border border-gray-200/80 bg-white p-8 shadow-sm shadow-gray-200/40 hover:shadow-md hover:border-gray-300/80 transition-all duration-300";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans antialiased">
      <nav className="fixed top-0 w-full z-50 border-b border-gray-200/80 bg-white/90 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex items-center justify-between gap-6 min-h-[4.5rem]">
            <a href="#" className="flex items-center gap-2 shrink-0 group">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white text-[13px] font-bold shadow-sm group-hover:shadow-md transition-shadow">
                A
              </span>
              <span className="text-[17px] font-semibold tracking-tight bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Automagixx
              </span>
            </a>
            <div className="hidden md:flex items-center gap-8 text-[14px] font-medium text-gray-600">
              <a href="#system" className="hover:text-gray-900 transition-colors">
                System
              </a>
              <a href="#how-it-works" className="hover:text-gray-900 transition-colors">
                How it works
              </a>
              <a href="#magic" className="hover:text-gray-900 transition-colors">
                The magic
              </a>
              <a href="#outcomes" className="hover:text-gray-900 transition-colors">
                Outcomes
              </a>
              <a href="#demo" className="hover:text-gray-900 transition-colors">
                Demo
              </a>
              <a href="#contact" className="hover:text-gray-900 transition-colors">
                Contact
              </a>
            </div>
            <div className="shrink-0">
              <NavCtaPair compact showDemo={false} showGuarantee={false} primaryLabel="nav" />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 px-5 sm:px-8 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(59,130,246,0.12),transparent)]" />
        <div className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-indigo-50/80 to-transparent rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <div className="space-y-8">
              <h1 className="text-[2.5rem] sm:text-5xl lg:text-[3.5rem] font-semibold tracking-tight leading-[1.08] text-gray-900">
                AI That Captures Every Opportunity —{" "}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Like Magic.
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-xl">
                Calls, texts, and messages handled instantly. So every inquiry turns into a real
                booking — automatically.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                <a
                  href={PRIMARY_PHONE_HREF}
                  className="inline-flex items-center justify-center rounded-full bg-blue-600 text-white px-8 py-4 text-[15px] font-semibold tracking-tight shadow-md hover:bg-blue-700 hover:shadow-lg transition-all"
                >
                  {HERO_PRIMARY_CTA_LABEL}
                </a>
                <a
                  href={DEMO_PHONE_HREF}
                  className="inline-flex items-center justify-center rounded-full border-2 border-gray-200 bg-white px-8 py-4 text-[15px] font-semibold text-gray-900 tracking-tight hover:border-blue-200 hover:bg-blue-50/50 transition-all"
                >
                  {DEMO_CTA_LABEL}
                </a>
              </div>
              <p className="text-[14px] text-gray-500">
                <span className="font-medium text-gray-700">{PRIMARY_PHONE_DISPLAY}</span>
                <span className="mx-2">·</span>
                <span>Demo: {DEMO_PHONE_DISPLAY}</span>
              </p>
            </div>

            <div className="relative lg:pl-4">
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-[2rem] blur-2xl" />
              <div className="relative rounded-[1.75rem] border border-gray-200/80 bg-white shadow-xl shadow-gray-200/50 p-8 sm:p-10">
                <p className="text-blue-600 font-semibold text-[13px] tracking-wide uppercase mb-2">
                  Hear It Live
                </p>
                <p className="text-gray-600 text-[17px] leading-relaxed">
                  Call and experience it yourself — no pitch, just the system working.
                </p>
                <a
                  href={DEMO_PHONE_HREF}
                  className="mt-8 inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-blue-600 text-white px-8 py-3.5 text-[15px] font-semibold hover:bg-blue-700 transition-colors"
                >
                  {DEMO_CARD_BUTTON_LABEL}
                </a>
                <p className="mt-6 text-center text-[18px] font-semibold text-gray-900 tracking-tight">
                  {DEMO_PHONE_DISPLAY}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section id="problem" className="py-24 px-5 sm:px-8 bg-gray-50/70 border-y border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <p className={sectionEyebrow}>The gap</p>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold tracking-tight text-gray-900 leading-tight">
            Most Businesses Are Losing Opportunities Every Day
          </h2>
          <p className="mt-8 text-lg sm:text-xl text-gray-600 leading-relaxed">
            Missed calls. Slow replies. No follow-up.
            <br />
            <span className="text-gray-900 font-medium">
              It&apos;s not a traffic problem — it&apos;s a capture problem.
            </span>
          </p>
        </div>
      </section>

      {/* System */}
      <section id="system" className="py-24 px-5 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-16">
            <p className={sectionEyebrow}>What you get</p>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold tracking-tight text-gray-900 leading-tight">
              We Don&apos;t Add Tools. We Install a System.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            <div className={cardBase}>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 mb-6">
                <Phone className="w-6 h-6" strokeWidth={1.75} />
              </div>
              <h3 className="text-xl font-semibold tracking-tight mb-3">Never Miss a Call</h3>
              <p className="text-gray-600 leading-relaxed">
                AI answers instantly and books appointments automatically.
              </p>
            </div>
            <div className={cardBase}>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 mb-6">
                <MessageSquare className="w-6 h-6" strokeWidth={1.75} />
              </div>
              <h3 className="text-xl font-semibold tracking-tight mb-3">Respond Instantly Everywhere</h3>
              <p className="text-gray-600 leading-relaxed">
                Texts, DMs, and website messages handled in seconds.
              </p>
            </div>
            <div className={cardBase}>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-50 text-violet-600 mb-6">
                <RefreshCw className="w-6 h-6" strokeWidth={1.75} />
              </div>
              <h3 className="text-xl font-semibold tracking-tight mb-3">Follow Up Automatically</h3>
              <p className="text-gray-600 leading-relaxed">
                Leads are tracked, reminded, and reactivated without effort.
              </p>
            </div>
            <div className={cardBase}>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-600 mb-6">
                <Star className="w-6 h-6" strokeWidth={1.75} />
              </div>
              <h3 className="text-xl font-semibold tracking-tight mb-3">Build Trust on Autopilot</h3>
              <p className="text-gray-600 leading-relaxed">
                More reviews. Better visibility. Stronger reputation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-24 px-5 sm:px-8 bg-gradient-to-b from-gray-50/50 to-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-14">
            <p className={sectionEyebrow}>Simple flow</p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">
              How It Works
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Inbound hits",
                body: "A call, text, or message comes in — day or night.",
              },
              {
                step: "02",
                title: "Instant capture",
                body: "The system responds, qualifies, and books when it should.",
              },
              {
                step: "03",
                title: "You stay focused",
                body: "Appointments land on your calendar without the back-and-forth.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-3xl border border-gray-200/80 bg-white p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-[13px] font-bold text-blue-600 tracking-widest">{item.step}</span>
                <h3 className="text-lg font-semibold mt-4 mb-2 tracking-tight">{item.title}</h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Magic */}
      <section id="magic" className="py-24 px-5 sm:px-8 relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(99,102,241,0.08),transparent_50%)]" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center justify-center gap-2 rounded-full border border-indigo-200/60 bg-indigo-50/50 px-4 py-2 mb-8">
            <Wand2 className="w-4 h-4 text-indigo-600" />
            <span className="text-[13px] font-semibold text-indigo-800 tracking-tight">The feeling</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold tracking-tight text-gray-900 leading-tight">
            This Is What AI Should Feel Like
          </h2>
          <p className="mt-8 text-lg sm:text-xl text-gray-600 leading-relaxed space-y-4">
            <span className="block">
              No complexity. No dashboards to manage. Just results happening automatically in the
              background.
            </span>
            <span className="block text-gray-900 font-medium">
              It works quietly. Consistently. Reliably.
            </span>
            <span className="block text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent pt-2">
              Like magic.
            </span>
          </p>
        </div>
      </section>

      {/* Outcomes */}
      <section id="outcomes" className="py-24 px-5 sm:px-8 bg-gray-50/70 border-y border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-12">
            <p className={sectionEyebrow}>What changes</p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">
              What You Notice First
            </h2>
          </div>
          <ul className="grid sm:grid-cols-2 gap-4 max-w-4xl">
            {[
              "More appointments booked without adding headcount",
              "Faster replies on every channel you actually use",
              "Fewer opportunities slipping through the cracks",
              "Less time on admin — more time on the work that pays",
            ].map((line) => (
              <li
                key={line}
                className="flex items-start gap-3 rounded-2xl border border-gray-200/80 bg-white px-5 py-4 shadow-sm"
              >
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span className="text-[15px] text-gray-700 leading-snug">{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Demo */}
      <section id="demo" className="py-24 px-5 sm:px-8">
        <div className="max-w-4xl mx-auto text-center rounded-[2rem] border border-gray-200/80 bg-gradient-to-br from-white to-blue-50/40 p-10 sm:p-16 shadow-lg shadow-blue-100/30">
          <Sparkles className="w-10 h-10 text-blue-600 mx-auto mb-6" strokeWidth={1.5} />
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">
            Try It Yourself
          </h2>
          <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
            Call the system. See how it handles a real conversation.
          </p>
          <a
            href={DEMO_PHONE_HREF}
            className="mt-10 inline-flex items-center justify-center rounded-full bg-blue-600 text-white px-10 py-4 text-[16px] font-semibold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
          >
            Try the Demo → {DEMO_PHONE_DISPLAY}
          </a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-5 sm:px-8 bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Want This Set Up For Your Business?
          </h2>
          <a
            href={PRIMARY_PHONE_HREF}
            className="mt-10 inline-flex items-center justify-center rounded-full bg-white text-gray-900 px-10 py-4 text-[16px] font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            {HERO_PRIMARY_CTA_LABEL} → {PRIMARY_PHONE_DISPLAY}
          </a>
        </div>
      </section>

      {/* Calendar */}
      <section
        id="book-call"
        className="scroll-mt-28 py-24 px-5 sm:px-8 bg-gray-50 border-y border-gray-200"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 text-center tracking-tight mb-3">
            Prefer to pick a time?
          </h2>
          <p className="text-center text-gray-600 text-[15px] max-w-lg mx-auto mb-10 leading-relaxed">
            Optional scheduling — call or text{" "}
            <a href={PRIMARY_PHONE_HREF} className="text-blue-700 font-medium underline underline-offset-2">
              {PRIMARY_PHONE_DISPLAY}
            </a>{" "}
            first for the fastest path.
          </p>
          <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
            <iframe
              src="https://api.leadconnectorhq.com/widget/booking/deaNfs7Dq6XtD6FzYMR8"
              id="deaNfs7Dq6XtD6FzYMR8_1775089987086"
              className="block w-full min-h-[720px] sm:min-h-[820px] lg:min-h-[900px] border-0 overflow-hidden"
              style={{ width: "100%", border: "none", overflow: "hidden" }}
              scrolling="no"
              title="Schedule time with Automagixx"
            />
          </div>
          <p className="text-[12px] text-gray-500 text-center mt-6 tracking-tight max-w-3xl mx-auto leading-relaxed">
            By submitting this form, you agree to receive SMS messages from Automagixx related to
            your inquiry, including appointment reminders and service updates. Message frequency
            varies. Message &amp; data rates may apply. Reply STOP to opt out or HELP for help. See{" "}
            <a href="/privacy-policy" className="underline underline-offset-2 hover:text-gray-700">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="/terms-of-service" className="underline underline-offset-2 hover:text-gray-700">
              Terms of Service
            </a>
            .
          </p>
        </div>
        <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden py-24 px-5 sm:px-8 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 80% 50% at 20% 0%, rgba(255,255,255,0.15), transparent 50%)",
          }}
        />
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
            Ready to capture every opportunity?
          </h2>
          <p className="text-lg text-white/90 mb-12 max-w-xl mx-auto leading-relaxed">
            One call. One demo. Then the system does the heavy lifting.
          </p>
          <DualCtaCards variant="onBlue" />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-16 px-5 sm:px-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="text-center sm:text-left">
            <p className="text-white font-semibold tracking-tight">Automagixx</p>
            <p className="text-[14px] mt-2 max-w-xs leading-relaxed">
              A system that captures and converts every opportunity — automatically.
            </p>
          </div>
          <div className="flex flex-col sm:items-end gap-2 text-[14px]">
            <a href={PRIMARY_PHONE_HREF} className="hover:text-white transition-colors">
              {PRIMARY_PHONE_DISPLAY}
            </a>
            <a href={DEMO_PHONE_HREF} className="hover:text-white transition-colors">
              Demo: {DEMO_PHONE_DISPLAY}
            </a>
            <a href="mailto:brendan@automagixx.com" className="hover:text-white transition-colors">
              brendan@automagixx.com
            </a>
            <div className="flex flex-wrap gap-4 justify-center sm:justify-end mt-2">
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
