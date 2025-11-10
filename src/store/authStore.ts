import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  isEmailVerified: boolean;
  createdAt: string;
  updatedAt: string;
}

interface AuthState {
  accessToken: string | null;
  user: User | null;
  setAccessToken: (token: string | null) => void;
  setUser: (user: User | null) => void;
  clearAuth: () => void;
  isAuthenticated: () => boolean;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      accessToken: null,
      user: null,

      setAccessToken: (token) => set({ accessToken: token }),

      setUser: (user) => set({ user }),

      clearAuth: () => set({ accessToken: null, user: null }),

      isAuthenticated: () => get().accessToken !== null,
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({ accessToken: state.accessToken }), // сохраняем только accessToken
    }
  )
);

export const getAccessToken = (): string | null => {
  return useAuthStore.getState().accessToken;
};