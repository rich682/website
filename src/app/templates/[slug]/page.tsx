import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { templates, getTemplateBySlug } from "@/data/templates";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return templates.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const template = getTemplateBySlug(slug);
  if (!template) return { title: "Template not found | Vergo" };

  return {
    title: `${template.title} | Vergo Templates`,
    description: template.description,
  };
}

export default async function TemplatePage({ params }: Props) {
  const { slug } = await params;
  const template = getTemplateBySlug(slug);
  if (!template) notFound();

  const related = templates.filter((t) => t.slug !== slug).slice(0, 3);

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
      {/* ============ BREADCRUMB ============ */}
      <section className="pt-28 lg:pt-36 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <Link
            href="/templates"
            className="inline-flex items-center text-sm text-[#6366F1] hover:text-[#4F46E5] transition-colors duration-300"
          >
            <svg
              className="mr-1.5 w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 17l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
            Back to Templates
          </Link>
        </div>
      </section>

      {/* ============ HERO ============ */}
      <section className="pt-8 pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <span className="inline-flex items-center rounded-full bg-[rgba(99,102,241,0.08)] px-3 py-1 text-xs font-medium text-[#6366F1]">
            {template.category}
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-[#111] leading-[1.15] tracking-tight">
            {/template/i.test(template.title) ? template.title : `${template.title} Template`}
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[#666] max-w-2xl leading-relaxed">
            {template.description}
          </p>
          <div className="mt-8">
            <a
              href="https://app.tryvergo.com/signup"
              className="inline-flex items-center justify-center rounded-full bg-[#6366F1] px-7 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#4F46E5] transition-colors duration-300"
            >
              Use this template
            </a>
          </div>
        </div>
      </section>

      {/* ============ STEPS ============ */}
      <section className="py-20 bg-[#F7F7F8]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111] tracking-tight">
            How to use this template
          </h2>
          <div className="mt-10 space-y-8">
            {template.steps.map((step, i) => (
              <div key={i} className="flex gap-5">
                <div className="flex-shrink-0 w-9 h-9 rounded-full bg-[#6366F1] text-white flex items-center justify-center text-sm font-semibold">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#111]">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-[#666] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ BENEFITS ============ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111] tracking-tight">
            Why use this template
          </h2>
          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {template.benefits.map((benefit, i) => (
              <li
                key={i}
                className="flex items-start gap-3 rounded-xl border border-[#E5E7EB] bg-white p-5"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[rgba(99,102,241,0.08)] flex items-center justify-center mt-0.5">
                  <svg
                    className="w-3.5 h-3.5 text-[#6366F1]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-[#444] leading-relaxed">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ============ RELATED TEMPLATES ============ */}
      {related.length > 0 && (
        <section className="py-20 bg-[#F7F7F8]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111] tracking-tight">
              Related templates
            </h2>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((t) => (
                <Link
                  key={t.slug}
                  href={`/templates/${t.slug}`}
                  className="group rounded-2xl border border-[#E5E7EB] bg-white p-6 transition-all duration-300 hover:border-[#6366F1]/30 hover:shadow-lg"
                >
                  <span className="inline-flex items-center rounded-full bg-[rgba(99,102,241,0.08)] px-3 py-1 text-xs font-medium text-[#6366F1]">
                    {t.category}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-[#111] group-hover:text-[#6366F1] transition-colors duration-300">
                    {t.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#666] leading-relaxed line-clamp-3">
                    {t.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============ CTA ============ */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#111] tracking-tight">
            Ready to streamline your close?
          </h2>
          <p className="mt-4 text-lg text-[#666] leading-relaxed">
            Vergo turns templates into automated workflows with real-time
            collaboration, integrations, and AI built in.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://app.tryvergo.com/signup"
              className="inline-flex items-center justify-center rounded-full bg-[#6366F1] px-7 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#4F46E5] transition-colors duration-300"
            >
              Get started free
            </a>
            <Link
              href="/demo"
              className="inline-flex items-center justify-center rounded-full border border-[#E5E7EB] bg-white px-7 py-3 text-sm font-semibold text-[#111] hover:border-[#D1D5DB] transition-colors duration-300"
            >
              Schedule a demo
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
