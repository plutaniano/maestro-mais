import moment from 'moment';

export const CATEGORIES = [
  { accessor: 'equity', pretty: 'Renda Variável' },
  { accessor: 'fixed_income', pretty: 'Renda Fixa' },
  { accessor: 'fund', pretty: 'Fundos' },
  { accessor: 'real_estate', pretty: 'FII' },
  { accessor: 'private_pension', pretty: 'Previdência' },
];

export const META = {
  roa: {
    maestro: {
      equity: 2.5,
      fixed_income: 0.5,
      fund: 0.3,
      real_estate: 0.16,
      private_pension: 0.25,
    },
    g20: {
      equity: 0.0,
      fixed_income: 0.0,
      fund: 0.0,
      real_estate: 0.0,
      private_pension: 0.0,
    },
  },
  patrimony: {
    maestro: {
      equity: 30.0,
      fixed_income: 35.0,
      fund: 25.0,
      real_estate: 5.0,
      private_pension: 5.0,
    },
    g20: {
      equity: 25.0,
      fixed_income: 25.0,
      fund: 27.0,
      real_estate: 8.0,
      private_pension: 10.0,
    },
  },
};

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
    value: '2021',
    pretty: '2021',
    params: {
      start: '2021-01-01',
      end: '2022-01-01',
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
];
