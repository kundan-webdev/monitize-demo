"use client";

import { useMemo, useState } from "react";
import LearnSectionLabel from "@/features/learn/components/LearnSectionLabel";

type PreviewCard = {
  title: string;
  body: string;
  tone?: "default" | "light";
  variant: "bars" | "regime" | "chips" | "flow";
};

const previewSlides: PreviewCard[][] = [
  [
    {
      title: "How Much Tax Is Deducted?",
      body: "Visual breakdown of TDS across salary, freelance, interest income, and rental earnings based on current slabs.",
      variant: "bars"
    },
    {
      title: "Old vs New Regime Simulator",
      body: "Interactive comparison framework. Input your income and compare both regimes with transparent math.",
      tone: "light",
      variant: "regime"
    }
  ],
  [
    {
      title: "Section 80C Full Map",
      body: "All eligible 80C investments mapped visually with limits clearly marked.",
      variant: "chips"
    },
    {
      title: "Capital Gains Flowchart",
      body: "Decision tree to identify LTCG vs STCG across equity, debt, and real estate assets.",
      tone: "light",
      variant: "flow"
    }
  ]
];

function BarsPreview() {
  const bars = [40, 65, 50, 80, 55];

  return (
    <div className="mt-4 flex items-end gap-1.5">
      {bars.map((height, index) => (
        <div
          key={`${height}-${index}`}
          style={{ height }}
          className={[
            "w-5 rounded-t",
            index % 2 === 0 ? "bg-emerald-500" : "bg-emerald-400"
          ].join(" ")}
        />
      ))}
    </div>
  );
}

function RegimePreview() {
  return (
    <div className="mt-4 w-full max-w-[220px] text-[11px] text-slate-700">
      <div className="mb-1 flex items-center justify-between">
        <span>Old Regime</span>
        <span className="font-semibold">Rs 1,54,000</span>
      </div>
      <div className="mb-3 h-2 rounded-full bg-slate-300">
        <div className="h-full w-[70%] rounded-full bg-emerald-500" />
      </div>

      <div className="mb-1 flex items-center justify-between">
        <span>New Regime</span>
        <span className="font-semibold">Rs 1,20,000</span>
      </div>
      <div className="h-2 rounded-full bg-slate-300">
        <div className="h-full w-[55%] rounded-full bg-emerald-400" />
      </div>
    </div>
  );
}

function ChipsPreview() {
  const chips = ["PPF", "ELSS", "NSC", "LIC", "Home Loan Principal"];

  return (
    <div className="mt-4 flex flex-wrap justify-center gap-1.5">
      {chips.map((chip) => (
        <span
          key={chip}
          className="rounded-full border border-emerald-500/35 bg-emerald-500/15 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.06em] text-emerald-700"
        >
          {chip}
        </span>
      ))}
    </div>
  );
}

function FlowPreview() {
  return (
    <p className="mt-4 text-center text-[11px] font-semibold uppercase tracking-[0.08em] text-emerald-700">
      Asset sold?
      <br />
      down
      <br />
      Held over 12m?
      <br />
      down
      <br />
      LTCG at 10%
    </p>
  );
}

export default function LearnSneakPeekSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideCount = previewSlides.length;

  const shiftStyle = useMemo(
    () => ({
      transform: `translateX(-${currentSlide * 100}%)`
    }),
    [currentSlide]
  );

  return (
    <section id="sneak-peek" className="scroll-mt-24">
      <LearnSectionLabel>Take a Sneak Peek</LearnSectionLabel>
      <h2 className="mb-5 text-xl font-bold tracking-tight text-slate-100 sm:text-2xl">
        Inside the learning track
      </h2>

      <div className="relative overflow-hidden rounded-2xl border border-slate-700 bg-[#0f2030]">
        <div className="flex transition-transform duration-500" style={shiftStyle}>
          {previewSlides.map((slide, slideIndex) => (
            <div
              key={`slide-${slideIndex}`}
              className="grid min-w-full grid-cols-1 gap-px bg-slate-700 md:grid-cols-2"
            >
              {slide.map((card) => (
                <div
                  key={card.title}
                  className={[
                    "min-h-[300px] px-5 py-7 text-center sm:px-8",
                    card.tone === "light" ? "bg-[#eef5f0]" : "bg-[#f5f0e8]"
                  ].join(" ")}
                >
                  <h3 className="text-sm font-bold text-slate-900">{card.title}</h3>
                  <p className="mx-auto mt-2 max-w-[260px] text-xs leading-relaxed text-slate-600">
                    {card.body}
                  </p>

                  {card.variant === "bars" ? <BarsPreview /> : null}
                  {card.variant === "regime" ? <RegimePreview /> : null}
                  {card.variant === "chips" ? <ChipsPreview /> : null}
                  {card.variant === "flow" ? <FlowPreview /> : null}
                </div>
              ))}
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() =>
            setCurrentSlide((previous) => (previous - 1 + slideCount) % slideCount)
          }
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-slate-700 bg-[#0b1c2d]/90 px-3 py-1.5 text-sm font-semibold text-slate-200 transition hover:border-emerald-400 hover:text-emerald-200"
          aria-label="Previous preview slide"
        >
          {"<"}
        </button>

        <button
          type="button"
          onClick={() => setCurrentSlide((previous) => (previous + 1) % slideCount)}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-slate-700 bg-[#0b1c2d]/90 px-3 py-1.5 text-sm font-semibold text-slate-200 transition hover:border-emerald-400 hover:text-emerald-200"
          aria-label="Next preview slide"
        >
          {">"}
        </button>
      </div>

      <div className="mt-4 flex justify-center gap-2">
        {previewSlides.map((_, slideIndex) => {
          const isActive = currentSlide === slideIndex;

          return (
            <button
              key={`dot-${slideIndex}`}
              type="button"
              onClick={() => setCurrentSlide(slideIndex)}
              aria-label={`Go to preview slide ${slideIndex + 1}`}
              className={[
                "h-2 rounded-full transition-all",
                isActive ? "w-6 bg-emerald-400" : "w-2 bg-slate-600 hover:bg-slate-500"
              ].join(" ")}
            />
          );
        })}
      </div>
    </section>
  );
}
