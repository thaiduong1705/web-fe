import React from 'react';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

import { Stacked, Pie, Button, JobItem, ReportCard, BarChart, ChartCard, LineChart } from '~/components';

import styles from './Homepage.module.css';
const Homepage = () => {
    const data = {
        labels: [...Array(7)].map((_, i) => {
            const d = new Date();
            d.setDate(d.getDate() - 6 + i);
            return d.toLocaleDateString();
        }),
        datasets: [
            {
                label: 'Thống kê',
                data: [5, 3, 7, 5, 8, 9, 2],
                backgroundColor: 'white',
                fontColor: 'white',
                borderColor: 'white',
            },
        ],
    };
    return (
        <div className="w-auto md:ml-96 h-screen">
            <div className="">
                <div className="grid gap-[24px] grid-cols-4 mx-[20px] my-[24px]">
                    <ReportCard />
                    <ReportCard />
                    <ReportCard />
                    <ReportCard />
                </div>
                <div className="my-[60px] mx-[20px] grid grid-cols-1 gap-y-[48px] gap-x-[24px] md:grid-cols-2 xl:grid-cols-3">
                    <ChartCard context={'Số bài đăng trong 7 ngày vừa qua'}>
                        <BarChart chartData={data} />
                    </ChartCard>
                    <ChartCard
                        context={'Số lượt ứng tuyển trong 7 ngày vừa qua'}
                        fromColor="from-pink-700"
                        toColor="to-pink-400"
                    >
                        <LineChart chartData={data} />
                    </ChartCard>
                    <ChartCard
                        context={'Số người ứng tuyển thành công trong 7 ngày vừa qua'}
                        fromColor="from-green-700"
                        toColor="to-green-400"
                    >
                        <LineChart chartData={data} />
                    </ChartCard>
                </div>
            </div>
        </div>
    );
};

export default Homepage;
