export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-[38px] lg:text-[48px] font-semibold text-gray-900 tracking-tight leading-[1.1] mb-8">
          Privacy Policy
        </h1>

        <div className="space-y-6 text-gray-700 text-[18px] leading-relaxed tracking-tight">
          <p>Automagixx respects your privacy.</p>

          <p>
            We collect your name, phone number, and email when you submit forms on our website for
            the purpose of scheduling calls, providing services, and communicating with you.
          </p>

          <p>We do not sell, rent, or share your personal information with third parties.</p>

          <p>
            By submitting your information, you consent to receive communications via phone, email,
            and SMS. Message frequency varies. Message and data rates may apply.
          </p>

          <p>You can opt out at any time by replying STOP to SMS messages.</p>

          <p className="font-medium text-gray-900 mt-10">For questions, contact:</p>
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
    </main>
  );
}
