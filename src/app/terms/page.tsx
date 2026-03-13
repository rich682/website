import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Vergo",
  description:
    "Vergo terms of service — the agreement governing use of our platform and services.",
};

export default function TermsPage() {
  return (
    <main
      style={
        {
          "--background": "#FFFFFF",
          "--background-secondary": "#F7F7F8",
          "--background-tertiary": "#EFEFEF",
          "--highlight": "#6366F1",
          "--highlight-light": "rgba(99, 102, 241, 0.08)",
          "--border": "#E5E7EB",
          "--border-hover": "#D1D5DB",
          "--success": "#22C55E",
          "--warning": "#F59E0B",
          "--error": "#EF4444",
        } as React.CSSProperties
      }
      className="bg-white"
    >
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <article className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#111] tracking-tight mb-4">
            Terms of Service
          </h1>
          <p className="text-sm text-[#999] mb-12">
            Last updated: February 25, 2026
          </p>

          <div className="space-y-10 text-[#555] leading-relaxed">
            <p>
              These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the Vergo platform and services (&ldquo;Services&rdquo;). By accessing or using our Services, you agree to be bound by these Terms.
            </p>

            <section>
              <h2 className="text-xl font-semibold text-[#111] mb-3">1. Vergo Services</h2>
              <p>
                Vergo provides a cloud-based platform for accounting teams to manage close processes, tasks, reconciliations, and related workflows. We grant you a limited, non-exclusive, non-transferable right to access and use the Services during the subscription term, subject to these Terms and the applicable order form.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#111] mb-3">2. Support</h2>
              <p>
                We will provide technical support for the Services in accordance with our standard support policies. Support includes assistance with platform functionality, troubleshooting, and general guidance.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#111] mb-3">3. Pilot &amp; Trial</h2>
              <p>
                We may offer pilot or trial access to the Services. Pilot and trial periods are provided &ldquo;as is&rdquo; without warranty, and we may terminate them at any time. Upon expiration, your access will end unless you subscribe.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#111] mb-3">4. Fees</h2>
              <p>
                You agree to pay the fees specified in your order form. All fees are non-refundable unless otherwise stated. Late payments may be subject to interest charges at the lesser of 1.5% per month or the maximum rate permitted by law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#111] mb-3">5. Ownership and Use</h2>
              <p>
                Vergo retains all intellectual property rights in the Services and platform. You retain all rights in data you submit to the Services (&ldquo;Customer Data&rdquo;). You grant us a limited license to use Customer Data solely to provide the Services. AI-generated outputs based on your data are provided for your use but do not constitute professional advice.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#111] mb-3">6. Representations and Warranties</h2>
              <p>
                Each party represents that it has the authority to enter into these Terms. You represent that you will use the Services in compliance with all applicable laws and will not misuse the platform or interfere with its operation.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#111] mb-3">7. Term</h2>
              <p>
                These Terms are effective as of the date you first access the Services and continue for the subscription term specified in your order form. Subscriptions automatically renew for successive periods unless either party provides written notice of non-renewal at least 30 days before the renewal date.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#111] mb-3">8. Termination</h2>
              <p>
                Either party may terminate these Terms if the other party materially breaches these Terms and fails to cure the breach within 30 days of written notice. We may also suspend your access if we reasonably believe your use violates these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#111] mb-3">9. Effect of Termination</h2>
              <p>
                Upon termination, your access to the Services will cease. You may request export of your Customer Data within 30 days of termination. After that period, we may delete your data in accordance with our data retention policies.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#111] mb-3">10. Confidentiality</h2>
              <p>
                Each party agrees to protect the other party&apos;s confidential information using the same degree of care it uses to protect its own confidential information, but in no event less than reasonable care.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#111] mb-3">11. Disclaimers; Limitation of Liability</h2>
              <p>
                EXCEPT AS EXPRESSLY SET FORTH IN THESE TERMS, THE SERVICES ARE PROVIDED &ldquo;AS IS&rdquo; WITHOUT WARRANTIES OF ANY KIND. TO THE MAXIMUM EXTENT PERMITTED BY LAW, VERGO&apos;S AGGREGATE LIABILITY ARISING OUT OF THESE TERMS WILL NOT EXCEED THE FEES PAID BY YOU DURING THE 12 MONTHS PRECEDING THE CLAIM.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#111] mb-3">12. Indemnification</h2>
              <p>
                You agree to indemnify and hold Vergo harmless from claims arising from your use of the Services, your Customer Data, or your violation of these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#111] mb-3">13. Trademarks</h2>
              <p>
                You grant Vergo the right to use your company name and logo in our marketing materials to identify you as a customer, unless you opt out in writing.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#111] mb-3">14. Privacy</h2>
              <p>
                Our collection and use of personal information is described in our{" "}
                <a href="/privacy" className="text-[#6366F1] hover:text-[#4F46E5] transition-colors">
                  Privacy Policy
                </a>. We process Customer Data in accordance with our Data Processing Agreement.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#111] mb-3">15. Miscellaneous</h2>
              <p>
                These Terms are governed by the laws of the State of Delaware. Any disputes will be resolved in the state or federal courts located in Delaware. These Terms constitute the entire agreement between the parties and supersede all prior agreements. If any provision is found unenforceable, the remaining provisions will continue in effect.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#111] mb-3">16. Contact</h2>
              <p>
                If you have questions about these Terms, please contact us at{" "}
                <a href="mailto:legal@vergo.com" className="text-[#6366F1] hover:text-[#4F46E5] transition-colors">
                  legal@vergo.com
                </a>.
              </p>
            </section>
          </div>
        </article>
      </section>
    </main>
  );
}
