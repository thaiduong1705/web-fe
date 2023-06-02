import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import parse from 'html-react-parser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLocationDot,
    faSuitcase,
    faCoins,
    faCalendarDays,
    faUser,
    faBuilding,
    faFile,
    faCircleInfo,
    faPlus,
    faGraduationCap,
    faVenusMars,
    faSignal,
    faUserGroup,
    faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { getPostById, setDetailPostNull } from '~/store/action/post';

import sanitizeVietnameseString from '~/utils/sanitizeVietnameseString';
import { Combobox, JobItem } from '~/components';
import convertDatetime from '~/utils/convertDate';
import { apiGetPostsFromCareer } from '~/services/career';
import { apiGetRelatedPost, apiSoftDeletePost } from '~/services/post';
import ApplyModal from '~/components/ApplyModal';
import Swal from 'sweetalert2';
const DetailPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const { detailPost } = useSelector((state) => state.post);
    const [careerRelatedPosts, setCareerRelatedPosts] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPostById(id));
        return () => {
            dispatch(setDetailPostNull());
        };
    }, [id]);
    useEffect(() => {
        if (detailPost) {
            let careerIds = [];
            const fetchingRelatedPosts = async () => {
                for (const career of detailPost.Career) {
                    const id = career.id;
                    careerIds.push(id);
                }
                console.log(careerIds);
                const response = await apiGetRelatedPost(detailPost.id, careerIds);
                if (response?.data.err === 0) {
                    setCareerRelatedPosts((prev) => [...response.data.res]);
                }
            };
            fetchingRelatedPosts();
        }
    }, [detailPost]);

    const [toggle, setToggle] = useState(false);
    const [appliedPost, setAppliedPost] = useState(null);

    return (
        <div className="bg-[#F3F3F6] pt-[24px] pb-[32px]">
            <div className=" mx-[24px] rounded-[12px] bg-white">
                <div className="w-full flex item-center pl-[16px] pr-[40px] py-[16px]">
                    <div className="w-[12%]">
                        <div className="w-[149px] h-[149px] flex items-center justify-center bg-white rounded-[12px]">
                            <img
                                src={detailPost?.Company.imageLink}
                                className="w-full h-full object-contain p-[16px]"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="w-[40%] pt-5">
                        <h1 className="text-blue-500 text-[24px] font-semibold line-clamp-1 mb-4">
                            {detailPost?.jobTitle}
                        </h1>
                        <div>
                            {/* <div className="">
                                <p className="leading-[32px] text-[16px] flex items-center gap-[4px]">
                                    <FontAwesomeIcon icon={faLocationDot} className="text-[#2A80B9] mr-[4px]" /> Địa
                                    điểm tuyển dụng: {detailPost?.District?.length === 0 && 'chưa cập nhật'}
                                </p>
                                <div className="flex flex-wrap gap-[12px] items-center mt-3">
                                    {detailPost?.District?.map((item) => {
                                        return (
                                            <div className="no-underline px-[12px] py-[4px] font-normal text-[16px] text-[#236997] bg-[#E7F5FF] text-center rounded-[4px]">
                                                {item.districtName}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            <div className="">
                                <p className="leading-[32px] text-[16px] flex items-center gap-[]">
                                    <FontAwesomeIcon icon={faSuitcase} className="text-[#2A80B9] mr-[4px]" /> Ngành
                                    nghề: {detailPost?.Career?.length === 0 && 'chưa cập nhật'}
                                </p>
                                <div className="flex flex-wrap gap-[12px] items-center mt-3">
                                    {detailPost?.Career?.map((item) => {
                                        return (
                                            <div className="no-underline px-[12px] py-[4px] font-normal text-[16px] text-[#236997] bg-[#E7F5FF] text-center rounded-[4px]">
                                                {item.careerName}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div> */}
                            <p className="font-medium mb-4">{detailPost?.Company.companyName}</p>
                            <div className="flex gap-[4px] item-center no-underline flex-wrap font-normal">
                                <FontAwesomeIcon icon={faClock} className=" text-[20px] mr-[4px]" />
                                <span>Ngày hết hạn: </span>
                                <span>{convertDatetime(detailPost?.endDate)}</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start w-[50%] pt-5 items-end">
                        <button
                            className="bg-red-500 hover:bg-red-600 text-white rounded-[4px] px-[8px] py-[8px] mb-5 w-[20%]"
                            onClick={(e) => {
                                setToggle(true);
                                setAppliedPost(detailPost);
                            }}
                        >
                            Ứng tuyển ngay
                        </button>
                        <button
                            className="bg-blue-500 hover:bg-blue-600 text-white rounded-[4px] px-[8px] py-[8px] mb-5 w-[20%]"
                            onClick={(e) => {
                                navigate(`/viec-lam/chinh-sua/${detailPost.id}`, { state: 'EDIT_POST' });
                            }}
                        >
                            Chỉnh sửa
                        </button>
                        <button
                            className="bg-gray-500 hover:bg-gray-600 text-white rounded-[4px] px-[8px] py-[8px] w-[20%]"
                            onClick={async (e) => {
                                const result = await Swal.fire({
                                    icon: 'question',
                                    title: 'Xác nhận',
                                    text: 'Bạn có chắc muốn xoá bài tuyển dụng này?',
                                    showCancelButton: true,
                                    cancelButtonText: 'Huỷ bỏ',
                                    showConfirmButton: true,
                                    confirmButtonText: 'Đồng ý',
                                });
                                if (result.isConfirmed) {
                                    const response = await apiSoftDeletePost(detailPost.id);
                                    if (response.data.err === 0) {
                                        await Swal.fire({
                                            icon: 'success',
                                            title: 'Đã xoá thành công',
                                            text: '',
                                        });
                                        navigate(-1);
                                    }
                                }
                            }}
                        >
                            Xoá
                        </button>
                        {/* <div className="flex gap-[5px] item-center no-underline flex-wrap">
                            <FontAwesomeIcon icon={faCoins} className="text-[#236997] text-[20px]" />
                            <span>Mức lương: </span>
                            <span>
                                {detailPost?.salaryMin !== 0 && `từ ${detailPost?.salaryMin} triệu `}
                                {detailPost?.salaryMax !== 999 && `đến ${detailPost?.salaryMax} triệu`}
                            </span>
                        </div>
                        <div className="flex gap-[8px] item-center no-underline flex-wrap">
                            <FontAwesomeIcon icon={faCalendarDays} className="text-[#236997] text-[20px]" />
                            <span>Ngày tạo: </span>
                            <span>{convertDatetime(detailPost?.createdAt)}</span>
                        </div>
                        <div className="flex gap-[8px] item-center no-underline flex-wrap">
                            <FontAwesomeIcon icon={faCalendarDays} className="text-[#236997] text-[20px]" />
                            <span>Ngày hết hạn: </span>
                            <span>{convertDatetime(detailPost?.endDate)}</span>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className="my-[40px] mx-[24px] grid grid-cols-12 gap-[16px]">
                <div className="col-span-8 flex flex-col gap-[32px]">
                    <div className="px-[32px] pt-[20px] pb-[28px] gap-[12px] bg-blue-50 rounded-[12px] border-2 border-blue-500">
                        <div className="border-l-[6px] border-blue-500 mt-2">
                            <p className="font-medium text-[24px] mb-7 pl-5">Thông tin chung</p>
                        </div>
                        <div className="grid grid-flow-col grid-rows-4 gap-[10px]">
                            <div className="flex items-center gap-[16px] text-[16px]">
                                <div className="flex rounded-full bg-blue-600 w-[48px] h-[48px] items-center justify-center">
                                    <FontAwesomeIcon icon={faUser} className="w-[24px] h-[24px] text-white" />
                                </div>
                                <div className="flex flex-col">
                                    <span>Kinh nghiệm: </span>
                                    <span className="font-semibold">
                                        {detailPost?.experienceYear
                                            ? `${detailPost?.experienceYear} năm`
                                            : 'chưa cập nhật'}
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center gap-[16px] text-[16px]">
                                <div className="flex rounded-full bg-blue-600 w-[48px] h-[48px] items-center justify-center">
                                    <FontAwesomeIcon icon={faGraduationCap} className="w-[24px] h-[24px] text-white" />
                                </div>
                                <div className="flex flex-col">
                                    <span>Bằng cấp: </span>
                                    <span className="font-semibold">
                                        {detailPost?.AcademicLevel?.academicLevelName || 'chưa cập nhật'}
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center gap-[16px] text-[16px]">
                                <div className="flex rounded-full bg-blue-600 w-[48px] h-[48px] items-center justify-center">
                                    <FontAwesomeIcon icon={faVenusMars} className="w-[24px] h-[24px] text-white" />
                                </div>
                                <div className="flex flex-col">
                                    <span>Giới tính: </span>
                                    <span className="font-semibold">
                                        {detailPost?.sex === 0 ? 'Nam' : detailPost?.sex === 1 ? 'Nữ' : 'Nam/Nữ'}
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center gap-[16px] text-[16px]">
                                <div className="flex rounded-full bg-blue-600 w-[48px] h-[48px] items-center justify-center">
                                    <FontAwesomeIcon icon={faSuitcase} className="w-[24px] h-[24px] text-white" />
                                </div>
                                <div className="flex flex-col">
                                    <span>Hình thức làm việc: </span>
                                    <span className="font-semibold">
                                        {detailPost?.WorkingType?.workingTypeName || 'chưa cập nhật'}
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center gap-[16px] text-[16px]">
                                <div className="flex rounded-full bg-blue-600 w-[48px] h-[48px] items-center justify-center">
                                    <FontAwesomeIcon icon={faSignal} className="w-[24px] h-[24px] text-white" />
                                </div>
                                <div className="flex flex-col">
                                    <span>Chức vụ: </span>
                                    <span className="font-semibold">
                                        {detailPost?.Position?.positionName || 'chưa cập nhật'}
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center gap-[16px] text-[16px]">
                                <div className="flex rounded-full bg-blue-600 w-[48px] h-[48px] items-center justify-center">
                                    <FontAwesomeIcon icon={faUserGroup} className="w-[24px] h-[24px] text-white" />
                                </div>
                                <div className="flex flex-col">
                                    <span>Độ tuổi: </span>
                                    <span className="font-semibold">
                                        {detailPost?.ageMin !== 0 && `từ ${detailPost?.ageMin} tuổi `}
                                        {detailPost?.ageMax !== 999 && `đến ${detailPost?.ageMax} tuổi`}
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center gap-[16px] text-[16px]">
                                <div className="flex rounded-full bg-blue-600 w-[48px] h-[48px] items-center justify-center">
                                    <FontAwesomeIcon icon={faUsers} className="w-[24px] h-[24px] text-white" />
                                </div>

                                <div className="flex flex-col">
                                    <span>Số lượng: </span>
                                    <span className="font-semibold">
                                        {detailPost?.needNumber ? `${detailPost?.needNumber} người` : 'chưa cập nhật'}
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center gap-[16px] text-[16px]">
                                <div className="flex rounded-full bg-blue-600 w-[48px] h-[48px] items-center justify-center">
                                    <FontAwesomeIcon icon={faCoins} className="w-[24px] h-[24px] text-white" />
                                </div>
                                <div className="flex flex-col">
                                    <span>Mức lương: </span>
                                    <span className="font-semibold">
                                        {detailPost?.salaryMin !== 0 && `từ ${detailPost?.salaryMin} triệu `}
                                        {detailPost?.salaryMax !== 999 && `đến ${detailPost?.salaryMax} triệu`}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="px-[32px] py-[20px] bg-white rounded-[12px]">
                        <div className="flex items-center gap-[12px] pb-[4px] border-b-1 border-gray-300">
                            <FontAwesomeIcon icon={faCircleInfo} className="text-[20px] text-blue-400" />
                            <h2 className="text-[20px] font-medium">Mô tả công việc</h2>
                        </div>
                        <div className="mt-[16px] mb-[24px] text-justify">
                            {parse(`${detailPost?.jobDescribe}`) || 'Chưa cập nhật'}
                        </div>
                        <div className="flex items-center gap-[12px] pb-[4px] border-b-1 border-gray-300">
                            <FontAwesomeIcon icon={faCircleInfo} className="text-[20px] text-blue-400" />
                            <h2 className="text-[20px] font-medium">Quyền lợi được hưởng</h2>
                        </div>
                        <div className="mt-[16px] mb-[24px] text-justify">
                            {parse(`${detailPost?.benefits}`) || 'Chưa cập nhật'}
                        </div>
                        <div className="flex items-center gap-[12px] pb-[4px] border-b-1 border-gray-300">
                            <FontAwesomeIcon icon={faCircleInfo} className="text-[20px] text-blue-400" />
                            <h2 className="text-[20px] font-medium">Yêu cầu công việc</h2>
                        </div>
                        <div className="mt-[16px] mb-[24px] text-justify">
                            {parse(`${detailPost?.jobRequirement}`) || 'Chưa cập nhật'}
                        </div>
                        <div className="flex items-center gap-[12px] pb-[4px]">
                            <FontAwesomeIcon icon={faCircleInfo} className="text-[20px] text-blue-400" />
                            <h2 className="text-[20px] font-medium">Cách thức ứng tuyển: </h2>
                        </div>
                        <div className="mb-[16px] text-justify">
                            <button
                                className="text-white bg-[#326ffc] hover:bg-[#14388c] rounded-[4px] py-[4px] px-[16px] h-[44px]"
                                onClick={(e) => {
                                    setToggle(true);
                                }}
                            >
                                Ứng tuyển ngay
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-span-4">
                    <div className="px-[32px] py-[20px] bg-white rounded-[12px]">
                        <div className=" mb-[12px] flex items-center text-[20px] font-semibold">
                            <FontAwesomeIcon icon={faSuitcase} className="mr-[8px] p-[8px] bg-orange-300 text-white" />
                            <span>{detailPost?.Company?.companyName}</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-4">
                                <FontAwesomeIcon icon={faLocationDot} />
                                <span className="font-medium">Địa chỉ:</span>
                                <span>{detailPost?.Company?.address || 'chưa cập nhật'}</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <FontAwesomeIcon icon={faBuilding} />
                                <span className="font-medium">Quy mô công ty:</span>
                                <span>{detailPost?.Company?.companySize || 'chưa cập nhật'}</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <FontAwesomeIcon icon={faFile} />
                                <span className="font-medium">Đã đăng:</span>
                                <span>Bind số lượng bài</span>
                            </div>
                        </div>
                    </div>
                    <div className="px-[32px] py-[20px] bg-white rounded-[12px] mt-[24px]">
                        <div className="mb-5">
                            <div className="flex border-l-[6px] border-blue-500 justify-between items-center">
                                <p className="font-medium text-[24px] pl-5">Thông tin chung</p>
                                <p className="text-[16px] underline text-blue-400 hover:cursor-pointer ">Xem thêm</p>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
            <div className="p-[16px] rounded-[12px] my-[20px] mx-[24px] bg-white">
                <div className=" flex items-center text-[20px] my-[20px]">
                    <FontAwesomeIcon icon={faPlus} className="mr-[8px]" />
                    Công việc tương tự
                </div>
                <div className="my-[20px]">
                    {careerRelatedPosts.length === 0
                        ? 'Hiện tại các bài tuyển dụng chưa có ngành nghề liên quan đến ngành nghề của bài tuyển dụng này'
                        : careerRelatedPosts.map((item) => {
                              return (
                                  <JobItem
                                      job={item}
                                      key={item.id}
                                      onClick={(e) => {
                                          navigate(`/viec-lam/chinh-sua/${item.id}`, { state: 'EDIT_POST' });
                                      }}
                                      toggleModal={() => {
                                          setToggle(true);
                                          setAppliedPost(item);
                                      }}
                                  />
                              );
                          })}
                </div>
            </div>
            <ApplyModal
                open={toggle}
                closeModal={() => {
                    setToggle(false);
                    navigate(0);
                }}
                post={appliedPost}
            />
        </div>
    );
};

export default DetailPage;
