import Image from "next/image";

const bookStats = [
  { value: "84", label: "Pages" },
  { value: "12", label: "Modules" },
  { value: "Free", label: "Access" }
] as const;

export default function LearnStickySidebarCard() {
  return (
    <aside className="rounded-2xl border border-slate-700 bg-[#0f2030] p-6 lg:sticky lg:top-20 lg:self-start">
      <div className="relative rounded-xl border border-slate-700 bg-gradient-to-br from-emerald-400/15 to-slate-950 p-5 shadow-[0_20px_55px_-28px_rgba(15,32,48,0.95)]">
        <button
          type="button"
          aria-label="Download track"
          className="absolute right-3 top-3 rounded-md bg-slate-700 p-2 text-xs font-semibold text-slate-200 transition hover:bg-emerald-500 hover:text-slate-950"
        >
          DL
        </button>

        <div className="rounded-lg border border-slate-700 bg-gradient-to-b from-[#0f2030] to-[#040d16] p-4">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-[220px] overflow-hidden rounded-md border border-slate-600 bg-slate-900 shadow-[0_18px_30px_-20px_rgba(16,185,129,0.55)]">
            <Image
              src="/images/001.png"
              alt="Income Tax Decoded learning track cover"
              fill
              priority
              className="object-cover object-center"
              sizes="(min-width: 1024px) 220px, 65vw"
            />
          </div>
          <p className="mt-3 text-center text-sm font-extrabold text-slate-100">
            Income Tax Decoded
          </p>
          <p className="mt-1 text-center text-[11px] font-semibold uppercase tracking-[0.12em] text-emerald-300">
            Complete Framework
          </p>
          <p className="mt-2 text-center text-[10px] uppercase tracking-[0.14em] text-slate-400">
            Monitize Learn
          </p>
        </div>
      </div>

      <button
        type="button"
        className="mt-4 w-full rounded-md bg-slate-100 px-4 py-3 text-sm font-bold text-slate-950 transition hover:bg-emerald-300"
      >
        Start Learning {"->"}
      </button>

      <div className="mt-4 grid grid-cols-3 gap-2">
        {bookStats.map((item) => (
          <div
            key={item.label}
            className="rounded-md border border-slate-700 bg-slate-900/50 p-2 text-center"
          >
            <p className="text-sm font-bold text-emerald-300">{item.value}</p>
            <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-slate-400">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </aside>
  );
}
