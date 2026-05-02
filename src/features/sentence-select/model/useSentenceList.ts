"use client";

import { useState } from "react";

import type { RecommendedSentence } from "@/entities/sentence";

const BATCH_SIZE = 3;
const MAX_COUNT = 9;

interface UseSentenceListReturn {
  visibleSentences: RecommendedSentence[];
  selectedId: string;
  canLoadMore: boolean;
  handleSelect: (id: string) => void;
  handleLoadMore: () => void;
}

export const useSentenceList = (
  initialSentenceId: string,
  allSentences: RecommendedSentence[],
): UseSentenceListReturn => {
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);
  const [selectedId, setSelectedId] = useState(initialSentenceId);

  const visibleSentences = allSentences.slice(0, visibleCount);
  const canLoadMore = visibleCount < MAX_COUNT && visibleCount < allSentences.length;

  const handleSelect = (id: string): void => {
    setSelectedId(id);
  };

  const handleLoadMore = (): void => {
    setVisibleCount((prev) => Math.min(prev + BATCH_SIZE, MAX_COUNT));
  };

  return { visibleSentences, selectedId, canLoadMore, handleSelect, handleLoadMore };
};
