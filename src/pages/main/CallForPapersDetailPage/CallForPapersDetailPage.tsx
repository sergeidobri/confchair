import { getFormatDate } from '@/utils/conference';
import styles from './CallForPapersDetailPage.module.css';
import { Button } from '@components/ui/Button/Button';
import Heading from '@components/ui/Heading/Heading';
import { Link, useLoaderData } from '@tanstack/react-router';
import DOMPurify from 'dompurify';

const CallForPapersDetailPage = () => {
  const { conference } = useLoaderData({ from: '/call-for-papers/$acronym' });

  if (!conference) {
    return <div>Conference was not found</div>;
  }
  const cleanDescription = DOMPurify.sanitize(conference.description);
  return (
    <div>
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

      <div className={styles.infoContainer}>
        <div className={`${styles.infoBlock} ${styles.datesInfoBlock}`}>
          <p>
            <p>Submission Deadline:</p>
            <p>{getFormatDate(conference.submissionDeadline)}</p>
          </p>
          <p>
            <p>Start Date:</p>
            <p>{getFormatDate(conference.startDate)}</p>
          </p>
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
