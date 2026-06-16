import { createFileRoute } from '@tanstack/react-router';
import ConfirmEmailSentPage from '@pages/auth/ConfirmEmailSentPage/ConfirmEmailSentPage';
import { Routes } from '@/lib/meta';

export const Route = createFileRoute('/auth/confirm-email-sent')({
  component: ConfirmEmailSentPage,
  head: () => ({
    meta: Routes.confirmEmailSent.meta,
  }),
});
