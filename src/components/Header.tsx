"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";

const platformColumns = [
  {
    heading: "Close",
    links: [
      { label: "Overview", href: "/product", description: "See the full platform" },
      { label: "Close Collaboration", href: "/product/close-management", description: "Streamline month-end close" },
      { label: "Reconciliations", href: "/product/reconciliations", description: "Match GL to sub-ledgers automatically" },
    ],
  },
  {
    heading: "Data Collection",
    links: [
      { label: "Stakeholder Requests", href: "/product/stakeholder-requests", description: "Collect docs from stakeholders and vendors" },
      { label: "AP Automation", href: "/product/ap-automation", description: "Automate accounts payable" },
      { label: "Expense Management", href: "/product/expense-management", description: "Connect any credit card" },
    ],
  },
  {
    heading: "Intelligence",
    links: [
      { label: "Reports & Analytics", href: "/product/reporting", description: "Financial reports and variance analysis" },
      { label: "AI Agents", href: "/ai-agents", description: "Automate with AI-powered agents" },
    ],
  },
  {
    heading: "Connect",
    links: [
      { label: "Integrations", href: "/integrations", description: "Connect your accounting tools" },
      { label: "Templates", href: "/templates", description: "Free accounting templates" },
    ],
  },
];

// Flat list for mobile menu
const platformLinks = platformColumns.flatMap((col) => col.links);

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [platformOpen, setPlatformOpen] = useState(false);
  const [mobilePlatformOpen, setMobilePlatformOpen] = useState(false);
  const platformRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Close dropdowns on route change
  useEffect(() => {
    setPlatformOpen(false);
    setMobileMenuOpen(false);
    setMobilePlatformOpen(false);
  }, [pathname]);

  // Close dropdowns on click outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (platformRef.current && !platformRef.current.contains(e.target as Node)) {
        setPlatformOpen(false);
      }
    }
    if (platformOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [platformOpen]);

  // Close dropdowns on Escape
  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setPlatformOpen(false);
      }
    }
    if (platformOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [platformOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
      <nav className="flex items-center justify-between w-full max-w-6xl h-[72px] px-8 rounded-2xl border backdrop-blur-2xl border-[#E5E7EB] bg-white/80 text-[#111]">
        {/* Left Nav Links */}
        <div className="hidden md:flex items-center gap-6">
          {/* Platform Dropdown */}
          <div ref={platformRef} className="relative">
            <button
              onClick={() => setPlatformOpen(!platformOpen)}
              className="flex items-center gap-1 text-sm opacity-90 hover:opacity-60 transition-opacity"
            >
              Platform
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${platformOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Panel */}
            {platformOpen && (
              <div className="absolute top-full left-0 mt-4 w-[820px] rounded-xl border border-[#E5E7EB] bg-white p-4 shadow-2xl">
                <div className="grid grid-cols-4 gap-4">
                  {platformColumns.map((col) => (
                    <div key={col.heading}>
                      <span className="block text-[10px] font-semibold uppercase tracking-wider text-[#999] px-3 mb-1">
                        {col.heading}
                      </span>
                      {col.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="flex flex-col gap-0.5 px-3 py-2.5 rounded-lg transition-colors hover:bg-[#F5F5F5]"
                        >
                          <span className="text-sm font-medium text-[#111]">{link.label}</span>
                          <span className="text-xs text-[#888]">{link.description}</span>
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link href="/integrations" className="text-sm opacity-90 hover:opacity-60 transition-opacity">
            Integrations
          </Link>
          <Link href="/pricing" className="text-sm opacity-90 hover:opacity-60 transition-opacity">
            Pricing
          </Link>
          <Link href="/company" className="text-sm opacity-90 hover:opacity-60 transition-opacity">
            Company
          </Link>
        </div>

        {/* Center Logo */}
        <Link href="/" className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
          <Image
            src="/images/white-icon.webp"
            alt="Vergo"
            width={20}
            height={20}
            className="opacity-90 invert"
          />
          <span className="text-xl font-semibold tracking-tight">
            VERGO
          </span>
        </Link>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-5">
          <a href="https://app.tryvergo.com" className="text-sm opacity-90 hover:opacity-60 transition-opacity">
            Log in
          </a>
          <Link
            href="/demo"
            className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium border transition-colors border-[#E5E7EB] bg-[#111] text-white hover:bg-[#333]"
          >
            Book a Demo
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-[calc(72px+1.5rem)] left-4 right-4 rounded-2xl border border-[#E5E7EB] bg-white text-[#111]">
          <div className="px-6 py-4 space-y-1">
            {/* Platform accordion */}
            <button
              onClick={() => setMobilePlatformOpen(!mobilePlatformOpen)}
              className="flex items-center justify-between w-full text-sm opacity-90 hover:opacity-60 transition-opacity py-3"
            >
              Platform
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${mobilePlatformOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {mobilePlatformOpen && (
              <div className="pl-4 pb-2 space-y-1">
                {platformLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-sm opacity-70 hover:opacity-60 transition-opacity py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}

            <Link
              href="/integrations"
              className="block text-sm opacity-90 hover:opacity-60 transition-opacity py-3"
              onClick={() => setMobileMenuOpen(false)}
            >
              Integrations
            </Link>
            <Link
              href="/pricing"
              className="block text-sm opacity-90 hover:opacity-60 transition-opacity py-3"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/company"
              className="block text-sm opacity-90 hover:opacity-60 transition-opacity py-3"
              onClick={() => setMobileMenuOpen(false)}
            >
              Company
            </Link>
            <hr className="border-[#E5E7EB]" />
            <a
              href="https://app.tryvergo.com"
              className="block text-sm opacity-90 hover:opacity-60 transition-opacity py-3"
            >
              Log in
            </a>
            <Link
              href="/demo"
              className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium border transition-colors border-[#E5E7EB] bg-[#111] text-white hover:bg-[#333]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book a Demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
