import { createFileRoute } from '@tanstack/react-router';
import ConfirmEmailSentPage from '@pages/auth/ConfirmEmailSentPage/ConfirmEmailSentPage';

export const Route = createFileRoute('/auth/confirm-email-sent')({
  component: ConfirmEmailSentPage,
});
