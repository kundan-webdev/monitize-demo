import { CTAGroup } from "@/components/shared/CTAGroup";

const frameworkSteps = [
  {
    id: "01",
    title: "Learn the Financial Logic",
    description:
      "Understand the structural logic behind taxes, markets, and financial systems."
  },
  {
    id: "02",
    title: "Simulate Financial Outcomes",
    description:
      "Use planning tools to model tax, investment, and financial scenarios."
  },
  {
    id: "03",
    title: "Decode Financial Information",
    description:
      "Use AI-powered utilities to interpret documents, terms, and financial content."
  },
  {
    id: "04",
    title: "Execute When Needed",
    description:
      "Connect with verified professionals for statutory or advisory services."
  }
] as const;

export default function FrameworkSection() {
  return (
    <section
      id="framework"
      className="scroll-mt-24 border-t border-slate-200 bg-slate-50"
    >
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Ultimate framework
          </p>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Your financial clarity framework.
          </h2>
          <p className="max-w-3xl text-sm leading-6 text-slate-600 sm:text-base">
            A guided journey designed to help you understand, simulate, and
            navigate Indian financial systems.
          </p>
        </div>

        <ol className="mt-8 grid gap-4">
          {frameworkSteps.map((step) => (
            <li
              key={step.id}
              className="grid gap-3 rounded-xl border border-slate-200 bg-white p-5 sm:grid-cols-[64px_1fr] sm:items-start"
            >
              <p className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                {step.id}
              </p>
              <div>
                <h3 className="text-base font-semibold text-text">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-8">
          <CTAGroup />
        </div>
      </div>
    </section>
  );
}
