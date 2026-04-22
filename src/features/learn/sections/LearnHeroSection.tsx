"use client";

import { useMemo, useState, type CSSProperties } from "react";
import LearnSectionLabel from "@/features/learn/components/LearnSectionLabel";

const metaStats = [
  { value: "84", label: "pages" },
  { value: "English", label: "& Hindi" },
  { value: "4.8", label: "(142 reviews)" }
] as const;

const collapsedDescriptionStyle: CSSProperties = {
  display: "-webkit-box",
  WebkitLineClamp: 4,
  WebkitBoxOrient: "vertical",
  overflow: "hidden"
};

export default function LearnHeroSection() {
  const [isDescriptionCollapsed, setIsDescriptionCollapsed] = useState(true);

  const descriptionStyle = useMemo(() => {
    if (!isDescriptionCollapsed) {
      return undefined;
    }

    return collapsedDescriptionStyle;
  }, [isDescriptionCollapsed]);

  return (
    <section id="hero" className="scroll-mt-24 py-1">
      <div className="mb-4 flex flex-wrap items-center gap-2.5">
        <span className="rounded bg-emerald-500 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-slate-950 sm:text-xs">
          New Launch
        </span>

        <div className="flex items-center gap-1.5 text-xs text-slate-300 sm:text-sm">
          <span>BY</span>
          <strong className="font-semibold text-slate-100">Arjun Mehta</strong>
          <span className="rounded-full border border-emerald-400/30 bg-emerald-400/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-emerald-200">
            CA / CFA
          </span>
        </div>
      </div>

      <h1 className="text-3xl font-extrabold tracking-tight text-slate-100 sm:text-4xl">
        Income Tax Decoded
      </h1>

      <p className="mt-2 text-sm leading-relaxed text-slate-300 sm:text-base">
        Complete guide to mastering Indian income tax: old vs new regime,
        deductions, ITR filing, and smarter tax planning.
      </p>

      <div className="mb-8 mt-6 flex flex-wrap items-center gap-5 border-y border-slate-700/90 py-4">
        {metaStats.map((item) => (
          <div key={item.label} className="flex items-center gap-2 text-sm text-slate-400">
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            <span className="font-semibold text-slate-100">{item.value}</span>
            <span>{item.label}</span>
          </div>
        ))}
      </div>

      <div>
        <LearnSectionLabel>Description</LearnSectionLabel>
        <p className="max-w-2xl text-sm leading-7 text-slate-300" style={descriptionStyle}>
          This learning track decodes the full landscape of Indian income tax.
          You will understand how the tax system actually works, not just rules,
          but the logic behind them. From choosing between old and new tax
          regimes to filing your ITR with confidence, each module is built for
          modern Indian professionals. We walk through Section 80C, HRA
          exemptions, LTCG vs STCG, and how to build a tax-efficient financial
          plan, all framed as frameworks and not advice.
        </p>

        <button
          type="button"
          onClick={() => setIsDescriptionCollapsed((previous) => !previous)}
          className="mt-3 text-sm font-semibold text-emerald-300 transition-colors hover:text-emerald-200"
        >
          {isDescriptionCollapsed ? "Read more ->" : "Show less <-"}
        </button>
      </div>
    </section>
  );
}

