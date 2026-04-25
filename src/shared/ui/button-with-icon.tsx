"use client";

import { cn } from "@/shared/lib/utils";

import { IcShare } from "@/shared/ui/icons";

interface ButtonWithIconProps {
  primaryLabel?: string;
  width?: string;
  height?: string;
  onPrimaryClick?: () => void;
  onShareClick?: () => void;
}

export const ButtonWithIcon = ({
  primaryLabel,
  width = "w-[335px]",
  height = "h-14",
  onPrimaryClick,
  onShareClick,
}: ButtonWithIconProps): React.ReactElement => (
  <div className={cn("flex items-center gap-[7px]", width)}>
    <button
      type="button"
      className={cn(
        "subhead6 flex flex-1 items-center justify-center rounded-2xl bg-gray-700 capitalize text-gray-0",
        height,
      )}
      onClick={onPrimaryClick}
    >
      {primaryLabel}
    </button>
    <button
      type="button"
      className={cn(
        "flex w-14 shrink-0 items-center justify-center rounded-2xl bg-gray-400",
        height,
      )}
      onClick={onShareClick}
      aria-label="공유"
    >
      <IcShare size={24} className="text-gray-0" />
    </button>
  </div>
);
