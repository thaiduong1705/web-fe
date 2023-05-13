import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const JobItem = ({ job, className }) => {
    return (
        <div className="flex items-center gap-12 relative border-[2px] border-blue-400 h-100 rounded-lg w-full my-4 py-4">
            <div className="w-3/4 ml-8">
                <div className="flex justify-between border-b-1 border-blue-500 ">
                    <Link className="text-16 leading-8 uppercase block" to={`detail/1231`}>
                        {job.name}
                    </Link>
                    <span className="leading-8">Ngày đăng bài: {job.endDate}</span>
                </div>

                <div className="flex justify-between items-center">
                    <Link className="text-gray-600 no-underline leading-4" to="/">
                        {job.companyName}
                    </Link>
                    <span>Lương: {job.salary < 0 ? 'Thoả thuận' : job.salary}</span>
                </div>
            </div>
            <Link className="w-auto h-auto mx-auto" to="/">
                <img src="http://www.vieclamhcm.net/images/paste.png" alt="" />
            </Link>
        </div>
    );
};

export default JobItem;
