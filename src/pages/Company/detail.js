import React from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faSuitcase, faBuilding, faFile, faPlus } from '@fortawesome/free-solid-svg-icons';

import { Combobox, JobItem } from '~/components';
const DetailCompany = () => {
    const { id } = useParams();
    return (
        <div>
            <div className="bg-blue-800 text-black">
                <div className="px-[24px] py-[24px] flex gap-[10px] h-[80px]">
                    <span className="text-[16px] text-white leading-[32px] block">Tìm công ty: </span>
                    <input
                        className="w-[51%] h-[35px] pl-[12px] border-solid border-1 rounded-[4px] border-transparent outline-none"
                        placeholder="Nhập tên công ty..."
                    />
                    <Combobox title="Chọn ngành nghề" className="w-[200px] h-[35px]" />
                    <Combobox title="Chọn tỉnh thành" className="w-[200px] h-[35px]" />
                    <button className="w-[15%] cursor-pointer bg-blue-400 text-white h-[35px] rounded-[4px] font-[550]">
                        Tìm kiếm
                    </button>
                </div>
            </div>
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
                            <div className="border-4 border-white border-solid absolute top-[-100px] bg-white rounded">
                                <img
                                    src="https://cdn.topcv.vn/140/company_logos/ngan-hang-thuong-mai-co-phan-ky-thuong-viet-nam-632bbf5a763f7.jpg"
                                    alt=""
                                    className="border-1 border-[#333] border-solid rounded-[4px] h-full object-contain"
                                />
                            </div>
                        </div>
                        <div className="break-words">
                            <p className="text-[24px] font-semibold text-[#333]">Bind tên công ty</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-[20px] grid grid-cols-12 gap-[16px]">
                <div className="col-span-8 flex flex-col gap-[32px]">
                    <div className="shadow-lg px-[32px] py-[20px]">
                        <p className="text-[24px] font-medium pl-[8px] border-l-4 border-l-[#2A80B9] my-[24px]">
                            Giới thiệu công ty
                        </p>
                        <div>Bind giới thiệu</div>
                    </div>

                    <div className="shadow-lg px-[32px] py-[20px]">
                        <p className="text-[24px] font-medium pl-[8px] border-l-4 border-l-[#2A80B9] my-[24px]">
                            Đang tuyển dụng
                        </p>
                        <JobItem
                            job={{ name: 'test', companyName: 'Công ty TNHH TEST', salary: -1, endDate: '24/10/2002' }}
                        />
                    </div>

                    <div className="shadow-lg px-[32px] py-[20px]">
                        <p>
                            <FontAwesomeIcon icon={faPlus} className="mr-[8px]" />
                            Công việc có cùng ngành nghề
                        </p>
                        <div className="my-[20px]">
                            <JobItem
                                job={{
                                    name: 'test',
                                    companyName: 'Công ty TNHH TEST',
                                    salary: -1,
                                    endDate: '24/10/2002',
                                }}
                            />
                            <JobItem
                                job={{
                                    name: 'test',
                                    companyName: 'Công ty TNHH TEST',
                                    salary: -1,
                                    endDate: '24/10/2002',
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-span-4">
                    <div className="px-[32px] py-[20px] shadow-lg ">
                        <div className=" mb-[12px] flex items-center text-[20px]">
                            <FontAwesomeIcon icon={faSuitcase} className="mr-[8px] p-[8px] bg-orange-300 text-white" />
                            <span className="font-medium">Bind tên công ty</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-4">
                                <FontAwesomeIcon icon={faLocationDot} />
                                <span className="font-medium">Địa chỉ:</span>
                                <span>Bind địa chỉ</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <FontAwesomeIcon icon={faBuilding} />
                                <span className="font-medium">Quy mô công ty:</span>
                                <span>Bind quy mô</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <FontAwesomeIcon icon={faFile} />
                                <span className="font-medium">Đã đăng:</span>
                                <span>Bind số lượng bài</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <FontAwesomeIcon icon={faFile} />
                                <span className="font-medium">Lĩnh vực:</span>
                                <span>Bind ngành nghề</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailCompany;
