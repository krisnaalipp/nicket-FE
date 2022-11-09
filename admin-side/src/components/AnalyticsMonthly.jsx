import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Daily Reports",
    },
  },
};

const labels = new Array(30).fill("").map((_, i) => i + 1);

export const data = {
  labels,
  datasets: [
    {
      label: "Total Daily Sales",
      data: [
        400, 200, 400, 500, 600, 700, 800, 400, 200, 400, 500, 600, 700, 800,
        400, 200, 400, 500, 600, 700, 800, 700, 800, 400, 500, 600, 700, 800,
        700, 800,
      ],
      backgroundColor: "yellow",
    },
  ],
};

export default function AnalyticsMonthly() {
  return <Bar options={options} data={data} />;
}
