import { Routes } from '@/lib/meta';
import CallForPapersIndexPage from '@pages/main/CallForPapersIndexPage/CallForPapersIndexPage';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/call-for-papers/')({
  component: CallForPapersIndexPage,
  head: () => ({
    meta: Routes.callForPapers.meta,
  }),
});
