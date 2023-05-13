import React from 'react';
import { Link } from 'react-router-dom';
import { CandidateItem, Combobox } from '~/components';
const ListCandidates = () => {
    return (
        <div>
            <div className="bg-blue-800 text-black">
                <div className="px-[24px] py-[24px] flex gap-[10px] h-[80px]">
                    <span className="text-[16px] text-white leading-[32px] block">Tìm người: </span>
                    <Combobox title="Chọn ngành nghề" className="w-[200px] h-[35px]" isMulti isSearchable />
                    <Combobox title="Chọn quận huyện" className="w-[200px] h-[35px]" isMulti isSearchable />
                    <button className="w-[15%] cursor-pointer bg-blue-400 hover:bg-blue-500 text-white h-[35px] rounded-[8px] font-[550]">
                        Tìm kiếm
                    </button>
                </div>
                Đoạn này xem xét tìm kiếm lại
                <div className="px-[24px] pb-[20px] flex flex-wrap gap-[10px]">
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

            <div className="my-[48px] mx-[24px] flex justify-between">
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
                        <CandidateItem />
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListCandidates;
