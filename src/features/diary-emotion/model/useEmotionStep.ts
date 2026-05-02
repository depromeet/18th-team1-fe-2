"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { useDiaryEmotionStore } from "./useDiaryEmotionStore";

const TOTAL_STEPS = 4;

interface UseEmotionStepReturn {
  currentStep: number;
  totalSteps: number;
  selectedSituationIds: string[];
  situationDescription: string;
  selectedSentenceTypeId: string | null;
  isLoading: boolean;
  isNextDisabled: boolean;
  handleBack: () => void;
  handleNext: () => void;
  handleSkip: () => void;
  handleSituationChange: (ids: string[]) => void;
  handleSituationDescriptionChange: (text: string) => void;
  handleSentenceTypeChange: (ids: string[]) => void;
}

export const useEmotionStep = (): UseEmotionStepReturn => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const rawStep = Number(searchParams.get("step"));
  const currentStep = Number.isNaN(rawStep) || rawStep < 1 || rawStep > TOTAL_STEPS ? 1 : rawStep;

  const {
    selectedSituationIds,
    situationDescription,
    selectedSentenceTypeId,
    setSelectedSituationIds,
    setSituationDescription,
    setSelectedSentenceTypeId,
    reset,
  } = useDiaryEmotionStore();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    return () => {
      reset();
    };
  }, [reset]);

  const isNextDisabled =
    (currentStep === 2 && selectedSituationIds.length === 0) ||
    (currentStep === 3 && situationDescription.trim() === "") ||
    (currentStep === 4 && selectedSentenceTypeId === null);

  const handleBack = (): void => {
    if (currentStep === 1) {
      reset();
    }
    router.back();
  };

  const handleNext = (): void => {
    if (currentStep < TOTAL_STEPS) {
      router.push(`/diary/emotion?step=${currentStep + 1}`);
      return;
    }
    setIsLoading(true);
    // TODO: API 호출 { selectedSituationIds, situationDescription, selectedSentenceTypeId }
    // .then(() => { reset(); router.push("/diary/sentence/{id}"); })
  };

  const handleSkip = (): void => {
    router.push(`/diary/emotion?step=${TOTAL_STEPS}`);
  };

  const handleSituationChange = (ids: string[]): void => setSelectedSituationIds(ids);

  const handleSituationDescriptionChange = (text: string): void => setSituationDescription(text);

  const handleSentenceTypeChange = (ids: string[]): void =>
    setSelectedSentenceTypeId(ids[0] ?? null);

  return {
    currentStep,
    totalSteps: TOTAL_STEPS,
    selectedSituationIds,
    situationDescription,
    selectedSentenceTypeId,
    isLoading,
    isNextDisabled,
    handleBack,
    handleNext,
    handleSkip,
    handleSituationChange,
    handleSituationDescriptionChange,
    handleSentenceTypeChange,
  };
};
