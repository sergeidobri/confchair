import { getFormatDate } from '@/utils/conference';
import styles from './CallForPapersDetailPage.module.css';
import { Button } from '@components/ui/Button/Button';
import Heading from '@components/ui/Heading/Heading';
import { useLoaderData } from '@tanstack/react-router';
import DOMPurify from 'dompurify';
import Link from '@/components/ui/Link/Link';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

const CallForPapersDetailPage = () => {
  const { conference } = useLoaderData({ from: '/call-for-papers/$acronym/' });

  if (!conference) {
    return <NotFoundPage />;
  }
  const cleanDescription = DOMPurify.sanitize(conference.description);
  return (
    <div>
      <div className={styles.headerContainer}>
        <Heading text={conference.name} />
        <div className={styles.buttons}>
          {new Date(conference.submissionDeadline) >= new Date() && (
            <Link to={'.'}>
              <Button>Submit an abstract</Button>
            </Link>
          )}
          {conference.siteUrl && (
            <Link to={conference.siteUrl} target="_blank">
              <Button>Learn More</Button>
            </Link>
          )}
        </div>
      </div>

      <div className={styles.infoContainer}>
        <div className={`${styles.infoBlock} ${styles.datesInfoBlock}`}>
          <div>
            <p>Submission Deadline:</p>
            <p>{getFormatDate(conference.submissionDeadline)}</p>
          </div>
          <div>
            <p>Start Date:</p>
            <p>{getFormatDate(conference.startDate)}</p>
          </div>
        </div>
        <div className={`${styles.infoBlock} ${styles.mainInfoBlock}`}>
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: cleanDescription }}
          ></div>
          <p>
            Authors are encouraged to submit abstracts for presentations in the following topics.
          </p>
          <div className={styles.topics}>Topics...</div>
        </div>
      </div>
    </div>
  );
};

export default CallForPapersDetailPage;
