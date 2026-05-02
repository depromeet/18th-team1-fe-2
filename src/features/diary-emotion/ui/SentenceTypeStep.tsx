import { useEffect } from "react";

import { MOCK_SENTENCE_TYPES } from "@/mock";

import { useDiaryEmotionStore } from "../model/useDiaryEmotionStore";
import { TagList } from "./TagList";

interface SentenceTypeStepProps {
  onValidChange: (isNextDisabled: boolean) => void;
}

export const SentenceTypeStep = ({ onValidChange }: SentenceTypeStepProps): React.ReactElement => {
  const { selectedSentenceTypeId, setSelectedSentenceTypeId } = useDiaryEmotionStore();

  useEffect(() => {
    onValidChange(selectedSentenceTypeId === null);
  }, [selectedSentenceTypeId, onValidChange]);

  const handleSelectionChange = (ids: string[]): void => {
    setSelectedSentenceTypeId(ids[0] ?? null);
  };

  return (
    <div className="flex flex-col gap-4 pt-1">
      <div className="h-14 w-full rounded-xl bg-gray-100" />
      <p className="body1 pt-2.5 text-foreground">오늘 어떤 문장이 필요하세요?</p>
      <TagList
        items={MOCK_SENTENCE_TYPES}
        selectedIds={selectedSentenceTypeId ? [selectedSentenceTypeId] : []}
        onSelectionChange={handleSelectionChange}
      />
    </div>
  );
};
