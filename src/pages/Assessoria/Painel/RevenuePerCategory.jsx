import moment from 'moment';
import 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import humanize from 'humanize-plus';
import {
  theme, useColorModeValue, Heading, Flex,
} from '@chakra-ui/react';
import Loading from '../../../components/Loading';

const {
  red, orange, yellow, green, cyan, purple, blue,
} = theme.colors;
const [LIGHT, DARK] = [900, 300];

export default function RevenuePerCategoryChart({ isLoading, data }) {
  const chartOptions = {
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        ticks: {
          callback: (v) => humanize.compactInteger(v, 0),
        },
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
  };
  const chartData = {
    labels: data.map((i) => moment(i.month).format('MMM/YY')),
    datasets: [
      {
        label: 'RV',
        data: data.map((i) => i.revenue.equity),
        backgroundColor: useColorModeValue(red[LIGHT], red[DARK]),
      },
      {
        label: 'RF',
        data: data.map((i) => i.revenue.fixed_income),
        backgroundColor: useColorModeValue(orange[LIGHT], orange[DARK]),
      },
      {
        label: 'Fundos',
        data: data.map((i) => i.revenue.fund),
        backgroundColor: useColorModeValue(yellow[LIGHT], yellow[DARK]),
      },
      {
        label: 'COE',
        data: data.map((i) => i.revenue.coe),
        backgroundColor: useColorModeValue(green[LIGHT], green[DARK]),
      },
      {
        label: 'FII',
        data: data.map((i) => i.revenue.real_estate),
        backgroundColor: useColorModeValue(cyan[LIGHT], cyan[DARK]),
      },
      {
        label: 'Seguros',
        data: data.map((i) => i.revenue.insurance),
        backgroundColor: useColorModeValue(purple[LIGHT], purple[DARK]),
      },
      {
        label: 'Previdência',
        data: data.map((i) => i.revenue.private_pension),
        backgroundColor: useColorModeValue(blue[LIGHT], blue[DARK]),
      },
    ],
  };

  return (
    <>
      <Heading size="md">Receita por Categoria</Heading>
      <Flex h="440px" justify="center" align="center">
        {isLoading
          ? <Loading />
          : (
            <Bar
              height="480px"
              data={chartData}
              options={chartOptions}
            />
          )}
      </Flex>
    </>
  );
}
