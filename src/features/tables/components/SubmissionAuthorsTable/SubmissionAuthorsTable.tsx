import styles from './SubmissionAuthorsTable.module.css';
import type { User } from '@/types/user';
import { type ColumnDef } from '@tanstack/react-table';
import { Check, X } from 'lucide-react';
import { useMemo } from 'react';
import BaseTable from '../BaseTable/BaseTable';

interface Props {
  authors: TData[];
}

interface TData extends User {
  corresponding: boolean;
  presenter: boolean;
}

const SubmissionAuthorsTable = ({ authors }: Props) => {
  const columns = useMemo<ColumnDef<TData>[]>(
    () => [
      {
        accessorKey: 'firstName',
        header: 'First Name',
      },
      {
        accessorKey: 'lastName',
        header: 'Last Name',
      },
      {
        accessorKey: 'email',
        header: 'Email',
      },
      {
        accessorKey: 'country',
        header: 'Country',
        cell: ({ getValue }) => {
          const value = getValue() as string | null;
          return value ? value : '-';
        },
      },
      {
        accessorKey: 'afiiliation',
        header: 'Affiliation',
        cell: ({ getValue }) => {
          const value = getValue() as string | null;
          return value ? value : '-';
        },
      },
      {
        accessorKey: 'corresponding',
        header: 'Corresponding',
        cell: ({ getValue }) =>
          (getValue() as boolean) ? (
            <Check className={styles.statusIcon} />
          ) : (
            <X className={styles.statusIcon} />
          ),
      },
      {
        accessorKey: 'presenter',
        header: 'Presenter',
        cell: ({ getValue }) =>
          (getValue() as boolean) ? (
            <Check className={styles.statusIcon} />
          ) : (
            <X className={styles.statusIcon} />
          ),
      },
    ],
    [],
  );

  return <BaseTable data={authors} columns={columns} />;
};

export default SubmissionAuthorsTable;
