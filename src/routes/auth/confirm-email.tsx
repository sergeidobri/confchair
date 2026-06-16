import { createFileRoute } from '@tanstack/react-router';
import ConfirmEmailPage from '@pages/auth/ConfirmEmailPage/ConfirmEmailPage';
import { z } from 'zod';
import { Routes } from '@/lib/meta';

const searchSchema = z.object({
  token: z.string().optional(),
});

export const Route = createFileRoute('/auth/confirm-email')({
  validateSearch: searchSchema,
  component: ConfirmEmailPage,
  head: () => ({
    meta: Routes.confirmEmail.meta,
  }),
});
