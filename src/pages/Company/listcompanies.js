import React, { useEffect, useState } from 'react';
import { Combobox, CompanyItem } from '~/components';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getCompanies } from '~/store/action/company';
const ListCompanies = () => {
    const companies = useSelector((state) => state.company.companies);
    const careers = useSelector((state) => state.otherData.careers);
    const [selectedCareer, setSelectedCareer] = useState();

    const handleChangeCareer = (career) => {
        setSelectedCareer((prev) => career);
    };

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCompanies());
    }, []);
    return (
        <div className="">
            <div className="bg-blue-700 text-black px-[64px]">
                <div className="grid grid-cols-6 py-[24px] gap-[16px] h-[80px]">
                    <div className="col-span-3 col-start-1 flex gap-[10px]">
                        <span className="text-[16px] text-white leading-[32px] block">Tìm công ty: </span>
                        <input
                            className="w-[86.5%] h-[35px] pl-[12px] border-solid border-1 rounded-[4px] border-transparent outline-none"
                            placeholder="Nhập tên công ty..."
                        />
                    </div>

                    <Combobox
                        title="Chọn ngành nghề"
                        className="h-[35px] col-start-4"
                        items={careers.map((obj) => {
                            return { id: obj.id, value: obj.careerName };
                        })}
                        onChange={handleChangeCareer}
                    />
                    <Combobox title="Chọn tỉnh thành" className="h-[35px] col-start-5" />
                    <button className="col-start-6 cursor-pointer bg-blue-400 hover:bg-blue-500 text-white h-[35px] rounded-[8px] font-[550]">
                        Tìm kiếm
                    </button>
                </div>
            </div>

            <div className="my-[48px] px-[64px] flex justify-between">
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

            <div className="px-[64px]">
                {companies.map((company, index) => {
                    return <CompanyItem key={company.id} item={company} />;
                })}
            </div>
        </div>
    );
};

export default ListCompanies;
