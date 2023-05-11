import React from 'react';
import { Outlet } from 'react-router-dom';

const CompanyPage = () => {
    return (
        <div className="w-1200 h-auto m-auto clear-both">
            <Outlet />
        </div>
    );
};

export default CompanyPage;
