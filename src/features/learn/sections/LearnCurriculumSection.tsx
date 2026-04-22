"use client";

import { useState } from "react";
import LearnSectionLabel from "@/features/learn/components/LearnSectionLabel";

type CurriculumModule = {
  title: string;
  topicsCount: number;
  topics: Array<{
    label: string;
    locked?: boolean;
  }>;
};

const curriculumModules: CurriculumModule[] = [
  {
    title: "Understanding the Indian Tax System",
    topicsCount: 3,
    topics: [
      { label: "How income tax is structured in India" },
      { label: "Who pays what: slabs, surcharges, cess" },
      { label: "Old regime vs New regime: the structural difference", locked: true }
    ]
  },
  {
    title: "Deductions & Exemptions",
    topicsCount: 4,
    topics: [
      { label: "Section 80C full breakdown" },
      { label: "HRA exemption logic" },
      { label: "Standard deduction & professional tax" },
      { label: "80D, 80E, 80G: health & other deductions" }
    ]
  },
  {
    title: "Capital Gains: LTCG & STCG",
    topicsCount: 3,
    topics: [
      { label: "What qualifies as capital gain" },
      { label: "LTCG on equity, debt, real estate" },
      { label: "Tax-loss harvesting framework" }
    ]
  },
  {
    title: "Filing Your ITR",
    topicsCount: 2,
    topics: [
      { label: "Choosing the right ITR form" },
      { label: "Step-by-step filing walkthrough" }
    ]
  }
];

export default function LearnCurriculumSection() {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleModule = (index: number) => {
    setOpenIndices((previous) => {
      if (previous.includes(index)) {
        return previous.filter((value) => value !== index);
      }

      return [...previous, index];
    });
  };

  return (
    <section id="curriculum" className="scroll-mt-24">
      <LearnSectionLabel>Curriculum</LearnSectionLabel>
      <h2 className="mb-5 text-xl font-bold tracking-tight text-slate-100 sm:text-2xl">
        What you&apos;ll learn
      </h2>

      <div className="space-y-2">
        {curriculumModules.map((module, index) => {
          const isOpen = openIndices.includes(index);

          return (
            <article
              key={module.title}
              className={[
                "overflow-hidden rounded-xl border bg-[#0f2030] transition-colors",
                isOpen ? "border-l-4 border-l-emerald-500 border-slate-700" : "border-slate-700"
              ].join(" ")}
            >
              <button
                type="button"
                onClick={() => toggleModule(index)}
                className="flex w-full items-center gap-3 px-4 py-4 text-left transition hover:bg-emerald-500/5"
              >
                <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-slate-700 text-xs font-bold text-emerald-300">
                  {index + 1}
                </span>

                <span className="text-sm font-medium text-slate-100 sm:text-base">
                  {module.title}
                </span>

                <span className="ml-auto text-xs text-slate-400">
                  {module.topicsCount} topics
                </span>

                <span
                  className={[
                    "text-sm text-slate-300 transition-transform",
                    isOpen ? "rotate-180 text-emerald-300" : ""
                  ].join(" ")}
                >
                  v
                </span>
              </button>

              {isOpen ? (
                <div className="space-y-2 pb-4 pl-14 pr-4">
                  {module.topics.map((topic) => (
                    <div key={topic.label} className="flex items-center gap-2 text-sm text-slate-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      <span>{topic.label}</span>
                      {topic.locked ? (
                        <span className="ml-auto rounded border border-slate-600 px-1.5 py-0.5 text-[10px] uppercase tracking-[0.08em] text-slate-400">
                          Locked
                        </span>
                      ) : null}
                    </div>
                  ))}
                </div>
              ) : null}
            </article>
          );
        })}
      </div>
    </section>
  );
}
