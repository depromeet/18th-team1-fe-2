"use client";

import { useCallback, useRef } from "react";

interface UseLongPressOptions {
  threshold?: number;
}

interface UseLongPressHandlers {
  onMouseDown: React.MouseEventHandler;
  onMouseUp: React.MouseEventHandler;
  onMouseLeave: React.MouseEventHandler;
  onTouchStart: React.TouchEventHandler;
  onTouchEnd: React.TouchEventHandler;
  onTouchMove: React.TouchEventHandler;
}

export const useLongPress = (
  callback: () => void,
  { threshold = 500 }: UseLongPressOptions = {},
): UseLongPressHandlers => {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const start = useCallback(() => {
    timerRef.current = setTimeout(callback, threshold);
  }, [callback, threshold]);

  const cancel = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  return {
    onMouseDown: start,
    onMouseUp: cancel,
    onMouseLeave: cancel,
    onTouchStart: start,
    onTouchEnd: cancel,
    onTouchMove: cancel,
  };
};
