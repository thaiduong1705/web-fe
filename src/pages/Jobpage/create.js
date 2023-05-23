import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';

import { Link, useNavigate } from 'react-router-dom';
import { Combobox, Loading, TextEditor } from '~/components';
import { getCompanies, setCompaniesToNull } from '~/store/action/company';
import { apiCreatePost } from '~/services/post';
// Restricts input for the given textbox to the given inputFilter.

const CreatePost = () => {
    const { companies } = useSelector((state) => state.company);
    const { careers, districts, positions, academicLevels, workingTypes } = useSelector((state) => state.otherData);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(getCompanies());
        return () => {
            dispatch(setCompaniesToNull());
        };
    }, []);

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
    const [career, setCareer] = useState([]);
    const [district, setDistrict] = useState([]);
    const [company, setCompany] = useState('');
    const [position, setPosition] = useState('');
    const [workingType, setWorkingType] = useState('');
    const [academicLevel, setAcademicLevel] = useState('');
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
        e.preventDefault();
        e.stopPropagation();
        console.log({
            jobTitle: jobName,
            needNumber,
            companyId: company,
            positionId: position,
            workingTypeId: workingType,
            academicLevelId: academicLevel,
            endDate,
            workingAddress: address,
            experienceYear: expYear,
            ageMin,
            ageMax,
            salaryMin: salary[0] / 1000000,
            salaryMax: salary[1] / 1000000,
            jobDescribe,
            jobRequirement,
            benefits,
            careerList: career,
            districtList: district,
        });
        const response = await apiCreatePost({
            jobTitle: jobName,
            needNumber,
            companyId: company,
            positionId: position,
            workingTypeId: workingType,
            academicLevelId: academicLevel,
            endDate,
            workingAddress: address,
            experienceYear: expYear,
            ageMin,
            ageMax,
            salaryMin: salary[0] / 1000000,
            salaryMax: salary[1] / 1000000,
            jobDescribe,
            jobRequirement,
            benefits,
            careerList: career,
            districtList: district,
        });
        console.log(response);
        if (response?.data?.err === 0) {
            Swal.fire('Đã tạo thành công', '', 'success');
            navigate('/viec-lam');
        } else if (!response || response?.data?.err !== 0) {
            Swal.fire('Có lỗi của server', '', 'error');
        }
    };

    if (companies.length === 0) {
        return (
            <div className="flex justify-center item-center">
                <Loading />
            </div>
        );
    }
    return (
        <div className="w-full bg-blue-100 pb-[12px] rounded-[4px] h-full">
            <form>
                <p className="font-medium text-[24px] py-5 pl-5 text-white bg-blue-700 items-center">
                    <FontAwesomeIcon icon={faFileLines} className="mr-[12px]" />
                    Tạo bài tuyển dụng
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
                        />
                    </div>
                </div>
                <div className="flex gap-[10px] mb-[8px] px-[8px]">
                    <div className="flex-1">
                        <label>Trình độ</label>
                        <Combobox
                            placeholder="Tìm kiếm"
                            title="Trình độ"
                            className="h-[40px]"
                            onChange={handleChangeAL}
                            items={academicLevels.map((item) => {
                                return { id: item.id, value: item.academicLevelName };
                            })}
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
                        />
                    </div>
                </div>
                <div className="mb-[8px] px-[8px]">
                    <label>Yêu cầu ứng viên</label>
                    <TextEditor className="w-[100%] h-[400px] mb-[8px]" onChange={handleRequirementChange} />
                    <label>Mô tả công việc</label>
                    <TextEditor className="w-[100%] h-[400px] mb-[8px]" onChange={handleDescribeChange} />
                    <label>Quyền lợi công việc</label>
                    <TextEditor className="w-[100%] h-[400px] mb-[8px]" onChange={handleBenefitsChange} />
                </div>
                <div className="flex justify-end px-[8px] pt-[8px]">
                    <button
                        className="bg-blue-600 py-[8px] px-[16px] text-white hover:bg-blue-400 rounded-[4px] mx-[12px]"
                        value="Xác nhận"
                        onClick={(e) => {
                            handleSubmit(e);
                        }}
                    >
                        Xác nhận
                    </button>
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
