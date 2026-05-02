"use client";

import type { RecommendedSentence } from "@/entities/sentence";
import { SentenceTextCard } from "@/entities/sentence";

import { useDiaryWrite } from "../model/useDiaryWrite";
import { DiaryTextInput } from "./DiaryTextInput";

interface DiaryWriteViewProps {
  sentence: RecommendedSentence;
}

export const DiaryWriteView = ({ sentence }: DiaryWriteViewProps): React.ReactElement => {
  const { text, handleTextChange } = useDiaryWrite();

  return (
    <div className="flex flex-1 flex-col px-5 pt-1.75">
      <div className="flex flex-col gap-3.75">
        <SentenceTextCard
          quote={sentence.quote}
          bookTitle={sentence.bookTitle}
          bookAuthor={sentence.bookAuthor}
        />
        <DiaryTextInput value={text} onChange={handleTextChange} />
      </div>
    </div>
  );
};
