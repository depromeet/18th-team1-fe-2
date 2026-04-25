"use client";

interface ButtonDoubleProps {
  primaryLabel?: string;
  secondaryLabel?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export const ButtonDouble = ({
  primaryLabel,
  secondaryLabel,
  onPrimaryClick,
  onSecondaryClick,
}: ButtonDoubleProps): React.ReactElement => (
  <div className="flex w-[335px] items-center gap-2">
    <button
      type="button"
      className="subhead6 flex h-14 flex-1 items-center justify-center rounded-2xl bg-gray-200 capitalize text-gray-500"
      onClick={onSecondaryClick}
    >
      {secondaryLabel}
    </button>
    <button
      type="button"
      className="subhead6 flex h-14 flex-1 items-center justify-center rounded-2xl bg-gray-700 capitalize text-gray-0"
      onClick={onPrimaryClick}
    >
      {primaryLabel}
    </button>
  </div>
);
