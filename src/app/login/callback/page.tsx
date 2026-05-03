"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { refreshAccessToken } from "@/features/auth";
import { useAuthStore } from "@/store/auth/useAuthStore";

const LoginCallbackPage = (): React.ReactElement => {
  const router = useRouter();
  const setAuth = useAuthStore((state) => state.setAuth);

  useEffect(() => {
    refreshAccessToken()
      .then(({ accessToken }) => {
        setAuth(accessToken);
        router.replace("/");
      })
      .catch(() => {
        router.replace("/login");
      });
  }, [router, setAuth]);

  return (
    <div className="flex min-h-dvh items-center justify-center">
      <p className="body1 text-muted-foreground">로그인 중...</p>
    </div>
  );
};

export default LoginCallbackPage;
