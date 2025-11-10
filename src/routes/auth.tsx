import { getAccessToken } from '@/store/authStore';
import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/auth')({
  beforeLoad: ({ location }) => {
    if (location.pathname === '/auth/logout') {
      return;
    }
    const token = getAccessToken();
    if (token) {
      throw redirect({ to: '/' });
    }
  },
});
