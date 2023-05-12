import React from 'react';
import { useParams } from 'react-router-dom';

import { Combobox } from '~/components';

const DetailCandidate = () => {
    const { id } = useParams();
    return (
        <div>
            <div className="bg-blue-500 text-black">
                <div className="px-[14px] py-[20px] flex gap-[10px] h-[80px]">
                    <span className="text-[16px] text-white leading-[32px] block">Tìm người</span>
                    <Combobox title="Chọn ngành nghề" className="w-[200px] h-[35px]" isMulti isSearchable />
                    <Combobox title="Chọn quận huyện" className="w-[200px] h-[35px]" isMulti isSearchable />
                    <button className="w-[15%] cursor-pointer bg-slate-500 text-white h-[35px]">Tìm kiếm</button>
                </div>
                Đoạn này xem xét tìm kiếm lại
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
            <div className="shadow-lg px-[32px] p-[20px]">
                <div className="flex gap-[20px] ">
                    <div className="w-[120px] h-[160px] border-1 border-solid border-black rounded-[4px]">
                        <img
                            src="https://static.careerbuilder.vn/themes/cv_tool/images/avatar.jpg"
                            alt=""
                            className="w-full h-full object-contain"
                        />
                    </div>
                    <div className="">
                        <p>Ứng viên: bind tên</p>
                        <p>Ngày sinh: bind ngày sinh</p>
                        <p>Địa chỉ: bind địa chỉ</p>
                        <p>Email: bind email</p>
                        <p>Số điện thoại: bind số</p>
                    </div>
                </div>
                <div className="font-medium text-[24px] my-[24px] bg-slate-300 rounded-[4px]">
                    Thông tin nghề nghiệp
                </div>
                <div className="grid grid-cols-2">Cứu</div>
            </div>
        </div>
    );
};

export default DetailCandidate;
