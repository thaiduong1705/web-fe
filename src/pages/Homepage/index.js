import React from 'react';

import { ReportCard, BarChart, ChartCard, LineChart } from '~/components';

import styles from './Homepage.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faFile, faUsers } from '@fortawesome/free-solid-svg-icons';
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
        <div className="w-auto md:ml-96 h-full">
            <div className="h-[150px] text-[32px] flex justify-center items-center bg-white rounded-[8px] font-medium">
                Thống kê
            </div>
            <div className="grid gap-[24px] grid-cols-4 mx-[32px] my-[24px]">
                <ReportCard content={'Số lượng công ty'} icon={<FontAwesomeIcon icon={faBuilding} />} />
                <ReportCard content={'Số lượng ứng viên'} icon={<FontAwesomeIcon icon={faUsers} />} />
                <ReportCard
                    content={'Tổng tin đăng hiện tại'}
                    className={'col-span-2'}
                    icon={<FontAwesomeIcon icon={faFile} />}
                />
                <ReportCard content={'Số lượng tin đăng hôm nay'} icon={<FontAwesomeIcon icon={faFile} />} />
                <ReportCard content={'Số lượng tin đăng còn hạn'} icon={<FontAwesomeIcon icon={faFile} />} />
                <ReportCard content={'Số lượng tin đăng đã ẩn'} icon={<FontAwesomeIcon icon={faFile} />} />
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

            <div className="my-[28px] mx-[32px]">
                <span>Top các lĩnh vực có bài tuyển dụng nhiều nhất</span>
                <div>Top1:</div>
                <div>Top2:</div>
                <div>Top3:</div>
                <div>Top4:</div>
                <div>Top5:</div>
            </div>
        </div>
    );
};

export default Homepage;
