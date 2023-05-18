import axiosConfig from '../axiosConfig';

export const apiGetJobItem = () =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axiosConfig({
                method: 'get',
                url: '/api/v1/post/all',
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });
