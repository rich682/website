"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-lg border-b border-border/60">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-lg font-semibold tracking-tight text-foreground">
          Vergo
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/product" className="text-sm text-foreground-muted hover:text-foreground transition-colors duration-300">
            Product
          </Link>
          <Link href="/company" className="text-sm text-foreground-muted hover:text-foreground transition-colors duration-300">
            Company
          </Link>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-6">
          <a href="https://app.tryvergo.com" className="text-sm text-foreground-muted hover:text-foreground transition-colors duration-300">
            Log in
          </a>
          <Link
            href="/demo"
            className="inline-flex items-center px-5 py-2 rounded-md bg-accent text-white text-sm font-medium hover:bg-accent-hover transition-colors duration-300"
          >
            Request demo
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-foreground"
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
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-6 py-6 space-y-4">
            <Link
              href="/product"
              className="block text-sm text-foreground-muted hover:text-foreground transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Product
            </Link>
            <Link
              href="/company"
              className="block text-sm text-foreground-muted hover:text-foreground transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Company
            </Link>
            <hr className="border-border" />
            <a
              href="https://app.tryvergo.com"
              className="block text-sm text-foreground-muted hover:text-foreground transition-colors duration-300"
            >
              Log in
            </a>
            <Link
              href="/demo"
              className="inline-flex items-center px-5 py-2 rounded-md bg-accent text-white text-sm font-medium hover:bg-accent-hover transition-colors duration-300"
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
