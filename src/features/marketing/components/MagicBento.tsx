"use client";

import { gsap } from "gsap";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";

interface BentoCardProps {
  id: string;
  label: string;
  title: string;
  description: string;
  tone: "mint" | "deep" | "emerald" | "charcoal" | "navy" | "soft";
  layoutClass: string;
}

export interface BentoProps {
  textAutoHide?: boolean;
  enableStars?: boolean;
  enableSpotlight?: boolean;
  enableBorderGlow?: boolean;
  disableAnimations?: boolean;
  spotlightRadius?: number;
  particleCount?: number;
  enableTilt?: boolean;
  glowColor?: string;
  clickEffect?: boolean;
  enableMagnetism?: boolean;
}

const DEFAULT_PARTICLE_COUNT = 12;
const DEFAULT_SPOTLIGHT_RADIUS = 400;
const DEFAULT_GLOW_COLOR = "132, 0, 255";
const MOBILE_BREAKPOINT = 768;
type MagicCardStyle = React.CSSProperties & {
  "--magic-glow-x": string;
  "--magic-glow-y": string;
  "--magic-glow-intensity": string;
  "--magic-glow-radius": string;
};

const CARD_DATA: BentoCardProps[] = [
  {
    id: "tax-estimator",
    label: "Tax estimator",
    title: "Old regime or new? Let the numbers decide.",
    description: "Enter your income and deductions and compare in seconds.",
    tone: "mint",
    layoutClass: "magic-card--tax"
  },
  {
    id: "ai-analysis",
    label: "AI analysis",
    title: "Ask. Understand. Decide.",
    description: "India-specific financial clarity without advisor bias.",
    tone: "deep",
    layoutClass: "magic-card--ai"
  },
  {
    id: "zero-conflict",
    label: "Zero conflict",
    title: "No commissions. No bias. No agenda.",
    description: "Built on SEBI, RBI, and Income Tax frameworks.",
    tone: "emerald",
    layoutClass: "magic-card--zero"
  },
  {
    id: "learners",
    label: "Learner proof",
    title: "8,000+ learners",
    description: "4.8 rating. No signup needed.",
    tone: "charcoal",
    layoutClass: "magic-card--learners"
  },
  {
    id: "clarity-score",
    label: "Clarity score",
    title: "Getting there",
    description: "3 areas still need attention.",
    tone: "navy",
    layoutClass: "magic-card--clarity"
  },
  {
    id: "learning-track",
    label: "Learning track",
    title: "Structured financial education, free.",
    description: "10+ topics from tax to mutual funds in one framework.",
    tone: "emerald",
    layoutClass: "magic-card--track"
  },
  {
    id: "monthly-tracker",
    label: "Monthly tracker",
    title: "Watch your clarity compound.",
    description: "Every module you complete pushes your score up.",
    tone: "soft",
    layoutClass: "magic-card--monthly"
  }
];

const TAX_COMPARISON = [
  { label: "Old regime", value: 154000, color: "#d45a5a" },
  { label: "New regime", value: 120000, color: "#1a9b7a" }
] as const;

const CLARITY_METRICS = [
  { name: "Tax awareness", score: 18, max: 25 },
  { name: "Financial learning", score: 15, max: 25 },
  { name: "Budget structure", score: 12, max: 30 }
] as const;

const LEARNER_TREND = [52, 57, 63, 72, 81, 89] as const;
const MONTHLY_PROGRESS = [
  { month: "Jan", value: 30 },
  { month: "Feb", value: 43 },
  { month: "Mar", value: 58 },
  { month: "Apr", value: 76 },
  { month: "May", value: 83 }
] as const;

const formatInr = (value: number) => `INR ${value.toLocaleString("en-IN")}`;

type Point = { x: number; y: number };

const buildLinePoints = (
  values: readonly number[],
  width: number,
  height: number,
  padding: number
) => {
  const usableWidth = width - padding * 2;
  const usableHeight = height - padding * 2;
  const maxValue = Math.max(...values);
  const minValue = Math.min(...values);
  const range = Math.max(maxValue - minValue, 1);

  return values.map((value, index) => {
    const x =
      padding +
      (index / Math.max(values.length - 1, 1)) * usableWidth;
    const y = padding + (1 - (value - minValue) / range) * usableHeight;
    return { x, y };
  });
};

const pointsToPolyline = (points: Point[]) =>
  points.map((point) => `${point.x},${point.y}`).join(" ");

const pointsToAreaPath = (points: Point[], width: number, height: number) => {
  if (!points.length) {
    return "";
  }

  const first = points[0];
  const last = points[points.length - 1];
  const line = points.map((point) => `L ${point.x} ${point.y}`).join(" ");

  return `M ${first.x} ${height} ${line} L ${last.x} ${height} Z`;
};

const createParticleElement = (
  x: number,
  y: number,
  color: string = DEFAULT_GLOW_COLOR
): HTMLDivElement => {
  const element = document.createElement("div");
  element.className = "magic-particle";
  element.style.cssText = `
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(${color}, 1);
    box-shadow: 0 0 8px rgba(${color}, 0.65);
    pointer-events: none;
    left: ${x}px;
    top: ${y}px;
    z-index: 25;
  `;
  return element;
};

const calculateSpotlightValues = (radius: number) => ({
  proximity: radius * 0.45,
  fadeDistance: radius * 0.85
});

const updateCardGlowProperties = (
  card: HTMLElement,
  mouseX: number,
  mouseY: number,
  glow: number,
  radius: number
) => {
  const rect = card.getBoundingClientRect();
  const relativeX = ((mouseX - rect.left) / rect.width) * 100;
  const relativeY = ((mouseY - rect.top) / rect.height) * 100;

  card.style.setProperty("--magic-glow-x", `${relativeX}%`);
  card.style.setProperty("--magic-glow-y", `${relativeY}%`);
  card.style.setProperty("--magic-glow-intensity", glow.toString());
  card.style.setProperty("--magic-glow-radius", `${radius}px`);
};

const useMobileDetection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};

const ParticleCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  disableAnimations?: boolean;
  style?: React.CSSProperties;
  particleCount?: number;
  glowColor?: string;
  enableTilt?: boolean;
  clickEffect?: boolean;
  enableMagnetism?: boolean;
  enableParticles?: boolean;
}> = ({
  children,
  className = "",
  disableAnimations = false,
  style,
  particleCount = DEFAULT_PARTICLE_COUNT,
  glowColor = DEFAULT_GLOW_COLOR,
  enableTilt = true,
  clickEffect = false,
  enableMagnetism = false,
  enableParticles = true
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const particlesRef = useRef<HTMLDivElement[]>([]);
  const particleBlueprintsRef = useRef<HTMLDivElement[]>([]);
  const particlesInitializedRef = useRef(false);

  const initializeParticles = useCallback(() => {
    if (!cardRef.current || particlesInitializedRef.current) {
      return;
    }

    const { width, height } = cardRef.current.getBoundingClientRect();
    particleBlueprintsRef.current = Array.from({ length: particleCount }, () =>
      createParticleElement(Math.random() * width, Math.random() * height, glowColor)
    );
    particlesInitializedRef.current = true;
  }, [glowColor, particleCount]);

  const clearParticles = useCallback(() => {
    timeoutsRef.current.forEach((timeoutId) => clearTimeout(timeoutId));
    timeoutsRef.current = [];

    particlesRef.current.forEach((particle) => {
      gsap.killTweensOf(particle);
      gsap.to(particle, {
        scale: 0,
        opacity: 0,
        duration: 0.18,
        ease: "power2.in",
        onComplete: () => {
          particle.remove();
        }
      });
    });

    particlesRef.current = [];
  }, []);

  useEffect(() => {
    if (!cardRef.current || disableAnimations) {
      return;
    }

    const element = cardRef.current;
    let hovering = false;

    const handleMouseEnter = () => {
      hovering = true;
      if (enableParticles) {
        initializeParticles();

        particleBlueprintsRef.current.forEach((blueprint, index) => {
          const timeoutId = setTimeout(() => {
            if (!hovering || !cardRef.current) {
              return;
            }

            const particle = blueprint.cloneNode(true) as HTMLDivElement;
            cardRef.current.appendChild(particle);
            particlesRef.current.push(particle);

            gsap.fromTo(
              particle,
              { scale: 0, opacity: 0 },
              { scale: 1, opacity: 1, duration: 0.3, ease: "back.out(1.7)" }
            );

            gsap.to(particle, {
              x: (Math.random() - 0.5) * 88,
              y: (Math.random() - 0.5) * 88,
              rotation: Math.random() * 360,
              duration: 2.6 + Math.random() * 1.8,
              ease: "none",
              repeat: -1,
              yoyo: true
            });

            gsap.to(particle, {
              opacity: 0.2,
              duration: 1.4,
              ease: "power2.inOut",
              repeat: -1,
              yoyo: true
            });
          }, index * 90);

          timeoutsRef.current.push(timeoutId);
        });
      }
    };

    const handleMouseLeave = () => {
      hovering = false;
      clearParticles();
      gsap.to(element, {
        rotateX: 0,
        rotateY: 0,
        x: 0,
        y: 0,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (!enableTilt && !enableMagnetism) {
        return;
      }

      const rect = element.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      if (enableTilt) {
        const rotateX = ((y - centerY) / centerY) * -9;
        const rotateY = ((x - centerX) / centerX) * 9;
        gsap.to(element, {
          rotateX,
          rotateY,
          duration: 0.13,
          ease: "power2.out",
          transformPerspective: 1000
        });
      }

      if (enableMagnetism) {
        gsap.to(element, {
          x: (x - centerX) * 0.045,
          y: (y - centerY) * 0.045,
          duration: 0.2,
          ease: "power2.out"
        });
      }
    };

    const handleClick = (event: MouseEvent) => {
      if (!clickEffect) {
        return;
      }

      const rect = element.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const maxDistance = Math.max(
        Math.hypot(x, y),
        Math.hypot(x - rect.width, y),
        Math.hypot(x, y - rect.height),
        Math.hypot(x - rect.width, y - rect.height)
      );

      const ripple = document.createElement("div");
      ripple.style.cssText = `
        position: absolute;
        width: ${maxDistance * 2}px;
        height: ${maxDistance * 2}px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(${glowColor}, 0.33) 0%, rgba(${glowColor}, 0.12) 42%, transparent 72%);
        left: ${x - maxDistance}px;
        top: ${y - maxDistance}px;
        pointer-events: none;
        z-index: 30;
      `;

      element.appendChild(ripple);

      gsap.fromTo(
        ripple,
        { scale: 0, opacity: 1 },
        {
          scale: 1,
          opacity: 0,
          duration: 0.7,
          ease: "power2.out",
          onComplete: () => ripple.remove()
        }
      );
    };

    element.addEventListener("mouseenter", handleMouseEnter);
    element.addEventListener("mouseleave", handleMouseLeave);
    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("click", handleClick);

    return () => {
      hovering = false;
      element.removeEventListener("mouseenter", handleMouseEnter);
      element.removeEventListener("mouseleave", handleMouseLeave);
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("click", handleClick);
      clearParticles();
    };
  }, [
    clearParticles,
    clickEffect,
    disableAnimations,
    enableMagnetism,
    enableParticles,
    enableTilt,
    glowColor,
    initializeParticles
  ]);

  return (
    <div
      ref={cardRef}
      className={`${className} relative overflow-hidden`}
      style={{ ...style, position: "relative", overflow: "hidden" }}
    >
      {children}
    </div>
  );
};

const GlobalSpotlight: React.FC<{
  gridRef: React.RefObject<HTMLDivElement | null>;
  disableAnimations?: boolean;
  enabled?: boolean;
  spotlightRadius?: number;
  glowColor?: string;
}> = ({
  gridRef,
  disableAnimations = false,
  enabled = true,
  spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
  glowColor = DEFAULT_GLOW_COLOR
}) => {
  const spotlightRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!gridRef.current || !enabled || disableAnimations) {
      return;
    }

    const spotlight = document.createElement("div");
    spotlight.className = "magic-global-spotlight";
    spotlight.style.cssText = `
      position: fixed;
      width: 760px;
      height: 760px;
      border-radius: 50%;
      pointer-events: none;
      background: radial-gradient(circle, rgba(${glowColor}, 0.17) 0%, rgba(${glowColor}, 0.09) 22%, rgba(${glowColor}, 0.03) 42%, transparent 70%);
      z-index: 60;
      opacity: 0;
      transform: translate(-50%, -50%);
      mix-blend-mode: screen;
    `;
    document.body.appendChild(spotlight);
    spotlightRef.current = spotlight;

    const handleMove = (event: MouseEvent) => {
      if (!gridRef.current || !spotlightRef.current) {
        return;
      }

      const section = gridRef.current.closest(".magic-bento-shell");
      if (!section) {
        return;
      }

      const sectionRect = section.getBoundingClientRect();
      const insideSection =
        event.clientX >= sectionRect.left &&
        event.clientX <= sectionRect.right &&
        event.clientY >= sectionRect.top &&
        event.clientY <= sectionRect.bottom;

      const cards = gridRef.current.querySelectorAll(".magic-card");
      if (!insideSection) {
        cards.forEach((card) => {
          (card as HTMLElement).style.setProperty("--magic-glow-intensity", "0");
        });
        gsap.to(spotlightRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: "power2.out"
        });
        return;
      }

      const { proximity, fadeDistance } = calculateSpotlightValues(spotlightRadius);
      let minDistance = Number.POSITIVE_INFINITY;

      cards.forEach((card) => {
        const cardElement = card as HTMLElement;
        const cardRect = cardElement.getBoundingClientRect();
        const centerX = cardRect.left + cardRect.width / 2;
        const centerY = cardRect.top + cardRect.height / 2;

        const distance =
          Math.hypot(event.clientX - centerX, event.clientY - centerY) -
          Math.max(cardRect.width, cardRect.height) / 2;
        const effectiveDistance = Math.max(0, distance);
        minDistance = Math.min(minDistance, effectiveDistance);

        let glowIntensity = 0;
        if (effectiveDistance <= proximity) {
          glowIntensity = 1;
        } else if (effectiveDistance <= fadeDistance) {
          glowIntensity =
            (fadeDistance - effectiveDistance) / (fadeDistance - proximity);
        }

        updateCardGlowProperties(
          cardElement,
          event.clientX,
          event.clientY,
          glowIntensity,
          spotlightRadius
        );
      });

      gsap.to(spotlightRef.current, {
        left: event.clientX,
        top: event.clientY,
        duration: 0.1,
        ease: "power2.out"
      });

      const targetOpacity =
        minDistance <= proximity
          ? 0.78
          : minDistance <= fadeDistance
            ? ((fadeDistance - minDistance) / (fadeDistance - proximity)) * 0.78
            : 0;

      gsap.to(spotlightRef.current, {
        opacity: targetOpacity,
        duration: targetOpacity > 0 ? 0.18 : 0.42,
        ease: "power2.out"
      });
    };

    const handleMouseLeave = () => {
      if (!gridRef.current || !spotlightRef.current) {
        return;
      }

      gridRef.current.querySelectorAll(".magic-card").forEach((card) => {
        (card as HTMLElement).style.setProperty("--magic-glow-intensity", "0");
      });

      gsap.to(spotlightRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    document.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      spotlightRef.current?.remove();
    };
  }, [disableAnimations, enabled, glowColor, gridRef, spotlightRadius]);

  return null;
};

const renderCardBody = (card: BentoCardProps, textAutoHide: boolean) => {
  const titleClass = textAutoHide ? "magic-line-clamp-2" : "";
  const descriptionClass = textAutoHide ? "magic-line-clamp-2" : "";

  if (card.id === "tax-estimator") {
    const maxTax = Math.max(...TAX_COMPARISON.map((item) => item.value));
    const taxDelta = TAX_COMPARISON[0].value - TAX_COMPARISON[1].value;

    return (
      <div className="flex h-full flex-col justify-between">
        <div>
          <h3 className={`text-2xl font-semibold leading-tight ${titleClass}`}>
            {card.title}
          </h3>
          <p className={`mt-3 text-sm opacity-85 ${descriptionClass}`}>
            {card.description}
          </p>
        </div>

        <div className="mt-4 rounded-2xl border border-white/65 bg-white/75 p-3">
          <div className="grid grid-cols-2 gap-3">
            {TAX_COMPARISON.map((item) => (
              <div key={item.label}>
                <p className="text-xs font-semibold text-[#2b6b60]">{item.label}</p>
                <p className="mt-1 text-sm font-semibold text-[#1e4f47]">
                  {formatInr(item.value)}
                </p>
                <div className="mt-2 h-16 rounded-lg bg-white/70 p-1">
                  <div className="flex h-full items-end">
                    <span
                      className="w-full rounded-md"
                      style={{
                        height: `${Math.max((item.value / maxTax) * 100, 18)}%`,
                        backgroundColor: item.color
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-3 h-[1px] bg-[#a9c8bf]" />
          <div className="mt-3 flex items-center justify-between gap-3">
            <p className="text-sm font-medium text-[#24675b]">Estimated savings</p>
            <p className="text-base font-semibold text-[#1a7b65]">
              {formatInr(taxDelta)} / yr
            </p>
          </div>
          <div className="mt-2 h-2 rounded-full bg-emerald-100">
            <span
              className="block h-full rounded-full bg-[#22a181]"
              style={{ width: `${(taxDelta / TAX_COMPARISON[0].value) * 100}%` }}
            />
          </div>
        </div>

        <div className="mt-2 rounded-xl border border-white/45 bg-white/65 px-3 py-2 text-xs font-medium text-[#2d6f62]">
          Side-by-side projection, not advisory output.
        </div>
      </div>
    );
  }

  if (card.id === "ai-analysis") {
    return (
      <div className="flex h-full flex-col">
        <h3 className={`text-2xl font-semibold leading-tight ${titleClass}`}>
          {card.title}
        </h3>
        <p className={`mt-2 text-sm opacity-85 ${descriptionClass}`}>
          {card.description}
        </p>

        <div className="mt-auto rounded-xl border border-white/15 bg-white/5 p-3 text-sm text-white/90">
          <p className="text-xs uppercase tracking-wide text-white/65">Latest insight</p>
          <p className="mt-2">
            &quot;Your 80C utilisation is only 40%. You can save INR 23,400 more this year.&quot;
          </p>
        </div>
      </div>
    );
  }

  if (card.id === "clarity-score") {
    const clarityTotal = 60;
    const clarityTrendPoints = buildLinePoints([39, 45, 50, 57, 60], 220, 70, 8);
    const clarityAreaPath = pointsToAreaPath(clarityTrendPoints, 220, 70);

    return (
      <div className="flex h-full flex-col">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className={`text-xl font-semibold ${titleClass}`}>{card.title}</h3>
            <p className={`mt-1 text-sm opacity-85 ${descriptionClass}`}>
              {card.description}
            </p>
          </div>
          <div
            className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full text-center"
            style={{
              background: `conic-gradient(#43cf99 ${clarityTotal * 3.6}deg, rgba(255,255,255,0.2) 0deg)`
            }}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#082742]">
              <p className="text-sm font-semibold leading-tight">
                {clarityTotal}
                <span className="block text-[10px] font-medium opacity-75">/100</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-3 overflow-hidden rounded-lg border border-white/10 bg-[#0b3150]/90 p-2">
          <svg viewBox="0 0 220 70" className="h-14 w-full">
            <path d={clarityAreaPath} fill="rgba(79, 220, 163, 0.22)" />
            <polyline
              points={pointsToPolyline(clarityTrendPoints)}
              fill="none"
              stroke="#52d1a7"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {clarityTrendPoints.map((point, index) => (
              <circle
                key={`clarity-dot-${index}`}
                cx={point.x}
                cy={point.y}
                r="2.3"
                fill="#94f5d6"
              />
            ))}
          </svg>
        </div>

        <ul className="mt-auto space-y-2 text-xs">
          {CLARITY_METRICS.map((metric) => {
            const percentage = (metric.score / metric.max) * 100;
            return (
              <li key={metric.name}>
                <div className="mb-1 flex items-center justify-between">
                  <span>{metric.name}</span>
                  <span className="font-semibold text-emerald-300">
                    {metric.score}/{metric.max}
                  </span>
                </div>
                <div className="h-1.5 rounded-full bg-white/15">
                  <span
                    className="block h-full rounded-full bg-emerald-400"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  if (card.id === "learning-track") {
    const chips = [
      "Income Tax Act",
      "GST basics",
      "Mutual funds",
      "SEBI rules",
      "RBI basics"
    ];

    return (
      <div className="flex h-full flex-col">
        <h3 className={`text-2xl font-semibold leading-tight ${titleClass}`}>
          {card.title}
        </h3>
        <p className={`mt-3 text-sm opacity-90 ${descriptionClass}`}>{card.description}</p>
        <div className="mt-auto flex flex-wrap gap-2 pt-4">
          {chips.map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-white/25 bg-white/15 px-3 py-1 text-xs font-medium"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
    );
  }

  if (card.id === "monthly-tracker") {
    const monthlyValues = MONTHLY_PROGRESS.map((item) => item.value);
    const monthlyChartPoints = buildLinePoints(monthlyValues, 310, 132, 12);
    const monthlyAreaPath = pointsToAreaPath(monthlyChartPoints, 310, 132);

    return (
      <div className="grid h-full gap-5 md:grid-cols-[1fr_1.05fr] md:items-end">
        <div>
          <h3 className={`text-3xl font-semibold leading-tight ${titleClass}`}>
            {card.title}
          </h3>
          <p className={`mt-3 text-sm opacity-85 ${descriptionClass}`}>{card.description}</p>
        </div>

        <div className="rounded-xl border border-[#a9cac2] bg-[#e3f0ed] p-2.5">
          <svg viewBox="0 0 310 132" className="h-28 w-full">
            <path d={monthlyAreaPath} fill="#9ad2c5" opacity="0.45" />
            <polyline
              points={pointsToPolyline(monthlyChartPoints)}
              fill="none"
              stroke="#1ea783"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {monthlyChartPoints.map((point, index) => (
              <g key={`monthly-${MONTHLY_PROGRESS[index].month}`}>
                <circle cx={point.x} cy={point.y} r="3" fill="#1ea783" />
                <text
                  x={point.x}
                  y="124"
                  textAnchor="middle"
                  className="fill-[#5b8379] text-[11px] font-semibold"
                >
                  {MONTHLY_PROGRESS[index].month}
                </text>
              </g>
            ))}
          </svg>
        </div>
      </div>
    );
  }

  if (card.id === "learners") {
    const sparklinePoints = buildLinePoints(LEARNER_TREND, 210, 74, 8);
    const sparklineAreaPath = pointsToAreaPath(sparklinePoints, 210, 74);

    return (
      <div className="flex h-full flex-col">
        <h3 className={`text-2xl font-semibold leading-tight ${titleClass}`}>
          {card.title}
        </h3>
        <p className={`mt-2 text-sm opacity-90 ${descriptionClass}`}>{card.description}</p>

        <div className="mt-3 rounded-xl border border-white/15 bg-white/[0.03] p-2">
          <svg viewBox="0 0 210 74" className="h-16 w-full">
            <path d={sparklineAreaPath} fill="rgba(97, 215, 173, 0.2)" />
            <polyline
              points={pointsToPolyline(sparklinePoints)}
              fill="none"
              stroke="#6af0c1"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {sparklinePoints.map((point, index) => (
              <circle
                key={`learner-dot-${index}`}
                cx={point.x}
                cy={point.y}
                r="2.1"
                fill="#b2ffe3"
              />
            ))}
          </svg>
          <p className="mt-1 text-[11px] font-medium text-white/70">
            Weekly completion trend: +37% in the last 6 weeks
          </p>
        </div>

        <blockquote className="mt-auto border-l-2 border-white/25 pl-3 text-sm text-white/80">
          &quot;Finally understood the difference between LTCG and STCG.&quot;
        </blockquote>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col">
      <h3 className={`text-2xl font-semibold leading-tight ${titleClass}`}>
        {card.title}
      </h3>
      <p className={`mt-3 text-sm opacity-90 ${descriptionClass}`}>{card.description}</p>
    </div>
  );
};

const MagicBento: React.FC<BentoProps> = ({
  textAutoHide = true,
  enableStars = true,
  enableSpotlight = true,
  enableBorderGlow = true,
  disableAnimations = false,
  spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
  particleCount = DEFAULT_PARTICLE_COUNT,
  enableTilt = false,
  glowColor = DEFAULT_GLOW_COLOR,
  clickEffect = true,
  enableMagnetism = true
}) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const isMobile = useMobileDetection();
  const shouldDisableAnimations = disableAnimations || isMobile;

  const toneStyles = useMemo(
    () => ({
      mint: {
        backgroundColor: "#d8e8e5",
        borderColor: "#bfd8d2",
        color: "#1d6559"
      },
      deep: {
        backgroundColor: "#0f2238",
        borderColor: "#243751",
        color: "#f4faf9"
      },
      emerald: {
        backgroundColor: "#26ac82",
        borderColor: "#4ec89f",
        color: "#effcf7"
      },
      charcoal: {
        backgroundColor: "#2e2e2d",
        borderColor: "#3f3f3f",
        color: "#f4f5f4"
      },
      navy: {
        backgroundColor: "#082742",
        borderColor: "#184261",
        color: "#f0f8ff"
      },
      soft: {
        backgroundColor: "#d8e8e5",
        borderColor: "#bfd8d2",
        color: "#205b52"
      }
    }),
    []
  );

  return (
    <section className="magic-bento-shell relative">
      <style>
        {`
          .magic-bento-shell {
            --magic-glow-x: 50%;
            --magic-glow-y: 50%;
            --magic-glow-intensity: 0;
            --magic-glow-radius: 200px;
          }

          .magic-grid {
            display: grid;
            grid-template-columns: repeat(12, minmax(0, 1fr));
            grid-auto-rows: minmax(168px, auto);
            gap: 0.65rem;
          }

          .magic-card {
            border-radius: 1.2rem;
            border: 1px solid;
            padding: 1rem;
            transition: box-shadow 0.24s ease, transform 0.24s ease;
            position: relative;
            isolation: isolate;
          }

          .magic-card--border-glow::after {
            content: "";
            position: absolute;
            inset: 0;
            border-radius: inherit;
            padding: 2px;
            background: radial-gradient(
              var(--magic-glow-radius) circle at var(--magic-glow-x) var(--magic-glow-y),
              rgba(${glowColor}, calc(var(--magic-glow-intensity) * 0.8)) 0%,
              rgba(${glowColor}, calc(var(--magic-glow-intensity) * 0.35)) 35%,
              rgba(${glowColor}, 0) 68%
            );
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            mask-composite: exclude;
            pointer-events: none;
            z-index: 2;
          }

          .magic-card--tax {
            grid-column: span 5 / span 5;
            grid-row: span 2 / span 2;
          }
          .magic-card--ai {
            grid-column: span 3 / span 3;
          }
          .magic-card--zero {
            grid-column: span 4 / span 4;
          }
          .magic-card--learners {
            grid-column: span 3 / span 3;
          }
          .magic-card--clarity {
            grid-column: span 4 / span 4;
          }
          .magic-card--track {
            grid-column: span 4 / span 4;
          }
          .magic-card--monthly {
            grid-column: span 8 / span 8;
          }

          .magic-line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          @media (max-width: 1080px) {
            .magic-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
              grid-auto-rows: minmax(160px, auto);
            }

            .magic-card--tax,
            .magic-card--ai,
            .magic-card--zero,
            .magic-card--learners,
            .magic-card--clarity,
            .magic-card--track {
              grid-column: span 1 / span 1;
              grid-row: span 1 / span 1;
            }

            .magic-card--monthly {
              grid-column: span 2 / span 2;
              grid-row: span 1 / span 1;
            }
          }

          @media (max-width: 720px) {
            .magic-grid {
              grid-template-columns: 1fr;
            }

            .magic-card,
            .magic-card--monthly {
              grid-column: span 1 / span 1;
            }
          }
        `}
      </style>

      {enableSpotlight ? (
        <GlobalSpotlight
          gridRef={gridRef}
          disableAnimations={shouldDisableAnimations}
          enabled={enableSpotlight}
          spotlightRadius={spotlightRadius}
          glowColor={glowColor}
        />
      ) : null}

      <div ref={gridRef} className="magic-grid">
        {CARD_DATA.map((card) => {
          const toneStyle = toneStyles[card.tone];
          const cardStyle: MagicCardStyle = {
            ...toneStyle,
            "--magic-glow-x": "50%",
            "--magic-glow-y": "50%",
            "--magic-glow-intensity": "0",
            "--magic-glow-radius": "220px"
          };

          return (
            <ParticleCard
              key={card.id}
              className={`magic-card ${card.layoutClass} ${
                enableBorderGlow ? "magic-card--border-glow" : ""
              }`}
              style={cardStyle}
              disableAnimations={shouldDisableAnimations}
              particleCount={particleCount}
              glowColor={glowColor}
              enableTilt={enableTilt}
              clickEffect={clickEffect}
              enableMagnetism={enableMagnetism}
              enableParticles={enableStars}
            >
              <div className="mb-3 inline-flex items-center rounded-full border border-black/10 bg-white/30 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.08em]">
                {card.label}
              </div>
              {renderCardBody(card, textAutoHide)}
            </ParticleCard>
          );
        })}
      </div>
    </section>
  );
};

export default MagicBento;

