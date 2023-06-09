import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const LineChart = ({ chartData }) => {
    return (
        <Line
            data={chartData}
            width={'100%'}
            height={'100%'}
            options={{
                maintainAspectRatio: false,
                layout: {
                    padding: 12,
                },
                responsive: true,
                scales: {
                    y: {
                        grid: {
                            drawBorder: true,
                            color: '#FFFFFF',
                        },
                        ticks: {
                            beginAtZero: false,
                            color: 'white',
                            fontSize: 12,
                            display: true,
                        },
                    },
                    x: {
                        grid: {
                            drawBorder: true,
                            color: '#FFFFFF',
                        },
                        ticks: {
                            beginAtZero: false,
                            color: 'white',
                            fontSize: 12,
                            display: true,
                        },
                    },
                },
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: 'white',
                            textAlign: 'center',
                        },
                    },
                    title: {
                        color: 'white',
                    },
                },
            }}
            redraw={true}
        />
    );
};

export default LineChart;
