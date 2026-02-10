"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui";
import Image from "next/image";

const integrations = [
  { name: "QuickBooks Online", logo: "/images/integrations/quickbooks-online.svg" },
  { name: "Clear Books", logo: "/images/integrations/clear-books.svg" },
  { name: "FreeAgent", logo: "/images/integrations/freeagent.svg" },
  { name: "FreshBooks", logo: "/images/integrations/freshbooks.svg" },
  { name: "Microsoft Dynamics 365 Business Central", logo: "/images/integrations/dynamics-365-bc.svg" },
  { name: "Microsoft Dynamics 365 Finance and Operations", logo: "/images/integrations/dynamics-365-fo.svg" },
  { name: "Moneybird", logo: "/images/integrations/moneybird.svg" },
  { name: "NetSuite", logo: "/images/integrations/netsuite.svg" },
  { name: "QuickBooks Desktop", logo: "/images/integrations/quickbooks-desktop.svg" },
  { name: "Sage Business Cloud Accounting", logo: "/images/integrations/sage-business-cloud.svg" },
  { name: "Sage Intacct", logo: "/images/integrations/sage-intacct.svg" },
  { name: "Wave Financial", logo: "/images/integrations/wave-financial.svg" },
  { name: "Workday", logo: "/images/integrations/workday.svg" },
  { name: "Xero", logo: "/images/integrations/xero.svg" },
  { name: "Zoho Books", logo: "/images/integrations/zoho-books.svg" },
];

export function IntegrationsContent() {
  return (
    <section className="pt-32 lg:pt-40 pb-20 lg:pb-32">
      <Container size="wide">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 text-xs font-semibold text-accent bg-accent/10 rounded-full mb-4">
              Integrations
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl text-foreground mb-4"
          >
            Connect your accounting stack
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-foreground-secondary max-w-2xl mx-auto"
          >
            Vergo integrates with the tools you already use. Sync your data
            seamlessly and keep everything in one place.
          </motion.p>
        </div>

        {/* Integration Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
            >
              <div className="flex items-center gap-4 p-5 bg-background rounded-2xl border border-border hover:border-accent/30 hover:shadow-md transition-all">
                {/* Logo */}
                <div className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0">
                  <Image
                    src={integration.logo}
                    alt={integration.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Name */}
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-semibold text-foreground leading-tight">
                    {integration.name}
                  </h3>
                  <span className="inline-block mt-1 text-xs text-foreground-muted">
                    Available
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
