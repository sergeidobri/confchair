import { SubmissionStatuses } from '@/lib/submissions';
import styles from './SubmissionTable.module.css';
import type { Submission, SubmissionStatusType } from '@/types/submissions';
import type { User } from '@/types/user';
import { dateFormatter } from '@/utils/conference';
import { type ColumnDef } from '@tanstack/react-table';
import { Download, Search } from 'lucide-react';
import { useMemo } from 'react';
import Link from '@/components/ui/Link/Link';
import BaseTable from '../BaseTable/BaseTable';
import cn from '@/utils/classname-func';

interface Props {
  submissions: Submission[];
}

type SubmissionTData = Submission;

const SubmissionTable = ({ submissions }: Props) => {
  const columns = useMemo<ColumnDef<SubmissionTData>[]>(
    () => [
      {
        accessorKey: 'number',
        header: '#',
        cell: ({ getValue }) => getValue() as number,
      },
      {
        accessorKey: 'hasPdf',
        header: 'Actions',
        cell: ({ getValue }) => (
          <div className={styles.actionsContainer}>
            <Link to="/call-for-papers/icac2025/submission/125">
              <Search className={styles.button} />
            </Link>
            {(getValue() as boolean) && <Download className={styles.button} />}
          </div>
        ),
      },
      {
        accessorKey: 'author',
        header: 'Authors',
        cell: ({ getValue }) => (
          <span>
            {(getValue() as User).firstName} {(getValue() as User).lastName}
          </span>
        ),
      },
      {
        accessorKey: 'title',
        header: 'Title',
        cell: ({ getValue }) => <span className={styles.variableCell}>{getValue() as string}</span>,
      },
      {
        accessorKey: 'topic',
        header: 'Topic',
        cell: ({ getValue }) => <span className={styles.variableCell}>{getValue() as string}</span>,
      },
      {
        accessorKey: 'presentationFormat',
        header: 'Presentation Format',
      },
      {
        accessorKey: 'submittedAt',
        header: 'Submitted at',
        cell: ({ getValue }) => dateFormatter.format(getValue() as Date),
      },
      {
        accessorKey: 'status',
        header: 'Status',
        cell: ({ getValue }) => (
          <div className={styles.statusContainer}>
            {(getValue() as SubmissionStatusType[]).map(sub => {
              const status = SubmissionStatuses[sub];
              return (
                <span key={sub} style={status.style} className={styles.statusCell}>
                  {status.title}
                </span>
              );
            })}
          </div>
        ),
      },
    ],
    [],
  );

  return <BaseTable columns={columns} data={submissions} />;
};

export default SubmissionTable;
