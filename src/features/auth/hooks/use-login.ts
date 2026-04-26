import { useAuthStore } from "../../../app/store/auth-store";
import { useMutation } from "@tanstack/react-query";
import { loginApi } from "../api/auth.api";

export function useLogin() {
  const login = useAuthStore((state) => state.login);

  return useMutation({
    mutationFn: loginApi,
    onSuccess: (data) => {
      login({
        accessToken: data.tokens.accessToken,
        user: data.user,
      });
    },
  });
}
