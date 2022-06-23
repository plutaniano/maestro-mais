import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import {
  Flex, Heading, useColorModeValue, theme,
} from '@chakra-ui/react';
import Humanize from 'humanize-plus';
import Loading from '../../../components/Loading';

export default function ParetoDistribution({ data, isLoading }) {
  const chartOptions = {
    maintainAspectRatio: false,
    scales: {
      receita_acumulada: {
        position: 'right',
        beginAtZero: true,
        grid: { display: false },
        ticks: { callback: (v) => `${v}%` },
        title: {
          display: true,
          text: 'Receita acumulada',
        },
      },
      receita: {
        ticks: { callback: (v) => Humanize.compactInteger(v) },
        position: 'left',
        title: {
          display: true,
          text: 'Receita',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Top 20 Clientes por Receita',
        },
      },
    },
    plugins: {
      tooltip: {
        mode: 'index',
        position: 'nearest',
        callbacks: {
          label: (ctx) => {
            if (ctx.dataset.yAxisID === 'receita') {
              return `Receita: R$${Humanize.intComma(ctx.raw)}`;
            }
            return `Receita acumulada: ${Humanize.intComma(ctx.raw, 1)}%`;
          },
        },
      },
    },
  };

  let sum = 0;
  const chartData = {
    labels: Array.from(Array(data.top_clients.length + 1).keys()).slice(1),
    datasets: [
      {
        type: 'line',
        label: 'Receita acumulada (%)',
        data: data.top_clients.map((v) => {
          sum += v.revenue.total;
          return (100 * sum) / data.revenue.total;
        }),
        backgroundColor: useColorModeValue(theme.colors.gray[800], 'white'),
        yAxisID: 'receita_acumulada',
      },
      {
        type: 'bar',
        label: 'Receita',
        data: data.top_clients.map((v) => (v.revenue.total)),
        backgroundColor: useColorModeValue(theme.colors.gray[800], 'white'),
        yAxisID: 'receita',
      },
    ],
  };

  return (
    <>
      <Heading size="md">Distribuição de Pareto</Heading>
      {isLoading
        ? <Loading />
        : (
          <Flex h="400px" align="center" justify="center">
            <Chart
              data={chartData}
              options={chartOptions}
            />
          </Flex>
        )}
    </>
  );
}
