import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customers | Vergo",
  description:
    "See how construction accounting teams use Vergo to automate month end close, job cost reconciliations, and stakeholder coordination.",
};

const customers = [
  { name: "ABM Mechanical", employees: "50+", trade: "Mechanical", region: "Midwest" },
  { name: "Armormax Inc", employees: "20+", trade: "Specialty", region: "West" },
  { name: "Beran Concrete", employees: "50+", trade: "Concrete", region: "Midwest" },
  { name: "Briggs Electric", employees: "100+", trade: "Electrical", region: "Southeast" },
  { name: "Connolly Brothers", employees: "50+", trade: "General Contracting", region: "Northeast" },
  { name: "DNT", employees: "100+", trade: "General Contracting", region: "South Central" },
  { name: "Finaly GC Corp", employees: "20+", trade: "General Contracting", region: "East" },
  { name: "Gonzales Construction LLC", employees: "50+", trade: "General Contracting", region: "South Central" },
  { name: "Group Contractors", employees: "200+", trade: "General Contracting", region: "Southeast" },
  { name: "Hospitality Build", employees: "100+", trade: "General Contracting", region: "West" },
  { name: "JGM USA", employees: "50+", trade: "Specialty", region: "Southeast" },
  { name: "JMB", employees: "20+", trade: "General Contracting", region: "Appalachia" },
  { name: "LVR", employees: "50+", trade: "General Contracting", region: "West" },
  { name: "Marriot Construction", employees: "300+", trade: "General Contracting", region: "West" },
  { name: "Moss Utilities", employees: "200+", trade: "Utilities", region: "South Central" },
  { name: "National Hydro Excavation", employees: "50+", trade: "Civil", region: "Midwest" },
  { name: "Olson Precast", employees: "100+", trade: "Concrete", region: "Midwest" },
  { name: "Pacific Tech", employees: "50+", trade: "Specialty", region: "West" },
  { name: "Paintech", employees: "20+", trade: "Specialty", region: "Southeast" },
  { name: "PSC Construction", employees: "100+", trade: "General Contracting", region: "Northeast" },
  { name: "RDR Utility", employees: "50+", trade: "Utilities", region: "South Central" },
  { name: "Sullivan Builders", employees: "100+", trade: "General Contracting", region: "West" },
  { name: "TMG", employees: "200+", trade: "General Contracting", region: "West" },
  { name: "Unity", employees: "50+", trade: "General Contracting", region: "Midwest" },
  { name: "Van Dyken Mechanical", employees: "100+", trade: "Mechanical", region: "West" },
  { name: "Venus Construction", employees: "50+", trade: "General Contracting", region: "Southeast" },
];

const testimonials = [
  {
    quote:
      "Since the transition to Vergo, we have been able to cut back the time spent on reconciliations immensely. What was a full time job previously, takes about an hour to process daily!",
    name: "Taylor Ricard",
    role: "Controller",
    company: "Moss Utilities",
  },
  {
    quote:
      "We've cut labor from 3+ staff members to just one employee spending 30 minutes.",
    name: "Cheyenne Rawlins",
    role: "Office Manager",
    company: "Sullivan Builders",
  },
  {
    quote:
      "The integration with our ERP made the decision easy. With a few clicks in the Vergo app - our team are turning expenses in more timely, not to mention the ease of review and approval with the online platform.",
    name: "Laurie Weisensel",
    role: "CFO",
    company: "DNT",
  },
  {
    quote:
      "Since the signing I cannot speak highly enough of the customer service we have received, the team are continuously improving the product and are always on hand to jump on a call.",
    name: "Mark Goan",
    role: "Accountant",
    company: "JMB",
  },
];

export default function CustomersPage() {
  return (
    <main
      style={
        {
          "--background": "#FFFFFF",
          "--background-secondary": "#F7F7F8",
          "--background-tertiary": "#EFEFEF",
          "--highlight": "#6366F1",
          "--highlight-light": "rgba(99, 102, 241, 0.08)",
          "--border": "#E5E7EB",
          "--border-hover": "#D1D5DB",
          "--success": "#22C55E",
          "--warning": "#F59E0B",
          "--error": "#EF4444",
        } as React.CSSProperties
      }
      className="bg-white"
    >
      {/* ============ HERO ============ */}
      <section className="pt-32 pb-12 lg:pt-44 lg:pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#6366F1] mb-4">
            OUR CUSTOMERS
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#111] leading-[1.15] tracking-tight">
            Trusted by construction accounting teams across the country
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[#555] max-w-2xl mx-auto leading-relaxed">
            From general contractors to specialty trades, construction accounting
            teams use Vergo to close the books faster and collect job cost data
            from the field.
          </p>
        </div>
      </section>

      {/* ============ CUSTOMER GRID ============ */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {customers.map((c) => (
              <div
                key={c.name}
                className="rounded-xl border border-[#E5E7EB] bg-[#FAFAFA] p-5 hover:border-[#D1D5DB] transition-colors"
              >
                {/* Logo placeholder */}
                <div className="w-10 h-10 rounded-lg bg-[#E5E7EB] flex items-center justify-center mb-3">
                  <span className="text-[10px] font-bold text-[#999] leading-none">
                    {c.name.split(" ").map(w => w[0]).join("").slice(0, 2)}
                  </span>
                </div>
                <p className="text-sm font-semibold text-[#111]">{c.name}</p>
                <div className="mt-2 flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#EEF2FF] text-xs font-medium text-[#6366F1]">
                    <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0" />
                    </svg>
                    {c.employees}
                  </span>
                  <span className="text-xs text-[#888]">
                    {c.trade} &middot; {c.region}
                  </span>
                </div>
              </div>
            ))}

            {/* "+ lots more" card */}
            <div className="rounded-xl border border-dashed border-[#D1D5DB] bg-white p-5 flex flex-col items-center justify-center text-center min-h-[120px]">
              <div className="w-10 h-10 rounded-full bg-[#EEF2FF] flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-[#6366F1]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </div>
              <p className="text-sm font-semibold text-[#111]">+ lots more</p>
              <p className="text-xs text-[#888] mt-1">
                New teams joining every week
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="py-16 lg:py-24 border-t border-[#E5E7EB] bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#111] tracking-tight text-center mb-12">
            Hear from our customers
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-xl border border-[#E5E7EB] bg-[#FAFAFA] p-6"
              >
                <div className="flex items-center gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-[#F59E0B]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-[#333] leading-relaxed mb-4">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-sm text-[#111]">{t.name}</p>
                  <p className="text-xs text-[#888]">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="py-16 lg:py-24 bg-[#111]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Ready to close the books faster?
          </h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            See how Vergo helps construction accounting teams automate month end
            close.
          </p>
          <div className="mt-8">
            <Link
              href="/demo"
              className="inline-flex items-center px-7 py-3 rounded-lg bg-[#F27A2A] text-white font-semibold hover:bg-[#E06A1A] transition-colors text-sm"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
