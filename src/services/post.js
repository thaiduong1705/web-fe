import axiosInstance from '../axiosConfig';

export const apiGetJobItem = () =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axiosInstance({
                method: 'get',
                url: '/api/v1/post/all',
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });

export const apiGetPostLimit = async (query) => {
    try {
        const response = await axiosInstance({
            method: 'get',
            url: `/api/v1/post/limit`,
            params: query,
        });
        return response;
    } catch (error) {
        return error;
    }
};
export const apiGetPost = async (id) => {
    try {
        const response = await axiosInstance({
            method: 'get',
            url: `/api/v1/post/get-post/${id}`,
        });
        return response;
    } catch (error) {
        return error;
    }
};
