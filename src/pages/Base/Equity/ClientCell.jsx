import {
  Box, Popover, PopoverTrigger, Button, Text, IconButton, useClipboard,
  PopoverContent, PopoverArrow, PopoverBody, VStack, HStack, useColorModeValue, Link,
} from '@chakra-ui/react';
import { BsWhatsapp, BsFillCaretDownFill } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { MdContentCopy } from 'react-icons/md';

export default function ClientCell({
  repeat, email, id, name,
}) {
  const { onCopy: copyEmail } = useClipboard(email);
  const { onCopy: copyName } = useClipboard(name);
  const { onCopy: copyId } = useClipboard(id);

  if (repeat) {
    return null;
  }

  return (
    <Box>
      <Popover>
        <HStack>
          <BsFillCaretDownFill />
          <PopoverTrigger>
            <Button
              size="sm"
              variant="outline"
            >
              {id}
            </Button>
          </PopoverTrigger>
        </HStack>
        <PopoverContent>
          <PopoverArrow />
          <PopoverBody>
            <VStack>
              <HStack>
                <Text>{id}</Text>
                <IconButton
                  size="xs"
                  onClick={copyId}
                  icon={<MdContentCopy />}
                />
              </HStack>
              <HStack>
                <Text>{name}</Text>
                <IconButton
                  size="xs"
                  onClick={copyName}
                  icon={<MdContentCopy />}
                />
              </HStack>
              <HStack>
                <Text>{email}</Text>
                <IconButton
                  size="xs"
                  onClick={copyEmail}
                  icon={<MdContentCopy />}
                />
              </HStack>
              <Box>
                <HStack>
                  <IconButton
                    size="xs"
                    colorScheme="whatsapp"
                    icon={<BsWhatsapp />}
                  />
                  <Link href={`mailto:${email}`}>
                    <IconButton
                      size="xs"
                      colorScheme="blue"
                      icon={<HiOutlineMail />}
                    />
                  </Link>
                  <Link target="_blank" href={`https://hub.xpi.com.br/rede/#/customers/${btoa(id)}/consolidated-position`}>
                    <IconButton
                      size="xs"
                      bg={useColorModeValue('gray.800', 'teal.300')}
                      variant="outline"
                      icon={(
                        <Text
                          fontSize="10px"
                          color={useColorModeValue('teal.300', 'gray.800')}
                        >
                          HUB
                        </Text>
                      )}
                    />
                  </Link>
                </HStack>
              </Box>
            </VStack>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  );
}
