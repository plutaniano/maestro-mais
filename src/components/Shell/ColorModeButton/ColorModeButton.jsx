import { Button, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export default function ColorModeButton({ ...props }) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button {...props} onClick={toggleColorMode}>
      {colorMode === 'light'
        ? <MoonIcon color={useColorModeValue('gray.800', 'white')} />
        : <SunIcon color={useColorModeValue('gray.800', 'white')} />}
    </Button>
  );
}
