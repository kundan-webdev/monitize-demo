import MagicBento from "@/features/marketing/components/MagicBento";

export default function CoreToolsSection() {
  return (
    <section
      id="tools"
      className="scroll-mt-24 border-t border-slate-200 bg-slate-50"
    >
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Core tools
          </p>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Try our interactive tool set.
          </h2>
          <p className="max-w-3xl text-sm leading-6 text-slate-600 sm:text-base">
            Experience how Monitize simplifies financial complexity through
            transparent, logic-first utilities.
          </p>
        </div>

        <div className="mt-8 rounded-3xl border border-slate-200 bg-[#e8efed] p-2 shadow-[0_24px_50px_-34px_rgba(8,26,45,0.55)] sm:p-3">
          <MagicBento
            textAutoHide={true}
            enableStars
            enableSpotlight
            enableBorderGlow={true}
            enableTilt
            enableMagnetism={false}
            clickEffect
            spotlightRadius={400}
            particleCount={12}
            glowColor="27, 175, 128"
          />
        </div>
      </div>
    </section>
  );
}
