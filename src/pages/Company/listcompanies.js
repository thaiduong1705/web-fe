import React, { useEffect, useState } from 'react';
import { Combobox, CompanyItem } from '~/components';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getCompanies, getCompanyLimit } from '~/store/action/company';
import ReactPaginate from 'react-paginate';
const ListCompanies = () => {
    const { companies, count } = useSelector((state) => state.company);
    const careers = useSelector((state) => state.otherData.careers);
    const [selectedCareer, setSelectedCareer] = useState();

    const [pageCount, setPageCount] = useState(0);
    let companyPerPage = 10;

    const handleChangeCareer = (career) => {
        setSelectedCareer((prev) => career);
    };

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCompanyLimit());
        setPageCount(Math.ceil(count / companyPerPage));
    }, [companyPerPage]);

    const fetchCompanies = (currentPage) => {
        dispatch(getCompanyLimit({ page: currentPage }));
    };
    const handlePageClick = (data) => {
        console.log(data);
    };

    return (
        <div className="">
            <div className="bg-blue-700 text-black">
                <div className="py-[24px] px-[24px] flex gap-[10px] h-[80px]">
                    <span className="text-[16px] text-white leading-[32px] block">Tìm công ty: </span>
                    <input
                        className="w-[40%] h-[35px] pl-[12px] border-solid border-1 rounded-[4px] border-transparent outline-none"
                        placeholder="Nhập tên công ty..."
                    />
                    <Combobox
                        title="Chọn ngành nghề"
                        className="w[] h-[35px]"
                        items={careers.map((obj) => {
                            return { id: obj.id, value: obj.careerName };
                        })}
                        onChange={handleChangeCareer}
                    />
                    <Combobox title="Chọn quận huyện" className="w-[200px] h-[35px]" />
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
                        className="bg-blue-600 text-white rounded-[8px] border-transparent border-1 flex items-center p-[8px] hover:opacity-80 px-3"
                    >
                        Thêm mới nhà tuyển dụng
                    </Link>
                </div>
            </div>

            <div className="">
                {companies.map((company) => {
                    return <CompanyItem key={company.id} item={company} />;
                })}
                <ReactPaginate
                    pageCount={pageCount}
                    previousLabel={'Prev'}
                    nextLabel={'Next'}
                    onPageChange={handlePageClick}
                    breakLabel={'...'}
                    containerClassName="inline-flex -space-x-px items-center justify-center w-full"
                    pageClassName={''}
                    pageLinkClassName="px-[12px] py-[8px] leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    previousLinkClassName="block px-[12px] py-[8px] ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    nextLinkClassName="block px-[12px] py-[8px] ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                />
            </div>
        </div>
    );
};

export default ListCompanies;
