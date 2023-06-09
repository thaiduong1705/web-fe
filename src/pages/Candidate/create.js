import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faTrash, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import Swal from 'sweetalert2';

import { candidateSchema } from './candidateValidation';
import { Combobox, Loading } from '~/components';
import { apiCreateCandidate, apiUpdateCandidate } from '~/services/candidate';
import { editCandidateData, setEditCandidateDataNull } from '~/store/action/candidate';
import { apiRemoveImagesCompany, apiUploadImagesCompany } from '~/services/image';

const CreateCandidate = ({ isEdit = false }) => {
    const { id } = useParams();
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
    const [gender, setCandidateGender] = useState(null); // true: Nam, false: Nữ
    const [experienceYear, setExperienceYear] = useState(0);
    const [academicLevelId, setCandidateAcademicLevels] = useState('');
    const [careerList, setCandidateCareer] = useState([]);
    const [candidatePosition, setCandidatePosition] = useState('');
    const [districtList, setCandidateDistrict] = useState([]);
    const [CVImage, setCVImage] = useState('');
    const [profileImage, setProfileImage] = useState('');

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
    const [isCVLoading, setIsCVLoading] = useState(false);
    const [isProfileLoading, setIsProfileLoading] = useState(false);

    //Edit
    const [careerOldList, setCareerOldList] = useState(null);
    const [districtOldList, setDistrictOldList] = useState(null);

    useEffect(() => {
        console.log(candidateDataEdit);
        if (candidateDataEdit) {
            setCandidateName(candidateDataEdit.candidateName || '');
            setCandidateAge(candidateDataEdit.age || 0);
            setCandidateCivilId(candidateDataEdit.candidateCivilId || '');
            setCandidateAddress(candidateDataEdit?.homeAddress || '');
            setCandidatePhonenumber(candidateDataEdit?.phoneNumber || '');
            setCandidateEmail(candidateDataEdit?.email || '');
            setCandidateGender(candidateDataEdit?.gender === null ? 2 : candidateDataEdit.gender);
            console.log(`${gender};${+gender}`);
            setExperienceYear(candidateDataEdit?.experienceYear || 0);
            setCandidateAcademicLevels(candidateDataEdit?.academicLevelId || '');
            setCandidatePosition(candidateDataEdit?.positionId || '');
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
            setCVImage(candidateDataEdit?.CVImage || '');
            setProfileImage(candidateDataEdit?.profileImage || '');
            console.log(careerOldList, districtOldList);
        }
    }, [candidateDataEdit]);

    const handleChangeCareer = (career) => {
        const newCareerId = career.map((data, index) => {
            return data.id;
        });
        setCandidateCareer(newCareerId);
    };

    const handleChangeDistrictList = (district) => {
        const newDistrictIds = district.map((item) => {
            return item.id;
        });
        setCandidateDistrict(newDistrictIds);
    };

    const handleChangeCandidateGender = (gender) => {
        if (gender.value === 'Nam') {
            setCandidateGender((prev) => false);
        } else {
            setCandidateGender((prev) => true);
        }
    };

    const handleUploadCVImage = async (e) => {
        e.stopPropagation();

        let files = e.target.files;
        console.log(files);
        if (files.length !== 0) {
            setIsCVLoading(true);
            // let formData = new FormData();
            const formData = new FormData();
            formData.append('image', files[0]);
            const response = await apiUploadImagesCompany(formData);
            if (response.status === 200 && response.data.err === 0) {
                setCVImage(response?.data.res.response.secure_url);
            }
            setIsCVLoading(false);
        }
    };

    const handleUploadProfileImage = async (e) => {
        e.stopPropagation();

        let files = e.target.files;
        if (files.length !== 0) {
            setIsProfileLoading(true);
            // let formData = new FormData();
            const formData = new FormData();
            formData.append('image', files[0]);
            const response = await apiUploadImagesCompany(formData);
            if (response.status === 200 && response.data.err === 0) {
                setProfileImage(response?.data.res.response.secure_url);
            }
            setIsProfileLoading(false);
        }
    };

    const handleDeleteCVImage = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        const response = await apiRemoveImagesCompany({ imageLink: CVImage });
        if (response.status === 200 && response.data.err === 0) {
            setCVImage('');
        }
    };

    const handleDeleteProfileImage = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        const response = await apiRemoveImagesCompany({ imageLink: profileImage });
        if (response.status === 200 && response.data.err === 0) {
            setProfileImage('');
        }
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
            positionId: candidatePosition,
            careerList: careerList,
            experienceYear: event.target[6].value,
            candidatePosition: candidatePosition,
            districtList: districtList,
            CVImage: CVImage,
            profileImage: profileImage,
        };
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
                        positionId: candidatePosition,
                        districtList: districtList,
                        CVImage: CVImage,
                        profileImage: profileImage,
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
                        experienceYear: experienceYear,
                        positionId: candidatePosition,
                        careerNewList: careerList,
                        districtNewList: districtList,
                        careerOldList,
                        districtOldList,
                        CVImage: CVImage,
                        profileImage: profileImage,
                    });
                }
            } else {
                try {
                    candidateSchema.validateSync(ValidData);
                } catch (error) {
                    if (error instanceof yup.ValidationError) {
                        Swal.fire({
                            icon: 'error',
                            title: error.name,
                            text: error.errors[0],
                        });
                    }
                }
            }
        });
    };

    useEffect(() => {
        if (candidateData) {
            apiCreateCandidate(candidateData).then((response) => {
                if (response.data.err === 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Thành công!',
                        text: 'Dữ liệu đã được thêm thành công!',
                    }).then(() => {
                        navigate(-1, { replace: true });
                    });
                } else if (response.data.err === 3) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Có lỗi!',
                        text: response.data.msg,
                    });
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Có lỗi!',
                        text: 'Dữ liệu không được nạp thành công!',
                    });
                }
            });
        }
    }, [candidateData]);

    useEffect(() => {
        if (editData) {
            console.log(editData);
            apiUpdateCandidate(editData).then((response) => {
                if (response.data.err === 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Thành công!',
                        text: 'Dữ liệu đã được chỉnh sửa thành công!',
                    }).then(() => {
                        navigate(-1, { replace: true });
                    });
                } else if (response.data.err === 3) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Có lỗi!',
                        text: response.data.msg,
                    });
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Có lỗi!',
                        text: 'Dữ liệu không được nạp thành công!',
                    });
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
                                    { id: 0, value: 'Nam' },
                                    { id: 1, value: 'Nữ' },
                                ]}
                                onChange={(e) => {
                                    handleChangeCandidateGender(e);
                                }}
                                initialValue={isEdit && gender !== 2 ? +gender : null}
                            />
                        )}
                        {!isEdit && (
                            <Combobox
                                className="w-full h-[40px]"
                                title="Giới tính"
                                items={[
                                    { id: 0, value: 'Nam' },
                                    { id: 1, value: 'Nữ' },
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
                                onChange={(e) => {
                                    setCandidatePosition(e.id);
                                    console.log(e);
                                }}
                                needTilte={true}
                            />
                        )}
                    </div>
                    <div className="w-[25%]">
                        <label>Khu vực làm việc</label>

                        {isEdit && districtOldList && (
                            <Combobox
                                title="Khu vực làm việc"
                                className="h-[40px]"
                                isMulti
                                isSearchable
                                items={[
                                    ...districtListData.map((obj) => {
                                        return { id: obj.id, value: obj.districtName };
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
                                onChange={(e) => {
                                    handleChangeDistrictList(e);
                                }}
                                needTilte={true}
                            />
                        )}
                    </div>
                </div>

                <div className="mb-[8px] px-[8px] flex items-center justify-start gap-[16px]">
                    <div>
                        <label
                            className="w-[250px] border-2 h-[250px] my-4 gap-4 flex flex-col items-center justify-center border-gray-400 border-dashed rounded-md hover:cursor-pointer"
                            htmlFor="file"
                        >
                            {isCVLoading ? (
                                <Loading />
                            ) : (
                                <>
                                    {!CVImage ? (
                                        <>
                                            <FontAwesomeIcon icon={faCamera} />
                                            <span>Thêm ảnh CV</span>
                                        </>
                                    ) : (
                                        <div className="relative w-full h-full">
                                            {CVImage && (
                                                <>
                                                    <img
                                                        src={CVImage}
                                                        alt="preview"
                                                        className="h-full object-contain rounded-md"
                                                    />
                                                    <button
                                                        title="Xóa"
                                                        onClick={(e) => handleDeleteCVImage(e)}
                                                        className="absolute top-0 right-0 p-2 cursor-pointer bg-gray-300 hover:bg-gray-400 rounded-full w-[30px] h-[30px] flex justify-center items-center"
                                                    >
                                                        <FontAwesomeIcon icon={faTrash} />
                                                    </button>
                                                </>
                                            )}
                                        </div>
                                    )}
                                </>
                            )}
                        </label>
                        <input hidden type="file" id="file" onChange={handleUploadCVImage} accept="image/*" />
                    </div>
                    <div>
                        <label
                            className="w-[250px] border-2 h-[250px] my-4 gap-4 flex flex-col items-center justify-center border-gray-400 border-dashed rounded-md hover:cursor-pointer"
                            htmlFor="file1"
                        >
                            {isProfileLoading ? (
                                <Loading />
                            ) : (
                                <>
                                    {!profileImage ? (
                                        <>
                                            <FontAwesomeIcon icon={faCamera} />
                                            <span>Thêm ảnh chân dung ứng viên</span>
                                        </>
                                    ) : (
                                        <div className="relative w-full h-full">
                                            {profileImage && (
                                                <>
                                                    <img
                                                        src={profileImage}
                                                        alt="preview"
                                                        className="h-full object-contain rounded-md"
                                                    />
                                                    <button
                                                        title="Xóa"
                                                        onClick={(e) => handleDeleteProfileImage(e)}
                                                        className="absolute top-0 right-0 p-2 cursor-pointer bg-gray-300 hover:bg-gray-400 rounded-full w-[30px] h-[30px] flex justify-center items-center"
                                                    >
                                                        <FontAwesomeIcon icon={faTrash} />
                                                    </button>
                                                </>
                                            )}
                                        </div>
                                    )}
                                </>
                            )}
                        </label>
                        <input hidden type="file" id="file1" onChange={handleUploadProfileImage} accept="image/*" />
                    </div>
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
