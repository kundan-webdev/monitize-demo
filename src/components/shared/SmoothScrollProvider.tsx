"use client";

import type { ReactNode } from "react";
import { useSmoothScrollAnchors } from "@/features/marketing/hooks/useSmoothScrollAnchors";

type SmoothScrollProviderProps = Readonly<{
  children: ReactNode;
}>;

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  useSmoothScrollAnchors();

  return <>{children}</>;
}
