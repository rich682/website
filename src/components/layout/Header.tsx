"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button, Container } from "@/components/ui";
import { cn } from "@/lib/utils";

const platformLinks = [
  { name: "Task Management", href: "/platform/task-management", description: "Period-based boards & tasks" },
  { name: "Auto-Requests", href: "/platform/requests", description: "Smart auto-requests & AI tracking" },
  { name: "Reports", href: "/platform/reports", description: "Period reports & AI insights" },
  { name: "Reconciliations", href: "/platform/reconciliations", description: "AI-powered account reconciliations" },
  { name: "Expenses", href: "/platform/expenses", description: "Tracking, approvals & coding" },
  { name: "Invoices", href: "/platform/invoices", description: "Processing & approval workflows" },
];

const solutionsByRole = [
  {
    name: "CFO",
    href: "/solutions/cfo",
    description: "Visibility, risk oversight & reporting",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    name: "Controller",
    href: "/solutions/controller",
    description: "Close management & accuracy",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    name: "Accounting Manager",
    href: "/solutions/accounting-manager",
    description: "Team workload & deadlines",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    name: "AP Manager",
    href: "/solutions/ap-manager",
    description: "Invoices, expenses & vendors",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
      </svg>
    ),
  },
];

const solutionsByType = [
  {
    name: "Small Business",
    href: "/solutions/small-business",
    description: "Simple setup, immediate value",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    name: "Mid Market",
    href: "/solutions/mid-market",
    description: "Scale teams & multi-entity",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    name: "Enterprise",
    href: "/solutions/enterprise",
    description: "Security, compliance & SSO",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [platformOpen, setPlatformOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

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

            {/* Solutions mega-menu dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-lg transition-colors flex items-center gap-1",
                  "text-foreground-secondary hover:text-foreground"
                )}
              >
                Solutions
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <AnimatePresence>
                {solutionsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[520px] rounded-xl bg-background border border-border shadow-lg"
                  >
                    <div className="grid grid-cols-2 divide-x divide-border">
                      {/* By Role */}
                      <div className="p-4">
                        <div className="px-3 pb-2 text-[11px] font-semibold text-foreground-muted uppercase tracking-wider">By Role</div>
                        {solutionsByRole.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="flex items-start gap-3 px-3 py-2.5 rounded-lg hover:bg-background-secondary transition-colors"
                          >
                            <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent flex-shrink-0 mt-0.5">
                              {item.icon}
                            </div>
                            <div>
                              <div className="text-sm font-medium text-foreground">{item.name}</div>
                              <div className="text-xs text-foreground-muted mt-0.5">{item.description}</div>
                            </div>
                          </Link>
                        ))}
                      </div>

                      {/* By Company Type */}
                      <div className="p-4">
                        <div className="px-3 pb-2 text-[11px] font-semibold text-foreground-muted uppercase tracking-wider">By Company Type</div>
                        {solutionsByType.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="flex items-start gap-3 px-3 py-2.5 rounded-lg hover:bg-background-secondary transition-colors"
                          >
                            <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent flex-shrink-0 mt-0.5">
                              {item.icon}
                            </div>
                            <div>
                              <div className="text-sm font-medium text-foreground">{item.name}</div>
                              <div className="text-xs text-foreground-muted mt-0.5">{item.description}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

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

                {/* Solutions section */}
                <div className="pt-3 border-t border-border">
                  <div className="px-4 py-2 text-xs font-semibold text-foreground-muted uppercase tracking-wide">Solutions &mdash; By Role</div>
                  {solutionsByRole.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2.5 text-sm text-foreground-secondary hover:text-foreground rounded-lg hover:bg-background-secondary"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                <div className="pt-1">
                  <div className="px-4 py-2 text-xs font-semibold text-foreground-muted uppercase tracking-wide">Solutions &mdash; By Company Type</div>
                  {solutionsByType.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2.5 text-sm text-foreground-secondary hover:text-foreground rounded-lg hover:bg-background-secondary"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                {/* Company link */}
                <div className="pt-3 border-t border-border">
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
