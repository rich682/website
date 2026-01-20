"use client";

import { Header, Footer } from "@/components/layout";
import { Container } from "@/components/ui";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PlatformOverviewPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-20 lg:pt-48 lg:pb-32">
        <Container size="narrow" className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-serif text-4xl lg:text-6xl text-foreground mb-8">
              We&apos;re rebuilding this section.
            </h1>
            <p className="text-xl text-foreground-secondary leading-relaxed mb-12">
              Vergo has evolved into a complete accounting execution system. 
              We&apos;re currently updating our documentation to reflect how the platform 
              is used today—from close boards to managed reconciliations.
            </p>
            <Link href="/" className="text-accent font-semibold border-b border-accent hover:border-accent-hover hover:text-accent-hover transition-all">
              Return to the homepage to see what&apos;s new →
            </Link>
          </motion.div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
