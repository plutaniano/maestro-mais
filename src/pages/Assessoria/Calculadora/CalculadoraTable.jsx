import { useEffect, useReducer, useState } from 'react';
import humanize from 'humanize-plus';
import {
  Tr,
  Table,
  TableContainer,
  Thead,
  Th,
  Tbody,
  Box,
  Heading,
  Td,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Tfoot,
  Flex,
  Spacer,
} from '@chakra-ui/react';
import useAxiosPrivate from '../../../hooks/useAxiosPrivate';
import { CATEGORIES } from './definitions';
import RequestButton from '../../../components/RequestButton/RequestButton';

function calculadoraReducer(state, action) {
  const newState = { ...state };
  switch (action.type) {
    case 'initial':
      return action.data;
    case 'set':
      newState[action.column][action.category] = action.value;
      return newState;
    default:
      throw new Error();
  }
}

export default function CalculadoraTable({ target }) {
  const [state, setState] = useReducer(calculadoraReducer, { patrimony: {}, roa: {} });
  const [isLoading, setIsLoading] = useState(true);
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    setIsLoading(true);
    axiosPrivate.get(`/users/${target.id}/calculadora/`)
      .then((resp) => {
        setState({ type: 'initial', data: resp.data });
        setIsLoading(false);
      });
  }, [target]);

  let [roa, patrimony] = [0, 0];
  CATEGORIES.forEach(({ accessor }) => {
    patrimony += state.patrimony[accessor];
    roa += state.roa[accessor] * state.patrimony[accessor] * 0.01;
  });

  return (
    <Box>
      <Heading size="md">Calculadora</Heading>
      {isLoading
        ? null
        : (
          <>
            <TableContainer>
              <Table>
                <Thead>
                  <Tr>
                    <Th />
                    <Th>Alocação</Th>
                    <Th>ROA*</Th>
                    <Th>ROA*</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {CATEGORIES.map((cat) => (
                    <Tr key={cat.accessor}>
                      <Th>{cat.pretty}</Th>
                      <Td>
                        <PercentInput
                          defaultValue={state.patrimony[cat.accessor]}
                          onChange={(value) => setState({
                            type: 'set',
                            column: 'patrimony',
                            category: cat.accessor,
                            value,
                          })}
                        />
                      </Td>
                      <Td>
                        <PercentInput
                          defaultValue={state.roa[cat.accessor]}
                          onChange={(value) => setState({
                            type: 'set',
                            column: 'roa',
                            category: cat.accessor,
                            value,
                          })}
                        />
                      </Td>
                      <Td>
                        {humanize.toFixed(
                          0.01 * state.roa[cat.accessor] * state.patrimony[cat.accessor],
                          3,
                        )}
                        %
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Td>Total:</Td>
                    <Td>
                      {patrimony.toFixed(2)}
                      %
                    </Td>
                    <Td />
                    <Td>
                      {roa.toFixed(2)}
                      %
                    </Td>
                  </Tr>
                </Tfoot>
              </Table>
            </TableContainer>
            <Flex p={3}>
              <Spacer />
              <RequestButton
                onClick={() => axiosPrivate.put(`/users/${target.id}/calculadora/`, state)}
              />
            </Flex>
          </>
        )}
    </Box>
  );
}

function PercentInput({
  precision = 2,
  min = 0.0,
  max = 100.0,
  step = 0.05,
  defaultValue = 0.0,
  onChange,
  ...props
}) {
  const [value, setValue] = useState(defaultValue);
  const format = (val) => `${val}%`;
  const parse = (val) => parseFloat(val.replace('%', ''));
  return (
    <NumberInput
      min={min}
      max={max}
      step={step}
      onChange={(str) => {
        setValue(parse(str));
        onChange(parse(str));
      }}
      value={format(value)}
      precision={precision}
      {...props}
    >
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  );
}
