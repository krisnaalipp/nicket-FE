import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
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
      label: "Upcoming Matches",
      data: [
        1000, 400, 700, 400, 200, 800, 900, 500, 600, 700, 800, 700, 800, 400,
        200, 400, 500, 600, 700, 800, 400, 200, 400, 500, 600, 700, 800, 700,
        800, 400,
      ],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export default function UpcomingMatchChart() {
  return <Line options={options} data={data} />;
}
