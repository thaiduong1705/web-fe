import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart } from 'chart.js';

const BarChart = ({ chartData }) => {
    return (
        <Bar
            data={chartData}
            options={{
                responsive: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                    },
                },
            }}
            redraw={true}
        />
    );
};

export default BarChart;
