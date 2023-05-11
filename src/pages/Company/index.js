import React from 'react';
import { Outlet } from 'react-router-dom';

const CompanyPage = () => {
    return (
        <div className="w-auto h-auto m-auto clear-both md:ml-96">
            <Outlet />
        </div>
    );
};

export default CompanyPage;
