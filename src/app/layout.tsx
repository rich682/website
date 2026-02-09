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
  title: "Vergo | Put Your Book Close on Autopilot",
  description: "The operating system for accounting teams. Manage tasks, auto-requests, documents, expenses, invoices, and reports in one AI-powered platform.",
  keywords: ["accounting software", "accounting platform", "task management", "auto-request management", "document collection", "AI accounting", "expense management", "invoice processing", "accounting workflow", "bookkeeping automation"],
  openGraph: {
    title: "Vergo | Put Your Book Close on Autopilot",
    description: "The operating system for accounting teams. Manage tasks, auto-requests, documents, expenses, invoices, and reports in one AI-powered platform.",
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
