import moment from 'moment';
import 'moment/locale/pt-br';
import 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import {
  theme, useColorModeValue, Flex, Heading,
} from '@chakra-ui/react';
import humanize from 'humanize-plus';
import Loading from '../../../components/Loading';

export default function DepositsChart({ isLoading, data }) {
  const chartOptions = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
      },
    },
    scales: {
      y: {
        ticks: {
          callback: (v) => humanize.compactInteger(v, 0),
        },
      },
    },
  };
  const chartData = {
    labels: data.map(({ month }) => moment(month).format('MMM/YY')),
    datasets: [
      {
        label: 'Captação líquida',
        data: data.map(({ liquid }) => liquid),
        backgroundColor: useColorModeValue(theme.colors.gray[800], 'white'),
      },
      {
        label: 'Meta',
        data: data.map(({ target }) => target),
        backgroundColor: useColorModeValue(theme.colors.green[800], 'green'),
      },
    ],
  };

  return (
    <>
      <Heading size="md">Captação</Heading>
      <Flex h="440px" align="center" justify="center">
        {isLoading
          ? <Loading />
          : (
            <Bar
              data={chartData}
              options={chartOptions}
            />
          )}
      </Flex>
    </>
  );
}
