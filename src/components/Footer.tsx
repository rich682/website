"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const isTest = pathname?.startsWith("/test");
  const prefix = isTest ? "/test" : "";

  return (
    <footer
      className={`border-t ${
        isTest
          ? "border-[#E5E7EB] bg-white"
          : "border-border bg-background"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Logo & Description */}
          <div>
            <Link
              href={prefix || "/"}
              className={`text-lg font-semibold tracking-tight ${
                isTest ? "text-[#111]" : "text-foreground"
              }`}
            >
              Vergo
            </Link>
            <p
              className={`mt-3 text-sm max-w-xs leading-relaxed ${
                isTest ? "text-[#999]" : "text-foreground-muted"
              }`}
            >
              The collaboration platform for accounting teams.
            </p>
          </div>

          {/* Nav Links */}
          <div className="flex gap-20">
            <div>
              <h4
                className={`text-xs font-medium uppercase tracking-widest mb-4 ${
                  isTest ? "text-[#999]" : "text-foreground-muted"
                }`}
              >
                Navigation
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href={`${prefix}/product`}
                    className={`text-sm transition-colors duration-300 ${
                      isTest
                        ? "text-[#666] hover:text-[#111]"
                        : "text-foreground-secondary hover:text-foreground"
                    }`}
                  >
                    Platform
                  </Link>
                </li>
                <li>
                  <Link
                    href={`${prefix}/pricing`}
                    className={`text-sm transition-colors duration-300 ${
                      isTest
                        ? "text-[#666] hover:text-[#111]"
                        : "text-foreground-secondary hover:text-foreground"
                    }`}
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href={`${prefix}/compare`}
                    className={`text-sm transition-colors duration-300 ${
                      isTest
                        ? "text-[#666] hover:text-[#111]"
                        : "text-foreground-secondary hover:text-foreground"
                    }`}
                  >
                    Compare
                  </Link>
                </li>
                <li>
                  <Link
                    href={`${prefix}/company`}
                    className={`text-sm transition-colors duration-300 ${
                      isTest
                        ? "text-[#666] hover:text-[#111]"
                        : "text-foreground-secondary hover:text-foreground"
                    }`}
                  >
                    Company
                  </Link>
                </li>
                <li>
                  <a
                    href={isTest ? "https://app.tryvergo.com/signup" : `${prefix}/demo`}
                    className={`text-sm transition-colors duration-300 ${
                      isTest
                        ? "text-[#666] hover:text-[#111]"
                        : "text-foreground-secondary hover:text-foreground"
                    }`}
                  >
                    {isTest ? "Get Started" : "Request demo"}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4
                className={`text-xs font-medium uppercase tracking-widest mb-4 ${
                  isTest ? "text-[#999]" : "text-foreground-muted"
                }`}
              >
                Legal
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/privacy"
                    className={`text-sm transition-colors duration-300 ${
                      isTest
                        ? "text-[#666] hover:text-[#111]"
                        : "text-foreground-secondary hover:text-foreground"
                    }`}
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className={`text-sm transition-colors duration-300 ${
                      isTest
                        ? "text-[#666] hover:text-[#111]"
                        : "text-foreground-secondary hover:text-foreground"
                    }`}
                  >
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className={`mt-16 pt-8 border-t ${
            isTest ? "border-[#E5E7EB]" : "border-border"
          }`}
        >
          <p className={`text-xs ${isTest ? "text-[#999]" : "text-foreground-muted"}`}>
            &copy; {new Date().getFullYear()} Vergo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
