import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Combobox, JobItem, Loading } from '~/components';
import { useDispatch, useSelector } from 'react-redux';

import { editData, getPostsLimit, getDeletedPosts } from '~/store/action/post';
import ReactPaginate from 'react-paginate';
import { Exp, Gender, Salary, CreatedAt } from '~/data';
import ApplyModal from '~/components/ApplyModal';

const ListPosts = () => {
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const { posts, count } = useSelector((state) => state.post);
    const { careers, districts, academicLevels, workingTypes, positions } = useSelector((state) => state.otherData);

    const [jobTitle, setJobTitle] = useState('');
    const [gender, setGender] = useState('');
    const [expYear, setExpYear] = useState('');
    const [salary, setSalary] = useState([]);
    const [position, setPosition] = useState('');
    const [al, setAL] = useState('');
    const [wt, setWT] = useState('');
    const [career, setCareer] = useState('');
    const [district, setDistrict] = useState('');
    const [createdAt, setCreatedAt] = useState([]);
    const handleChangeGender = (value) => {
        setGender((prev) => value.id);
    };
    const handleChangeExp = (value) => {
        setExpYear((prev) => value.data);
    };
    const handleChangeSalary = (value) => {
        const newCareerIds = value.data;
        setSalary((prev) => newCareerIds);
    };
    const handleChangePosition = (value) => {
        setPosition((prev) => value.id);
    };
    const handleChangeAL = (value) => {
        setAL((prev) => value.id);
    };
    const handleChangeWT = (value) => {
        setWT((prev) => value.id);
    };
    const handleChangeCareer = (value) => {
        setCareer((prev) => value.id);
    };
    const handleChangeDistrict = (value) => {
        setDistrict((prev) => value.id);
    };
    const handleChangeCreatedAt = (value) => {
        const newCreatedAt = value.data;
        setCreatedAt(newCreatedAt);
    };

    const [isLoaded, setIsLoaded] = useState(false);

    const [toggle, setToggle] = useState(false);
    const [appliedPost, setAppliedPost] = useState(null);

    const [pageCount, setPageCount] = useState(0);
    let companyPerPage = 10;

    useEffect(() => {
        dispatch(getPostsLimit());
    }, []);

    useEffect(() => {
        setPageCount((prev) => Math.ceil(count / companyPerPage));
        setIsLoaded(true);
    }, [count]);

    const handlePageClick = (data) => {
        let currentPage = data.selected + 1;
        dispatch(
            getPostsLimit({
                page: currentPage,
                jobTitle: jobTitle,
                sex: gender,
                experienceYear: expYear,
                createdAt: createdAt,
                academicLevelId: al,
                positionId: position,
                workingTypeId: wt,
                career: career,
                district: district,
            }),
        );
    };
    const handleFilter = () => {
        dispatch(
            getPostsLimit({
                jobTitle: jobTitle,
                sex: gender,
                experienceYear: expYear,
                createdAt: createdAt,
                academicLevelId: al,
                positionId: position,
                workingTypeId: wt,
                career: career,
                district: district,
            }),
        );
    };
    const handlePostListChange = (e) => {
        if (e.value === 'Mới nhất') {
            dispatch(
                getPostsLimit({
                    jobTitle: jobTitle,
                    sex: gender,
                    experienceYear: expYear,
                    createdAt: createdAt,
                    academicLevelId: al,
                    positionId: position,
                    workingTypeId: wt,
                    career: career,
                    district: district,
                    order: 'desc',
                }),
            );
            console.log(posts);
        } else if (e.value === 'Cũ nhất') {
            dispatch(
                getPostsLimit({
                    jobTitle: jobTitle,
                    sex: gender,
                    experienceYear: expYear,
                    createdAt: createdAt,
                    academicLevelId: al,
                    positionId: position,
                    workingTypeId: wt,
                    career: career,
                    district: district,
                    order: 'asc',
                }),
            );
        }
    };

    if (posts.length === 0 && !isLoaded) {
        return (
            <div className="flex justify-center items-center">
                <Loading />
            </div>
        );
    }
    return (
        <div className="bg-slate-100 h-screen">
            <div className="bg-blue-700 text-black px-[64px] rounded-[8px]">
                <div className="grid grid-cols-6 py-[24px] gap-[16px] h-[80px]">
                    <div className="col-span-5 col-start-1 flex gap-[10px]">
                        <span className="text-[16px] text-white leading-[32px] block ">Tìm việc: </span>
                        <input
                            className="w-[93.5%] h-[35px] pl-[12px] border-solid border-1 rounded-[4px] border-transparent outline-none"
                            placeholder="Nhập từ khoá tìm kiếm..."
                            value={jobTitle}
                            onChange={(e) => {
                                setJobTitle((prev) => e.target.value);
                            }}
                        />
                    </div>
                    <button
                        className="cursor-pointer col-start-6 bg-blue-400 hover:bg-blue-500 text-white h-[35px] rounded-[8px] font-[550]"
                        onClick={handleFilter}
                    >
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
                        onChange={handleChangePosition}
                    />
                    <Combobox
                        title="Loại hình"
                        items={[
                            { id: '', value: 'Tất cả loại hình' },
                            ...workingTypes.map((obj) => {
                                return { id: obj.id, value: obj.workingTypeName };
                            }),
                        ]}
                        onChange={handleChangeWT}
                    />
                    <Combobox title="Kinh nghiệm" items={Exp} onChange={handleChangeExp} />
                    <Combobox title="Thời gian" items={CreatedAt} onChange={handleChangeCreatedAt} />
                    <Combobox title="Giới tính" items={Gender} onChange={handleChangeGender} />
                    <Combobox title="Độ tuổi" />
                    <Combobox
                        title="Trình độ"
                        items={[
                            { id: '', value: 'Tất cả trình độ' },
                            ...academicLevels.map((obj) => {
                                return { id: obj.id, value: obj.academicLevelName };
                            }),
                        ]}
                        onChange={handleChangeAL}
                    />
                    <Combobox title="Mức lương" items={Salary} onChange={handleChangeSalary} />
                    <Combobox
                        title="Ngành nghề"
                        items={[
                            { id: '', value: 'Tất cả ngành nghề' },
                            ...careers.map((obj) => {
                                return { id: obj.id, value: obj.careerName };
                            }),
                        ]}
                        isSearchable={true}
                        onChange={handleChangeCareer}
                    />
                    <Combobox
                        title="Quận huyện"
                        className="h-[35px] col-start-5"
                        items={[
                            { id: '', value: 'Tất cả khu vực' },
                            ...districts.map((obj) => {
                                return { id: obj.id, value: obj.districtName };
                            }),
                        ]}
                        isSearchable={true}
                        onChange={handleChangeDistrict}
                    />
                </div>
            </div>
            <div className="w-full flex flex-col justify-center h-auto rounded-[3px] mt-[8px] bg-slate-100 px-[64px] py-[16px] ">
                <div className="flex justify-between mb-10 mt-5">
                    <div className="relative before:content-[''] before:absolute before:h-full before:rounded-[4px] before:w-[6px] before:bg-blue-600 before:left-0 pl-[24px]">
                        <p className="text-[24px] font-medium leading-[1.4] my-[2px] pt">Danh sách việc làm</p>
                        <p className="text-[#999999]">Danh sách các việc làm tại TP Hồ Chí Minh</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link className="underline text-blue-400" to="/viec-lam/bai-viet-bi-an">
                            Danh sách bài tuyển dụng bị ẩn
                        </Link>
                        <Combobox
                            className="border-1"
                            title="Mới nhất"
                            items={[
                                { id: 1, value: 'Mới nhất' },
                                { id: 2, value: 'Cũ nhất' },
                            ]}
                            onChange={(e) => handlePostListChange(e)}
                        />
                        <Link
                            to="/viec-lam/tao-viec-lam"
                            className="bg-blue-600 text-white rounded-[8px] border-transparent border-1 flex items-center p-[8px] hover:opacity-80"
                        >
                            Tạo mới bài tuyển dụng
                        </Link>
                    </div>
                </div>
                <div className="">
                    {posts.length === 0 ? (
                        <div className="flex justify-center items-center">Không có kết quả</div>
                    ) : (
                        <>
                            {posts &&
                                posts.map((data, index) => (
                                    <JobItem
                                        key={data.id}
                                        job={data}
                                        onClick={(e) => {
                                            navigate(`chinh-sua/${data.id}`, { state: 'EDIT_POST' });
                                        }}
                                        toggleModal={() => {
                                            setToggle(true);
                                            setAppliedPost(data);
                                        }}
                                    />
                                ))}
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
                        </>
                    )}
                </div>
            </div>
            <ApplyModal
                open={toggle}
                closeModal={() => {
                    setToggle(false);
                }}
                post={appliedPost}
            />
        </div>
    );
};

export default ListPosts;
