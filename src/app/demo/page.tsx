"use client";

import { Header, Footer } from "@/components/layout";
import { Container } from "@/components/ui";
import Script from "next/script";

const trustBadges = [
  { text: "No client login needed" },
  { text: "Setup in minutes" },
  { text: "Built for accounting teams" },
];

export default function DemoPage() {
  return (
    <>
      <Header />
      <main className="pt-24 lg:pt-32 pb-16 lg:pb-24">
        <Container size="wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left side - copy */}
            <div className="lg:sticky lg:top-32">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wide mb-4">
                Request a Demo
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl text-foreground leading-tight mb-6">
                Simplify your book close today.
              </h1>
              <p className="text-lg text-foreground-secondary max-w-lg mb-8 leading-relaxed">
                Book a 30-minute demo and see how Vergo can help your team close faster, automate follow-ups, and eliminate busywork -- all in one platform.
              </p>

              <div className="space-y-4">
                {trustBadges.map((badge) => (
                  <div key={badge.text} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3.5 h-3.5 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-foreground-secondary">{badge.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - HubSpot meeting embed */}
            <div className="min-h-[600px]">
              <div
                className="meetings-iframe-container"
                data-src="https://meetings.hubspot.com/rich-kane/rs?embed=true"
              />
              <Script
                src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"
                strategy="afterInteractive"
              />
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
