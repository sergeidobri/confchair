import Heading from '@components/ui/Heading/Heading';
import type { Conference } from '@/types/conference';
import { useState } from 'react';
import CallForPapersTable from '@/features/callForPapers/components/CallForPapersTable/CallForPapersTable';
import { callForPapersApi } from '@/api/callForPapers/api';

const CallForPapersIndexPage = () => {
  const [conferences] = useState<Conference[]>(callForPapersApi.getCallForPapers());

  return (
    <>
      <Heading text="Call For Papers" />
      <CallForPapersTable conferences={conferences} />
    </>
  );
};

export default CallForPapersIndexPage;
