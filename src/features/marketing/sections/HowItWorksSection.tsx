import { CTAGroup } from "@/components/shared/CTAGroup";

const journeySteps = [
  {
    title: "Learn Financial Logic",
    description:
      "Understand taxes, markets and personal finance through structured learning tracks.",
  },
  {
    title: "Try Financial Tools",
    description:
      "Use neutral simulators to model taxes, investments and financial outcomes.",
  },
  {
    title: "Use AI Financial Lab",
    description:
      "Decode documents, financial terms and financial content instantly using AI.",
  },
  {
    title: "Find Professional Help",
    description:
      "Connect with verified professionals for statutory and advisory services.",
  },
] as const;

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-24 bg-[#eaf7f4]"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">

          {/* LEFT — Visual Cards */}
          <div className="flex flex-col gap-4">
            {/* Scenario Modeling Card */}
            <div className="rounded-2xl bg-slate-900 text-white p-5 shadow-lg">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 mb-1">
                Scenario Modeling
              </p>
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm font-semibold">Old vs new tax regime</p>
                <span className="rounded-full bg-teal-500/20 text-teal-400 text-[10px] font-semibold px-2.5 py-1">
                  Live simulation
                </span>
              </div>

              {/* Old Regime */}
              <div className="rounded-lg bg-slate-800 px-4 py-3 mb-2">
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-slate-400">Old regime</span>
                  <span className="text-red-400 font-semibold">₹1,54,000</span>
                </div>
                <div className="h-1.5 rounded-full bg-slate-700 overflow-hidden">
                  <div className="h-full w-[80%] rounded-full bg-red-400" />
                </div>
              </div>

              {/* New Regime */}
              <div className="rounded-lg bg-slate-800 border border-teal-500/30 px-4 py-3 mb-3">
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="flex items-center gap-2 text-slate-300">
                    New regime
                    <span className="rounded-full bg-teal-500/20 text-teal-400 text-[9px] px-2 py-0.5">
                      Better for you
                    </span>
                  </span>
                  <span className="text-teal-400 font-semibold">₹1,20,000</span>
                </div>
                <div className="h-1.5 rounded-full bg-slate-700 overflow-hidden">
                  <div className="h-full w-[62%] rounded-full bg-teal-400" />
                </div>
              </div>

              <div className="flex justify-between text-xs pt-1 border-t border-slate-700">
                <span className="text-slate-400">Annual savings</span>
                <span className="text-teal-400 font-bold text-sm">₹34,000</span>
              </div>
            </div>

            {/* Bottom Two Cards */}
            <div className="grid grid-cols-2 gap-4">
              {/* Learning Track */}
              <div className="rounded-2xl bg-[#daf2ec] p-4 shadow-sm">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-teal-700 mb-2">
                  Learning Track
                </p>
                <p className="text-2xl font-bold text-slate-900">7 / 18</p>
                <p className="text-xs text-slate-500 mt-0.5 mb-3">Modules complete</p>
                <div className="h-1.5 rounded-full bg-teal-100 overflow-hidden">
                  <div className="h-full w-[40%] rounded-full bg-teal-500" />
                </div>
              </div>

              {/* Expert Gateway */}
              <div className="rounded-2xl bg-slate-900 p-4 shadow-sm">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-teal-400 mb-2">
                  Expert Gateway
                </p>
                <p className="text-2xl font-bold text-white">12+</p>
                <p className="text-xs text-slate-400 mt-0.5 mb-3">Vetted CAs & CFPs</p>
                <div className="flex -space-x-2">
                  {["CA", "CFP", "+9"].map((label) => (
                    <span
                      key={label}
                      className="flex h-7 w-7 items-center justify-center rounded-full bg-teal-500 text-[9px] font-bold text-white ring-2 ring-slate-900"
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — Steps */}
          <div>
            <div className="space-y-2 mb-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-600">
                How it works
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Start Your Financial
                <br />
                Clarity Journey
              </h2>
              <p className="text-sm text-slate-600 sm:text-base mt-2">
                Choose where you want to begin.
              </p>
            </div>

            <ul className="divide-y divide-slate-200">
              {journeySteps.map((step, index) => (
                <li key={step.title} className="flex items-start gap-4 py-5">
                  {/* Icon placeholder */}
                  <div className="mt-0.5 h-10 w-10 shrink-0 rounded-xl bg-teal-200" />
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <CTAGroup
                primaryLabel="Start Learning Free"
                secondaryLabel="See all Tools"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}