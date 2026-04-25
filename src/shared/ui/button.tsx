"use client";

interface ButtonProps {
  label?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

export const Button = ({
  label,
  icon,
  disabled = false,
  onClick,
}: ButtonProps): React.ReactElement => (
  <button
    type="button"
    className="subhead6 flex h-14 w-[335px] items-center justify-center gap-[7px] rounded-2xl capitalize bg-gray-700 text-gray-0 disabled:bg-gray-100 disabled:text-gray-300"
    disabled={disabled}
    onClick={onClick}
  >
    {icon}
    {label}
  </button>
);
