import React from 'react';
import { useEffect, useState, Component } from 'react';
import { Link } from 'react-router-dom';
import { Combobox, JobItem } from '~/components';
import axios from 'axios';
const ListPosts = () => {
    const [myData, setMyData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios
                .get(`http://localhost:5000/api/v1/post/all`)
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
            console.log(myData);
        };
        fetchData();
    }, []);

    return (
        <div className="">
            <div className="bg-blue-700 text-black">
                <div className="px-[24px] py-[24px] flex gap-[10px] h-[80px]">
                    <span className="text-[16px] text-white leading-[32px] block ">Tìm việc: </span>
                    <input
                        className="w-[52.7%] h-[35px] pl-[12px] border-solid border-1 rounded-[4px] border-transparent outline-none"
                        placeholder="Nhập từ khoá tìm kiếm..."
                    />
                    <Combobox
                        title="Chọn kinh nghiệm"
                        className="w-[200px] h-[35px]"
                        items={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
                    />
                    <Combobox title="Chọn quận huyện" className="w-[200px] h-[35px]" />
                    <button className="w-[15%] cursor-pointer bg-blue-400 hover:bg-blue-500 text-white h-[35px] rounded-[8px] font-[550]">
                        Tìm kiếm
                    </button>
                </div>
                <div className="px-[24px] pb-[20px] flex flex-wrap gap-[10px]">
                    <Combobox title="Cấp bậc" className="w-[19.43%]" />
                    <Combobox title="Loại hình" className="w-[19.43%]" />
                    <Combobox title="Kinh nghiệm" className="w-[19.43%]" />
                    <Combobox title="Thời gian" className="w-[19.43%]" />
                    <Combobox title="Giới tính" className="w-[19.43%]" />
                    <Combobox title="Độ tuổi" className="w-[19.43%]" />
                    <Combobox title="Trình độ" className="w-[19.43%]" />
                    <Combobox title="Mức lương" className="w-[19.43%]" />
                    <Combobox title="Ngành nghề" className="w-[19.43%]" />
                </div>
            </div>
            <div className="w-full flex flex-col justify-center h-auto rounded-[3px] mt-[8px] bg-gray-50 px-[24px] py-[16px]">
                <div className="flex justify-between mb-3">
                    <div className="relative before:content-[''] before:absolute before:h-full before:rounded-[4px] before:w-[6px] before:bg-[#2A80B9] before:left-0 pl-[24px]">
                        <p className="text-[24px] font-medium leading-[1.4] my-[2px] pt">Danh sách việc làm</p>
                    </div>
                    <Link
                        to="/viec-lam/tao-viec-lam"
                        className="bg-blue-600 text-white rounded-[8px] border-transparent border-1 flex items-center p-[8px] hover:opacity-80"
                    >
                        Tạo mới bài tuyển dụng
                    </Link>
                </div>
                <div className="overflow-scroll">
                    {myData &&
                        myData.map((data, index) => (
                            <JobItem
                                job={{
                                    name: data.jobTitle,
                                    companyName: data.company.companyName,
                                    salary: -1,
                                    endDate: data.endDate,
                                    position: 'Tester',
                                    district: 'Hồ Chí Minh',
                                }}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default ListPosts;
