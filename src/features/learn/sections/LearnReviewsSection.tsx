import LearnSectionLabel from "@/features/learn/components/LearnSectionLabel";

const reviews = [
  {
    initials: "P",
    name: "Priya Sharma",
    date: "March 2025",
    body: "Finally a resource that explains old vs new regime without pushing any product. The comparison framework alone is worth it.",
    rating: "5/5"
  },
  {
    initials: "R",
    name: "Rahul Desai",
    date: "February 2025",
    body: "The capital gains module is exceptional. It cleared all my LTCG and STCG confusion on mutual funds.",
    rating: "5/5"
  }
] as const;

export default function LearnReviewsSection() {
  return (
    <section id="reviews" className="scroll-mt-24">
      <div className="mb-4 flex items-center justify-between gap-3">
        <LearnSectionLabel>Reviews</LearnSectionLabel>

        <button
          type="button"
          className="rounded-md border border-slate-700 bg-[#0f2030] px-3 py-2 text-xs font-medium text-slate-300 transition hover:border-emerald-500 hover:text-slate-100"
        >
          Top review
        </button>
      </div>

      <button
        type="button"
        className="w-full rounded-md border border-slate-700 px-4 py-3 text-sm font-medium text-slate-300 transition hover:border-emerald-500 hover:text-slate-100"
      >
        + Write a Review
      </button>

      <div className="mt-4 space-y-3">
        {reviews.map((review) => (
          <article
            key={`${review.name}-${review.date}`}
            className="rounded-xl border border-slate-700 bg-[#0f2030] p-4"
          >
            <div className="mb-3 flex items-center gap-3">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-700 text-sm font-bold text-emerald-300">
                {review.initials}
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-slate-100">{review.name}</p>
                <p className="text-xs text-slate-400">{review.date}</p>
              </div>

              <p className="text-xs font-semibold text-amber-300">{review.rating}</p>
            </div>

            <p className="text-sm leading-relaxed text-slate-300">{review.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
