import Link from "next/link";

const valuePillars = [
  {
    title: "Nuanced learning",
    description:
      "Modules tailored to Indian tax regimes — old vs new, Section 80C, HRA, LTCG — built around how Indian professionals actually earn and save.",
  },
  {
    title: "Scenario modeling",
    description:
      "Simulators with mathematical precision — run tax comparisons, model investment outcomes, and stress-test financial decisions before you make them.",
  },
  {
    title: "Expert gateway",
    description:
      "Access to vetted independent experts — CAs, CFPs, and tax advisors with no product affiliations, only unbiased professional guidance.",
  },
] as const;

export default function WhatIsMonitizeSection() {
  return (
    <section id="about-monitize" className="scroll-mt-24 bg-[#eaf7f4]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">

          {/* Left Column */}
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-600">What is Monitize</p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl leading-tight">
              Your steady partner in a noisy financial world.
            </h2>
            <p className="text-sm leading-7 text-slate-600 sm:text-base">
              Monitize is built for the modern Indian professional who values clarity over hype. We provide an ecosystem that bridges the gap between learning and action.
            </p>

            <div className="space-y-0 divide-y divide-slate-200 border-t border-slate-200">
              {valuePillars.map((pillar) => (
                <div key={pillar.title} className="flex gap-4 py-5">
                  <div className="h-10 w-10 shrink-0 rounded-lg bg-teal-200" />
                  <div>
                    <h3 className="text-base font-semibold text-slate-900">{pillar.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{pillar.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3 border-t border-slate-200 pt-6">
              <Link href="/register" className="rounded-full bg-teal-500 px-6 py-3 text-sm font-semibold text-white hover:bg-teal-600 transition-colors">
                Start Learning Free
              </Link>
              <Link href="/tools" className="inline-flex items-center gap-1 rounded-full border border-slate-800 px-6 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-100 transition-colors">
                See all Tools &#x2197;
              </Link>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <div className="rounded-2xl bg-slate-900 p-5 text-white space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Scenario Modeling</p>
                  <p className="mt-1 text-base font-bold">Old vs new tax regime</p>
                </div>
                <span className="rounded-full bg-teal-500 px-3 py-1 text-xs font-medium text-white">Live simulation</span>
              </div>

              <div className="space-y-3">
                <div className="rounded-lg bg-slate-800 px-4 py-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-300">Old regime</span>
                    <span className="font-semibold text-white">₹1,54,000</span>
                  </div>
                  <div className="mt-2 h-1.5 w-full rounded-full bg-slate-700">
                    <div className="h-1.5 w-4/5 rounded-full bg-red-400" />
                  </div>
                </div>

                <div className="rounded-lg bg-slate-800 px-4 py-3">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-slate-300">New regime</span>
                      <span className="rounded-full bg-teal-600 px-2 py-0.5 text-xs text-white">Better for you</span>
                    </div>
                    <span className="font-semibold text-white">₹1,20,000</span>
                  </div>
                  <div className="mt-2 h-1.5 w-full rounded-full bg-slate-700">
                    <div className="h-1.5 w-3/5 rounded-full bg-teal-400" />
                  </div>
                </div>
              </div>

              <div className="flex justify-between border-t border-slate-700 pt-3 text-sm">
                <span className="text-slate-400">Annual savings</span>
                <span className="font-bold text-teal-400">₹34,000</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white p-4 space-y-2 border border-slate-200">
                <p className="text-xs font-semibold uppercase tracking-widest text-teal-600">Learning Track</p>
                <p className="text-2xl font-bold text-slate-900">7 / 18</p>
                <p className="text-xs text-slate-500">Modules complete</p>
                <div className="h-1.5 w-full rounded-full bg-slate-200">
                  <div className="h-1.5 rounded-full bg-teal-500" style={{ width: "38%" }} />
                </div>
              </div>

              <div className="rounded-2xl bg-slate-900 p-4 space-y-2 text-white">
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Expert Gateway</p>
                <p className="text-2xl font-bold">12+</p>
                <p className="text-xs text-slate-400">Vetted CAs &amp; CFPs</p>
                <div className="flex items-center gap-1">
                  {["CA", "CFP", "+9"].map((tag) => (
                    <span key={tag} className="rounded-full bg-slate-700 px-2 py-0.5 text-xs text-slate-300">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}