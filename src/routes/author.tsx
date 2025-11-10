import AuthorPage from '@pages/main/AuthorPage/AuthorPage';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/author')({
  component: AuthorPage,
});
