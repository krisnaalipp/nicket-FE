import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const dataAvailableSeats = 400;

export const data = {
  labels: ["Sold Out", "Available"],
  datasets: [
    {
      label: "# of Votes",
      data: [500 - dataAvailableSeats, dataAvailableSeats],
      backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(255, 206, 86, 0.2)"],
      borderColor: ["rgba(255, 99, 132, 1)", "rgba(75, 192, 192, 1)"],
      borderWidth: 1,
    },
  ],
};

export default function SalesChart() {
  return <Pie data={data} />;
}
