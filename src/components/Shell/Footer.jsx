import {
  Box, Center, Text, Link,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

export default function Footer() {
  return (
    <>
      <Box h="30px" />
      <Box
        p={0}
        w="100%"
        left={0}
        bottom={0}
        position="fixed"
        h="21px"
        bg="red"
      >
        <Center>
          <Link
            isExternal
            href="slack://user?team=T01PL5F7Q3E&id=U01P77DJZ2A"
          >
            <Text color="white">
              Maestro+ Beta. Feedback?
              <ExternalLinkIcon mx="2px" />
            </Text>

          </Link>
        </Center>
      </Box>
    </>
  );
}
