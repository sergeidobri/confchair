import styles from './CallForPapersTable.module.css';
import type { Conference } from '@/types/conference';
import { getFormatDate } from '@/utils/conference';
import { Link } from '@tanstack/react-router';
import { flexRender, getCoreRowModel, useReactTable, type ColumnDef } from '@tanstack/react-table';
import { useMemo } from 'react';

interface Props {
  conferences: Conference[];
}

type ConferenceTData = {
  shortName: string;
  name: string;
  submissionDeadline: string;
  startDate: string;
  acronym: string;
};

const CallForPapersTable = ({ conferences }: Props) => {
  const columns = useMemo<ColumnDef<ConferenceTData>[]>(
    () => [
      {
        accessorKey: 'shortName',
        header: 'Short Name',
        cell: ({ getValue, row }) => (
          <Link
            to={'/call-for-papers/$acronym'}
            params={{ acronym: row.original.acronym }}
            className={styles.link}
          >
            {getValue() as string}
          </Link>
        ),
      },
      {
        accessorKey: 'name',
        header: 'Name',
      },
      {
        accessorKey: 'submissionDeadline',
        header: 'Submission Deadline',
      },
      {
        accessorKey: 'startDate',
        header: 'Start Date',
      },
    ],
    [],
  );

  const tableData = useMemo(() => {
    return conferences.map(conf => ({
      shortName: conf.shortName ? conf.shortName : conf.name,
      name: conf.name,
      submissionDeadline: getFormatDate(conf.submissionDeadline),
      startDate: getFormatDate(conf.startDate),
      acronym: conf.acronym,
    }));
  }, [conferences]);

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
                <th key={header.id} className={styles.tableElement}>
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

export default CallForPapersTable;
