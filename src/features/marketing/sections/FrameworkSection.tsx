"use client";

import { CTAGroup } from "@/components/shared/CTAGroup";
import { useEffect, useRef } from "react";

const frameworkSteps = [
  {
    id: "01",
    title: "Learn the Financial Logic",
    description:
      "Understand the structural logic behind taxes, markets and financial systems.",
  },
  {
    id: "02",
    title: "Simulate Financial Outcomes",
    description:
      "Use planning tools to model tax, investment and financial scenarios.",
  },
  {
    id: "03",
    title: "Decode Financial Information",
    description:
      "Use AI-powered utilities to interpret documents, terms and financial content.",
  },
  {
    id: "04",
    title: "Execute When Needed",
    description:
      "Connect with verified professionals for statutory or advisory services.",
  },
] as const;

function ZigzagConnector({
  id,
  fromRight,
}: {
  id: string;
  fromRight: boolean;
}) {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const draw = () => {
      const svg = svgRef.current;
      const path = pathRef.current;
      if (!svg || !path) return;

      const sr = svg.getBoundingClientRect();
      const w = sr.width || 600;
      const h = 64;

      const x1 = fromRight ? w * 0.72 : w * 0.28;
      const x2 = fromRight ? w * 0.28 : w * 0.72;
      const midY = h / 2;

      path.setAttribute(
        "d",
        `M ${x1} 0 C ${x1} ${midY}, ${x2} ${midY}, ${x2} ${h}`
      );
      svg.setAttribute("viewBox", `0 0 ${w} ${h}`);
    };

    draw();
    window.addEventListener("resize", draw);
    return () => window.removeEventListener("resize", draw);
  }, [fromRight]);

  return (
    <svg
      ref={svgRef}
      id={id}
      className="w-full overflow-visible"
      style={{ height: 64 }}
      preserveAspectRatio="none"
    >
      <path
        ref={pathRef}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="6 5"
        strokeLinecap="round"
        className="text-primary opacity-60"
      />
    </svg>
  );
}

export default function FrameworkSection() {
  return (
    <section
      id="framework"
      className="scroll-mt-24 border-t border-slate-200 bg-[#e8f8f1]"
    >
      <div className="mx-auto max-w-2xl px-4 py-14 sm:px-6 lg:py-20">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Ultimate Framework
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-[#0d2e24] sm:text-4xl lg:text-5xl">
            Your Financial Clarity
            <br />
            Framework
          </h2>
          <p className="mx-auto mt-4 max-w-sm text-sm leading-6 text-[#4a6b5d] sm:text-base">
            A guided journey designed to help you understand, simulate, and
            navigate Indian financial systems.
          </p>
        </div>

        {/* Steps */}
        <ol className="relative">
          {frameworkSteps.map((step, index) => {
            const isRight = index % 2 !== 0;
            const isLast = index === frameworkSteps.length - 1;

            return (
              <li key={step.id}>
                <div
                  className={`flex items-start gap-3 ${isRight ? "flex-row-reverse text-right" : "text-left"}`}
                >
                  {/* Big transparent number */}
                  <span
                    className="select-none text-[80px] font-extrabold leading-none text-[#A9EFD8] sm:text-[110px]"
                    aria-hidden="true"
                  >
                    {step.id}
                  </span>

                  {/* Content */}
                  <div className="flex-1 pt-4">
                    <h3 className="text-base font-bold text-[#0d2e24] sm:text-lg">
                      {step.title}
                    </h3>
                    <p
                      className={`mt-1.5 text-sm leading-6 text-[#4a6b5d] sm:text-[15px] ${isRight ? "ml-auto" : ""} max-w-[280px]`}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Dashed connector between steps */}
                {!isLast && (
                  <ZigzagConnector
                    id={`connector-${step.id}`}
                    fromRight={!isRight}
                  />
                )}
              </li>
            );
          })}
        </ol>

        {/* CTAs */}
        <div className="mt-12 flex justify-center">
          <CTAGroup />
        </div>
      </div>
    </section>
  );
}