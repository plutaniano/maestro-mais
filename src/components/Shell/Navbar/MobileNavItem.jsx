import {
  useDisclosure, Stack, Flex, useColorModeValue, Collapse, Icon, Text, Box,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { ChevronDownIcon } from '@chakra-ui/icons';

export default function MobileNavItem({
  onClick, label, href, children,
}) {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Link to={href ?? '#'}>
        <Flex
          py={2}
          justify="space-between"
          align="center"
          _hover={{
            textDecoration: 'none',
          }}
        >
          <Text
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}
            onClick={() => (children ? null : onClick())}
          >
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition="all .25s ease-in-out"
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Flex>
      </Link>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          borderLeft={1}
          borderStyle="solid"
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align="start"
        >
          {children
            && children.map((child) => (
              <Box w="100%">
                <Link
                  key={child.label}
                  to={child.href}
                  onClick={onClick}
                >
                  <Box
                    pl={4}
                    py={2}
                    _hover={{ bg: useColorModeValue('gray.200', 'gray.800') }}
                  >
                    {child.label}
                  </Box>
                </Link>
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
}
