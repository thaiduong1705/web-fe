import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Experimental_CssVarsProvider } from '@mui/material';
import sanitizeVietnameseString from '~/utils/sanitizeVietnameseString';

const JobItem = ({ job = {}, onClick }) => {
    return (
        <div className="flex relative border-[1px] border-blue-400 bg-[#f0f7ff] h-64 rounded-lg w-full my-4 py-4">
            <div className="flex flex-2 items-center justify-center after:h-full after:w-[2px] after:bg-[#2A80B9] after:ml-12 ">
                <div className="max-w[20%] ">
                    <div className="flex">
                        <img
                            src="https://www.vietnamworks.com/_next/image?url=https%3A%2F%2Fimages.vietnamworks.com%2Fpictureofcompany%2F9a%2F10884460.png&w=128&q=75"
                            className=""
                            alt=""
                        />
                    </div>
                </div>
            </div>

            <div className="flex-8 max-w[80%] lead-[300px] ">
                <div className="flex justify-between">
                    <Link
                        className="text-[28px] font-medium"
                        to={`/viec-lam/chi-tiet/${sanitizeVietnameseString(job?.jobTitle)}/${job?.id}`}
                    >
                        {job?.jobTitle}
                    </Link>
                    <span className="text-red-500 font-medium">
                        {job?.salaryMin !== 0 && `${job?.salaryMin} triệu `}
                        {job?.salaryMax !== 999 && job?.salaryMax !== 0 && ' - '}
                        {job?.salaryMax !== 999 && `${job?.salaryMax} triệu`}
                    </span>
                </div>

                <p>{job.companyName}</p>
                <p className="text-gray-500">TG hết hạn ứng tuyển: {job.endDate}</p>
                <div className="columns-5 justify-between"></div>
                <div className="flex mt-2 justify-between">
                    <div className="flex gap-2 items-center">
                        {job?.Position && (
                            <div className="border-[#DDDDDD] border-[0.5px] py-[2px] px-2 rounded-[4px] bg-[#FBFBFB] text-[#333333] max-h-[30px]">
                                {job?.Position?.positionName}
                            </div>
                        )}

                        {job?.District &&
                            job?.District.map((item, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="border-[#DDDDDD] border-[0.5px]  p-[2px] px-2 rounded-[4px] bg-[#FBFBFB] text-[#333333] max-h-[30px]"
                                    >
                                        {item.districtName}
                                    </div>
                                );
                            })}
                    </div>
                    <div className="flex gap-4 items-center">
                        <button className="text-blue-400 underline" onClick={onClick}>
                            Chỉnh sửa
                        </button>
                        <button className="bg-red-500 text-white rounded-[8px] px-[8px] py-[8px]">
                            ỨNG TRUYỂN NGAY
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobItem;
