import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faSuitcase, faBuilding, faFile, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';

import { Combobox, JobItem } from '~/components';
import { getCompanyById, setDetailCompanyNull } from '~/store/action/company';
import { apiGetPostsFromCareer } from '~/services/career';
const DetailCompany = () => {
    const { id } = useParams();
    const { detailCompany } = useSelector((state) => state.company);
    const [careerRelatedPosts, setCareerRelatedPosts] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCompanyById(id));
        return () => {
            dispatch(setDetailCompanyNull());
        };
    }, []);
    useEffect(() => {
        if (detailCompany) {
            const fetchingRelatedPosts = async () => {
                for (const career of detailCompany.Career) {
                    const id = career.id;
                    const response = await apiGetPostsFromCareer(id);
                    console.log(response);
                    if (response?.data.err === 0) {
                        setCareerRelatedPosts((prev) => [...prev, ...response.data.res.Posts]);
                    }
                }
            };
            fetchingRelatedPosts();
        }
    }, [detailCompany]);
    return (
        <div>
            <div className="mt-[20px] mb-[12px]">
                <div className="w-full">
                    <div className="h-[268px] overflow-hidden">
                        <img
                            src="https://static.topcv.vn/company_covers/ngan-hang-thuong-mai-co-phan-ky-thuong-viet-nam-5cd6348b681a5844910fad42207a58b1-632bbebd378e8.jpg"
                            alt=""
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="flex bg-white relative px-[24px] pt-[12px]">
                        <div className="h-[80px] mr-[24px] w-[140px]">
                            <div className="border-4 border-white border-solid absolute top-[-100px] bg-white rounded w-[140px] h-[140px]">
                                <img
                                    src={detailCompany?.imageLink}
                                    alt={detailCompany?.companyName}
                                    className="border-1 border-[#333] border-solid rounded-[4px] h-full object-contain"
                                />
                            </div>
                        </div>
                        <div className="break-words">
                            <p className="text-[24px] font-semibold text-[#333]">{detailCompany?.companyName}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-[20px] grid grid-cols-12 gap-[16px]">
                <div className="col-span-7 flex flex-col gap-[32px]">
                    <div className="shadow-lg px-[32px] py-[20px]">
                        <p className="text-[24px] font-medium pl-[8px] border-l-4 border-l-[#2A80B9] my-[24px]">
                            Giới thiệu công ty
                        </p>
                        <div>{detailCompany?.introduction || 'Chưa cập nhật'}</div>
                    </div>

                    <div className="shadow-lg px-[32px] py-[20px]">
                        <p className="text-[24px] font-medium pl-[8px] border-l-4 border-l-[#2A80B9] my-[24px]">
                            Đang tuyển dụng
                        </p>
                        <div className="my-[20px]">
                            {detailCompany?.Posts?.length === 0
                                ? 'Hiện tại công ty chưa đăng bài tuyển dụng'
                                : detailCompany?.Posts?.map((item) => {
                                      return <JobItem job={item} key={item.id} />;
                                  })}
                        </div>
                    </div>

                    <div className="shadow-lg px-[32px] py-[20px]">
                        <p>
                            <FontAwesomeIcon icon={faPlus} className="mr-[8px]" />
                            Công việc có cùng ngành nghề
                        </p>
                        <div className="my-[20px]">
                            {careerRelatedPosts.length === 0
                                ? 'Hiện tại các bài tuyển dụng chưa có ngành nghề liên quan đến ngành nghề công ty'
                                : careerRelatedPosts.map((item) => {
                                      return <JobItem job={item} key={item.id} />;
                                  })}
                        </div>
                    </div>
                </div>
                <div className="col-span-5">
                    <div className="px-[32px] py-[20px] shadow-lg ">
                        <div className=" mb-[12px] flex items-center text-[20px]">
                            <FontAwesomeIcon icon={faSuitcase} className="mr-[8px] p-[8px] bg-orange-300 text-white" />
                            <span className="font-medium">Thông tin công ty</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-4">
                                <FontAwesomeIcon icon={faLocationDot} />
                                <span className="font-medium">Địa chỉ:</span>
                                <span>{detailCompany?.address}</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <FontAwesomeIcon icon={faBuilding} />
                                <span className="font-medium">Quy mô công ty:</span>
                                <span>{detailCompany?.companySize || 'Chưa cập nhật'}</span>
                            </div>

                            <div className="flex items-center gap-4">
                                <FontAwesomeIcon icon={faFile} />
                                <span className="font-medium">Lĩnh vực:</span>
                                {detailCompany?.Career?.map((cc, index) => {
                                    return <span key={index}>{cc.careerName}</span>;
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailCompany;
