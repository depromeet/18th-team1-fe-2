"use client";

import { Button } from "@/shared/ui/button";
import { DoubleButton } from "@/shared/ui/double-button";
import { Header } from "@/widgets/header";

import { useEmotionStep } from "../model/useEmotionStep";
import { LoadingView } from "./LoadingView";
import { SentenceTypeStep } from "./SentenceTypeStep";
import { SituationDescriptionStep } from "./SituationDescriptionStep";
import { SituationStep } from "./SituationStep";
import { StepProgressBar } from "./StepProgressBar";
import { TemperatureStep } from "./TemperatureStep";

export const EmotionStepView = (): React.ReactElement => {
  const {
    currentStep,
    totalSteps,
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
  } = useEmotionStep();

  if (isLoading) return <LoadingView />;

  return (
    <div className="flex h-full flex-col gap-1 bg-muted">
      <Header onBack={handleBack} />
      <StepProgressBar currentStep={currentStep} totalSteps={totalSteps} />
      <div className="flex-1 px-5">
        {currentStep === 1 && <TemperatureStep />}
        {currentStep === 2 && (
          <SituationStep
            selectedIds={selectedSituationIds}
            onSelectionChange={handleSituationChange}
          />
        )}
        {currentStep === 3 && (
          <SituationDescriptionStep
            selectedSituationIds={selectedSituationIds}
            description={situationDescription}
            onDescriptionChange={handleSituationDescriptionChange}
          />
        )}
        {currentStep === 4 && (
          <SentenceTypeStep
            selectedId={selectedSentenceTypeId}
            onSelectionChange={handleSentenceTypeChange}
          />
        )}
      </div>
      <div className="px-5 pb-8 pt-4">
        {currentStep === 3 ? (
          <DoubleButton
            secondaryLabel="건너뛰기"
            primaryLabel="다음"
            isPrimaryDisabled={isNextDisabled}
            onSecondaryClick={handleSkip}
            onPrimaryClick={handleNext}
          />
        ) : (
          <Button
            label={currentStep === totalSteps ? "오늘의 문장 추천 받기" : "다음"}
            isDisabled={isNextDisabled}
            onClick={handleNext}
          />
        )}
      </div>
    </div>
  );
};
