import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Logo & Description */}
          <div>
            <Link href="/" className="text-lg font-semibold tracking-tight text-foreground">
              Vergo
            </Link>
            <p className="mt-3 text-sm text-foreground-muted max-w-xs leading-relaxed">
              The collaboration platform for accounting teams.
            </p>
          </div>

          {/* Nav Links */}
          <div className="flex gap-20">
            <div>
              <h4 className="text-xs font-medium uppercase tracking-widest text-foreground-muted mb-4">
                Navigation
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/product" className="text-sm text-foreground-secondary hover:text-foreground transition-colors duration-300">
                    Platform
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-sm text-foreground-secondary hover:text-foreground transition-colors duration-300">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/compare" className="text-sm text-foreground-secondary hover:text-foreground transition-colors duration-300">
                    Compare
                  </Link>
                </li>
                <li>
                  <Link href="/company" className="text-sm text-foreground-secondary hover:text-foreground transition-colors duration-300">
                    Company
                  </Link>
                </li>
                <li>
                  <Link href="/demo" className="text-sm text-foreground-secondary hover:text-foreground transition-colors duration-300">
                    Request demo
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-medium uppercase tracking-widest text-foreground-muted mb-4">
                Legal
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/privacy" className="text-sm text-foreground-secondary hover:text-foreground transition-colors duration-300">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-sm text-foreground-secondary hover:text-foreground transition-colors duration-300">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-xs text-foreground-muted">
            &copy; {new Date().getFullYear()} Vergo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
