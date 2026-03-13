"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";

const platformLinks = [
  { label: "Overview", href: "/product", description: "See the full platform" },
  { label: "Close Collaboration", href: "/product/close-management", description: "Streamline month-end close" },
  { label: "Reporting", href: "/product/reporting", description: "Custom reports and AI insights" },
  { label: "AP Automation", href: "/product/ap-automation", description: "Automate accounts payable" },
  { label: "Expense Management", href: "/product/expense-management", description: "Connect any credit card" },
  { label: "Integrations", href: "/integrations", description: "Connect your accounting tools" },
  { label: "AI Agents", href: "/ai-agents", description: "Automate with AI-powered agents" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [platformOpen, setPlatformOpen] = useState(false);
  const [mobilePlatformOpen, setMobilePlatformOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isLight = pathname?.startsWith("/test");
  const prefix = isLight ? "/test" : "";

  // Close dropdown on route change
  useEffect(() => {
    setPlatformOpen(false);
    setMobileMenuOpen(false);
    setMobilePlatformOpen(false);
  }, [pathname]);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setPlatformOpen(false);
      }
    }
    if (platformOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [platformOpen]);

  // Close dropdown on Escape
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
      <nav
        className={`flex items-center justify-between w-full max-w-6xl h-[72px] px-8 rounded-2xl border backdrop-blur-2xl ${
          isLight
            ? "border-[#E5E7EB] bg-white/80 text-[#111]"
            : "border-white/[0.15] bg-black/40 text-white"
        }`}
      >
        {/* Left Nav Links */}
        <div className="hidden md:flex items-center gap-6">
          {/* Platform Dropdown */}
          <div ref={dropdownRef} className="relative">
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
              <div className={`absolute top-full left-0 mt-4 w-[320px] rounded-xl border p-2 shadow-2xl ${
                isLight
                  ? "border-[#E5E7EB] bg-white"
                  : "border-white/[0.15] bg-black"
              }`}>
                {platformLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={`${prefix}${link.href}`}
                    className={`flex flex-col gap-0.5 px-4 py-3 rounded-lg transition-colors ${
                      isLight ? "hover:bg-[#F5F5F5]" : "hover:bg-white/[0.08]"
                    }`}
                  >
                    <span className={`text-sm font-medium ${isLight ? "text-[#111]" : "text-white/90"}`}>{link.label}</span>
                    <span className={`text-xs ${isLight ? "text-[#888]" : "text-white/50"}`}>{link.description}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href={`${prefix}/pricing`} className="text-sm opacity-90 hover:opacity-60 transition-opacity">
            Pricing
          </Link>
          <Link href={`${prefix}/compare`} className="text-sm opacity-90 hover:opacity-60 transition-opacity">
            Compare
          </Link>
          <Link href={`${prefix}/company`} className="text-sm opacity-90 hover:opacity-60 transition-opacity">
            Company
          </Link>
        </div>

        {/* Center Logo */}
        <Link href={prefix || "/"} className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
          <Image
            src="/images/white-icon.webp"
            alt="Vergo"
            width={20}
            height={20}
            className={`opacity-90 ${isLight ? "invert" : ""}`}
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
          <a
            href={isLight ? "https://app.tryvergo.com/signup" : `${prefix}/demo`}
            className={`inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium border transition-colors ${
              isLight
                ? "border-[#E5E7EB] bg-[#111] text-white hover:bg-[#333]"
                : "border-white/[0.15] hover:bg-white/10"
            }`}
            style={isLight ? undefined : { backgroundColor: "rgba(20,20,20,0.9)" }}
          >
            {isLight ? "Get Started" : "Request demo"}
          </a>
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
        <div
          className={`md:hidden absolute top-[calc(72px+1.5rem)] left-4 right-4 rounded-2xl border ${
            isLight
              ? "border-[#E5E7EB] bg-white text-[#111]"
              : "border-white/[0.15] bg-black text-white"
          }`}
        >
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
                    href={`${prefix}${link.href}`}
                    className="block text-sm opacity-70 hover:opacity-60 transition-opacity py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}

            <Link
              href={`${prefix}/pricing`}
              className="block text-sm opacity-90 hover:opacity-60 transition-opacity py-3"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href={`${prefix}/compare`}
              className="block text-sm opacity-90 hover:opacity-60 transition-opacity py-3"
              onClick={() => setMobileMenuOpen(false)}
            >
              Compare
            </Link>
            <Link
              href={`${prefix}/company`}
              className="block text-sm opacity-90 hover:opacity-60 transition-opacity py-3"
              onClick={() => setMobileMenuOpen(false)}
            >
              Company
            </Link>
            <hr className={isLight ? "border-[#E5E7EB]" : "border-white/10"} />
            <a
              href="https://app.tryvergo.com"
              className="block text-sm opacity-90 hover:opacity-60 transition-opacity py-3"
            >
              Log in
            </a>
            <a
              href={isLight ? "https://app.tryvergo.com/signup" : `${prefix}/demo`}
              className={`inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium border transition-colors ${
                isLight
                  ? "border-[#E5E7EB] bg-[#111] text-white hover:bg-[#333]"
                  : "border-white/[0.15] hover:bg-white/10"
              }`}
              style={isLight ? undefined : { backgroundColor: "rgba(20,20,20,0.9)" }}
              onClick={() => setMobileMenuOpen(false)}
            >
              {isLight ? "Get Started" : "Request demo"}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
