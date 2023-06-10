import React, { useEffect, useState } from 'react';
import { Combobox, CompanyItem, Loading } from '~/components';
import { Link, createSearchParams, useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getCompanyLimit, setCompaniesToNull } from '~/store/action/company';
import ReactPaginate from 'react-paginate';
const ListCompanies = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { companies, count } = useSelector((state) => state.company);
    console.log(companies);
    const { careers, districts } = useSelector((state) => state.otherData);
    const [selectedCareer, setSelectedCareer] = useState('');
    const [searchName, setSearchName] = useState('');

    const [isLoaded, setIsLoaded] = useState(false);

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
        setIsLoaded(true);
    }, [count]);

    const handlePageClick = (data) => {
        let currentPage = data.selected + 1;
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

    if (companies.length === 0 && !isLoaded) {
        return (
            <div className="flex justify-center items-center">
                <Loading />
            </div>
        );
    }

    return (
        <div className="pb-6 bg-slate-100">
            <div className="bg-blue-700 text-black px-[64px] rounded-[8px]">
                <div className="grid grid-cols-12 py-[24px] gap-[16px] h-[80px]">
                    <div className="col-span-7 col-start-1 flex gap-[10px]">
                        <span className="text-[16px] text-white leading-[32px] block">Tìm công ty: </span>
                        <input
                            className="w-[88%] h-[35px] pl-[12px] border-solid border-1 rounded-[4px] border-transparent outline-none"
                            placeholder="Nhập tên công ty..."
                            value={searchName}
                            onChange={(e) => setSearchName(e.target.value)}
                        />
                    </div>

                    <Combobox
                        title="Chọn ngành nghề"
                        className="col-span-3 h-[35px]"
                        items={[
                            { id: '', value: 'Tất cả lĩnh vực' },
                            ...careers.map((obj) => {
                                return { id: obj.id, value: obj.careerName };
                            }),
                        ]}
                        onChange={handleChangeCareer}
                    />

                    <button
                        className="col-span-2 cursor-pointer bg-blue-400 hover:bg-blue-500 text-white h-[35px] rounded-[8px] font-[550] px-[8px]"
                        onClick={handleSearch}
                    >
                        Tìm kiếm
                    </button>
                </div>
            </div>

            <div className="my-[48px] px-[64px] flex justify-between">
                <div className="relative before:content-[''] before:absolute before:h-full before:rounded-[4px] before:w-[6px] before:bg-blue-600 before:left-0 pl-[24px]">
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
                    <div className="flex items-center justify-center">'Không có kết quả'</div>
                ) : (
                    <>
                        {companies.map((company, index) => {
                            return (
                                <CompanyItem
                                    key={company.id}
                                    item={company}
                                    onClick={(e) => {
                                        navigate(`chinh-sua/${company.id}`, { state: 'EDIT_COMPANY' });
                                    }}
                                />
                            );
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
