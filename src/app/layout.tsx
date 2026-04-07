import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import ChatWidget from "./components/ChatWidget";
import BookingModal from "@/components/BookingModal";

export const metadata: Metadata = {
  title: "Automagixx | AI Systems That Capture More Business",
  description:
    "Practical AI for local businesses: capture calls, respond faster, follow up automatically, and build trust — voice AI first, then the full follow-through stack.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen">
        <Providers>{children}</Providers>
        <BookingModal />
        <ChatWidget />
      </body>
    </html>
  );
}
