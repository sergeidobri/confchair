import { createFileRoute } from '@tanstack/react-router';
import { LoginPage } from '@pages/auth/LoginPage/LoginPage';
import { Routes } from '@/lib/meta';

export const Route = createFileRoute('/auth/login')({
  component: LoginPage,
  head: () => ({
    meta: Routes.signIn.meta,
  }),
});
