import type { Conference } from '@/types/conference';
import { getFormatDate } from '@/utils/conference';
import { type ColumnDef } from '@tanstack/react-table';
import { useMemo } from 'react';
import BaseTable from '../BaseTable/BaseTable';
import Link from '@/components/ui/Link/Link';

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
            underline
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

  const tableData = conferences.map(conf => ({
    shortName: conf.shortName ? conf.shortName : conf.name,
    name: conf.name,
    submissionDeadline: getFormatDate(conf.submissionDeadline),
    startDate: getFormatDate(conf.startDate),
    acronym: conf.acronym,
  }));

  return <BaseTable columns={columns} data={tableData} align="start" fontSize="large" />;
};

export default CallForPapersTable;
