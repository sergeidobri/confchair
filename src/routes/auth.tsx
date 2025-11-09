import { getAccessToken } from '@/store/authStore';
import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/auth')({
  beforeLoad: () => {
    const token = getAccessToken();
    if (token) {
      throw redirect({ to: '/' });
    }
  },
});
