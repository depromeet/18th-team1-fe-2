"use client";

import { cn } from "@/shared/lib/utils";

interface ButtonDoubleProps {
  primaryLabel?: string;
  secondaryLabel?: string;
  width?: string;
  height?: string;
  gap?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export const ButtonDouble = ({
  primaryLabel,
  secondaryLabel,
  width = "w-[335px]",
  height = "h-14",
  gap = "gap-2",
  onPrimaryClick,
  onSecondaryClick,
}: ButtonDoubleProps): React.ReactElement => (
  <div className={cn("flex items-center", width, gap)}>
    <button
      type="button"
      className={cn(
        "subhead6 flex flex-1 items-center justify-center rounded-2xl bg-gray-200 text-gray-500",
        height,
      )}
      onClick={onSecondaryClick}
    >
      {secondaryLabel}
    </button>
    <button
      type="button"
      className={cn(
        "subhead6 flex flex-1 items-center justify-center rounded-2xl bg-gray-700 text-gray-0",
        height,
      )}
      onClick={onPrimaryClick}
    >
      {primaryLabel}
    </button>
  </div>
);
