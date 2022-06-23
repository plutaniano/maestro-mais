import {
  Flex, Box, Stack, Center, Image, useColorModeValue,
} from '@chakra-ui/react';
import logo from '../assets/brand/lg_dark.png';
import SlackLoginButton from '../components/SlackLoginButton';

export default function Login() {
  const ratio = 14;

  return (
    <Flex
      minH="100vh"
      align="center"
      justify="center"
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Box p={9} rounded="md" bg="white" boxShadow="lg">
        <Stack>
          <Center mb={3} p={3}>
            <Image src={logo} h={800 / ratio} w={2500 / ratio} />
          </Center>
          <Box>
            <SlackLoginButton />
          </Box>
        </Stack>
      </Box>
    </Flex>
  );
}
