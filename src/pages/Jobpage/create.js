import React, { memo, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import * as yup from 'yup';
import swal from 'sweetalert';

import { jobSchema } from './jobValidation';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Combobox, Loading, TextEditor } from '~/components';
import { getCompanies, setCompaniesToNull } from '~/store/action/company';
import { editData, setEditDataNull, setPostsToNull } from '~/store/action/post';
import { apiCreatePost, apiUpdatePost } from '~/services/post';
import { Gender } from '~/data';
// Restricts input for the given textbox to the given inputFilter.

const CreatePost = ({ isEdit = false }) => {
    const { id } = useParams();
    const { postDataEdit } = useSelector((state) => state.post);

    const { companies } = useSelector((state) => state.company);
    const { careers, districts, positions, academicLevels, workingTypes } = useSelector((state) => state.otherData);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const currentDate = new Date().toISOString().split('T')[0];
    const [jobName, setJobName] = useState('');
    const [needNumber, setNeedNumber] = useState(0);
    const [endDate, setEndDate] = useState(currentDate);
    const [address, setAddress] = useState('');
    const [expYear, setExpYear] = useState(0);
    const [ageMin, setAgeMin] = useState(18);
    const [ageMax, setAgeMax] = useState(60);
    const [salary, setSalary] = useState([0, 0]);
    const [jobDescribe, setJobDescribe] = useState('');
    const [benefits, setBenefits] = useState('');
    const [jobRequirement, setJobRequirement] = useState('');
    const [Career, setCareer] = useState([]);
    const [district, setDistrict] = useState([]);
    const [companyId, setCompany] = useState('');
    const [positionId, setPosition] = useState('');
    const [workingTypeId, setWorkingType] = useState('');
    const [academicLevelId, setAcademicLevel] = useState('');
    const [gender, setGender] = useState();

    //state cho edit
    const [oldCareerList, setOldCareerList] = useState([]);
    const [oldDistrictList, setOldDistrictList] = useState([]);

    useEffect(() => {
        if (isEdit) dispatch(editData(id));
        return () => {
            dispatch(setCompaniesToNull());
            dispatch(setEditDataNull());
        };
    }, []);
    useEffect(() => {
        dispatch(getCompanies());
        if (postDataEdit) {
            setJobName(postDataEdit?.jobTitle ?? '');
            setNeedNumber(postDataEdit?.needNumber ?? '');
            setEndDate(postDataEdit?.endDate ?? currentDate);
            setAddress(postDataEdit?.workingAddress ?? '');
            setExpYear(postDataEdit?.experienceYear ?? 0);
            setAgeMin(postDataEdit?.ageMin ?? 18);
            setAgeMax(postDataEdit?.ageMax ?? 60);
            setSalary([postDataEdit?.salaryMin * 1000000, postDataEdit?.salaryMax * 1000000] ?? [0, 0]);
            setJobDescribe(postDataEdit?.jobDescribe ?? '');
            setBenefits(postDataEdit?.benefits ?? '');
            setJobRequirement(postDataEdit?.jobRequirement ?? '');
            setWorkingType(postDataEdit?.workingTypeId ?? '');
            setCompany(postDataEdit?.companyId ?? '');
            setPosition(postDataEdit?.positionId ?? '');
            setAcademicLevel(postDataEdit?.academicLevelId ?? '');
            setGender(+postDataEdit?.sex ?? 2);
            setOldCareerList((prev) => {
                if (postDataEdit?.Career.length === 0) {
                    return [];
                }
                return postDataEdit?.Career.map((c) => c.id);
            });
            setOldDistrictList((prev) => {
                if (postDataEdit?.District.length === 0) {
                    return [];
                }
                return postDataEdit?.District.map((c) => c.id);
            });
            setCareer((prev) => {
                if (postDataEdit?.Career.length === 0) {
                    return [];
                }
                return postDataEdit?.Career.map((c) => c.id);
            });
            setDistrict((prev) => {
                if (postDataEdit?.District.length === 0) {
                    return [];
                }
                return postDataEdit?.District.map((c) => c.id);
            });
        }
        return () => {};
        console.log(postDataEdit);
    }, [postDataEdit]);
    const handleChangeGender = (value) => {
        setGender((prev) => value.id);
    };

    const handleDescribeChange = (value) => {
        setJobDescribe((prev) => value);
    };
    const handleRequirementChange = (value) => {
        setJobRequirement((prev) => value);
    };
    const handleBenefitsChange = (value) => {
        setBenefits((prev) => value);
    };
    const handleChangeCareer = (value) => {
        let newCareerId = value.map((item) => {
            return item.id;
        });
        setCareer((prev) => newCareerId);
    };
    const handleChangeDistrict = (value) => {
        let newDistrictId = value.map((item) => {
            return item.id;
        });
        setDistrict((prev) => newDistrictId);
    };
    const handleChangeCompany = (value) => {
        setCompany((prev) => value.id);
        setAddress((prev) => value.address);
    };
    const handleChangePosition = (value) => {
        setPosition(value.id);
    };
    const handleChangeWT = (value) => {
        setWorkingType(value.id);
    };
    const handleChangeAL = (value) => {
        setAcademicLevel(value.id);
    };

    const handleSubmit = async (e) => {
        if (e.keyCode === 13) {
            e.preventDefault();
            return;
        }
        e.preventDefault();
        const ValidData = {
            id: postDataEdit?.id,
            jobTitle: e.target[0].value,
            needNumber: e.target[1].value,
            companyId: companyId,
            positionId: positionId,
            workingTypeId: workingTypeId,
            academicLevelId: academicLevelId,
            endDate: e.target[2].value,
            gender: gender,
            workingAddress: address,
            experienceYear: expYear,
            ageMin: e.target[3].value,
            ageMax: e.target[4].value,
            salaryMin: salary[0] / 1000000,
            salaryMax: salary[1] / 1000000,
            jobDescribe: jobDescribe,
            jobRequirement: jobRequirement,
            benefits: benefits,
            careerList: Career,
            districtList: district,
            districtOldList: oldDistrictList,
            careerOldList: oldCareerList,
        };

        console.log(ValidData);

        const isValid_temp = await jobSchema.isValid(ValidData).then(async (valid) => {
            if (valid === true) {
                if (isEdit && postDataEdit) {
                    const response = await apiUpdatePost(ValidData);
                    if (response?.data?.err === 0) {
                        Swal.fire('Đã tạo thành công', '', 'success').then(() => {
                            navigate(-1);
                        });
                    } else if (!response || response?.data?.err !== 0) {
                        Swal.fire('Có lỗi của server', '', 'error');
                    }
                } else {
                    const response = await apiCreatePost(ValidData);
                    console.log(response);
                    if (response?.data?.err === 0) {
                        Swal.fire('Đã tạo thành công', '', 'success').then(() => {
                            navigate('/viec-lam');
                        });
                    } else if (!response || response?.data?.err !== 0) {
                        Swal.fire('Có lỗi của server', '', 'error');
                    }
                }
            } else {
                try {
                    jobSchema.validateSync(ValidData);
                } catch (error) {
                    if (error instanceof yup.ValidationError) {
                        swal(error.name, error.errors[0], 'error');
                    }
                }
            }
        });
    };

    if (isEdit) {
        if (companies.length === 0 || !postDataEdit) {
            return (
                <div className="flex justify-center item-center">
                    <Loading />
                </div>
            );
        }
    }
    if (companies.length === 0) {
        return (
            <div className="flex justify-center item-center">
                <Loading />
            </div>
        );
    }
    return (
        <div className="w-full bg-blue-100 pb-[12px] rounded-[4px]">
            <form onSubmit={handleSubmit}>
                <p className="font-medium text-[24px] py-5 pl-5 text-white bg-blue-700 items-center">
                    <FontAwesomeIcon icon={faFileLines} className="mr-[12px]" />
                    {isEdit ? 'Chỉnh sửa bài tuyển dụng' : 'Tạo bài tuyển dụng'}
                </p>
                <div className="flex justify-between px-[8px] my-[8px] gap-[10px]">
                    <div className="flex-1">
                        <label>Tên công việc</label>
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
                            value={needNumber}
                            onChange={(e) => {
                                const input = e.target.value.replace(/[^0-9]/g, '');
                                setNeedNumber((prev) => (isNaN(input) || input === '' ? 0 : parseInt(input, 10)));
                            }}
                        />
                    </div>
                </div>
                <div className="flex justify-between gap-[10px] px-[8px]">
                    <div className="w-[60%]">
                        <label htmlFor="JobName">Công ty</label>
                        <Combobox
                            title="Công ty"
                            className="w-[100%] h-[40px]"
                            isSearchable={true}
                            onChange={handleChangeCompany}
                            items={companies.map((item) => {
                                return { id: item.id, value: item.companyName, address: item.address };
                            })}
                            needTilte={true}
                            initialValue={isEdit && companyId ? companyId : null}
                        />
                    </div>

                    <div className="w-[40%]">
                        <label htmlFor="endDate">Ngày hết hạn</label>
                        <input
                            className="w-full h-[40px] rounded-md outline-none px-[8px] hover:opacity-80 hover:cursor-pointer"
                            name="NgayHetHan"
                            id="endDate"
                            type="date"
                            min={currentDate}
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                        />
                    </div>
                </div>
                <div className="w-full h-[2px] bg-blue-700 my-[12px] px-[8px] opacity-60"></div>
                <div className="flex gap-[10px] mb-[8px] px-[8px]">
                    <div className="w-[51%]">
                        <label>Ngành nghề</label>
                        <Combobox
                            title=""
                            className="w-[100%] h-[40px]"
                            isMulti={true}
                            onChange={handleChangeCareer}
                            items={careers.map((item) => {
                                return { id: item.id, value: item.careerName };
                            })}
                            isSearchable={true}
                            initialValue={isEdit && oldCareerList ? oldCareerList : null}
                        />
                    </div>
                    <div className="w-[25%]">
                        <label>Vị trí tuyển dụng</label>
                        <Combobox
                            title="Vị trí tuyển dụng"
                            className="h-[40px]"
                            onChange={handleChangePosition}
                            items={positions.map((item) => {
                                return { id: item.id, value: item.positionName };
                            })}
                            initialValue={isEdit && positionId ? positionId : null}
                            needTilte={true}
                        />
                    </div>
                    <div className="w-[25%]">
                        <label>Loại hình</label>
                        <Combobox
                            title="Loại hình làm việc"
                            className="h-[40px]"
                            onChange={handleChangeWT}
                            items={workingTypes.map((item) => {
                                return { id: item.id, value: item.workingTypeName };
                            })}
                            initialValue={isEdit && workingTypeId ? workingTypeId : null}
                            needTilte={true}
                        />
                    </div>
                </div>
                <div className="flex gap-[10px] mb-[8px] px-[8px]">
                    <div className="flex-1">
                        <label>Trình độ</label>
                        <Combobox
                            title="Trình độ"
                            className="h-[40px]"
                            onChange={handleChangeAL}
                            items={academicLevels.map((item) => {
                                return { id: item.id, value: item.academicLevelName };
                            })}
                            initialValue={isEdit && academicLevelId ? academicLevelId : null}
                            needTilte={true}
                        />
                    </div>
                    <div className="w-[10%]">
                        <label>Tuổi tối thiểu</label>
                        <input
                            className="w-full h-[40px] rounded-md outline-none px-[8px]"
                            name="SoNamKinhNghiem"
                            value={ageMin}
                            onChange={(e) => {
                                const input = e.target.value.replace(/[^0-9]/g, '');
                                setAgeMin((prev) => (isNaN(input) || input === '' ? 0 : parseInt(input, 10)));
                            }}
                        />
                    </div>
                    <div className="w-[10%]">
                        <label>Tuổi tối đa</label>
                        <input
                            className="w-full h-[40px] rounded-md outline-none px-[8px]"
                            name="SoNamKinhNghiem"
                            value={ageMax}
                            onChange={(e) => {
                                const input = e.target.value.replace(/[^0-9]/g, '');
                                setAgeMax((prev) => (isNaN(input) || input === '' ? 0 : parseInt(input, 10)));
                            }}
                        />
                    </div>
                    <div className="w-[10%]">
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
                    <div className="w-[10%]">
                        <label htmlFor="salaryMin">Lương tối thiểu</label>
                        <input
                            className="w-full h-[40px] rounded-md outline-none px-[8px]"
                            name="salaryMin"
                            id="salary"
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
                    <div className="w-[10%]">
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
                <div className="mb-[8px] flex  gap-[10px] px-[8px]">
                    <div className="w-[50%]">
                        <label htmlFor="address">Địa chỉ làm việc</label>
                        <input
                            name="DiaChi"
                            id="address"
                            className="w-full h-[40px] rounded-md outline-none px-[8px]"
                            value={address}
                            onChange={(e) => setAddress((prev) => e.target.value)}
                        />
                    </div>
                    <div className="w-[20%]">
                        <label htmlFor="address">Giới tính</label>
                        <Combobox
                            title="Giới tính"
                            className="w-full h-[40px] rounded-md outline-none"
                            items={Gender}
                            initialValue={isEdit && gender ? gender : null}
                            onChange={handleChangeGender}
                            needTilte={true}
                        />
                    </div>
                    <div className="w-[30%]">
                        <label htmlFor="province">Quận huyện</label>
                        <Combobox
                            className="w-full h-[40px] rounded-md outline-none"
                            title="Quận huyện"
                            isSearchable={true}
                            isMulti={true}
                            onChange={handleChangeDistrict}
                            items={districts.map((item) => {
                                return { id: item.id, value: item.districtName };
                            })}
                            initialValue={isEdit && oldDistrictList ? oldDistrictList : null}
                        />
                    </div>
                </div>
                <div className="mb-[8px] px-[8px]">
                    <label>Yêu cầu ứng viên</label>
                    <TextEditor
                        className="w-[100%] h-[400px] mb-[8px]"
                        onChange={handleRequirementChange}
                        initialValue={isEdit && jobRequirement ? jobRequirement : null}
                    />
                    <label>Mô tả công việc</label>
                    <TextEditor
                        className="w-[100%] h-[400px] mb-[8px]"
                        onChange={handleDescribeChange}
                        initialValue={isEdit && jobDescribe ? jobDescribe : null}
                    />
                    <label>Quyền lợi công việc</label>
                    <TextEditor
                        className="w-[100%] h-[400px] mb-[8px]"
                        onChange={handleBenefitsChange}
                        initialValue={isEdit && benefits ? benefits : null}
                    />
                </div>
                <div className="flex justify-end px-[8px] pt-[8px]">
                    <input
                        className="bg-blue-600 py-[8px] px-[16px] text-white hover:bg-blue-400 rounded-[4px] mx-[12px]"
                        value="Xác nhận"
                        type="submit"
                    />

                    <Link
                        to="/viec-lam"
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
