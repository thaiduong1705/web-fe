import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';
import { Combobox } from '~/components';

const CreatePost = () => {
    const currentDate = new Date().toISOString().split('T')[0];
    return (
        <div className="w-full bg-gray-200 px-[8px] rounded-[4px] h-full mb-[20px]">
            <form>
                <p className="font-medium text-[24px]">
                    <FontAwesomeIcon icon={faFileLines} className="mr-[4px]" />
                    Tạo bài tuyển dụng
                </p>
                <span className="w-full h-[5px] block bg-blue-300 my-[8px]"></span>
                Bí quá
                <div className="flex justify-between mb-[8px]">
                    <div>
                        <label htmlFor="JobName">Tên công việc</label>
                        <input className="w-full h-16 rounded-md" name="TenCongViec" id="JobName" />
                    </div>
                    <div className="w-[30%]">
                        <label htmlFor="JobName">Công ty</label>
                        <Combobox placeholder="Tìm kiếm..." title="Công ty" className="w-[100%]" />
                    </div>
                    <div>
                        <label htmlFor="amount">Số lượng ứng tuyển</label>
                        <input className="w-full h-16 rounded-md" name="SoLuong" id="amount" />
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="w-[40%]">
                        <label htmlFor="startDate">Ngày đăng tuyển</label>
                        <input
                            className="w-full"
                            name="NgayDangTuyen"
                            id="startDate"
                            type="date"
                            min={currentDate}
                            value={currentDate}
                        />
                    </div>
                    <div className="w-[40%]">
                        <label htmlFor="endDate">Ngày hết hạn</label>
                        <input className="w-full" name="NgayHetHan" id="endDate" type="date" min={currentDate} />
                    </div>
                </div>
                <div className="w-full h-[1px] bg-black my-[12px] opacity-20 "></div>
                <div className="">
                    <label htmlFor="">Ngành nghề</label>
                    <input className="" name="" />
                </div>
                <div className="flex justify-between">
                    <div className="w-[20%]">
                        <label>Vị trí tuyển dụng</label>
                        <Combobox title="Vị trí tuyển dụng" placeholder="Tìm kiếm vị trí..." />
                    </div>
                    <div className="w-[20%]">
                        <label>Loại hình</label>
                        <Combobox title="Loại hình làm việc" placeholder="Tìm kiếm..." />
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="w-[20%]">
                        <label>Trình độ</label>
                        <Combobox placeholder="Tìm kiếm" title="Trình độ" />
                    </div>
                    <div className="w-[20%]">
                        <label htmlFor="expYear">Số năm kinh nghiệm</label>
                        <input className="w-full" name="SoNamKinhNghiem" id="expYear" />
                    </div>
                    <div className="w-[20%]">
                        <label htmlFor="province">Tỉnh thành</label>
                        <input className="w-full" name="TinhThanh" id="province" />
                    </div>
                </div>
                <div className="">
                    <label htmlFor="address">Địa chỉ làm việc</label>
                    <input name="DiaChi" id="address" className="w-full" />
                </div>
                <div>
                    <label>Yêu cầu ứng viên</label>
                    <textarea className="h-auto w-full resize-none" rows={10}></textarea>
                    <label>Trách nhiệm công việc</label>
                    <textarea className="h-auto w-full resize-none" rows={10}></textarea>
                    <label>Quyền lợi công việc</label>
                    <textarea className="h-auto w-full resize-none" rows={10}></textarea>
                </div>
                <div className="flex justify-end">
                    <button
                        className="bg-blue-600 py-[8px] px-[16px] text-white hover:bg-blue-400 rounded-[4px] mx-[12px]"
                        value="Xác nhận"
                    >
                        Xác nhận
                    </button>
                    <Link
                        to="/posts"
                        className="bg-red-500 hover:bg-red-300 rounded-[4px] flex justify-center items-center text-white py-[8px] px-[16px]"
                    >
                        Quay lại
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default CreatePost;
