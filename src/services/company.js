import axiosInstance from '../axiosConfig';

export const apiGetAllCompanies = async () => {
    try {
        const response = await axiosInstance({
            method: 'get',
            url: '/api/v1/company/',
        });
        return response;
    } catch (error) {
        return error;
    }
};

export const apiCreateCompany = async (payload) => {
    try {
        const response = await axiosInstance({
            method: 'post',
            url: '/api/v1/company/',
            data: payload,
        });
        return response;
    } catch (error) {
        return error;
    }
};

export const apiGetFilterCompany = async (query) => {
    try {
        const response = await axiosInstance({
            method: 'get',
            url: '/api/v1/company/filter',
            params: query,
        });
        return response;
    } catch (error) {
        return error;
    }
};

export const apiGetRelatedCompaniesFromCareer = async (query) => {
    try {
        const response = await axiosInstance({
            method: 'get',
            url: '/api/v1/company/relate-comp',
            params: query,
        });
        return response;
    } catch (error) {
        return error;
    }
};

export const apiGetCompanyById = async (id) => {
    try {
        const response = await axiosInstance({
            method: 'get',
            url: `/api/v1/company/${id}`,
        });
        return response;
    } catch (error) {
        return error;
    }
};

export const apiUpdateCompany = async (id, payload) => {
    try {
        const response = await axiosInstance({
            method: 'put',
            url: `/api/v1/company/${id}`,
            data: payload,
        });
        return response;
    } catch (error) {
        return error;
    }
};

export const apiDeleteCompany = async (id) => {
    try {
        const response = await axiosInstance({
            method: 'delete',
            url: `/api/v1/company/${id}`,
        });
        return response;
    } catch (error) {
        return error;
    }
};
