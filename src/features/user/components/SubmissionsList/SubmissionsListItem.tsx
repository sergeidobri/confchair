import { ChevronDown } from 'lucide-react';
import styles from './SubmissionsList.module.css';
import type { Submission } from '@/types/submissions';
import { useState } from 'react';
import cn from '@/utils/classname-func';
import SubmissionTable from '../../../tables/components/SubmissionTable/SubmissionTable';

interface Props {
  forum: string;
  submissions: Submission[];
}

const SubmissionsListItem = ({ forum, submissions }: Props) => {
  const [collapse, setCollapse] = useState(false);

  const handleForumClick = () => {
    setCollapse(val => !val);
  };

  return (
    <div>
      <h2 className={styles.collapseButton} onClick={handleForumClick}>
        <span>{forum}</span>
        <ChevronDown className={cn(styles.chevron, { [styles.chevronRotate]: collapse })} />
      </h2>
      {!collapse && <SubmissionTable submissions={submissions} />}
    </div>
  );
};

export default SubmissionsListItem;
