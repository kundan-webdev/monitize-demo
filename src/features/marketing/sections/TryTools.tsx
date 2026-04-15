const tools = [
  {
    title: "Tax Calculator",
    subtitle: "New Regime FY 25-26",
    inputLabel: "Annual Income (₹)",
    inputPlaceholder: "Input Value",
    buttonLabel: "Calculate Now",
    href: "/tools/tax-calculator",
    featured: false,
  },
  {
    title: "Investment Planner",
    subtitle: "See returns and optimise investment",
    inputLabel: "Tell the users what to input",
    inputPlaceholder: "Input Value",
    buttonLabel: "Try Planner",
    href: "/tools/investment-planner",
    featured: true,
  },
  {
    title: "GST Check",
    subtitle: "Verify GST details and compliance",
    inputLabel: "Tell the users what to input",
    inputPlaceholder: "Input Value",
    buttonLabel: "Check Now",
    href: "/tools/gst-check",
    featured: false,
  },
] as const;

export default function TryTools() {
  return (
    <section id="try-tools" className="scroll-mt-24 bg-[#eaf7f4]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="text-center space-y-3 mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-600">Core Tools</p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Try Our Interactive Tool</h2>
          <p className="text-sm text-slate-600 sm:text-base">Experience how Monitize simplifies financial complexity.</p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {tools.map((tool) => (
            <div key={tool.title} className={`rounded-2xl p-6 flex flex-col gap-6 ${tool.featured ? "bg-slate-900 text-white" : "bg-teal-200 text-slate-900"}`}>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className={`text-2xl font-bold leading-tight ${tool.featured ? "text-white" : "text-slate-900"}`}>{tool.title}</h3>
                  <p className={`mt-1 text-xs ${tool.featured ? "text-slate-400" : "text-slate-600"}`}>{tool.subtitle}</p>
                </div>
                <span className={`text-lg ${tool.featured ? "text-slate-400" : "text-slate-500"}`}>&#9432;</span>
              </div>

              <div className="space-y-2">
                <label className={`text-xs ${tool.featured ? "text-slate-400" : "text-slate-600"}`}>{tool.inputLabel}</label>
                <input type="text" placeholder={tool.inputPlaceholder} className="w-full rounded-lg px-4 py-3 text-sm font-medium text-center outline-none bg-white text-slate-900 placeholder-slate-400" />
              </div>

              <a href={tool.href} className={`w-full rounded-xl py-3 text-sm font-semibold text-center transition-colors ${tool.featured ? "bg-teal-500 text-white hover:bg-teal-600" : "bg-slate-900 text-white hover:bg-slate-800"}`}>
                {tool.buttonLabel}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}