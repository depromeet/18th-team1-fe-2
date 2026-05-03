import { create } from "zustand";
import { devtools } from "zustand/middleware";

type AuthState = {
  accessToken: string | null;
  setAuth: (accessToken: string) => void;
  clearAuth: () => void;
};

export const useAuthStore = create<AuthState>()(
  devtools(
    (set) => ({
      accessToken: null,
      setAuth: (accessToken: string): void => {
        set({ accessToken }, false, "auth/setAuth");
      },
      clearAuth: (): void => {
        set({ accessToken: null }, false, "auth/clearAuth");
      },
    }),
    { name: "AuthStore" },
  ),
);
