"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { Header, Footer } from "@/components/layout";
import { Button, Container, Badge } from "@/components/ui";

const workflowSteps = [
  {
    step: "1",
    title: "Request",
    description: "Ask for what you need",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    step: "2",
    title: "Track",
    description: "See status at a glance",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    step: "3",
    title: "Remind",
    description: "Auto follow-ups until done",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
  },
  {
    step: "4",
    title: "Review",
    description: "Route for sign-off",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    step: "5",
    title: "Close",
    description: "Complete on time",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
];

const capabilities = [
  {
    name: "Tasks",
    description: "Track every task, assign owners, and see status at a glance.",
    href: "/features/tasks",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    name: "Requests",
    description: "Ask for documents, information, or action from anyone.",
    href: "/features/requests",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
  },
  {
    name: "Reminders",
    description: "Automated follow-ups that get responses.",
    href: "/features/reminders",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
  },
  {
    name: "Collect",
    description: "Gather documents from employees, vendors, or clients.",
    href: "/features/collect",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    name: "Approvals",
    description: "Route decisions and track sign-offs.",
    href: "/features/approvals",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

export default function PlatformPage() {
  const workflowRef = useRef(null);
  const isWorkflowInView = useInView(workflowRef, { once: true, amount: 0.3 });

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 lg:pb-20">
          <Container size="narrow" className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <Badge variant="accent">Platform</Badge>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-serif text-4xl sm:text-5xl text-foreground mb-6"
            >
              The complete workflow layer for accounting.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-foreground-secondary max-w-2xl mx-auto mb-8"
            >
              One system. Every request. Total accountability.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link href="https://app.tryvergo.com/signup">
                <Button variant="primary" size="lg">
                  Get Started →
                </Button>
              </Link>
            </motion.div>
          </Container>
        </section>

        {/* Workflow Visualization */}
        <section className="py-16 lg:py-20 bg-background-secondary">
          <Container size="wide">
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="font-serif text-3xl sm:text-4xl text-foreground mb-4"
              >
                From request to resolution
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-lg text-foreground-secondary max-w-2xl mx-auto"
              >
                Every workflow follows the same proven path.
              </motion.p>
            </div>

            {/* Workflow Steps */}
            <div ref={workflowRef} className="relative">
              {/* Connection line - desktop */}
              <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-border">
                <motion.div
                  className="h-full bg-accent"
                  initial={{ width: 0 }}
                  animate={isWorkflowInView ? { width: "100%" } : { width: 0 }}
                  transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                />
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
                {workflowSteps.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isWorkflowInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className={`relative text-center ${index === workflowSteps.length - 1 ? "col-span-2 lg:col-span-1" : ""}`}
                  >
                    {/* Step circle */}
                    <motion.div
                      className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-4 relative z-10 ${
                        index === workflowSteps.length - 1
                          ? "bg-accent text-white"
                          : "bg-background border-2 border-border text-foreground-secondary"
                      }`}
                      initial={{ scale: 0 }}
                      animate={isWorkflowInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1, type: "spring" }}
                    >
                      {item.icon}
                    </motion.div>

                    {/* Step number */}
                    <motion.div
                      className="absolute top-0 right-1/2 translate-x-[2.5rem] -translate-y-1 w-6 h-6 rounded-full bg-accent text-white text-xs font-bold flex items-center justify-center z-20"
                      initial={{ scale: 0 }}
                      animate={isWorkflowInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    >
                      {item.step}
                    </motion.div>

                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-foreground-secondary">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Capabilities Grid */}
        <section className="py-16 lg:py-20">
          <Container size="wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-4">
                Everything you need. Nothing you don&apos;t.
              </h2>
              <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
                One platform with all the capabilities to manage your accounting workflows.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 max-w-6xl mx-auto">
              {capabilities.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={item.href}>
                    <div className="p-5 rounded-xl bg-background border border-border hover:border-accent hover:shadow-md transition-all h-full group text-center">
                      <div className="w-12 h-12 rounded-xl bg-accent-light text-accent border border-accent/20 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-sm text-foreground-secondary leading-snug">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-20 bg-background-secondary">
          <Container size="narrow" className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-serif text-3xl sm:text-4xl text-foreground mb-6"
            >
              See the full platform in action.
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Link href="https://app.tryvergo.com/signup">
                <Button variant="primary" size="lg">
                  Get Started →
                </Button>
              </Link>
            </motion.div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
