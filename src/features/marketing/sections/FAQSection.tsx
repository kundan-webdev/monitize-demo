const faqItems = [
  {
    question: "What exactly is Monitize?",
    answer:
      "Monitize is a financial education platform that explains money decisions using structured frameworks and mathematical simulations. It does not push products."
  },
  {
    question: "Does Monitize give investment or tax advice?",
    answer:
      "No. Monitize does not provide investment recommendations, tax filing services, or personalized financial advice."
  },
  {
    question: "How accurate are the simulation tools?",
    answer:
      "Simulations are model-based and depend on user inputs and regulatory assumptions. They support decision clarity, not guaranteed outcomes."
  },
  {
    question: "Who is responsible for financial decisions?",
    answer:
      "You remain responsible for all decisions. Always consult a licensed professional for formal advice before acting."
  },
  {
    question: "Is Monitize connected to financial advisors or products?",
    answer:
      "Monitize keeps educational and tool layers neutral. It does not tie recommendations to commissions or product distribution."
  }
] as const;

export default function FAQSection() {
  return (
    <section id="faq" className="scroll-mt-24 border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="space-y-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            FAQ
          </p>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Frequently asked questions
          </h2>
          <p className="text-sm leading-6 text-slate-600 sm:text-base">
            Get clarity on what Monitize does, what it does not do, and where
            professional advice is still required.
          </p>
        </div>

        <div className="mt-8 space-y-3">
          {faqItems.map((item, index) => (
            <details
              key={item.question}
              open={index === 0}
              className="rounded-xl border border-slate-200 bg-white px-4 py-3"
            >
              <summary className="cursor-pointer list-none text-sm font-semibold text-text">
                {item.question}
              </summary>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
