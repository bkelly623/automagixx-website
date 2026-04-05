import type { Metadata } from "next";
import MissedCallCalculator from "../components/MissedCallCalculator";

export const metadata: Metadata = {
  title: "Missed Call Calculator | Automagixx",
  description:
    "Estimate revenue lost from missed calls with a quick calculator for local businesses.",
};

export default function MissedCallCalculatorPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] font-sans antialiased">
      <MissedCallCalculator />
    </main>
  );
}
