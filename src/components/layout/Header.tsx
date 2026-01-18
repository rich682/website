"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button, Container } from "@/components/ui";
import { cn } from "@/lib/utils";

const navigation = [
  {
    name: "Platform",
    href: "#",
    children: [
      { name: "Overview", href: "/platform", description: "See how it all works" },
      { name: "Request", href: "/features/requests", description: "Ask for what you need" },
      { name: "Track", href: "/features/tasks", description: "See status at a glance" },
      { name: "Remind", href: "/features/reminders", description: "Auto follow-ups until done" },
      { name: "Review", href: "/features/approvals", description: "Route for sign-off" },
    ],
  },
  {
    name: "Customers",
    href: "#",
    children: [
      { name: "Small Business", href: "/solutions/small-business", description: "Teams of 1-10" },
      { name: "Mid-Market", href: "/solutions/mid-market", description: "Growing operations" },
      { name: "Enterprise", href: "/solutions/enterprise", description: "At scale" },
    ],
  },
  {
    name: "Pricing",
    href: "/pricing",
  },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

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
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "px-4 py-2 text-sm font-medium rounded-lg transition-colors flex items-center gap-1",
                    "text-foreground-secondary hover:text-foreground"
                  )}
                >
                  {item.name}
                  {item.children && (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {item.children && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="absolute top-full left-0 mt-2 w-64 p-2 rounded-xl bg-background border border-border shadow-lg"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-3 rounded-lg hover:bg-background-secondary transition-colors"
                        >
                          <div className="text-sm font-medium text-foreground">
                            {child.name}
                          </div>
                          <div className="text-xs text-foreground-muted mt-0.5">
                            {child.description}
                          </div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="https://app.tryvergo.com/auth/signin"
              className="text-sm font-medium text-foreground-secondary hover:text-foreground transition-colors"
            >
              Sign In
            </Link>
            <Link href="https://app.tryvergo.com/signup">
              <Button variant="primary" size="sm">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground-secondary hover:text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
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
            className="lg:hidden bg-background border-t border-border"
          >
            <Container>
              <div className="py-4 space-y-2">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className="block px-4 py-3 text-foreground-secondary hover:text-foreground rounded-lg hover:bg-background-secondary"
                      onClick={() => !item.children && setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.children && (
                      <div className="ml-4 mt-1 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-foreground-muted hover:text-foreground rounded-lg hover:bg-background-secondary"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4 space-y-2 border-t border-border">
                  <Link href="https://app.tryvergo.com/auth/signin">
                    <Button variant="ghost" size="md" className="w-full justify-center">
                      Sign In
                    </Button>
                  </Link>
                  <Link href="https://app.tryvergo.com/signup">
                    <Button variant="primary" size="md" className="w-full justify-center">
                      Get Started
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
