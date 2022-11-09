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
      text: "DailyReports",
    },
  },
};

// const labels = new Array(30).fill("").map((_, i) => i + 1);

// export const data = {
//   labels,
//   datasets: [
//     {
//       label: "Previous Matches",
//       data: [500, 300, 200, 1000, 400, 600, 700],
//       borderColor: "rgb(255, 99, 132)",
//       backgroundColor: "rgba(255, 99, 132, 0.5)",
//     },
//   ],
// };

export default function ChartPreviousMatch(prop) {
  return <Line options={options} data={prop.data} />;
}
