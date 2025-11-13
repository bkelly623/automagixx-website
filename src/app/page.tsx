import Image from "next/image";
import { MessageSquare, TrendingUp, Zap, Home as HomeIcon, Briefcase, Scale, Heart, Building2, Dumbbell, Video, FileText, Calendar, Bot, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation - Fixed with LARGE logo */}
      <nav className="fixed top-0 w-full bg-white border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-12">
              <Image
                src="/logo.png"
                alt="Automagixx"
                width={240}
                height={64}
                className="w-auto h-16"
                priority
              />
              <div className="hidden lg:flex items-center gap-8">
                <a href="#services" className="text-gray-700 hover:text-gray-900 transition text-base font-medium">Services</a>
                <a href="#industries" className="text-gray-700 hover:text-gray-900 transition text-base font-medium">Industries</a>
                <a href="#how-it-works" className="text-gray-700 hover:text-gray-900 transition text-base font-medium">How It Works</a>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <a href="tel:2122570112" className="hidden md:block text-gray-700 hover:text-gray-900 transition text-base font-medium">(212) 257-0112</a>
              <a 
                href="https://calendly.com/automagixx/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-200 text-base font-semibold"
              >
                Free Consultation
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden bg-white">
        {/* Subtle Gradient Orbs */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#0A1628]/8 to-blue-400/8 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Text */}
            <div className="space-y-8">
              <h1 className="text-7xl font-bold text-gray-900 leading-[1.1]">
                Automate Your Business.
                <br />
                <span className="text-blue-600">Multiply Your Results.</span>
              </h1>
              
              <p className="text-2xl text-gray-600 leading-relaxed">
                AI that works while you sleep.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a 
                  href="https://calendly.com/automagixx/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-xl text-base font-semibold hover:bg-blue-700 transition-all duration-200 shadow-sm hover:shadow-md group"
                >
                  Try Free for 30 Days
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="https://calendly.com/automagixx/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-white text-gray-900 px-8 py-4 rounded-xl text-base font-semibold hover:bg-gray-50 transition-all duration-200 border border-gray-300"
                >
                  Book Free Consultation
                </a>
              </div>
              
              <div className="flex items-center gap-8 text-sm text-gray-600 pt-4">
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  30-Day Free Trial
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Cancel Anytime
                </span>
              </div>
            </div>

            {/* Right - Dashboard Image */}
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

      {/* Services - Premium Headers */}
      <section id="services" className="py-32 px-6 bg-gray-50 relative overflow-hidden">
        {/* Gradient Accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className="text-blue-600 font-semibold text-sm tracking-wide uppercase">What We Do</span>
            </div>
            <h2 className="text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                AI Automation That Transforms
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Power your business with intelligent automation solutions</p>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Large Featured Card */}
            <div className="lg:col-span-2 bg-gradient-to-br from-blue-600 to-blue-700 p-10 rounded-2xl text-white relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <Bot className="w-12 h-12 mb-6" />
                <h3 className="text-3xl font-bold mb-4">AI Chatbots & Lead Generation</h3>
                <p className="text-blue-100 text-lg leading-relaxed mb-6">
                  Intelligent chatbots that handle customer service, qualify leads, and book appointments 24/7. Never miss another opportunity.
                </p>
                <div className="inline-flex items-center text-white font-semibold group-hover:gap-3 gap-2 transition-all">
                  Learn more
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300 group">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Video className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Commercial & Content Creation</h3>
              <p className="text-gray-600 leading-relaxed">
                Professional marketing videos and commercials delivered fast at a fraction of the cost.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all duration-300 group">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Business Process Automation</h3>
              <p className="text-gray-600 leading-relaxed">
                Eliminate repetitive tasks and run operations on autopilot.
              </p>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300 group">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Calendar className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Smart Appointment Scheduling</h3>
              <p className="text-gray-600 leading-relaxed">
                Fill your calendar automatically with qualified prospects.
              </p>
            </div>

            {/* Service 5 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-pink-300 hover:shadow-lg transition-all duration-300 group">
              <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FileText className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">AI Content Marketing</h3>
              <p className="text-gray-600 leading-relaxed">
                Scale your content without hiring writers. SEO-optimized and conversion-focused.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries - Premium Headers */}
      <section id="industries" className="py-32 px-6 bg-white relative overflow-hidden">
        {/* Gradient Background Accent */}
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-blue-50 to-transparent rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className="text-blue-600 font-semibold text-sm tracking-wide uppercase">Industries We Serve</span>
            </div>
            <h2 className="text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
                Specialized Solutions for Every Sector
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Proven AI automation across multiple industries</p>
          </div>

          {/* Horizontal Scrolling Container */}
          <div className="relative">
            <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {/* Industry Card 1 */}
              <div className="flex-none w-80 snap-start">
                <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                    <HomeIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">Home Services</h3>
                  <p className="text-gray-600 mb-6">HVAC, Plumbing, Electrical, Contractors</p>
                  <div className="inline-flex items-center text-blue-600 font-semibold text-sm gap-2">
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Industry Card 2 */}
              <div className="flex-none w-80 snap-start">
                <div className="bg-gradient-to-br from-pink-50 to-white p-8 rounded-2xl border border-pink-100 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">Wellness & Longevity</h3>
                  <p className="text-gray-600 mb-6">Med Spas, Clinics, Alternative Therapy</p>
                  <div className="inline-flex items-center text-pink-600 font-semibold text-sm gap-2">
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Industry Card 3 */}
              <div className="flex-none w-80 snap-start">
                <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl border border-purple-100 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                    <Scale className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">Legal Services</h3>
                  <p className="text-gray-600 mb-6">Law Firms, Attorneys, Legal Consultants</p>
                  <div className="inline-flex items-center text-purple-600 font-semibold text-sm gap-2">
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Industry Card 4 */}
              <div className="flex-none w-80 snap-start">
                <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border border-green-100 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">Professional Services</h3>
                  <p className="text-gray-600 mb-6">Accountants, Consultants, Agencies</p>
                  <div className="inline-flex items-center text-green-600 font-semibold text-sm gap-2">
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Industry Card 5 */}
              <div className="flex-none w-80 snap-start">
                <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl border border-orange-100 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">Hospitality</h3>
                  <p className="text-gray-600 mb-6">Hotels, Restaurants, B&Bs, Event Venues</p>
                  <div className="inline-flex items-center text-orange-600 font-semibold text-sm gap-2">
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Industry Card 6 */}
              <div className="flex-none w-80 snap-start">
                <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-2xl border border-red-100 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-6">
                    <Dumbbell className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">Fitness & Recovery</h3>
                  <p className="text-gray-600 mb-6">Gyms, Wellness Centers, Spas</p>
                  <div className="inline-flex items-center text-red-600 font-semibold text-sm gap-2">
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Premium Headers */}
      <section id="how-it-works" className="py-32 px-6 bg-gray-50 relative overflow-hidden">
        {/* Gradient Line Accent */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className="text-blue-600 font-semibold text-sm tracking-wide uppercase">How It Works</span>
            </div>
            <h2 className="text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                Three Simple Steps to Success
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">From consultation to implementation in days, not months</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-16 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-blue-300 via-blue-500 to-blue-300"></div>
            
            <div className="text-center relative">
              <div className="w-32 h-32 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-4xl font-bold mx-auto mb-8 shadow-lg relative z-10">1</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Schedule Consultation</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Book a free call. We&apos;ll discuss your needs and show you how AI can transform your business.
              </p>
            </div>
            <div className="text-center relative">
              <div className="w-32 h-32 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-4xl font-bold mx-auto mb-8 shadow-lg relative z-10">2</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">We Build Your AI</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Custom AI assistant trained on your business. Live and working in days, not weeks.
              </p>
            </div>
            <div className="text-center relative">
              <div className="w-32 h-32 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-4xl font-bold mx-auto mb-8 shadow-lg relative z-10">3</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">See Results</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Track every lead captured and dollar saved with detailed weekly reports.
              </p>
            </div>
          </div>
          <div className="text-center mt-16">
            <a 
              href="https://calendly.com/automagixx/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-blue-600 text-white px-12 py-5 rounded-xl text-xl font-semibold hover:bg-blue-700 hover:shadow-lg transition-all duration-200 group"
            >
              Start Your Free 30-Day Trial
              <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px'}}></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center text-white relative z-10">
          <h2 className="text-5xl font-bold mb-6">Ready to Automate Your Business?</h2>
          <p className="text-2xl mb-12 opacity-95">
            Join hundreds of businesses using AI to scale without scaling headcount
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="https://calendly.com/automagixx/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-12 py-5 rounded-xl text-xl font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg"
            >
              Schedule Free Consultation
            </a>
            <a 
              href="tel:2122570112"
              className="bg-blue-700 text-white px-12 py-5 rounded-xl text-xl font-semibold hover:bg-blue-800 transition-all duration-200 border-2 border-white/30"
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
              <p className="text-gray-400 leading-relaxed">
                AI automation that transforms businesses.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-base mb-6">Services</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li><a href="#services" className="hover:text-white transition">AI Chatbots & Lead Gen</a></li>
                <li><a href="#services" className="hover:text-white transition">Commercial Production</a></li>
                <li><a href="#services" className="hover:text-white transition">Process Automation</a></li>
                <li><a href="#services" className="hover:text-white transition">Smart Scheduling</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-base mb-6">Industries</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li><a href="#industries" className="hover:text-white transition">Home Services</a></li>
                <li><a href="#industries" className="hover:text-white transition">Healthcare</a></li>
                <li><a href="#industries" className="hover:text-white transition">Legal</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-base mb-6">Contact</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li>Manhattan, New York</li>
                <li><a href="tel:2122570112" className="hover:text-white transition">(212) 257-0112</a></li>
                <li><a href="mailto:contact@automagixx.com" className="hover:text-white transition">contact@automagixx.com</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 Automagixx. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}