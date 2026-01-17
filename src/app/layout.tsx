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
  description: "The workflow layer that gets accounting teams what they need — without the follow-up fatigue. Run month-end close, collect documents, and automate reminders.",
  keywords: ["accounting", "month-end close", "document collection", "approvals workflow", "workflow automation", "accounting software"],
  openGraph: {
    title: "Vergo | Stop Chasing. Start Closing.",
    description: "The workflow layer that gets accounting teams what they need — without the follow-up fatigue.",
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
