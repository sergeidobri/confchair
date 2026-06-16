import Heading from '@components/ui/Heading/Heading';
import CallForPapersTable from '@/features/callForPapers/components/CallForPapersTable/CallForPapersTable';
import { useQuery } from '@tanstack/react-query';
import { callForPapersApi } from '@/api/callForPapers/api';

const CallForPapersIndexPage = () => {
  const { data, isPending, isError } = useQuery({
    queryKey: ['conference', 'all'],
    queryFn: callForPapersApi.getCallForPapers,
  });

  if (isPending) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error occured while fetching</div>;
  }

  return (
    <>
      <Heading text="Call For Papers" />
      <CallForPapersTable conferences={data} />
    </>
  );
};

export default CallForPapersIndexPage;
