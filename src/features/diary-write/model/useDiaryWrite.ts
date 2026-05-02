"use client";

import { useState } from "react";

export const MAX_DIARY_CHAR = 300;

interface UseDiaryWriteReturn {
  text: string;
  handleTextChange: (value: string) => void;
  handleSubmit: () => void;
}

export const useDiaryWrite = (): UseDiaryWriteReturn => {
  const [text, setText] = useState("");

  const handleTextChange = (value: string): void => {
    setText(value.slice(0, MAX_DIARY_CHAR));
  };

  const handleSubmit = (): void => {
    // TODO: API 호출
  };

  return {
    text,
    handleTextChange,
    handleSubmit,
  };
};
