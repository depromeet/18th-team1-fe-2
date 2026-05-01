import { MOCK_SENTENCE_TYPES } from "@/mock";

import { TagList } from "./TagList";

interface SentenceTypeStepProps {
  selectedId: string | null;
  onSelectionChange: (ids: string[]) => void;
}

export const SentenceTypeStep = ({
  selectedId,
  onSelectionChange,
}: SentenceTypeStepProps): React.ReactElement => (
  <div className="flex flex-col gap-4">
    <div className="h-14 w-full rounded-xl bg-gray-100" />
    <p className="body1 pt-2.5 text-foreground">오늘 어떤 문장이 필요하세요?</p>
    <TagList
      items={MOCK_SENTENCE_TYPES}
      selectedIds={selectedId ? [selectedId] : []}
      onSelectionChange={onSelectionChange}
    />
  </div>
);
