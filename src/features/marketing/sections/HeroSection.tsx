"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const trustItems = [
  "No Advisory, No Conflict",
  "Build on RBI, SEBI, GST",
  "DPDP Compliant"
] as const;

const HERO_PREVIEW_TUNING = {
  initialRotationDeg: 24,
  rotationScrollDistanceFactor: 0.85,
  rotationSpeedMultiplier: 1.25,
  perspectivePx: 1000,
  imageMaxHeight: "clamp(18rem, 42vw, 30rem)",
  imageScale: 1.09
} as const;

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const previewCardRef = useRef<HTMLDivElement | null>(null);

  const baseTrustTickerItems = Array.from(
    { length: 12 },
    (_, index) => trustItems[index % trustItems.length]
  );

  useEffect(() => {
    const section = sectionRef.current;
    const previewCard = previewCardRef.current;

    if (!section || !previewCard) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      previewCard.style.transform = "rotateX(0deg)";
      return;
    }

    let frameId = 0;

    const updateRotation = () => {
      frameId = 0;

      const rect = section.getBoundingClientRect();
      const progressRaw =
        -rect.top /
        Math.max(rect.height * HERO_PREVIEW_TUNING.rotationScrollDistanceFactor, 1);
      const progressWithSpeed =
        progressRaw * HERO_PREVIEW_TUNING.rotationSpeedMultiplier;
      const progress = Math.min(Math.max(progressWithSpeed, 0), 1);
      const rotateX = HERO_PREVIEW_TUNING.initialRotationDeg * (1 - progress);

      previewCard.style.transform = `rotateX(${rotateX.toFixed(2)}deg)`;
    };

    const requestUpdate = () => {
      if (frameId) {
        return;
      }

      frameId = window.requestAnimationFrame(updateRotation);
    };

    updateRotation();

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }

      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className=" scroll-mt-24 border-b border-slate-200 bg-[#e8eeec] pt-16 sm:pt-20 lg:pt-24"
    >
      <div className=" mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 ">
        <div className=" mx-auto max-w-3xl text-center">
          <p className="inline-flex rounded-full border border-slate-300/80 bg-white/75 px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-700 shadow-sm sm:text-xs">
            India&apos;s Unbiased Financial Education Platform
          </p>

          <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-[#14263b] sm:text-5xl lg:text-7xl">
            Financial clarity,
            <br />
            decoded for India.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base font-medium leading-relaxed text-slate-700 sm:text-xl sm:leading-snug">
            Most people operate inside financial systems they barely
            understand.{" "}
            <span className="font-semibold text-slate-800 underline decoration-primary decoration-2 underline-offset-4">
              Monitize decodes them
            </span>{" "}
            with simulations, frameworks, and no agenda.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link
              href="/register"
              className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-slate-950 transition-transform duration-200 hover:translate-y-[-1px] hover:opacity-95"
            >
              Begin Learning Track
            </Link>
            <Link
              href="/methodology"
              className="inline-flex h-12 items-center justify-center rounded-full border border-primary/80 bg-white/70 px-8 text-sm font-semibold text-[#122235] transition-colors duration-200 hover:bg-white"
            >
              Explore Frameworks
            </Link>
          </div>
        </div>

        <div
          className="relative mx-auto mt-12 max-w-5xl sm:mt-14 lg:mt-16"
          style={{
            perspective: `${HERO_PREVIEW_TUNING.perspectivePx}px`,
            perspectiveOrigin: "50% 100%"
          }}
        >
          <div className="pointer-events-none absolute inset-x-8 -bottom-6 h-16 rounded-full bg-primary/45 blur-3xl sm:inset-x-20 sm:h-20" />
          <div
            ref={previewCardRef}
            className="origin-bottom will-change-transform [transform-style:preserve-3d]"
            style={{
              transform: `rotateX(${HERO_PREVIEW_TUNING.initialRotationDeg}deg)`
            }}
          >
            <div className="overflow-hidden rounded-[30px] border border-slate-900/20 bg-gradient-to-b from-[#0f2236] to-[#071629] p-2 shadow-[0_28px_70px_-22px_rgba(5,22,37,0.85)]">
              <div className="overflow-hidden rounded-[24px] border border-emerald-200/15 bg-[#081a2d]">
                <div
                  className="overflow-hidden"
                  style={{ maxHeight: HERO_PREVIEW_TUNING.imageMaxHeight }}
                >
                  <Image
                    src="/images/product-preview.svg"
                    alt="Monitize product preview interface for financial clarity workflows."
                    width={960}
                    height={680}
                    priority
                    className="h-auto w-full object-cover object-top"
                    style={{ transform: `scale(${HERO_PREVIEW_TUNING.imageScale})` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-slate-900/10 bg-white/90">
        <div className="group overflow-hidden">
          <div className="hero-marquee-track flex w-max items-center group-focus-within:[animation-play-state:paused] group-hover:[animation-play-state:paused]">
            {[0, 1].map((copyIndex) => (
              <ul
                key={copyIndex}
                aria-hidden={copyIndex === 1}
                className="flex min-w-max items-center gap-8 px-4 py-3 sm:gap-10 sm:px-6 lg:px-8"
              >
                {baseTrustTickerItems.map((item, index) => (
                  <li
                    key={`${copyIndex}-${item}-${index}`}
                    className="flex shrink-0 items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-700 sm:text-xs"
                  >
                    <span className="h-2 w-2 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
