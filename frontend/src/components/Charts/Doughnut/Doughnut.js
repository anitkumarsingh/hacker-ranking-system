import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const DoughnutChart = ({ labelData, value, heading }) => {
  const data = {
    labels: labelData,
    datasets: [
      {
        label: heading,
        data: value,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }
    ]
  };
  return (
    <div style={{ width: '315px', height: 'auto', textAlign: 'center' }}>
      <Doughnut data={data} height={315} width={315} />
    </div>
  );
};

export default DoughnutChart;
