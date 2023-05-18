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
    faPlus,
    faGraduationCap,
    faVenusMars,
    faSignal,
    faUserGroup,
    faUsers,
} from '@fortawesome/free-solid-svg-icons';

import { Combobox, JobItem } from '~/components';
const DetailPage = () => {
    const { id } = useParams();

    return (
        <div>
            <div className="bg-blue-700 text-black">
                <div className="px-[24px] py-[24px] flex gap-[10px] h-[80px]">
                    <span className="text-[16px] text-white leading-[32px] block">Tìm việc</span>
                    <input
                        className="w-[52.7%] h-[35px] pl-[12px] border-solid border-1 rounded-[4px] border-transparent outline-none"
                        placeholder="Nhập từ khoá tìm kiếm..."
                    />
                    <Combobox
                        title="Chọn kinh nghiệm"
                        className="w-[200px] h-[35px]"
                        items={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
                    />
                    <Combobox title="Chọn quận huyện" className="w-[200px] h-[35px]" />
                    <button className="w-[15%] cursor-pointer bg-blue-400 hover:bg-blue-500 text-white h-[35px] rounded-[8px] font-[550]">
                        Tìm kiếm
                    </button>
                </div>
                <div className="px-[24px] pb-[20px] flex flex-wrap gap-[10px]">
                    <Combobox title="Cấp bậc" className="w-[19.43%]" />
                    <Combobox title="Loại hình" className="w-[19.43%]" />
                    <Combobox title="Kinh nghiệm" className="w-[19.43%]" />
                    <Combobox title="Thời gian" className="w-[19.43%]" />
                    <Combobox title="Giới tính" className="w-[19.43%]" />
                    <Combobox title="Độ tuổi" className="w-[19.43%]" />
                    <Combobox title="Trình độ" className="w-[19.43%]" />
                    <Combobox title="Mức lương" className="w-[19.43%]" />
                    <Combobox title="Ngành nghề" className="w-[19.43%]" />
                </div>
            </div>
            <div className="my-[24px]">
                <div className="w-full flex item-center justify-between p-[16px] shadow-lg rounded-[4px]">
                    <div className="w-[50%]">
                        <h1 className="font-medium text-[24px]">bind tên công việc</h1>
                        <div>
                            <div className="">
                                <p className="leading-[32px] text-[16px] flex items-center gap-[4px]">
                                    <FontAwesomeIcon icon={faLocationDot} className="text-[#2A80B9] mr-[4px]" /> Địa
                                    điểm tuyển dụng:
                                </p>
                            </div>
                            <div className="">
                                <p className="leading-[32px] text-[16px] flex items-center gap-[]">
                                    <FontAwesomeIcon icon={faSuitcase} className="text-[#2A80B9] mr-[4px]" /> Ngành
                                    nghề:
                                </p>
                                <div className="flex flex-wrap gap-[12px] items-center mt-3">
                                    <div className="no-underline px-[12px] py-[4px] font-normal text-[16px] text-[#236997] bg-[#E7F5FF] text-center rounded-[4px]">
                                        dsada
                                    </div>
                                    <div className="no-underline px-[12px] py-[4px] font-normal text-[16px] text-[#236997] bg-[#E7F5FF] text-center rounded-[4px]">
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
            <div className="my-[40px] grid grid-cols-12 gap-[16px]">
                <div className="col-span-8 flex flex-col gap-[32px]">
                    <div className="grid grid-flow-col grid-rows-4 shadow-lg px-[32px] py-[20px] gap-[4px]">
                        <div className="flex items-center gap-[8px] text-[16px]">
                            <FontAwesomeIcon icon={faUser} className="w-[20px] h-[20px]" />
                            <span>Kinh nghiệm: </span>
                            <span>bind kinh nghiệm</span>
                        </div>
                        <div className="flex items-center gap-[8px] text-[16px]">
                            <FontAwesomeIcon icon={faGraduationCap} className="w-[20px] h-[20px]" />
                            <span>Bằng cấp: </span>
                            <span>bind bằng cấp</span>
                        </div>
                        <div className="flex items-center gap-[8px] text-[16px]">
                            <FontAwesomeIcon icon={faVenusMars} className="w-[20px] h-[20px]" />
                            <span>Giới tính: </span>
                            <span>bind giới tính</span>
                        </div>
                        <div className="flex items-center gap-[8px] text-[16px]">
                            <FontAwesomeIcon icon={faSuitcase} className="w-[20px] h-[20px]" />
                            <span>Hình thức làm việc: </span>
                            <span>bind hình thức</span>
                        </div>
                        <div className="flex items-center gap-[8px] text-[16px]">
                            <FontAwesomeIcon icon={faSignal} className="w-[20px] h-[20px]" />
                            <span>Chức vụ: </span>
                            <span>bind chức vụ</span>
                        </div>
                        <div className="flex items-center gap-[8px] text-[16px]">
                            <FontAwesomeIcon icon={faUserGroup} className="w-[20px] h-[20px]" />
                            <span>Độ tuổi: </span>
                            <span>bind độ tuổi</span>
                        </div>
                        <div className="flex items-center gap-[8px] text-[16px]">
                            <FontAwesomeIcon icon={faUsers} className="w-[20px] h-[20px]" />
                            <span>Số lượng: </span>
                            <span>bind số luognwj</span>
                        </div>
                    </div>

                    <div className="shadow-lg px-[32px] py-[20px]">
                        <div className="flex items-center gap-[16px] pb-[20px] border-b-1 border-gray-500">
                            <FontAwesomeIcon icon={faCircleInfo} className="text-[20px] text-blue-400" />
                            <h2 className="text-[20px] font-medium">Mô tả công việc</h2>
                        </div>
                        <div className="mb-[16px] text-justify">Bind mô tả</div>
                        <div className="flex items-center gap-[16px] pb-[20px] border-b-1 border-gray-500">
                            <FontAwesomeIcon icon={faCircleInfo} className="text-[20px] text-blue-400" />
                            <h2 className="text-[20px] font-medium">Quyền lợi được hưởng</h2>
                        </div>
                        <div className="mb-[16px] text-justify">Bind quyền lợi</div>
                        <div className="flex items-center gap-[16px] pb-[20px] border-b-1 border-gray-500">
                            <FontAwesomeIcon icon={faCircleInfo} className="text-[20px] text-blue-400" />
                            <h2 className="text-[20px] font-medium">Yêu cầu công việc</h2>
                        </div>
                        <div className="mb-[32px] text-justify">Bind yêu cầu công việc</div>
                        <div className="flex items-center gap-[16px] pb-[20px]">
                            <FontAwesomeIcon icon={faCircleInfo} className="text-[20px] text-blue-400" />
                            <h2 className="text-[20px] font-medium">Cách thức ứng tuyển</h2>
                        </div>
                        <div className="mb-[16px] text-justify">
                            <button className="text-white bg-[#326ffc] hover:bg-[#14388c] rounded-[4px] py-[4px] px-[16px] h-[44px]">
                                Ứng tuyển ngay
                            </button>
                        </div>
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
            <div className="p-[16px] flex items-center shadow-lg rounded-[4px] text-[20px] my-[20px]">
                <FontAwesomeIcon icon={faPlus} className="mr-[8px]" />
                Công việc tương tự
            </div>
            <div className="my-[20px]">
                <JobItem job={{ name: 'test', companyName: 'Công ty TNHH TEST', salary: -1, endDate: '24/10/2002' }} />
                <JobItem job={{ name: 'test', companyName: 'Công ty TNHH TEST', salary: -1, endDate: '24/10/2002' }} />
            </div>
        </div>
    );
};

export default DetailPage;
