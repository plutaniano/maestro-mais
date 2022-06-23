import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import ColorModeButton from '../ColorModeButton';
import Brand from './Brand';
import NavItem from './NavItem';
import AvatarMenu from './AvatarMenu';
import BurgerMenu from './BurgerMenu';
import { NAV_ITEMS } from './definitions';
// import CookieButton from './CookieButton';

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box shadow="md" bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems="center">
          <Brand />
          <HStack
            as="nav"
            spacing={4}
            display={{ base: 'none', md: 'flex' }}
          >
            {NAV_ITEMS.map((navItem) => (
              <NavItem key={navItem.label} {...navItem} />
            ))}
          </HStack>
        </HStack>
        <Flex alignItems="center">
          {/* <CookieButton mr={2} /> */}
          <ColorModeButton mr={2} />
          <AvatarMenu />
        </Flex>
      </Flex>
      {isOpen
        ? <BurgerMenu onClick={onClose} navItems={NAV_ITEMS} />
        : null}
    </Box>
  );
}
