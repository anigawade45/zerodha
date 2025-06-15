import React, { useState, useMemo } from "react";
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
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

// Accessible color palette
const accessibleColors = [
  '#1976d2', '#388e3c', '#fbc02d', '#d32f2f', '#7b1fa2', '#0288d1', '#c2185b', '#ffa000', '#388e3c', '#0288d1',
  '#f57c00', '#512da8', '#0097a7', '#afb42b', '#e64a19', '#455a64', '#0288d1', '#c2185b', '#ffa000', '#388e3c'
];

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "Holdings",
      font: { size: 18 },
      color: '#1976d2',
    },
    tooltip: {
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
    datalabels: {
      anchor: 'end',
      align: 'end',
      color: '#222',
      font: { weight: 'bold', size: 13 },
      formatter: (value) => `₹${value.toLocaleString()}`,
      display: function(context) {
        // Only show label if > 5% of max value
        const max = Math.max(...context.dataset.data);
        return value => value > 0.05 * max;
      },
    },
  },
  layout: {
    padding: { top: 10, bottom: 10, left: 10, right: 10 },
  },
  maintainAspectRatio: false,
  aspectRatio: 1.7,
  aria: {
    label: 'Holdings Bar Chart',
    role: 'img',
  },
};

function getStats(values) {
  if (!values.length) return { avg: 0, median: 0, min: 0, max: 0 };
  const sorted = [...values].sort((a, b) => a - b);
  const avg = sorted.reduce((a, b) => a + b, 0) / sorted.length;
  const median = sorted.length % 2 === 0
    ? (sorted[sorted.length / 2 - 1] + sorted[sorted.length / 2]) / 2
    : sorted[Math.floor(sorted.length / 2)];
  return {
    avg,
    median,
    min: sorted[0],
    max: sorted[sorted.length - 1],
  };
}

export function VerticalGraph({ data }) {
  const [sortBy, setSortBy] = useState("name-az");

  // Memoize sorted data for performance
  const sortedData = useMemo(() => {
    if (!data || !data.labels || !data.datasets || !data.datasets[0]) return data;
    const zipped = data.labels.map((label, i) => ({
      label,
      value: data.datasets[0].data[i],
    }));
    let sorted;
    if (sortBy === "name-az") {
      sorted = zipped.sort((a, b) => a.label.localeCompare(b.label));
    } else if (sortBy === "value-asc") {
      sorted = zipped.sort((a, b) => a.value - b.value);
    } else if (sortBy === "value-desc") {
      sorted = zipped.sort((a, b) => b.value - a.value);
    } else {
      sorted = zipped;
    }
    return {
      labels: sorted.map(z => z.label),
      datasets: [{
        ...data.datasets[0],
        data: sorted.map(z => z.value),
        backgroundColor: accessibleColors.slice(0, sorted.length),
      }],
    };
  }, [data, sortBy]);

  // Stats
  const stats = getStats(data.datasets[0].data);

  return (
    <div style={{ width: '100%', maxWidth: 600, margin: '0 auto', minHeight: 260, height: 320 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
        <label style={{ fontWeight: 500, color: '#1976d2' }}>Sort by:</label>
        <select value={sortBy} onChange={e => setSortBy(e.target.value)} style={{ padding: '0.2rem 0.7rem', borderRadius: 5, border: '1px solid #cfd8dc', fontSize: '1rem', background: '#f8fafc' }}>
          <option value="name-az">Name (A-Z)</option>
          <option value="value-asc">Value (Low-High)</option>
          <option value="value-desc">Value (High-Low)</option>
        </select>
      </div>
      <Bar
        options={options}
        data={sortedData}
        plugins={[ChartDataLabels]}
        aria-label="Holdings Bar Chart"
        role="img"
      />
      <div style={{ marginTop: 18, textAlign: 'center', color: '#1976d2', fontSize: '1.08rem', fontWeight: 500 }}>
        <span style={{ marginRight: 18 }}>Avg: ₹{stats.avg.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
        <span style={{ marginRight: 18 }}>Median: ₹{stats.median.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
        <span>Min: ₹{stats.min.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
        <span style={{ marginLeft: 18 }}>Max: ₹{stats.max.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
      </div>
    </div>
  );
}
