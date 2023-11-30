import axiosInstance from '~/axiosConfig';

export const apiGetAllCareers = async () => {
    try {
        const response = await axiosInstance({
            method: 'get',
            url: '/api/v1/career/all',
        });
        return response;
    } catch (error) {
        return error;
    }
};

export const apiCreateCareers = async (payload) => {
    try {
        const response = await axiosInstance({
            method: 'post',
            url: '/api/v1/career/all',
            data: payload,
        });
        return response;
    } catch (error) {
        return error;
    }
};

export const apiUpdateCareer = async (payload, id) => {
    try {
        const response = await axiosInstance({
            method: 'put',
            url: `/api/v1/carrer/${id}`,
            data: payload,
        });
        return response;
    } catch (error) {
        return error;
    }
};

export const apiDeleteCareer = async (id) => {
    try {
        const response = await axiosInstance({
            method: 'delete',
            url: `/api/v1/carrer/${id}`,
        });
        return response;
    } catch (error) {
        return error;
    }
};
