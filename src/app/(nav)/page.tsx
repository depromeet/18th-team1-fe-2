import { MOCK_DIARIES, MOCK_TODAY_DIARY } from "@/mock";
import { DiaryListSection, HomeHeader, TodayDiaryCard, TodayEmptyState } from "@/widgets/home";

const HomePage = (): React.ReactElement => {
  const hasTodayDiary = false; // TODO: API 연동 후 실제 데이터 + 로직으로 교체

  if (hasTodayDiary) {
    return (
      <div className="flex flex-1 flex-col overflow-y-auto bg-gray-0 [&::-webkit-scrollbar]:hidden [scrollbar-width:none]">
        <HomeHeader isWritten className="sticky top-0 z-10 bg-gray-0" />
        <TodayDiaryCard {...MOCK_TODAY_DIARY} />
        <DiaryListSection diaries={MOCK_DIARIES} />
      </div>
    );
  }

  return (
    <div className="flex flex-1 flex-col overflow-hidden bg-gray-0">
      <HomeHeader />
      <TodayEmptyState />
      <DiaryListSection diaries={MOCK_DIARIES} className="min-h-0 flex-1 overflow-y-auto" />
    </div>
  );
};

export default HomePage;
