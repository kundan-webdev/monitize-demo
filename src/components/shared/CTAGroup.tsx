"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";

export type CTAGroupProps = {
  primaryHref?: string;
  secondaryHref?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  className?: string;
};

export function CTAGroup({
  primaryHref = "/register",
  secondaryHref = "/methodology",
  primaryLabel = "Begin Learning Track",
  secondaryLabel = "Explore Frameworks",
  className
}: CTAGroupProps) {
  const router = useRouter();

  return (
    <div
      className={[
        "flex flex-col gap-3 sm:flex-row sm:items-center",
        className
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <Button
        variant="primary"
        onClick={() => router.push(primaryHref)}
        className="w-full sm:w-auto"
      >
        {primaryLabel}
      </Button>

      <Button
        variant="ghost"
        onClick={() => router.push(secondaryHref)}
        className="w-full sm:w-auto"
      >
        {secondaryLabel}
      </Button>
    </div>
  );
}
