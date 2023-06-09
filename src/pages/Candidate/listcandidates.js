import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CandidateItem, Combobox, Loading } from '~/components';
import { useDispatch, useSelector } from 'react-redux';
import { getCandidateLimit, setCandidatesToNull } from '~/store/action/candidate';
import { Age, Exp } from '~/data';
import ReactPaginate from 'react-paginate';
const ListCandidates = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { candidates, count } = useSelector((state) => state.candidate);
    const { academicLevels } = useSelector((state) => state.otherData);
    const [academicLevelId, setAcademicLevelId] = useState('');
    const [experienceYear, setExperienceYear] = useState();
    const [age, setAge] = useState();

    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        dispatch(getCandidateLimit());
        return () => {
            dispatch(setCandidatesToNull());
        };
    }, []);

    const [pageCount, setPageCount] = useState(0);
    let companyPerPage = 10;
    useEffect(() => {
        setPageCount((prev) => Math.ceil(count / companyPerPage));
        setIsLoaded(true);
    }, [count, candidates]);

    const handleChangeAge = (age) => {
        setAge((prev) => age.data);
    };
    const handleChangeAL = (value) => {
        setAcademicLevelId((prev) => value.id);
    };
    const handleChangeExp = (value) => {
        setExperienceYear((prev) => value.data);
    };

    const handlePageClick = (data) => {
        let currentPage = data.selected + 1;
        dispatch(
            getCandidateLimit({
                page: currentPage,
            }),
        );
    };

    const handleSearch = (e) => {
        dispatch(
            getCandidateLimit({
                academicLevelId,
                experienceYear,
                age,
            }),
        );
        console.log({
            academicLevelId,
            experienceYear,
            age,
        });
    };

    if (candidates.length === 0 && !isLoaded) {
        return (
            <div className="flex justify-center items-center">
                <Loading />
            </div>
        );
    }
    return (
        <div className="h-screen">
            <div className="bg-blue-700 text-black px-[64px] rounded-[8px]">
                <div className="grid grid-cols-10 py-[24px] gap-[16px] h-[80px]">
                    <Combobox
                        title="Trình độ học vấn"
                        className="h-[35px] col-span-5"
                        items={[
                            { id: null, value: 'Tất cả trình độ' },
                            ...academicLevels.map((obj) => {
                                return { id: obj.id, value: obj.academicLevelName };
                            }),
                        ]}
                        needTilte
                        onChange={handleChangeAL}
                    />
                    <Combobox
                        title="Năm kinh nghiệm"
                        className="h-[35px] col-span-2"
                        items={Exp}
                        onChange={handleChangeExp}
                    />
                    <Combobox title="Tuổi" className="h-[35px] col-span-2" items={Age} onChange={handleChangeAge} />
                    <button
                        className="cursor-pointer bg-blue-400 hover:bg-blue-500 text-white h-[35px] rounded-[8px] font-[550]"
                        onClick={handleSearch}
                    >
                        Tìm kiếm
                    </button>
                </div>
            </div>

            <div className="my-[48px] px-[64px] flex justify-between">
                <div className="relative before:content-[''] before:absolute before:h-full before:rounded-[4px] before:w-[6px] before:bg-blue-600 before:left-0 pl-[24px]">
                    <p className="align-middle text-[24px] font-medium leading-[1.4] my-[2px]">Ứng viên</p>
                    <p className="text-[#999999]">Danh sách các ứng viên tại trung tâm</p>
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

            {candidates.length === 0 ? (
                <div className="flex justify-center items-center">Không có kết quả</div>
            ) : (
                <>
                    <div className="my-[40px] px-[64px]">
                        <table className="table-auto min-w-full text-left text-[14px] font-light">
                            <thead className="border-b border-gray-500 dark:border-neutral-600">
                                <tr>
                                    <th scope="col" className="px-6 py-4 font-medium w-1/3 text-16 text-blue-600">
                                        Ứng viên
                                    </th>
                                    <th scope="col" className="px-6 py-4 font-medium text-16 text-blue-600">
                                        Kinh nghiệm
                                    </th>
                                    <th scope="col" className="px-6 py-4 font-medium text-16 text-blue-600">
                                        Trình độ chuyên môn
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {candidates.map((data, index) => {
                                    return (
                                        <CandidateItem
                                            item={data}
                                            key={index}
                                            onClick={(e) => {
                                                navigate(`chinh-sua/${data.id}`, { state: 'EDIT_CANDIDATE' });
                                            }}
                                        />
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div>
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
                </>
            )}
        </div>
    );
};

export default ListCandidates;
