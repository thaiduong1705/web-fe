import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSuitcase, faLocationDot } from '@fortawesome/free-solid-svg-icons';

import sanitizeVietnameseString from '~/utils/sanitizeVietnameseString';
const CompanyItem = ({ item }) => {
    return (
        <div className="flex bg-[#f1f3f5] rounded-[8px] relative">
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
                        <p className="mb-[8px] text-black text-[20px] font-semibold line-clamp-1">{item.companyName}</p>
                    </Link>
                    <div className="flex items-center mb-[4px]">
                        <FontAwesomeIcon icon={faSuitcase} className="mr-[4px] w-[22px] h-[22px] text-[#2A80B9]" />
                        {item.Career.map((cc, index) => {
                            return (
                                <span className="text-[14px] mr-[8px]" key={index}>
                                    {cc.careerName}
                                </span>
                            );
                        })}
                    </div>
                    <div className="flex items-center">
                        <FontAwesomeIcon icon={faLocationDot} className="mr-[4px] w-[22px] h-[22px] text-[#2A80B9]" />
                        <span className="text-[14px] text-[#999999]"> {item.address} </span>
                    </div>
                </div>
                <div className="min-w-[185px] flex flex-col justify-center ">
                    <span className="bg-[#2A80B9] min-h-[32px] w-[250px] flex items-center px-[16px] py-[4px] rounded-[8px] text-white justify-center">
                        Đang tuyển {item.Posts.length} công việc
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CompanyItem;
