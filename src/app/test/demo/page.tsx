"use client";

import { useEffect, useRef } from "react";

const trustBadges = [
  { text: "Audit-friendly by design" },
  { text: "Guided setup with a dedicated account manager" },
  { text: "Built for accounting teams" },
];

function HubSpotEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="meetings-iframe-container"
      data-src="https://meetings.hubspot.com/rich-kane/vergoclosemanagement?embed=true"
      style={{ minWidth: 320, height: 700 }}
    />
  );
}

export default function TestDemoPage() {
  return (
    <main
      style={
        {
          "--background": "#FFFFFF",
          "--background-secondary": "#F7F7F8",
          "--background-tertiary": "#EFEFEF",
          "--highlight": "#6366F1",
          "--highlight-light": "rgba(99, 102, 241, 0.08)",
          "--border": "#E5E7EB",
          "--border-hover": "#D1D5DB",
          "--success": "#22C55E",
          "--warning": "#F59E0B",
          "--error": "#EF4444",
        } as React.CSSProperties
      }
      className="bg-white pt-36 lg:pt-48 pb-24 lg:pb-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left side */}
          <div className="lg:sticky lg:top-36 lg:py-8">
            <span className="inline-flex items-center text-xs font-semibold uppercase tracking-widest text-[#6366F1] mb-5">
              Schedule a Demo
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#111] leading-[1.1] mb-6 tracking-tight">
              See Vergo <span className="text-[#6366F1]">in action.</span>
            </h1>
            <p className="text-lg text-[#666] max-w-lg mb-10 leading-relaxed">
              Book a 30-minute demo and see how Vergo can help your team close
              faster, automate follow-ups, and free up time for higher-value
              work—all in one platform.
            </p>

            <div className="space-y-5">
              {trustBadges.map((badge) => (
                <div key={badge.text} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[rgba(99,102,241,0.08)] flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-3 h-3 text-[#6366F1]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-[#666]">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - HubSpot embed */}
          <HubSpotEmbed />
        </div>
      </div>
    </main>
  );
}
