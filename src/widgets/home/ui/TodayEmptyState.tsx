import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";

interface TodayEmptyStateProps {
  onWrite?: () => void;
  className?: string;
}

export const TodayEmptyState = ({
  onWrite,
  className,
}: TodayEmptyStateProps): React.ReactElement => (
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
    <Button label="+ 오늘의 일기 작성하기" className="rounded-xl subhead5" onClick={onWrite} />
  </section>
);
