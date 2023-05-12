import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSuitcase, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const CompanyItem = ({ item = {} }) => {
    return (
        <div className="flex bg-[#f1f3f5] rounded-[8px] relative">
            <div className="w-[120px] h-[120px] flex items-center justify-center bg-white rounded-l">
                <Link href="/nha-tuyen-dung/:id" className="w-full h-full">
                    <img
                        className="w-full h-full object-contain p-[16px]"
                        src="https://data.hcmjob.vn/hcmjob/2023/5/9/cong-ty-tnhh-systemgear-viet-nam-hcmjob.vn.jpg"
                        alt=""
                    />
                </Link>
            </div>
            <div className="flex justify-between flex-1 p-[16px]">
                <div>
                    <p className="mb-[8px] text-black text-[20px] font-semibold line-clamp-1">Bind tên công ty vào</p>
                    <div className="flex items-center mb-[4px]">
                        <FontAwesomeIcon icon={faSuitcase} className="mr-[4px] w-[22px] h-[22px] text-[#2A80B9]" />
                        <span className="text-[14px]">Bind ngành nghề công ty vào.</span>
                    </div>
                    <div className="flex items-center">
                        <FontAwesomeIcon icon={faLocationDot} className="mr-[4px] w-[22px] h-[22px] text-[#2A80B9]" />
                        <span className="text-[14px] text-[#999999]">Bind ngành nghề địa chỉ vào.</span>
                    </div>
                </div>
                <div className="min-w-[185px] flex flex-col justify-center ">
                    <span className="bg-[#2A80B9] min-h-[32px] flex items-center px-[16px] py-[4px] rounded-[8px] text-white">
                        Bind số công việc đang tuyển
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CompanyItem;
