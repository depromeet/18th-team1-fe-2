import type { Diary } from "@/entities/diary";
import { cn } from "@/shared/lib/utils";

import { DiaryListItem } from "./DiaryListItem";

interface DiaryListSectionProps {
  diaries: Diary[];
  className?: string;
}

export const DiaryListSection = ({
  diaries,
  className,
}: DiaryListSectionProps): React.ReactElement => {
  const month = new Date().getMonth() + 1;

  return (
    <section
      className={cn(
        "flex flex-col bg-gray-50 pb-24 [&::-webkit-scrollbar]:hidden [scrollbar-width:none]",
        className,
      )}
    >
      <div className="px-6.25 pb-3 pt-8">
        <span className="body2 text-gray-300">{month}월 · 지난 일기</span>
      </div>
      {diaries.length === 0 ? (
        <div className="flex flex-1 flex-col items-center justify-center gap-3.5">
          <div className="size-31.5 rounded-[4px] bg-gray-100" />
          <p className="body1 text-gray-500">아직 작성된 일기가 없어요</p>
        </div>
      ) : (
        <div className="flex flex-col">
          {diaries.map((diary) => (
            <DiaryListItem key={diary.day} {...diary} />
          ))}
        </div>
      )}
    </section>
  );
};
