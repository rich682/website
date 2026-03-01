import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Instrument_Serif } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Vergo | Get in Control of Month End",
  description: "The operating system for accounting teams. Manage tasks, auto-requests, reconciliations, expenses, invoices, and reports in one AI-powered platform.",
  keywords: ["accounting software", "accounting platform", "task management", "auto-request management", "account reconciliation", "AI accounting", "expense management", "invoice processing", "accounting workflow", "bookkeeping automation"],
  openGraph: {
    title: "Vergo | Get in Control of Month End",
    description: "The operating system for accounting teams. Manage tasks, auto-requests, reconciliations, expenses, invoices, and reports in one AI-powered platform.",
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
      <body className={`${geistSans.variable} ${instrumentSerif.variable} antialiased bg-background text-foreground`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
