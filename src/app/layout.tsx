import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Vergo | Stop Chasing. Start Closing.",
  description: "AI-powered request management and document collection for accounting teams. Send smart requests, track responses automatically, and close tasks faster.",
  keywords: ["accounting software", "request management", "document collection", "AI accounting", "client follow-up", "automated reminders", "accounting workflow", "bookkeeping automation"],
  openGraph: {
    title: "Vergo | Stop Chasing. Start Closing.",
    description: "AI-powered request management and document collection for accounting teams. Send smart requests, track responses automatically, and close tasks faster.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${playfair.variable} antialiased bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}
