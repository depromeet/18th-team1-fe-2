import { MOCK_SITUATIONS } from "@/mock";

import { TagList } from "./TagList";

interface SituationStepProps {
  selectedIds: string[];
  onSelectionChange: (ids: string[]) => void;
}

export const SituationStep = ({
  selectedIds,
  onSelectionChange,
}: SituationStepProps): React.ReactElement => (
  <div className="flex flex-col gap-4 pt-1">
    <div className="h-14 w-full rounded-xl bg-gray-100" />
    <p className="body1 pt-2.5 text-foreground">지금 어떤 상황이신가요?</p>
    <TagList
      items={MOCK_SITUATIONS}
      selectedIds={selectedIds}
      multiSelect
      onSelectionChange={onSelectionChange}
    />
  </div>
);
