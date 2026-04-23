import { create } from "zustand";
import type { UserRole } from "../../lib/constants/roles";

export type CurrentUser = {
  id: string;
  fullName: string;
  email: string;
  role: UserRole;
  avatarUrl: string;
};

interface AuthState {
  accessToken: string | null;
  user: CurrentUser | null;
  isAuthenticated: boolean;
  setAccessToken: (token: string | null) => void;
  setUser: (user: CurrentUser | null) => void;
  login: (payload: { accessToken: string; user: CurrentUser }) => void;
  logout: () => void;
}

const ACCESS_TOKEN_KEY = "accessToken";
const USER_KEY = "currentUser";

const getStoredAccessToken = (): string | null => {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
};

function getStoredUser(): CurrentUser | null {
  const raw = localStorage.getItem(USER_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as CurrentUser;
  } catch (e) {
    console.error("Failed to parse stored user:", e);
    return null;
  }
}

export const useAuthStore = create<AuthState>((set) => ({
  accessToken: getStoredAccessToken(),

  user: getStoredUser(),

  isAuthenticated: !!getStoredAccessToken(),

  setAccessToken: (token) => {
    if (token) {
      localStorage.setItem(ACCESS_TOKEN_KEY, token);
    } else {
      localStorage.removeItem(ACCESS_TOKEN_KEY);
    }

    set((state) => ({
      ...state,
      accessToken: token,
      isAuthenticated: !!token,
    }));
  },

  setUser: (user) => {
    if (user) {
      localStorage.setItem(USER_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(USER_KEY);
    }

    set((state) => ({
      ...state,
      user,
    }));
  },

  login: ({ accessToken, user }) => {
    localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
    localStorage.setItem(USER_KEY, JSON.stringify(user));

    set({
      accessToken,
      user,
      isAuthenticated: true,
    });
  },
  logout: () => {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
    set({
      accessToken: null,
      user: null,
      isAuthenticated: false,
    });
  },
}));
