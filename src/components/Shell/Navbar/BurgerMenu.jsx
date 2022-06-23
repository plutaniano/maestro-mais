import { Box, Stack } from '@chakra-ui/react';
import MobileNavItem from './MobileNavItem';

export default function BurgerMenu({ onClick, navItems }) {
  return (
    <Box pb={4} display={{ md: 'none' }}>
      <Stack as="nav" spacing={4}>
        {navItems.map((navItem) => (
          <MobileNavItem key={navItem.label} onClick={onClick} {...navItem} />
        ))}
      </Stack>
    </Box>
  );
}
