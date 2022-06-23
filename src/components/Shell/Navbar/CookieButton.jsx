import {
  IconButton, PopoverArrow, PopoverContent, PopoverTrigger, Box, Tag, TagLabel, Link,
  useBoolean, useColorModeValue, Popover, PopoverBody, Center, Button, useDisclosure,
  VStack, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody,
} from '@chakra-ui/react';
import moment from 'moment';
import { BiCookie } from 'react-icons/bi';
import { MdDragIndicator } from 'react-icons/md';

const CODE = 'javascript:alert(1)';

export default function CookieButton({ ...props }) {
  const [status, setStatus] = useBoolean(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const EXPIRATION = status ? '2022-03-31T22:00:00Z' : '2022-03-31T07:00:00Z';
  return (
    <>
      <Popover>
        <PopoverTrigger>
          <IconButton
            {...props}
            icon={<BiCookie />}
            onClick={setStatus.toggle}
            bg={status
              ? useColorModeValue('red.300', 'red.600')
              : useColorModeValue('green.300', 'green.600')}
          />
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverBody>
            <Center>
              <VStack w="100%">
                <Box>
                  {status
                    ? `O cookie irá expirar ${moment(EXPIRATION).fromNow()}.`
                    : `O cookie expirou ${moment(EXPIRATION).fromNow()}.`}
                </Box>
                <Button
                  w="100%"
                  size="sm"
                  onClick={onOpen}
                >
                  O que são cookies?
                </Button>
              </VStack>
            </Center>
          </PopoverBody>
        </PopoverContent>
      </Popover>
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>O que são cookies?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Link cursor="move" href={CODE}>
              <Tag size="lg">
                <MdDragIndicator />
                <TagLabel>CookieSender 0.2</TagLabel>
              </Tag>
            </Link>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
