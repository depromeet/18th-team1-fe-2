"use client";

import { useRouter } from "next/navigation";

import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";

interface DiaryEmptyStateProps {
  className?: string;
}

export const DiaryEmptyState = ({ className }: DiaryEmptyStateProps): React.ReactElement => {
  const router = useRouter();
  const handleWrite = (): void => {
    router.push("/diary/emotion");
  };

  return (
    <section className={cn("shrink-0 px-6.25 pb-7 pt-13.75", className)}>
      <div className="flex flex-col gap-0.5">
        <p className="title1 text-foreground">오늘,</p>
        <p className="title1">
          <span className="text-gray-200">당신의 </span>
          <span className="text-foreground">문장</span>
          <span className="text-gray-200">은</span>
        </p>
        <p className="title1 text-gray-200">무엇일까요?</p>
      </div>
      <hr className="mb-3.75 mt-7 border-border" />
      <Button className="h-14 w-full rounded-xl subhead5" onClick={handleWrite}>
        + 오늘의 일기 작성하기
      </Button>
    </section>
  );
};
