export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-[38px] lg:text-[48px] font-semibold text-gray-900 tracking-tight leading-[1.1] mb-8">
          Privacy Policy
        </h1>

        <div className="space-y-6 text-gray-700 text-[18px] leading-relaxed tracking-tight">
          <p>Automagixx respects your privacy.</p>

          <div>
            <p className="font-medium text-gray-900">Information We Collect</p>
            <p>
              We collect personal information including name, phone number, and email when you
              submit forms or interact with our services.
            </p>
          </div>

          <div>
            <p className="font-medium text-gray-900">How We Use Information</p>
            <p>We use your information to:</p>
            <ul className="mt-2 space-y-1">
              <li>- Schedule and manage appointments</li>
              <li>- Provide requested services</li>
              <li>- Send service-related communications</li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-gray-900">SMS Opt-In Details</p>
            <p>
              By providing your phone number and opting in, you consent to receive SMS messages
              from Automagixx, including appointment confirmations, appointment reminders,
              scheduling updates, and service-related follow-ups.
            </p>
            <p className="mt-3">Message frequency varies. Message and data rates may apply.</p>
            <p className="mt-3">Reply STOP to unsubscribe. Reply HELP for assistance.</p>
          </div>

          <div>
            <p className="font-medium text-gray-900">No Sharing of SMS Data (CRITICAL)</p>
            <p>
              We do not sell, rent, or share your personal information or SMS consent with third
              parties for marketing purposes.
            </p>
          </div>

          <div>
            <p className="font-medium text-gray-900">Cookies &amp; Tracking</p>
            <p>
              We may use basic cookies and tracking technologies to improve user experience.
            </p>
          </div>

          <div>
            <p className="font-medium text-gray-900">Data Security</p>
            <p>We take reasonable measures to protect your personal information.</p>
          </div>

          <div>
            <p className="font-medium text-gray-900">User Rights</p>
            <p>
              You may request access, updates, or deletion of your personal information at any
              time.
            </p>
          </div>

          <div>
            <p className="font-medium text-gray-900">Contact Information</p>
            <p>
              Email:{" "}
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
