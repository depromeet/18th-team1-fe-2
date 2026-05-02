import { type RefObject, useEffect } from "react";

export const useClickOutside = <T extends HTMLElement>(
  ref: RefObject<T | null>,
  onClickOutside: () => void,
  isEnabled = true,
): void => {
  useEffect(() => {
    if (!isEnabled) return;

    const handleClickOutside = (e: MouseEvent): void => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClickOutside();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return (): void => document.removeEventListener("mousedown", handleClickOutside);
  }, [ref, onClickOutside, isEnabled]);
};
