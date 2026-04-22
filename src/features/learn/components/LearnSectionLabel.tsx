import type { ReactNode } from "react";

type LearnSectionLabelProps = {
  children: ReactNode;
};

export default function LearnSectionLabel({ children }: LearnSectionLabelProps) {
  return (
    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-300 sm:text-xs">
      <span className="text-[8px]">+</span>
      <span>{children}</span>
    </div>
  );
}
