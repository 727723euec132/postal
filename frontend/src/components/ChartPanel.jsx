// Chart panel using Chart.js for analytics visualizations.
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const ChartPanel = ({ title, labels, values }) => {
  const data = {
    labels,
    datasets: [
      {
        label: "Delay Probability",
        data: values,
        backgroundColor: "#1F2A44",
      },
    ],
  };

  const options = {
    plugins: { legend: { display: false } },
    scales: { y: { beginAtZero: true, max: 100 } },
  };

  return (
    <div className="card chart-panel">
      <h3>{title}</h3>
      <Bar data={data} options={options} />
    </div>
  );
};

export default ChartPanel;
