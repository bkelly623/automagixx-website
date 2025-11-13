import Image from "next/image";
import { MessageSquare, TrendingUp, Zap, Home as HomeIcon, Briefcase, Scale, Heart, Building2, Dumbbell, Video, FileText, Calendar, Bot } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <div className="flex items-center">
              <Image
                src="/logo.png"
                alt="Automagixx"
                width={280}
                height={70}
                className="h-16 w-auto"
                priority
              />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition font-medium text-base">Services</a>
              <a href="#industries" className="text-gray-700 hover:text-blue-600 transition font-medium text-base">Industries</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 transition font-medium text-base">How It Works</a>
              <a href="tel:2122570112" className="text-gray-700 hover:text-blue-600 transition font-medium text-base">(212) 257-0112</a>
              <a 
                href="https://calendly.com/automagixx/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 font-semibold text-base"
              >
                Get Started Free
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Stripe/Linear Inspired */}
      <section className="relative pt-40 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white">
        {/* Subtle Gradient Orbs */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#0A1628]/8 to-blue-400/8 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Text Content */}
            <div className="space-y-8">
              <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Automate Your Business.
                <br />
                <span className="text-blue-600">Multiply Your Results.</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
                AI that works while you sleep.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a 
                  href="https://calendly.com/automagixx/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Get Started Free
                  <span className="ml-2">→</span>
                </a>
                <a 
                  href="#how-it-works"
                  className="inline-flex items-center justify-center bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 transition-all duration-300 border border-gray-200"
                >
                  See How It Works
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
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Setup in Days
                </span>
              </div>
            </div>

            {/* Right Side - Dashboard Image */}
            <div className="relative lg:block hidden">
              <div className="relative transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-3xl blur-2xl"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
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

      {/* Services Section - 5 Services */}
      <section id="services" className="py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">What We Do</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">AI automation that transforms how you do business</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Bot className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">AI Chatbots & Lead Generation</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Intelligent chatbots that handle customer service, qualify leads, and book appointments 24/7. Never miss another opportunity to grow your business.
              </p>
              <div className="pt-6 border-t border-gray-100">
                <span className="text-sm font-semibold text-blue-600">24/7 Availability • Lead Qualification • Smart Routing</span>
              </div>
            </div>

            {/* Service 2 */}
            <div className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Video className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Commercial & Content Creation</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Professional marketing videos, social media content, and commercials that look like you hired a Hollywood team—delivered fast at a fraction of the cost.
              </p>
              <div className="pt-6 border-t border-gray-100">
                <span className="text-sm font-semibold text-purple-600">Video Production • Social Media • Brand Content</span>
              </div>
            </div>

            {/* Service 3 */}
            <div className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Business Process Automation</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Eliminate repetitive tasks and run your operations on autopilot. From workflows to follow-ups, we automate what slows you down.
              </p>
              <div className="pt-6 border-t border-gray-100">
                <span className="text-sm font-semibold text-green-600">Workflow Automation • Integration • Efficiency</span>
              </div>
            </div>

            {/* Service 4 */}
            <div className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Smart Appointment Scheduling</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Fill your calendar automatically with qualified prospects. AI-powered scheduling that eliminates no-shows and maximizes your time.
              </p>
              <div className="pt-6 border-t border-gray-100">
                <span className="text-sm font-semibold text-orange-600">Auto-Booking • Reminders • Calendar Sync</span>
              </div>
            </div>

            {/* Service 5 */}
            <div className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">AI Content Marketing</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Scale your content without hiring writers. Get SEO-optimized blog posts, social copy, and marketing materials that drive traffic and convert.
              </p>
              <div className="pt-6 border-t border-gray-100">
                <span className="text-sm font-semibold text-pink-600">SEO Content • Copywriting • Social Posts</span>
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-3xl shadow-xl flex flex-col justify-center items-center text-center text-white">
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
      <section id="industries" className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Industries We Serve</h2>
            <p className="text-xl text-gray-600">Specialized AI solutions proven across multiple sectors</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group text-center p-10 hover:bg-gradient-to-br hover:from-blue-50 hover:to-white rounded-3xl transition-all duration-300 border border-transparent hover:border-blue-100">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <HomeIcon className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Home Services</h3>
              <p className="text-gray-600">HVAC, Plumbing, Electrical, Contractors</p>
            </div>
            <div className="group text-center p-10 hover:bg-gradient-to-br hover:from-pink-50 hover:to-white rounded-3xl transition-all duration-300 border border-transparent hover:border-pink-100">
              <div className="w-24 h-24 bg-gradient-to-br from-pink-100 to-pink-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-12 h-12 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Wellness & Longevity</h3>
              <p className="text-gray-600">Med Spas, Clinics, Alternative Therapy</p>
            </div>
            <div className="group text-center p-10 hover:bg-gradient-to-br hover:from-purple-50 hover:to-white rounded-3xl transition-all duration-300 border border-transparent hover:border-purple-100">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Scale className="w-12 h-12 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Legal Services</h3>
              <p className="text-gray-600">Law Firms, Attorneys, Legal Consultants</p>
            </div>
            <div className="group text-center p-10 hover:bg-gradient-to-br hover:from-green-50 hover:to-white rounded-3xl transition-all duration-300 border border-transparent hover:border-green-100">
              <div className="w-24 h-24 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Briefcase className="w-12 h-12 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Professional Services</h3>
              <p className="text-gray-600">Accountants, Consultants, Agencies</p>
            </div>
            <div className="group text-center p-10 hover:bg-gradient-to-br hover:from-orange-50 hover:to-white rounded-3xl transition-all duration-300 border border-transparent hover:border-orange-100">
              <div className="w-24 h-24 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Building2 className="w-12 h-12 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Hospitality</h3>
              <p className="text-gray-600">Hotels, Restaurants, B&Bs, Event Venues</p>
            </div>
            <div className="group text-center p-10 hover:bg-gradient-to-br hover:from-red-50 hover:to-white rounded-3xl transition-all duration-300 border border-transparent hover:border-red-100">
              <div className="w-24 h-24 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Dumbbell className="w-12 h-12 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Fitness & Recovery</h3>
              <p className="text-gray-600">Gyms, Wellness Centers, Spas</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">How It Works</h2>
            <p className="text-xl text-gray-600">Get started in three simple steps</p>
          </div>
          <div className="grid md:grid-cols-3 gap-16 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-16 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-blue-300 via-blue-500 to-blue-300"></div>
            
            <div className="text-center relative">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-full flex items-center justify-center text-4xl font-bold mx-auto mb-8 shadow-2xl relative z-10">1</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Schedule Consultation</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Book a free call. We&apos;ll discuss your business needs and show you exactly how AI can transform your operations and drive growth.
              </p>
            </div>
            <div className="text-center relative">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-full flex items-center justify-center text-4xl font-bold mx-auto mb-8 shadow-2xl relative z-10">2</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">We Build Your AI</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Custom AI assistant trained on your business. Live and working in days, not weeks. We handle everything—you just watch it perform.
              </p>
            </div>
            <div className="text-center relative">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-full flex items-center justify-center text-4xl font-bold mx-auto mb-8 shadow-2xl relative z-10">3</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">See Results</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Start your free 30-day trial. Track every lead captured, appointment booked, and dollar saved with detailed weekly reports.
              </p>
            </div>
          </div>
          <div className="text-center mt-16">
            <a 
              href="https://calendly.com/automagixx/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-12 py-5 rounded-full text-xl font-bold hover:bg-blue-700 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Start Your Free 30-Day Trial
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
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
              className="bg-white text-blue-600 px-12 py-5 rounded-full text-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-2xl transform hover:scale-105"
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
          <div className="mt-12 flex items-center justify-center gap-12 text-blue-100 text-base">
            <span className="flex items-center gap-2">
              <span className="text-2xl">⚡</span> Setup in Days, Not Weeks
            </span>
            <span className="flex items-center gap-2">
              <span className="text-2xl">💰</span> Risk-Free Trial
            </span>
            <span className="flex items-center gap-2">
              <span className="text-2xl">🎯</span> Proven Results
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <Image
                src="/logo-dark.png"
                alt="Automagixx"
                width={200}
                height={50}
                className="h-12 w-auto mb-6"
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
                <li><a href="tel:2122570112" className="hover:text-white transition font-semibold text-base">(212) 257-0112</a></li>
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