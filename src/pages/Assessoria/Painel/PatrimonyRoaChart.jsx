import moment from 'moment';
import 'moment/locale/pt-br';
import 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import humanize from 'humanize-plus';
import {
  theme, useColorModeValue, Flex, Heading,
} from '@chakra-ui/react';
import Loading from '../../../components/Loading';

const { gray, orange } = theme.colors;

export default function PatrimonyRoaChart({ isLoading, data }) {
  const chartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      patrimony: {
        position: 'left',
        ticks: {
          callback: (v) => humanize.compactInteger(v, 0),
        },
      },
      roa: {
        position: 'right',
        ticks: {
          callback: (v) => `${v}%`,
        },
        grid: {
          drawOnChartArea: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  const chartData = {
    labels: data.map((i) => moment(i.month).format('MMM/YY')),
    datasets: [
      {
        type: 'line',
        label: 'ROA',
        data: data.map((i) => i.roa.total),
        backgroundColor: useColorModeValue(orange[500], orange[500]),
        yAxisID: 'roa',
      },
      {
        type: 'bar',
        label: 'Patrimônio',
        data: data.map((i) => i.patrimony.total),
        backgroundColor: useColorModeValue(gray[800], 'white'),
        yAxisID: 'patrimony',
      }],
  };

  return (
    <>
      <Heading size="md">Patrimônio & ROA</Heading>
      <Flex align="center" justify="center" h="440px">
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
