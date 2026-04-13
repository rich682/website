import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customers | Vergo",
  description:
    "See how construction accounting teams use Vergo to automate month end close, job cost reconciliations, and stakeholder coordination.",
};

const customers = [
  { name: "ABM Mechanical", employees: "50+", trade: "Mechanical", region: "Northeast", website: "www.abmmechanical.com" },
  { name: "Armormax Inc", employees: "50+", trade: "Industrial", region: "East", website: "www.armormaxinc.com" },
  { name: "Beran Concrete", employees: "200+", trade: "Concrete", region: "Midwest", website: "www.beranconcrete.com" },
  { name: "Briggs Electric", employees: "100+", trade: "Electrical", region: "West", website: "www.briggselectric.com" },
  { name: "Connolly Brothers", employees: "50+", trade: "Management", region: "East", website: "www.connollybrothers.com" },
  { name: "DNT", employees: "200+", trade: "Civil", region: "South Central", website: "www.dntconstruction.com" },
  { name: "Finaly GC Corp.", employees: "50+", trade: "General Contractor", region: "East", website: "www.finalygc.com" },
  { name: "Gonzales Construction LLC", employees: "20+", trade: "Utilities", region: "West", website: "www.glezconstruction.com" },
  { name: "Group Contractors", employees: "300+", trade: "Civil", region: "South Central", website: "www.groupcontractors.com" },
  { name: "Hospitality Build", employees: "100+", trade: "General Contractor", region: "West", website: "www.hospitalitybuild.com" },
  { name: "JGM USA", employees: "50+", trade: "Specialty", region: "Southeast", website: "www.jgmusa.com" },
  { name: "JMB", employees: "20+", trade: "General Contractor", region: "Appalachia", website: "www.jmbconstruction.com" },
  { name: "LVR", employees: "50+", trade: "General Contractor", region: "West", website: "www.lvrconstruction.com" },
  { name: "Marriot Construction", employees: "300+", trade: "General Contractor", region: "West", website: "www.marriotconstruction.com" },
  { name: "Moss Utilities", employees: "200+", trade: "Utilities", region: "South Central", website: "www.mossutilities.com" },
  { name: "National Hydro Excavation", employees: "50+", trade: "Civil", region: "Midwest", website: "www.nationalhydro.com" },
  { name: "Olson Precast", employees: "100+", trade: "Concrete", region: "Midwest", website: "www.olsonprecast.com" },
  { name: "Pacific Tech", employees: "50+", trade: "Specialty", region: "West", website: "www.pacifictechconstruction.com" },
  { name: "Paintech", employees: "20+", trade: "Specialty", region: "Southeast", website: "www.paintech.com" },
  { name: "PSC Construction", employees: "100+", trade: "General Contractor", region: "Northeast", website: "www.pscconstruction.com" },
  { name: "RDR Utility", employees: "50+", trade: "Utilities", region: "South Central", website: "www.rdrutility.com" },
  { name: "Sullivan Builders", employees: "100+", trade: "General Contractor", region: "West", website: "www.sullivanbuilders.com" },
  { name: "TMG", employees: "200+", trade: "General Contractor", region: "West", website: "www.tmgconstruction.com" },
  { name: "Unity", employees: "50+", trade: "General Contractor", region: "Midwest", website: "www.unityconstruction.com" },
  { name: "Van Dyken Mechanical", employees: "100+", trade: "Mechanical", region: "West", website: "www.vandykenmechanical.com" },
  { name: "Venus Construction", employees: "50+", trade: "General Contractor", region: "Southeast", website: "www.venusconstruction.com" },
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
          <h2 className="text-4xl sm:text-5xl font-bold text-[#111] tracking-tight mb-10">
            Featured Customers
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {customers.map((c) => (
              <div
                key={c.name}
                className="rounded-2xl border border-[#E5E7EB] bg-white p-6 hover:border-[#D1D5DB] transition-colors flex flex-col"
              >
                <p className="text-lg font-semibold text-[#111] mb-4">{c.name}</p>
                <div className="space-y-2.5 flex-1">
                  <div className="flex items-center gap-2.5 text-sm text-[#555]">
                    <svg className="w-4 h-4 text-[#999] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0" />
                    </svg>
                    {c.employees} employees
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-[#555]">
                    <svg className="w-4 h-4 text-[#999] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                    </svg>
                    {c.trade}
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-[#555]">
                    <svg className="w-4 h-4 text-[#999] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    {c.region}
                  </div>
                </div>
                <p className="text-sm text-[#999] mt-4 pt-2">{c.website}</p>
              </div>
            ))}
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
