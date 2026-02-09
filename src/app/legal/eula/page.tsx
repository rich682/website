import { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "End-User License Agreement | Vergo",
  description: "End-User License Agreement for the Vergo platform.",
};

export default function EULAPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-16 lg:pt-44 lg:pb-24">
        <Container size="narrow">
          <h1 className="font-serif text-4xl sm:text-5xl text-foreground mb-4">
            End-User License Agreement
          </h1>
          <p className="text-foreground-secondary mb-12">
            Last updated: February 8, 2026
          </p>

          <div className="prose prose-gray max-w-none text-foreground-secondary leading-relaxed space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">1. Agreement to Terms</h2>
              <p>
                This End-User License Agreement (&quot;Agreement&quot;) is a binding legal agreement between you (&quot;User,&quot; &quot;you,&quot; or &quot;your&quot;) and Vergo, Inc. (&quot;Vergo,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By accessing or using the Vergo platform, including any associated software, applications, APIs, and services (collectively, the &quot;Service&quot;), you agree to be bound by the terms of this Agreement. If you do not agree to these terms, do not access or use the Service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">2. License Grant</h2>
              <p>
                Subject to the terms of this Agreement, Vergo grants you a limited, non-exclusive, non-transferable, revocable license to access and use the Service for your internal business purposes. This license does not include the right to sublicense, resell, distribute, or make the Service available to any third party except as expressly permitted under your subscription plan.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">3. Account Registration</h2>
              <p>
                To use the Service, you must register for an account and provide accurate, complete, and current information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify Vergo immediately of any unauthorized use of your account.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">4. Acceptable Use</h2>
              <p>You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Use the Service for any unlawful purpose or in violation of any applicable laws or regulations.</li>
                <li>Reverse engineer, decompile, disassemble, or attempt to derive the source code of the Service.</li>
                <li>Interfere with, disrupt, or compromise the integrity or performance of the Service or its underlying infrastructure.</li>
                <li>Attempt to gain unauthorized access to the Service, other accounts, or any related systems or networks.</li>
                <li>Use the Service to transmit any malware, viruses, or other harmful code.</li>
                <li>Remove, alter, or obscure any proprietary notices, labels, or marks on the Service.</li>
                <li>Use the Service to store or process data in violation of applicable data protection laws.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">5. Intellectual Property</h2>
              <p>
                The Service, including all software, content, designs, trademarks, and documentation, is owned by Vergo and protected by applicable intellectual property laws. This Agreement does not grant you any ownership rights in the Service. All rights not expressly granted herein are reserved by Vergo.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">6. Your Data</h2>
              <p>
                You retain all rights to the data you upload, submit, or process through the Service (&quot;Your Data&quot;). You grant Vergo a limited license to use, store, and process Your Data solely to provide and improve the Service. Vergo will not sell, share, or distribute Your Data to third parties except as described in our Privacy Policy or as required by law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">7. Third-Party Integrations</h2>
              <p>
                The Service may integrate with third-party applications, including accounting software, email providers, and other services. Your use of any third-party integration is subject to that third party&apos;s terms of service and privacy policy. Vergo is not responsible for the availability, accuracy, or practices of any third-party services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">8. Subscription and Payment</h2>
              <p>
                Access to the Service requires a paid subscription unless otherwise specified. Subscription fees are billed in advance on a recurring basis (monthly or annually) according to the plan you select. All fees are non-refundable except as required by applicable law. Vergo reserves the right to modify pricing with reasonable notice.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">9. Termination</h2>
              <p>
                Either party may terminate this Agreement at any time. You may cancel your account through the Service or by contacting support. Vergo may suspend or terminate your access if you breach this Agreement or if continued provision of the Service becomes commercially impracticable. Upon termination, your license to use the Service ceases immediately. You may request export of Your Data for up to 30 days following termination.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">10. Disclaimer of Warranties</h2>
              <p>
                THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. VERGO DOES NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">11. Limitation of Liability</h2>
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, VERGO SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUE, DATA, OR BUSINESS OPPORTUNITIES ARISING OUT OF OR RELATED TO THIS AGREEMENT OR YOUR USE OF THE SERVICE. VERGO&apos;S TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNTS PAID BY YOU TO VERGO IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">12. Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless Vergo, its officers, directors, employees, and agents from any claims, damages, losses, or expenses (including reasonable attorney&apos;s fees) arising from your use of the Service, your violation of this Agreement, or your violation of any rights of a third party.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">13. Governing Law</h2>
              <p>
                This Agreement shall be governed by and construed in accordance with the laws of the State of Delaware, without regard to its conflict of law provisions. Any disputes arising under this Agreement shall be resolved in the state or federal courts located in Delaware.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">14. Changes to This Agreement</h2>
              <p>
                Vergo reserves the right to update or modify this Agreement at any time. We will notify you of material changes by posting the updated Agreement on our website or through the Service. Your continued use of the Service after such changes constitutes your acceptance of the revised Agreement.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">15. Contact Us</h2>
              <p>
                If you have any questions about this Agreement, please contact us at:
              </p>
              <p className="mt-2">
                <strong className="text-foreground">Vergo, Inc.</strong>
                <br />
                Email: legal@vergo.ai
              </p>
            </section>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
