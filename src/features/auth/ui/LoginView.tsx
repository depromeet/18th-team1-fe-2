"use client";

import { Button } from "@/shared/ui/button";
import { IcGoogle, IcKakao } from "@/shared/ui/icons";
import { redirectToGoogleLogin, redirectToKakaoLogin } from "../api/authApi";

export const LoginView = (): React.ReactElement => {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-between px-5 py-16">
      <div className="flex flex-1 items-center justify-center">
        <div className="size-64 rounded-lg bg-gray-200" />
      </div>

      <div className="flex w-full flex-col gap-4">
        <Button
          icon={<IcKakao size={20} />}
          label="카카오 계정으로 시작하기"
          className="gap-2.5 rounded-2xl bg-[#FEE500] text-gray-700"
          onClick={redirectToKakaoLogin}
        />
        <Button
          icon={<IcGoogle size={18} />}
          label="구글 계정으로 시작하기"
          className="gap-2.5 rounded-2xl bg-background text-gray-700"
          onClick={redirectToGoogleLogin}
        />
      </div>
    </div>
  );
};
