export default function CTASection() {
  const arrowIcon = "\u2197";

  return (
    <section id="get-started" className="scroll-mt-24 bg-slate-900">
      <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-24">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight">
          Build Your Financial <br /> Preparedness
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-400 sm:text-base">
          Join a growing community of Indian professionals who value jargon-free
          education and pressure-free mathematical simulation.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="/tools" className="inline-flex items-center gap-2 rounded-full border border-teal-500 bg-teal-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-teal-600 hover:border-teal-600 transition-colors">
            Explore Financial Tools <span>{arrowIcon}</span>
          </a>
          <a href="/learning" className="inline-flex items-center gap-2 rounded-full border border-slate-500 px-5 py-2.5 text-sm font-medium text-white hover:border-slate-400 transition-colors">
            Explore Learning Tracks <span>{arrowIcon}</span>
          </a>
          <a href="/methodology" className="inline-flex items-center gap-2 rounded-full border border-slate-500 px-5 py-2.5 text-sm font-medium text-white hover:border-slate-400 transition-colors">
            Our Methodology <span>{arrowIcon}</span>
          </a>
        </div>
      </div>
    </section>
  );
}