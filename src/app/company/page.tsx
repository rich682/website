import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Company | Vergo",
  description:
    "Meet the team behind Vergo. We're building the workflow platform for construction accounting teams who demand efficiency and control.",
};

const investors = [
  { name: "Nine Four Ventures", logo: "/images/investors/nine-four-ventures.webp" },
  { name: "CRV", logo: "/images/investors/crv.svg" },
  { name: "Valar Ventures", logo: "/images/investors/valar-ventures.webp" },
];

export default function CompanyPage() {
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
      className="bg-white"
    >
      {/* ============ HERO ============ */}
      <section className="pt-36 pb-20 lg:pt-48 lg:pb-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#111] leading-[1.1] tracking-tight">
              Designed for construction accounting teams who love{" "}
              <span className="block text-[#6366F1]">efficiency and control</span>
            </h1>
            <p className="mt-8 text-lg text-[#666] leading-relaxed">
              Our founding team has experienced the pain of manual book closes,
              disconnected tools, and endless follow-up emails in construction
              accounting. We built Vergo to fix it.
            </p>
          </div>
        </div>
      </section>

      {/* ============ MANIFESTO ============ */}
      <section className="py-16 lg:py-24 border-t border-[#E5E7EB] bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#111] leading-snug mb-6 tracking-tight">
                Your team deserves{" "}
                <span className="text-[#6366F1]">better tools</span> for the
                close
              </h2>
              <p className="text-[#666] leading-relaxed mb-6">
                For too long, construction accounting teams have been stuck with
                spreadsheets, emails, and legacy software that wasn&apos;t
                designed for how they actually work. The book close is one of
                the most critical processes in any construction business, yet it&apos;s still
                powered by manual effort and fragmented tools.
              </p>
              <p className="text-[#666] leading-relaxed">
                We built Vergo so construction accounting teams can focus on
                job cost analysis and strategy instead of chasing documents and
                reconciling spreadsheets. Our mission is to make every book
                close more predictable and less painful.
              </p>
            </div>

            {/* Team discussion image */}
            <div className="rounded-xl overflow-hidden aspect-square relative">
              <Image
                src="/images/company/team-discussion.webp"
                alt="Accountants discussing financial data and close processes"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============ VALUES ============ */}
      <section className="py-16 lg:py-24 border-t border-[#E5E7EB] bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#6366F1] mb-4">
              WHAT WE BELIEVE
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111] tracking-tight mb-6">
              Our Values
            </h2>
            <p className="text-[#666] leading-relaxed">
              We believe AI should empower accountants, not replace their
              judgment. Every feature we build is grounded in three principles.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Controlled Automation */}
            <div>
              <div className="rounded-xl overflow-hidden aspect-[4/3] relative bg-[#1C1C1A] flex items-center justify-center mb-6">
                <svg
                  width="220"
                  height="160"
                  viewBox="0 0 220 160"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="opacity-80"
                >
                  {/* Toggle switch track */}
                  <rect
                    x="70"
                    y="30"
                    width="80"
                    height="36"
                    rx="18"
                    stroke="rgba(255,255,255,0.25)"
                    strokeWidth="1.5"
                  />
                  {/* Toggle knob */}
                  <circle
                    cx="132"
                    cy="48"
                    r="13"
                    fill="rgba(255,255,255,0.15)"
                    stroke="rgba(255,255,255,0.5)"
                    strokeWidth="1.5"
                  />
                  {/* Human figure */}
                  <circle
                    cx="40"
                    cy="80"
                    r="10"
                    stroke="rgba(255,255,255,0.3)"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="40"
                    y1="90"
                    x2="40"
                    y2="115"
                    stroke="rgba(255,255,255,0.3)"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="28"
                    y1="100"
                    x2="52"
                    y2="100"
                    stroke="rgba(255,255,255,0.3)"
                    strokeWidth="1.5"
                  />
                  {/* Arrow from person to toggle */}
                  <path
                    d="M 56 88 L 72 65"
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="1"
                    strokeDasharray="4 3"
                  />
                  <polygon
                    points="72,65 67,70 73,71"
                    fill="rgba(255,255,255,0.2)"
                  />
                  {/* Gear */}
                  <circle
                    cx="175"
                    cy="80"
                    r="18"
                    stroke="rgba(255,255,255,0.25)"
                    strokeWidth="1.5"
                  />
                  <circle
                    cx="175"
                    cy="80"
                    r="7"
                    stroke="rgba(255,255,255,0.25)"
                    strokeWidth="1.5"
                  />
                  {/* Gear teeth */}
                  <line
                    x1="175"
                    y1="58"
                    x2="175"
                    y2="64"
                    stroke="rgba(255,255,255,0.25)"
                    strokeWidth="2"
                  />
                  <line
                    x1="175"
                    y1="96"
                    x2="175"
                    y2="102"
                    stroke="rgba(255,255,255,0.25)"
                    strokeWidth="2"
                  />
                  <line
                    x1="153"
                    y1="80"
                    x2="159"
                    y2="80"
                    stroke="rgba(255,255,255,0.25)"
                    strokeWidth="2"
                  />
                  <line
                    x1="191"
                    y1="80"
                    x2="197"
                    y2="80"
                    stroke="rgba(255,255,255,0.25)"
                    strokeWidth="2"
                  />
                  {/* Arrow from toggle to gear */}
                  <path
                    d="M 148 52 Q 158 60 158 72"
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="1"
                    strokeDasharray="4 3"
                  />
                  {/* Checkmark in bottom */}
                  <path
                    d="M 100 120 L 108 130 L 122 112"
                    stroke="rgba(255,255,255,0.35)"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#111] mb-3">
                Controlled Automation
              </h3>
              <p className="text-[#666] leading-relaxed text-[15px]">
                Automation should save you time, not make you nervous. Every
                automated action in Vergo requires your approval before it runs.
                You set the rules, define the thresholds, and decide what gets
                automated. Nothing happens without your sign-off.
              </p>
            </div>

            {/* Audit-Ready */}
            <div>
              <div className="rounded-xl overflow-hidden aspect-[4/3] relative bg-[#1C1C1A] flex items-center justify-center mb-6">
                <svg
                  width="220"
                  height="160"
                  viewBox="0 0 220 160"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="opacity-80"
                >
                  {/* Document */}
                  <rect
                    x="60"
                    y="15"
                    width="100"
                    height="130"
                    rx="6"
                    stroke="rgba(255,255,255,0.25)"
                    strokeWidth="1.5"
                  />
                  {/* Log lines */}
                  <line
                    x1="75"
                    y1="38"
                    x2="145"
                    y2="38"
                    stroke="rgba(255,255,255,0.15)"
                    strokeWidth="1"
                  />
                  <circle cx="75" cy="38" r="2.5" fill="rgba(255,255,255,0.3)" />
                  <line
                    x1="75"
                    y1="55"
                    x2="140"
                    y2="55"
                    stroke="rgba(255,255,255,0.15)"
                    strokeWidth="1"
                  />
                  <circle cx="75" cy="55" r="2.5" fill="rgba(255,255,255,0.3)" />
                  <line
                    x1="75"
                    y1="72"
                    x2="135"
                    y2="72"
                    stroke="rgba(255,255,255,0.15)"
                    strokeWidth="1"
                  />
                  <circle cx="75" cy="72" r="2.5" fill="rgba(255,255,255,0.3)" />
                  <line
                    x1="75"
                    y1="89"
                    x2="142"
                    y2="89"
                    stroke="rgba(255,255,255,0.15)"
                    strokeWidth="1"
                  />
                  <circle cx="75" cy="89" r="2.5" fill="rgba(255,255,255,0.3)" />
                  <line
                    x1="75"
                    y1="106"
                    x2="138"
                    y2="106"
                    stroke="rgba(255,255,255,0.15)"
                    strokeWidth="1"
                  />
                  <circle
                    cx="75"
                    cy="106"
                    r="2.5"
                    fill="rgba(255,255,255,0.3)"
                  />
                  <line
                    x1="75"
                    y1="123"
                    x2="130"
                    y2="123"
                    stroke="rgba(255,255,255,0.15)"
                    strokeWidth="1"
                  />
                  <circle
                    cx="75"
                    cy="123"
                    r="2.5"
                    fill="rgba(255,255,255,0.3)"
                  />
                  {/* Timestamps */}
                  <text
                    x="82"
                    y="41"
                    fill="rgba(255,255,255,0.12)"
                    fontSize="7"
                    fontFamily="monospace"
                  >
                    10:32:01 — Task approved
                  </text>
                  <text
                    x="82"
                    y="58"
                    fill="rgba(255,255,255,0.12)"
                    fontSize="7"
                    fontFamily="monospace"
                  >
                    10:31:44 — Recon matched
                  </text>
                  <text
                    x="82"
                    y="75"
                    fill="rgba(255,255,255,0.12)"
                    fontSize="7"
                    fontFamily="monospace"
                  >
                    10:30:12 — JE posted
                  </text>
                  <text
                    x="82"
                    y="92"
                    fill="rgba(255,255,255,0.12)"
                    fontSize="7"
                    fontFamily="monospace"
                  >
                    10:28:55 — File uploaded
                  </text>
                  <text
                    x="82"
                    y="109"
                    fill="rgba(255,255,255,0.12)"
                    fontSize="7"
                    fontFamily="monospace"
                  >
                    10:27:33 — Reviewed by SK
                  </text>
                  <text
                    x="82"
                    y="126"
                    fill="rgba(255,255,255,0.12)"
                    fontSize="7"
                    fontFamily="monospace"
                  >
                    10:25:01 — Agent started
                  </text>
                  {/* Magnifying glass */}
                  <circle
                    cx="170"
                    cy="35"
                    r="16"
                    stroke="rgba(255,255,255,0.35)"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <line
                    x1="181"
                    y1="47"
                    x2="192"
                    y2="58"
                    stroke="rgba(255,255,255,0.35)"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  {/* Checkmark inside magnifying glass */}
                  <path
                    d="M 163 35 L 168 41 L 178 29"
                    stroke="rgba(255,255,255,0.35)"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#111] mb-3">
                Audit-Ready
              </h3>
              <p className="text-[#666] leading-relaxed text-[15px]">
                Every action, every change, every approval is logged with a
                timestamp and a name. When auditors come knocking, you don&apos;t
                scramble — you pull a report. Full traceability from task
                assignment to journal entry, with a complete chain of custody
                your team and auditors can trust.
              </p>
            </div>

            {/* Data Integrity */}
            <div>
              <div className="rounded-xl overflow-hidden aspect-[4/3] relative bg-[#1C1C1A] flex items-center justify-center mb-6">
                <svg
                  width="220"
                  height="160"
                  viewBox="0 0 220 160"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="opacity-80"
                >
                  {/* Shield */}
                  <path
                    d="M 110 20 L 155 40 L 155 85 Q 155 120 110 145 Q 65 120 65 85 L 65 40 Z"
                    stroke="rgba(255,255,255,0.3)"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  {/* Inner shield */}
                  <path
                    d="M 110 35 L 145 50 L 145 85 Q 145 112 110 132 Q 75 112 75 85 L 75 50 Z"
                    stroke="rgba(255,255,255,0.12)"
                    strokeWidth="1"
                    fill="rgba(255,255,255,0.03)"
                  />
                  {/* Lock body */}
                  <rect
                    x="97"
                    y="72"
                    width="26"
                    height="22"
                    rx="3"
                    stroke="rgba(255,255,255,0.4)"
                    strokeWidth="1.5"
                    fill="rgba(255,255,255,0.05)"
                  />
                  {/* Lock shackle */}
                  <path
                    d="M 103 72 L 103 63 Q 103 55 110 55 Q 117 55 117 63 L 117 72"
                    stroke="rgba(255,255,255,0.4)"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  {/* Lock keyhole */}
                  <circle cx="110" cy="81" r="3" fill="rgba(255,255,255,0.3)" />
                  <rect
                    x="109"
                    y="83"
                    width="2"
                    height="5"
                    rx="1"
                    fill="rgba(255,255,255,0.3)"
                  />
                  {/* Data nodes */}
                  <circle
                    cx="35"
                    cy="50"
                    r="4"
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="1"
                    fill="rgba(255,255,255,0.05)"
                  />
                  <circle
                    cx="30"
                    cy="90"
                    r="4"
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="1"
                    fill="rgba(255,255,255,0.05)"
                  />
                  <circle
                    cx="40"
                    cy="130"
                    r="4"
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="1"
                    fill="rgba(255,255,255,0.05)"
                  />
                  <circle
                    cx="185"
                    cy="50"
                    r="4"
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="1"
                    fill="rgba(255,255,255,0.05)"
                  />
                  <circle
                    cx="190"
                    cy="90"
                    r="4"
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="1"
                    fill="rgba(255,255,255,0.05)"
                  />
                  <circle
                    cx="180"
                    cy="130"
                    r="4"
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="1"
                    fill="rgba(255,255,255,0.05)"
                  />
                  {/* Lines to shield */}
                  <line
                    x1="39"
                    y1="50"
                    x2="65"
                    y2="55"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="0.75"
                    strokeDasharray="3 3"
                  />
                  <line
                    x1="34"
                    y1="90"
                    x2="65"
                    y2="85"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="0.75"
                    strokeDasharray="3 3"
                  />
                  <line
                    x1="44"
                    y1="130"
                    x2="72"
                    y2="115"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="0.75"
                    strokeDasharray="3 3"
                  />
                  <line
                    x1="181"
                    y1="50"
                    x2="155"
                    y2="55"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="0.75"
                    strokeDasharray="3 3"
                  />
                  <line
                    x1="186"
                    y1="90"
                    x2="155"
                    y2="85"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="0.75"
                    strokeDasharray="3 3"
                  />
                  <line
                    x1="176"
                    y1="130"
                    x2="148"
                    y2="115"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="0.75"
                    strokeDasharray="3 3"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#111] mb-3">
                Data Integrity
              </h3>
              <p className="text-[#666] leading-relaxed text-[15px]">
                Financial data demands the highest standard of care. Vergo
                enforces strict access controls, encrypted storage, and
                immutable records so your numbers are never altered without
                authorization. Your data stays yours — accurate, protected, and
                always reconciled to the source.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ INVESTORS ============ */}
      <section className="py-16 lg:py-24 border-t border-[#E5E7EB] bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#111] mb-16 tracking-tight">
            Backed by{" "}
            <span className="text-[#6366F1]">top-tier investors</span>
          </h2>
          <div className="grid grid-cols-3 gap-10">
            {investors.map((investor) => (
              <div
                key={investor.name}
                className="flex items-center justify-center p-4"
              >
                <Image
                  src={investor.logo}
                  alt={investor.name}
                  width={280}
                  height={80}
                  className="object-contain max-h-14 sm:max-h-20 w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ QUOTE ============ */}
      <section className="py-16 lg:py-24 border-t border-[#E5E7EB] bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111] leading-relaxed italic tracking-tight">
            &ldquo;Construction accounting teams deserve a single platform to
            coordinate the close, cut through the noise, and let automation
            handle the repetitive work&rdquo;
          </blockquote>
          <div className="mt-8 w-16 h-16 rounded-full bg-white border border-[#E5E7EB] mx-auto flex items-center justify-center overflow-hidden relative">
            <Image
              src="/images/avatars/rich-kane.jpg"
              alt="Rich Kane"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-3 text-sm font-medium text-[#111]">Rich Kane</p>
          <p className="text-xs text-[#999] mt-0.5">
            Founder &amp; CEO of Vergo
          </p>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="py-16 lg:py-24 border-t border-[#E5E7EB] bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111] mb-6 tracking-tight">
            Work on{" "}
            <span className="text-[#6366F1]">higher value</span> tasks today.
          </h2>
          <Link
            href="/demo"
            className="inline-flex items-center px-7 py-3 rounded-lg bg-[#F59E42] text-white font-semibold hover:bg-[#E8913A] transition-colors"
          >
            Book a Demo
          </Link>
        </div>
      </section>
    </main>
  );
}
