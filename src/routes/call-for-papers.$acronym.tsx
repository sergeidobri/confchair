import { callForPapersApi } from '@/api/callForPapers/api';
import CallForPapersDetailPage from '@/pages/main/CallForPapersDetailPage/CallForPapersDetailPage';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/call-for-papers/$acronym')({
  component: CallForPapersDetailPage,
  loader: async ({ params }: { params: { acronym: string } }) => {
    const { acronym } = params;
    const conference = await callForPapersApi.getCallForPapersByAcronym({ acronym });
    return { conference };
  },
});
