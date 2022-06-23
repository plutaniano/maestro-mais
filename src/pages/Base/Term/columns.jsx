import AdvisorCell from '../Equity/AdvisorCell';

export const COLUMNS = [
  {
    Header: 'Cliente',
    accessor: 'xp_account.id',
  },
  {
    Header: 'Assessor',
    accessor: 'xp_account.advisor',
    Cell: ({ value }) => <AdvisorCell {...value} />,
  },
  {
    Header: 'Ticker',
    accessor: 'ticker',
  },
  {
    Header: 'Performance',
    accessor: 'performance',
  },
  {
    Header: 'Financeiro',
    accessor: 'financial',
  },
  {
    Header: 'Cotação',
    accessor: 'quote',
  },
  {
    Header: 'Quantidade',
    accessor: 'quantity',
  },
  {
    Header: 'Quantidade Disponível',
    accessor: 'available',
  },
  {
    Header: 'Custo Médio',
    accessor: 'average_cost',
  },
];

export const GROUPED_COLUMNS = [
];
