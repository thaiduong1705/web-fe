import React from 'react';
import { Combobox } from '~/components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faSuitcase } from '@fortawesome/free-solid-svg-icons';

const ListCompanies = () => {
    return (
        <div>
            <div className="bg-blue-500 text-black">
                <div className="px-[14px] py-[20px] flex gap-[10px] h-[80px]">
                    <span className="text-[16px] text-white leading-[32px] block">Tìm công ty</span>
                    <input
                        className="w-[30%] h-[35px] border-solid border-1 rounded-[4px] border-transparent outline-none"
                        placeholder="Nhập tên công ty"
                    />
                    <Combobox title="Chọn ngành nghề" className="w-[200px] h-[35px]" />
                    <Combobox title="Chọn tỉnh thành" className="w-[200px] h-[35px]" />
                    <button className="w-[15%] cursor-pointer bg-slate-500 text-white h-[35px]">Tìm kiếm</button>
                </div>
            </div>

            <div className="my-[48px]">
                <div className="relative before:content-[''] before:absolute before:h-full before:rounded-[4px] before:w-[6px] before:bg-[#2A80B9] before:left-0 pl-[24px]">
                    <p className="text-[24px] font-medium leading-[1.4] mb-[4px]">Nhà tuyển dụng</p>
                    <p className="text-[#999999]">Danh sách nhà tuyển dụng tại TP Hồ Chí Minh</p>
                </div>
            </div>

            <div>
                <div className="flex bg-[#f1f3f5] rounded-[4px] relative">
                    <div className="w-[120px] h-[120px] flex items-center justify-center bg-white rounded-l">
                        <a href="/" className="w-full h-full">
                            <img
                                className="w-full h-full object-contain p-[16px]"
                                src="https://data.hcmjob.vn/hcmjob/2023/5/9/cong-ty-tnhh-systemgear-viet-nam-hcmjob.vn.jpg"
                                alt=""
                            />
                        </a>
                    </div>
                    <div className="flex justify-between flex-1 p-[16px]">
                        <div>
                            <p className="mb-[8px] text-black text-[20px] font-semibold line-clamp-1">
                                Bind tên công ty vào
                            </p>
                            <div className="flex items-center mb-[4px]">
                                <FontAwesomeIcon
                                    icon={faSuitcase}
                                    className="mr-[4px] w-[22px] h-[22px] text-[#2A80B9]"
                                />
                                <span className="text-[14px]">Bind ngành nghề công ty vào.</span>
                            </div>
                            <div className="flex items-center">
                                <FontAwesomeIcon
                                    icon={faLocationDot}
                                    className="mr-[4px] w-[22px] h-[22px] text-[#2A80B9]"
                                />
                                <span className="text-[14px] text-[#999999]">Bind ngành nghề địa chỉ vào.</span>
                            </div>
                        </div>
                        <div className="min-w-[185px] flex flex-col justify-center ">
                            <span className="bg-[#2A80B9] min-h-[32px] flex items-center px-[16px] py-[4px] rounded-[32px] text-white">
                                Bind số công việc đang tuyển
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListCompanies;
