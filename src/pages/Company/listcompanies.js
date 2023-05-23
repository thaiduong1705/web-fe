import React, { useEffect, useState } from 'react';
import { Combobox, CompanyItem } from '~/components';
import { Link, createSearchParams, useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getCompanyLimit, setCompaniesToNull } from '~/store/action/company';
import ReactPaginate from 'react-paginate';
const ListCompanies = () => {
    const dispatch = useDispatch();
    const { companies, count } = useSelector((state) => state.company);
    const { careers, districts } = useSelector((state) => state.otherData);
    const [selectedCareer, setSelectedCareer] = useState('');
    const [searchName, setSearchName] = useState('');

    const [pageCount, setPageCount] = useState(0);
    let companyPerPage = 10;

    const handleChangeCareer = (career) => {
        setSelectedCareer((prev) => career.id);
    };
    useEffect(() => {
        dispatch(getCompanyLimit());
        return () => {
            dispatch(setCompaniesToNull());
        };
    }, []);

    useEffect(() => {
        setPageCount((prev) => Math.ceil(count / companyPerPage));
    }, [count]);

    const handlePageClick = (data) => {
        let currentPage = data.selected + 1;
        console.log(selectedCareer);
        dispatch(
            getCompanyLimit({
                page: currentPage,
                careerId: selectedCareer,
                companyName: searchName,
            }),
        );
    };

    const handleSearch = () => {
        dispatch(
            getCompanyLimit({
                careerId: selectedCareer,
                companyName: searchName,
            }),
        );
    };

    return (
        <div className="">
            <div className="bg-blue-700 text-black px-[64px]">
                <div className="grid grid-cols-12 py-[24px] gap-[16px] h-[80px]">
                    <div className="col-span-6 col-start-1 flex gap-[10px]">
                        <span className="text-[16px] text-white leading-[32px] block">Tìm công ty: </span>
                        <input
                            className="w-[86.5%] h-[35px] pl-[12px] border-solid border-1 rounded-[4px] border-transparent outline-none"
                            placeholder="Nhập tên công ty..."
                            value={searchName}
                            onChange={(e) => setSearchName(e.target.value)}
                        />
                    </div>

                    <Combobox
                        title="Chọn ngành nghề"
                        className="col-span-3 h-[35px]"
                        items={[
                            { id: '', value: 'Tất cả ngành nghề' },
                            ...careers.map((obj) => {
                                return { id: obj.id, value: obj.careerName };
                            }),
                        ]}
                        onChange={handleChangeCareer}
                    />
                    <Combobox
                        title="Chọn quận huyện"
                        className="col-span-2 h-[35px]"
                        items={[
                            { id: '', value: 'Tất cả quận huyện' },
                            ...districts.map((obj) => {
                                return { id: obj.id, value: obj.districtName };
                            }),
                        ]}
                    />
                    <button
                        className="cursor-pointer bg-blue-500 hover:bg-blue-400 text-white h-[35px] rounded-[8px] font-[550] px-[8px] col-auto"
                        onClick={handleSearch}
                    >
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
                        className="bg-blue-600 text-white rounded-[8px] border-transparent border-1 flex items-center p-[8px] hover:opacity-80 px-3"
                    >
                        Thêm mới nhà tuyển dụng
                    </Link>
                </div>
            </div>

            <div className="px-[64px]">
                {companies.length === 0 ? (
                    'Không có kết quả'
                ) : (
                    <>
                        {companies.map((company, index) => {
                            return <CompanyItem key={company.id} item={company} />;
                        })}
                        <ReactPaginate
                            pageCount={pageCount}
                            previousLabel={'<'}
                            nextLabel={'>'}
                            onPageChange={handlePageClick}
                            breakLabel={'...'}
                            disabledLinkClassName="text-red"
                            containerClassName="inline-flex -space-x-px items-center justify-center gap-[8px] w-full"
                            pageLinkClassName="px-[12px] py-[8px] leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                            previousLinkClassName={`block px-[12px] py-[8px] ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 ${'hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-700 dark:hover:text-white'}`}
                            nextLinkClassName={`block px-[12px] py-[8px] leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 ${'hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-700 dark:hover:text-white'}`}
                            activeLinkClassName=""
                        />
                    </>
                )}
            </div>
        </div>
    );
};

export default ListCompanies;
