import React, { useState, useEffect } from 'react';
import { Combobox, CompanyItem } from '~/components';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ListCompanies = () => {
    const [myData, setMyData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios
                .get(`http://localhost:5000/api/v1/company/all`)
                .then((response) => {
                    if (response.status === 200) {
                        console.log('API response success!');
                        console.log(response.data);
                        setMyData(response.data.res);
                    } else {
                        console.log('API response error!');
                    }
                })
                .catch((error) => {
                    console.error('Error fetching data: ', error);
                });
        };
        fetchData();
    }, []);

    return (
        <div className="">
            <div className="bg-blue-700 text-black">
                <div className="grid grid-cols-6 py-[24px] gap-[16px] h-[80px] px-16">
                    <div className="col-span-3 col-start-1 flex gap-[10px]">
                        <span className="text-[16px] text-white leading-[32px] block ">Tìm việc: </span>
                        <input
                            className="w-[90%] h-[35px] pl-[12px] border-solid border-1 rounded-[4px] border-transparent outline-none"
                            placeholder="Nhập tên công ty..."
                        />
                    </div>

                    <Combobox title="Chọn ngành nghề" className="h-[35px] col-start-4" />
                    <Combobox title="Chọn quận huyện" className="h-[35px] col-start-5" />
                    <button className="cursor-pointer col-start-6 bg-blue-400 hover:bg-blue-500 text-white h-[35px] rounded-[8px] font-[550]">
                        Tìm kiếm
                    </button>
                </div>
            </div>

            <div className="my-[48px] mx-[24px] flex justify-between">
                <div className="relative before:content-[''] before:absolute before:h-full before:rounded-[4px] before:w-[6px] before:bg-[#2A80B9] before:left-0 pl-[24px]">
                    <p className="text-[24px] font-medium leading-[1.4] mb-[4px]">Nhà tuyển dụng</p>
                    <p className="text-[#999999]">Danh sách nhà tuyển dụng tại TP Hồ Chí Minh</p>
                </div>
                <div className="flex items-center">
                    <Link
                        to="/nha-tuyen-dung/tao-moi"
                        className="bg-blue-600 text-white rounded-[8px] border-transparent border-1 flex items-center p-[8px] hover:opacity-80"
                    >
                        Thêm mới nhà tuyển dụng
                    </Link>
                </div>
            </div>

            <div className="overflow-scroll mx-[24px]">
                {myData &&
                    myData.map((data, index) => (
                        <CompanyItem
                            company={{
                                companyName: data.companyName,
                                address: data.address,
                            }}
                        />
                    ))}
            </div>
        </div>
    );
};

export default ListCompanies;
