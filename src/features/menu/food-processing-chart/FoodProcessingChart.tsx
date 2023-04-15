
import React from 'react';
import 'chart.js/auto';
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { PolarArea } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);
export const FoodProcessingChart = () => {

    const options = {
        maintainAspectRatio: true,
        cutout:140,
        responsive: true,
        plugins: {
          legend: {
            display: false,
            // position: "bottom" as const,
            // align: "start" as const,
            // labels: {
            //   padding: 10 
            // }
          },
          title: {
            display: false,
            text: "Chart.js Horizontal Bar Chart"
          }
        }
    }

    const CHART_COLORS = {
        red: 'rgb(255, 99, 132)',
        orange: 'rgb(255, 159, 64)',
        yellow: 'rgb(255, 205, 86)',
        green: 'rgb(75, 192, 192)',
        blue: 'rgb(54, 162, 235)',
        purple: 'rgb(153, 102, 255)',
        grey: 'rgb(201, 203, 207)'
      }
const data = {
  labels: ['Raw', 'Home cooked', 'Lightly processed', 'Processed'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5],
      backgroundColor: [
        CHART_COLORS.green,
        CHART_COLORS.orange,
        CHART_COLORS.purple,
        CHART_COLORS.red,
      ],
      borderWidth: 1,
    },
  ],
};
    return (
        <>
        <PolarArea data={data} options={options} />
        </>
    )
}