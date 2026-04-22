import LearnSectionLabel from "@/features/learn/components/LearnSectionLabel";

const authorHighlights = [
  "Chartered Accountant with 14 years of practice in personal and corporate taxation.",
  "Has helped 50,000+ Indian professionals file accurate ITRs and optimize tax planning.",
  "Faculty at Monitize and known for framework-driven financial education.",
  "Certified Financial Planner (CFP) focused on tax planning and long-term wealth building.",
  "Writes for the Monitize blog on tax policy updates and SEBI regulatory changes."
] as const;

export default function LearnAuthorSection() {
  return (
    <section id="author" className="scroll-mt-24">
      <LearnSectionLabel>Meet the Author</LearnSectionLabel>

      <article className="mt-3 flex flex-col gap-5 rounded-2xl border border-slate-700 bg-[#0f2030] p-6 transition-colors hover:border-emerald-500/40 sm:flex-row">
        <div className="inline-flex h-[72px] w-[72px] items-center justify-center rounded-full border-2 border-emerald-500 bg-gradient-to-br from-emerald-500 to-emerald-300 text-2xl font-extrabold text-slate-950">
          A
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="text-lg font-bold text-slate-100">Arjun Mehta</h3>

          <p className="mt-2 inline-flex rounded-full border border-emerald-400/35 bg-emerald-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-emerald-300">
            CA - CFA - 14 yrs experience
          </p>

          <ul className="mt-4 space-y-2">
            {authorHighlights.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-slate-300">
                <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </section>
  );
}
