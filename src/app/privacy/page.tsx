import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Vergo",
  description: "Vergo privacy policy — how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <main className="pt-32 pb-20 lg:pt-40 lg:pb-28">
      <article className="max-w-3xl mx-auto px-6">
        <h1 className="font-serif text-4xl sm:text-5xl text-foreground mb-4">
          Privacy Policy
        </h1>
        <p className="text-sm text-foreground-muted mb-12">
          Last updated: February 25, 2026
        </p>

        <div className="prose-vergo space-y-10 text-foreground-secondary leading-relaxed">
          <p>
            This Privacy Notice describes how Vergo (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects, uses, and shares personal information in connection with our website and services. This notice does not apply to personal information that our customers independently provide to us about their business contacts.
          </p>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">1. Updates to This Privacy Notice</h2>
            <p>
              We may update this Privacy Notice from time to time. If we make material changes, we will notify you by posting the updated notice on our website and updating the &ldquo;Last Updated&rdquo; date above. We encourage you to review this notice periodically.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">2. Personal Information We Collect</h2>
            <h3 className="text-lg font-medium text-foreground mb-2">Information you provide directly</h3>
            <p>
              We collect information you provide when you create an account, request a demo, contact support, or otherwise communicate with us. This may include your name, email address, company name, job title, and phone number.
            </p>
            <h3 className="text-lg font-medium text-foreground mb-2 mt-4">Information collected automatically</h3>
            <p>
              When you visit our website, we automatically collect certain information about your device and usage, including your IP address, browser type, operating system, referring URLs, and pages viewed.
            </p>
            <h3 className="text-lg font-medium text-foreground mb-2 mt-4">Information from third parties</h3>
            <p>
              We may receive information about you from third-party sources, such as business partners, marketing partners, and publicly available sources.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">3. How We Use Personal Information</h2>
            <p>We use personal information for the following purposes:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Providing and improving our services</li>
              <li>Communicating with you about our products and services</li>
              <li>Processing transactions and managing your account</li>
              <li>Conducting research and analytics</li>
              <li>Complying with legal obligations and protecting our rights</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">4. How We Share Personal Information</h2>
            <p>
              We may share personal information with service providers who assist us in operating our business, in response to legal process or government requests, and in connection with a merger, acquisition, or sale of assets.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">5. Your Privacy Choices</h2>
            <p>
              You may opt out of receiving promotional emails by following the unsubscribe instructions in those messages. You may also contact us to request access to, correction of, or deletion of your personal information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">6. International Transfers</h2>
            <p>
              Your personal information may be transferred to and processed in countries other than the country in which you reside. These countries may have data protection laws that differ from those in your country.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">7. Children&apos;s Personal Information</h2>
            <p>
              Our services are not directed to individuals under 16 years of age, and we do not knowingly collect personal information from children.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">8. Contact Us</h2>
            <p>
              If you have questions about this Privacy Notice or our privacy practices, please contact us at{" "}
              <a href="mailto:privacy@vergo.com" className="text-accent hover:text-accent-hover transition-colors">
                privacy@vergo.com
              </a>.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
