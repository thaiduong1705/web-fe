import axiosInstance from '~/axiosConfig';

export const apiGetWorkingTypes = async () => {
    try {
        const response = await axiosInstance({
            method: 'get',
            url: '/api/v1/working-type/',
        });
        return response;
    } catch (error) {
        return error;
    }
};

export const apiCreateWorkingType = async (payload) => {
    try {
        const response = await axiosInstance({
            method: 'post',
            url: '/api/v1/working-type/',
            data: payload,
        });
    } catch (error) {
        return error;
    }
};

export const apiUpdateWorkingType = async (payload, id) => {
    try {
        const response = await axiosInstance({
            method: 'put',
            url: `/api/v1/working-type/${id}`,
            data: payload,
        });
        return response;
    } catch (error) {
        return error;
    }
};

export const apiDeleteWorkingType = async (id) => {
    try {
        const response = await axiosInstance({
            method: 'delete',
            url: `/api/v1/working-type/${id}`,
        });
        return response;
    } catch (error) {
        return error;
    }
};
