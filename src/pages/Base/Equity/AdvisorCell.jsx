import { MdContentCopy } from 'react-icons/md';
import { BsSlack } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import {
  Popover, Button, PopoverContent, PopoverTrigger, Box, VStack, HStack, Text,
  IconButton, Link, useClipboard, PopoverBody, PopoverArrow, Avatar,
} from '@chakra-ui/react';

export default function AdvisorCell({
  first_name: firstName,
  last_name: lastName,
  advisor_id: advisorId,
  email,
  slack,
  avatar,
}) {
  const name = `${firstName} ${lastName}`;
  const { onCopy: copyEmail } = useClipboard(email);
  const { onCopy: copyName } = useClipboard(name);
  const { onCopy: copyAdvisorId } = useClipboard(advisorId);
  return (
    <Box>
      <Popover>
        <PopoverTrigger>
          <Button
            size="sm"
            variant="outline"
          >
            <HStack>
              <Avatar size="xs" src={avatar} />
              <Text>
                {firstName}
              </Text>
            </HStack>
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverBody>
            <VStack>
              <HStack>
                <Text>{advisorId}</Text>
                <IconButton
                  size="xs"
                  onClick={copyAdvisorId}
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
                  <Link href={`slack://user?team=T01PL5F7Q3E&id=${slack}`}>
                    <IconButton
                      size="xs"
                      bgColor="#611f69"
                      icon={<BsSlack />}
                    />
                  </Link>
                  <Link href={`mailto:${email}`}>
                    <IconButton
                      size="xs"
                      colorScheme="blue"
                      icon={<HiOutlineMail />}
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
