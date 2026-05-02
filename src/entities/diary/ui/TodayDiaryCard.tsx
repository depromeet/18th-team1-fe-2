import type { TodayDiary } from "@/entities/diary";
import { cn } from "@/shared/lib/utils";

interface TodayDiaryCardProps extends TodayDiary {
  className?: string;
}

export const TodayDiaryCard = ({
  temperature,
  temperatureColor,
  quote,
  bookTitle,
  bookAuthor,
  note,
  className,
}: TodayDiaryCardProps): React.ReactElement => (
  <section className={cn("shrink-0 px-6.25 pb-7 pt-13.75", className)}>
    <div className="flex flex-col gap-3">
      <p
        className="text-2xl font-light leading-none tracking-tight"
        style={{ color: temperatureColor }}
      >
        {temperature}°
      </p>
      <p className="title1 text-foreground">{quote}</p>
      <p className="caption2 text-gray-400">
        &apos;{bookTitle}&apos;, {bookAuthor}
      </p>
    </div>
    <hr className="mb-3.75 mt-7 border-border" />
    <p className="body3 line-clamp-3 text-gray-600">{note}</p>
  </section>
);
