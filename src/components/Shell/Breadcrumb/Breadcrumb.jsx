import { ChevronRightIcon } from '@chakra-ui/icons';
import { useLocation } from 'react-router-dom';
import {
  Breadcrumb as ChakraBreadcrumb,
  BreadcrumbItem,
  Box,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

export default function Breadcrumb() {
  const path = useLocation().pathname.split('/').filter((e) => e);
  return (
    <Box my={1} ml={3}>
      <ChakraBreadcrumb
        spacing="8px"
        separator={<ChevronRightIcon boxSize="2" color={useColorModeValue('gray.800', 'white')} />}
      >
        <BreadcrumbItem>
          <Text fontSize="xs">Home</Text>
        </BreadcrumbItem>
        {path.map((e) => (
          <BreadcrumbItem key={e}>
            <Text casing="capitalize" fontSize="xs">{e}</Text>
          </BreadcrumbItem>
        ))}
      </ChakraBreadcrumb>
    </Box>
  );
}
