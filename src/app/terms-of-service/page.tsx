export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-white px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-[38px] lg:text-[48px] font-semibold text-gray-900 tracking-tight leading-[1.1] mb-8">
          Terms of Service
        </h1>

        <div className="space-y-6 text-gray-700 text-[18px] leading-relaxed tracking-tight">
          <p>By using Automagixx services, you agree to the following terms:</p>

          <div>
            <p className="font-medium text-gray-900">Services:</p>
            <p>
              Automagixx provides call handling, lead capture, appointment booking, and business
              automation services.
            </p>
          </div>

          <div>
            <p className="font-medium text-gray-900">SMS Program:</p>
            <p>
              By submitting your information through our website and explicitly opting in to SMS
              communication, you agree to receive text messages from Automagixx.
            </p>
            <p className="mt-3">These messages may include:</p>
            <ul className="mt-2 space-y-1">
              <li>- Appointment confirmations</li>
              <li>- Appointment reminders</li>
              <li>- Scheduling updates</li>
              <li>- Service-related follow-ups</li>
            </ul>
            <p className="mt-3">Message frequency varies. Message and data rates may apply.</p>
          </div>

          <div>
            <p className="font-medium text-gray-900">Opt-Out:</p>
            <p>
              You may opt out of SMS communications at any time by replying STOP to any message.
              For assistance, reply HELP.
            </p>
          </div>

          <div>
            <p className="font-medium text-gray-900">Consent Requirement:</p>
            <p>
              SMS messages are only sent to users who have provided explicit consent through a
              website form or other approved opt-in method. Consent is not a condition of purchase.
            </p>
          </div>

          <div>
            <p className="font-medium text-gray-900">No Sharing of Consent:</p>
            <p>
              SMS consent is not shared with third parties or affiliates for marketing purposes.
            </p>
          </div>

          <div>
            <p className="font-medium text-gray-900">Support:</p>
            <p>For support or questions, contact:</p>
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
            <p className="font-medium text-gray-900">No Guarantees:</p>
            <p>
              Automagixx aims to improve business performance and efficiency, but results are not
              guaranteed and may vary.
            </p>
          </div>

          <div>
            <p className="font-medium text-gray-900">Carrier Disclaimer:</p>
            <p>Mobile carriers are not responsible for delayed or undelivered messages.</p>
          </div>

          <div>
            <p className="font-medium text-gray-900">Eligibility:</p>
            <p>You must be at least 18 years old to use our services.</p>
          </div>

          <div>
            <p className="font-medium text-gray-900">Changes to Terms:</p>
            <p>
              We may update these Terms of Service at any time. Continued use of our services
              constitutes acceptance of any changes.
            </p>
          </div>

          <div>
            <p className="font-medium text-gray-900">Privacy:</p>
            <p>Your use of our services is also governed by our Privacy Policy.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
