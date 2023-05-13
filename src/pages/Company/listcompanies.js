import React from 'react';
import { Combobox, CompanyItem } from '~/components';
import { Link } from 'react-router-dom';

const ListCompanies = () => {
    return (
        <div>
            <div className="bg-blue-800 text-black">
                <div className="px-[24px] py-[24px] flex gap-[10px] h-[80px]">
                    <span className="text-[16px] text-white leading-[32px] block">Tìm công ty: </span>
                    <input
                        className="w-[51%] h-[35px] pl-[12px] border-solid border-1 rounded-[4px] border-transparent outline-none"
                        placeholder="Nhập tên công ty..."
                    />
                    <Combobox title="Chọn ngành nghề" className="w-[200px] h-[35px]" />
                    <Combobox title="Chọn tỉnh thành" className="w-[200px] h-[35px]" />
                    <button className="w-[15%] cursor-pointer bg-blue-400 hover:bg-blue-500 text-white h-[35px] rounded-[8px] font-[550]">
                        Tìm kiếm
                    </button>
                </div>
            </div>

            <div className="my-[48px] mx-[24px] flex justify-between">
                <div className="relative before:content-[''] before:absolute before:h-full before:rounded-[4px] before:w-[6px] before:bg-[#2A80B9] before:left-0 pl-[24px]">
                    <p className="text-[24px] font-medium leading-[1.4] mb-[4px]">Nhà tuyển dụng</p>
                    <p className="text-[#999999]">Danh sách nhà tuyển dụng tại TP Hồ Chí Minh</p>
                </div>
                <div className="flex items-center">
                    <Link
                        to="/nha-tuyen-dung/tao-moi"
                        className="bg-blue-600 text-white rounded-[8px] border-transparent border-1 flex items-center p-[8px] hover:opacity-80"
                    >
                        Thêm mới nhà tuyển dụng
                    </Link>
                </div>
            </div>

            <div>
                <CompanyItem />
            </div>
        </div>
    );
};

export default ListCompanies;
