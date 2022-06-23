import { useReducer } from 'react';
import { Button, useColorModeValue } from '@chakra-ui/react';
import reducer, { initialState } from './reducer';

export default function RequestButton({ onClick }) {
  const [state, setState] = useReducer(reducer, initialState);

  function wrappedOnClick() {
    setState('loading');
    onClick()
      .then(() => setState('success'))
      .catch(() => setState('error'))
      .finally(() => setTimeout(setState, 2500));
  }

  return (
    <Button
      isLoading={state.isLoading}
      isActive={state.isActive}
      bg={useColorModeValue(...state.color)}
      onClick={() => wrappedOnClick()}
    >
      {state.text}
    </Button>
  );
}
