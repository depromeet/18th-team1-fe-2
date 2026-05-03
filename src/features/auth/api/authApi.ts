import { httpClient } from "@/shared/api/http-client";

const BASE_URL: string = process.env.NEXT_PUBLIC_API_BASE_URL ?? "";

type RefreshResponse = {
  accessToken: string;
};

export const refreshAccessToken = (): Promise<RefreshResponse> =>
  httpClient.post<RefreshResponse>("/auth/refresh");

export const redirectToKakaoLogin = (): void => {
  window.location.href = `${BASE_URL}/api/oauth2/authorization/kakao`;
};

export const redirectToGoogleLogin = (): void => {
  window.location.href = `${BASE_URL}/api/oauth2/authorization/google`;
};
