"use client";

import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

type DiaryEmotionFormState = {
  selectedSituationIds: string[];
  situationDescription: string;
  selectedSentenceTypeId: string | null;
  setSelectedSituationIds: (ids: string[]) => void;
  setSituationDescription: (text: string) => void;
  setSelectedSentenceTypeId: (id: string | null) => void;
  reset: () => void;
};

const INITIAL_STATE = {
  selectedSituationIds: [] as string[],
  situationDescription: "",
  selectedSentenceTypeId: null,
};

export const useDiaryEmotionStore = create<DiaryEmotionFormState>()(
  devtools(
    persist(
      (set) => ({
        ...INITIAL_STATE,
        setSelectedSituationIds: (ids: string[]): void => {
          set({ selectedSituationIds: ids }, false, "setSelectedSituationIds");
        },
        setSituationDescription: (text: string): void => {
          set({ situationDescription: text }, false, "setSituationDescription");
        },
        setSelectedSentenceTypeId: (id: string | null): void => {
          set({ selectedSentenceTypeId: id }, false, "setSelectedSentenceTypeId");
        },
        reset: (): void => {
          set(INITIAL_STATE, false, "reset");
        },
      }),
      {
        name: "diary-emotion-form",
        storage: createJSONStorage(() => sessionStorage),
      },
    ),
    { name: "DiaryEmotionStore" },
  ),
);
