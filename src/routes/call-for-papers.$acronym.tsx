import CallForPapersPage from '@pages/main/CallForPapersPage/CallForPapersPage';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/call-for-papers/$acronym')({
  component: CallForPapersPage,
  loader: async ({ params }: { params: { acronym: string } }) => {
    const { acronym } = params;
    // const conference = await callForPapersApi.getConferenceByAcronym(acronym);
    const conference = { acronym: acronym, name: acronym };
    return { conference };
  },
});
