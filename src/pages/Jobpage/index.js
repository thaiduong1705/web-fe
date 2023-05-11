import {} from '@mui/material';
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

const Jobpage = () => {
    return (
        <div className="w-auto h-auto md:ml-96 clear-both">
            <Outlet />
        </div>
    );
};

export default Jobpage;
