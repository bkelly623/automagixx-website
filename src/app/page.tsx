import Image from "next/image";
import Script from "next/script";
import {
  Zap,
  Home as HomeIcon,
  Wrench,
  Calendar,
  PhoneCall,
  MessageSquare,
  BarChart3,
  DollarSign,
  Layers,
  CheckCircle2,
  DoorClosed,
  KeyRound,
  Bug,
} from "lucide-react";
import NavCtaPair from "./components/NavCtaPair";
import DualCtaCards from "./components/DualCtaCards";
import HeroCallCard from "./components/HeroCallCard";
import { DEMO_LABEL, DEMO_SUBTEXT, DEMO_PHONE_HREF, PRIMARY_PHONE_HREF } from "./components/cta";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation with MASSIVE Logo and Inter Font */}
      <nav className="fixed top-0 w-full bg-white border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-center md:justify-between gap-4 min-h-24 py-2 md:py-0">
            <div className="hidden md:flex items-center gap-12 min-w-0">
              <span className="inline-flex rounded-2xl bg-white p-1.5 shadow-sm ring-1 ring-gray-200/90">
                <Image
                  src="/logo-robot.png"
                  alt="Automagixx"
                  width={160}
                  height={160}
                  className="w-auto h-20 sm:h-24 block"
                  priority
                />
              </span>
              <div className="hidden lg:flex items-center gap-10">
                <a href="#services" className="text-[15px] text-gray-700 hover:text-gray-900 transition font-medium tracking-tight">Services</a>
                <a href="#industries" className="text-[15px] text-gray-700 hover:text-gray-900 transition font-medium tracking-tight">Industries</a>
                <a href="#how-it-works" className="text-[15px] text-gray-700 hover:text-gray-900 transition font-medium tracking-tight">How It Works</a>
                <a href="#outcomes" className="text-[15px] text-gray-700 hover:text-gray-900 transition font-medium tracking-tight">Outcomes</a>
              </div>
            </div>
            <div className="flex w-full items-center justify-center md:w-auto md:justify-end shrink-0 px-1">
              <NavCtaPair compact className="px-1 sm:px-3" />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 px-6 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#0A1628]/8 to-blue-400/8 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6 text-left">
              <h1 className="text-[56px] lg:text-[72px] font-semibold text-gray-900 leading-[1.1] tracking-tight">
                Stop Missing Calls.
                <br />
                <span className="text-blue-600">Start Capturing More Jobs.</span>
              </h1>

              <p className="text-[19px] lg:text-[21px] text-gray-600 leading-relaxed tracking-tight max-w-xl">
                If your business relies on phone calls, you&apos;re losing jobs every time one goes unanswered. We help you capture those opportunities automatically.
              </p>

              <div className="flex flex-col pt-1 max-w-md">
                <HeroCallCard />
              </div>
            </div>

            <div className="relative mt-2 lg:mt-0 w-full max-w-md mx-auto lg:max-w-none lg:ml-auto lg:pl-4">
              <div className="relative transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/15 to-blue-600/8 rounded-2xl blur-2xl" />
                <div className="relative rounded-2xl border border-gray-200 bg-white shadow-2xl p-8 sm:p-10 flex flex-col items-center text-center">
                  <p className="text-blue-600 font-medium text-[14px] tracking-tight mb-2 w-full">
                    Live demo
                  </p>
                  <h3 className="text-[24px] sm:text-[28px] font-semibold text-gray-900 tracking-tight leading-tight w-full">
                    Hear it on your phone
                  </h3>
                  <p className="text-[15px] text-gray-600 mt-3 tracking-tight leading-relaxed w-full">
                    One quick call - no pitch, just the flow.
                  </p>
                  <a
                    href={DEMO_PHONE_HREF}
                    className="mt-6 inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all text-[15px] font-medium tracking-tight w-full sm:w-auto"
                  >
                    {DEMO_LABEL}
                  </a>
                  <p className="mt-3 text-[13px] sm:text-[14px] text-gray-500 tracking-tight leading-snug w-full text-center">
                    {DEMO_SUBTEXT}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Funnel — missed revenue (second section) */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white border-b border-gray-200">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-blue-600 font-semibold text-[13px] sm:text-[14px] tracking-tight uppercase mb-4">
            Where revenue leaks
          </p>
          <h2 className="text-[32px] sm:text-[40px] lg:text-[44px] font-semibold text-gray-900 leading-[1.12] tracking-tight text-balance">
            Every missed call is a job your{" "}
            <span className="text-blue-700 underline decoration-blue-200/90 decoration-4 underline-offset-[5px]">
              competitor
            </span>{" "}
            just booked
          </h2>
          <p className="text-[17px] text-gray-600 mt-6 leading-relaxed tracking-tight max-w-2xl mx-auto">
            Many service businesses miss{" "}
            <span className="font-semibold text-gray-900">10–30% of their incoming calls</span>. Every one
            of those calls could be a real job that quietly disappears.
          </p>
        </div>
        <div className="max-w-xl mx-auto mt-10 px-2">
          <div className="rounded-2xl border border-gray-200 bg-white shadow-lg p-8 ring-1 ring-blue-500/5">
            <p className="text-[16px] text-gray-800 font-semibold mb-3 tracking-tight text-center sm:text-left">
              A simple example
            </p>
            <ul className="space-y-2 text-[15px] text-gray-700 tracking-tight">
              <li>• You miss just <span className="font-semibold">2 calls per day</span>.</li>
              <li>• Only <span className="font-semibold">half</span> of those callers would have become paying jobs.</li>
              <li>• Your average job is worth <span className="font-semibold">$300</span>.</li>
              <li className="mt-3 font-semibold text-gray-900 pt-3 border-t border-gray-100">
                That&apos;s roughly $300 × 2 jobs/week × 52 weeks ≈{" "}
                <span className="text-blue-700">$18,000+ per year</span> in lost revenue.
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-4xl mx-auto mt-10 px-2">
          <DualCtaCards />
        </div>
      </section>

      {/* Problem / Revenue Leak Section */}
      <section className="py-24 px-6 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[40px] lg:text-[48px] font-semibold text-gray-900 mb-6 leading-[1.15] tracking-tight text-center">
            Most Service Businesses Are Losing Revenue Every Week
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <div className="bg-white p-8 rounded-2xl border border-gray-200">
              <PhoneCall className="w-10 h-10 text-red-500 mb-4" />
              <h3 className="text-[18px] font-semibold text-gray-900 mb-2 tracking-tight">Missed calls turn into missed jobs</h3>
              <p className="text-gray-600 text-[14px] tracking-tight">When you&apos;re on a job or after hours, every unanswered call is revenue walking away.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-200">
              <MessageSquare className="w-10 h-10 text-amber-500 mb-4" />
              <h3 className="text-[18px] font-semibold text-gray-900 mb-2 tracking-tight">Slow lead response kills conversions</h3>
              <p className="text-gray-600 text-[14px] tracking-tight">Leads who wait too long for a callback go to the next contractor.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-200">
              <Calendar className="w-10 h-10 text-orange-500 mb-4" />
              <h3 className="text-[18px] font-semibold text-gray-900 mb-2 tracking-tight">Scheduling and admin waste time</h3>
              <p className="text-gray-600 text-[14px] tracking-tight">Back-and-forth booking and paperwork keep you from doing billable work.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-200">
              <DollarSign className="w-10 h-10 text-green-600 mb-4" />
              <h3 className="text-[18px] font-semibold text-gray-900 mb-2 tracking-tight">Poor follow-up leaves money on the table</h3>
              <p className="text-gray-600 text-[14px] tracking-tight">Quotes that don&apos;t get followed up turn into lost jobs and lost revenue.</p>
            </div>
          </div>
          <p className="text-center text-gray-600 text-[17px] max-w-3xl mx-auto leading-relaxed tracking-tight">
            If your team is busy on jobs, after-hours, or overwhelmed with admin, opportunities slip through the cracks. Automagixx fixes those leaks with call-capture and follow-up systems.
          </p>
        </div>
      </section>

      {/* Core Service */}
      <section id="services" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <h2 className="text-[48px] lg:text-[56px] font-semibold text-gray-900 mb-6 leading-[1.1] tracking-tight">
              Missed Revenue Recovery System
            </h2>
            <p className="text-[19px] text-gray-600 leading-relaxed tracking-tight">
              We install a system that answers calls, captures leads, and books jobs automatically — so no opportunity slips through the cracks.
            </p>
          </div>

          <ul className="grid sm:grid-cols-2 gap-6 text-gray-700 text-[16px] tracking-tight">
            <li className="flex items-start gap-3 bg-gray-50 p-6 rounded-2xl border border-gray-200">
              <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              Calls answered instantly
            </li>
            <li className="flex items-start gap-3 bg-gray-50 p-6 rounded-2xl border border-gray-200">
              <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              Leads captured automatically
            </li>
            <li className="flex items-start gap-3 bg-gray-50 p-6 rounded-2xl border border-gray-200">
              <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              Missed calls followed up by text
            </li>
            <li className="flex items-start gap-3 bg-gray-50 p-6 rounded-2xl border border-gray-200">
              <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              Jobs booked 24/7
            </li>
            <li className="flex items-start gap-3 bg-gray-50 p-6 rounded-2xl border border-gray-200 sm:col-span-2">
              <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              No more lost opportunities
            </li>
          </ul>
        </div>
      </section>

      {/* Secondary Services */}
      <section className="py-24 px-6 bg-gray-50" id="more-services">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <h2 className="text-[48px] lg:text-[56px] font-semibold text-gray-900 mb-6 leading-[1.1] tracking-tight">
              Other Ways We Help You Capture More Revenue
            </h2>
            <p className="text-[19px] text-gray-600 leading-relaxed tracking-tight">
              Beyond missed-call recovery, we help you keep leads moving so jobs get booked instead of fading out.
            </p>
          </div>

          <ul className="space-y-4 text-gray-700 text-[16px] tracking-tight">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              Lead follow-up automation
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              Website lead capture systems
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              Missed call recovery workflows
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              Internal workflow automation
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              Reporting and performance tracking
            </li>
          </ul>
        </div>
      </section>

      {/* Industries - Built for Service Businesses */}
      <section id="industries" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <p className="text-blue-600 font-medium text-[15px] mb-4 tracking-tight">Who We Serve</p>
            <h2 className="text-[48px] lg:text-[56px] font-semibold text-gray-900 mb-6 leading-[1.1] tracking-tight">
              Built for Service Businesses
            </h2>
            <p className="text-[19px] text-gray-600 leading-relaxed tracking-tight">
              Automagixx is designed for businesses where missed calls and slow follow-up mean lost revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-gradient-to-br from-blue-50 to-white p-10 rounded-3xl border border-blue-100 hover:shadow-lg transition-all h-full">
              <HomeIcon className="w-10 h-10 text-blue-600 mb-6" />
              <h3 className="text-[22px] font-semibold mb-3 text-gray-900 tracking-tight">Plumbing</h3>
              <p className="text-gray-600 text-[15px] tracking-tight">Capture every after-hours job while you&apos;re on site.</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-10 rounded-3xl border border-blue-100 hover:shadow-lg transition-all h-full">
              <Wrench className="w-10 h-10 text-slate-600 mb-6" />
              <h3 className="text-[22px] font-semibold mb-3 text-gray-900 tracking-tight">HVAC</h3>
              <p className="text-gray-600 text-[15px] tracking-tight">Never miss an emergency call again.</p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-white p-10 rounded-3xl border border-amber-100 hover:shadow-lg transition-all h-full">
              <Zap className="w-10 h-10 text-amber-600 mb-6" />
              <h3 className="text-[22px] font-semibold mb-3 text-gray-900 tracking-tight">Electrical</h3>
              <p className="text-gray-600 text-[15px] tracking-tight">Turn every incoming call into a booked job.</p>
            </div>

            <div className="bg-gradient-to-br from-stone-50 to-white p-10 rounded-3xl border border-stone-200 hover:shadow-lg transition-all h-full">
              <DoorClosed className="w-10 h-10 text-stone-600 mb-6" />
              <h3 className="text-[22px] font-semibold mb-3 text-gray-900 tracking-tight">Garage Door</h3>
              <p className="text-gray-600 text-[15px] tracking-tight">Capture urgent repair calls instantly.</p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white p-10 rounded-3xl border border-gray-200 hover:shadow-lg transition-all h-full">
              <KeyRound className="w-10 h-10 text-gray-600 mb-6" />
              <h3 className="text-[22px] font-semibold mb-3 text-gray-900 tracking-tight">Locksmith</h3>
              <p className="text-gray-600 text-[15px] tracking-tight">Win jobs when customers need help immediately.</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white p-10 rounded-3xl border border-green-100 hover:shadow-lg transition-all h-full">
              <Layers className="w-10 h-10 text-green-700 mb-6" />
              <h3 className="text-[22px] font-semibold mb-3 text-gray-900 tracking-tight">Roofing</h3>
              <p className="text-gray-600 text-[15px] tracking-tight">Handle the surge of calls after storms hit.</p>
            </div>

            <div className="bg-gradient-to-br from-lime-50 to-white p-10 rounded-3xl border border-lime-100 hover:shadow-lg transition-all h-full">
              <Bug className="w-10 h-10 text-lime-600 mb-6" />
              <h3 className="text-[22px] font-semibold mb-3 text-gray-900 tracking-tight">Pest Control</h3>
              <p className="text-gray-600 text-[15px] tracking-tight">Respond instantly to urgent service requests.</p>
            </div>
          </div>
          <p className="text-center text-gray-500 text-[15px] max-w-2xl mx-auto tracking-tight">
            We can adapt the system to other service businesses, but we specialize in home-service revenue recovery.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <p className="text-blue-600 font-medium text-[15px] mb-4 tracking-tight">How It Works</p>
            <h2 className="text-[48px] lg:text-[56px] font-semibold text-gray-900 mb-6 leading-[1.1] tracking-tight">
              How It Works
            </h2>
          </div>

          <div className="space-y-6">
            {[
              "Customer calls your business",
              "We answer instantly — even after hours",
              "We capture their information and qualify the job",
              "We book the job or follow up automatically",
              "You get the job you would have missed",
            ].map((step, idx) => (
              <div
                key={step}
                className="bg-white border border-gray-200 rounded-3xl p-8 flex flex-col sm:flex-row sm:items-start gap-4"
              >
                <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center text-[20px] font-semibold flex-shrink-0">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="text-[22px] font-semibold text-gray-900 tracking-tight">
                    {step}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 max-w-4xl mx-auto px-2">
            <DualCtaCards />
          </div>
        </div>
      </section>

      {/* Book call — GoHighLevel calendar */}
      <section
        id="book-call"
        className="scroll-mt-28 py-20 px-6 bg-gray-50 border-y border-gray-200"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[40px] lg:text-[48px] font-semibold text-gray-900 mb-4 tracking-tight text-center leading-[1.15]">
            Optional: schedule a time online
          </h2>
          <p className="text-[17px] text-gray-600 text-center max-w-2xl mx-auto mb-10 leading-relaxed tracking-tight">
            The fastest path is a direct call:{" "}
            <a href={PRIMARY_PHONE_HREF} className="text-blue-700 underline underline-offset-2 font-medium hover:text-blue-800">
              (484) 673-7612
            </a>
            . Want to hear it first?{" "}
            <a href={DEMO_PHONE_HREF} className="text-blue-700 underline underline-offset-2 font-medium hover:text-blue-800">
              {DEMO_LABEL}
            </a>
            {" — "}
            {DEMO_SUBTEXT}. If you prefer to pick a slot, use the calendar below.
          </p>
          <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
            <iframe
              src="https://api.leadconnectorhq.com/widget/booking/deaNfs7Dq6XtD6FzYMR8"
              className="block w-full min-h-[720px] sm:min-h-[820px] lg:min-h-[900px] border-0"
              title="Schedule a free 10-minute call with Automagixx"
            />
          </div>
          <p className="text-[14px] text-gray-600 text-center mt-6 tracking-tight max-w-xl mx-auto leading-relaxed">
            After scheduling, you may see a short prep link so we can make the conversation useful.
          </p>
          <p className="text-[12px] text-gray-500 text-center mt-4 tracking-tight max-w-3xl mx-auto leading-relaxed">
            By submitting this form, you agree to receive SMS messages from Automagixx related to
            your inquiry, including appointment reminders and service updates. Message frequency
            varies. Message &amp; data rates may apply. Reply STOP to opt out or HELP for help. See{" "}
            <a href="/privacy-policy" className="underline underline-offset-2 hover:text-gray-700">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="/terms" className="underline underline-offset-2 hover:text-gray-700">
              Terms of Service
            </a>
            .
          </p>
        </div>
        <Script
          src="https://link.msgsndr.com/js/form_embed.js"
          strategy="afterInteractive"
        />
      </section>

      {/* Client Dashboard / Visibility */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <p className="text-blue-600 font-medium text-[15px] mb-4 tracking-tight">Client Dashboard</p>
            <h2 className="text-[48px] lg:text-[56px] font-semibold text-gray-900 mb-6 leading-[1.1] tracking-tight">
              See Exactly How Much Revenue You&apos;re Recovering
            </h2>
            <p className="text-[19px] text-gray-600 leading-relaxed tracking-tight">
              Every client gets access to a branded dashboard showing the real impact of their automation.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 lg:p-12 mb-10">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-gray-200">
                <PhoneCall className="w-8 h-8 text-blue-600 mb-3" />
                <p className="text-[13px] text-gray-500 uppercase tracking-tight font-medium mb-1">Calls Answered</p>
                <p className="text-[24px] font-semibold text-gray-900">87</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-200">
                <Calendar className="w-8 h-8 text-green-600 mb-3" />
                <p className="text-[13px] text-gray-500 uppercase tracking-tight font-medium mb-1">Jobs Booked</p>
                <p className="text-[24px] font-semibold text-gray-900">26</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-200">
                <DollarSign className="w-8 h-8 text-emerald-600 mb-3" />
                <p className="text-[13px] text-gray-500 uppercase tracking-tight font-medium mb-1">Estimated Revenue Captured</p>
                <p className="text-[24px] font-semibold text-gray-900">$13,400</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-200">
                <MessageSquare className="w-8 h-8 text-amber-600 mb-3" />
                <p className="text-[13px] text-gray-500 uppercase tracking-tight font-medium mb-1">Response Time</p>
                <p className="text-[24px] font-semibold text-gray-900">Instant</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-200 col-span-2 lg:col-span-1">
                <BarChart3 className="w-8 h-8 text-indigo-600 mb-3" />
                <p className="text-[13px] text-gray-500 uppercase tracking-tight font-medium mb-1">Automation Activity &amp; ROI Trend</p>
                <p className="text-[24px] font-semibold text-gray-900">Up 32%</p>
              </div>
            </div>
          </div>
          <p className="text-gray-600 text-[17px] max-w-3xl tracking-tight leading-relaxed">
            Automagixx clients don&apos;t just get automation — they get ongoing visibility into performance, revenue recovery, and system activity.
          </p>
        </div>
      </section>

      {/* Outcomes */}
      <section id="outcomes" className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[40px] lg:text-[48px] font-semibold text-gray-900 mb-4 tracking-tight">
              What Happens When You Stop Missing Calls
            </h2>
          </div>

          <ul className="space-y-4 text-gray-700 text-[16px] tracking-tight">
            <li className="flex items-start gap-3 bg-white p-6 rounded-2xl border border-gray-200">
              <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
              More jobs booked without hiring staff
            </li>
            <li className="flex items-start gap-3 bg-white p-6 rounded-2xl border border-gray-200">
              <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
              Faster response times
            </li>
            <li className="flex items-start gap-3 bg-white p-6 rounded-2xl border border-gray-200">
              <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
              Fewer missed opportunities
            </li>
            <li className="flex items-start gap-3 bg-white p-6 rounded-2xl border border-gray-200">
              <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
              Less time spent on admin
            </li>
            <li className="flex items-start gap-3 bg-white p-6 rounded-2xl border border-gray-200">
              <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
              More consistent revenue
            </li>
          </ul>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white border-y border-gray-100" id="testimonials">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[40px] lg:text-[48px] font-semibold text-gray-900 mb-4 tracking-tight">
              Contractors Notice the Difference
            </h2>
            <p className="text-gray-600 text-[17px] max-w-2xl mx-auto tracking-tight">
              Real words from service businesses that stopped losing jobs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            <div className="group relative bg-white p-8 rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow ring-1 ring-blue-500/5 md:-rotate-1 md:hover:rotate-0">
              <span className="text-5xl text-blue-100 font-serif leading-none absolute top-4 left-5 select-none" aria-hidden>
                &ldquo;
              </span>
              <p className="font-semibold text-gray-900 text-[16px] tracking-tight mb-2 relative z-10">Mike L.</p>
              <p className="text-blue-600 text-[13px] font-medium tracking-tight mb-4 relative z-10">Plumbing Company</p>
              <p className="text-gray-600 text-[14px] leading-relaxed tracking-tight relative z-10">
                We were missing calls constantly. Now jobs are getting booked even when we&apos;re busy. It just works. We&apos;ve already picked up extra jobs this month.
              </p>
            </div>
            <div className="group relative bg-white p-8 rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow ring-1 ring-blue-500/5">
              <span className="text-5xl text-blue-100 font-serif leading-none absolute top-4 left-5 select-none" aria-hidden>
                &ldquo;
              </span>
              <p className="font-semibold text-gray-900 text-[16px] tracking-tight mb-2 relative z-10">Dave R.</p>
              <p className="text-blue-600 text-[13px] font-medium tracking-tight mb-4 relative z-10">HVAC Company</p>
              <p className="text-gray-600 text-[14px] leading-relaxed tracking-tight relative z-10">
                The biggest difference is speed. Customers get responses immediately instead of waiting.
              </p>
            </div>
            <div className="group relative bg-white p-8 rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow ring-1 ring-blue-500/5 md:rotate-1 md:hover:rotate-0">
              <span className="text-5xl text-blue-100 font-serif leading-none absolute top-4 left-5 select-none" aria-hidden>
                &ldquo;
              </span>
              <p className="font-semibold text-gray-900 text-[16px] tracking-tight mb-2 relative z-10">Chris T.</p>
              <p className="text-blue-600 text-[13px] font-medium tracking-tight mb-4 relative z-10">Electrical Contractor</p>
              <p className="text-gray-600 text-[14px] leading-relaxed tracking-tight relative z-10">
                We didn&apos;t realize how many jobs we were losing until we fixed this. The follow-up is on point.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden py-24 px-6 bg-gradient-to-br from-blue-800 via-blue-600 to-indigo-700 text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 80% 50% at 20% 0%, rgba(255,255,255,0.22), transparent 50%), radial-gradient(ellipse 60% 40% at 100% 100%, rgba(255,255,255,0.12), transparent 45%)",
          }}
        />
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-[40px] lg:text-[48px] font-semibold mb-6 tracking-tight drop-shadow-sm">
            Talk to us directly
          </h2>
          <p className="text-[18px] lg:text-[19px] mb-10 text-white/95 tracking-tight max-w-2xl mx-auto leading-relaxed">
            Call now — or use {DEMO_LABEL} and hear how it works in about 30 seconds before you commit to anything.
          </p>

          <DualCtaCards variant="onBlue" />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <span className="inline-flex rounded-2xl bg-white p-2 mb-6 ring-1 ring-gray-700/60 shadow-md">
                <Image
                  src="/logo-robot.png"
                  alt="Automagixx"
                  width={120}
                  height={120}
                  className="h-14 w-auto block"
                />
              </span>
              <p className="text-gray-400 text-[14px] leading-relaxed tracking-tight">
                Automagixx helps service businesses recover lost revenue from missed calls.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-[15px] mb-6 tracking-tight">Services</h4>
              <ul className="space-y-3 text-gray-400 text-[14px] tracking-tight">
                <li><a href="#services" className="hover:text-white transition">Lead capture &amp; booking</a></li>
                <li><a href="#services" className="hover:text-white transition">Follow-up automation</a></li>
                <li><a href="#services" className="hover:text-white transition">Scheduling &amp; operations</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-[15px] mb-6 tracking-tight">Industries</h4>
              <ul className="space-y-3 text-gray-400 text-[14px] tracking-tight">
                <li><a href="#industries" className="hover:text-white transition">HVAC</a></li>
                <li><a href="#industries" className="hover:text-white transition">Plumbing &amp; Electrical</a></li>
                <li><a href="#industries" className="hover:text-white transition">Roofing &amp; Home services</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-[15px] mb-6 tracking-tight">Contact</h4>
              <ul className="space-y-3 text-gray-400 text-[14px] tracking-tight">
                <li>Philadelphia Area, PA</li>
                <li><a href="tel:4846737612" className="hover:text-white transition">(484) 673-7612</a></li>
                <li><a href="mailto:brendan@automagixx.com" className="hover:text-white transition">brendan@automagixx.com</a></li>
                <li><a href="/guarantee" className="hover:text-white transition">Performance Guarantee</a></li>
                <li><a href="/privacy-policy" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white transition">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-[13px] tracking-tight">
            <p>&copy; 2025 Automagixx. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}