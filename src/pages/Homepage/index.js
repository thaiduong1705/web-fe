import React from 'react';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

import { Stacked, Pie, Button, JobItem, ReportCard, BarChart, ChartCard, LineChart } from '~/components';

import Background from '../../image/grass.jpg';
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
                <div
                    className="relative h-[200px] bg-local ml-[20px] mr-[24px] rounded-[8px]"
                    style={{ backgroundImage: 'url(' + Background + ')' }}
                >
                    <div className="absolute bg-[#00000080] h-[100%] w-[100%] rounded-[8px]"></div>
                    <div className="absolute flex items-center justify-center h-[100%] w-[100%]">
                        <div className="text-slate-200 font-semibold text-[32px]">
                            Ngày mới làm việc hiệu quả nhé, user.
                        </div>
                    </div>
                </div>
                <div className="grid gap-[24px] grid-cols-4 mx-[20px] my-[24px]">
                    <ReportCard name="Tổng số bài tuyển dụng" />
                    <ReportCard name="Tổng số lượng ứng viên" />
                    <ReportCard name="Tổng số lượng nhà tuyển dụng" />
                    <ReportCard name="Tổng số lượt ứng tuyển" />
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
