import { useState, useEffect, useReducer } from 'react';
import {
  Text, Heading, Box, Divider, VStack, Flex, FormControl, FormLabel, InputGroup, Select,
} from '@chakra-ui/react';
import { PERIODS, PAGE_TITLE, PAGE_DESCRIPTION } from './definitions';
import ParetoDistribution from './ParetoDistribution';
import UserSelect from '../../../components/UserSelect';
import StaffBox from '../../../components/StaffBox';
import Top20Table from './Top20Table';
import useAuth from '../../../hooks/useAuth';
import useAxiosPrivate from '../../../hooks/useAxiosPrivate';

function periodReducer(state, action) {
  return PERIODS.find((i) => i.value === action);
}

export default function Pareto() {
  const { auth } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [target, setTarget] = useState(auth.user);
  const [period, setPeriod] = useReducer(periodReducer, PERIODS[0]);
  const [data, setData] = useState({ top_clients: [] });
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    setIsLoading(true);
    axiosPrivate.get(`/api/users/${target.id}/pareto/`, { params: period.params })
      .then((resp) => {
        setData(resp.data);
        setIsLoading(false);
      });
  }, [target, period]);

  return (
    <VStack spacing="24px" align="stretch">
      <Box>
        <Heading size="lg">{PAGE_TITLE}</Heading>
        <Text>{PAGE_DESCRIPTION}</Text>
      </Box>
      <StaffBox>
        <Flex>
          <FormControl>
            <FormLabel>👑 Escolha um assessor</FormLabel>
            <InputGroup>
              <UserSelect
                advisors
                user={target}
                onChange={setTarget}
              />
            </InputGroup>
          </FormControl>
        </Flex>
      </StaffBox>
      <Flex>
        <FormControl>
          <FormLabel>Selecione o período</FormLabel>
          <InputGroup>
            <Select
              value={period.value}
              onChange={(e) => setPeriod(e.target.value)}
            >
              {PERIODS.map((opt) => (
                <option
                  key={opt.value}
                  value={opt.value}
                >
                  {opt.pretty}
                </option>
              ))}
            </Select>
          </InputGroup>
        </FormControl>
      </Flex>
      <Divider />
      <ParetoDistribution
        isLoading={isLoading}
        data={data}
      />
      <Divider />
      <Top20Table
        isLoading={isLoading}
        data={data}
      />
    </VStack>
  );
}
