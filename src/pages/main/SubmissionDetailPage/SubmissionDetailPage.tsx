import styles from './SubmissionDetailPage.module.css';
import Link from '@/components/ui/Link/Link';
import { Route as authorRoute } from '@routes/author';
import { useLoaderData } from '@tanstack/react-router';
import { MoveLeft } from 'lucide-react';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import Heading from '@/components/ui/Heading/Heading';
import { Button } from '@/components/ui/Button/Button';
import SubmissionDetailTable from '@/features/user/components/SubmissionDetailTable/SubmissionDetailTable';
import SubmissionAuthorsTable from '@/features/tables/components/SubmissionAuthorsTable/SubmissionAuthorsTable';

const SubmissionDetailPage = () => {
  const { submission } = useLoaderData({ from: '/call-for-papers/$acronym/submission/$number' });
  if (!submission) {
    return <NotFoundPage />;
  }

  return (
    <div className={styles.container}>
      <Link to={authorRoute.to} className={styles.backLink}>
        <MoveLeft /> Back
      </Link>

      <Heading text={`Submission #${submission.number} for ${submission.forum}`} />
      {submission.hasPdf && (
        <Link to={'.'}>
          <Button>Download PDF</Button>
        </Link>
      )}

      <Heading text="Submission details" headingClass={styles.smallHeading} />
      <SubmissionDetailTable submission={submission} />

      <Heading text="Authors" headingClass={styles.smallHeading} />
      <SubmissionAuthorsTable
        authors={[
          { ...submission.author, corresponding: true, presenter: true },
          { ...submission.author, corresponding: true, presenter: false },
        ]}
      />
    </div>
  );
};

export default SubmissionDetailPage;
