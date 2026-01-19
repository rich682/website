"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui";

const testimonials = [
  {
    quote: "Finally, a system that understands accounting teams don't struggle with accounting — we struggle with getting what we need from everyone else.",
    author: "Sarah Mitchell",
    role: "Controller",
    company: "Series B SaaS Company",
  },
  {
    quote: "Month-end close used to take 12 days. Now it's 5. The difference is we're not chasing people anymore.",
    author: "Michael Chen",
    role: "VP of Finance",
    company: "E-commerce Brand",
  },
];

const stats = [
  { value: "50%", label: "Faster close" },
  { value: "10+", label: "Hours saved weekly" },
  { value: "90%", label: "Response rate" },
];

export function SocialProofSection() {
  return (
    <section className="py-20 lg:py-28 bg-background-secondary">
      <Container size="wide">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4"
          >
            What our customers are saying
          </motion.h2>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background rounded-xl p-8 border border-border"
            >
              {/* Quote icon */}
              <div className="text-accent text-4xl font-serif mb-4">&ldquo;</div>

              {/* Quote */}
              <blockquote className="text-lg text-foreground leading-relaxed mb-6">
                {testimonial.quote}
              </blockquote>

              {/* Author */}
              <div>
                <div className="font-semibold text-accent">{testimonial.author}</div>
                <div className="text-sm text-foreground-secondary">
                  {testimonial.role}, {testimonial.company}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-3 gap-8 text-center"
        >
          {stats.map((stat, index) => (
            <div key={stat.label}>
              <div className="text-4xl lg:text-5xl font-serif text-accent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-foreground-secondary">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
