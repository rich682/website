"use client";

import { motion } from "framer-motion";
import { Button, Container } from "@/components/ui";
import Link from "next/link";

const values = [
  {
    title: "Built for Accounting",
    description: "We do not build generic software. Every feature is designed around the specific rhythms, deadlines, and workflows of accounting teams.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "AI That Works For You",
    description: "We use AI to eliminate busywork, not to replace accountants. Our AI classifies, drafts, flags, and suggests so your team can focus on high-value work.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Zero Friction for Clients",
    description: "Your clients should never have to create an account, download an app, or learn a new tool. They respond via email or a simple link. That is it.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
  },
  {
    title: "Everything Connected",
    description: "Tasks, requests, documents, databases, expenses, invoices, and reports are all part of one integrated platform. No more switching between disconnected tools.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
  },
];

export function AboutContent() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-44 lg:pb-24">
        <Container size="narrow" className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wide">
              About Vergo
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6 tracking-tight"
          >
            We are building the operating system for accounting.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-lg sm:text-xl text-foreground-secondary max-w-2xl mx-auto"
          >
            Accounting teams spend too much time on work that is not accounting. We are changing that.
          </motion.p>
        </Container>
      </section>

      {/* Mission */}
      <section className="pb-20 lg:pb-28">
        <Container size="narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-background-secondary rounded-2xl p-8 lg:p-12 border border-border"
          >
            <h2 className="font-serif text-2xl sm:text-3xl text-foreground mb-6">Our Mission</h2>
            <div className="space-y-4 text-foreground-secondary leading-relaxed">
              <p>
                Accounting teams are the backbone of every business, yet they are stuck using tools built for someone else. Generic project management apps, scattered email threads, shared drives, and spreadsheets held together with good intentions.
              </p>
              <p>
                Vergo exists to give accounting teams a platform that actually fits how they work. One place to manage tasks by period, send and track requests, collect documents, process invoices and expenses, build databases, and generate reports -- all connected, all powered by AI.
              </p>
              <p>
                We believe accounting teams deserve software that understands their world: periods and deadlines, clients and entities, compliance and accuracy. Not another generic tool they have to bend to fit their workflow.
              </p>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Values */}
      <section className="pb-20 lg:pb-32">
        <Container size="default">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-serif text-2xl sm:text-3xl text-foreground mb-10 text-center"
          >
            What We Believe
          </motion.h2>

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-background rounded-2xl p-6 border border-border"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-foreground-secondary leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-background-secondary">
        <Container size="narrow" className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-serif text-3xl sm:text-4xl text-foreground mb-4"
          >
            Ready to see Vergo in action?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-foreground-secondary mb-8 max-w-xl mx-auto"
          >
            Book a demo and see how Vergo can transform your accounting workflow.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="https://app.tryvergo.com/demo">
              <Button variant="primary" size="lg">
                Book a Demo
              </Button>
            </Link>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
