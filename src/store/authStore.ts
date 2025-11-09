import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
  accessToken: string | null;
  setAccessToken: (token: string | null) => void;
  clearAccessToken: () => void;
  isAuthenticated: () => boolean;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      accessToken: null,

      setAccessToken: (token) => set({ accessToken: token }),

      clearAccessToken: () => set({ accessToken: null }),

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