import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#E5E7EB] bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Logo & Description */}
          <div>
            <Link href="/" className="text-lg font-semibold tracking-tight text-[#111]">
              Vergo
            </Link>
            <p className="mt-3 text-sm max-w-xs leading-relaxed text-[#999]">
              Month end close software for accounting teams.
            </p>
          </div>

          {/* Nav Links */}
          <div className="flex gap-20">
            <div>
              <h4 className="text-xs font-medium uppercase tracking-widest mb-4 text-[#999]">
                Navigation
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/product" className="text-sm transition-colors duration-300 text-[#666] hover:text-[#111]">
                    Platform
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-sm transition-colors duration-300 text-[#666] hover:text-[#111]">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/compare" className="text-sm transition-colors duration-300 text-[#666] hover:text-[#111]">
                    Compare
                  </Link>
                </li>
                <li>
                  <Link href="/company" className="text-sm transition-colors duration-300 text-[#666] hover:text-[#111]">
                    Company
                  </Link>
                </li>
                <li>
                  <a href="https://app.tryvergo.com/signup" className="text-sm transition-colors duration-300 text-[#666] hover:text-[#111]">
                    Get Started
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-medium uppercase tracking-widest mb-4 text-[#999]">
                Resources
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/templates" className="text-sm transition-colors duration-300 text-[#666] hover:text-[#111]">
                    Templates
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-medium uppercase tracking-widest mb-4 text-[#999]">
                Legal
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/privacy" className="text-sm transition-colors duration-300 text-[#666] hover:text-[#111]">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-sm transition-colors duration-300 text-[#666] hover:text-[#111]">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-[#E5E7EB]">
          <p className="text-xs text-[#999]">
            &copy; {new Date().getFullYear()} Vergo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
