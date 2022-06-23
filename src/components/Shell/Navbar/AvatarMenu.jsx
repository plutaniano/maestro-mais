import {
  Menu, MenuButton, Button, Avatar, MenuList, MenuItem,
  // MenuDivider,
} from '@chakra-ui/react';
import useAuth from '../../../hooks/useAuth';
import useLogout from '../../../hooks/useLogout';
import { AVATAR_ITEMS } from './definitions';

export default function AvatarMenu() {
  const logout = useLogout();
  const { auth } = useAuth();

  return (
    <Menu>
      <MenuButton
        as={Button}
        rounded="sm"
        variant="link"
        cursor="pointer"
        minW={0}
      >
        <Avatar size="sm" src={auth?.user?.avatar} />
      </MenuButton>
      <MenuList>
        {AVATAR_ITEMS.map((e) => (
          <MenuItem key={e}>{e}</MenuItem>
        ))}
        {/* <MenuDivider /> */}
        <MenuItem onClick={logout}>
          Sair
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
