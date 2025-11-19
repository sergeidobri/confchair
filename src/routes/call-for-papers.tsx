import CallForPapersPage from '@pages/main/CallForPapersPage/CallForPapersPage';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/call-for-papers')({
  component: CallForPapersPage,
});
