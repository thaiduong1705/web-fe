import React from 'react';
import { Link } from 'react-router-dom';

const CandidateItem = ({ item }) => {
    return (
        <tr className="border-b dark:border-neutral-500">
            <td className="whitespace-nowrap px-6 py-4">
                <div>
                    <Link to={`chi-tiet/123`} className="uppercase text-[16px] font-medium">
                        Bind tên ở đây
                    </Link>

                    <div className="flex">
                        <div className="mr-[4px]">
                            <span className="font-medium">Học vấn: </span>
                            <span>Bind trình độ chuyên môn</span>
                        </div>
                        <span>|</span>
                        <div className="ml-[4px]">
                            <span className="font-medium">Cấp bậc: </span>
                            <span>Bind cấp bậc</span>
                        </div>
                    </div>
                </div>
            </td>
            <td className="whitespace-nowrap px-6 py-4">Bind kinh nghiệm</td>
            <td className="whitespace-nowrap px-6 py-4">bind trình độ chuyên môn</td>
            <td className="whitespace-nowrap px-6 py-4">Bind lương mong muốn</td>
            <td className="whitespace-nowrap px-6 py-4">bind khu vực làm việc</td>
        </tr>
    );
};

export default CandidateItem;
