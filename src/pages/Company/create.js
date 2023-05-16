import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';

import { Combobox, TextEditor } from '~/components';

const CreateCompany = () => {
    return (
        <div className="w-full bg-blue-100 rounded-[4px] h-full pb-[24px]">
            <form>
                <p className="font-medium text-[24px] py-5 pl-5 text-white bg-blue-700 items-center">
                    <FontAwesomeIcon icon={faBuilding} className="mr-[12px]" />
                    Tạo mới nhà tuyển dụng
                </p>
                <div className="flex justify-between mb-[8px] gap-[10px] px-[8px] py-[12px]">
                    <div className="flex-1">
                        <label htmlFor="JobName">Tên công ty</label>
                        <input
                            className="w-full h-[40px] rounded-md outline-none px-[8px]"
                            name="TenCongViec"
                            id="JobName"
                            placeholder="Công ty TNHH ABC"
                        />
                    </div>
                </div>
                <div className="flex justify-between mb-[8px] gap-[10px] px-[8px]">
                    <div className="flex-1">
                        <label>Email</label>
                        <input
                            className="w-full h-[40px] rounded-md outline-none px-[8px]"
                            name="TenCongViec"
                            placeholder=""
                        />
                    </div>
                    <div className="w-[20%]">
                        <label>Số điện thoại</label>
                        <input
                            className="w-full h-[40px] rounded-md outline-none px-[8px]"
                            name="SoLuong"
                            maxLength={10}
                        />
                    </div>
                </div>
                <div className="flex justify-between mb-[8px] gap-[10px] px-[8px]">
                    <div className="flex-1">
                        <label>Địa chỉ</label>
                        <input
                            className="w-full h-[40px] rounded-md outline-none px-[8px]"
                            name="TenCongViec"
                            placeholder="Địa chỉ của công ty"
                        />
                    </div>
                </div>
                <div className="flex justify-between mb-[8px] gap-[10px] px-[8px]">
                    <div className="flex-1">
                        <label>Lĩnh vực</label>
                        <Combobox title="Lĩnh vực" isMulti isSearchable />
                    </div>
                    <div className="w-[20%]">
                        <label>Quy mô</label>
                        <Combobox title="Quy mô" />
                    </div>
                </div>
                <div className="flex justify-between mb-[8px] gap-[10px] px-[8px]">
                    <div className="w-[50%]">
                        <label>Tên người liên hệ</label>
                        <input
                            className="w-full h-[40px] rounded-md outline-none px-[8px]"
                            name="TenCongViec"
                            placeholder=""
                        />
                    </div>
                </div>
                <div className="mb-[8px] px-[8px]">
                    <label>Giới thiệu công ty</label>
                    <TextEditor className="w-[100%] h-[400px] mb-[8px]" />
                </div>

                <div className="flex justify-end px-[8px] pt-[8px]">
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

export default CreateCompany;
