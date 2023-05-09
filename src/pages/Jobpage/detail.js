import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLocationDot,
    faSuitcase,
    faCoins,
    faCalendarDays,
    faUser,
    faBuilding,
    faFile,
    faCircleInfo,
} from '@fortawesome/free-solid-svg-icons';

import { Combobox } from '~/components';
const DetailPage = () => {
    const { id } = useParams();

    return (
        <div>
            <p>{id}</p>
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
                    <Combobox title="Cấp bậc" className="w-[240px]" />
                    <Combobox title="Loại hình" className="w-[240px]" />
                    <Combobox title="Kinh nghiệm" className="w-[240px]" />
                    <Combobox title="Thời gian" className="w-[240px]" />
                    <Combobox title="Giới tính" className="w-[240px]" />
                    <Combobox title="Độ tuổi" className="w-[240px]" />
                    <Combobox title="Trình độ" className="w-[240px]" />
                    <Combobox title="Mức lương" className="w-[240px]" />
                    <Combobox title="Ngành nghề" className="w-[240px]" />
                </div>
            </div>
            <div className="my-[24px]">
                <div className="w-full flex item-center justify-between p-[16px] shadow-lg rounded-[4px]">
                    <div className="w-[50%]">
                        <h1 className="font-medium text-[24px]">dsadadsad</h1>
                        <div>
                            <div className="">
                                <p className="leading-[32px] text-[16px] flex items-center gap-[]">
                                    <FontAwesomeIcon icon={faLocationDot} className="text-[#2A80B9] mr-[4px]" /> Địa
                                    điểm tuyển dụng:
                                </p>
                                <div className="flex flex-wrap gap-[8px]">
                                    <div className="no-underline px-[12px] py-[8px] font-normal text-[16px] text-[#236997] bg-[#E7F5FF] text-center rounded-[4px]">
                                        dsada
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <p className="leading-[32px] text-[16px] flex items-center gap-[]">
                                    <FontAwesomeIcon icon={faSuitcase} className="text-[#2A80B9] mr-[4px]" /> Ngành
                                    nghề:
                                </p>
                                <div className="flex flex-wrap gap-[8px]">
                                    <div className="no-underline px-[12px] py-[8px] font-normal text-[16px] text-[#236997] bg-[#E7F5FF] text-center rounded-[4px]">
                                        dsada
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[50%]">
                        <div className="flex gap-[5px] item-center no-underline flex-wrap">
                            <FontAwesomeIcon icon={faCoins} className="text-[#236997] text-[20px]" />
                            <span>Mức lương: </span>
                            <span>Bind</span>
                        </div>
                        <div className="flex gap-[8px] item-center no-underline flex-wrap">
                            <FontAwesomeIcon icon={faCalendarDays} className="text-[#236997] text-[20px]" />
                            <span>Ngày tạo: </span>
                            <span>Bind</span>
                        </div>
                        <div className="flex gap-[8px] item-center no-underline flex-wrap">
                            <FontAwesomeIcon icon={faCalendarDays} className="text-[#236997] text-[20px]" />
                            <span>Ngày hết hạn: </span>
                            <span>Bind</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-[40px] grid grid-cols-12 gap-4">
                <div className="col-span-8 flex flex-col gap-8">
                    <div className="grid grid-flow-col grid-rows-4 shadow-lg px-[32px] py-[20px]">
                        <div className="flex items-center gap-[8px] text-[16px] leading-[32px]">
                            <FontAwesomeIcon icon={faUser} />
                            <span>Kinh nghiệm: </span>
                            <span>bind kinh nghiệm</span>
                        </div>
                        <div className="flex items-center gap-[8px] text-[16px] leading-[32px]">
                            <FontAwesomeIcon icon={faUser} />
                            <span>Kinh nghiệm: </span>
                            <span>bind kinh nghiệm</span>
                        </div>
                        <div className="flex items-center gap-[8px] text-[16px] leading-[32px]">
                            <FontAwesomeIcon icon={faUser} />
                            <span>Kinh nghiệm: </span>
                            <span>bind kinh nghiệm</span>
                        </div>
                        <div className="flex items-center gap-[8px] text-[16px] leading-[32px]">
                            <FontAwesomeIcon icon={faUser} />
                            <span>Kinh nghiệm: </span>
                            <span>bind kinh nghiệm</span>
                        </div>
                        <div className="flex items-center gap-[8px] text-[16px] leading-[32px]">
                            <FontAwesomeIcon icon={faUser} />
                            <span>Kinh nghiệm: </span>
                            <span>bind kinh nghiệm</span>
                        </div>
                        <div className="flex items-center gap-[8px] text-[16px] leading-[32px]">
                            <FontAwesomeIcon icon={faUser} />
                            <span>Kinh nghiệm: </span>
                            <span>bind kinh nghiệm</span>
                        </div>
                        <div className="flex items-center gap-[8px] text-[16px] leading-[32px]">
                            <FontAwesomeIcon icon={faUser} />
                            <span>Kinh nghiệm: </span>
                            <span>bind kinh nghiệm</span>
                        </div>
                        <div className="flex items-center gap-[8px] text-[16px] leading-[32px]">
                            <FontAwesomeIcon icon={faUser} />
                            <span>Kinh nghiệm: </span>
                            <span>bind kinh nghiệm</span>
                        </div>
                    </div>

                    <div className="shadow-lg px-[32px] py-[20px]">
                        <div className="flex items-center gap-4 pb-[20px] border-b-1 border-gray-500">
                            <FontAwesomeIcon icon={faCircleInfo} className="text-[20px] text-blue-400" />
                            <h2 className="text-[20px] font-medium">Mô tả công việc</h2>
                        </div>
                        <div className="mb-4 text-justify">Bind mô tả</div>
                    </div>
                </div>
                <div className="col-span-4">
                    <div className="px-[32px] py-[20px] shadow-lg ">
                        <div className=" mb-[12px] flex items-center text-[20px]">
                            <FontAwesomeIcon icon={faSuitcase} className="mr-[8px] p-[8px] bg-orange-300 text-white" />
                            <span>Bind tên công ty</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-4">
                                <FontAwesomeIcon icon={faLocationDot} />
                                <span className="font-medium">Địa chỉ:</span>
                                <span>Bind địa chỉ</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <FontAwesomeIcon icon={faBuilding} />
                                <span className="font-medium">Quy mô công ty:</span>
                                <span>Bind quy mô</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <FontAwesomeIcon icon={faFile} />
                                <span className="font-medium">Đã đăng:</span>
                                <span>Bind số lượng bài</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailPage;
