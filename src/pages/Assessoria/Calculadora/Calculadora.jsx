import { useState } from 'react';
import {
  VStack, Box, Heading, Text, Divider, Flex, FormControl, FormLabel, InputGroup,
} from '@chakra-ui/react';
import StaffBox from '../../../components/StaffBox';
import UserSelect from '../../../components/UserSelect';
import CalculadoraTable from './CalculadoraTable';
import PatrimonyAndRoa from './PatrimonyAndRoa';
import useAuth from '../../../hooks/useAuth';

export default function Calculadora() {
  const { auth } = useAuth();
  const [target, setTarget] = useState(auth.user);

  return (
    <VStack spacing="24px" align="stretch">
      <Box>
        <Heading size="lg">Calculadora</Heading>
        <Text>Realize projeções sobre o ROA da sua carteira.</Text>
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
      <Divider />
      <PatrimonyAndRoa target={target} />
      <CalculadoraTable target={target} />
    </VStack>
  );
}
