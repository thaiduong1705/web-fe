import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Experimental_CssVarsProvider } from '@mui/material';
import sanitizeVietnameseString from '~/utils/sanitizeVietnameseString';

const JobItem = ({ job = {}, onClick, toggleModal }) => {
    const [mouseEnter, setMouseEnter] = useState(null);
    return (
        <Link
            className="overflow-hidden flex bg-[#f1f3f5] rounded-[8px] relative my-4 border-1 border-transparent hover:cursor-pointer hover:bg-[#E6F5FE] hover:border-blue-500 hover:transition-all"
            onMouseEnter={() => setMouseEnter(true)}
            onMouseLeave={() => setMouseEnter(false)}
            to={`/viec-lam/chi-tiet/${sanitizeVietnameseString(job?.jobTitle)}/${job?.id}`}
        >
            <div className="w-[149px] h-[149px] flex items-center justify-center bg-white rounded-l">
                <Link
                    to={`/viec-lam/chi-tiet/${sanitizeVietnameseString(job?.jobTitle)}/${job?.id}`}
                    className="w-full h-full"
                >
                    <img src={job.Company.imageLink} className="w-full h-full object-contain p-[16px]" alt="" />
                </Link>
            </div>

            <div className="flex justify-between flex-1 p-[16px]">
                <div>
                    <div className="flex justify-between mb-2">
                        <Link to={`/viec-lam/chi-tiet/${sanitizeVietnameseString(job?.jobTitle)}/${job?.id}`}>
                            {mouseEnter ? (
                                <p className="text-blue-500 text-[20px] font-semibold line-clamp-1">{job?.jobTitle}</p>
                            ) : (
                                <p className="text-black text-[20px] font-semibold line-clamp-1">{job?.jobTitle}</p>
                            )}
                        </Link>
                    </div>

                    <p>{job.companyName}</p>
                    <p className="text-gray-500 text-[14px] mb-2">TG hết hạn ứng tuyển: {job.endDate}</p>
                    <p className="text-black text-[14px]">Công ty đăng tuyển: {job?.Company?.companyName}</p>
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
                    </div>
                </div>

                <div className="min-w-[185px] flex flex-col justify-between items-end">
                    <span className="text-red-500 font-medium">
                        {job?.salaryMin !== 0 && `${job?.salaryMin} triệu `}
                        {job?.salaryMax !== 999 && job?.salaryMax !== 0 && ' - '}
                        {job?.salaryMax !== 999 && `${job?.salaryMax} triệu`}
                    </span>
                    <div className="flex gap-4">
                        <button className="text-blue-400 underline" onClick={onClick}>
                            Chỉnh sửa
                        </button>
                        <button className="bg-red-500 text-white rounded-[8px] px-[8px] py-[6px]" onClick={toggleModal}>
                            ỨNG TRUYỂN
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default JobItem;
