import React from "react";
import { Chart as ChartJS, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, ChartDataLabels);

// Utility to darken a hex color
function darkenColor(hex, amount = 0.4) {
  // hex: #RRGGBB
  let r = parseInt(hex.slice(1, 3), 16);
  let g = parseInt(hex.slice(3, 5), 16);
  let b = parseInt(hex.slice(5, 7), 16);
  r = Math.floor(r * (1 - amount));
  g = Math.floor(g * (1 - amount));
  b = Math.floor(b * (1 - amount));
  return `rgb(${r}, ${g}, ${b})`;
}

export function DoughnutChart({ data }) {
  const options = {
    plugins: {
      datalabels: {
        color: function(context) {
          const color = context.dataset.backgroundColor[context.dataIndex];
          // If color is a hex, darken it
          if (typeof color === 'string' && color.startsWith('#')) {
            return darkenColor(color, 0.9);
          }
          return color;
        },
        font: { weight: 'bold', size: 14 },
        formatter: (value, context) => {
          const total = context.chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
          const percent = ((value / total) * 100).toFixed(1);
          return `${percent}%`;
        },
        display: function(context) {
          // Only show label if > 5%
          const total = context.chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
          return (value => (value / total) * 100 > 5)(context.dataset.data[context.dataIndex]);
        },
      },
      legend: {
        display: true,
        position: 'top',
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: function(context) {
            const label = context.label || '';
            const value = context.raw;
            const total = context.dataset.data.reduce((a, b) => a + b, 0);
            const percent = ((value / total) * 100).toFixed(1);
            return `${label}: ₹${value.toLocaleString()} (${percent}%)`;
          }
        }
      },
    },
    cutout: '70%',
    maintainAspectRatio: false,
    aspectRatio: 1.2,
  };

  return (
    <div style={{ width: '100%', maxWidth: 420, margin: '0 auto', minHeight: 340 }}>
      <Doughnut
        data={data}
        options={options}
        plugins={[ChartDataLabels]}
      />
    </div>
  );
}

// Example usage data for correct per-segment coloring
export const sampleDoughnutData = {
  labels: ['APOLLOHOSP', 'ASIANPAINT', 'COALINDIA', 'ADANIPORTS', 'CIPLA', 'INFY'],
  datasets: [{
    data: [120, 80, 150, 30, 200, 40],
    backgroundColor: [
      '#f7b6b2', // APOLLOHOSP
      '#aec7e8', // ASIANPAINT
      '#ffe699', // COALINDIA
      '#b2dfdb', // ADANIPORTS
      '#c5b0d5', // CIPLA
      '#fdbf6f', // INFY
    ],
  }]
};
