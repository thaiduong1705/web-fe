import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import swal from 'sweetalert';

import { candidateSchema } from './candidateValidation';
import { Combobox, Loading, TextEditor } from '~/components';
import { getCareers, getPositions, getDistricts, getAcademicLevels } from '~/store/action/otherData';
import { apiCreateCandidate } from '~/services/candidate';
import { editCandidateData, setEditCandidateDataNull } from '~/store/action/candidate';

const CreateCandidate = ({ isEdit = false }) => {
    const { id } = useParams();
    const currentYear = new Date().getFullYear();
    const academicLevelData = useSelector((state) => state.otherData.academicLevels);
    const careerListData = useSelector((state) => state.otherData.careers);
    const positionListData = useSelector((state) => state.otherData.positions);
    const districtListData = useSelector((state) => state.otherData.districts);
    const { candidateDataEdit } = useSelector((state) => state.candidate);

    const navigate = useNavigate();

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
        if (isEdit) {
            dispatch(editCandidateData(id));
        }
        return () => {
            dispatch(setEditCandidateDataNull());
        };
    }, []);
    //Đợi load ảnh
    const [isLoading, setIsLoading] = useState(false);

    //Edit
    const [careerOldList, setCareerOldList] = useState(null);
    const [districtOldList, setDistrictOldList] = useState(null);

    useEffect(() => {
        if (candidateDataEdit) {
            setCandidateName(candidateDataEdit.candidateName || '');
            setCandidateAge(candidateDataEdit.candidateName || 0);
            setCandidateCivilId(candidateDataEdit.candidateCivilId || '');
            setCandidateGender(candidateDataEdit.sex || 2);
            setExperienceYear(candidateDataEdit.experienceYear || 0);
            setCandidateAcademicLevels(candidateDataEdit.academicLevelId || '');
            setCandidatePosition(candidateDataEdit.positionId || '');
            setCareerOldList((prev) => {
                if (candidateDataEdit?.Career.length === 0) {
                    return [];
                }
                return candidateDataEdit?.Career.map((c) => c.id);
            });
            setCandidateCareer((prev) => {
                if (candidateDataEdit?.Career.length === 0) {
                    return [];
                }
                return candidateDataEdit?.Career.map((c) => c.id);
            });
            setDistrictOldList((prev) => {
                if (candidateDataEdit?.District.length === 0) {
                    return [];
                }
                return candidateDataEdit?.District.map((c) => c.id);
            });
            setCandidateDistrict((prev) => {
                if (candidateDataEdit?.District.length === 0) {
                    return [];
                }
                return candidateDataEdit?.District.map((c) => c.id);
            });
        }
    }, [candidateDataEdit]);

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
        setCandidateAge((prev) => birthday);
    };

    const [candidateData, setCandidateData] = useState(null);
    const [editData, setEditData] = useState(null);

    const createCandidate = async (event) => {
        event.stopPropagation();
        event.preventDefault();
        const ValidData = {
            candidateName: event.target[0].value,
            gender: gender,
            age: age,
            candidateCivilId: event.target[2].value,
            phoneNumber: event.target[3].value,
            email: event.target[4].value,
            homeAddress: event.target[5].value,
            academicLevelId: academicLevelId,
            careerList: careerList,
            experienceYear: event.target[6].value,
            candidatePosition: candidatePosition,
            districtList: districtList,
        };
        console.log(ValidData);
        const isValid_temp = await candidateSchema.isValid(ValidData).then((valid) => {
            if (valid === true) {
                if (!isEdit) {
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
                } else {
                    setEditData({
                        id: candidateDataEdit.id,
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
                }
            } else {
                try {
                    candidateSchema.validateSync(ValidData);
                } catch (error) {
                    if (error instanceof yup.ValidationError) {
                        swal(error.name, error.errors[0], 'error');
                    }
                }
            }
        });
        console.log(isValid_temp);
    };

    useEffect(() => {
        if (candidateData) {
            console.log('do');
            apiCreateCandidate(candidateData).then((response) => {
                if (response.data.err === 0) {
                    swal('Hoàn thành!', 'Dữ liệu đã được thêm thành công!', 'success').then(() => {
                        navigate(-1);
                    });
                } else {
                    swal('Lỗi!', 'Dữ liệu không được nạp thành công!', 'error');
                }
            });
        }
    }, [candidateData]);

    useEffect(() => {
        if (editData) {
            apiCreateCandidate(editData).then((response) => {
                if (response.data.err === 0) {
                    swal('Hoàn thành!', 'Dữ liệu đã được chỉnh sửa thành công!', 'success').then(() => {
                        navigate(-1);
                    });
                } else {
                    swal('Lỗi server!', 'Dữ liệu không được nạp thành công!', 'error');
                }
            });
        }
    }, [editData]);

    if (isEdit) {
        if (!candidateDataEdit) {
            return (
                <div className="flex justify-center item-center">
                    <Loading />
                </div>
            );
        }
    }

    return (
        <div className="w-full bg-blue-100 rounded-[8px] h-full mb-[20px] pb-[24px]">
            <form onSubmit={createCandidate}>
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
                            value={candidateName}
                        />
                    </div>
                    <div className="w-[30%]">
                        <label>Giới tính</label>
                        {isEdit && gender !== 2 && (
                            <Combobox
                                className="w-full h-[40px]"
                                title="Giới tính"
                                items={[
                                    { id: 1, value: 'Nam' },
                                    { id: 2, value: 'Nữ' },
                                ]}
                                onChange={(e) => handleChangeCandidateGender(e)}
                                initialValue={isEdit && gender !== 2 ? gender : null}
                            />
                        )}
                        {!isEdit && (
                            <Combobox
                                className="w-full h-[40px]"
                                title="Giới tính"
                                items={[
                                    { id: 1, value: 'Nam' },
                                    { id: 2, value: 'Nữ' },
                                ]}
                                onChange={(e) => handleChangeCandidateGender(e)}
                                needTilte={true}
                            />
                        )}
                    </div>
                </div>
                <div className="flex justify-between mb-[8px] gap-[10px] px-[8px]">
                    <div className="w-[25%]">
                        <label>Tuổi</label>
                        <input
                            className="w-full h-[40px] rounded-md outline-none px-[8px]"
                            name="NgayDangTuyen"
                            id="startDate"
                            onChange={(e) => {
                                const input = e.target.value.replace(/[^0-9]/g, '');
                                setCandidateAge((prev) => (isNaN(input) || input === '' ? 0 : parseInt(input, 10)));
                            }}
                            value={age}
                        />
                    </div>
                    <div className="w-[25%]">
                        <label>Số căn cước</label>
                        <input
                            className="w-full h-[40px] rounded-md outline-none px-[8px]"
                            name="SoLuong"
                            maxLength={12}
                            onChange={(e) => setCandidateCivilId(e.target.value)}
                            value={candidateCivilId}
                        />
                    </div>
                    <div className="w-[25%]">
                        <label>Điện thoại</label>
                        <input
                            className="w-full h-[40px] rounded-md outline-none px-[8px]"
                            name="SoLuong"
                            maxLength={10}
                            onChange={(e) => setCandidatePhonenumber(e.target.value)}
                            value={phoneNumber}
                        />
                    </div>
                    <div className="w-[25%]">
                        <label>Email</label>
                        <input
                            className="w-full h-[40px] rounded-md outline-none px-[8px]"
                            name="SoLuong"
                            type="text"
                            onChange={(e) => setCandidateEmail(e.target.value)}
                            value={email}
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
                            value={homeAddress}
                        />
                    </div>
                </div>
                <div className="flex justify-between mb-[8px] gap-[10px] px-[8px]">
                    <div className="w-[25%]">
                        <label>Trình độ văn hóa</label>
                        {isEdit && academicLevelId && (
                            <Combobox
                                title="Trình độ văn hóa"
                                className="h-[40px]"
                                items={academicLevelData.map((obj) => {
                                    return { id: obj.id, value: obj.academicLevelName };
                                })}
                                onChange={(e) => {
                                    setCandidateAcademicLevels(e.id);
                                }}
                                initialValue={isEdit && academicLevelId ? academicLevelId : null}
                            />
                        )}
                        {!isEdit && (
                            <Combobox
                                title="Trình độ văn hóa"
                                className="h-[40px]"
                                items={academicLevelData.map((obj) => {
                                    return { id: obj.id, value: obj.academicLevelName };
                                })}
                                onChange={(e) => {
                                    setCandidateAcademicLevels(e.id);
                                }}
                                needTilte={true}
                            />
                        )}
                    </div>
                    <div className="w-[25%]">
                        <label>Ngành nghề mong muốn</label>
                        {isEdit && careerOldList && (
                            <Combobox
                                title="Ngành nghề"
                                className="h-[40px]"
                                isMulti
                                isSearchable
                                items={[
                                    ...careerListData.map((obj) => {
                                        return { id: obj.id, value: obj.careerName };
                                    }),
                                ]}
                                onChange={(e) => {
                                    handleChangeCareer(e);
                                }}
                                initialValue={isEdit && careerOldList ? careerOldList : null}
                            />
                        )}
                        {!isEdit && (
                            <Combobox
                                title="Ngành nghề"
                                className="h-[40px]"
                                isMulti
                                isSearchable
                                items={[
                                    ...careerListData.map((obj) => {
                                        return { id: obj.id, value: obj.careerName };
                                    }),
                                ]}
                                onChange={(e) => {
                                    handleChangeCareer(e);
                                }}
                                needTilte={true}
                            />
                        )}
                    </div>
                    <div className="w-[25%]">
                        <label>Thâm niên làm việc:</label>
                        <input
                            title="Thâm niên"
                            className="w-full h-[40px] rounded-md outline-none px-[8px]"
                            onChange={(e) => {
                                const input = e.target.value.replace(/[^0-9]/g, '');
                                setExperienceYear((prev) => (isNaN(input) || input === '' ? 0 : parseInt(input, 10)));
                            }}
                            value={experienceYear}
                        />
                    </div>
                    <div className="w-[25%]">
                        <label>Cấp bậc mong muốn</label>
                        {isEdit && candidatePosition && (
                            <Combobox
                                title="Cấp bậc"
                                className="h-[40px]"
                                isSearchable={true}
                                items={[
                                    ...positionListData.map((obj) => {
                                        return { id: obj.id, value: obj.positionName };
                                    }),
                                ]}
                                onChange={(e) => setCandidatePosition(e.id)}
                                initialValue={isEdit && candidatePosition ? candidatePosition : null}
                            />
                        )}
                        {!isEdit && (
                            <Combobox
                                title="Cấp bậc"
                                className="h-[40px]"
                                isSearchable={true}
                                items={[
                                    ...positionListData.map((obj) => {
                                        return { id: obj.id, value: obj.positionName };
                                    }),
                                ]}
                                onChange={(e) => setCandidatePosition(e.id)}
                                needTilte={true}
                            />
                        )}
                    </div>
                    <div className="w-[25%]">
                        <label>Khu vực làm việc</label>

                        {isEdit && districtOldList && (
                            <Combobox
                                title="Ngành nghề"
                                className="h-[40px]"
                                isMulti
                                isSearchable
                                items={[
                                    ...careerListData.map((obj) => {
                                        return { id: obj.id, value: obj.careerName };
                                    }),
                                ]}
                                onChange={(e) => {
                                    handleChangeCareer(e);
                                }}
                                initialValue={isEdit && districtOldList ? districtOldList : null}
                            />
                        )}
                        {!isEdit && (
                            <Combobox
                                title="Khu vực làm việc"
                                className="h-[40px]"
                                isSearchable={true}
                                isMulti={true}
                                items={districtListData.map((obj) => {
                                    return { id: obj.id, value: obj.districtName };
                                })}
                                onChange={() => handleChangeDistrictList}
                                needTilte={true}
                            />
                        )}
                    </div>
                </div>

                <div className="mb-[8px] px-[8px]">
                    <input type="file" className="w-full" />
                </div>
                <div className="flex justify-end px-[8px]">
                    <input
                        className="bg-blue-600 py-[8px] px-[16px] text-white hover:bg-blue-400 rounded-[4px] mx-[12px]"
                        value="Xác nhận"
                        type="submit"
                    />
                    <Link
                        to="/ung-vien"
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
