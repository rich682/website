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
  description: "The collaboration platform for accounting teams. Manage tasks, requests, reconciliations, and reports — all in one place.",
  keywords: ["accounting software", "accounting platform", "task management", "auto-request management", "account reconciliation", "AI accounting", "expense management", "invoice processing", "accounting workflow", "bookkeeping automation"],
  openGraph: {
    title: "Vergo | Get in Control of Month End",
    description: "The collaboration platform for accounting teams. Manage tasks, requests, reconciliations, and reports — all in one place.",
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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(key){if(window.reb2b)return;window.reb2b={loaded:true};var s=document.createElement("script");s.async=true;s.src="https://ddwl4m2hdecbv.cloudfront.net/b/"+key+"/"+key+".js.gz";document.getElementsByTagName("script")[0].parentNode.insertBefore(s,document.getElementsByTagName("script")[0]);}("9NMMZH482MNW");`,
          }}
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-331832925" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'AW-331832925');`,
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${instrumentSerif.variable} antialiased bg-background text-foreground`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
