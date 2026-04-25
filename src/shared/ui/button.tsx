"use client";

import { cn } from "@/shared/lib/utils";

interface ButtonProps {
  label?: string;
  icon?: React.ReactNode;
  isDisabled?: boolean;
  width?: string;
  height?: string;
  onClick?: () => void;
}

export const Button = ({
  label,
  icon,
  isDisabled = false,
  width = "w-[335px]",
  height = "h-14",
  onClick,
}: ButtonProps): React.ReactElement => (
  <button
    type="button"
    className={cn(
      "subhead6 flex items-center justify-center gap-[7px] rounded-2xl bg-gray-700 capitalize text-gray-0 disabled:bg-gray-100 disabled:text-gray-300",
      width,
      height,
    )}
    disabled={isDisabled}
    onClick={onClick}
  >
    {icon}
    {label}
  </button>
);
