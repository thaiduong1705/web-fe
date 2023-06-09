import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { faPhone, faEnvelope, faLocationDot, faVenusMars, faCalendar } from '@fortawesome/free-solid-svg-icons';

import { JobItem } from '~/components';
import { Loading } from '~/components';
import { useDispatch, useSelector } from 'react-redux';
import { getCandidateById, setDetailCandidateNull } from '~/store/action/candidate';

const DetailCandidate = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { detailCandidate } = useSelector((state) => state.candidate);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCandidateById(id));

        return () => {
            dispatch(setDetailCandidateNull());
        };
    }, [id]);
    if (!detailCandidate) {
        return (
            <div className="flex justify-center items-center">
                <Loading />
            </div>
        );
    }

    return (
        <div className="h-screen">
            <div className="bg-white rounded-[8px] px-[32px] py-[32px]">
                <div className="grid grid-cols-3 gap-[12x] ">
                    <div className="col-start-1 flex w-[100%] h-[160px] border-r-2 border-[#2A80B9]">
                        <img
                            src={detailCandidate?.profileImage}
                            alt=""
                            className="w-[30%] h-full object-contain border-1 border-solid border-black rounded-[4px]"
                        />
                        <div></div>
                        <div className="ml-[12px] mr-[12px] leading-[44px] flex flex-col">
                            <p className="text-[36px]">{detailCandidate?.candidateName}</p>
                            <p>Ngành nghề: bind ngành nghề</p>
                            <div className="flex gap-4 items-center">
                                <a
                                    className="text-blue-400 underline hover:text-red-600"
                                    href={detailCandidate?.CVImage}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Chèn ảnh CV
                                </a>
                                <div className="flex gap-4">
                                    <button
                                        className="bg-red-500 text-white rounded-[8px] max-h-16 border-transparent border-1 flex items-center p-[8px] hover:opacity-80"
                                        onClick={(e) => {
                                            navigate(`/ung-vien/chinh-sua/${detailCandidate.id}`, {
                                                state: 'EDIT_CANDIDATE',
                                            });
                                        }}
                                    >
                                        Chỉnh sửa
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-start-2 flex flex-col text-[20px] ml-[16px] border-r-2 border-[#2A80B9]">
                        <div className="flex items-center h-[33.3333%]">
                            <FontAwesomeIcon icon={faPhone} className="w-[30px]" />
                            <p className="ml-[12px]">{detailCandidate?.phoneNumber}</p>
                        </div>
                        <div className="flex items-center h-[33.3333%]">
                            <FontAwesomeIcon icon={faEnvelope} className="w-[30px]" />
                            <p className="ml-[12px]">{detailCandidate?.email}</p>
                        </div>
                        <div className="flex items-center h-[33.3333%]">
                            <FontAwesomeIcon icon={faLocationDot} className="w-[30px]" />
                            <p className="ml-[12px]">{detailCandidate?.homeAddress}</p>
                        </div>
                    </div>
                    <div className="col-start-3 text-[20px] ml-[16px]">
                        <div className="flex items-center h-[33.3333%]">
                            <FontAwesomeIcon icon={faVenusMars} className="w-[30px]" />
                            <p className="ml-[12px]">
                                {+detailCandidate?.gender === 0 && 'Nam'}
                                {+detailCandidate?.gender === 1 && 'Nữ'}
                            </p>
                        </div>
                        <div className="flex items-center h-[33.3333%]">
                            <FontAwesomeIcon icon={faCalendar} className="w-[30px]" />
                            <p className="ml-[12px]">{detailCandidate?.age} tuổi</p>
                        </div>
                    </div>
                </div>
                <div className="font-medium text-[24px] my-[24px] text-blue-500 border-l-4 border-blue-500 pl-[16px]">
                    Thông tin nghề nghiệp
                </div>
                <div className="grid grid-cols-3 text-[20px] gap-[80px] my-[24px]">
                    <div className="col-start-1">
                        <div className="flex justify-between h-[52px]">
                            <span className="font-medium">Ngành nghề: </span>
                        </div>
                        <div className="flex justify-between h-[52px]">
                            <span className="font-medium">Năm kinh nghiệm: </span>
                        </div>
                        <div className="flex justify-between h-[52px]">
                            <span className="font-medium">Trình độ văn hoá:</span>
                        </div>
                    </div>
                    <div className="col-start-2">
                        <div className="flex justify-between h-[52px]">
                            <span className="">{detailCandidate?.Career?.map((item) => item.careerName)}</span>
                        </div>
                        <div className="flex justify-between h-[52px]">
                            <span className="">{detailCandidate?.experienceYear} năm</span>
                        </div>
                        <div className="flex justify-between h-[52px]">
                            <span className="">{detailCandidate?.AcademicLevel.academicLevelName}</span>
                        </div>
                    </div>
                </div>
                <div
                    className="font-medium text-[24px] my-[24px] text-blue-500 border-l-4 border-blue-500 pl-[16px]"
                    onClick={() => console.log(detailCandidate)}
                >
                    Lịch sử ứng tuyển
                </div>
                <div>
                    {detailCandidate?.Post?.map((data) => {
                        return <JobItem job={data} key={data.id} />;
                    })}
                </div>
            </div>
        </div>
    );
};

export default DetailCandidate;
