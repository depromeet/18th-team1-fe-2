import { MOCK_DIARIES, MOCK_TODAY_DIARY } from "@/mock";
import { cn } from "@/shared/lib/utils";
import { HomeDiarySection } from "@/widgets/home";

const DAY_NAMES = ["일", "월", "화", "수", "목", "금", "토"] as const;

const HomePage = (): React.ReactElement => {
  const hasTodayDiary = false; // TODO: API 연동 후 실제 데이터 + 로직으로 교체

  const today = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Seoul" }));
  const day = today.getDate();
  const dayName = DAY_NAMES[today.getDay()];

  return (
    <div
      className={cn(
        "flex flex-1 flex-col bg-gray-0",
        hasTodayDiary
          ? "overflow-y-auto [&::-webkit-scrollbar]:hidden [scrollbar-width:none]"
          : "overflow-hidden",
      )}
    >
      <header
        className={cn(
          "flex shrink-0 items-center justify-between px-5 py-3",
          hasTodayDiary && "sticky top-0 z-10 bg-gray-0",
        )}
      >
        <div className="caption1 rounded-xl bg-gray-100 px-3 py-2 text-gray-400">
          책문장 일기 로고
        </div>
        <span className={cn("body1", hasTodayDiary ? "text-[#34c759]" : "text-gray-300")}>
          {day} · {dayName}요일
        </span>
      </header>
      <HomeDiarySection
        hasTodayDiary={hasTodayDiary}
        todayDiary={MOCK_TODAY_DIARY}
        diaries={MOCK_DIARIES}
      />
    </div>
  );
};

export default HomePage;
