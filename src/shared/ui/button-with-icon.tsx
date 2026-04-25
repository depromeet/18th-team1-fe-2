"use client";

import { IcShare } from "@/shared/ui/icons";

interface ButtonWithIconProps {
  primaryLabel?: string;
  onPrimaryClick?: () => void;
  onShareClick?: () => void;
}

export const ButtonWithIcon = ({
  primaryLabel,
  onPrimaryClick,
  onShareClick,
}: ButtonWithIconProps): React.ReactElement => (
  <div className="flex w-[335px] items-center gap-[7px]">
    <button
      type="button"
      className="subhead6 flex h-14 flex-1 items-center justify-center rounded-2xl bg-gray-700 capitalize text-gray-0"
      onClick={onPrimaryClick}
    >
      {primaryLabel}
    </button>
    <button
      type="button"
      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gray-400"
      onClick={onShareClick}
      aria-label="공유"
    >
      <IcShare size={24} className="text-gray-0" />
    </button>
  </div>
);
