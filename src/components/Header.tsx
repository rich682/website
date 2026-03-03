"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className="flex items-center justify-between w-full max-w-6xl h-[72px] px-8 rounded-2xl border border-white/[0.15] bg-black/40 backdrop-blur-2xl"
        style={{ color: "white" }}
      >
        {/* Left Nav Links */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/product" className="text-sm opacity-90 hover:opacity-60 transition-opacity">
            Product
          </Link>
          <Link href="/company" className="text-sm opacity-90 hover:opacity-60 transition-opacity">
            Company
          </Link>
        </div>

        {/* Center Logo */}
        <Link href="/" className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
          <svg className="w-5 h-5 opacity-80" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C10.34 2 9 3.34 9 5s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm-7 5c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm14 0c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm-7 7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
          </svg>
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
            href="https://calendly.com/vergo-ai/new-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium border border-white/[0.15] hover:bg-white/10 transition-colors"
            style={{ backgroundColor: "rgba(20,20,20,0.9)" }}
          >
            Request demo
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
          className="md:hidden absolute top-[calc(72px+1.5rem)] left-4 right-4 rounded-2xl border border-white/[0.15] bg-black/80 backdrop-blur-2xl"
          style={{ color: "white" }}
        >
          <div className="px-6 py-4 space-y-4">
            <Link
              href="/product"
              className="block text-sm opacity-90 hover:opacity-60 transition-opacity"
              onClick={() => setMobileMenuOpen(false)}
            >
              Product
            </Link>
            <Link
              href="/company"
              className="block text-sm opacity-90 hover:opacity-60 transition-opacity"
              onClick={() => setMobileMenuOpen(false)}
            >
              Company
            </Link>
            <hr className="border-white/10" />
            <a
              href="https://app.tryvergo.com"
              className="block text-sm opacity-90 hover:opacity-60 transition-opacity"
            >
              Log in
            </a>
            <a
              href="https://calendly.com/vergo-ai/new-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium border border-white/[0.15] hover:bg-white/10 transition-colors"
              style={{ backgroundColor: "rgba(20,20,20,0.9)" }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Request demo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
