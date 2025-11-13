import Image from "next/image";
import { Zap, Home as HomeIcon, Briefcase, Scale, Heart, Building2, Dumbbell, Video, FileText, Calendar, Bot, ArrowRight } from "lucide-react";

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
                width={280}
                height={80}
                className="w-auto h-20"
                priority
              />
              <div className="hidden lg:flex items-center gap-10">
                <a href="#services" className="text-[15px] text-gray-700 hover:text-gray-900 transition font-medium tracking-tight">Services</a>
                <a href="#industries" className="text-[15px] text-gray-700 hover:text-gray-900 transition font-medium tracking-tight">Industries</a>
                <a href="#how-it-works" className="text-[15px] text-gray-700 hover:text-gray-900 transition font-medium tracking-tight">How it works</a>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <a href="tel:2122570112" className="hidden md:block text-[15px] text-gray-700 hover:text-gray-900 transition font-medium tracking-tight">(212) 257-0112</a>
              <a 
                href="https://calendly.com/automagixx/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-5 py-2.5 rounded-full hover:bg-blue-700 transition-all duration-200 text-[15px] font-medium tracking-tight"
              >
                Start free trial
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
              <h1 className="text-[72px] font-semibold text-gray-900 leading-[1.1] tracking-tight">
                Automate Your Business.
                <br />
                <span className="text-blue-600">Multiply Your Results.</span>
              </h1>
              
              <p className="text-[21px] text-gray-600 leading-relaxed tracking-tight">
                AI that works while you sleep.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <a 
                  href="https://calendly.com/automagixx/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-blue-600 text-white px-7 py-3.5 rounded-full text-[15px] font-medium hover:bg-blue-700 transition-all duration-200 tracking-tight group"
                >
                  Try free for 30 days
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
                <a 
                  href="https://calendly.com/automagixx/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-white text-gray-700 px-7 py-3.5 rounded-full text-[15px] font-medium hover:bg-gray-50 transition-all duration-200 border border-gray-300 tracking-tight"
                >
                  Book consultation
                </a>
              </div>
              
              <div className="flex items-center gap-8 text-[13px] text-gray-600 pt-4 tracking-tight">
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  30-day free trial
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Cancel anytime
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

      {/* Services - Stripe Style Layout */}
      <section id="services" className="py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-20">
            <p className="text-blue-600 font-medium text-[15px] mb-4 tracking-tight">Products</p>
            <h2 className="text-[56px] font-semibold text-gray-900 mb-6 leading-[1.1] tracking-tight">
              Unified platform
            </h2>
            <p className="text-[19px] text-gray-600 leading-relaxed tracking-tight">
              AI automation that transforms how you do business. Five core services to power your growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service 1 - Large */}
            <div className="lg:col-span-2 bg-gradient-to-br from-blue-600 to-blue-700 p-12 rounded-3xl text-white relative overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <Bot className="w-10 h-10 mb-6" />
                <h3 className="text-[28px] font-semibold mb-4 tracking-tight">AI chatbots & lead generation</h3>
                <p className="text-blue-100 text-[17px] leading-relaxed tracking-tight">
                  Intelligent chatbots that handle customer service, qualify leads, and book appointments 24/7.
                </p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-10 rounded-3xl border border-gray-200 hover:shadow-lg transition-all duration-300">
              <Video className="w-10 h-10 text-purple-600 mb-6" />
              <h3 className="text-[22px] font-semibold mb-3 text-gray-900 tracking-tight">Commercial creation</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed tracking-tight">
                Professional marketing videos delivered fast at a fraction of the cost.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-10 rounded-3xl border border-gray-200 hover:shadow-lg transition-all duration-300">
              <Zap className="w-10 h-10 text-green-600 mb-6" />
              <h3 className="text-[22px] font-semibold mb-3 text-gray-900 tracking-tight">Process automation</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed tracking-tight">
                Eliminate repetitive tasks and run operations on autopilot.
              </p>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-10 rounded-3xl border border-gray-200 hover:shadow-lg transition-all duration-300">
              <Calendar className="w-10 h-10 text-orange-600 mb-6" />
              <h3 className="text-[22px] font-semibold mb-3 text-gray-900 tracking-tight">Smart scheduling</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed tracking-tight">
                Fill your calendar automatically with qualified prospects.
              </p>
            </div>

            {/* Service 5 */}
            <div className="bg-white p-10 rounded-3xl border border-gray-200 hover:shadow-lg transition-all duration-300">
              <FileText className="w-10 h-10 text-pink-600 mb-6" />
              <h3 className="text-[22px] font-semibold mb-3 text-gray-900 tracking-tight">Content marketing</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed tracking-tight">
                SEO-optimized content that drives traffic and converts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries - Stripe Style */}
      <section id="industries" className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-20">
            <p className="text-blue-600 font-medium text-[15px] mb-4 tracking-tight">Industries</p>
            <h2 className="text-[56px] font-semibold text-gray-900 mb-6 leading-[1.1] tracking-tight">
              Built for your business
            </h2>
            <p className="text-[19px] text-gray-600 leading-relaxed tracking-tight">
              Specialized AI solutions proven across multiple sectors.
            </p>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <div className="flex-none w-80 snap-start">
              <div className="bg-gradient-to-br from-blue-50 to-white p-10 rounded-3xl border border-blue-100 hover:shadow-lg transition-all h-full">
                <HomeIcon className="w-10 h-10 text-blue-600 mb-6" />
                <h3 className="text-[22px] font-semibold mb-3 text-gray-900 tracking-tight">Home services</h3>
                <p className="text-gray-600 text-[15px] tracking-tight">HVAC, Plumbing, Electrical, Contractors</p>
              </div>
            </div>

            <div className="flex-none w-80 snap-start">
              <div className="bg-gradient-to-br from-pink-50 to-white p-10 rounded-3xl border border-pink-100 hover:shadow-lg transition-all h-full">
                <Heart className="w-10 h-10 text-pink-600 mb-6" />
                <h3 className="text-[22px] font-semibold mb-3 text-gray-900 tracking-tight">Wellness</h3>
                <p className="text-gray-600 text-[15px] tracking-tight">Med Spas, Clinics, Alternative Therapy</p>
              </div>
            </div>

            <div className="flex-none w-80 snap-start">
              <div className="bg-gradient-to-br from-purple-50 to-white p-10 rounded-3xl border border-purple-100 hover:shadow-lg transition-all h-full">
                <Scale className="w-10 h-10 text-purple-600 mb-6" />
                <h3 className="text-[22px] font-semibold mb-3 text-gray-900 tracking-tight">Legal</h3>
                <p className="text-gray-600 text-[15px] tracking-tight">Law Firms, Attorneys, Consultants</p>
              </div>
            </div>

            <div className="flex-none w-80 snap-start">
              <div className="bg-gradient-to-br from-green-50 to-white p-10 rounded-3xl border border-green-100 hover:shadow-lg transition-all h-full">
                <Briefcase className="w-10 h-10 text-green-600 mb-6" />
                <h3 className="text-[22px] font-semibold mb-3 text-gray-900 tracking-tight">Professional</h3>
                <p className="text-gray-600 text-[15px] tracking-tight">Accountants, Consultants, Agencies</p>
              </div>
            </div>

            <div className="flex-none w-80 snap-start">
              <div className="bg-gradient-to-br from-orange-50 to-white p-10 rounded-3xl border border-orange-100 hover:shadow-lg transition-all h-full">
                <Building2 className="w-10 h-10 text-orange-600 mb-6" />
                <h3 className="text-[22px] font-semibold mb-3 text-gray-900 tracking-tight">Hospitality</h3>
                <p className="text-gray-600 text-[15px] tracking-tight">Hotels, Restaurants, Event Venues</p>
              </div>
            </div>

            <div className="flex-none w-80 snap-start">
              <div className="bg-gradient-to-br from-red-50 to-white p-10 rounded-3xl border border-red-100 hover:shadow-lg transition-all h-full">
                <Dumbbell className="w-10 h-10 text-red-600 mb-6" />
                <h3 className="text-[22px] font-semibold mb-3 text-gray-900 tracking-tight">Fitness</h3>
                <p className="text-gray-600 text-[15px] tracking-tight">Gyms, Wellness Centers, Spas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Stripe Style */}
      <section id="how-it-works" className="py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-20">
            <p className="text-blue-600 font-medium text-[15px] mb-4 tracking-tight">Get started</p>
            <h2 className="text-[56px] font-semibold text-gray-900 mb-6 leading-[1.1] tracking-tight">
              Three simple steps
            </h2>
            <p className="text-[19px] text-gray-600 leading-relaxed tracking-tight">
              From consultation to implementation in days, not months.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-16">
            <div>
              <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center text-[20px] font-semibold mb-6">1</div>
              <h3 className="text-[22px] font-semibold mb-4 text-gray-900 tracking-tight">Schedule consultation</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed tracking-tight">
                Book a free call. We&apos;ll discuss your needs and show you how AI can transform your business.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center text-[20px] font-semibold mb-6">2</div>
              <h3 className="text-[22px] font-semibold mb-4 text-gray-900 tracking-tight">We build your AI</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed tracking-tight">
                Custom AI assistant trained on your business. Live and working in days, not weeks.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center text-[20px] font-semibold mb-6">3</div>
              <h3 className="text-[22px] font-semibold mb-4 text-gray-900 tracking-tight">See results</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed tracking-tight">
                Track every lead captured and dollar saved with detailed weekly reports.
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
              Start your free trial
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-[48px] font-semibold mb-6 tracking-tight">Ready to get started?</h2>
          <p className="text-[19px] mb-12 opacity-95 tracking-tight">
            Join hundreds of businesses using AI to scale without scaling headcount.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://calendly.com/automagixx/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-7 py-3.5 rounded-full text-[15px] font-medium hover:bg-gray-100 transition-all tracking-tight"
            >
              Start free trial
            </a>
            <a 
              href="tel:2122570112"
              className="bg-blue-700 text-white px-7 py-3.5 rounded-full text-[15px] font-medium hover:bg-blue-800 transition-all border border-white/20 tracking-tight"
            >
              Call (212) 257-0112
            </a>
          </div>
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
                AI automation that transforms businesses.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-[15px] mb-6 tracking-tight">Services</h4>
              <ul className="space-y-3 text-gray-400 text-[14px] tracking-tight">
                <li><a href="#services" className="hover:text-white transition">AI chatbots</a></li>
                <li><a href="#services" className="hover:text-white transition">Video production</a></li>
                <li><a href="#services" className="hover:text-white transition">Automation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-[15px] mb-6 tracking-tight">Industries</h4>
              <ul className="space-y-3 text-gray-400 text-[14px] tracking-tight">
                <li><a href="#industries" className="hover:text-white transition">Home services</a></li>
                <li><a href="#industries" className="hover:text-white transition">Healthcare</a></li>
                <li><a href="#industries" className="hover:text-white transition">Legal</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-[15px] mb-6 tracking-tight">Contact</h4>
              <ul className="space-y-3 text-gray-400 text-[14px] tracking-tight">
                <li>Manhattan, New York</li>
                <li><a href="tel:2122570112" className="hover:text-white transition">(212) 257-0112</a></li>
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