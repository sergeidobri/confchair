import styles from './SubmissionsList.module.css';
import type { Submission } from '@/types/submissions';
import SubmissionsListItem from './SubmissionsListItem';

interface Props {
  submissions: Submission[] | undefined;
}

type SubmissionGroups = Record<string, Submission[]>;

const SubmissionsList = ({ submissions }: Props) => {
  if (!submissions) {
    return <div>No submissions found</div>;
  }

  const groups: SubmissionGroups = {};

  submissions.forEach(sub => {
    if (groups[sub.forum]) {
      groups[sub.forum].push(sub);
    } else {
      groups[sub.forum] = [sub];
    }
  });

  return (
    <div className={styles.container}>
      {Object.keys(groups).map(forum => (
        <SubmissionsListItem forum={forum} submissions={groups[forum]} />
      ))}
    </div>
  );
};

export default SubmissionsList;
