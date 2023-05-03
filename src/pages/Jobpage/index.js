import { Button } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Combobox, JobItem } from '~/components';
const Jobpage = () => {
    return (
        <div className="w-1024 h-auto m-auto clear-both">
            <div className="bg-blue-500 text-black">
                <div className="px-[14px] py-[20px] flex gap-[10px] h-[80px]">
                    <span className="text-[16px] text-white leading-[32px] block">Tìm việc</span>
                    <input
                        className="w-[30%] h-[35px] border-solid border-1 rounded-[4px] border-transparent outline-none"
                        placeholder="Nhập từ khoá tìm kiếm"
                    />
                    <Combobox
                        title="Chọn kinh nghiệm"
                        className="w-[200px] h-[35px]"
                        items={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
                    />
                    <Combobox title="Chọn quận huyện" className="w-[200px] h-[35px]" />
                    <button className="w-[15%] cursor-pointer bg-slate-500 text-white h-[35px]">Tìm kiếm</button>
                </div>
                <div className="px-[15px] pb-[20px] flex flex-wrap gap-[10px]">
                    <Combobox title="Cấp bậc" className="w-[240px] " />
                    <Combobox title="Cấp bậc" className="w-[240px]" />
                    <Combobox title="Cấp bậc" className="w-[240px] " />
                    <Combobox title="Cấp bậc" className="w-[240px]  " />
                    <Combobox title="Cấp bậc" className="w-[240px]  " />
                    <Combobox title="Cấp bậc" className="w-[240px] " />
                    <Combobox title="Cấp bậc" className="w-[240px] " />
                    <Combobox title="Cấp bậc" className="w-[240px]  " />
                </div>
            </div>
            <div className="w-full flex  flex-col justify-center h-auto rounded-[3px] mt-[8px] bg-gray-200 p-[8px] max-h-[800px]">
                <div className="flex justify-between">
                    <p className="text-[16px] font-medium leading-[32px]">Danh sách việc làm</p>
                    <Link
                        to="/"
                        className="bg-blue-600 text-white rounded-[4px] border-transparent border-1 flex items-center p-[4px]"
                    >
                        Tạo mới bài tuyển dụng
                    </Link>
                </div>
                <div>
                    <JobItem
                        job={{ name: 'test', companyName: 'Công ty TNHH TEST', salary: -1, endDate: '24/10/2002' }}
                    />
                    <JobItem
                        job={{ name: 'test', companyName: 'Công ty TNHH TEST', salary: -1, endDate: '24/10/2002' }}
                    />
                    <JobItem
                        job={{ name: 'test', companyName: 'Công ty TNHH TEST', salary: -1, endDate: '24/10/2002' }}
                    />
                    <JobItem
                        job={{ name: 'test', companyName: 'Công ty TNHH TEST', salary: -1, endDate: '24/10/2002' }}
                    />
                    <JobItem
                        job={{ name: 'test', companyName: 'Công ty TNHH TEST', salary: -1, endDate: '24/10/2002' }}
                    />
                    <JobItem
                        job={{ name: 'test', companyName: 'Công ty TNHH TEST', salary: -1, endDate: '24/10/2002' }}
                    />
                    <JobItem
                        job={{ name: 'test', companyName: 'Công ty TNHH TEST', salary: -1, endDate: '24/10/2002' }}
                    />
                    <JobItem
                        job={{ name: 'test', companyName: 'Công ty TNHH TEST', salary: -1, endDate: '24/10/2002' }}
                    />
                    <JobItem
                        job={{ name: 'test', companyName: 'Công ty TNHH TEST', salary: -1, endDate: '24/10/2002' }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Jobpage;
