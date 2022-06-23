import { Box, useColorModeValue } from '@chakra-ui/react';
import useAuth from '../hooks/useAuth';

export default function StaffBox({ children }) {
  const { auth } = useAuth();

  return (
    !auth?.user?.is_staff
      ? null
      : (
        <Box
          borderRadius="md"
          p={2}
          bgColor={useColorModeValue('yellow.100', 'yellow.900')}
          borderWidth={1}
          borderColor="gold"
        >
          {children}
        </Box>
      )
  );
}
