import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faCamera, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';

import { companySchema } from './companyValidation';
import { apiCreateCompany, apiUpdateCompany } from '~/services/company';
import { Combobox, Loading, TextEditor } from '~/components';
import { apiUploadImagesCompany, apiRemoveImagesCompany } from '~/services/image';

import { editCompanyData, setEditCompanyDataNull } from '~/store/action/company';
import Swal from 'sweetalert2';
const CreateCompany = ({ isEdit }) => {
    const { id } = useParams();
    const careerListData = useSelector((state) => state.otherData.careers);

    const { companyDataEdit } = useSelector((state) => state.company);

    const navigate = useNavigate();

    const [companyName, setCompanyName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [introduction, setIntroduction] = useState('');
    const [companySize, setCompanySize] = useState('');
    const [careerList, setCareerList] = useState([]);
    const [imagePreview, setImagePreview] = useState('');

    //Đợi load ảnh
    const [isLoading, setIsLoading] = useState(false);

    //Edit
    const [careerOldList, setCareerOldList] = useState(null);

    const dispatch = useDispatch();
    useEffect(() => {
        if (isEdit) {
            dispatch(editCompanyData(id));
        }
        return () => {
            dispatch(setEditCompanyDataNull());
        };
    }, []);

    useEffect(() => {
        if (companyDataEdit) {
            setCompanyName(companyDataEdit.companyName || '');
            setEmail(companyDataEdit.email || '');
            setPhone(companyDataEdit.phone || '');
            setAddress(companyDataEdit.address || '');
            setCompanySize(companyDataEdit.companySize || '');
            setIntroduction(companyDataEdit.introduction || '');
            setImagePreview(companyDataEdit.imageLink || '');
            setCareerOldList((prev) => {
                if (companyDataEdit?.Career.length === 0) {
                    return [];
                }
                return companyDataEdit?.Career.map((c) => c.id);
            });
            setCareerList((prev) => {
                if (companyDataEdit?.Career.length === 0) {
                    return [];
                }
                return companyDataEdit?.Career.map((c) => c.id);
            });
        }
    }, [companyDataEdit]);

    const [companyData, setCompanyData] = useState(null);
    const [editData, setEditData] = useState(null);
    const createCompany = async (event) => {
        event.preventDefault();
        const ValidData = {
            companyName: event.target[0].value,
            email: event.target[1].value,
            phone: event.target[2].value,
            address: event.target[3].value,
            introduction: introduction,
            companySize: event.target[4].value,
            careerList: careerList,
            imageLink: imagePreview,
        };
        await companySchema.isValid(ValidData).then((valid) => {
            if (valid === true) {
                if (!isEdit) {
                    setCompanyData({
                        companyName: companyName,
                        email: email,
                        phone: phone,
                        address: address,
                        introduction: introduction,
                        companySize: companySize,
                        careerList: careerList,
                        imageLink: imagePreview,
                    });
                } else {
                    setEditData({
                        id: companyDataEdit.id,
                        companyName: companyName,
                        email: email,
                        phone: phone,
                        address: address,
                        introduction: introduction,
                        companySize: companySize,
                        imageLink: imagePreview,
                        careerOldList: careerOldList,
                        careerNewList: careerList,
                    });
                }
            } else {
                try {
                    companySchema.validateSync(ValidData);
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
        if (editData) {
            apiUpdateCompany(editData).then((response) => {
                if (response.data.err === 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Thành công!',
                        text: 'Dữ liệu đã được chỉnh sửa thành công!',
                    }).then(() => {
                        navigate(-1, { replace: true });
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
    useEffect(() => {
        if (companyData) {
            apiCreateCompany(companyData).then((response) => {
                if (response.data.err === 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Thành công!',
                        text: 'Dữ liệu đã được thêm thành công!',
                    }).then(() => {
                        navigate(-1, { replace: true });
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
    }, [companyData]);

    const handleFiles = async (e) => {
        e.stopPropagation();
        setIsLoading(true);
        let files = e.target.files;
        // let formData = new FormData();
        const formData = new FormData();
        formData.append('image', files[0]);
        const response = await apiUploadImagesCompany(formData);
        if (response.status === 200 && response.data.err === 0) {
            setImagePreview(response?.data.res.response.secure_url);
        }
        setIsLoading(false);
    };

    const handleDeleteImage = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        const response = await apiRemoveImagesCompany({ imageLink: imagePreview });
        if (response.status === 200 && response.data.err === 0) {
            setImagePreview('');
        }
    };

    const handleChangeCareer = (career) => {
        const newCareerIds = career.map((data, index) => {
            return data.id;
        });
        setCareerList(newCareerIds);
    };

    // const handleChangeDistrictList = (district) => {
    //     const newDistrictIds = district.map((item) => {
    //         return item.id;
    //     });
    //     setCandidateDistrict(newDistrictIds);
    // };

    if (isEdit) {
        if (!companyDataEdit) {
            return (
                <div className="flex justify-center item-center">
                    <Loading />
                </div>
            );
        }
    }
    return (
        <div className="w-full bg-blue-100 rounded-[4px] h-full pb-[24px]">
            <form onSubmit={createCompany}>
                <p className="font-medium text-[24px] py-5 pl-5 text-white bg-blue-700 items-center">
                    <FontAwesomeIcon icon={faBuilding} className="mr-[12px]" />
                    {isEdit ? 'Chỉnh sửa nhà tuyển dụng' : 'Tạo mới nhà tuyển dụng'}
                </p>
                <div className="flex justify-between mb-[8px] gap-[10px] px-[8px] py-[12px]">
                    <div className="flex-1">
                        <label htmlFor="JobName">Tên công ty</label>
                        <input
                            className="w-full h-[40px] rounded-md outline-none px-[8px]"
                            name="TenCongViec"
                            id="JobName"
                            placeholder=""
                            type="text"
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex justify-between mb-[8px] gap-[10px] px-[8px]">
                    <div className="flex-1">
                        <label>Email</label>
                        <input
                            className="w-full h-[40px] rounded-md outline-none px-[8px]"
                            name="TenCongViec"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="w-[20%]">
                        <label>Số điện thoại</label>
                        <input
                            className="w-full h-[40px] rounded-md outline-none px-[8px]"
                            name="SoLuong"
                            maxLength={10}
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex justify-between mb-[8px] gap-[10px] px-[8px]">
                    <div className="flex-1">
                        <label>Địa chỉ</label>
                        <input
                            className="w-full h-[40px] rounded-md outline-none px-[8px]"
                            name="TenCongViec"
                            placeholder=""
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex justify-between mb-[8px] gap-[10px] px-[8px]">
                    <div className="flex-1">
                        <label>Lĩnh vực (ngành nghề) của công ty</label>
                        {isEdit && careerOldList && (
                            <Combobox
                                className="h-[40px]"
                                title="Lĩnh vực"
                                isMulti={true}
                                isSearchable={true}
                                items={careerListData.map((obj) => {
                                    return { id: obj.id, value: obj.careerName };
                                })}
                                onChange={(e) => {
                                    handleChangeCareer(e);
                                }}
                                initialValue={isEdit && careerOldList ? careerOldList : null}
                            />
                        )}
                        {!isEdit && (
                            <Combobox
                                className="h-[40px]"
                                title="Lĩnh vực"
                                isMulti={true}
                                isSearchable={true}
                                items={careerListData.map((obj) => {
                                    return { id: obj.id, value: obj.careerName };
                                })}
                                onChange={(e) => {
                                    handleChangeCareer(e);
                                }}
                            />
                        )}
                    </div>
                    <div className="w-[20%]">
                        <label>Quy mô công ty</label>
                        <input
                            className="w-full h-[40px] rounded-md outline-none px-[8px]"
                            placeholder="Từ ... đến ..."
                            onChange={(e) => setCompanySize(e.target.value)}
                            value={companySize}
                        />
                    </div>
                </div>
                <div className="mb-[8px] px-[8px] overflow-hidden">
                    <label>Giới thiệu công ty</label>

                    <TextEditor
                        className="w-[100%] h-[400px] mb-[8px] overflow-scroll"
                        onChange={setIntroduction}
                        initialValue={isEdit && introduction ? introduction : null}
                    />
                    {!isEdit && (
                        <TextEditor
                            className="w-[100%] h-[400px] mb-[8px] overflow-scroll"
                            onChange={setIntroduction}
                            initialValue={isEdit && introduction ? introduction : null}
                        />
                    )}
                </div>
                <div className="mb-[8px] px-[8px]">
                    <label
                        className="w-full border-2 h-[200px] my-4 gap-4 flex flex-col items-center justify-center border-gray-400 border-dashed rounded-md hover:cursor-pointer"
                        htmlFor="file"
                    >
                        {isLoading ? (
                            <Loading />
                        ) : (
                            <div className="flex flex-col items-center justify-center ">
                                <FontAwesomeIcon icon={faCamera} />
                                Thêm ảnh của công ty
                            </div>
                        )}
                    </label>
                    <input hidden type="file" id="file" onChange={handleFiles} />
                    <div className="w-full">
                        <h3 className="font-medium py-4">Ảnh đã chọn</h3>
                        <div className="flex gap-4 items-center">
                            <div className="relative w-[300px] h-[300px] flex items-center justify-center">
                                {imagePreview && (
                                    <>
                                        <img
                                            src={imagePreview}
                                            alt="preview"
                                            className="w-full h-full object-contain rounded-md"
                                        />
                                        <button
                                            title="Xóa"
                                            onClick={(e) => handleDeleteImage(e)}
                                            className="absolute top-0 right-0 p-2 cursor-pointer bg-gray-300 hover:bg-gray-400 rounded-full w-[30px] h-[30px] flex justify-center items-center"
                                        >
                                            <FontAwesomeIcon icon={faTrash} />
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end px-[8px] pt-[8px]">
                    <input
                        className="bg-blue-600 py-[8px] px-[16px] text-white hover:bg-blue-400 rounded-[4px] mx-[12px]"
                        value="Xác nhận"
                        type="submit"
                    />
                    <Link
                        to="/nha-tuyen-dung"
                        className="bg-red-500 hover:bg-red-300 rounded-[4px] flex justify-center items-center text-white py-[8px] px-[16px]"
                    >
                        Quay lại
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default CreateCompany;
