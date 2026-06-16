import cn from '@/utils/classname-func';
import styles from './SubmissionAuthorsTable.module.css';
import type { User } from '@/types/user';
import { flexRender, getCoreRowModel, useReactTable, type ColumnDef } from '@tanstack/react-table';
import { Check, X } from 'lucide-react';
import { useMemo } from 'react';

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

  const tableData = useMemo(() => authors, [authors]);

  const table = useReactTable({
    data: tableData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id} className={cn(styles.tableHeader, styles.tableElement)}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id} className={styles.tableElement}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SubmissionAuthorsTable;
