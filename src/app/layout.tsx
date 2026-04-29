import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import ChatWidget from "./components/ChatWidget";

export const metadata: Metadata = {
  title: "Automagixx | Managed AI Employees for Small Businesses",
  description:
    "Hire your first AI employee. Automagixx builds managed AI workers that capture leads, follow up, book appointments, create content, and automate operations.",
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
        <ChatWidget />
      </body>
    </html>
  );
}
