import { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "Privacy Policy | Vergo",
  description: "Privacy Policy for the Vergo platform.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-16 lg:pt-44 lg:pb-24">
        <Container size="narrow">
          <h1 className="font-serif text-4xl sm:text-5xl text-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-foreground-secondary mb-12">
            Last updated: February 8, 2026
          </p>

          <div className="prose prose-gray max-w-none text-foreground-secondary leading-relaxed space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">1. Introduction</h2>
              <p>
                Vergo, Inc. (&quot;Vergo,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting the privacy and security of your personal information. This Privacy Policy describes how we collect, use, disclose, and safeguard information when you use the Vergo platform, website, and related services (collectively, the &quot;Service&quot;). By using the Service, you agree to the practices described in this policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">2. Information We Collect</h2>
              <p className="mb-3">We collect the following categories of information:</p>

              <h3 className="text-lg font-medium text-foreground mb-2">a. Information You Provide</h3>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong className="text-foreground">Account Information:</strong> Name, email address, company name, job title, and password when you register for an account.</li>
                <li><strong className="text-foreground">Billing Information:</strong> Payment method details and billing address, processed through our third-party payment processor.</li>
                <li><strong className="text-foreground">User Content:</strong> Data, files, documents, and other content you upload, submit, or process through the Service.</li>
                <li><strong className="text-foreground">Communications:</strong> Information you provide when you contact our support team, respond to surveys, or communicate with us.</li>
              </ul>

              <h3 className="text-lg font-medium text-foreground mb-2">b. Information Collected Automatically</h3>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong className="text-foreground">Usage Data:</strong> Information about how you interact with the Service, including features used, pages viewed, actions taken, and timestamps.</li>
                <li><strong className="text-foreground">Device Information:</strong> Browser type, operating system, device identifiers, IP address, and general location information.</li>
                <li><strong className="text-foreground">Cookies and Tracking:</strong> We use cookies, web beacons, and similar technologies to collect information about your browsing activity. See Section 7 for more details.</li>
              </ul>

              <h3 className="text-lg font-medium text-foreground mb-2">c. Information from Third Parties</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-foreground">Integrations:</strong> If you connect third-party services (e.g., accounting software, email), we may receive data from those services as authorized by you.</li>
                <li><strong className="text-foreground">Business Partners:</strong> We may receive information from partners for the purpose of providing or improving the Service.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">3. How We Use Your Information</h2>
              <p className="mb-3">We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide, operate, maintain, and improve the Service.</li>
                <li>Process transactions and send related notices (e.g., confirmations, invoices).</li>
                <li>Respond to your requests, comments, and support inquiries.</li>
                <li>Send administrative messages, security alerts, and product updates.</li>
                <li>Analyze usage patterns and trends to improve user experience and develop new features.</li>
                <li>Detect, investigate, and prevent fraudulent, unauthorized, or illegal activity.</li>
                <li>Comply with applicable legal obligations and enforce our terms and policies.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">4. How We Share Your Information</h2>
              <p className="mb-3">We do not sell your personal information. We may share your information in the following circumstances:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-foreground">Service Providers:</strong> We share information with trusted third-party vendors who assist us in operating the Service (e.g., cloud hosting, payment processing, analytics). These providers are contractually obligated to protect your information.</li>
                <li><strong className="text-foreground">Integrations:</strong> When you authorize a third-party integration, we share relevant data with that service as directed by you.</li>
                <li><strong className="text-foreground">Legal Requirements:</strong> We may disclose information if required by law, subpoena, or other legal process, or if we believe disclosure is necessary to protect the rights, property, or safety of Vergo, our users, or others.</li>
                <li><strong className="text-foreground">Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction. We will notify you of any such change.</li>
                <li><strong className="text-foreground">With Your Consent:</strong> We may share information with third parties when you have given explicit consent to do so.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">5. Data Retention</h2>
              <p>
                We retain your information for as long as your account is active or as needed to provide the Service. We may also retain and use information as necessary to comply with legal obligations, resolve disputes, and enforce our agreements. Upon account termination, you may request deletion of your data, and we will comply within a reasonable timeframe, subject to legal and operational requirements.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">6. Data Security</h2>
              <p>
                We implement industry-standard technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction. These measures include encryption in transit and at rest, access controls, regular security assessments, and employee training. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">7. Cookies and Tracking Technologies</h2>
              <p className="mb-3">We use cookies and similar technologies to:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Authenticate users and maintain session state.</li>
                <li>Remember your preferences and settings.</li>
                <li>Analyze traffic and usage patterns.</li>
                <li>Deliver relevant content and measure effectiveness.</li>
              </ul>
              <p>
                You can manage cookie preferences through your browser settings. Disabling cookies may affect the functionality of the Service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">8. Your Rights</h2>
              <p className="mb-3">Depending on your jurisdiction, you may have the following rights regarding your personal information:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong className="text-foreground">Access:</strong> Request a copy of the personal information we hold about you.</li>
                <li><strong className="text-foreground">Correction:</strong> Request correction of inaccurate or incomplete information.</li>
                <li><strong className="text-foreground">Deletion:</strong> Request deletion of your personal information, subject to legal exceptions.</li>
                <li><strong className="text-foreground">Portability:</strong> Request your data in a structured, machine-readable format.</li>
                <li><strong className="text-foreground">Objection:</strong> Object to the processing of your information in certain circumstances.</li>
                <li><strong className="text-foreground">Withdrawal of Consent:</strong> Withdraw consent at any time where processing is based on consent.</li>
              </ul>
              <p>
                To exercise any of these rights, please contact us at the address below. We will respond to your request within 30 days or as required by applicable law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">9. International Data Transfers</h2>
              <p>
                If you access the Service from outside the United States, your information may be transferred to and processed in the United States or other jurisdictions where our service providers operate. We take appropriate safeguards to ensure that your information receives an adequate level of protection in the jurisdictions in which we process it.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">10. Children&apos;s Privacy</h2>
              <p>
                The Service is not directed to individuals under the age of 18, and we do not knowingly collect personal information from children. If we become aware that we have collected information from a child, we will take steps to delete that information promptly.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">11. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of material changes by posting the updated policy on our website and updating the &quot;Last updated&quot; date. Your continued use of the Service after any changes constitutes your acceptance of the revised policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">12. Contact Us</h2>
              <p>
                If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
              </p>
              <p className="mt-2">
                <strong className="text-foreground">Vergo, Inc.</strong>
                <br />
                Email: privacy@vergo.ai
              </p>
            </section>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
