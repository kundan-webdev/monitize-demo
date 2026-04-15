const infrastructurePillars = [
  {
    title: "Non-advisory education",
    description:
      "Purely structural learning without product conflict. No fund recommendations and no insurance selling."
  },
  {
    title: "Statutory frameworks",
    description:
      "Logic based on current Indian laws and regulations, including Income Tax Act, GST, SEBI, and RBI references."
  },
  {
    title: "Neutral infrastructure",
    description:
      "No commissions and no referral incentives. Platform outputs are designed without financial stake in your choices."
  }
] as const;

const complianceTags = [
  "No product selling",
  "Zero commission",
  "Income Tax Act",
  "RBI",
  "GST",
  "SEBI",
  "No referral fee",
  "No advisory bias"
] as const;

export default function InfrastructureSection() {
  return (
    <section
      id="infrastructure"
      className="scroll-mt-24 border-t border-slate-200 bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Infrastructure
          </p>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Neutral financial infrastructure.
          </h2>
          <p className="max-w-3xl text-sm leading-6 text-slate-600 sm:text-base">
            Built for Indian tax, market, and business systems with strict
            regulatory alignment.
          </p>
        </div>

        <ul className="mt-8 grid gap-4 lg:grid-cols-3">
          {infrastructurePillars.map((pillar) => (
            <li
              key={pillar.title}
              className="rounded-xl border border-slate-200 bg-slate-50 p-5"
            >
              <h3 className="text-base font-semibold text-text">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {pillar.description}
              </p>
            </li>
          ))}
        </ul>

        <div className="-mx-4 mt-6 overflow-x-auto px-4 sm:mx-0 sm:px-0">
          <ul className="flex min-w-max flex-nowrap gap-2 sm:flex-wrap">
            {complianceTags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 sm:text-sm"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
