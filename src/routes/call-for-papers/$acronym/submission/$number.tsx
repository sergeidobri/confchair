import { submissionsApi } from '@/api/submissions/api';
import SubmissionDetailPage from '@/pages/main/SubmissionDetailPage/SubmissionDetailPage';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/call-for-papers/$acronym/submission/$number')({
  component: SubmissionDetailPage,
  loader: async ({ params }: { params: { acronym: string; number: number } }) => {
    const { number } = params;
    const submission = await submissionsApi.getSubmissionDetail(number);
    return { submission };
  },
});
