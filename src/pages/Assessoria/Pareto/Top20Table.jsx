import { useState } from 'react';
import {
  TableContainer, Table, Thead, Tbody, Tr, Td, Th,
  Heading,
  Tabs, TabList, Tab,
} from '@chakra-ui/react';
import humanize from 'humanize-plus';
import Loading from '../../../components/Loading';
import { TABS } from './definitions';

export default function Top20Table({ isLoading, data }) {
  const [tab, setTab] = useState(TABS[0]);

  return (
    <>
      <Heading size="md">Top 20 Clientes</Heading>
      <Tabs
        isFitted
        variant="enclosed-colored"
        onChange={(i) => setTab(TABS[i])}
      >
        <TabList mb={4}>
          {TABS.map((t) => (
            <Tab key={t.value}>{t.pretty}</Tab>
          ))}
        </TabList>
        {isLoading
          ? <Loading />
          : (
            <TableContainer>
              <Table size="sm" variant="striped">
                <Thead>
                  <Tr>
                    <Th>#</Th>
                    <Th>Cliente</Th>
                    <Th textAlign="center">Receita (R$)</Th>
                    <Th textAlign="center">Patrimônio (R$)</Th>
                    <Th textAlign="center">ROA (%)</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data.top_clients.map((c, i) => {
                    let roa = (100 * c.revenue[tab.value]) / c.patrimony[tab.value];
                    if ([NaN, Infinity].includes(roa)) {
                      roa = 0;
                    }
                    return (
                      <Tr key={c.xp_account}>
                        <Td w="3%">{i + 1}</Td>
                        <Td w="7%">{c.xp_account}</Td>
                        <Td isNumeric w="30%">{humanize.formatNumber(c.revenue[tab.value], 0)}</Td>
                        <Td isNumeric w="30%">{humanize.formatNumber(c.patrimony[tab.value], 0)}</Td>
                        <Td isNumeric w="30%">{humanize.formatNumber(roa, 3)}</Td>
                      </Tr>
                    );
                  })}
                </Tbody>
              </Table>
            </TableContainer>
          )}
      </Tabs>
    </>
  );
}
