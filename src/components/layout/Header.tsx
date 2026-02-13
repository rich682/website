"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button, Container } from "@/components/ui";
import { cn } from "@/lib/utils";

const platformLinks = [
  { name: "Task Management", href: "/platform/task-management", description: "Period-based boards & tasks" },
  { name: "Auto-Requests", href: "/platform/requests", description: "Smart auto-requests & AI tracking" },
  { name: "Auto-Reports", href: "/platform/reports", description: "Period reports & AI insights" },
  { name: "Auto-Reconcile", href: "/platform/reconciliations", description: "AI-powered account reconciliations" },
  { name: "Expense Management", href: "/platform/expenses", description: "Tracking, approvals & coding" },
  { name: "AP Automation", href: "/platform/invoices", description: "Processing & approval workflows" },
  { name: "AI Analysis", href: "/platform/ai-analysis", description: "Native AI engine & insights" },
];


export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [platformOpen, setPlatformOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-border shadow-sm"
          : "bg-transparent"
      )}
    >
      <Container size="wide">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-medium text-foreground tracking-tight">vergo</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Platform dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setPlatformOpen(true)}
              onMouseLeave={() => setPlatformOpen(false)}
            >
              <button
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-lg transition-colors flex items-center gap-1",
                  "text-foreground-secondary hover:text-foreground"
                )}
              >
                Platform
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <AnimatePresence>
                {platformOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-0 mt-2 w-72 p-2 rounded-xl bg-background border border-border shadow-lg"
                  >
                    {platformLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="block px-4 py-3 rounded-lg hover:bg-background-secondary transition-colors"
                      >
                        <div className="text-sm font-medium text-foreground">{link.name}</div>
                        <div className="text-xs text-foreground-muted mt-0.5">{link.description}</div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Integrations link */}
            <Link
              href="/integrations"
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                "text-foreground-secondary hover:text-foreground"
              )}
            >
              Integrations
            </Link>

            {/* Company link */}
            <Link
              href="/about"
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                "text-foreground-secondary hover:text-foreground"
              )}
            >
              Company
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="https://app.tryvergo.com/auth/signin"
              className="text-sm font-medium text-foreground-secondary hover:text-foreground transition-colors"
            >
              Sign In
            </Link>
            <Link href="/demo">
              <Button variant="primary" size="sm">
                Book a Demo
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground-secondary hover:text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-t border-border overflow-hidden"
          >
            <Container>
              <div className="py-4 space-y-1">
                {/* Platform section */}
                <div className="px-4 py-2 text-xs font-semibold text-foreground-muted uppercase tracking-wide">Platform</div>
                {platformLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block px-4 py-2.5 text-sm text-foreground-secondary hover:text-foreground rounded-lg hover:bg-background-secondary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}

                {/* Integrations & Company links */}
                <div className="pt-3 border-t border-border">
                  <Link
                    href="/integrations"
                    className="block px-4 py-2.5 text-sm font-medium text-foreground-secondary hover:text-foreground rounded-lg hover:bg-background-secondary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Integrations
                  </Link>
                  <Link
                    href="/about"
                    className="block px-4 py-2.5 text-sm font-medium text-foreground-secondary hover:text-foreground rounded-lg hover:bg-background-secondary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Company
                  </Link>
                </div>

                {/* CTAs */}
                <div className="pt-4 space-y-2 border-t border-border">
                  <Link href="https://app.tryvergo.com/auth/signin">
                    <Button variant="ghost" size="md" className="w-full justify-center">
                      Sign In
                    </Button>
                  </Link>
                  <Link href="/demo">
                    <Button variant="primary" size="md" className="w-full justify-center">
                      Book a Demo
                    </Button>
                  </Link>
                </div>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
