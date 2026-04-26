import type { CurrentUser } from "../../../app/store/auth-store";
import { axiosInstance } from "../../../lib/axios/axios-instance";

type LoginPayload = {
  email: string;
  password: string;
};

export interface LoginResponse {
  user: CurrentUser;
  tokens: {
    accessToken: string;
  };
}

export async function loginApi(payload: LoginPayload): Promise<LoginResponse> {
  const response = await axiosInstance.post("/auth/login", payload);
  return response.data.data;
}
