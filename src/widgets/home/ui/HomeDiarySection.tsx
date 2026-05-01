import type { Diary, TodayDiary } from "@/entities/diary";
import { DiaryEmptyState, DiaryListSection, TodayDiaryCard } from "@/entities/diary";

interface HomeDiarySectionProps {
  hasTodayDiary: boolean;
  todayDiary?: TodayDiary;
  diaries: Diary[];
}

export const HomeDiarySection = ({
  hasTodayDiary,
  todayDiary,
  diaries,
}: HomeDiarySectionProps): React.ReactElement => {
  if (hasTodayDiary && todayDiary) {
    return (
      <>
        <TodayDiaryCard {...todayDiary} />
        <DiaryListSection diaries={diaries} />
      </>
    );
  }

  return (
    <>
      <DiaryEmptyState />
      <DiaryListSection diaries={diaries} className="min-h-0 flex-1 overflow-y-auto" />
    </>
  );
};
