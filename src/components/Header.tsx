"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <nav className="max-w-4xl mx-auto px-6 h-12 flex items-center justify-between bg-[#1a1a1a] rounded-full shadow-lg">
        {/* Logo */}
        <Link href="/" className="text-base font-semibold tracking-tight text-white">
          Vergo
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/product" className="text-sm text-white/60 hover:text-white transition-colors duration-300">
            Product
          </Link>
          <Link href="/company" className="text-sm text-white/60 hover:text-white transition-colors duration-300">
            Company
          </Link>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a href="https://app.tryvergo.com" className="text-sm text-white/60 hover:text-white transition-colors duration-300">
            Log in
          </a>
          <Link
            href="/demo"
            className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/30 text-white text-sm font-medium hover:border-white/60 hover:bg-white/10 transition-all duration-300"
          >
            Request demo
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-white"
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
        <div className="md:hidden mt-2 mx-auto max-w-4xl rounded-2xl bg-[#1a1a1a] border border-white/10 overflow-hidden">
          <div className="px-6 py-5 space-y-4">
            <Link
              href="/product"
              className="block text-sm text-white/60 hover:text-white transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Product
            </Link>
            <Link
              href="/company"
              className="block text-sm text-white/60 hover:text-white transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Company
            </Link>
            <hr className="border-white/10" />
            <a
              href="https://app.tryvergo.com"
              className="block text-sm text-white/60 hover:text-white transition-colors duration-300"
            >
              Log in
            </a>
            <Link
              href="/demo"
              className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/30 text-white text-sm font-medium hover:border-white/60 hover:bg-white/10 transition-all duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Request demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
