import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ReportCard, BarChart, ChartCard, LineChart } from '~/components';

import { getReports } from '~/store/action/report';
import Background from '../../image/grass.jpg';
import styles from './Homepage.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBuilding,
    faFile,
    faUsers,
    faFileLines,
    faFileCircleCheck,
    faFileCircleXmark,
    faCrown,
} from '@fortawesome/free-solid-svg-icons';
const Homepage = () => {
    const dispatch = useDispatch();

    // const dataPosts = {
    //     labels: [...Array(7)].map((_, i) => {
    //         const d = new Date();
    //         d.setDate(d.getDate() - 6 + i);
    //         return d.toLocaleDateString();
    //     }),
    //     datasets: [
    //         {
    //             label: 'Thống kê',
    //             data: [],
    //             backgroundColor: 'white',
    //             fontColor: 'white',
    //             borderColor: 'white',
    //         },
    //     ],
    // };

    // const dataSuccess = {
    //     labels: [...Array(7)].map((_, i) => {
    //         const d = new Date();
    //         d.setDate(d.getDate() - 6 + i);
    //         return d.toLocaleDateString();
    //     }),
    //     datasets: [
    //         {
    //             label: 'Thống kê',
    //             data: [],
    //             backgroundColor: 'white',
    //             fontColor: 'white',
    //             borderColor: 'white',
    //         },
    //     ],
    // };

    // const dataApplied = {
    //     labels: [...Array(7)].map((_, i) => {
    //         const d = new Date();
    //         d.setDate(d.getDate() - 6 + i);
    //         return d.toLocaleDateString();
    //     }),
    //     datasets: [
    //         {
    //             label: 'Thống kê',
    //             data: [],
    //             backgroundColor: 'white',
    //             fontColor: 'white',
    //             borderColor: 'white',
    //         },
    //     ],
    // };
    return (
        <div className="w-auto md:ml-96 h-[100%] pb-5">
            <div
                className="relative h-[200px] bg-local ml-[20px] mr-[24px] rounded-[8px]"
                style={{ backgroundImage: 'url(' + Background + ')' }}
            >
                <div className="absolute bg-[#00000080] h-[100%] w-[100%] rounded-[8px]"></div>
                <div className="absolute flex items-center justify-center h-[100%] w-[100%]">
                    <div className="text-slate-200 font-semibold text-[32px]">Ngày mới làm việc hiệu quả nhé, .</div>
                </div>
            </div>
            {/* <div className="grid gap-[24px] grid-cols-4 mx-[20px] my-[24px]">
                <ReportCard content={'Số lượng công ty'} icon={<FontAwesomeIcon icon={faBuilding} />} number={''} />
                <ReportCard
                    name="Tổng số bài tuyển dụng"
                    content={'Số lượng ứng viên'}
                    icon={<FontAwesomeIcon icon={faUsers} />}
                    number={''}
                />
                <ReportCard
                    content={'Tổng tin đăng hiện tại'}
                    className={'col-span-2'}
                    icon={<FontAwesomeIcon icon={faFile} name="Tổng số lượng ứng viên" />}
                    number={''}
                />
                <ReportCard
                    content={'Số lượng tin đăng hôm nay'}
                    icon={<FontAwesomeIcon icon={faFileLines} />}
                    name="Tổng số lượng nhà tuyển dụng"
                    number={''}
                />
                <ReportCard
                    content={'Số lượng tin đăng còn hạn'}
                    icon={<FontAwesomeIcon icon={faFileCircleCheck} />}
                    number={''}
                />
                <ReportCard
                    content={'Số lượng tin đăng đã ẩn'}
                    icon={<FontAwesomeIcon icon={faFileCircleXmark} />}
                    name="Tổng số lượt ứng tuyển"
                    number={''}
                />
            </div>
            <div className="my-[60px] mx-[20px] grid grid-cols-1 gap-y-[48px] gap-x-[24px] md:grid-cols-2 xl:grid-cols-3">
                <ChartCard context={'Số bài đăng trong 7 ngày vừa qua'}>
                    <BarChart chartData={''} />
                </ChartCard>
                <ChartCard
                    context={'Số lượt ứng tuyển trong 7 ngày vừa qua'}
                    fromColor="from-pink-700"
                    toColor="to-pink-400"
                >
                    <LineChart chartData={''} />
                </ChartCard>
                <ChartCard
                    context={'Số người ứng tuyển thành công trong 7 ngày vừa qua'}
                    fromColor="from-green-700"
                    toColor="to-green-400"
                >
                    <LineChart chartData={''} />
                </ChartCard>
            </div>

            <div className="relative my-[28px] mx-[20px] bg-white px-3 py-2 rounded-[8px] shadow-md">
                <div className="absolute flex items-center justify-center w-[500px] h-[48px] top-[-16px] bg-gradient-to-tr from-blue-600 to-blue-400 shadow-blue-500/40 shadow-lg overflow-hidden rounded-[8px] font-medium text-white">
                    Top lĩnh vực có số bài đăng nhiều nhất:
                </div>
                <table className="mt-14 w-[100%]">
                    <thead>
                        <tr className="">
                            <th
                                scope="col"
                                className="px-6 py-4 font-medium w-[50px] text-16 text-blue-600 text-left border-b-1 border-blue-gray-50"
                            ></th>
                            <th
                                scope="col"
                                className="px-6 py-4 font-medium w-[400px] text-16 text-blue-600 border-b-1 border-blue-gray-50 text-left"
                            >
                                Lĩnh vực
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-4 font-medium w-[400px] text-16 text-blue-600 border-b-1 border-blue-gray-50 text-left"
                            >
                                Số bài viết
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-4 font-medium text-16 text-blue-600 border-b-1 border-blue-gray-50 text-left"
                            >
                                Tỷ lệ %
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="">
                            <td className="py-7 px-5 border-b border-blue-gray-50 font-medium text-left bg-blue-700 text-white h-full">
                                <div className="flex justify-center items-center gap-2 text-yellow-400">
                                    <FontAwesomeIcon icon={faCrown}></FontAwesomeIcon>1
                                </div>
                            </td>
                            <td className="py-7 px-5 border-b border-blue-gray-50 font-medium text-left bg-blue-700 text-white"></td>
                            <td className="py-7 px-5 border-b border-blue-gray-50 font-medium text-left bg-gradient-to-r from-blue-700 text-white"></td>
                            <td className="py-7 px-5 border-b border-blue-gray-50 font-medium text-left">
                                <div className="w-[300px]">
                                    <p className="antialiased font-sans mb-1 block text-[12px] font-medium text-blue-gray-600">
                                        20%
                                    </p>
                                    <div className="flex flex-start bg-slate-200 overflow-hidden w-full rounded-[8px] font-sans text-xs font-medium h-2">
                                        <div
                                            className="flex justify-center items-center h-full bg-gradient-to-tr from-blue-600 to-blue-400 text-white"
                                            style={{ width: 20 + '%' }}
                                        ></div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="">
                            <td className="py-7 px-5 border-b border-blue-gray-50  font-medium text-left bg-green-500 text-white">
                                <div className="flex justify-center items-center gap-2 text-slate-200">
                                    <FontAwesomeIcon icon={faCrown}></FontAwesomeIcon>2
                                </div>
                            </td>
                            <td className="py-7 px-5 border-b border-blue-gray-50 font-medium text-left bg-green-500 text-white"></td>
                            <td className="py-7 px-5 border-b border-blue-gray-50 font-medium text-left bg-gradient-to-r from-green-500 text-white"></td>
                            <td className="py-7 px-5 border-b border-blue-gray-50 font-medium text-left">
                                <div className="w-[300px]">
                                    <p className="antialiased font-sans mb-1 block text-[12px] font-medium text-blue-gray-600">
                                        20%
                                    </p>
                                    <div className="flex flex-start bg-slate-200 overflow-hidden w-full rounded-[8px] font-sans text-xs font-medium h-2">
                                        <div
                                            className="flex justify-center items-center h-full bg-gradient-to-tr from-blue-600 to-blue-400 text-white"
                                            style={{ width: 20 + '%' }}
                                        ></div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="bg-gradient-to-r ">
                            <td className="py-7 px-5 border-b border-blue-gray-50 font-medium text-left bg-green-500 text-white">
                                <div className="flex justify-center items-center gap-2 text-amber-600">
                                    <FontAwesomeIcon icon={faCrown}></FontAwesomeIcon>3
                                </div>
                            </td>
                            <td className="py-7 px-5 border-b border-blue-gray-50 font-medium text-left bg-green-500 text-white"></td>
                            <td className="py-7 px-5 border-b border-blue-gray-50 font-medium text-left bg-gradient-to-r from-green-500 text-white"></td>
                            <td className="py-7 px-5 border-b border-blue-gray-50 font-medium text-left">
                                <div className="w-[300px]">
                                    <p className="antialiased font-sans mb-1 block text-[12px] font-medium text-blue-gray-600">
                                        20%
                                    </p>
                                    <div className="flex flex-start bg-slate-200 overflow-hidden w-full rounded-[8px] font-sans text-xs font-medium h-2">
                                        <div
                                            className="flex justify-center items-center h-full bg-gradient-to-tr from-blue-600 to-blue-400 text-white"
                                            style={{ width: 20 + '%' }}
                                        ></div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="py-7 px-5 border-b border-blue-gray-50 text-left">4</td>
                            <td className="py-7 px-5 border-b border-blue-gray-50 text-left"></td>
                            <td className="py-7 px-5 border-b border-blue-gray-50 text-left"></td>
                            <td className="py-7 px-5 border-b border-blue-gray-50 text-left">
                                <div className="w-[300px]">
                                    <p className="antialiased font-sans mb-1 block text-[12px] font-medium text-blue-gray-600">
                                        20%
                                    </p>
                                    <div className="flex flex-start bg-slate-200 overflow-hidden w-full rounded-[8px] font-sans text-xs font-medium h-2">
                                        <div
                                            className="flex justify-center items-center h-full bg-gradient-to-tr from-blue-600 to-blue-400 text-white"
                                            style={{ width: 20 + '%' }}
                                        ></div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="py-7 px-5 text-left">5</td>
                            <td className="py-7 px-5 text-left"></td>
                            <td className="py-7 px-5 text-left"></td>
                            <td className="py-7 px-5 text-left">
                                <div className="w-[300px]">
                                    <p className="antialiased font-sans mb-1 block text-[12px] font-medium text-blue-gray-600">
                                        20%
                                    </p>
                                    <div className="flex flex-start bg-slate-200 overflow-hidden w-full rounded-[8px] font-sans text-xs font-medium h-2">
                                        <div
                                            className="flex justify-center items-center h-full bg-gradient-to-tr from-blue-600 to-blue-400 text-white"
                                            style={{ width: 20 + '%' }}
                                        ></div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div> */}
        </div>
    );
};

export default Homepage;
