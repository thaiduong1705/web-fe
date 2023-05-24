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

export const apiCreateCompany = async (company) => {
    try {
        const request = await axiosInstance({
            method: 'post',
            url: '/api/v1/company/create-company',
            data: company,
        });
    } catch (error) {
        return error;
    }
};

export const apiGetRelatedCompany = async (companyId, careerIds) => {
    try {
        const response = await axiosInstance({
            method: 'get',
            url: '/api/v1/company/get-related-company',
            params: {
                companyId,
                careerIds,
            },
        });
        return response;
    } catch (error) {
        console.log(error);
    }
};
