export const metadata = {
  title: "Privacy Policy | Automagixx",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-24">
      <div className="max-w-3xl mx-auto text-gray-700 text-[17px] leading-relaxed space-y-8">
        <h1 className="text-4xl font-semibold text-gray-900 tracking-tight">Privacy Policy</h1>
        <p>Brendan Kelly, doing business as Automagixx</p>
        <p>Effective Date: Jan 1st, 2026</p>
        <p className="font-semibold text-gray-900 uppercase text-sm tracking-wide">
          Important notice regarding text messaging data
        </p>
        <p>
          Brendan Kelly, doing business as Automagixx does not share customer opt-in information,
          including phone numbers and consent records, with affiliates or third parties for marketing
          or promotional purposes unrelated to providing our services. Text messaging originator
          opt-in data is kept confidential.
        </p>
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Information we collect</h2>
          <p>
            Personal information such as name, email, phone number, payment information when
            applicable, opt-in records, and non-personal data such as device and usage information.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">2. How we use your information</h2>
          <p>
            To provide and improve services, schedule appointments, communicate with customers,
            maintain consent records, and protect against fraud.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">3. SMS messaging</h2>
          <p>
            Messages are sent only after explicit opt-in. Reply STOP to unsubscribe; reply HELP for
            assistance. Message frequency varies. Message and data rates may apply. Carriers are not
            liable for delayed or undelivered messages.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">SMS data protection</h2>
          <p>
            No mobile information is shared with third parties or affiliates for
            marketing or promotional purposes. Information may be shared with subcontractors for
            support services only. Text messaging originator opt-in data and consent are not shared
            with third parties for unrelated use cases.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Contact</h2>
          <p>
            <a href="mailto:brendan@automagixx.com" className="text-blue-700 underline">
              brendan@automagixx.com
            </a>
            <br />
            <a href="tel:+19175727734" className="text-blue-700 underline">
              (917) 572-7734
            </a>
            <br />
            <a href="https://automagixx.com" className="text-blue-700 underline">
              https://automagixx.com
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}
