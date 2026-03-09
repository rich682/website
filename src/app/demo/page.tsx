"use client";

import Script from "next/script";

const trustBadges = [
  { text: "Audit-friendly by design" },
  { text: "Guided setup with a dedicated account manager" },
  { text: "Built for accounting teams" },
];

export default function DemoPage() {
  return (
    <main className="pt-28 lg:pt-36 pb-20 lg:pb-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left side - copy */}
          <div className="lg:sticky lg:top-32">
            <span className="inline-flex items-center text-xs font-medium uppercase tracking-widest text-foreground-muted mb-5">
              Request a Demo
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl text-foreground leading-[1.1] mb-6 tracking-tight">
              Get control of your book close today.
            </h1>
            <p className="text-lg text-foreground-secondary max-w-lg mb-10 leading-relaxed">
              Book a 30-minute demo and see how Vergo can help your team close faster, automate follow-ups, and free up time for higher-value work -- all in one platform.
            </p>

            <div className="space-y-5">
              {trustBadges.map((badge) => (
                <div key={badge.text} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-highlight-light flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-highlight" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-foreground-secondary">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - HubSpot meeting embed */}
          <div className="min-h-[900px]">
            <div
              className="meetings-iframe-container [&>iframe]:!min-h-[850px]"
              data-src="https://meetings.hubspot.com/rich-kane/rs?embed=true"
            />
            <Script
              src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"
              strategy="afterInteractive"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
