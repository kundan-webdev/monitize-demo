import { CTAGroup } from "@/components/shared/CTAGroup";

const valuePillars = [
  {
    title: "Nuanced learning",
    description:
      "Modules tailored to Indian tax systems, including old vs new regime, Section 80C, HRA, and LTCG realities."
  },
  {
    title: "Scenario modeling",
    description:
      "Run structured simulations for taxes, investments, and financial trade-offs before committing to decisions."
  },
  {
    title: "Expert gateway",
    description:
      "Connect with vetted independent professionals such as CAs, CFPs, and tax experts when execution support is needed."
  }
] as const;

const platformStats = [
  { value: "10+", label: "Financial tools" },
  { value: "30+", label: "Financial concepts" },
  { value: "18+", label: "AI lab features" }
] as const;

export default function WhatIsMonitizeSection() {
  return (
    <section
      id="about-monitize"
      className="scroll-mt-24 border-t border-slate-200 bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              What is Monitize
            </p>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Your steady partner in a noisy financial world.
            </h2>
            <p className="max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
              Monitize is built for modern Indian professionals who value
              clarity over hype. We bridge the gap between learning and action
              with neutral financial infrastructure.
            </p>
            <CTAGroup
              primaryLabel="Start Learning Free"
              secondaryLabel="See All Tools"
            />
          </div>

          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {valuePillars.map((pillar) => (
              <li
                key={pillar.title}
                className="rounded-xl border border-slate-200 bg-slate-50 p-5"
              >
                <h3 className="text-base font-semibold text-text">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {pillar.description}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {platformStats.map((stat) => (
            <li
              key={stat.label}
              className="rounded-xl border border-slate-200 bg-white p-5 text-center"
            >
              <p className="text-2xl font-semibold text-primary">{stat.value}</p>
              <p className="mt-1 text-sm text-slate-600">{stat.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
