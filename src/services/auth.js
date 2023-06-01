import axiosInstance from '~/axiosConfig';

export const apiLogin = async (payload) => {
    try {
        const response = await axiosInstance({
            method: 'post',
            url: '/api/v1/auth/login',
            data: payload,
        });
        return response;
    } catch (error) {
        console.log(error);
    }
};
