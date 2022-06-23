import { Button, Center, Stack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export default function Unauthorized() {
  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }

  return (
    <Center>
      <Stack>
        <p>Você não possui autorização para ver essa página</p>
        <Button onClick={() => goBack()}>Voltar</Button>
      </Stack>
    </Center>
  );
}
