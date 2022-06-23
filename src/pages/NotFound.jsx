import {
  Center, VStack, Heading, Text, useColorModeValue,
} from '@chakra-ui/react';

export default function NotFound() {
  return (
    <Center
      minH="100vh"
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <VStack spacing="24px">
        <Heading size="4xl">404</Heading>
        <Text>Essa página não existe.</Text>
        <iframe
          title="youtube video"
          src="https://www.youtube.com/embed/LH1kbU1vHxc?autoplay=1"
          width="560"
          height="315"
          frameBorder="0"
        />
      </VStack>
    </Center>
  );
}
