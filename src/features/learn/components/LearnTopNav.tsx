import Link from "next/link";

const navItems = [
  { label: "Learn", href: "#hero" },
  { label: "Curriculum", href: "#curriculum" },
  { label: "Sneak Peek", href: "#sneak-peek" },
  { label: "Reviews", href: "#reviews" },
  { label: "More Tracks", href: "#recommendations" }
] as const;

export default function LearnTopNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-800 bg-[#0b1c2d]/95 backdrop-blur">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center gap-3 px-4 sm:px-6 lg:px-12">
        <Link
          href="#hero"
          className="shrink-0 text-base font-extrabold tracking-tight text-slate-100"
        >
          M<span className="text-emerald-300">.</span>onitize
        </Link>

        <nav className="min-w-0 flex-1 overflow-x-auto">
          <ul className="flex min-w-max items-center gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex rounded-md px-3 py-2 text-xs font-medium text-slate-300 transition-colors hover:bg-slate-800 hover:text-emerald-200 sm:text-sm"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href="#hero"
          className="hidden shrink-0 rounded-md bg-emerald-500 px-3 py-2 text-xs font-semibold text-slate-950 transition hover:bg-emerald-400 sm:inline-flex sm:text-sm"
        >
          Get Started
        </Link>
      </div>
    </header>
  );
}
