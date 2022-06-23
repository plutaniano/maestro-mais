import {
  Tr, Table, Thead, Th, Tbody, Td, Box, Heading, TableContainer,
} from '@chakra-ui/react';
import { CATEGORIES, META } from './definitions';

export default function MetaTable() {
  return (
    <Box>
      <Heading size="md">Meta</Heading>
      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              <Th />
              <Th>Alocação</Th>
              <Th>ROA*</Th>
              <Th>Alocação G20</Th>
            </Tr>
          </Thead>
          <Tbody>
            {CATEGORIES.map((category) => (
              <Tr key={category.accessor}>
                <Th>{category.pretty}</Th>
                <Td>
                  {META.patrimony.maestro[category.accessor]}
                  %
                </Td>
                <Td>
                  {META.roa.maestro[category.accessor]}
                  %
                </Td>
                <Td>
                  {META.patrimony.g20[category.accessor]}
                  %
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}
