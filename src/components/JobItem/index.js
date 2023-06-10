import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Experimental_CssVarsProvider } from '@mui/material';
import { faClock, faBuilding } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import sanitizeVietnameseString from '~/utils/sanitizeVietnameseString';
import { apiSoftDeletePost } from '~/services/post';

const JobItem = ({ job = {}, onClick, toggleModal }) => {
    const [mouseEnter, setMouseEnter] = useState(null);
    const navigate = useNavigate();
    return (
        <div
            className="h-[160px] overflow-hidden flex bg-slate-200 rounded-[8px] relative my-7 border-1 border-transparent hover:cursor-pointer hover:bg-[#E6F5FE] hover:border-blue-500 hover:transition-all"
            onMouseEnter={() => setMouseEnter(true)}
            onMouseLeave={() => setMouseEnter(false)}
        >
            <div className="w-[149px] h-[100%] flex items-center justify-center bg-white rounded-l">
                <Link
                    to={`/viec-lam/chi-tiet/${sanitizeVietnameseString(job?.jobTitle)}/${job?.id}`}
                    className="w-full h-full"
                >
                    <img src={job?.Company?.imageLink} className="w-full h-full object-contain p-[16px]" alt="" />
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
                    <div className="flex items-center mb-2">
                        <FontAwesomeIcon icon={faClock} className="mr-[6px] w-[22px] h-[22px] text-blue-500" />
                        <p className="text-gray-500 text-[14px]">TG hết hạn ứng tuyển: {job.endDate}</p>
                    </div>
                    <div className="flex items-center mb-2">
                        <FontAwesomeIcon icon={faBuilding} className="mr-[6px] w-[22px] h-[22px] text-blue-500" />
                        <p className="text-black text-[14px]">Công ty đăng tuyển: {job?.Company?.companyName}</p>
                    </div>
                    <div className="columns-5 justify-between"></div>
                    <div className="flex mt-2 justify-between">
                        <div className="flex gap-2 items-center">
                            {job?.Position && (
                                <div className="border-[#DDDDDD] border-[0.5px] py-[2px] px-2 rounded-[4px] bg-[#FBFBFB] text-[#333333] max-h-[30px] text-[14px]">
                                    {job?.Position?.positionName}
                                </div>
                            )}

                            {job?.District &&
                                job?.District.map((item, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className="border-[#DDDDDD] border-[0.5px]  p-[2px] px-2 rounded-[4px] bg-[#FBFBFB] text-[#333333] max-h-[30px] text-[14px]"
                                        >
                                            {item.districtName}
                                        </div>
                                    );
                                })}
                        </div>
                    </div>
                </div>

                <div className="min-w-[290px] flex flex-col justify-between items-end">
                    <span className="text-red-500 font-medium">
                        {job?.salaryMin !== 0 && `${job?.salaryMin} triệu `}
                        {job?.salaryMax !== 999 && job?.salaryMax !== 0 && ' - '}
                        {job?.salaryMax !== 999 && `${job?.salaryMax} triệu`}
                    </span>
                    <div className="flex gap-4">
                        <button className="text-blue-400 hover:text-blue-600 underline" onClick={onClick}>
                            Chỉnh sửa
                        </button>
                        <button
                            className="bg-blue-500 hover:bg-blue-600 w-[80px] text-white rounded-[8px] px-[8px] py-[6px]"
                            onClick={async (e) => {
                                const result = await Swal.fire({
                                    icon: 'question',
                                    title: 'Xác nhận',
                                    text: 'Bạn có chắc muốn xoá bài tuyển dụng này?',
                                    showCancelButton: true,
                                    cancelButtonText: 'Huỷ bỏ',
                                    showConfirmButton: true,
                                    confirmButtonText: 'Đồng ý',
                                });
                                if (result.isConfirmed) {
                                    const response = await apiSoftDeletePost(job?.id);
                                    if (response.data.err === 0) {
                                        await Swal.fire({
                                            icon: 'success',
                                            title: 'Đã xoá thành công',
                                            text: '',
                                        });
                                        navigate(0);
                                    }
                                }
                            }}
                        >
                            Ẩn
                        </button>
                        <button
                            className="bg-red-500 hover:bg-red-600 text-white rounded-[8px] px-[8px] py-[6px]"
                            onClick={toggleModal}
                        >
                            Ứng tuyển
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobItem;
