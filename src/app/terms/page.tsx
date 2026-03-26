export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-[38px] lg:text-[48px] font-semibold text-gray-900 tracking-tight leading-[1.1] mb-8">
          Terms of Service
        </h1>

        <div className="space-y-6 text-gray-700 text-[18px] leading-relaxed tracking-tight">
          <p>By using Automagixx services, you agree to the following:</p>

          <div>
            <p className="font-medium text-gray-900">Services:</p>
            <p>Automagixx provides call handling, lead capture, and automation services.</p>
          </div>

          <div>
            <p className="font-medium text-gray-900">SMS Program:</p>
            <p>
              By opting in, you agree to receive SMS messages from Automagixx, including
              appointment reminders, service updates, and follow-ups.
            </p>
            <p className="mt-3">Message frequency varies. Message and data rates may apply.</p>
          </div>

          <div>
            <p className="font-medium text-gray-900">Opt-Out:</p>
            <p>
              You can opt out at any time by replying STOP. For help, reply HELP.
            </p>
          </div>

          <div>
            <p className="font-medium text-gray-900">Support:</p>
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
            <p className="font-medium text-gray-900">No Guarantees:</p>
            <p>We aim to improve business performance, but results may vary.</p>
          </div>

          <div>
            <p className="font-medium text-gray-900">Carrier Disclaimer:</p>
            <p>Mobile carriers are not liable for delayed or undelivered messages.</p>
          </div>

          <div>
            <p className="font-medium text-gray-900">Age Restriction:</p>
            <p>You must be at least 18 years old to use our services.</p>
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
