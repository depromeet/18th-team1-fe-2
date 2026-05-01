"use client";

import type { ReactElement } from "react";

import { cn } from "@/shared/lib/utils";

interface DoubleButtonProps {
  primaryLabel?: string;
  secondaryLabel?: string;
  className?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export const DoubleButton = ({
  primaryLabel,
  secondaryLabel,
  className,
  onPrimaryClick,
  onSecondaryClick,
}: DoubleButtonProps): ReactElement => (
  <div className={cn("flex w-full h-14 items-center gap-2", className)}>
    <button
      type="button"
      className="subhead6 flex h-full flex-1 items-center justify-center rounded-2xl bg-gray-200 text-gray-500"
      onClick={onSecondaryClick}
    >
      {secondaryLabel}
    </button>
    <button
      type="button"
      className="subhead6 flex h-full flex-1 items-center justify-center rounded-2xl bg-gray-700 text-gray-0"
      onClick={onPrimaryClick}
    >
      {primaryLabel}
    </button>
  </div>
);
