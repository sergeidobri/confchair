import { createFileRoute } from '@tanstack/react-router';
import { RegisterPage } from '@pages/auth/RegisterPage/RegisterPage';
import { Routes } from '@/lib/meta';

export const Route = createFileRoute('/auth/register')({
  component: RegisterPage,
  head: () => ({
    meta: Routes.signUp.meta,
  }),
});
