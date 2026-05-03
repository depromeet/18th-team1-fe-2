import { httpClient } from "@/shared/api/http-client";

type RefreshResponse = {
  accessToken: string;
};

export const refreshAccessToken = (): Promise<RefreshResponse> =>
  httpClient.post<RefreshResponse>("/auth/refresh");
