export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-[38px] lg:text-[48px] font-semibold text-gray-900 tracking-tight leading-[1.1] mb-8">
          Privacy Policy
        </h1>

        <div className="space-y-6 text-gray-700 text-[18px] leading-relaxed tracking-tight">
          <p>
            Automagixx respects your privacy and is committed to protecting your personal
            information.
          </p>

          <div>
            <p className="font-medium text-gray-900">Information We Collect:</p>
            <p>
              We collect personal information such as your name, phone number, email address, and
              service-related details when you submit forms on our website or interact with our
              services.
            </p>
          </div>

          <div>
            <p className="font-medium text-gray-900">How We Use Information:</p>
            <p>We use your information to:</p>
            <ul className="mt-2 space-y-1">
              <li>- Schedule and manage appointments</li>
              <li>- Provide requested services</li>
              <li>- Communicate with you regarding your request</li>
              <li>- Send service-related communications via SMS and/or email</li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-gray-900">SMS Communications:</p>
            <p>
              By providing your phone number and explicitly opting in, you consent to receive SMS
              messages from Automagixx. These messages may include appointment confirmations,
              appointment reminders, scheduling updates, and service-related follow-ups.
            </p>
            <p className="mt-3">Message frequency varies. Message and data rates may apply.</p>
            <p className="mt-3">
              You can opt out at any time by replying STOP. For assistance, reply HELP.
            </p>
          </div>

          <div>
            <p className="font-medium text-gray-900">SMS Consent:</p>
            <p>
              SMS consent is not shared with third parties or affiliates for marketing purposes.
            </p>
          </div>

          <div>
            <p className="font-medium text-gray-900">Data Sharing:</p>
            <p>We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>
            <p className="mt-3">
              We may share information with service providers strictly for operational purposes
              (such as communication delivery platforms), but never for independent marketing use.
            </p>
          </div>

          <div>
            <p className="font-medium text-gray-900">Data Security:</p>
            <p>
              We take reasonable technical and organizational measures to protect your personal
              information.
            </p>
          </div>

          <div>
            <p className="font-medium text-gray-900">User Rights:</p>
            <p>
              You may request access to, correction of, or deletion of your personal information at
              any time by contacting us.
            </p>
          </div>

          <div>
            <p className="font-medium text-gray-900">Cookies &amp; Tracking:</p>
            <p>We may use basic website tracking tools to improve user experience and site performance.</p>
          </div>

          <p className="font-medium text-gray-900 mt-10">Contact Information:</p>
          <p>If you have any questions about this Privacy Policy, contact us at:</p>
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
