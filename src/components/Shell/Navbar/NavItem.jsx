import {
  Box,
  useColorModeValue,
  Popover,
  Icon,
  Stack,
  Text,
  PopoverTrigger,
  PopoverContent,
  Flex,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { ChevronRightIcon, ChevronDownIcon } from '@chakra-ui/icons';

export default function NavItem({ label, href, children }) {
  return (
    <Box>
      <Popover trigger="hover" placement="bottom-start">
        <PopoverTrigger>
          <Box>
            <RouterLink to={href || '#'}>
              <Box
                p={2}
                fontSize="sm"
                fontWeight={500}
                color={useColorModeValue('gray.900', 'teal.200')}
                _hover={{
                  textDecoration: 'none',
                  color: useColorModeValue('gray.300', 'teal.800'),
                }}
              >
                {label}
                {children && <Icon color={useColorModeValue('gray.900', 'teal.300')} w={5} h={5} as={ChevronDownIcon} />}
              </Box>
            </RouterLink>
          </Box>
        </PopoverTrigger>
        {children && (
          <PopoverContent
            border={0}
            boxShadow="xl"
            p={4}
            rounded="xl"
            minW="sm"
          >
            <Stack>
              {children.map((child) => (
                <RouterLink key={child.label} to={child.href}>
                  <Box
                    role="group"
                    display="block"
                    p={2}
                    rounded="md"
                    _hover={{ bg: useColorModeValue('gray.100', 'gray.900') }}
                    a={useColorModeValue(0, 0)}
                  >
                    <Stack direction="row" align="center">
                      <Box>
                        <Text
                          transition="all .3s ease"
                          _groupHover={{ color: useColorModeValue('gray.50', 'teal.600') }}
                          fontWeight={500}
                        >
                          {child.label}
                        </Text>
                        <Text>{child.subLabel}</Text>
                      </Box>
                      <Flex
                        transition="all .3s ease"
                        transform="translateX(-10px)"
                        opacity={0}
                        _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
                        justify="flex-end"
                        align="center"
                        flex={1}
                      >
                        <Icon color={useColorModeValue('gray.50', 'teal.600')} w={5} h={5} as={ChevronRightIcon} />
                      </Flex>
                    </Stack>
                  </Box>
                </RouterLink>
              ))}
            </Stack>
          </PopoverContent>
        )}
      </Popover>
    </Box>
  );
}
