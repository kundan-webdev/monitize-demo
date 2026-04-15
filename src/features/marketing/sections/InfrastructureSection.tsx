const infrastructurePillars = [
  {
    title: "Non-advisory\neducation",
    description:
      "Purely structural learning without product conflict. No fund recommendations, no insurance pitches — only frameworks that help you decide for yourself.",
    tags: ["No product selling", "Zero commission"],
    highlight: false,
  },
  {
    title: "Statutory\nframeworks",
    description:
      "Logic based on current Indian laws and regulations. Income Tax Act, GST, SEBI, and RBI — all content is derived directly from statutory sources.",
    tags: ["Income Tax Act", "SEBI", "RBI", "GST"],
    highlight: true,
  },
  {
    title: "Neutral\ninfrastructure",
    description:
      "No commissions, no advisory, just financial clarity. Every tool, module, and output is designed without a financial stake in your decisions.",
    tags: ["No referral fee", "No advisory bias"],
    highlight: false,
  },
] as const;

const complianceLinks = [
  "DPDP Act compliant",
  "Local data sovereignty",
  "Neutral financial logic",
] as const;

export default function InfrastructureSection() {
  return (
    <section
      id="infrastructure"
      className="scroll-mt-24 border-t border-slate-800 bg-[#0d1f2d]"
    >
      <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:py-20">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Infrastructure
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-[#e8f4ef] sm:text-4xl lg:text-5xl">
            Neutral financial
            <br />
            infrastructure.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-[#7a9e8e] sm:text-base">
            Built for Indian tax, markets, and business systems with absolute
            regulatory alignment.
          </p>
        </div>

        {/* Cards */}
        <ul className="mb-10 grid gap-4 sm:grid-cols-3">
          {infrastructurePillars.map((pillar) => (
            <li
              key={pillar.title}
              className={`flex flex-col rounded-2xl p-6 ${
                pillar.highlight ? "bg-[#0d4a3a]" : "bg-[#a8ddd0]"
              }`}
            >
              {/* Title */}
              <h3
                className={`whitespace-pre-line text-xl font-bold leading-snug sm:text-2xl ${
                  pillar.highlight ? "text-[#c8f0e4]" : "text-[#0d2e24]"
                }`}
              >
                {pillar.title}
              </h3>

              {/* Description */}
              <p
                className={`mt-3 flex-1 text-sm leading-6 ${
                  pillar.highlight ? "text-[#7abfac]" : "text-[#1a4035]"
                }`}
              >
                {pillar.description}
              </p>

              {/* Divider */}
              <div
                className={`my-4 h-px ${
                  pillar.highlight
                    ? "bg-[#c8f0e4]/15"
                    : "bg-[#0d2e24]/20"
                }`}
              />

              {/* Tags */}
              <ul className="flex flex-wrap gap-2">
                {pillar.tags.map((tag) => (
                  <li
                    key={tag}
                    className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${
                      pillar.highlight
                        ? "bg-[#c8f0e4]/10 text-[#c8f0e4]"
                        : "bg-[#0d4a3a]/12 text-[#0d4a3a]"
                    }`}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {tag}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        {/* Footer compliance line */}
<div className="flex items-start justify-center gap-2 text-center">
  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-[#4a7a6a] text-[10px] font-bold text-[#4a7a6a]">
    i
  </span>
  <p className="text-sm text-[#4a7a6a]">
    Monitize is built on verified compliance standards —{" "}
    <a href="#" className="text-[#7abfac] underline underline-offset-2 hover:text-[#a8ddd0]">
      DPDP Act compliant
    </a>
    {", "}
    <a href="#" className="text-[#7abfac] underline underline-offset-2 hover:text-[#a8ddd0]">
      Local data sovereignty
    </a>
    {", "}
    <a href="#" className="text-[#7abfac] underline underline-offset-2 hover:text-[#a8ddd0]">
      Neutral financial logic
    </a>
  </p>
</div>
      </div>
    </section>
  );
}