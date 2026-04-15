"use client";

import { useEffect } from "react";
import { gsap } from "gsap";

export function useSmoothScrollAnchors() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    const LERP_FACTOR = 0.14;
    const STOP_EPSILON = 0.5;

    const getMaxScroll = () =>
      Math.max(0, document.documentElement.scrollHeight - window.innerHeight);

    const clampTarget = (value: number) => gsap.utils.clamp(0, getMaxScroll(), value);

    const state = {
      currentY: window.scrollY,
      targetY: window.scrollY,
      ticking: false
    };

    const stopTicker = () => {
      if (!state.ticking) {
        return;
      }

      gsap.ticker.remove(onTick);
      state.ticking = false;
    };

    const onTick = () => {
      state.currentY = gsap.utils.interpolate(
        state.currentY,
        state.targetY,
        LERP_FACTOR
      );

      if (Math.abs(state.targetY - state.currentY) <= STOP_EPSILON) {
        state.currentY = state.targetY;
        window.scrollTo(0, state.currentY);
        stopTicker();
        return;
      }

      window.scrollTo(0, state.currentY);
    };

    const lerpTo = (targetY: number) => {
      state.targetY = clampTarget(targetY);

      if (!state.ticking) {
        state.currentY = window.scrollY;
        state.ticking = true;
        gsap.ticker.add(onTick);
      }
    };

    const onDocumentClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const target = event.target as HTMLElement | null;
      const anchor = target?.closest<HTMLAnchorElement>('a[href^="#"]');

      if (!anchor) {
        return;
      }

      if (anchor.target && anchor.target !== "_self") {
        return;
      }

      const href = anchor.getAttribute("href");

      if (!href || href.length < 2) {
        return;
      }

      const section = document.querySelector<HTMLElement>(href);

      if (!section) {
        return;
      }

      const header = document.querySelector<HTMLElement>("[data-site-header]");
      const offsetY = header ? header.offsetHeight + 12 : 16;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;

      event.preventDefault();
      lerpTo(sectionTop - offsetY);

      window.history.pushState(null, "", href);
    };

    const onWindowScroll = () => {
      if (state.ticking) {
        return;
      }

      state.currentY = window.scrollY;
      state.targetY = window.scrollY;
    };

    document.addEventListener("click", onDocumentClick);
    window.addEventListener("scroll", onWindowScroll, { passive: true });

    return () => {
      stopTicker();
      document.removeEventListener("click", onDocumentClick);
      window.removeEventListener("scroll", onWindowScroll);
    };
  }, []);
}
