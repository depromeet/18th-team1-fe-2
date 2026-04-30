"use client";

import { Header } from "@/widgets/header";

import { useEmotionStep } from "../model/useEmotionStep";
import { LoadingView } from "./LoadingView";
import { SentenceTypeStep } from "./SentenceTypeStep";
import { SituationStep } from "./SituationStep";
import { StepProgressBar } from "./StepProgressBar";
import { TemperatureStep } from "./TemperatureStep";

export const EmotionStepView = (): React.ReactElement => {
  const {
    currentStep,
    totalSteps,
    isLoading,
    isNextDisabled,
    handleBack,
    handleNext,
    handleSituationChange,
    handleSentenceTypeChange,
  } = useEmotionStep();

  if (isLoading) return <LoadingView />;

  return (
    <div className="flex h-full flex-col gap-1 bg-muted">
      <Header onBack={handleBack} />
      <StepProgressBar currentStep={currentStep} totalSteps={totalSteps} />
      <div className="flex-1 px-5 pt-2">
        {currentStep === 1 && <TemperatureStep />}
        {currentStep === 2 && <SituationStep onSelectionChange={handleSituationChange} />}
        {currentStep === 3 && <SentenceTypeStep onSelectionChange={handleSentenceTypeChange} />}
      </div>
      <div className="px-5 pb-8 pt-4">
        <button
          type="button"
          onClick={handleNext}
          disabled={isNextDisabled}
          className={`subhead6 h-14 w-full rounded-2xl ${
            isNextDisabled
              ? "cursor-not-allowed bg-gray-100 text-gray-300"
              : "bg-gray-700 text-gray-0"
          }`}
        >
          {currentStep === totalSteps ? "오늘의 문장 추천 받기" : "다음"}
        </button>
      </div>
    </div>
  );
};
