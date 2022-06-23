import {
  VStack, Divider, Box, Heading, Text, Input,
} from '@chakra-ui/react';
import { useState } from 'react';
import useAxiosPrivate from '../../../hooks/useAxiosPrivate';
import XpAccountList from './XpAccountList';

export default function Clientes() {
  const [query, setQuery] = useState('');
  const [xpAccounts, setXpAccounts] = useState([]);
  const axios = useAxiosPrivate();

  function handleChange(event) {
    setQuery(event.target.value);
  }

  async function handleEnter(event) {
    const params = {
      query: event.target.value,
      order_by: 'name',
    };
    const response = await axios.get('/api/xpaccounts/', { params });
    setXpAccounts(response.data.results);
  }

  return (
    <VStack spacing="24px" align="stretch">
      <Box>
        <Heading size="lg">Clientes</Heading>
        <Text>Adicione ou remova clientes da mesa RV.</Text>
      </Box>
      <Divider />
      <Input
        value={query}
        onChange={(e) => handleChange(e)}
        onKeyUp={(e) => (e.key === 'Enter' ? handleEnter(e) : null)}
        placeholder="Nome ou Código XP"
      />
      <XpAccountList xpAccounts={xpAccounts} />
    </VStack>
  );
}
