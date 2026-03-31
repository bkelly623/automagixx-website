export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-white px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-[38px] lg:text-[48px] font-semibold text-gray-900 tracking-tight leading-[1.1] mb-8">
          Terms of Service
        </h1>

        <div className="space-y-6 text-gray-700 text-[18px] leading-relaxed tracking-tight">
          <p>By using Automagixx services, you agree to the following:</p>

          <div>
            <p className="font-medium text-gray-900">Description of SMS Program</p>
            <p>
              Automagixx provides call handling, lead capture, and automation services. Users may
              receive SMS messages related to appointment confirmations, reminders, scheduling
              updates, and service-related follow-ups.
            </p>
          </div>

          <div>
            <p className="font-medium text-gray-900">Opt-Out Instructions</p>
            <p>You may opt out at any time by replying STOP. For help, reply HELP.</p>
          </div>

          <div>
            <p className="font-medium text-gray-900">Message &amp; Data Rates</p>
            <p>Message frequency varies. Message and data rates may apply.</p>
          </div>

          <div>
            <p className="font-medium text-gray-900">Support Contact</p>
            <p>For assistance, contact:</p>
            <p>
              <a
                href="mailto:brendan@automagixx.com"
                className="underline underline-offset-2 hover:text-gray-900"
              >
                brendan@automagixx.com
              </a>
            </p>
          </div>

          <div>
            <p className="font-medium text-gray-900">Carrier Liability Disclaimer</p>
            <p>Mobile carriers are not liable for delayed or undelivered messages.</p>
          </div>

          <div>
            <p className="font-medium text-gray-900">Age Restriction</p>
            <p>You must be at least 18 years old to use our services.</p>
          </div>

          <div>
            <p className="font-medium text-gray-900">Privacy Policy</p>
            <p>Your use of our services is also governed by our Privacy Policy:</p>
            <p>
              <a
                href="https://automagixx.com/privacy-policy"
                className="underline underline-offset-2 hover:text-gray-900"
              >
                https://automagixx.com/privacy-policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
