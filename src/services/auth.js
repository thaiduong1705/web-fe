import axiosInstance from '~/axiosConfig';

export const apiLogin = async (payload) => {
    try {
        const response = await axiosInstance({
            method: 'post',
            url: '/api/v1/auth/login',
            data: payload,
            withCredentials: true,
        });
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const apiLogout = async (cookies) => {
    try {
        const response = await axiosInstance({
            method: 'get',
            url: '/api/v1/auth/logout',
        });
        return response;
    } catch (error) {
        console.log(error);
        return error;
    }
};

export const apiResetToken = async (payload) => {
    try {
        const response = await axiosInstance({
            method: 'post',
            url: '/api/v1/auth/reset-token',
            data: payload,
        });
        return response;
    } catch (error) {
        console.log(error);
        return error;
    }
};

export const apiGetCurrentStaffInformation = async (token) => {
    try {
        const response = await axiosInstance({
            method: 'get',
            url: '/api/v1/auth/current-staff',
        });
        return response;
    } catch (error) {
        return error;
    }
};
