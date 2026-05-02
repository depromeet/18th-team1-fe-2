import type { RecommendedSentence } from "../model/sentence.types";

type SentenceTextCardProps = Pick<RecommendedSentence, "quote" | "bookTitle" | "bookAuthor">;

export const SentenceTextCard = ({
  quote,
  bookTitle,
  bookAuthor,
}: SentenceTextCardProps): React.ReactElement => (
  <div className="flex flex-col gap-2 rounded-[10px] bg-white p-[14px]">
    <p className="title2 text-gray-700">{quote}</p>
    <div className="flex items-center gap-1">
      <p className="caption2 text-gray-400">'{bookTitle}',</p>
      <p className="caption2 text-gray-400">{bookAuthor}</p>
    </div>
  </div>
);
