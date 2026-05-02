import type { Diary } from "@/entities/diary";

export const DiaryListItem = ({
  day,
  sentence,
  temperature,
  dotColor,
}: Diary): React.ReactElement => (
  <div className="flex flex-col">
    <div className="flex w-full items-center gap-3.75 px-6.25 py-3">
      <span className="title3 w-[37.5px] shrink-0 translate-y-[1.5px] leading-none text-center text-gray-600">
        {day}
      </span>
      <span className="size-2.25 shrink-0 rounded-full" style={{ backgroundColor: dotColor }} />
      <span className="body3 flex-1 truncate text-left text-gray-500">{sentence}</span>
      <span className="body3 shrink-0 text-gray-300">{temperature}°</span>
    </div>
    <div className="mx-6.25 border-b border-border" />
  </div>
);
