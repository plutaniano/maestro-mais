import { useEffect, useState } from 'react';
import {
  VStack, Box, Heading, Table, Th, Tr, Tbody, Td, Thead, Text, Badge, HStack,
} from '@chakra-ui/react';
import { FiFilter } from 'react-icons/fi';
import useAxiosPrivate from '../../../hooks/useAxiosPrivate';
import ClientCell from './ClientCell';
import AdvisorCell from './AdvisorCell';

export default function Equity() {
  const [equities, setEquities] = useState([]);
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    axiosPrivate.get('/equities/')
      .then((resp) => resp.json())
      .then((resp) => {
        setEquities(resp);
      });
  }, []);

  return (
    <VStack spacing="24px" align="stretch">
      <Box>
        <Heading size="lg">Ações</Heading>
        <Text>Todas as ações dos clientes da base</Text>
      </Box>
      <Box>
        <Table variant="striped" colorScheme="gray" size="sm">
          <Thead position="sticky" top={0} bgColor="gray.800">
            <Tr>
              <Th>
                <HStack>
                  <Text>Cliente</Text>
                  <FiFilter />
                </HStack>
              </Th>
              <Th>Assessor</Th>
              <Th>Ticker</Th>
              <Th>Perf</Th>
              <Th>Financeiro</Th>
              <Th>Cotação</Th>
              <Th>Qtd</Th>
              <Th>Qtd Disp</Th>
              <Th>Custo Médio</Th>
            </Tr>
          </Thead>
          <Tbody>
            {equities.map((e, i) => {
              const repeat = e.xp_account.id === equities[i - 1]?.xp_account.id;
              return (
                <Tr key={e.id}>
                  <Td><ClientCell repeat={repeat} {...e.xp_account} /></Td>
                  <Td><AdvisorCell {...e.xp_account.advisor} /></Td>
                  <Td>{e.ticker}</Td>
                  <Td>
                    <Badge fontSize="sm" colorScheme={e.performance > 0 ? 'green' : 'red'}>
                      {e.performance.toFixed(2)}
                      %
                    </Badge>
                  </Td>
                  <Td>
                    {e.financial}
                  </Td>
                  <Td>
                    {e.quote}
                  </Td>
                  <Td>{e.quantity}</Td>
                  <Td>{e.available}</Td>
                  <Td>
                    {e.average_cost
                      ? `${e.average_cost.toFixed(2)}`
                      : '-'}
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </Box>
    </VStack>
  );
}
