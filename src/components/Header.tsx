"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={`flex items-center justify-between w-full max-w-6xl h-[72px] px-8 rounded-2xl border border-white/10 transition-all duration-300 ${
          scrolled
            ? "bg-black/90 backdrop-blur-xl"
            : "bg-white/[0.08] backdrop-blur-md"
        }`}
      >
        {/* Left Nav Links */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/product" className="text-sm text-white/70 hover:text-white transition-colors">
            Product
          </Link>
          <Link href="/company" className="text-sm text-white/70 hover:text-white transition-colors">
            Company
          </Link>
        </div>

        {/* Center Logo */}
        <Link href="/" className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
          <svg className="w-5 h-5 text-white/80" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C10.34 2 9 3.34 9 5s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm-7 5c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm14 0c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm-7 7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
          </svg>
          <span className="text-xl font-semibold tracking-tight text-white">
            VERGO
          </span>
        </Link>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-5">
          <a href="https://app.tryvergo.com" className="text-sm text-white/70 hover:text-white transition-colors">
            Log in
          </a>
          <Link
            href="/demo"
            className="inline-flex items-center px-5 py-2.5 rounded-full bg-black text-white text-sm font-medium border border-white/20 hover:bg-white/10 transition-colors"
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
        <div className="md:hidden absolute top-[calc(72px+1.5rem)] left-4 right-4 rounded-2xl border border-white/10 bg-black/90 backdrop-blur-xl">
          <div className="px-6 py-4 space-y-4">
            <Link
              href="/product"
              className="block text-sm text-white/70 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Product
            </Link>
            <Link
              href="/company"
              className="block text-sm text-white/70 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Company
            </Link>
            <hr className="border-white/10" />
            <a
              href="https://app.tryvergo.com"
              className="block text-sm text-white/70 hover:text-white transition-colors"
            >
              Log in
            </a>
            <Link
              href="/demo"
              className="inline-flex items-center px-5 py-2.5 rounded-full bg-white/10 text-white text-sm font-medium border border-white/20 hover:bg-white/20 transition-colors"
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
