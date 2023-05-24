import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CandidateItem, Combobox } from '~/components';
import { useDispatch, useSelector } from 'react-redux';
import { getCandidates } from '~/store/action/candidate';
import { Age, Exp } from '~/data';
import ReactPaginate from 'react-paginate';
const ListCandidates = () => {
    const dispatch = useDispatch();
    const { candidates, count } = useSelector((state) => state.candidate);
    const { academicLevels } = useSelector((state) => state.otherData);
    const [academicLevelId, setAcademicLevelId] = useState('');
    const [experienceYear, setExperienceYear] = useState('');
    const [age, setAge] = useState([]);
    useEffect(() => {
        dispatch(getCandidates());
    }, []);

    const [pageCount, setPageCount] = useState(0);
    let companyPerPage = 10;
    useEffect(() => {
        setPageCount((prev) => Math.ceil(count / companyPerPage));
    }, [count]);
    const handlePageClick = (data) => {
        let currentPage = data.selected + 1;
    };
    return (
        <div>
            <div className="bg-blue-700 text-black px-[64px]">
                <div className="grid grid-cols-10 py-[24px] gap-[16px] h-[80px]">
                    <Combobox
                        title="Trình độ học vấn"
                        className="h-[35px] col-span-5"
                        items={academicLevels.map((obj) => {
                            return { id: obj.id, value: obj.academicLevelName };
                        })}
                    />
                    <Combobox title="Năm kinh nghiệm" className="h-[35px] col-span-2" items={Exp} />
                    <Combobox title="Tuổi" className="h-[35px] col-span-2" items={Age} />
                    <button className="cursor-pointer  bg-blue-400 hover:bg-blue-500 text-white h-[35px] rounded-[8px] font-[550]">
                        Tìm kiếm
                    </button>
                </div>
            </div>

            <div className="my-[48px] px-[64px] flex justify-between">
                <div className="relative before:content-[''] before:absolute before:h-full before:rounded-[4px] before:w-[6px] before:bg-[#2A80B9] before:left-0 pl-[24px]">
                    <p className="align-middle text-[24px] font-medium leading-[1.4] my-[2px]">Ứng viên</p>
                </div>
                <div className="flex items-center">
                    <Link
                        to="/ung-vien/tao-ung-vien"
                        className="bg-blue-600 text-white rounded-[8px] border-transparent border-1 flex items-center p-[8px] hover:opacity-80 h-fit"
                    >
                        Thêm mới ứng viên
                    </Link>
                </div>
            </div>

            <div className="my-[40px] px-[64px]">
                <table className="table-auto min-w-full text-left text-[14px] font-light">
                    <thead className="border-b dark:border-neutral-500">
                        <tr>
                            <th scope="col" className="px-6 py-4 font-medium">
                                Ứng viên
                            </th>
                            <th scope="col" className="px-6 py-4 font-medium">
                                Kinh nghiệm
                            </th>
                            <th scope="col" className="px-6 py-4 font-medium">
                                Trình độ chuyên môn
                            </th>
                            <th scope="col" className="px-6 py-4 font-medium">
                                Lương
                            </th>
                            <th scope="col" className="px-6 py-4 font-medium">
                                Nơi làm việc
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {candidates.map((data, index) => {
                            <CandidateItem
                                item={{
                                    candidateName: data.candidateName,
                                    experienceYear: data.experienceYear,
                                    academicLevel: data.academicLevelId,
                                }}
                            />;
                        })}
                    </tbody>
                </table>
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
    );
};

export default ListCandidates;
