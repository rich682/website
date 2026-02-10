import { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { IntegrationsContent } from "./IntegrationsContent";

export const metadata: Metadata = {
  title: "Integrations | Vergo",
  description: "Vergo integrates with QuickBooks, Xero, NetSuite, Sage, FreshBooks, and more. Connect your accounting software and sync your data seamlessly.",
};

export default function IntegrationsPage() {
  return (
    <>
      <Header />
      <main>
        <IntegrationsContent />
      </main>
      <Footer />
    </>
  );
}
