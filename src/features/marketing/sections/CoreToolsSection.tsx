const coreTools = [
  {
    title: "Tax Calculator",
    subtitle: "New Regime FY 2025-26",
    description: "Estimate tax outcomes across structured scenarios."
  },
  {
    title: "Investment Planner",
    subtitle: "Return Simulator",
    description: "Model expected growth and optimize portfolio assumptions."
  },
  {
    title: "GST Check",
    subtitle: "Compliance Verifier",
    description: "Validate GST details and key compliance checkpoints."
  }
] as const;

export default function CoreToolsSection() {
  return (
    <section
      id="tools"
      className="scroll-mt-24 border-t border-slate-200 bg-slate-50"
    >
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Core tools
          </p>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Try our interactive tool set.
          </h2>
          <p className="max-w-3xl text-sm leading-6 text-slate-600 sm:text-base">
            Experience how Monitize simplifies financial complexity through
            transparent, logic-first utilities.
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <ul className="grid gap-4">
            {coreTools.map((tool) => (
              <li
                key={tool.title}
                className="rounded-xl border border-slate-200 bg-white p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  {tool.subtitle}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-text">
                  {tool.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{tool.description}</p>
              </li>
            ))}
          </ul>

          <div className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
            <h3 className="text-base font-semibold text-text">
              Tax Scenario Snapshot
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Compare outputs by changing values and reviewing scenario
              assumptions.
            </p>
            <div className="mt-6 space-y-4">
              {["Annual Income", "Deductions", "Investment Amount"].map((field) => (
                <div key={field} className="space-y-1">
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                    {field}
                  </p>
                  <div className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-500">
                    Input value
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-3">
              <div className="rounded-md bg-primary px-3 py-2 text-center text-sm font-medium text-white">
                Calculate
              </div>
              <div className="rounded-md border border-slate-200 px-3 py-2 text-center text-sm font-medium text-slate-700">
                Try Planner
              </div>
              <div className="rounded-md border border-slate-200 px-3 py-2 text-center text-sm font-medium text-slate-700">
                Check GST
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
