import {
  Text, Spacer, Box, HStack, Switch,
} from '@chakra-ui/react';
import useAxiosPrivate from '../../../hooks/useAxiosPrivate';

export default function XpAccountList({ xpAccounts }) {
  const axios = useAxiosPrivate();

  function handleChange(event, xpAccount) {
    const params = { is_mesa_rv: event.target.checked };
    axios.patch(`/xpaccounts/${xpAccount.id}/`, params)
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));
  }

  return (
    <>
      {xpAccounts.map((xpAccount) => (
        <Box>
          <HStack key={xpAccount.id}>
            <Text minW="5em">{xpAccount.id}</Text>
            <Text>{xpAccount.name}</Text>
            <Spacer />
            <Switch
              isChecked={xpAccount.is_mesa_rv}
              onChange={(e) => handleChange(e, xpAccount)}
            />
          </HStack>
        </Box>
      ))}
    </>
  );
}
