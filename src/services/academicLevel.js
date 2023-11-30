import axiosInstance from '~/axiosConfig';

export const apiGetAcademicLevels = async () => {
    try {
        const response = await axiosInstance({
            method: 'get',
            url: '/api/v1/academic-level/',
        });
        return response;
    } catch (error) {
        return error;
    }
};

export const apiCreateAcademicLevel = async (payload) => {
    try {
        const response = await axiosInstance({
            method: 'post',
            url: '/api/v1/academic-level/',
            data: payload,
        });
        return response;
    } catch (error) {
        return error;
    }
};

export const apiUpdateAcademicLevel = async (payload, id) => {
    try {
        const response = await axiosInstance({
            method: 'put',
            url: `/api/v1/academic-level/${id}`,
            data: payload,
        });
        return response;
    } catch (error) {
        return error;
    }
};

export const apiDeleteAcademicLevel = async (id) => {
    try {
        const response = await axiosInstance({
            method: 'delete',
            url: `/api/v1/academic-level/${id}`,
        });
        return response;
    } catch (error) {
        return error;
    }
};
