"use client";
import { useState } from "react";

const faqItems = [
  {
    question: "What exactly is Monitize?",
    answer: (
      <div className="space-y-2 text-sm leading-6 text-slate-600">
        <p>
          Monitize is a financial education platform that helps you understand
          money decisions using structured frameworks and mathematical
          simulations.
        </p>
        <p>
          It does not sell products or push investments - it helps you think
          clearly.
        </p>
      </div>
    ),
  },
  {
    question: "Does Monitize give investment or tax advice?",
    answer: (
      <div className="text-sm leading-6 text-slate-600 space-y-1">
        <p>No.</p>
        <p>Monitize does not provide:</p>
        <ul className="list-disc pl-5 space-y-0.5">
          <li>Investment recommendations</li>
          <li>Tax filing services</li>
          <li>Personalized financial advice</li>
        </ul>
        <p>
          You should always consult a licensed professional before making
          decisions.
        </p>
      </div>
    ),
  },
  {
    question: "How accurate are the simulation tools?",
    answer: (
      <p className="text-sm leading-6 text-slate-600">
        Simulations are model-based and depend on user inputs and regulatory
        assumptions. They support decision clarity, not guaranteed outcomes.
      </p>
    ),
  },
  {
    question: "Who is responsible for financial decisions?",
    answer: (
      <p className="text-sm leading-6 text-slate-600">
        You remain responsible for all decisions. Always consult a licensed
        professional for formal advice before acting.
      </p>
    ),
  },
  {
    question: "Is Monitize connected to financial advisors or products?",
    answer: (
      <p className="text-sm leading-6 text-slate-600">
        Monitize keeps educational and tool layers neutral. It does not tie
        recommendations to commissions or product distribution.
      </p>
    ),
  },
  {
    question: "How accurate are the simulation tools?",
    answer: (
      <p className="text-sm leading-6 text-slate-600">
        Simulations are model-based and depend on user inputs and regulatory
        assumptions. They support decision clarity, not guaranteed outcomes.
      </p>
    ),
  },
] as const;

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="scroll-mt-24 bg-[#eaf7f4] border-t border-slate-200"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left Column */}
          <div className="lg:w-80 shrink-0 space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-500">
              FAQ
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl leading-tight">
              Frequently asked Questions
            </h2>
            <p className="text-sm leading-6 text-slate-600">
              Get clarity on how Monitize works, what you can expect, and where
              its limits are - before you make any financial decision.
            </p>
            <button className="rounded-full bg-teal-500 px-6 py-3 text-sm font-semibold text-white hover:bg-teal-600 transition-colors">
              Start Learning Free
            </button>
          </div>

          {/* Right Column — Accordion */}
          <div className="flex-1 divide-y divide-slate-200 border-t border-slate-200">
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="border-b border-slate-200">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between py-4 text-left text-sm font-semibold text-slate-800 hover:text-slate-900 transition-colors"
                  >
                    <span>{item.question}</span>
                    <span className="ml-4 shrink-0 text-slate-500 text-lg leading-none">
                      {isOpen ? "∨" : "›"}
                    </span>
                  </button>
                  {isOpen && <div className="pb-4">{item.answer}</div>}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}