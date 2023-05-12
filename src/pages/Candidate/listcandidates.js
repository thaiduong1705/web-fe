import React from 'react';
import { Link } from 'react-router-dom';
import { Combobox } from '~/components';
const ListCandidates = () => {
    return (
        <div>
            <div className="bg-blue-500 text-black">
                <div className="px-[14px] py-[20px] flex gap-[10px] h-[80px]">
                    <span className="text-[16px] text-white leading-[32px] block">Tìm người</span>
                    <Combobox title="Chọn ngành nghề" className="w-[200px] h-[35px]" isMulti isSearchable />
                    <Combobox title="Chọn quận huyện" className="w-[200px] h-[35px]" isMulti isSearchable />
                    <button className="w-[15%] cursor-pointer bg-slate-500 text-white h-[35px]">Tìm kiếm</button>
                </div>
                Đoạn này xem xét tìm kiếm lại
                <div className="px-[15px] pb-[20px] flex flex-wrap gap-[10px]">
                    <Combobox title="Cấp bậc" className="w-[240px]" />
                    <Combobox title="Loại hình" className="w-[240px]" />
                    <Combobox title="Kinh nghiệm" className="w-[240px]" />
                    <Combobox title="Thời gian" className="w-[240px]" />
                    <Combobox title="Giới tính" className="w-[240px]" />
                    <Combobox title="Độ tuổi" className="w-[240px]" />
                    <Combobox title="Trình độ" className="w-[240px]" />
                    <Combobox title="Mức lương" className="w-[240px]" />
                    <Combobox title="Ngành nghề" className="w-[240px]" />
                </div>
            </div>

            <div className="my-[48px] flex justify-between">
                <div className="relative before:content-[''] before:absolute before:h-full before:rounded-[4px] before:w-[6px] before:bg-[#2A80B9] before:left-0 pl-[24px]">
                    <p className="text-[24px] font-medium leading-[1.4] mb-[4px]">Ứng viên</p>
                </div>
                <div className="flex items-center">
                    <Link
                        to="/ung-vien/tao-ung-vien"
                        className="bg-blue-600 text-white rounded-[4px] border-transparent border-1 flex items-center p-[4px] hover:opacity-80 h-fit"
                    >
                        Thêm mới ứng viên
                    </Link>
                </div>
            </div>

            <div className="my-[40px]">
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
                        <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-6 py-4">
                                <div>
                                    <p className="uppercase text-[16px]">Bind tên ở đây</p>
                                    <div className="flex">
                                        <div className="mr-[4px]">
                                            <span className="font-medium">Học vấn: </span>
                                            <span>Bind trình độ chuyên môn</span>
                                        </div>
                                        <span>|</span>
                                        <div className="ml-[4px]">
                                            <span className="font-medium">Cấp bậc: </span>
                                            <span>Bind cấp bậc</span>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">Bind kinh nghiệm</td>
                            <td className="whitespace-nowrap px-6 py-4">bind trình độ chuyên môn</td>
                            <td className="whitespace-nowrap px-6 py-4">Bind lương mong muốn</td>
                            <td className="whitespace-nowrap px-6 py-4">bind khu vực làm việc</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListCandidates;