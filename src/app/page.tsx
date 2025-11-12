import Image from "next/image";
import { MessageSquare, TrendingUp, Zap, Home, Briefcase, Scale, Heart, Building2, Dumbbell } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Image
                src="/logo.png"
                alt="Automagixx"
                width={180}
                height={40}
                className="h-8 w-auto"
              />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-600 hover:text-blue-600 transition">Services</a>
              <a href="#industries" className="text-gray-600 hover:text-blue-600 transition">Industries</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition">How It Works</a>
              <a href="tel:2122570112" className="text-gray-600 hover:text-blue-600 transition">(212) 257-0112</a>
              <a 
                href="https://calendly.com/automagixx/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
              >
                Get Started Free
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#1e3a8a] to-[#0EA5E9] opacity-5"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Automate Your Business.
              <br />
              <span className="text-blue-600">Multiply Your Results.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We build AI assistants that capture leads, book appointments, and drive sales 24/7. 
              Try it free for 30 days—see real results before spending a dollar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://calendly.com/automagixx/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition shadow-lg"
              >
                Get Started Free
              </a>
              <a 
                href="#how-it-works"
                className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 transition border-2 border-blue-600"
              >
                See How It Works
              </a>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              ✓ 30-Day Free Trial  ✓ 90-Day Money-Back Guarantee  ✓ Cancel Anytime
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
            <p className="text-xl text-gray-600">AI automation that actually works for your business</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition">
              <MessageSquare className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3">24/7 AI Chatbots</h3>
              <p className="text-gray-600">
                Never miss a customer inquiry. Our AI assistants answer questions, capture leads, 
                and book appointments while you sleep.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition">
              <TrendingUp className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Lead Generation</h3>
              <p className="text-gray-600">
                Automatically qualify prospects, capture contact information, and route hot leads 
                to your team instantly.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition">
              <Zap className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Business Automation</h3>
              <p className="text-gray-600">
                Eliminate repetitive tasks. Automate appointment reminders, follow-ups, 
                and customer communications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600">Specialized AI solutions for your industry</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 hover:bg-gray-50 rounded-xl transition">
              <Home className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Home Services</h3>
              <p className="text-gray-600">HVAC, Plumbing, Electrical</p>
            </div>
            <div className="text-center p-6 hover:bg-gray-50 rounded-xl transition">
              <Heart className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Wellness & Longevity</h3>
              <p className="text-gray-600">Med Spas, Clinics, Alternative Therapy</p>
            </div>
            <div className="text-center p-6 hover:bg-gray-50 rounded-xl transition">
              <Scale className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Legal Services</h3>
              <p className="text-gray-600">Law Firms, Attorneys</p>
            </div>
            <div className="text-center p-6 hover:bg-gray-50 rounded-xl transition">
              <Briefcase className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Professional Services</h3>
              <p className="text-gray-600">Accountants, Consultants</p>
            </div>
            <div className="text-center p-6 hover:bg-gray-50 rounded-xl transition">
              <Building2 className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Hospitality</h3>
              <p className="text-gray-600">Hotels, Restaurants, B&Bs</p>
            </div>
            <div className="text-center p-6 hover:bg-gray-50 rounded-xl transition">
              <Dumbbell className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Fitness & Recovery</h3>
              <p className="text-gray-600">Gyms, Wellness Centers</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Get started in three simple steps</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold mb-3">Schedule Consultation</h3>
              <p className="text-gray-600">
                Book a free call. We&apos;ll discuss your business needs and show you exactly how AI can help.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold mb-3">We Build Your AI</h3>
              <p className="text-gray-600">
                Custom AI assistant trained on your business. Live and working in days, not weeks.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold mb-3">See Results</h3>
              <p className="text-gray-600">
                Start your free 30-day trial. Track every lead captured and dollar saved with weekly reports.
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <a 
              href="https://calendly.com/automagixx/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition inline-block shadow-lg"
            >
              Start Your Free 30-Day Trial
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Automate Your Business?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join businesses using AI to scale without scaling headcount
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://calendly.com/automagixx/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition"
            >
              Schedule Free Consultation
            </a>
            <a 
              href="tel:2122570112"
              className="bg-blue-800 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-900 transition"
            >
              Call (212) 257-0112
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <Image
                src="/logo-dark.png"
                alt="Automagixx"
                width={150}
                height={35}
                className="h-8 w-auto mb-4"
              />
              <p className="text-gray-400 text-sm">
                AI automation that works for your business.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#services" className="hover:text-white transition">AI Chatbots</a></li>
                <li><a href="#services" className="hover:text-white transition">Lead Generation</a></li>
                <li><a href="#services" className="hover:text-white transition">Business Automation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Industries</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#industries" className="hover:text-white transition">Home Services</a></li>
                <li><a href="#industries" className="hover:text-white transition">Healthcare</a></li>
                <li><a href="#industries" className="hover:text-white transition">Legal</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Manhattan, New York</li>
                <li><a href="tel:2122570112" className="hover:text-white transition">(212) 257-0112</a></li>
                <li><a href="mailto:contact@automagixx.com" className="hover:text-white transition">contact@automagixx.com</a></li>
                <li className="text-xs mt-2">Monday-Friday, 9AM-6PM ET</li>
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