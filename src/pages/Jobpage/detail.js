import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
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
import { useDispatch, useSelector } from 'react-redux';
import { getPostById, setDetailPostNull } from '~/store/action/post';

import { Combobox, JobItem } from '~/components';
import convertDatetime from '~/utils/convertDate';
const DetailPage = () => {
    const { id } = useParams();
    const { detailPost } = useSelector((state) => state.post);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPostById(id));
        return () => {
            dispatch(setDetailPostNull());
        };
    }, []);
    useEffect(() => {
        console.log(detailPost);
    }, [detailPost]);
    return (
        <div>
            <div className="my-[24px]">
                <div className="w-full flex item-center justify-between px-[40px] py-[16px] shadow-lg rounded-[4px]">
                    <div className="w-[50%]">
                        <h1 className="font-medium text-[24px]">{detailPost?.jobTitle}</h1>
                        <div>
                            <div className="">
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
                            </div>
                        </div>
                    </div>
                    <div className="w-[50%]">
                        <div className="flex gap-[5px] item-center no-underline flex-wrap">
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
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-[40px] grid grid-cols-12 gap-[16px]">
                <div className="col-span-8 flex flex-col gap-[32px]">
                    <div className="grid grid-flow-col grid-rows-4 shadow-lg px-[32px] py-[20px] gap-[4px]">
                        <div className="flex items-center gap-[8px] text-[16px]">
                            <FontAwesomeIcon icon={faUser} className="w-[20px] h-[20px]" />
                            <span>Kinh nghiệm: </span>
                            <span>
                                {detailPost?.experienceYear ? `${detailPost?.experienceYear} năm` : 'chưa cập nhật'}
                            </span>
                        </div>
                        <div className="flex items-center gap-[8px] text-[16px]">
                            <FontAwesomeIcon icon={faGraduationCap} className="w-[20px] h-[20px]" />
                            <span>Bằng cấp: </span>
                            <span>{detailPost?.AcademicLevel?.academicLevelName || 'chưa cập nhật'}</span>
                        </div>
                        <div className="flex items-center gap-[8px] text-[16px]">
                            <FontAwesomeIcon icon={faVenusMars} className="w-[20px] h-[20px]" />
                            <span>Giới tính: </span>
                            <span>{detailPost?.sex === 0 ? 'Nam' : detailPost?.sex === 1 ? 'Nữ' : 'Nam/Nữ'}</span>
                        </div>
                        <div className="flex items-center gap-[8px] text-[16px]">
                            <FontAwesomeIcon icon={faSuitcase} className="w-[20px] h-[20px]" />
                            <span>Hình thức làm việc: </span>
                            <span>{detailPost?.WorkingType?.workingTypeName || 'chưa cập nhật'}</span>
                        </div>
                        <div className="flex items-center gap-[8px] text-[16px]">
                            <FontAwesomeIcon icon={faSignal} className="w-[20px] h-[20px]" />
                            <span>Chức vụ: </span>
                            <span>{detailPost?.Position?.positionName || 'chưa cập nhật'}</span>
                        </div>
                        <div className="flex items-center gap-[8px] text-[16px]">
                            <FontAwesomeIcon icon={faUserGroup} className="w-[20px] h-[20px]" />
                            <span>Độ tuổi: </span>
                            <span>
                                {detailPost?.ageMin !== 0 && `từ ${detailPost?.ageMin} tuổi `}
                                {detailPost?.ageMax !== 999 && `đến ${detailPost?.ageMax} tuổi`}
                            </span>
                        </div>
                        <div className="flex items-center gap-[8px] text-[16px]">
                            <FontAwesomeIcon icon={faUsers} className="w-[20px] h-[20px]" />
                            <span>Số lượng: </span>
                            <span>{detailPost?.needNumber ? `${detailPost?.needNumber} người` : 'chưa cập nhật'}</span>
                        </div>
                    </div>

                    <div className="shadow-lg px-[32px] py-[20px]">
                        <div className="flex items-center gap-[16px] pb-[20px] border-b-1 border-gray-500">
                            <FontAwesomeIcon icon={faCircleInfo} className="text-[20px] text-blue-400" />
                            <h2 className="text-[20px] font-medium">Mô tả công việc</h2>
                        </div>
                        <div className="mb-[16px] text-justify">{detailPost?.jobDescribe || 'Chưa cập nhật'}</div>
                        <div className="flex items-center gap-[16px] pb-[20px] border-b-1 border-gray-500">
                            <FontAwesomeIcon icon={faCircleInfo} className="text-[20px] text-blue-400" />
                            <h2 className="text-[20px] font-medium">Quyền lợi được hưởng</h2>
                        </div>
                        <div className="mb-[16px] text-justify">{detailPost?.benefits || 'Chưa cập nhật'}</div>
                        <div className="flex items-center gap-[16px] pb-[20px] border-b-1 border-gray-500">
                            <FontAwesomeIcon icon={faCircleInfo} className="text-[20px] text-blue-400" />
                            <h2 className="text-[20px] font-medium">Yêu cầu công việc</h2>
                        </div>
                        <div className="mb-[32px] text-justify">{detailPost?.jobRequirement || 'Chưa cập nhật'}</div>
                        <div className="flex items-center gap-[16px] pb-[20px]">
                            <FontAwesomeIcon icon={faCircleInfo} className="text-[20px] text-blue-400" />
                            <h2 className="text-[20px] font-medium">Cách thức ứng tuyển: </h2>
                        </div>
                        <div className="mb-[16px] text-justify">
                            <button className="text-white bg-[#326ffc] hover:bg-[#14388c] rounded-[4px] py-[4px] px-[16px] h-[44px]">
                                Ứng tuyển ngay
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-span-4">
                    <div className="px-[32px] py-[20px] shadow-lg ">
                        <div className=" mb-[12px] flex items-center text-[20px]">
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
                </div>
            </div>
            <div className="p-[16px] flex items-center shadow-lg rounded-[4px] text-[20px] my-[20px]">
                <FontAwesomeIcon icon={faPlus} className="mr-[8px]" />
                Công việc tương tự
            </div>
            <div className="my-[20px]">
                <JobItem job={{ name: 'test', companyName: 'Công ty TNHH TEST', salary: -1, endDate: '24/10/2002' }} />
                <JobItem job={{ name: 'test', companyName: 'Công ty TNHH TEST', salary: -1, endDate: '24/10/2002' }} />
            </div>
        </div>
    );
};

export default DetailPage;
