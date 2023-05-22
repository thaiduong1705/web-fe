import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Combobox, TextEditor } from '~/components';
import { getCareers, getPositions, getDistricts } from '~/store/action/otherData';

const CreateCandidate = () => {
    const currentYear = new Date().getFullYear();
    const careerListData = useSelector((state) => state.otherData.careers);
    const positionListData = useSelector((state) => state.otherData.positions);
    const districtListData = useSelector((state) => state.otherData.districts);
    console.log(positionListData);
    console.log(districtListData);

    const [candidateName, setCandidateName] = useState('');
    const [candidateGender, setCandidateGender] = useState(''); // 1: Nam, 0: Nữ
    const [candidateAge, setCandidateAge] = useState(0);
    const [candidateCivilId, setCandidateCivilId] = useState('');
    const [candidatePhonenumber, setCandidatePhonenumber] = useState('');
    const [candidateEmail, setCandidateEmail] = useState('');
    const [candidateAddress, setCandidateAddress] = useState('');
    const [candidateCareer, setCandidateCareer] = useState([]);
    const [candidatePosition, setCandidatePosition] = useState('');
    const [candidateDistrict, setCandidateDistrict] = useState('');

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCareers(), getPositions(), getDistricts());
    }, []);

    const handleChangeCareer = (career) => {
        setCandidateCareer((candidateCareer) => []);
        career.map((data, index) => {
            setCandidateCareer((candidateCareer) => [...candidateCareer, data.id]);
        });
    };

    const handleChangeCandidateGender = (gender) => {
        console.log(gender.value);
        if (gender.value == 'Nam') {
            setCandidateGender((prev) => 1);
        } else if (gender.value == 'Nữ') {
            setCandidateGender((prev) => 0);
        }
        console.log(candidateGender);
    };

    const handleChangeCandidateAge = (birthday) => {
        var date = new Date(birthday).getFullYear();
        console.log(currentYear);
        console.log(date);
        setCandidateAge((prev) => currentYear - date);
        console.log(candidateAge);
    };

    return (
        <div className="w-full bg-blue-100 rounded-[8px] h-full mb-[20px] pb-[24px]">
            <form>
                <p className="font-medium text-[24px] py-5 pl-5 text-white bg-blue-700 items-center rounded-[8px]">
                    <FontAwesomeIcon icon={faUser} className="mr-[12px]" />
                    Thêm mới ứng viên
                </p>
                <div className="flex justify-between my-[12px] gap-[10px] px-[8px]">
                    <div className="w-[70%]">
                        <label htmlFor="JobName">Tên ứng viên</label>
                        <input
                            className="w-full h-[40px] rounded-md outline-none px-[8px]"
                            name="TenCongViec"
                            id="JobName"
                            placeholder=""
                            onChange={(e) => {
                                setCandidateName(e.target.value);
                            }}
                        />
                    </div>
                    <div className="w-[30%]">
                        <label>Giới tính</label>
                        <Combobox
                            className="w-full h-[40px]"
                            name="GioiTinh"
                            id="startDate"
                            items={[
                                { id: 1, value: 'Nam' },
                                { id: 2, value: 'Nữ' },
                            ]}
                            onChange={handleChangeCandidateGender}
                        />
                    </div>
                </div>
                <div className="flex justify-between mb-[8px] gap-[10px] px-[8px]">
                    <div className="w-[25%]">
                        <label>Ngày sinh</label>
                        <input
                            className="w-full h-[40px] rounded-md outline-none px-[8px] hover:opacity-80 hover:cursor-pointer"
                            name="NgayDangTuyen"
                            id="startDate"
                            type="date"
                            onChange={(e) => handleChangeCandidateAge(e.target.value)}
                        />
                    </div>
                    <div className="w-[25%]">
                        <label>Số căn cước</label>
                        <input
                            className="w-full h-[40px] rounded-md outline-none px-[8px]"
                            name="SoLuong"
                            maxLength={12}
                            onChange={(e) => setCandidateCivilId(e.target.value)}
                        />
                    </div>
                    <div className="w-[25%]">
                        <label>Điện thoại</label>
                        <input
                            className="w-full h-[40px] rounded-md outline-none px-[8px]"
                            name="SoLuong"
                            maxLength={10}
                            onChange={(e) => setCandidatePhonenumber(e.target.value)}
                        />
                    </div>
                    <div className="w-[25%]">
                        <label>Email</label>
                        <input
                            className="w-full h-[40px] rounded-md outline-none px-[8px]"
                            name="SoLuong"
                            type="email"
                            onChange={(e) => setCandidateEmail(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex justify-between mb-[8px] gap-[10px] px-[8px]">
                    <div className="flex-1">
                        <label>Địa chỉ thường trú</label>
                        <input
                            className="w-full h-[40px] rounded-md outline-none px-[8px]"
                            name="TenCongViec"
                            placeholder=""
                            onChange={(e) => setCandidateAddress(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex justify-between mb-[8px] gap-[10px] px-[8px]">
                    <div className="w-[33.333%]">
                        <label>Ngành nghề mong muốn</label>
                        <Combobox
                            title="Ngành nghề"
                            isMulti
                            isSearchable
                            items={[
                                { id: '', value: 'Tất cả ngành nghề' },
                                ...careerListData.map((obj) => {
                                    return { id: obj.id, value: obj.value };
                                }),
                            ]}
                            onChange={() => handleChangeCareer}
                        />
                    </div>
                    <div className="w-[33.333%]">
                        <label>Cấp bậc mong muốn</label>
                        <Combobox
                            title="Cấp bậc"
                            isSearchable={true}
                            items={positionListData.map((obj) => {
                                return { id: obj.id, value: obj.positionName };
                            })}
                            onChange={(e) => setCandidatePosition(e.id)}
                        />
                    </div>
                    <div className="w-[33.333%]">
                        <label>Khu vực làm việc</label>
                        <Combobox
                            title="Khu vực làm việc"
                            isSearchable={true}
                            items={districtListData.map((obj) => {
                                return { id: obj.id, value: obj.districtName };
                            })}
                            onChange={(e) => setCandidateDistrict(e.id)}
                        />
                    </div>
                </div>

                <div className="mb-[8px] px-[8px]">
                    <input type="file" className="w-full" />
                </div>
                <div className="flex justify-end px-[8px]">
                    <button
                        className="bg-blue-600 py-[8px] px-[16px] text-white hover:bg-blue-400 rounded-[4px] mx-[12px]"
                        value="Xác nhận"
                    >
                        Tạo mới
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

export default CreateCandidate;
