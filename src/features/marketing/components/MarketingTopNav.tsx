import Link from "next/link";

const navItems = [
  { label: "About", href: "#about-monitize" },
  { label: "Tools", href: "#tools" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Framework", href: "#framework" },
  { label: "Infrastructure", href: "#infrastructure" },
  { label: "FAQ", href: "#faq" }
] as const;

export function MarketingTopNav() {
  return (
    <header
      data-site-header
      className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center gap-3">
          <Link
            href="#hero"
            className="shrink-0 text-sm font-semibold uppercase tracking-[0.14em] text-text"
          >
            Monitize
          </Link>

          <nav className="min-w-0 flex-1 overflow-x-auto">
            <ul className="flex min-w-max items-center gap-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex rounded-md px-3 py-2 text-xs font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-text sm:text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <Link
            href="#get-started"
            className="hidden shrink-0 rounded-md bg-primary px-3 py-2 text-xs font-semibold text-white transition-opacity hover:opacity-90 sm:inline-flex sm:text-sm"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
