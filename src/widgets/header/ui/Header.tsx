"use client";

import { cn } from "@/shared/lib/utils";
import { IcBack, IcEdit, IcReport, IcSetting, IcShare, IcTrash } from "@/shared/ui/icons";
import { OptionMenu } from "@/shared/ui/option-menu";

import { CheckButton } from "./CheckButton";

type HeaderVariant = "default" | "detail" | "write";

interface HeaderProps {
  variant?: HeaderVariant;
  title: string;
  onBack?: () => void;
  // default variant
  onShare?: () => void;
  onSetting?: () => void;
  // detail variant
  optionMenuVariant?: "default" | "report";
  onEdit?: () => void;
  onDelete?: () => void;
  onReport?: () => void;
  // write variant
  isChecked?: boolean;
  onCheck?: () => void;
  className?: string;
}

export const Header = ({
  variant = "default",
  title,
  onBack,
  onShare,
  onSetting,
  optionMenuVariant = "default",
  onEdit,
  onDelete,
  onReport,
  isChecked = false,
  onCheck,
  className,
}: HeaderProps): React.ReactElement => {
  return (
    <header className={cn("relative flex h-15 w-full items-center justify-between", className)}>
      <button type="button" onClick={onBack} className="text-gray-700" aria-label="뒤로가기">
        <IcBack size={24} />
      </button>

      <span className="subhead2 absolute left-1/2 -translate-x-1/2 cursor-default select-none text-gray-700">
        {title}
      </span>

      {variant === "default" && (
        <div className="flex items-center gap-3.5">
          <button type="button" onClick={onShare} className="text-gray-700" aria-label="공유하기">
            <IcShare size={24} />
          </button>
          <button type="button" onClick={onSetting} className="text-gray-700" aria-label="설정">
            <IcSetting size={24} />
          </button>
        </div>
      )}

      {variant === "detail" && (
        <OptionMenu
          items={
            optionMenuVariant === "default"
              ? [
                  { icon: <IcEdit />, label: "수정하기", onClick: onEdit },
                  { icon: <IcShare />, label: "공유하기", onClick: onShare },
                  { icon: <IcTrash />, label: "삭제", onClick: onDelete, isDestructive: true },
                ]
              : [
                  { icon: <IcReport />, label: "신고하기", onClick: onReport },
                  { icon: <IcShare />, label: "공유하기", onClick: onShare },
                ]
          }
        />
      )}

      {variant === "write" && <CheckButton isChecked={isChecked} onClick={onCheck ?? (() => {})} />}
    </header>
  );
};
