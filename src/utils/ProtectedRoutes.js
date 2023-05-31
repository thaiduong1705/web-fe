import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = ({ children }) => {
    const authState =
        window.localStorage.getItem('persist:auth') && JSON.parse(window.localStorage.getItem('persist:auth'));
    console.log(authState);
    return <Outlet />;
};

export default ProtectedRoutes;
