"use client";

import type { ReactNode } from "react";
import { useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";
import { IcEdit, IcOption, IcReport, IcShare, IcTrash } from "@/shared/ui/icons";

type OptionMenuVariant = "default" | "report";

interface OptionMenuProps {
  variant?: OptionMenuVariant;
  trigger?: ReactNode;
  onEdit?: () => void;
  onShare?: () => void;
  onDelete?: () => void;
  onReport?: () => void;
}

export const OptionMenu = ({
  variant = "default",
  trigger,
  onEdit,
  onShare,
  onDelete,
  onReport,
}: OptionMenuProps): React.ReactElement => {
  const isDefault = variant === "default";
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && <div className="fixed inset-0 z-40 bg-gray-700/50" />}
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <button
            type="button"
            className="flex items-center justify-center text-gray-700 outline-none"
            aria-label="더보기"
          >
            {trigger ?? <IcOption size={24} className="size-6" />}
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          sideOffset={22}
          className="flex min-w-[190px] flex-col gap-5 rounded-[20px] border-0 bg-background p-5 shadow-[0px_0px_30px_0px_rgba(0,0,0,0.1)]"
        >
          {isDefault ? (
            <>
              <DropdownMenuItem
                className="cursor-pointer gap-3.5 p-0 text-gray-700 focus:bg-transparent focus:text-gray-700"
                onClick={onEdit}
              >
                <IcEdit size={24} className="size-6 shrink-0 -translate-y-[0.5px] text-gray-700" />
                <span className="subhead4">수정하기</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="cursor-pointer gap-3.5 p-0 text-gray-700 focus:bg-transparent focus:text-gray-700"
                onClick={onShare}
              >
                <IcShare size={24} className="size-6 shrink-0 -translate-y-[0.5px] text-gray-700" />
                <span className="subhead4">공유하기</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="cursor-pointer gap-3.5 p-0 text-destructive focus:bg-transparent focus:text-destructive"
                onClick={onDelete}
              >
                <IcTrash
                  size={24}
                  className="size-6 shrink-0 -translate-y-[0.5px] text-destructive"
                />
                <span className="subhead4">삭제</span>
              </DropdownMenuItem>
            </>
          ) : (
            <>
              <DropdownMenuItem
                className="cursor-pointer gap-3.5 p-0 text-gray-700 focus:bg-transparent focus:text-gray-700"
                onClick={onReport}
              >
                <IcReport
                  size={24}
                  className="size-6 shrink-0 -translate-y-[0.5px] text-gray-700"
                />
                <span className="subhead4">신고하기</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="cursor-pointer gap-3.5 p-0 text-gray-700 focus:bg-transparent focus:text-gray-700"
                onClick={onShare}
              >
                <IcShare size={24} className="size-6 shrink-0 -translate-y-[0.5px] text-gray-700" />
                <span className="subhead4">공유하기</span>
              </DropdownMenuItem>
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
