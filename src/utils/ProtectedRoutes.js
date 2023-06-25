import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const ProtectedRoutes = () => {
    const local =
        window.localStorage.getItem('persist:auth') && JSON.parse(window.localStorage.getItem('persist:auth'));

    const authState = {
        isLoggedIn: local.isLoggedIn,
        token: local.token,
    };
    return authState.isLoggedIn && authState.token ? <Outlet /> : <Navigate to="/dang-nhap" />;
};

export default ProtectedRoutes;
