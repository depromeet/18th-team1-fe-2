import { useEffect, useRef } from "react";

import { MOCK_SITUATIONS } from "@/mock";

import { TagChip } from "./TagChip";

interface SituationDescriptionStepProps {
  selectedSituationIds: string[];
  description: string;
  onDescriptionChange: (text: string) => void;
}

export const SituationDescriptionStep = ({
  selectedSituationIds,
  description,
  onDescriptionChange,
}: SituationDescriptionStepProps): React.ReactElement => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const selectedChips = MOCK_SITUATIONS.filter((s) => selectedSituationIds.includes(s.id));

  useEffect(() => {
    textareaRef.current?.focus();
  }, []);

  return (
    <div className="flex flex-col pt-5.25">
      <div className="flex flex-wrap gap-x-2.5 gap-y-3.5">
        {selectedChips.map((chip) => (
          <TagChip key={chip.id} label={chip.label} isSelected />
        ))}
      </div>
      <textarea
        ref={textareaRef}
        className="head1 mt-14 w-full resize-none bg-transparent text-foreground outline-none placeholder:text-[rgba(9,9,9,0.2)]"
        placeholder={"왜 이런 감정을\n느끼셨나요?"}
        rows={5}
        value={description}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>): void =>
          onDescriptionChange(e.target.value)
        }
      />
    </div>
  );
};
