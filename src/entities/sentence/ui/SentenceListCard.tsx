import { cn } from "@/shared/lib/utils";

import type { RecommendedSentence } from "../model/sentence.types";

interface SentenceListCardProps {
  sentence: RecommendedSentence;
  isSelected: boolean;
  onClick: () => void;
}

export const SentenceListCard = ({
  sentence,
  isSelected,
  onClick,
}: SentenceListCardProps): React.ReactElement => (
  <button
    type="button"
    onClick={onClick}
    className={cn(
      "flex w-full flex-col items-start rounded-xl bg-white p-5 text-left border",
      isSelected ? "border-gray-700" : "border-transparent",
    )}
  >
    <div className="flex w-full flex-col gap-[19px]">
      <div className="flex flex-col">
        <p className="subhead6 text-gray-600">{sentence.bookTitle}</p>
        <p className="caption2 text-gray-400">{sentence.bookAuthor}</p>
      </div>
      <p className="title2 text-gray-700">{sentence.quote}</p>
    </div>
  </button>
);
