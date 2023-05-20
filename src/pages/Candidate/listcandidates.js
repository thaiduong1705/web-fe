import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CandidateItem, Combobox } from '~/components';
import axios from 'axios';

const ListCandidates = () => {
    const [myData, setMyData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios
                .get(`http://localhost:5000/api/v1/candidate/all`)
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
        <div>
            <div className="bg-blue-700 text-black px-[64px]">
                <div className="grid grid-cols-6 py-[24px] gap-[16px] h-[80px]">
                    <div className="col-span-3 col-start-1 flex gap-[10px]">
                        <span className="text-[16px] text-white leading-[32px] block ">Tìm việc: </span>
                        <input
                            className="w-[90%] h-[35px] pl-[12px] border-solid border-1 rounded-[4px] border-transparent outline-none"
                            placeholder="Nhập từ khoá tìm kiếm..."
                        />
                    </div>

                    <Combobox title="Chọn ngành nghề" className="h-[35px] col-start-4" />
                    <Combobox title="Chọn quận huyện" className="h-[35px] col-start-5" />
                    <button className="cursor-pointer col-start-6 bg-blue-400 hover:bg-blue-500 text-white h-[35px] rounded-[8px] font-[550]">
                        Tìm kiếm
                    </button>
                </div>
                <div className="grid grid-cols-5 grid-rows-2 pb-[20px] gap-[16px]">
                    <Combobox title="Cấp bậc" />
                    <Combobox title="Loại hình" />
                    <Combobox title="Kinh nghiệm" />
                    <Combobox title="Thời gian" />
                    <Combobox title="Giới tính" />
                    <Combobox title="Độ tuổi" />
                    <Combobox title="Trình độ" />
                    <Combobox title="Mức lương" />
                    <Combobox title="Ngành nghề" />
                </div>
            </div>

            <div className="my-[48px] px-[64px] flex justify-between">
                <div className="relative before:content-[''] before:absolute before:h-full before:rounded-[4px] before:w-[6px] before:bg-[#2A80B9] before:left-0 pl-[24px]">
                    <p className="align-middle text-[24px] font-medium leading-[1.4] my-[2px]">Ứng viên</p>
                </div>
                <div className="flex items-center">
                    <Link
                        to="/ung-vien/tao-ung-vien"
                        className="bg-blue-600 text-white rounded-[8px] border-transparent border-1 flex items-center p-[8px] hover:opacity-80 h-fit"
                    >
                        Thêm mới ứng viên
                    </Link>
                </div>
            </div>

            <div className="my-[40px] px-[64px]">
                <table className="table-auto min-w-full text-left text-[14px] font-light">
                    <thead className="border-b dark:border-neutral-500">
                        <tr>
                            <th scope="col" className="px-6 py-4 font-medium">
                                Ứng viên
                            </th>
                            <th scope="col" className="px-6 py-4 font-medium">
                                Kinh nghiệm
                            </th>
                            <th scope="col" className="px-6 py-4 font-medium">
                                Trình độ chuyên môn
                            </th>
                            <th scope="col" className="px-6 py-4 font-medium">
                                Lương
                            </th>
                            <th scope="col" className="px-6 py-4 font-medium">
                                Nơi làm việc
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <CandidateItem />
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListCandidates;
