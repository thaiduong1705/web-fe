import axiosInstance from '~/axiosConfig';

export const apiGetAllPositions = async () => {
    try {
        const response = await axiosInstance({
            method: 'get',
            url: '/api/v1/position/',
        });
        return response;
    } catch (error) {
        return error;
    }
};

export const apiCreateNewPositions = async (payload) => {
    try {
        const response = await axiosInstance({
            method: 'post',
            url: '/api/v1/position/',
            data: payload,
        });
        return response;
    } catch (error) {
        return error;
    }
};

export const apiUpdatePosition = async (payload, id) => {
    try {
        const response = await axiosInstance({
            method: 'post',
            url: `/api/v1/position/${id}`,
            data: payload,
        });
        return response;
    } catch (error) {
        return error;
    }
};

export const apiDeletePosition = async (id) => {
    try {
        const response = await axiosInstance({
            method: 'delete',
            url: `/api/v1/position/${id}`,
        });
    } catch (error) {
        return error;
    }
};
