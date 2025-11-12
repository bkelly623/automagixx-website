import Image from "next/image";
import { MessageSquare, TrendingUp, Zap, Home as HomeIcon, Briefcase, Scale, Heart, Building2, Dumbbell, Video, FileText, Calendar, Bot } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Image
                src="/logo.png"
                alt="Automagixx"
                width={220}
                height={60}
                className="h-12 w-auto"
                priority
              />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition font-medium">Services</a>
              <a href="#industries" className="text-gray-700 hover:text-blue-600 transition font-medium">Industries</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 transition font-medium">How It Works</a>
              <a href="tel:2122570112" className="text-gray-700 hover:text-blue-600 transition font-medium">(212) 257-0112</a>
              <a 
                href="https://calendly.com/automagixx/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 font-semibold"
              >
                Get Started Free
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Background Image */}
      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.png"
            alt=""
            fill
            className="object-cover opacity-10"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628]/90 via-[#1e3a8a]/80 to-[#0EA5E9]/70"></div>
        </div>
        
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-transparent animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <div className="inline-block mb-4">
              <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                🚀 AI Automation That Actually Works
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Automate Your Business.
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Multiply Your Results.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              We build AI assistants that capture leads, book appointments, and drive sales 24/7. 
              Try it free for 30 days—see real results before spending a dollar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a 
                href="https://calendly.com/automagixx/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-5 rounded-full text-lg font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                Get Started Free
                <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">→</span>
              </a>
              <a 
                href="#how-it-works"
                className="bg-white text-blue-600 px-10 py-5 rounded-full text-lg font-bold hover:bg-gray-50 transition-all duration-300 border-2 border-blue-600 shadow-md hover:shadow-xl"
              >
                See How It Works
              </a>
            </div>
            <div className="flex items-center justify-center gap-6 text-sm text-gray-600">
              <span className="flex items-center gap-2">
                <span className="text-green-500 text-xl">✓</span> 30-Day Free Trial
              </span>
              <span className="flex items-center gap-2">
                <span className="text-green-500 text-xl">✓</span> 90-Day Money-Back Guarantee
              </span>
              <span className="flex items-center gap-2">
                <span className="text-green-500 text-xl">✓</span> Cancel Anytime
              </span>
            </div>
          </div>
        </div>

        {/* Floating UI Elements */}
        <div className="absolute top-1/4 right-10 hidden lg:block animate-bounce">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-4 border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-gray-700">New lead captured!</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - 5 Services */}
      <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">What We Do</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">AI automation that transforms how you do business</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Bot className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">AI Chatbots & Lead Generation</h3>
              <p className="text-gray-600 leading-relaxed">
                Intelligent chatbots that handle customer service, qualify leads, and book appointments 24/7. Never miss another opportunity to grow your business.
              </p>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <span className="text-sm font-semibold text-blue-600">24/7 Availability • Lead Qualification • Smart Routing</span>
              </div>
            </div>

            {/* Service 2 */}
            <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Video className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Commercial & Content Creation</h3>
              <p className="text-gray-600 leading-relaxed">
                Professional marketing videos, social media content, and commercials that look like you hired a Hollywood team—delivered fast at a fraction of the cost.
              </p>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <span className="text-sm font-semibold text-purple-600">Video Production • Social Media • Brand Content</span>
              </div>
            </div>

            {/* Service 3 */}
            <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Business Process Automation</h3>
              <p className="text-gray-600 leading-relaxed">
                Eliminate repetitive tasks and run your operations on autopilot. From workflows to follow-ups, we automate what slows you down.
              </p>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <span className="text-sm font-semibold text-green-600">Workflow Automation • Integration • Efficiency</span>
              </div>
            </div>

            {/* Service 4 */}
            <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Smart Appointment Scheduling</h3>
              <p className="text-gray-600 leading-relaxed">
                Fill your calendar automatically with qualified prospects. AI-powered scheduling that eliminates no-shows and maximizes your time.
              </p>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <span className="text-sm font-semibold text-orange-600">Auto-Booking • Reminders • Calendar Sync</span>
              </div>
            </div>

            {/* Service 5 */}
            <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">AI Content Marketing</h3>
              <p className="text-gray-600 leading-relaxed">
                Scale your content without hiring writers. Get SEO-optimized blog posts, social copy, and marketing materials that drive traffic and convert.
              </p>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <span className="text-sm font-semibold text-pink-600">SEO Content • Copywriting • Social Posts</span>
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-3xl shadow-2xl flex flex-col justify-center items-center text-center text-white">
              <h3 className="text-2xl font-bold mb-4">Custom Solutions</h3>
              <p className="mb-6 text-blue-100">Need something specific? We build custom AI solutions tailored to your unique business needs.</p>
              <a 
                href="https://calendly.com/automagixx/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-all duration-300"
              >
                Let&apos;s Talk
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600">Specialized AI solutions proven across multiple sectors</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="group text-center p-8 hover:bg-gradient-to-br hover:from-blue-50 hover:to-white rounded-2xl transition-all duration-300 border border-transparent hover:border-blue-100">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <HomeIcon className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Home Services</h3>
              <p className="text-gray-600">HVAC, Plumbing, Electrical, Contractors</p>
            </div>
            <div className="group text-center p-8 hover:bg-gradient-to-br hover:from-pink-50 hover:to-white rounded-2xl transition-all duration-300 border border-transparent hover:border-pink-100">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-100 to-pink-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-10 h-10 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Wellness & Longevity</h3>
              <p className="text-gray-600">Med Spas, Clinics, Alternative Therapy</p>
            </div>
            <div className="group text-center p-8 hover:bg-gradient-to-br hover:from-purple-50 hover:to-white rounded-2xl transition-all duration-300 border border-transparent hover:border-purple-100">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Scale className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Legal Services</h3>
              <p className="text-gray-600">Law Firms, Attorneys, Legal Consultants</p>
            </div>
            <div className="group text-center p-8 hover:bg-gradient-to-br hover:from-green-50 hover:to-white rounded-2xl transition-all duration-300 border border-transparent hover:border-green-100">
              <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Briefcase className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Professional Services</h3>
              <p className="text-gray-600">Accountants, Consultants, Agencies</p>
            </div>
            <div className="group text-center p-8 hover:bg-gradient-to-br hover:from-orange-50 hover:to-white rounded-2xl transition-all duration-300 border border-transparent hover:border-orange-100">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Building2 className="w-10 h-10 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Hospitality</h3>
              <p className="text-gray-600">Hotels, Restaurants, B&Bs, Event Venues</p>
            </div>
            <div className="group text-center p-8 hover:bg-gradient-to-br hover:from-red-50 hover:to-white rounded-2xl transition-all duration-300 border border-transparent hover:border-red-100">
              <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Dumbbell className="w-10 h-10 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Fitness & Recovery</h3>
              <p className="text-gray-600">Gyms, Wellness Centers, Spas</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Get started in three simple steps</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-12 left-1/4 right-1/4 h-1 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200"></div>
            
            <div className="text-center relative">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-2xl relative z-10">1</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Schedule Consultation</h3>
              <p className="text-gray-600 leading-relaxed">
                Book a free call. We&apos;ll discuss your business needs and show you exactly how AI can transform your operations and drive growth.
              </p>
            </div>
            <div className="text-center relative">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-2xl relative z-10">2</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">We Build Your AI</h3>
              <p className="text-gray-600 leading-relaxed">
                Custom AI assistant trained on your business. Live and working in days, not weeks. We handle everything—you just watch it perform.
              </p>
            </div>
            <div className="text-center relative">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-2xl relative z-10">3</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">See Results</h3>
              <p className="text-gray-600 leading-relaxed">
                Start your free 30-day trial. Track every lead captured, appointment booked, and dollar saved with detailed weekly reports.
              </p>
            </div>
          </div>
          <div className="text-center mt-16">
            <a 
              href="https://calendly.com/automagixx/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-blue-600 to-blue-800 text-white px-12 py-5 rounded-full text-xl font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Start Your Free 30-Day Trial
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center text-white relative z-10">
          <h2 className="text-5xl font-bold mb-6">Ready to Automate Your Business?</h2>
          <p className="text-2xl mb-10 opacity-95">
            Join hundreds of businesses using AI to scale without scaling headcount
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="https://calendly.com/automagixx/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-12 py-5 rounded-full text-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105"
            >
              Schedule Free Consultation
            </a>
            <a 
              href="tel:2122570112"
              className="bg-blue-900 text-white px-12 py-5 rounded-full text-xl font-bold hover:bg-blue-950 transition-all duration-300 shadow-xl border-2 border-white/20"
            >
              Call (212) 257-0112
            </a>
          </div>
          <div className="mt-10 flex items-center justify-center gap-8 text-blue-100">
            <span>⚡ Setup in Days, Not Weeks</span>
            <span>💰 Risk-Free Trial</span>
            <span>🎯 Proven Results</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <Image
                src="/logo-dark.png"
                alt="Automagixx"
                width={180}
                height={50}
                className="h-10 w-auto mb-6"
              />
              <p className="text-gray-400 leading-relaxed">
                AI automation that transforms businesses. Built for scale, designed for success.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6">Services</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#services" className="hover:text-white transition">AI Chatbots & Lead Gen</a></li>
                <li><a href="#services" className="hover:text-white transition">Commercial Production</a></li>
                <li><a href="#services" className="hover:text-white transition">Process Automation</a></li>
                <li><a href="#services" className="hover:text-white transition">Smart Scheduling</a></li>
                <li><a href="#services" className="hover:text-white transition">Content Marketing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6">Industries</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#industries" className="hover:text-white transition">Home Services</a></li>
                <li><a href="#industries" className="hover:text-white transition">Healthcare & Wellness</a></li>
                <li><a href="#industries" className="hover:text-white transition">Legal Services</a></li>
                <li><a href="#industries" className="hover:text-white transition">Professional Services</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6">Contact</h4>
              <ul className="space-y-3 text-gray-400">
                <li>Manhattan, New York</li>
                <li><a href="tel:2122570112" className="hover:text-white transition font-semibold">(212) 257-0112</a></li>
                <li><a href="mailto:contact@automagixx.com" className="hover:text-white transition">contact@automagixx.com</a></li>
                <li className="text-sm mt-4 text-gray-500">Monday-Friday, 9AM-6PM ET</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">&copy; 2025 Automagixx. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition text-sm">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}