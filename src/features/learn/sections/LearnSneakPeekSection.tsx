"use client";

import { forwardRef, useMemo, useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import LearnSectionLabel from "@/features/learn/components/LearnSectionLabel";

type BookOrientation = "portrait" | "landscape";

type FlipBookInstance = {
  flipPrev: () => void;
  flipNext: () => void;
};

type FlipBookRef = {
  pageFlip: () => FlipBookInstance;
};

const imagePages = [
  "/images/001.png",
  "/images/002.png",
  "/images/003.png",
  "/images/004.png",
  "/images/005.png",
];

const Page = forwardRef<HTMLDivElement, { src: string }>(({ src }, ref) => {
  return (
    <div ref={ref} className="h-full w-full bg-[#0f1724]">
      <img
        src={src}
        alt="page"
        loading="lazy"
        className="pointer-events-none h-full w-full select-none object-cover"
      />
    </div>
  );
});

Page.displayName = "Page";

export default function LearnSneakPeekSection() {
  const bookRef = useRef<FlipBookRef | null>(null);

  const [currentPage, setCurrentPage] = useState(0);
  const [orientation, setOrientation] = useState<BookOrientation>("landscape");

  const totalPages = imagePages.length;

  const readablePage = useMemo(
    () => Math.min(currentPage + 1, totalPages),
    [currentPage, totalPages]
  );

  const onFlip = (e: { data: number }) => {
    setCurrentPage(e.data ?? 0);
  };

  const onOrientationChange = (e: { data: BookOrientation }) => {
    setOrientation(e.data ?? "landscape");
  };

  const flipPrev = () => {
    bookRef.current?.pageFlip().flipPrev();
  };

  const flipNext = () => {
    bookRef.current?.pageFlip().flipNext();
  };

  return (
    <section id="sneak-peek" className="scroll-mt-24">
      <LearnSectionLabel>Take a Sneak Peek</LearnSectionLabel>

      <h2 className="mb-5 text-xl font-bold tracking-tight text-slate-100 sm:text-2xl">
        Inside the learning track
      </h2>

      <div className="rounded-2xl border border-slate-700 bg-[#0f2030] p-3 sm:p-5">
        <div className="mx-auto w-full max-w-[900px]">
          <HTMLFlipBook
            ref={bookRef}
            style={{}}
            startPage={0}
            width={400}
            height={520}
            size="stretch"
            minWidth={260}
            maxWidth={520}
            minHeight={320}
            maxHeight={650}
            startZIndex={0}
            drawShadow={false}
            flippingTime={500}
            usePortrait
            autoSize
            maxShadowOpacity={1}
            showCover={false}
            mobileScrollSupport
            clickEventForward
            useMouseEvents
            swipeDistance={30}
            showPageCorners
            disableFlipByClick={false}
            className="mx-auto"
            onFlip={onFlip}
            onChangeOrientation={onOrientationChange}
          >
            {imagePages.map((src, i) => (
              <Page key={i} src={src} />
            ))}
          </HTMLFlipBook>
        </div>

        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs font-medium text-slate-300">
            [{readablePage} of {totalPages}] | {orientation}
          </p>

          <div className="flex items-center gap-2">
            <button
              onClick={flipPrev}
              className="rounded-md border border-slate-600 px-3 py-1.5 text-xs font-semibold text-slate-100 hover:border-emerald-400 hover:text-emerald-200"
            >
              Prev
            </button>

            <button
              onClick={flipNext}
              className="rounded-md border border-slate-600 px-3 py-1.5 text-xs font-semibold text-slate-100 hover:border-emerald-400 hover:text-emerald-200"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
