import cn from '@/utils/classname-func';
import styles from './BaseTable.module.css';
import { flexRender, getCoreRowModel, useReactTable, type ColumnDef } from '@tanstack/react-table';
import { useMemo } from 'react';

interface Props<TData> {
  columns: ColumnDef<TData>[];
  data: TData[];
  align?: 'center' | 'start';
  fontSize?: 'normal' | 'large';
}

const BaseTable = <TData,>({
  columns,
  data,
  align = 'center',
  fontSize = 'normal',
}: Props<TData>) => {
  const tableData = useMemo(() => data, [data]);

  const table = useReactTable({
    data: tableData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div
      className={cn(styles.tableContainer, {
        [styles.alignStart]: align == 'start',
        [styles.alignCenter]: align == 'center',
        [styles.fontNormal]: fontSize == 'normal',
        [styles.fontLarge]: fontSize == 'large',
      })}
    >
      <table className={styles.table}>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th
                  key={header.id}
                  className={cn(styles.tableHeader, styles.tableElement, {
                    [styles.alignStart]: align == 'start',
                    [styles.alignCenter]: align == 'center',
                  })}
                >
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

export default BaseTable;
