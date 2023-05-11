import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import { Combobox, TextEditor } from '~/components';

const CreateCandidate = () => {
    return (
        <div className="w-full bg-gray-200 px-[8px] rounded-[4px] h-full mb-[20px] pb-[48px]">
            <form>
                <p className="font-medium text-[24px]">
                    <FontAwesomeIcon icon={faUser} className="mr-[4px]" />
                    Thêm mới ứng viên
                </p>
                <span className="w-full h-[5px] block bg-blue-300 my-[8px]"></span>
                <div className="flex justify-between mb-[8px] gap-[10px]">
                    <div className="flex-1">
                        <label htmlFor="JobName">Tên ứng viên</label>
                        <input
                            className="w-full h-[40px] rounded-md outline-none px-[8px]"
                            name="TenCongViec"
                            id="JobName"
                            placeholder=""
                        />
                    </div>
                </div>
                <div className="flex justify-between mb-[8px] gap-[10px]">
                    <div className="w-[25%]">
                        <label>Ngày sinh</label>
                        <input
                            className="w-full h-[40px] rounded-md outline-none px-[8px] hover:opacity-80 hover:cursor-pointer"
                            name="NgayDangTuyen"
                            id="startDate"
                            type="date"
                        />
                    </div>
                    <div className="w-[25%]">
                        <label>Số căn cước</label>
                        <input
                            className="w-full h-[40px] rounded-md outline-none px-[8px]"
                            name="SoLuong"
                            maxLength={12}
                        />
                    </div>
                    <div className="w-[25%]">
                        <label>Điện thoại</label>
                        <input
                            className="w-full h-[40px] rounded-md outline-none px-[8px]"
                            name="SoLuong"
                            maxLength={10}
                        />
                    </div>
                    <div className="w-[25%]">
                        <label>Email</label>
                        <input
                            className="w-full h-[40px] rounded-md outline-none px-[8px]"
                            name="SoLuong"
                            maxLength={10}
                        />
                    </div>
                </div>
                <div className="flex justify-between mb-[8px] gap-[10px]">
                    <div className="flex-1">
                        <label>Địa chỉ thường trú</label>
                        <input
                            className="w-full h-[40px] rounded-md outline-none px-[8px]"
                            name="TenCongViec"
                            placeholder=""
                        />
                    </div>
                </div>
                <div className="flex justify-between mb-[8px] gap-[10px]">
                    <div className="w-[25%]">
                        <label>Ngành nghề mong muốn</label>
                        <Combobox title="Ngành nghề" isMulti isSearchable />
                    </div>
                    <div className="w-[25%]">
                        <label>Cấp bậc mong muốn</label>
                        <Combobox title="Cấp bậc" />
                    </div>
                    <div className="w-[25%]">
                        <label>Mức lương mong muốn</label>
                        <Combobox title="Mức lương" />
                    </div>
                    <div className="w-[25%]">
                        <label>Khu vực làm việc</label>
                        <Combobox title="Khu vực làm việc" />
                    </div>
                </div>

                <div className="mb-[8px]">
                    <input type="file" className="w-full" />
                </div>
                <div className="flex justify-end">
                    <button
                        className="bg-blue-600 py-[8px] px-[16px] text-white hover:bg-blue-400 rounded-[4px] mx-[12px]"
                        value="Xác nhận"
                    >
                        Tạo mới
                    </button>
                    <Link
                        to="/posts"
                        className="bg-red-500 hover:bg-red-300 rounded-[4px] flex justify-center items-center text-white py-[8px] px-[16px]"
                    >
                        Quay lại
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default CreateCandidate;
