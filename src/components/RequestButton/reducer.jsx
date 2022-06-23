export const initialState = {
  text: 'Salvar',
  color: [null, null],
  isLoading: false,
  isActive: true,
};

export default function reducer(state, action) {
  switch (action) {
    case 'success':
      return {
        text: 'Salvo!',
        color: ['green.200', 'green.800'],
        isLoading: false,
        isActive: false,
      };
    case 'error':
      return {
        text: 'Erro',
        color: ['red.200', 'red.800'],
        isLoading: false,
        isActive: false,
      };
    case 'loading':
      return {
        text: '',
        color: [null, null],
        isLoading: true,
        isActive: false,
      };
    default:
      return initialState;
  }
}
