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

export const apiCreatePost = async (post) => {
    try {
        const request = await axiosInstance({
            method: 'post',
            url: '/api/v1/post/create-post',
            data: post,
        });
        console.log(request);
        return request;
    } catch (error) {
        return error;
    }
};

export const apiUpdatePost = async (post) => {
    try {
        const request = await axiosInstance({
            method: 'put',
            url: '/api/v1/post/update-post',
            data: post,
        });
        return request;
    } catch (error) {
        return error;
    }
};

export const apiGetRelatedPost = async (postId, careerIds) => {
    try {
        const response = await axiosInstance({
            method: 'get',
            url: '/api/v1/post/get-related-post',
            params: {
                postId,
                careerIds,
            },
        });
        return response;
    } catch (error) {
        console.log(error);
    }
};
