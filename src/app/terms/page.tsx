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
            <p className="font-medium text-gray-900">No Guarantees:</p>
            <p>While we aim to improve business performance, results may vary.</p>
          </div>

          <div>
            <p className="font-medium text-gray-900">Communication:</p>
            <p>
              By submitting your information, you agree to receive communications via phone, email,
              and SMS. Message frequency varies. Message and data rates may apply. Reply STOP to
              unsubscribe.
            </p>
          </div>

          <div>
            <p className="font-medium text-gray-900">User Responsibility:</p>
            <p>You agree to provide accurate information and use services lawfully.</p>
          </div>

          <div>
            <p className="font-medium text-gray-900">Contact:</p>
            <p>
              <a
                href="mailto:brendan@automagixx.com"
                className="underline underline-offset-2 hover:text-gray-900"
              >
                brendan@automagixx.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
