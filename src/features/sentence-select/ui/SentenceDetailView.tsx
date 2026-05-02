"use client";

import { useRouter } from "next/navigation";

import type { RecommendedSentence } from "@/entities/sentence";
import { SentenceCard } from "@/entities/sentence";
import { Button } from "@/shared/ui/button";

interface SentenceDetailViewProps {
  sentence: RecommendedSentence;
}

export const SentenceDetailView = ({ sentence }: SentenceDetailViewProps): React.ReactElement => {
  const router = useRouter();

  const handleNext = (): void => {
    router.push(`/diary/write?sentenceId=${sentence.id}`);
  };

  const handleViewList = (): void => {
    router.push(`/diary/sentence/${sentence.id}/list`);
  };

  return (
    <div className="flex h-full flex-col">
      <div className="flex-1">
        <SentenceCard
          bookTitle={sentence.bookTitle}
          bookAuthor={sentence.bookAuthor}
          quote={sentence.quote}
          date={sentence.date}
        />
      </div>
      <section className="flex shrink-0 flex-col items-center gap-2 px-5 pb-8 pt-2">
        <Button label="다음" onClick={handleNext} />
        <button type="button" className="body3 h-14 w-full text-gray-600" onClick={handleViewList}>
          다른 문장 더보기
        </button>
      </section>
    </div>
  );
};
