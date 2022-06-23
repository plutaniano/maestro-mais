import { useEffect, useState } from 'react';
import {
  Box, Divider, Flex, FormControl, FormLabel, Heading, InputGroup, Select, Text, VStack,
} from '@chakra-ui/react';
import useAxiosPrivate from '../../../hooks/useAxiosPrivate';
import { PERIODS, PAGE_TITLE, PAGE_DESCRIPTION } from './definitions';
import StaffBox from '../../../components/StaffBox';
import DepositsChart from './DepositsChart';
import PatrimonyRoaChart from './PatrimonyRoaChart';
import RevenuePerCategoryChart from './RevenuePerCategory';
import UserSelect from '../../../components/UserSelect';
import useAuth from '../../../hooks/useAuth';

export default function Painel() {
  const { auth } = useAuth();
  const axiosPrivate = useAxiosPrivate();
  const [isLoading, setIsLoading] = useState(true);
  const [target, setTarget] = useState(auth.user);
  const [period, setPeriod] = useState(PERIODS[0]);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    axiosPrivate.get(`/api/users/${target.id}/history/`, period.params)
      .then((resp) => {
        setHistory(resp.data);
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
              onChange={(e) => setPeriod(PERIODS.find((opt) => opt.value === e.target.value))}
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
      <DepositsChart
        isLoading={isLoading}
        data={history.map((i) => ({ ...i.deposits, month: i.month }))}
      />
      <PatrimonyRoaChart
        isLoading={isLoading}
        data={history}
      />
      <RevenuePerCategoryChart
        isLoading={isLoading}
        data={history}
      />
    </VStack>
  );
}
