import { Routes } from '@/lib/meta';
import AuthorPage from '@pages/main/AuthorPage/AuthorPage';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/author')({
  component: AuthorPage,
  head: () => ({
    meta: Routes.author.meta,
  }),
});
