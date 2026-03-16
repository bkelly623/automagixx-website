import Image from "next/image";
import { Zap, Home as HomeIcon, Wrench, Calendar, Bot, ArrowRight, PhoneCall, MessageSquare, BarChart3, DollarSign, Layers, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation with MASSIVE Logo and Inter Font */}
      <nav className="fixed top-0 w-full bg-white border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-24">
            <div className="flex items-center gap-12">
              <Image
                src="/logo.png"
                alt="Automagixx"
                width={360}
                height={112}
                className="w-auto h-28"
                priority
              />
              <div className="hidden lg:flex items-center gap-10">
                <a href="#services" className="text-[15px] text-gray-700 hover:text-gray-900 transition font-medium tracking-tight">Services</a>
                <a href="#industries" className="text-[15px] text-gray-700 hover:text-gray-900 transition font-medium tracking-tight">Industries</a>
                <a href="#how-it-works" className="text-[15px] text-gray-700 hover:text-gray-900 transition font-medium tracking-tight">How It Works</a>
                <a href="#results" className="text-[15px] text-gray-700 hover:text-gray-900 transition font-medium tracking-tight">Results</a>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <a href="tel:4844249624" className="hidden md:block text-[15px] text-gray-700 hover:text-gray-900 transition font-medium tracking-tight">(484) 424-9624</a>
              <a 
                href="https://calendly.com/automagixx/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-5 py-2.5 rounded-full hover:bg-blue-700 transition-all duration-200 text-[15px] font-medium tracking-tight"
              >
                Book Consultation
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 px-6 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#0A1628]/8 to-blue-400/8 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h1 className="text-[56px] lg:text-[72px] font-semibold text-gray-900 leading-[1.1] tracking-tight">
                Stop Missing Jobs.
                <br />
                <span className="text-blue-600">AI Answers Your Calls, Captures Leads, and Books Work 24/7.</span>
              </h1>
              
              <p className="text-[19px] lg:text-[21px] text-gray-600 leading-relaxed tracking-tight">
                Automagixx builds done-for-you AI systems for service businesses that recover missed leads, automate scheduling, and eliminate repetitive admin work.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <a 
                  href="https://calendly.com/automagixx/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-blue-600 text-white px-7 py-3.5 rounded-full text-[15px] font-medium hover:bg-blue-700 transition-all duration-200 tracking-tight group"
                >
                  Get Your Free AI Job Leak Audit
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
                <a 
                  href="https://calendly.com/automagixx/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-white text-gray-700 px-7 py-3.5 rounded-full text-[15px] font-medium hover:bg-gray-50 transition-all duration-200 border border-gray-300 tracking-tight"
                >
                  Book Free Consultation
                </a>
              </div>
              
              <p className="text-[14px] text-gray-500 pt-2 tracking-tight">
                See where your business is leaking jobs, calls, and cash flow.
              </p>
              
              <div className="flex flex-wrap items-center gap-6 text-[13px] text-gray-600 pt-2 tracking-tight">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                  Built for service businesses
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                  No new headcount required
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                  Works with the tools you already use
                </span>
              </div>
            </div>

            <div className="relative lg:block hidden">
              <div className="relative transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-2xl blur-2xl"></div>
                <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-200">
                  <Image
                    src="/images/dashboard-preview.png"
                    alt="Automagixx Dashboard"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
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
            If your team is busy on jobs, after-hours, or overwhelmed with admin, opportunities slip through the cracks. Automagixx fixes those leaks with AI automation.
          </p>
        </div>
      </section>

      {/* Primary Offer - 24/7 AI Lead Capture */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <p className="text-blue-600 font-medium text-[15px] mb-4 tracking-tight">Primary Offer</p>
            <h2 className="text-[48px] lg:text-[56px] font-semibold text-gray-900 mb-6 leading-[1.1] tracking-tight">
              Your 24/7 AI Lead Capture System
            </h2>
            <p className="text-[19px] text-gray-600 leading-relaxed tracking-tight">
              The fastest way to stop losing jobs.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <ul className="space-y-4 text-gray-700 text-[16px] tracking-tight">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  AI answers calls and web inquiries instantly
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  Qualifies leads automatically
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  Books appointments 24/7
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  Sends confirmation and follow-up messages
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  Logs activity into your CRM / scheduling workflow
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-10 rounded-3xl text-white">
              <h3 className="text-[22px] font-semibold mb-6 tracking-tight">What you get</h3>
              <ul className="space-y-4 text-blue-100 text-[15px] tracking-tight">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 flex-shrink-0" /> Fewer missed calls</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 flex-shrink-0" /> Faster response times</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 flex-shrink-0" /> More booked jobs</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 flex-shrink-0" /> Less admin burden</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services - Beyond Lead Capture */}
      <section id="services" className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <p className="text-blue-600 font-medium text-[15px] mb-4 tracking-tight">What We Automate</p>
            <h2 className="text-[48px] lg:text-[56px] font-semibold text-gray-900 mb-6 leading-[1.1] tracking-tight">
              Beyond Lead Capture: We Automate the Rest
            </h2>
            <p className="text-[19px] text-gray-600 leading-relaxed tracking-tight">
              After your 24/7 lead capture system is live, we can extend automation across your operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-10 rounded-3xl border border-gray-200 hover:shadow-lg transition-all duration-300">
              <MessageSquare className="w-10 h-10 text-blue-600 mb-6" />
              <h3 className="text-[22px] font-semibold mb-3 text-gray-900 tracking-tight">Lead Follow-Up Automation</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed tracking-tight">
                Automatically text, email, and follow up with leads before they go cold.
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl border border-gray-200 hover:shadow-lg transition-all duration-300">
              <Calendar className="w-10 h-10 text-orange-600 mb-6" />
              <h3 className="text-[22px] font-semibold mb-3 text-gray-900 tracking-tight">Smart Scheduling</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed tracking-tight">
                Fill your calendar faster and reduce back-and-forth booking friction.
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl border border-gray-200 hover:shadow-lg transition-all duration-300">
              <Zap className="w-10 h-10 text-green-600 mb-6" />
              <h3 className="text-[22px] font-semibold mb-3 text-gray-900 tracking-tight">Process Automation</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed tracking-tight">
                Remove repetitive admin tasks and put operations on autopilot.
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl border border-gray-200 hover:shadow-lg transition-all duration-300">
              <BarChart3 className="w-10 h-10 text-indigo-600 mb-6" />
              <h3 className="text-[22px] font-semibold mb-3 text-gray-900 tracking-tight">Reporting &amp; Visibility</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed tracking-tight">
                Track calls answered, leads captured, jobs booked, and revenue impact.
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl border border-gray-200 hover:shadow-lg transition-all duration-300">
              <DollarSign className="w-10 h-10 text-emerald-600 mb-6" />
              <h3 className="text-[22px] font-semibold mb-3 text-gray-900 tracking-tight">Invoicing / Cash Flow Automation</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed tracking-tight">
                Automate reminders, follow-ups, and payment workflows.
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl border border-gray-200 hover:shadow-lg transition-all duration-300">
              <Bot className="w-10 h-10 text-blue-600 mb-6" />
              <h3 className="text-[22px] font-semibold mb-3 text-gray-900 tracking-tight">24/7 Lead Capture</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed tracking-tight">
                AI answers calls and web inquiries, qualifies leads, and books work around the clock.
              </p>
            </div>
          </div>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
            <div className="bg-gradient-to-br from-blue-50 to-white p-10 rounded-3xl border border-blue-100 hover:shadow-lg transition-all h-full">
              <HomeIcon className="w-10 h-10 text-blue-600 mb-6" />
              <h3 className="text-[22px] font-semibold mb-3 text-gray-900 tracking-tight">HVAC</h3>
              <p className="text-gray-600 text-[15px] tracking-tight">Heating, cooling, and climate control contractors</p>
            </div>
            <div className="bg-gradient-to-br from-slate-50 to-white p-10 rounded-3xl border border-slate-200 hover:shadow-lg transition-all h-full">
              <Wrench className="w-10 h-10 text-slate-600 mb-6" />
              <h3 className="text-[22px] font-semibold mb-3 text-gray-900 tracking-tight">Plumbing</h3>
              <p className="text-gray-600 text-[15px] tracking-tight">Plumbers and pipe professionals</p>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-white p-10 rounded-3xl border border-amber-100 hover:shadow-lg transition-all h-full">
              <Zap className="w-10 h-10 text-amber-600 mb-6" />
              <h3 className="text-[22px] font-semibold mb-3 text-gray-900 tracking-tight">Electrical</h3>
              <p className="text-gray-600 text-[15px] tracking-tight">Electricians and electrical contractors</p>
            </div>
            <div className="bg-gradient-to-br from-stone-50 to-white p-10 rounded-3xl border border-stone-200 hover:shadow-lg transition-all h-full">
              <Layers className="w-10 h-10 text-stone-600 mb-6" />
              <h3 className="text-[22px] font-semibold mb-3 text-gray-900 tracking-tight">Roofing</h3>
              <p className="text-gray-600 text-[15px] tracking-tight">Roofing and exterior contractors</p>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white p-10 rounded-3xl border border-gray-200 hover:shadow-lg transition-all h-full">
              <Bot className="w-10 h-10 text-gray-600 mb-6" />
              <h3 className="text-[22px] font-semibold mb-3 text-gray-900 tracking-tight">Other Home Services</h3>
              <p className="text-gray-600 text-[15px] tracking-tight">General contractors, landscaping, and more</p>
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
            <p className="text-[19px] text-gray-600 leading-relaxed tracking-tight">
              From revenue leak audit to live automation in days, not months.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-16">
            <div>
              <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center text-[20px] font-semibold mb-6">1</div>
              <h3 className="text-[22px] font-semibold mb-4 text-gray-900 tracking-tight">Book Your Free AI Job Leak Audit</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed tracking-tight">
                We review how your business currently handles calls, leads, scheduling, and follow-up — and identify where revenue is slipping through the cracks.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center text-[20px] font-semibold mb-6">2</div>
              <h3 className="text-[22px] font-semibold mb-4 text-gray-900 tracking-tight">We Build Your Automation System</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed tracking-tight">
                We implement a custom AI workflow for your business using the tools you already use whenever possible.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center text-[20px] font-semibold mb-6">3</div>
              <h3 className="text-[22px] font-semibold mb-4 text-gray-900 tracking-tight">Capture More Jobs</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed tracking-tight">
                Your system starts answering, qualifying, booking, and tracking opportunities automatically — with clear reporting on results.
              </p>
            </div>
          </div>
          
          <div className="mt-16">
            <a 
              href="https://calendly.com/automagixx/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-blue-600 text-white px-7 py-3.5 rounded-full text-[15px] font-medium hover:bg-blue-700 transition-all tracking-tight group"
            >
              Get Your Free AI Job Leak Audit
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Client Dashboard / Visibility */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <p className="text-blue-600 font-medium text-[15px] mb-4 tracking-tight">Client Dashboard</p>
            <h2 className="text-[48px] lg:text-[56px] font-semibold text-gray-900 mb-6 leading-[1.1] tracking-tight">
              See Exactly What Automagixx Is Doing for Your Business
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
                <p className="text-[24px] font-semibold text-gray-900">—</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-200">
                <Calendar className="w-8 h-8 text-green-600 mb-3" />
                <p className="text-[13px] text-gray-500 uppercase tracking-tight font-medium mb-1">Jobs Booked</p>
                <p className="text-[24px] font-semibold text-gray-900">—</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-200">
                <DollarSign className="w-8 h-8 text-emerald-600 mb-3" />
                <p className="text-[13px] text-gray-500 uppercase tracking-tight font-medium mb-1">Est. Revenue Recovered</p>
                <p className="text-[24px] font-semibold text-gray-900">—</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-200">
                <MessageSquare className="w-8 h-8 text-amber-600 mb-3" />
                <p className="text-[13px] text-gray-500 uppercase tracking-tight font-medium mb-1">Response Time</p>
                <p className="text-[24px] font-semibold text-gray-900">—</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-200 col-span-2 lg:col-span-1">
                <BarChart3 className="w-8 h-8 text-indigo-600 mb-3" />
                <p className="text-[13px] text-gray-500 uppercase tracking-tight font-medium mb-1">Automation Activity &amp; ROI Trend</p>
                <p className="text-[24px] font-semibold text-gray-900">—</p>
              </div>
            </div>
          </div>
          <p className="text-gray-600 text-[17px] max-w-3xl tracking-tight leading-relaxed">
            Automagixx clients don&apos;t just get automation — they get ongoing visibility into performance, revenue recovery, and system activity.
          </p>
        </div>
      </section>

      {/* Results / Proof - Outcome blocks */}
      <section id="results" className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-blue-600 font-medium text-[15px] mb-4 tracking-tight">Results</p>
            <h2 className="text-[40px] lg:text-[48px] font-semibold text-gray-900 mb-4 tracking-tight">
              Example Outcomes
            </h2>
            <p className="text-gray-600 text-[17px] max-w-2xl mx-auto tracking-tight">
              The kinds of results service businesses see with Automagixx automation.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-8 rounded-2xl border border-gray-200">
              <CheckCircle2 className="w-10 h-10 text-green-600 mb-4" />
              <h3 className="text-[18px] font-semibold text-gray-900 mb-2 tracking-tight">Recovered missed after-hours leads</h3>
              <p className="text-gray-600 text-[14px] tracking-tight">AI answers when your team can&apos;t, so opportunities don&apos;t slip away at night or on weekends.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-200">
              <Zap className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-[18px] font-semibold text-gray-900 mb-2 tracking-tight">Reduced admin workload</h3>
              <p className="text-gray-600 text-[14px] tracking-tight">Less time on scheduling, follow-ups, and paperwork — more time on billable work.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-200">
              <MessageSquare className="w-10 h-10 text-amber-600 mb-4" />
              <h3 className="text-[18px] font-semibold text-gray-900 mb-2 tracking-tight">Improved lead response time</h3>
              <p className="text-gray-600 text-[14px] tracking-tight">Instant response to calls and web inquiries instead of hours or days of delay.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-200">
              <Calendar className="w-10 h-10 text-green-600 mb-4" />
              <h3 className="text-[18px] font-semibold text-gray-900 mb-2 tracking-tight">Booked more jobs without hiring staff</h3>
              <p className="text-gray-600 text-[14px] tracking-tight">More appointments and closed jobs with the same team, thanks to 24/7 capture and booking.</p>
            </div>
          </div>
          <p className="text-center text-gray-500 text-[14px] mt-8 tracking-tight">
            Real client case studies coming soon.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-[40px] lg:text-[48px] font-semibold mb-6 tracking-tight">Find Out Where Your Business Is Leaking Revenue</h2>
          <p className="text-[18px] lg:text-[19px] mb-12 opacity-95 tracking-tight">
            Book a free AI Job Leak Audit and we&apos;ll show you where automation can recover calls, leads, and cash flow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://calendly.com/automagixx/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-7 py-3.5 rounded-full text-[15px] font-medium hover:bg-gray-100 transition-all tracking-tight w-full sm:w-auto text-center"
            >
              Get Your Free AI Job Leak Audit
            </a>
            <a 
              href="https://calendly.com/automagixx/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 text-white px-7 py-3.5 rounded-full text-[15px] font-medium hover:bg-blue-800 transition-all border border-white/20 tracking-tight w-full sm:w-auto text-center"
            >
              Book Free Consultation
            </a>
          </div>
          <p className="mt-6">
            <a href="tel:4844249624" className="text-white/90 hover:text-white text-[15px] font-medium tracking-tight underline underline-offset-2">
              Or call (484) 424-9624
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <Image
                src="/logo-dark.png"
                alt="Automagixx"
                width={160}
                height={40}
                className="h-10 w-auto mb-6"
              />
              <p className="text-gray-400 text-[14px] leading-relaxed tracking-tight">
                Automagixx helps service businesses stop missing jobs by using AI to answer calls, capture leads, automate scheduling, and reduce admin work.
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
                <li><a href="tel:4844249624" className="hover:text-white transition">(484) 424-9624</a></li>
                <li><a href="mailto:contact@automagixx.com" className="hover:text-white transition">contact@automagixx.com</a></li>
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