import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faCamera, faTrash } from '@fortawesome/free-solid-svg-icons';
import { apiCreateCompany } from '~/services/company';
import { Combobox, Loading, TextEditor } from '~/components';
import { apiUploadImagesCompany } from '~/services/image';
const CreateCompany = () => {
    const [companyName, setCompanyName] = useState('');
    const [address, setAddress] = useState('');
    const [introduction, setIntroduction] = useState('');
    const [companySize, setCompanySize] = useState('');
    const [careerList, setCareerList] = useState([]);
    const [imagePreview, setImagePreview] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const [companyData, setCompanyData] = useState({
        CompanyName: companyName,
        Address: address,
        Introduction: introduction,
        CompanySize: companySize,
        CareerList: careerList,
    });

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

    const handleCreateCompany = ({ companyName, address, introduction, companySize, careerList }) => {
        setCompanyData({
            CompanyName: companyName,
            Address: address,
            Introduction: introduction,
            CompanySize: companySize,
            CareerList: careerList,
        });
        apiCreateCompany(companyData);
    };
    const handleChangeCareer = (career) => {
        setCareerList((prev) => career);
    };

    return (
        <div className="w-full bg-blue-100 rounded-[4px] h-full pb-[24px]">
            <form>
                <p className="font-medium text-[24px] py-5 pl-5 text-white bg-blue-700 items-center">
                    <FontAwesomeIcon icon={faBuilding} className="mr-[12px]" />
                    Tạo mới nhà tuyển dụng
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
                            placeholder=""
                        />
                    </div>
                    <div className="w-[20%]">
                        <label>Số điện thoại</label>
                        <input
                            className="w-full h-[40px] rounded-md outline-none px-[8px]"
                            name="SoLuong"
                            maxLength={10}
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
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex justify-between mb-[8px] gap-[10px] px-[8px]">
                    <div className="flex-1">
                        <label>Lĩnh vực</label>
                        <Combobox
                            title="Lĩnh vực"
                            isMulti
                            isSearchable
                            type="text"
                            items={[
                                { id: 1, value: 'fdsfds' },
                                { id: 2, value: 'ádada' },
                            ]}
                            onChange={handleChangeCareer}
                        />
                    </div>
                    <div className="w-[20%]">
                        <label>Quy mô</label>
                        <Combobox title="Quy mô" />
                    </div>
                </div>
                <div className="flex justify-between mb-[8px] gap-[10px] px-[8px]">
                    <div className="w-[50%]">
                        <label>Tên người liên hệ</label>
                        <input
                            className="w-full h-[40px] rounded-md outline-none px-[8px]"
                            name="TenCongViec"
                            placeholder=""
                        />
                    </div>
                </div>
                <div className="mb-[8px] px-[8px]">
                    <label>Giới thiệu công ty</label>
                    <TextEditor className="w-[100%] h-[400px] mb-[8px]" onChange={setIntroduction} />
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
                    <button
                        className="bg-blue-600 py-[8px] px-[16px] text-white hover:bg-blue-400 rounded-[4px] mx-[12px]"
                        value="Xác nhận"
                        onClick={() =>
                            handleCreateCompany({ companyName, address, introduction, companySize, careerList })
                        }
                    >
                        Tạo mới
                    </button>
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
