import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const ProtectedRoutes = () => {
    const authState =
        window.localStorage.getItem('persist:auth') && JSON.parse(window.localStorage.getItem('persist:auth'));
    authState.isLoggedIn = authState.isLoggedIn === 'true';
    authState.token = authState.token === 'null' ? null : authState.token;
    return authState.isLoggedIn && authState.token ? <Outlet /> : <Navigate to="/dang-nhap" />;
};

export default ProtectedRoutes;
