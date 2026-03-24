"use client";

import { FormEvent, useState } from "react";

const OTHER_HELP_OPTIONS = [
  "Getting more leads",
  "Faster follow-up",
  "Booking more jobs",
  "Website improvements",
  "Not sure / open to ideas",
];

export default function IntakePage() {
  const [businessType, setBusinessType] = useState("");
  const [averageJobValue, setAverageJobValue] = useState("");
  const [otherHelp, setOtherHelp] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    setLoading(true);
    await fetch("/api/intake", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: fd.get("name"),
        phone: fd.get("phone"),
        email: fd.get("email"),
        businessName: fd.get("businessName"),
        businessType: fd.get("businessType"),
        businessTypeOther: fd.get("businessTypeOther"),
        averageJobValue: fd.get("averageJobValue"),
        averageJobValueOther: fd.get("averageJobValueOther"),
        whoAnswersCalls: fd.get("whoAnswersCalls"),
        missCalls: fd.get("missCalls"),
        callsPerDay: fd.get("callsPerDay"),
        otherHelp: otherHelp.join(", "),
        notes: fd.get("notes"),
      }),
    });

    setLoading(false);
    setSubmitted(true);
  }

  function toggleHelpItem(item: string) {
    setOtherHelp((prev) =>
      prev.includes(item) ? prev.filter((x) => x !== item) : [...prev, item]
    );
  }

  return (
    <main className="min-h-screen bg-white px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-[38px] lg:text-[48px] font-semibold text-gray-900 tracking-tight leading-[1.1] mb-4">
          Quick Questions Before Your Call
        </h1>
        <p className="text-[18px] text-gray-600 tracking-tight mb-10">
          Takes 60 seconds. Helps me show you exactly where you&apos;re losing jobs.
        </p>

        {submitted ? (
          <div className="bg-green-50 border border-green-200 rounded-2xl p-6 text-green-800 text-[17px] tracking-tight">
            Got it. Looking forward to speaking with you.
          </div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <input name="name" required placeholder="Name" className="border border-gray-300 rounded-xl px-4 py-3 text-[15px]" />
              <input name="phone" required placeholder="Phone" className="border border-gray-300 rounded-xl px-4 py-3 text-[15px]" />
              <input type="email" name="email" required placeholder="Email" className="border border-gray-300 rounded-xl px-4 py-3 text-[15px]" />
              <input name="businessName" required placeholder="Business Name" className="border border-gray-300 rounded-xl px-4 py-3 text-[15px]" />
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-[14px] font-medium text-gray-700 mb-2">Business Type</label>
                <select
                  name="businessType"
                  required
                  value={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 text-[15px] bg-white"
                >
                  <option value="">Select...</option>
                  <option>Plumbing</option>
                  <option>HVAC</option>
                  <option>Electrical</option>
                  <option>Roofing</option>
                  <option>Garage Door</option>
                  <option>Locksmith</option>
                  <option>Pest Control</option>
                  <option>Other</option>
                </select>
                {businessType === "Other" ? (
                  <input
                    name="businessTypeOther"
                    placeholder="Other business type"
                    className="w-full mt-3 border border-gray-300 rounded-xl px-4 py-3 text-[15px]"
                  />
                ) : null}
              </div>

              <div>
                <label className="block text-[14px] font-medium text-gray-700 mb-2">Average Job Value</label>
                <select
                  name="averageJobValue"
                  required
                  value={averageJobValue}
                  onChange={(e) => setAverageJobValue(e.target.value)}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 text-[15px] bg-white"
                >
                  <option value="">Select...</option>
                  <option>$100–$300</option>
                  <option>$300–$700</option>
                  <option>$700–$1500</option>
                  <option>$1500+</option>
                  <option>Other</option>
                </select>
                {averageJobValue === "Other" ? (
                  <input
                    name="averageJobValueOther"
                    placeholder="Other average job value"
                    className="w-full mt-3 border border-gray-300 rounded-xl px-4 py-3 text-[15px]"
                  />
                ) : null}
              </div>

              <div>
                <label className="block text-[14px] font-medium text-gray-700 mb-2">Who answers calls</label>
                <select name="whoAnswersCalls" required className="w-full border border-gray-300 rounded-xl px-4 py-3 text-[15px] bg-white">
                  <option value="">Select...</option>
                  <option>Me</option>
                  <option>Staff</option>
                  <option>Receptionist</option>
                  <option>No consistent system</option>
                </select>
              </div>

              <div>
                <label className="block text-[14px] font-medium text-gray-700 mb-2">Miss calls</label>
                <select name="missCalls" required className="w-full border border-gray-300 rounded-xl px-4 py-3 text-[15px] bg-white">
                  <option value="">Select...</option>
                  <option>Yes often</option>
                  <option>Sometimes</option>
                  <option>Rarely</option>
                </select>
              </div>

              <div>
                <label className="block text-[14px] font-medium text-gray-700 mb-2">Calls per day</label>
                <select name="callsPerDay" required className="w-full border border-gray-300 rounded-xl px-4 py-3 text-[15px] bg-white">
                  <option value="">Select...</option>
                  <option>1–5</option>
                  <option>5–10</option>
                  <option>10–20</option>
                  <option>20+</option>
                  <option>Not sure</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[14px] font-medium text-gray-700 mb-3">Other help</label>
              <div className="grid sm:grid-cols-2 gap-2">
                {OTHER_HELP_OPTIONS.map((opt) => (
                  <label key={opt} className="flex items-center gap-2 text-[14px] text-gray-700">
                    <input
                      type="checkbox"
                      checked={otherHelp.includes(opt)}
                      onChange={() => toggleHelpItem(opt)}
                    />
                    {opt}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-[14px] font-medium text-gray-700 mb-2">Anything I should know before we talk? (optional)</label>
              <textarea name="notes" rows={4} className="w-full border border-gray-300 rounded-xl px-4 py-3 text-[15px]" />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center bg-blue-600 text-white px-7 py-3.5 rounded-full hover:bg-blue-700 transition-all text-[15px] font-medium disabled:opacity-60"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        )}
      </div>
    </main>
  );
}

