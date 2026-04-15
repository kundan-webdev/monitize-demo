import { CTAGroup } from "@/components/shared/CTAGroup";

export default function CTASection() {
  return (
    <section
      id="get-started"
      className="scroll-mt-24 border-t border-slate-200 bg-white"
    >
      <div className="mx-auto max-w-4xl px-4 py-12 text-center sm:px-6 lg:px-8 lg:py-16">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Build your financial preparedness.
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
          Join Indian professionals who value jargon-free education and
          pressure-free simulation before making money decisions.
        </p>
        <div className="mt-6 flex justify-center">
          <CTAGroup
            primaryLabel="Explore Financial Tools"
            secondaryLabel="Explore Learning Tracks"
            primaryHref="/methodology"
            secondaryHref="/register"
          />
        </div>
        <p className="mt-4 text-xs text-slate-500">Our Methodology</p>
      </div>
    </section>
  );
}
