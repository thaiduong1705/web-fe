import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const ProtectedRoutes = () => {
    const local =
        window.localStorage.getItem('persist:auth') && JSON.parse(window.localStorage.getItem('persist:auth'));

    const authState = {
        isLoggedIn: local.isLoggedIn,
        token: local.token,
    };

    const isLoggedIn = authState.isLoggedIn === 'true'; // Chuyển chuỗi 'true' thành boolean true
    const token = authState.token === 'null' ? null : authState.token; // Chuyển chuỗi 'null' thành giá trị null
    return isLoggedIn && token ? <Outlet /> : <Navigate to="/dang-nhap" />;
};

export default ProtectedRoutes;
