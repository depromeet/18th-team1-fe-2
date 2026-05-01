"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const TOTAL_STEPS = 3;

interface UseEmotionStepReturn {
  currentStep: number;
  totalSteps: number;
  selectedSituationIds: string[];
  selectedSentenceTypeId: string | null;
  isLoading: boolean;
  isNextDisabled: boolean;
  handleBack: () => void;
  handleNext: () => void;
  handleSituationChange: (ids: string[]) => void;
  handleSentenceTypeChange: (ids: string[]) => void;
}

export const useEmotionStep = (): UseEmotionStepReturn => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const rawStep = Number(searchParams.get("step"));
  const currentStep = Number.isNaN(rawStep) || rawStep < 1 || rawStep > TOTAL_STEPS ? 1 : rawStep;

  const [selectedSituationIds, setSelectedSituationIds] = useState<string[]>([]);
  const [selectedSentenceTypeId, setSelectedSentenceTypeId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const isNextDisabled =
    (currentStep === 2 && selectedSituationIds.length === 0) ||
    (currentStep === 3 && selectedSentenceTypeId === null);

  const handleBack = (): void => {
    if (currentStep === 1) router.back();
    else router.push(`/diary/emotion?step=${currentStep - 1}`);
  };

  const handleNext = (): void => {
    if (currentStep < TOTAL_STEPS) {
      router.push(`/diary/emotion?step=${currentStep + 1}`);
      return;
    }
    setIsLoading(true);
    // TODO: API 호출 후 router.push("/diary/sentence")
  };

  const handleSituationChange = (ids: string[]): void => {
    setSelectedSituationIds(ids);
  };

  const handleSentenceTypeChange = (ids: string[]): void => {
    setSelectedSentenceTypeId(ids[0] ?? null);
  };

  return {
    currentStep,
    totalSteps: TOTAL_STEPS,
    selectedSituationIds,
    selectedSentenceTypeId,
    isLoading,
    isNextDisabled,
    handleBack,
    handleNext,
    handleSituationChange,
    handleSentenceTypeChange,
  };
};
