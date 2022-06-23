import { useEffect, useState } from 'react';
import {
  Table, TableContainer, Tbody, Td, Tr, Th, Thead, Box, Heading,
} from '@chakra-ui/react';
import useAxiosPrivate from '../../../hooks/useAxiosPrivate';
import { CATEGORIES, META } from './definitions';

export default function PatrimonyAndRoa({ target }) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    setIsLoading(true);
    axiosPrivate.get(`/users/${target.id}/latestmonth/`)
      .then((resp) => {
        setData(resp.data);
        setIsLoading(false);
      });
  }, [target]);

  return (
    <Box>
      <Heading size="md">Alocação & ROA</Heading>
      {isLoading
        ? null
        : (
          <TableContainer>
            <Table>
              <Thead>
                <Tr>
                  <Th />
                  <Th textAlign="center" colSpan={3}>Alocação</Th>
                  <Th textAlign="center" colSpan={2}>ROA*</Th>
                </Tr>
                <Tr>
                  <Th />
                  <Th textAlign="center">Atual</Th>
                  <Th textAlign="center">Meta</Th>
                  <Th textAlign="center">G20</Th>
                  <Th textAlign="center">Atual</Th>
                  <Th textAlign="center">Meta</Th>
                </Tr>
              </Thead>
              <Tbody>
                {CATEGORIES.map(({ accessor, pretty }) => (
                  <Tr key={accessor}>
                    <Th>{pretty}</Th>
                    <PercentTd precision={2} value={data.patrimony[accessor]} />
                    <PercentTd precision={0} value={META.patrimony.maestro[accessor]} />
                    <PercentTd precision={0} value={META.patrimony.g20[accessor]} />
                    <PercentTd precision={3} value={data.roa[accessor]} />
                    <PercentTd precision={2} value={META.roa.maestro[accessor]} />
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        )}
    </Box>
  );
}

function PercentTd({ precision, value }) {
  return (
    <Td
      textAlign="center"
    >
      {parseFloat(value).toFixed(precision)}
      %
    </Td>
  );
}
