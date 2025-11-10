import { usersApi } from "@api/users/api";
import { useAuthStore } from "@/store/authStore";
import { useEffect } from "react";

export const useLoadUser = () => {
  const accessToken = useAuthStore((state) => state.accessToken);
  const user = useAuthStore((state) => state.user);

  const setUser = useAuthStore((state) => state.setUser);

  useEffect(() => {
    if (accessToken && !user) {
      usersApi
        .getUser()
        .then((userData) => {
          setUser(userData);
        })
        .catch((err) => {
          console.error('Failed to load user', err);
        });
    }
  }, [user, setUser]);
};