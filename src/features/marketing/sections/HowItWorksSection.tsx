import { CTAGroup } from "@/components/shared/CTAGroup";

const journeySteps = [
  {
    title: "Learn Financial Logic",
    description:
      "Understand taxes, markets, and personal finance through structured learning tracks."
  },
  {
    title: "Try Financial Tools",
    description:
      "Use neutral simulators to model tax, investment, and planning outcomes."
  },
  {
    title: "Use AI Financial Lab",
    description:
      "Decode documents, terms, and financial content faster using AI utilities."
  },
  {
    title: "Find Professional Help",
    description:
      "Connect with verified professionals for statutory and advisory execution support."
  }
] as const;

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-24 border-t border-slate-200 bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            How it works
          </p>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Start your financial clarity journey.
          </h2>
          <p className="max-w-3xl text-sm leading-6 text-slate-600 sm:text-base">
            Choose where you want to begin and move at your own pace.
          </p>
        </div>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {journeySteps.map((step, index) => (
            <li
              key={step.title}
              className="rounded-xl border border-slate-200 bg-slate-50 p-5"
            >
              <p className="text-xs font-semibold tracking-wide text-primary">
                STEP {index + 1}
              </p>
              <h3 className="mt-2 text-base font-semibold text-text">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {step.description}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <CTAGroup
            primaryLabel="Start Learning Free"
            secondaryLabel="See All Tools"
          />
        </div>
      </div>
    </section>
  );
}
