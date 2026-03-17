import Link from "next/link";
import type { Metadata } from "next";
import { templates } from "@/data/templates";

export const metadata: Metadata = {
  title: "Templates | Vergo",
  description:
    "Ready-made accounting templates for close management, workpapers, and more. Download and customize for your team.",
};

export default function TemplatesPage() {
  return (
    <main
      style={
        {
          "--background": "#FFFFFF",
          "--background-secondary": "#F7F7F8",
          "--highlight": "#6366F1",
          "--highlight-light": "rgba(99, 102, 241, 0.08)",
          "--border": "#E5E7EB",
        } as React.CSSProperties
      }
      className="bg-white"
    >
      {/* ============ HERO ============ */}
      <section className="pt-32 pb-12 lg:pt-44 lg:pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-flex items-center text-xs font-semibold uppercase tracking-wide text-[#6366F1] mb-4">
            Resources
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#111] leading-[1.15] tracking-tight">
            Free Accounting Templates
            <span className="block text-[#6366F1]">That Just Work</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[#666] max-w-2xl mx-auto leading-relaxed">
            Ready-made templates for close management, workpapers, and
            reconciliations. Download, customize, and start closing faster.
          </p>
        </div>
      </section>

      {/* ============ TEMPLATES GRID ============ */}
      <section className="pb-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map((template) => (
              <Link
                key={template.slug}
                href={`/templates/${template.slug}`}
                className="group rounded-2xl border border-[#E5E7EB] bg-white p-6 transition-all duration-300 hover:border-[#6366F1]/30 hover:shadow-lg"
              >
                {/* Category badge */}
                <span className="inline-flex items-center rounded-full bg-[rgba(99,102,241,0.08)] px-3 py-1 text-xs font-medium text-[#6366F1]">
                  {template.category}
                </span>

                {/* Title */}
                <h3 className="mt-4 text-lg font-semibold text-[#111] group-hover:text-[#6366F1] transition-colors duration-300">
                  {template.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm text-[#666] leading-relaxed line-clamp-3">
                  {template.description}
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {template.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-[#999] bg-[#F7F7F8] rounded-full px-2.5 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Arrow */}
                <div className="mt-5 flex items-center text-sm font-medium text-[#6366F1] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View template
                  <svg
                    className="ml-1.5 w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="py-24 bg-[#F7F7F8]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#111] tracking-tight">
            Need something more powerful?
          </h2>
          <p className="mt-4 text-lg text-[#666] leading-relaxed">
            Vergo turns these templates into living workflows — with
            automations, integrations, and real-time collaboration built in.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://app.tryvergo.com/signup"
              className="inline-flex items-center justify-center rounded-full bg-[#6366F1] px-7 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#4F46E5] transition-colors duration-300"
            >
              Get started free
            </a>
            <Link
              href="/product"
              className="inline-flex items-center justify-center rounded-full border border-[#E5E7EB] bg-white px-7 py-3 text-sm font-semibold text-[#111] hover:border-[#D1D5DB] transition-colors duration-300"
            >
              See the platform
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
