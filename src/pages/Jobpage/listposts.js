import React from 'react';
import { useEffect, useState, Component } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { Combobox, JobItem } from '~/components';
import { useDispatch, useSelector } from 'react-redux';

import { getPosts, getPostsLimit } from '~/store/action/post';
import ReactPaginate from 'react-paginate';

const ListPosts = () => {
    const dispatch = useDispatch();
    const { posts, count } = useSelector((state) => state.post);
    const { careers, districts, academicLevels, workingTypes, positions } = useSelector((state) => state.otherData);
    const [pageCount, setPageCount] = useState(0);
    let companyPerPage = 10;

    useEffect(() => {
        dispatch(getPostsLimit());
    }, []);

    useEffect(() => {
        setPageCount((prev) => Math.ceil(count / companyPerPage));
    }, [count]);

    const handlePageClick = (data) => {
        let currentPage = data.selected + 1;
        console.log(currentPage);
        dispatch(
            getPostsLimit({
                page: currentPage,
            }),
        );
    };
    console.log({ posts, count });

    return (
        <div className="">
            <div className="bg-blue-700 text-black px-[64px]">
                <div className="grid grid-cols-6 py-[24px] gap-[16px] h-[80px]">
                    <div className="col-span-3 col-start-1 flex gap-[10px]">
                        <span className="text-[16px] text-white leading-[32px] block ">Tìm việc: </span>
                        <input
                            className="w-[90%] h-[35px] pl-[12px] border-solid border-1 rounded-[4px] border-transparent outline-none"
                            placeholder="Nhập từ khoá tìm kiếm..."
                        />
                    </div>

                    <Combobox title="Chọn kinh nghiệm" className="h-[35px] col-start-4" />
                    <Combobox title="Chọn quận huyện" className="h-[35px] col-start-5" />
                    <button className="cursor-pointer col-start-6 bg-blue-400 hover:bg-blue-500 text-white h-[35px] rounded-[8px] font-[550]">
                        Tìm kiếm
                    </button>
                </div>
                <div className="grid grid-cols-5 grid-rows-2 pb-[20px] gap-[16px]">
                    <Combobox
                        title="Cấp bậc"
                        items={[
                            { id: '', value: 'Tất cả cấp bậc' },
                            ...positions.map((obj) => {
                                return { id: obj.id, value: obj.positionName };
                            }),
                        ]}
                    />
                    <Combobox
                        title="Loại hình"
                        items={[
                            { id: '', value: 'Tất cả loại hình' },
                            ...workingTypes.map((obj) => {
                                return { id: obj.id, value: obj.workingTypeName };
                            }),
                        ]}
                    />
                    <Combobox title="Kinh nghiệm" />
                    <Combobox title="Thời gian" />
                    <Combobox title="Giới tính" />
                    <Combobox title="Độ tuổi" />
                    <Combobox
                        title="Trình độ"
                        items={[
                            { id: '', value: 'Tất cả trình độ' },
                            ...academicLevels.map((obj) => {
                                return { id: obj.id, value: obj.academicLevelName };
                            }),
                        ]}
                    />
                    <Combobox title="Mức lương" />
                    <Combobox
                        title="Ngành nghề"
                        items={[
                            { id: '', value: 'Tất cả trình độ' },
                            ...academicLevels.map((obj) => {
                                return { id: obj.id, value: obj.academicLevelName };
                            }),
                        ]}
                    />
                </div>
            </div>
            <div className="w-full flex flex-col justify-center h-auto rounded-[3px] mt-[8px] bg-gray-50 px-[64px] py-[16px] ">
                <div className="flex justify-between mb-3">
                    <div className="relative before:content-[''] before:absolute before:h-full before:rounded-[4px] before:w-[6px] before:bg-[#2A80B9] before:left-0 pl-[24px]">
                        <p className="text-[24px] font-medium leading-[1.4] my-[2px] pt">Danh sách việc làm</p>
                    </div>
                    <Link
                        to="/viec-lam/tao-viec-lam"
                        className="bg-blue-600 text-white rounded-[8px] border-transparent border-1 flex items-center p-[8px] hover:opacity-80"
                    >
                        Tạo mới bài tuyển dụng
                    </Link>
                </div>
                <div className="overflow-scroll">
                    {posts && posts.map((data, index) => <JobItem key={data.id} job={data} />)}
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
                    />
                </div>
            </div>
        </div>
    );
};

export default ListPosts;
