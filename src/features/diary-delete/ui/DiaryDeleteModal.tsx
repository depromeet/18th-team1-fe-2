"use client";

import type { KeyboardEvent, MouseEvent, ReactElement } from "react";

interface DiaryDeleteModalProps {
  isOpen: boolean;
  onConfirm?: () => void;
  onCancel?: () => void;
}

export const DiaryDeleteModal = ({
  isOpen,
  onConfirm,
  onCancel,
}: DiaryDeleteModalProps): ReactElement | null => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="delete-modal-title"
      className="flex w-71 flex-col gap-7 rounded-[1.25rem] bg-background px-2.5 pb-2.5 pt-7"
      onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}
      onKeyDown={(e: KeyboardEvent<HTMLDivElement>) => e.stopPropagation()}
    >
      <div className="flex w-full flex-col items-center gap-1.5">
        <h2 id="delete-modal-title" className="subhead1 text-center text-gray-700">
          일기 삭제
        </h2>
        <p className="body1 text-center text-gray-600">한번 삭제한 일기는 복원할 수 없어요.</p>
      </div>
      <div className="flex w-full gap-2.5">
        <button
          type="button"
          className="subhead6 flex h-[2.875rem] flex-1 items-center justify-center rounded-[0.625rem] bg-gray-100 text-gray-300 cursor-pointer"
          onClick={onCancel}
        >
          취소
        </button>
        <button
          type="button"
          className="subhead6 flex h-[2.875rem] flex-1 items-center justify-center rounded-[0.625rem] bg-gray-700 text-gray-0 cursor-pointer"
          onClick={onConfirm}
        >
          삭제
        </button>
      </div>
    </div>
  );
};
