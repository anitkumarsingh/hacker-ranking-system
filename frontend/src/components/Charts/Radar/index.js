import React from 'react';
import { Radar } from 'react-chartjs-2';

const RadarChart = ({ labelData, value, heading }) => {
  const data = {
    labels: labelData,
    datasets: [
      {
        label: '# of Votes',
        data: value,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      }
    ]
  };

  const options = {
    scale: {
      ticks: { beginAtZero: true }
    }
  };
  return <Radar data={data} options={options} />;
};

export default RadarChart;
