import {
  Box, Image, useColorModeValue,
} from '@chakra-ui/react';
import smDark from '../../../assets/brand/sm_dark.png';
import smLight from '../../../assets/brand/sm_light.png';

export default function Brand() {
  return (
    <Box>
      <Image boxSize="38px" src={useColorModeValue(smDark, smLight)} />
    </Box>
  );
}
