import { usersApi } from '@/api/users/api';
import { getAccessToken } from '@/store/authStore';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/call-for-papers')({
  loader: async () => {
    const user = await usersApi.getUser();
    console.log('User:', user);
    console.log('Access token:', getAccessToken());
    return user;
  },
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/call-for-papers"!</div>;
}
