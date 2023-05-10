import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';
import { Combobox, TextEditor } from '~/components';

// Restricts input for the given textbox to the given inputFilter.
function setInputFilter(textbox, inputFilter, errMsg) {
    ['input', 'keydown', 'keyup', 'mousedown', 'mouseup', 'select', 'contextmenu', 'drop', 'focusout'].forEach(
        function (event) {
            textbox.addEventListener(event, function (e) {
                if (inputFilter(this.value)) {
                    // Accepted value
                    if (['keydown', 'mousedown', 'focusout'].indexOf(e.type) >= 0) {
                        this.classList.remove('input-error');
                        this.setCustomValidity('');
                    }
                    this.oldValue = this.value;
                    this.oldSelectionStart = this.selectionStart;
                    this.oldSelectionEnd = this.selectionEnd;
                } else if (this.hasOwnProperty('oldValue')) {
                    // Rejected value - restore the previous one
                    this.classList.add('input-error');
                    this.setCustomValidity(errMsg);
                    this.reportValidity();
                    this.value = this.oldValue;
                    this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
                } else {
                    // Rejected value - nothing to restore
                    this.value = '';
                }
            });
        },
    );
}

const CreatePost = () => {
    const currentDate = new Date().toISOString().split('T')[0];
    const [jobName, setJobName] = useState('');
    const [recruitAmount, setRecruitAmount] = useState(0);
    const [startDate, setStartDate] = useState(currentDate);
    const [endDate, setEndDate] = useState();
    const [address, setAddress] = useState('');
    const [expYear, setExpYear] = useState(0);
    const [salary, setSalary] = useState([0, 100000000]);
    const [requirement, setRequirement] = useState('');
    const [response, setResponse] = useState('');
    const [reward, setReward] = useState('');

    const handleRequirementChange = (value) => {
        setRequirement((prev) => value);
        console.log(requirement);
    };
    const handleResponseChange = (value) => {
        setResponse((prev) => value);
        console.log(response);
    };
    const handleRewardChange = (value) => {
        setReward((prev) => value);
        console.log(reward);
    };

    const handleSubmit = () => {};
    return (
        <div className="w-full bg-gray-200 px-[8px] rounded-[4px] h-full mb-[20px]">
            <form>
                <p className="font-medium text-[24px]">
                    <FontAwesomeIcon icon={faFileLines} className="mr-[4px]" />
                    Tạo bài tuyển dụng
                </p>
                <span className="w-full h-[5px] block bg-blue-300 my-[8px]"></span>
                Bí quá
                <div className="flex justify-between mb-[8px] gap-[10px]">
                    <div className="flex-1">
                        <label htmlFor="JobName">Tên công việc</label>
                        <input
                            className="w-full h-[40px] rounded-md outline-none px-[8px]"
                            name="TenCongViec"
                            id="JobName"
                            value={jobName}
                            onChange={(e) => setJobName((prev) => e.target.value)}
                        />
                    </div>
                    <div className="w-[20%]">
                        <label htmlFor="amount">Số lượng ứng tuyển</label>
                        <input
                            className="w-full h-[40px] rounded-md outline-none px-[8px]"
                            name="SoLuong"
                            id="amount"
                            value={recruitAmount}
                            onChange={(e) => {
                                const input = e.target.value.replace(/[^0-9]/g, '');
                                setRecruitAmount((prev) => (isNaN(input) || input === '' ? 0 : parseInt(input, 10)));
                            }}
                        />
                    </div>
                </div>
                <div className="flex justify-between gap-[10px]">
                    <div className="w-[40%]">
                        <label htmlFor="JobName">Công ty</label>
                        <Combobox title="Công ty" className="w-[100%] h-[40px]" isSearchable />
                    </div>
                    <div className="w-[40%]">
                        <label htmlFor="startDate">Ngày đăng tuyển</label>
                        <input
                            className="w-full h-[40px] rounded-md outline-none px-[8px] hover:opacity-80 hover:cursor-pointer"
                            name="NgayDangTuyen"
                            id="startDate"
                            type="date"
                            min={currentDate}
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                        />
                    </div>
                    <div className="w-[40%]">
                        <label htmlFor="endDate">Ngày hết hạn</label>
                        <input
                            className="w-full h-[40px] rounded-md outline-none px-[8px] hover:opacity-80 hover:cursor-pointer"
                            name="NgayHetHan"
                            id="endDate"
                            type="date"
                            min={startDate}
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                        />
                    </div>
                </div>
                <div className="w-full h-[1px] bg-black my-[12px] opacity-20 "></div>
                <div className="flex gap-[10px] mb-[8px]">
                    <div className="w-[51%]">
                        <label htmlFor="">Ngành nghề</label>
                        <Combobox title="Ngành nghề" className="w-[100%] h-[40px]" isSearchables />
                    </div>
                    <div className="w-[25%]">
                        <label>Vị trí tuyển dụng</label>
                        <Combobox title="Vị trí tuyển dụng" className="h-[40px]" />
                    </div>
                    <div className="w-[25%]">
                        <label>Loại hình</label>
                        <Combobox title="Loại hình làm việc" className="h-[40px]" />
                    </div>
                </div>
                <div className="flex gap-[10px] mb-[8px]">
                    <div className="w-[25%]">
                        <label>Trình độ</label>
                        <Combobox placeholder="Tìm kiếm" title="Trình độ" className="h-[40px]" />
                    </div>
                    <div className="w-[25%]">
                        <label htmlFor="expYear">Số năm kinh nghiệm</label>
                        <input
                            className="w-full h-[40px] rounded-md outline-none px-[8px]"
                            name="SoNamKinhNghiem"
                            id="expYear"
                            value={expYear}
                            onChange={(e) => {
                                const input = e.target.value.replace(/[^0-9]/g, '');
                                setExpYear((prev) => (isNaN(input) || input === '' ? 0 : parseInt(input, 10)));
                            }}
                        />
                    </div>
                    <div className="w-[25%]">
                        <label htmlFor="salaryMin">Lương tối thiểu</label>
                        <input
                            className="w-full h-[40px] rounded-md outline-none px-[8px]"
                            name="salaryMin"
                            id="salary"
                            pattern="[0-9]*"
                            value={salary[0].toLocaleString('vi-VN')}
                            onChange={(e) => {
                                const input = e.target.value.replace(/[^0-9]/g, '');
                                setSalary((prev) => {
                                    const newState = [...prev];
                                    newState[0] = isNaN(input) || input === '' ? 0 : parseInt(input, 10);
                                    return newState;
                                });
                            }}
                        />
                    </div>
                    <div className="w-[25%]">
                        <label htmlFor="salaryMin">Lương tối đa</label>
                        <input
                            className="w-full h-[40px] rounded-md outline-none px-[8px]"
                            name="salaryMin"
                            id="salary"
                            value={salary[1].toLocaleString('vi-VN')}
                            onChange={(e) => {
                                const input = e.target.value.replace(/[^0-9]/g, '');
                                setSalary((prev) => {
                                    const newState = [...prev];
                                    newState[1] = isNaN(input) || input === '' ? 0 : parseInt(input, 10);
                                    return newState;
                                });
                            }}
                        />
                    </div>
                </div>
                <div className="mb-[8px] flex  gap-[10px]">
                    <div className="w-[70%]">
                        <label htmlFor="address">Địa chỉ làm việc</label>
                        <input
                            name="DiaChi"
                            id="address"
                            className="w-full h-[40px] rounded-md outline-none px-[8px]"
                            value={address}
                            onChange={(e) => setAddress((prev) => e.target.value)}
                        />
                    </div>
                    <div className="w-[30%]">
                        <label htmlFor="province">Tỉnh thành</label>
                        <Combobox
                            className="w-full h-[40px] rounded-md outline-none px-[8px]"
                            title="Tỉnh thành"
                            isSearchable
                        />
                    </div>
                </div>
                <div className="mb-[8px]">
                    <label>Yêu cầu ứng viên</label>
                    <TextEditor className="w-[100%] h-[400px] mb-[8px]" onChange={handleRequirementChange} />
                    <label>Trách nhiệm công việc</label>
                    <TextEditor className="w-[100%] h-[400px] mb-[8px]" onChange={handleResponseChange} />
                    <label>Quyền lợi công việc</label>
                    <TextEditor className="w-[100%] h-[400px] mb-[8px]" onChange={handleRewardChange} />
                </div>
                <div className="flex justify-end">
                    <button
                        className="bg-blue-600 py-[8px] px-[16px] text-white hover:bg-blue-400 rounded-[4px] mx-[12px]"
                        value="Xác nhận"
                        onClick={handleSubmit}
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