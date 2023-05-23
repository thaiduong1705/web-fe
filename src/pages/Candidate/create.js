import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Combobox, TextEditor } from '~/components';
import { getCareers, getPositions, getDistricts, getAcademicLevels } from '~/store/action/otherData';
import { apiCreateCandidate } from '~/services/candidate';

const CreateCandidate = () => {
    const currentYear = new Date().getFullYear();
    const academicLevelData = useSelector((state) => state.otherData.academicLevels);
    const careerListData = useSelector((state) => state.otherData.careers);
    const positionListData = useSelector((state) => state.otherData.positions);
    const districtListData = useSelector((state) => state.otherData.districts);

    const [candidateName, setCandidateName] = useState('');
    const [age, setCandidateAge] = useState(0);
    const [phoneNumber, setCandidatePhonenumber] = useState('');
    const [candidateCivilId, setCandidateCivilId] = useState('');
    const [email, setCandidateEmail] = useState('');
    const [homeAddress, setCandidateAddress] = useState('');
    const [gender, setCandidateGender] = useState(true); // true: Nam, false: Nữ
    const [experienceYear, setExperienceYear] = useState(0);
    const [academicLevelId, setCandidateAcademicLevels] = useState('');
    const [careerList, setCandidateCareer] = useState([]);
    const [candidatePosition, setCandidatePosition] = useState('');
    const [districtList, setCandidateDistrict] = useState([]);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAcademicLevels(), getCareers(), getDistricts(), getPositions());
        console.log(careerListData);
    }, []);

    const [candidateData, setCandidateData] = useState({
        candidateName: candidateName,
        gender: gender,
        age: age,
        candidateCivilId: candidateCivilId,
        phoneNumber: phoneNumber,
        email: email,
        homeAddress: homeAddress,
        academicLevelId: academicLevelId,
        careerList: careerList,
        experienceYear: experienceYear,
        candidatePosition: candidatePosition,
        districtList: districtList,
    });

    const handleChangeCareer = (career) => {
        console.log(career);
        setCandidateCareer((careerList) => []);
        career.map((data, index) => {
            setCandidateCareer((careerList) => [...careerList, data.id]);
        });
    };

    const handleChangeDistrictList = (district) => {
        const newDistrictIds = district.map((item) => {
            return item.id;
        });
        setCandidateDistrict(newDistrictIds);
    };

    const handleChangeCandidateGender = (gender) => {
        if (gender.value === 'Nam') {
            setCandidateGender((prev) => true);
        } else if (gender.value === 'Nữ') {
            setCandidateGender((prev) => false);
        }
    };

    const handleChangeCandidateAge = (birthday) => {
        var date = new Date(birthday).getFullYear();
        setCandidateAge((prev) => currentYear - date);
    };

    useEffect(() => {
        apiCreateCandidate(candidateData);
        console.log('success');
    }, [candidateData]);

    const handleCreateCandidate = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setCandidateData({
            candidateName: candidateName,
            gender: gender,
            age: age,
            candidateCivilId: candidateCivilId,
            phoneNumber: phoneNumber,
            email: email,
            homeAddress: homeAddress,
            academicLevelId: academicLevelId,
            careerList: careerList,
            experienceYear: experienceYear,
            candidatePosition: candidatePosition,
            districtList: districtList,
        });
        console.log(candidateData);
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
                            name="TenUngVien"
                            id="candidateName"
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
                            onChange={(e) => handleChangeCandidateGender(e)}
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
                    <div className="w-[25%]">
                        <label>Trình độ văn hóa</label>
                        <Combobox
                            title="Trình độ văn hóa"
                            className="h-[40px]"
                            isSearchable={true}
                            items={academicLevelData.map((obj) => {
                                return { id: obj.id, value: obj.academicLevelName };
                            })}
                            onChange={(e) => {
                                setCandidateAcademicLevels(e.id);
                            }}
                        />
                    </div>
                    <div className="w-[25%]">
                        <label>Ngành nghề mong muốn</label>
                        <Combobox
                            title="Ngành nghề"
                            className="h-[40px]"
                            isMulti
                            isSearchable
                            items={[
                                { id: '', value: 'Tất cả ngành nghề' },
                                ...careerListData.map((obj) => {
                                    return { id: obj.id, value: obj.careerName };
                                }),
                            ]}
                            onChange={(e) => {
                                console.log(e);
                                handleChangeCareer(e);
                            }}
                        />
                    </div>
                    <div className="w-[25%]">
                        <label>Thâm niên làm việc:</label>
                        <input
                            title="Thâm niên"
                            className="w-full h-[40px] rounded-md outline-none px-[8px]"
                            onChange={(e) => {
                                setExperienceYear(parseInt(e.target.value));
                            }}
                        />
                    </div>
                    <div className="w-[25%]">
                        <label>Cấp bậc mong muốn</label>
                        <Combobox
                            title="Cấp bậc"
                            className="h-[40px]"
                            isSearchable={true}
                            items={[
                                { id: '', value: 'Tất cả ngành nghề' },
                                ...positionListData.map((obj) => {
                                    return { id: obj.id, value: obj.positionName };
                                }),
                            ]}
                            onChange={(e) => setCandidatePosition(e.id)}
                        />
                    </div>
                    <div className="w-[25%]">
                        <label>Khu vực làm việc</label>
                        <Combobox
                            title="Khu vực làm việc"
                            className="h-[40px]"
                            isSearchable={true}
                            isMulti={true}
                            items={districtListData.map((obj) => {
                                return { id: obj.id, value: obj.districtName };
                            })}
                            onChange={handleChangeDistrictList}
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
                        onClick={(e) => handleCreateCandidate(e)}
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
