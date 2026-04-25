"use client";

import { MoreHorizontal } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";
import { IcEdit, IcReport, IcShare, IcTrash } from "@/shared/ui/icons";

type OptionMenuVariant = "default" | "report";

interface OptionMenuProps {
  variant?: OptionMenuVariant;
  onEdit?: () => void;
  onShare?: () => void;
  onDelete?: () => void;
  onReport?: () => void;
}

export const OptionMenu = ({
  variant = "default",
  onEdit,
  onShare,
  onDelete,
  onReport,
}: OptionMenuProps): React.ReactElement => {
  const isDefault = variant === "default";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className="flex items-center justify-center text-gray-700"
          aria-label="더보기"
        >
          <MoreHorizontal className="size-6" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="flex min-w-[190px] flex-col gap-5 rounded-[20px] border-0 bg-background p-5 shadow-[0px_0px_30px_0px_rgba(0,0,0,0.1)]"
      >
        {isDefault ? (
          <>
            <DropdownMenuItem
              className="gap-3.5 p-0 text-gray-700 focus:bg-transparent focus:text-gray-700"
              onClick={onEdit}
            >
              <IcEdit size={24} className="size-6 shrink-0 -translate-y-[0.5px] text-gray-700" />
              <span className="subhead4">수정하기</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              className="gap-3.5 p-0 text-gray-700 focus:bg-transparent focus:text-gray-700"
              onClick={onShare}
            >
              <IcShare size={24} className="size-6 shrink-0 -translate-y-[0.5px] text-gray-700" />
              <span className="subhead4">공유하기</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              variant="destructive"
              className="gap-3.5 p-0 focus:bg-transparent"
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
              className="gap-3.5 p-0 text-gray-700 focus:bg-transparent focus:text-gray-700"
              onClick={onReport}
            >
              <IcReport size={24} className="size-6 shrink-0 -translate-y-[0.5px] text-gray-700" />
              <span className="subhead4">신고하기</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              className="gap-3.5 p-0 text-gray-700 focus:bg-transparent focus:text-gray-700"
              onClick={onShare}
            >
              <IcShare size={24} className="size-6 shrink-0 -translate-y-[0.5px] text-gray-700" />
              <span className="subhead4">공유하기</span>
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
