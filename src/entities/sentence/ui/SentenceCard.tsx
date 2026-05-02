"use client";

import { useLongPress } from "@/shared/hooks/useLongPress";
import { IcCalendar } from "@/shared/ui/icons";

import type { RecommendedSentence } from "../model/sentence.types";

type SentenceCardProps = Omit<RecommendedSentence, "id">;

export const SentenceCard = ({
  bookTitle,
  bookAuthor,
  quote,
  date,
}: SentenceCardProps): React.ReactElement => {
  const longPressHandlers = useLongPress(() => {
    navigator.clipboard.writeText(quote);
  });

  return (
    <div className="flex flex-col gap-8 pl-5 pr-17 pt-14.25">
      <div className="flex flex-col">
        <p className="subhead6 text-gray-600">{bookTitle}</p>
        <p className="caption2 text-gray-400">{bookAuthor}</p>
      </div>
      <p className="title1 cursor-copy select-none text-gray-700" {...longPressHandlers}>
        {quote}
      </p>
      <div className="flex items-center gap-1">
        <IcCalendar size={18} className="text-gray-700" />
        <p className="body3 leading-none text-gray-700">{date}</p>
      </div>
    </div>
  );
};
