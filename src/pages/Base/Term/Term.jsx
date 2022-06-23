import { useMemo } from 'react';
import { useTable, useSortBy } from 'react-table';
import { Table, Thead, Tr, Th, Tbody, Td } from '@chakra-ui/react';
import MOCK_DATA from './MOCK_DATA.json';
import { COLUMNS } from './columns';

export default function Term() {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const {
    getTableProps, getTableBodyProps, headerGroups, rows, prepareRow,
  } = useTable({ columns, data }, useSortBy);

  return (
    <Table {...getTableProps()}>
      <Thead>
        {headerGroups.map((hGroup) => (
          <Tr {...hGroup.getHeaderGroupProps()}>
            {hGroup.headers.map((col) => (
              <Th {...col.getHeaderProps(col.getSortByToggleProps())}>
                {col.render('Header')}
              </Th>
            ))}
          </Tr>
        ))}
      </Thead>
      <Tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <Tr key={row.id}>
              {row.cells.map((cell) => (
                <Td {...cell.getCellProps()}>
                  {cell.render('Cell')}
                </Td>
              ))}
            </Tr>
          );
        })}
        <Tr>
          <Td />
        </Tr>
      </Tbody>
    </Table>
  );
}
