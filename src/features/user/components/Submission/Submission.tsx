import styles from './Submission.module.css';
import Heading from '@/components/ui/Heading/Heading';
import Link from '@/components/ui/Link/Link';

import SubmissionsList from '../SubmissionsList/SubmissionsList';
import { useQuery } from '@tanstack/react-query';
import { submissionsApi } from '@/api/submissions/api';

const Submission = () => {
  const {
    data: submissions,
    isError,
    isPending,
  } = useQuery({
    queryKey: ['submissions'],
    queryFn: submissionsApi.getSubmissions,
  });

  if (isError) {
    return <div>Error occured</div>;
  }
  if (isPending) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <Heading text="My Submissions" />
      <Link to={'.'} underline>
        Submit a new abstract
      </Link>
      <SubmissionsList submissions={submissions} />
    </div>
  );
};

export default Submission;
