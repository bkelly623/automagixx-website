export const metadata = {
  title: "Terms of Service | Automagixx",
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-white px-6 py-24">
      <div className="max-w-3xl mx-auto text-gray-700 text-[17px] leading-relaxed space-y-8">
        <h1 className="text-4xl font-semibold text-gray-900 tracking-tight">Terms of Service</h1>
        <p>Brendan Kelly, doing business as Automagixx</p>
        <p>Effective Date: Jan 1st, 2026</p>
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">SMS messaging terms</h2>
          <p>
            This program sends appointment confirmation and reminder messages to customers who have
            booked with Automagixx and opted in via web forms. Text STOP to cancel; text HELP for
            help. Message and data rates may apply. Carriers are not liable for delayed or
            undelivered messages. You must be 18 or older to participate.
          </p>
          <p className="mt-4">
            Privacy Policy:{" "}
            <a href="https://automagixx.com/privacy-policy" className="text-blue-700 underline">
              https://automagixx.com/privacy-policy
            </a>
          </p>
          <p className="mt-4">
            We comply with applicable laws including the TCPA and CTIA guidelines regarding SMS.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">General terms</h2>
          <p>
            This site is operated by Brendan Kelly, doing business as Automagixx. By using the site
            you agree to these terms and our Privacy Policy. We may change these terms at any time.
            Materials on the site are owned by Automagixx. Services are provided as-is. We may
            terminate access at any time. Governing law: Commonwealth of Pennsylvania.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Contact</h2>
          <p>
            Phone:{" "}
            <a href="tel:+19175727734" className="text-blue-700 underline">
              (917) 572-7734
            </a>
            <br />
            Email:{" "}
            <a href="mailto:brendan@automagixx.com" className="text-blue-700 underline">
              brendan@automagixx.com
            </a>
            <br />
            Website:{" "}
            <a href="https://automagixx.com" className="text-blue-700 underline">
              https://automagixx.com
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}
