import { Header, Footer } from "@/components/layout";
import { Container, Button } from "@/components/ui";
import Link from "next/link";

const collectWorkflows = [
  {
    title: "Documents",
    subtitle: "Core Platform",
    description: "The baseline for every accounting task. Collect bank statements, contracts, tax documents, and audit evidence directly into your close boards.",
    useCases: ["Audit evidence", "Contract management", "Tax documentation", "Bank statements"],
    cta: "Start with Documents",
  },
  {
    title: "Invoices",
    subtitle: "Advanced AP Workflow",
    description: "A high-impact workflow for vendor payments. Route invoices for approval, capture GL coding, and manage payments within the close context.",
    useCases: ["Vendor AP", "Approval routing", "Payment execution", "GL coding"],
    cta: "Explore Invoices",
  },
  {
    title: "Expenses",
    subtitle: "Employee Reimbursements",
    description: "Capture receipts at the source. Vergo matches receipts to card transactions and manages the reimbursement flow for your entire team.",
    useCases: ["Receipt capture", "Card matching", "Employee reimbursements", "Policy enforcement"],
    cta: "Explore Expenses",
  },
];

export const metadata = {
  title: "Collect | Vergo",
  description: "The intake layer for your accounting execution system. Segment your evidence by workflow.",
};

export default function CollectPage() {
  return (
    <>
      <Header />
      <main className="pt-24 lg:pt-32">
        <section className="py-20 lg:py-32">
          <Container size="wide">
            <div className="max-w-3xl mb-20">
              <h1 className="font-serif text-4xl lg:text-6xl text-foreground mb-8">
                Collect the right things — in the right workflow.
              </h1>
              <p className="text-xl text-foreground-secondary leading-relaxed">
                Collect is the intake layer for Vergo. Whether it&apos;s audit evidence, 
                vendor invoices, or employee receipts, Vergo routes everything to the 
                correct accounting workflow automatically.
              </p>
            </div>

            <div className="space-y-32">
              {collectWorkflows.map((workflow, index) => (
                <div key={workflow.title} className="grid lg:grid-cols-2 gap-16 items-center">
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider mb-6">
                      {workflow.subtitle}
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-foreground mb-6">
                      {workflow.title}
                    </h2>
                    <p className="text-lg text-foreground-secondary leading-relaxed mb-8">
                      {workflow.description}
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-4 mb-10">
                      {workflow.useCases.map((useCase) => (
                        <li key={useCase} className="flex items-center gap-3 text-foreground-secondary">
                          <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {useCase}
                        </li>
                      ))}
                    </ul>
                    <Link href="https://app.tryvergo.com/signup">
                      <Button variant="primary" size="lg">
                        {workflow.cta}
                      </Button>
                    </Link>
                  </div>
                  <div className={`aspect-square bg-background-secondary rounded-3xl border border-border p-8 flex items-center justify-center ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                     {/* Abstract representation of the specific collection type */}
                     <div className="text-foreground-muted italic text-sm">
                       Visual representation for {workflow.title}
                     </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Closing CTA */}
        <section className="py-24 bg-foreground text-white">
          <Container size="narrow" className="text-center">
            <h2 className="font-serif text-4xl mb-8">
              Ready to stop chasing?
            </h2>
            <Link href="https://app.tryvergo.com/signup">
              <Button variant="primary" size="lg" className="bg-white text-foreground hover:bg-white/90 border-transparent">
                Get started for free
              </Button>
            </Link>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
