import axiosInstance from '../axiosConfig';

export const apiGetCompanies = async () => {
    try {
        const response = await axiosInstance({
            method: 'get',
            url: '/api/v1/company/all',
        });
        return response;
    } catch (error) {
        return error;
    }
};
