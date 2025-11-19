import { useLoadCallForPapers } from '@hooks/useLoadCallForPapers';

const CallForPapersPage = () => {
  useLoadCallForPapers();
  return <div>Call For Papers</div>;
};

export default CallForPapersPage;
