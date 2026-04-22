import Link from "next/link";

type StripCard = {
  title: string;
  badge?: string;
  code: string;
  tone: "cc1" | "cc2" | "cc3" | "cc4" | "cc5";
};

type ToolCard = {
  title: string;
  code: string;
};

const toneClassName: Record<StripCard["tone"], string> = {
  cc1: "from-emerald-500/30 to-[#040d16]",
  cc2: "from-emerald-400/20 to-[#0b1c2d]",
  cc3: "from-emerald-900 to-[#040d16]",
  cc4: "from-emerald-950 to-[#0b1c2d]",
  cc5: "from-emerald-400/30 to-[#040d16]"
};

const recommendedTracks: StripCard[] = [
  { title: "GST Explained Simply", badge: "Free", code: "GST", tone: "cc1" },
  { title: "Mutual Funds 101", badge: "Free", code: "MF", tone: "cc2" },
  { title: "Real Estate Taxation", code: "RE", tone: "cc3" },
  { title: "Stock Market & SEBI Rules", badge: "Free", code: "SEBI", tone: "cc4" },
  { title: "RBI Basics for Investors", code: "RBI", tone: "cc5" },
  { title: "PF, NPS & Retirement Tax", badge: "Free", code: "NPS", tone: "cc1" }
];

const recommendedTools: ToolCard[] = [
  { title: "Tax Regime Comparator FY 25-26", code: "CMP" },
  { title: "Capital Gains Tax Calculator", code: "CGT" },
  { title: "GST Verification Tool", code: "GSTV" },
  { title: "ITR Form Selector", code: "ITR" },
  { title: "Investment Planner (80C)", code: "80C" }
];

const bestsellers: StripCard[] = [
  { title: "Personal Finance OS", badge: "Free", code: "PF", tone: "cc2" },
  { title: "Budget & Cashflow Framework", code: "BUD", tone: "cc3" },
  { title: "DPDP & Data Privacy Explained", badge: "Free", code: "DPDP", tone: "cc4" },
  { title: "Startup Taxation Basics", code: "ST", tone: "cc5" },
  { title: "Foreign Income & FEMA Rules", badge: "Free", code: "FEMA", tone: "cc1" }
];

const recentlyLaunched: StripCard[] = [
  { title: "AI Financial Lab - Beta", badge: "Free", code: "AI", tone: "cc5" },
  { title: "Union Budget 2025 Decoded", code: "UB25", tone: "cc1" },
  { title: "New Tax Regime Deep Dive", badge: "Free", code: "NTR", tone: "cc2" },
  { title: "ITR 2 Filing Masterclass", code: "ITR2", tone: "cc3" }
];

function StripBlock({
  title,
  cards
}: {
  title: string;
  cards: StripCard[];
}) {
  return (
    <section className="mb-10">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h3 className="text-base font-bold tracking-tight text-slate-100 sm:text-lg">
          {title}
        </h3>
        <Link
          href="#recommendations"
          className="text-xs font-semibold text-emerald-300 transition-colors hover:text-emerald-200"
        >
          See all {"->"}
        </Link>
      </div>

      <div className="flex gap-3 overflow-x-auto pb-1">
        {cards.map((card) => (
          <article
            key={`${title}-${card.title}`}
            className="w-[136px] shrink-0 overflow-hidden rounded-xl border border-slate-700 bg-[#0f2030] transition hover:-translate-y-1 hover:border-emerald-500"
          >
            <div
              className={[
                "relative aspect-[3/4] bg-gradient-to-br p-2.5",
                toneClassName[card.tone]
              ].join(" ")}
            >
              {card.badge ? (
                <span className="absolute left-2 top-2 rounded-sm bg-emerald-400 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.08em] text-slate-950">
                  {card.badge}
                </span>
              ) : null}

              <div className="flex h-full items-center justify-center text-xl font-extrabold uppercase tracking-[0.08em] text-slate-100">
                {card.code}
              </div>
            </div>

            <p className="line-clamp-2 px-2.5 pb-3 pt-2 text-xs font-semibold leading-relaxed text-slate-100">
              {card.title}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ToolBlock() {
  return (
    <section className="mb-10">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h3 className="text-base font-bold tracking-tight text-slate-100 sm:text-lg">
          Recommended Tools For You
        </h3>
        <Link
          href="#recommendations"
          className="text-xs font-semibold text-emerald-300 transition-colors hover:text-emerald-200"
        >
          See all {"->"}
        </Link>
      </div>

      <div className="flex gap-3 overflow-x-auto pb-1">
        {recommendedTools.map((tool) => (
          <article
            key={tool.title}
            className="w-[180px] shrink-0 overflow-hidden rounded-xl border border-slate-700 bg-[#0f2030] transition hover:-translate-y-1 hover:border-emerald-500"
          >
            <div className="flex aspect-[16/9] items-center justify-center bg-gradient-to-br from-[#0b2a3d] to-emerald-500/25 text-xl font-extrabold text-slate-100">
              {tool.code}
            </div>
            <p className="line-clamp-2 px-2.5 pb-3 pt-2 text-xs font-medium leading-relaxed text-slate-300">
              {tool.title}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function LearnRecommendationStripsSection() {
  return (
    <section id="recommendations" className="scroll-mt-24">
      <StripBlock title="Recommended Tracks For You" cards={recommendedTracks} />
      <ToolBlock />
      <StripBlock title="Monitize Bestsellers" cards={bestsellers} />
      <StripBlock title="Recently Launched" cards={recentlyLaunched} />
    </section>
  );
}

