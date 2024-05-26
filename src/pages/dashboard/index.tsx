import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import TitlePage from '@/components/TitlePage';

export default function Dashboard() {
  const [lineSeries] = useState([
    {
      name: 'TEAM A',
      type: 'column',
      data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
    },
    {
      name: 'TEAM B',
      type: 'area',
      data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
    },
    {
      name: 'TEAM C',
      type: 'line',
      data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
    },
  ]);

  const [lineOptions] = useState<ApexOptions>({
    chart: {
      height: 350,
      type: 'line', // Corrigido para o tipo específico
      stacked: false,
    },
    stroke: {
      width: [0, 2, 5],
      curve: 'smooth',
    },
    plotOptions: {
      bar: {
        columnWidth: '50%',
      },
    },
    fill: {
      opacity: [0.85, 0.25, 1],
      gradient: {
        inverseColors: false,
        shade: 'light',
        type: 'vertical',
        opacityFrom: 0.85,
        opacityTo: 0.55,
        stops: [0, 100, 100, 100],
      },
    },
    labels: [
      '01/01/2003',
      '02/01/2003',
      '03/01/2003',
      '04/01/2003',
      '05/01/2003',
      '06/01/2003',
      '07/01/2003',
      '08/01/2003',
      '09/01/2003',
      '10/01/2003',
      '11/01/2003',
    ],
    markers: {
      size: 0,
    },
    xaxis: {
      type: 'datetime',
    },
    yaxis: {
      title: {
        text: 'Points',
      },
      min: 0,
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y: number) {
          if (typeof y !== 'undefined') {
            return y.toFixed(0) + ' points';
          }
          return y;
        },
      },
    },
  });

  const [donutSeries] = useState<number[]>([44, 55, 13, 43, 22]);

  const [donutOptions] = useState<ApexOptions>({
    chart: {
      height: 350,
      type: 'donut',
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: 'bottom',
        },
      },
    }],
    labels: ['TEAM A', 'TEAM B', 'TEAM C', 'TEAM D', 'TEAM E'], // Adicionei rótulos para o gráfico donut
  });
  
  return (
    <main>
      <TitlePage title="Dashboard"/>
      <ReactApexChart options={lineOptions} series={lineSeries} type="line" height={350} />
      <ReactApexChart options={donutOptions} series={donutSeries} type="donut" height={350} />
    </main>
  );
}
