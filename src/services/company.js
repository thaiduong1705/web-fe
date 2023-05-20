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

export const apiGetCompany = async (id) => {
    try {
        const response = await axiosInstance({
            method: 'get',
            url: `/api/v1/company/get-company/${id}`,
        });
        return response;
    } catch (error) {
        return error;
    }
};

export const apiGetCompanyLimit = async (query) => {
    try {
        const response = await axiosInstance({
            method: 'get',
            url: `/api/v1/company/limit`,
            params: query,
        });
        return response;
    } catch (error) {
        return error;
    }
};
