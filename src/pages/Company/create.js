import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faCamera, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';

import { companySchema } from './companyValidation';
import { apiCreateCompany, apiUpdateCompany } from '~/services/company';
import { Combobox, Loading, TextEditor } from '~/components';
import { apiUploadImagesCompany } from '~/services/image';

import { editCompanyData, setEditCompanyDataNull } from '~/store/action/company';
const CreateCompany = ({ isEdit }) => {
    const { id } = useParams();
    const careerListData = useSelector((state) => state.otherData.careers);

    const { companyDataEdit } = useSelector((state) => state.company);

    const [companyName, setCompanyName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [introduction, setIntroduction] = useState('');
    const [companySize, setCompanySize] = useState('');
    const [careerList, setCareerList] = useState([]);
    const [imagePreview, setImagePreview] = useState('');

    //Validation
    const [isValid, setIsValid] = useState(false);

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
        };
        console.log(ValidData);
        const isValid_temp = await companySchema.isValid(ValidData);
        console.log(isValid_temp);
        setIsValid(isValid_temp);
        if (isValid_temp === true) {
            if (!isEdit) {
                setCompanyData({
                    companyName: companyName,
                    email: email,
                    phone: phone,
                    address: address,
                    introduction: introduction,
                    companySize: companySize,
                    careerList: careerList,
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
                    careerOldList,
                    careerNewList: careerList,
                });
            }
        } else {
            console.log('Truyền dữ liệu thất bại, vui lòng kiểm tra lại');
        }
    };

    useEffect(() => {
        if (editData) apiUpdateCompany(editData);
    }, [editData]);
    useEffect(() => {
        if (companyData) apiCreateCompany(companyData);
    }, [companyData]);

    const handleFiles = async (e) => {
        e.stopPropagation();
        setIsLoading(true);
        let imageLink;
        let files = e.target.files;
        let formData = new FormData();
        for (let i of files) {
            formData.append('file', i);
            formData.append('upload_preset', process.env.REACT_APP_UPLOAD_ASSETS_NAME);
            let response = await apiUploadImagesCompany(formData);
            if (response.status === 200) imageLink = response?.data.secure_url;
        }
        console.log(imageLink);
        setIsLoading(false);
        setImagePreview((prev) => imageLink);
    };

    const handleDeleteImage = () => {
        setImagePreview('');
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
                            placeholder="Công ty TNHH ABC"
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
                            placeholder="Địa chỉ của công ty"
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex justify-between mb-[8px] gap-[10px] px-[8px]">
                    <div className="flex-1">
                        <label>Lĩnh vực</label>
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
                                    console.log(e);
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
                                    console.log(e);
                                    handleChangeCareer(e);
                                }}
                            />
                        )}
                    </div>
                    <div className="w-[20%]">
                        <label>Quy mô</label>
                        <input
                            className="w-full h-[40px] rounded-md outline-none px-[8px]"
                            title="Quy mô"
                            onChange={(e) => setCompanySize(e.target.value)}
                            value={companySize}
                        />
                    </div>
                </div>
                <div className="mb-[8px] px-[8px]">
                    <label>Giới thiệu công ty</label>
                    {isEdit && introduction && (
                        <TextEditor
                            className="w-[100%] h-[400px] mb-[8px]"
                            onChange={setIntroduction}
                            initialValue={isEdit && introduction ? introduction : null}
                        />
                    )}
                    {!isEdit && (
                        <TextEditor
                            className="w-[100%] h-[400px] mb-[8px]"
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
                            {/* {imagesPreview?.map((item) => {
                                return (
                                    <div key={item} className="relative w-1/3 h-1/3 ">
                                        <img
                                            src={item}
                                            alt="preview"
                                            className="w-full h-full object-cover rounded-md"
                                        />
                                        <span
                                            title="Xóa"
                                            onClick={() => handleDeleteImage(item)}
                                            className="absolute top-0 right-0 p-2 cursor-pointer bg-gray-300 hover:bg-gray-400 rounded-full"
                                        >
                                            <ImBin />
                                        </span>
                                    </div>
                                );
                            })} */}

                            <div className="relative w-1/3 h-1/3 ">
                                {imagePreview && (
                                    <>
                                        <img
                                            src={imagePreview}
                                            alt="preview"
                                            className="w-full h-full object-cover rounded-md"
                                        />
                                        <span
                                            title="Xóa"
                                            onClick={() => handleDeleteImage()}
                                            className="absolute top-0 right-0 p-2 cursor-pointer bg-gray-300 hover:bg-gray-400 rounded-full w-[30px] h-[30px] flex justify-center items-center"
                                        >
                                            <FontAwesomeIcon icon={faTrash} />
                                        </span>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end px-[8px] pt-[8px]">
                    {isValid === false ? (
                        <div className="flex text-red-500 items-center">
                            Thông tin đầu vào chưa đúng hoặc đủ, vui lòng kiểm tra!!!
                        </div>
                    ) : (
                        <div className="flex text-green-500 items-center">Nhập thông tin thành công!!!</div>
                    )}
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
