import React from 'react';
import { Link } from 'react-router-dom';

const CandidateItem = ({ item, onClick }) => {
    return (
        <tr className="border-b dark:border-neutral-500">
            <td className="whitespace-nowrap px-6 py-4">
                <div>
                    <Link to={`chi-tiet/${item?.id}`} className="uppercase text-[16px] font-medium">
                        {item?.candidateName}
                    </Link>

                    <div className="flex">
                        <div className="mr-[4px]">
                            <span className="font-medium">Học vấn: </span>
                            <span>{item?.AcademicLevel?.academicLevelName}</span>
                        </div>
                        <span>|</span>
                        <div className="ml-[4px]">
                            <span className="font-medium">Cấp bậc: </span>
                            <span>Bind cấp bậc</span>
                        </div>
                    </div>
                </div>
            </td>
            <td className=" px-6 py-4 ">{item?.experienceYear} năm</td>
            <td className="px-6 py-4">{item?.AcademicLevel?.academicLevelName}</td>
            <td className="px-6 py-4">
                <button className="" onClick={onClick}>
                    Edit
                </button>
            </td>
        </tr>
    );
};

export default CandidateItem;
