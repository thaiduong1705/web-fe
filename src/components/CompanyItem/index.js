import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSuitcase, faLocationDot } from '@fortawesome/free-solid-svg-icons';

import sanitizeVietnameseString from '~/utils/sanitizeVietnameseString';
const CompanyItem = ({ item, onClick }) => {
    const [mouseEnter, setMouseEnter] = useState(null);
    return (
        <div
            className="overflow-hidden flex bg-[#f1f3f5] rounded-[8px] relative my-7 border-1 border-transparent hover:cursor-pointer hover:bg-[#E6F5FE] hover:border-blue-500 hover:transition-all"
            onMouseEnter={() => setMouseEnter(true)}
            onMouseLeave={() => setMouseEnter(false)}
        >
            <div className="w-[120px] h-[120px] flex items-center justify-center bg-white rounded-l">
                <Link
                    to={`/nha-tuyen-dung/chi-tiet/${sanitizeVietnameseString(item.companyName).replaceAll('/', '')}/${
                        item.id
                    }`}
                    className="w-full h-full"
                >
                    <img
                        className="w-full h-full object-contain p-[16px]"
                        src={item.imageLink}
                        alt={item.companyName}
                    />
                </Link>
            </div>
            <div className="flex justify-between flex-1 p-[16px]">
                <div>
                    <Link
                        to={`/nha-tuyen-dung/chi-tiet/${sanitizeVietnameseString(item.companyName).replaceAll(
                            '/',
                            '',
                        )}/${item.id}`}
                    >
                        {mouseEnter ? (
                            <p className="mb-[8px] text-blue-500 text-[20px] font-semibold line-clamp-1">
                                {item.companyName}
                            </p>
                        ) : (
                            <p className="mb-[8px] text-black text-[20px] font-semibold line-clamp-1">
                                {item.companyName}
                            </p>
                        )}
                    </Link>
                    <div className="flex items-center mb-[4px]">
                        <FontAwesomeIcon icon={faSuitcase} className="mr-[6px] w-[22px] h-[22px] text-blue-500" />
                        {item.Career.map((cc, index) => {
                            return (
                                <span className="text-[14px] mr-[8px]" key={index}>
                                    {cc.careerName}
                                </span>
                            );
                        })}
                    </div>
                    <div className="flex items-center">
                        <FontAwesomeIcon icon={faLocationDot} className="mr-[6px] w-[22px] h-[22px] text-blue-500" />
                        <span className="text-[14px] text-[#999999] line-clamp-1"> {item.address} </span>
                    </div>
                </div>
                <div className="min-w-[185px] flex flex-col justify-between ">
                    <span className="justify-center font-medium">Đang tuyển {item.Posts.length} công việc</span>
                    <div>
                        <button className="text-blue-400 underline hover:text-blue-600" onClick={onClick}>
                            Chỉnh sửa
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyItem;
