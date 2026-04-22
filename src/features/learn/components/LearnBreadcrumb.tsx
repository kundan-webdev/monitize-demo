import Link from "next/link";

export default function LearnBreadcrumb() {
  return (
    <div className="mx-auto flex w-full max-w-6xl items-center gap-2 px-4 pt-4 text-xs text-slate-400 sm:px-6 lg:px-12">
      <Link href="/" className="transition-colors hover:text-emerald-300">
        Home
      </Link>
      <span className="text-slate-600">{">"}</span>
      <Link href="#hero" className="transition-colors hover:text-emerald-300">
        Learn
      </Link>
      <span className="text-slate-600">{">"}</span>
      <span>Income Tax</span>
      <span className="text-slate-600">{">"}</span>
      <span className="text-slate-200">Income Tax Decoded</span>
    </div>
  );
}
