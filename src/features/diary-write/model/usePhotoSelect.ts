"use client";

import { useEffect, useRef, useState } from "react";

interface UsePhotoSelectReturn {
  photoUrl: string | null;
  inputRef: React.RefObject<HTMLInputElement | null>;
  handleClick: () => void;
  handleDelete: () => void;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const usePhotoSelect = (): UsePhotoSelectReturn => {
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const photoUrlRef = useRef<string | null>(null);

  useEffect(
    (): (() => void) => (): void => {
      if (photoUrlRef.current) URL.revokeObjectURL(photoUrlRef.current);
    },
    [],
  );

  const handleClick = (): void => {
    inputRef.current?.click();
  };

  const handleDelete = (): void => {
    if (photoUrlRef.current) URL.revokeObjectURL(photoUrlRef.current);
    photoUrlRef.current = null;
    setPhotoUrl(null);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (photoUrlRef.current) URL.revokeObjectURL(photoUrlRef.current);
    const url = URL.createObjectURL(file);
    photoUrlRef.current = url;
    setPhotoUrl(url);
    e.target.value = "";
  };

  return {
    photoUrl,
    inputRef,
    handleClick,
    handleDelete,
    handleFileChange,
  };
};
