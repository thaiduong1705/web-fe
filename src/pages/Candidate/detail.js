import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useParams } from 'react-router-dom';
import { faPhone, faEnvelope, faLocationDot, faVenusMars, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import { Combobox } from '~/components';

const DetailCandidate = () => {
    const { id } = useParams();
    return (
        <div>
            <div className="bg-blue-800 text-black mb-11">
                <div className="px-[24px] py-[24px] flex gap-[10px] h-[80px]">
                    <span className="text-[16px] text-white leading-[32px] block">Tìm người: </span>
                    <Combobox title="Chọn ngành nghề" className="w-[200px] h-[35px]" isMulti isSearchable />
                    <Combobox title="Chọn quận huyện" className="w-[200px] h-[35px]" isMulti isSearchable />
                    <button className="w-[15%] rounded-[8px] cursor-pointer bg-blue-400 hover:bg-blue-500 text-white h-[35px]">
                        Tìm kiếm
                    </button>
                </div>
                <div className="px-[24px] pb-[20px] flex flex-wrap gap-[10px]">
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
            <div className="shadow-lg px-[32px] pb-[32px]">
                <div className="grid grid-cols-3 gap-[12x] ">
                    <div className="col-start-1 flex w-[100%] h-[160px] border-r-2 border-[#2A80B9]">
                        <img
                            src="https://static.careerbuilder.vn/themes/cv_tool/images/avatar.jpg"
                            alt=""
                            className="w-[30%] h-full object-contain border-1 border-solid border-black rounded-[4px]"
                        />
                        <div className="ml-[12px] mr-[12px] leading-[44px] flex flex-col">
                            <p className="text-[36px]">Nguyễn Văn A</p>
                            <p>Ngành nghề: bind ngành nghề</p>
                            <Link className="text-blue-400 underline hover:text-red-600">Chèn ảnh CV</Link>
                        </div>
                    </div>
                    <div className="col-start-2 flex flex-col text-[20px] ml-[16px] border-r-2 border-[#2A80B9]">
                        <div className="flex items-center h-[33.3333%]">
                            <FontAwesomeIcon icon={faPhone} className="w-[30px]" />
                            <p className="ml-[12px]">0908787878</p>
                        </div>
                        <div className="flex items-center h-[33.3333%]">
                            <FontAwesomeIcon icon={faEnvelope} className="w-[30px]" />
                            <p className="ml-[12px]">example123@gmail.com</p>
                        </div>
                        <div className="flex items-center h-[33.3333%]">
                            <FontAwesomeIcon icon={faLocationDot} className="w-[30px]" />
                            <p className="ml-[12px]">bind địa chỉ</p>
                        </div>
                    </div>
                    <div className="col-start-3 text-[20px] ml-[16px]">
                        <div className="flex items-center h-[33.3333%]">
                            <FontAwesomeIcon icon={faVenusMars} className="w-[30px]" />
                            <p className="ml-[12px]">Giới tính</p>
                        </div>
                        <div className="flex items-center h-[33.3333%]">
                            <FontAwesomeIcon icon={faCalendar} className="w-[30px]" />
                            <p className="ml-[12px]">Ngày sinh</p>
                        </div>
                    </div>
                </div>
                <div className="font-medium text-[24px] my-[24px] rounded-[4px] text-[#2A80B9] border-l-4 border-[#2A80B9] pl-[16px]">
                    Thông tin nghề nghiệp
                </div>
                <div className="grid grid-cols-3 text-[20px] gap-[80px] my-[24px]">
                    <div className="col-start-1">
                        <div className="flex justify-between h-[52px]">
                            <span className="font-medium">Khu vực làm việc: </span>
                        </div>
                        <div className="flex justify-between h-[52px]">
                            <span className="font-medium">Năm kinh nghiệm: </span>
                        </div>
                        <div className="flex justify-between h-[52px]">
                            <span className="font-medium">Trình độ văn hoá: </span>
                        </div>
                    </div>
                    <div className="col-start-2">
                        <div className="flex justify-between h-[52px]">
                            <span className="">bind ngành nghề</span>
                        </div>
                        <div className="flex justify-between h-[52px]">
                            <span className="">bind năm kinh nghiệm</span>
                        </div>
                        <div className="flex justify-between h-[52px]">
                            <span className="">bind trình độ</span>
                        </div>
                    </div>
                </div>
                <div className="flex gap-4">
                    <button className="bg-blue-600 text-white rounded-[8px] border-transparent border-1 flex items-center p-[8px] hover:opacity-80">
                        Chỉnh sửa
                    </button>
                    <button className="bg-red-500 text-white rounded-[8px] border-transparent border-1 flex items-center justify-center p-[8px] hover:opacity-80 w-[60px]">
                        Ẩn
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DetailCandidate;
