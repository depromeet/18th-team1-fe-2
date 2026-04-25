import { cn } from "@/shared/lib/utils";

const DAY_NAMES = ["일", "월", "화", "수", "목", "금", "토"] as const;

interface HomeHeaderProps {
  isWritten?: boolean;
  className?: string;
}

export const HomeHeader = ({
  isWritten = false,
  className,
}: HomeHeaderProps): React.ReactElement => {
  const today = new Date();
  const day = today.getDate();
  const dayName = DAY_NAMES[today.getDay()];

  return (
    <header className={cn("flex shrink-0 items-center justify-between px-5 py-3", className)}>
      <div className="caption1 rounded-xl bg-gray-100 px-3 py-2 text-gray-400">
        책문장 일기 로고
      </div>
      <span className={cn("body1", isWritten ? "text-[#34c759]" : "text-gray-300")}>
        {day} · {dayName}요일
      </span>
    </header>
  );
};
