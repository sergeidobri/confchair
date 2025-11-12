import { usersApi } from '@api/users/api';
import { useAuthStore } from '@/store/authStore';
import { useEffect } from 'react';
import { useLocation } from '@tanstack/react-router';

let isFetchingUser = false;

export const useLoadUser = () => {
  const location = useLocation();
  const user = useAuthStore(state => state.user);
  const setUser = useAuthStore(state => state.setUser);

  useEffect(() => {
    if (location.pathname == '/auth/logout' || user || isFetchingUser) return;

    isFetchingUser = true;

    usersApi
      .getUser()
      .then(userData => {
        setUser(userData);
      })
      .catch(err => {
        console.error('Failed to load user', err);
      })
      .finally(() => {
        isFetchingUser = false;
      });
  }, [user, setUser]);
};
