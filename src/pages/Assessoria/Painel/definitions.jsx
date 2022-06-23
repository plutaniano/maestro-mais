import moment from 'moment';

export const PAGE_TITLE = 'Painel';
export const PAGE_DESCRIPTION = 'Informações sobre o patrimônio total da sua carteira, captação e receita.';
export const PERIODS = [
  {
    value: 'last_12',
    pretty: 'Últimos 12 meses',
    params: {
      start: moment().startOf('month').subtract(1, 'year').format('YYYY-MM-DD'),
      end: moment().startOf('moment').format('YYYY-MM-DD'),
    },
  },
  {
    value: 'last_6',
    pretty: 'Últimos 6 meses',
    params: {
      start: moment().startOf('month').subtract(6, 'months').format('YYYY-MM-DD'),
      end: moment().startOf('moment').format('YYYY-MM-DD'),
    },
  },
  {
    value: 'last_3',
    pretty: 'Últimos 3 meses',
    params: {
      start: moment().startOf('month').subtract(3, 'months').format('YYYY-MM-DD'),
      end: moment().startOf('moment').format('YYYY-MM-DD'),
    },
  },
  {
    value: '2022',
    pretty: '2022',
    params: {
      start: '2022-01-01',
      end: '2023-01-01',
    },
  },
  {
    value: '2021',
    pretty: '2021',
    params: {
      start: '2021-01-01',
      end: '2022-01-01',
    },
  },
];
