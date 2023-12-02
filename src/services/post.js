import axiosInstance from '../axiosConfig';

// export const apiGetPostLimit = async (query) => {
//     try {
//         const response = await axiosInstance({
//             method: 'get',
//             url: `/api/v1/post/limit`,
//             params: query,
//         });
//         return response;
//     } catch (error) {
//         return error;
//     }
// };

export const apiGetAllPosts = async () => {
    try {
        const response = await axiosInstance({
            method: 'get',
            url: '/api/v1/post/',
        });
        return response;
    } catch (error) {
        return error;
    }
};

export const apiCreatePost = async (payload) => {
    try {
        const response = await axiosInstance({
            method: 'post',
            url: '/api/v1/post/',
            data: payload,
        });
        return response;
    } catch (error) {
        return error;
    }
};

export const apiGetFilterPosts = async (query) => {
    try {
        const response = await axiosInstance({
            method: 'get',
            url: '/api/v1/post/filter',
            params: query,
        });
        return response;
    } catch (error) {
        return error;
    }
};

export const apiGetRelatedPostsFromCareer = async (query) => {
    try {
        const response = await axiosInstance({
            method: 'get',
            url: '/api/v1/post/relate',
            params: query,
        });
        return response;
    } catch (error) {
        return error;
    }
};

export const apiGetDeletedPosts = async () => {
    try {
        const response = await axiosInstance({
            method: 'get',
            url: '/api/v1/post/delete-posts',
        });
        return response;
    } catch (error) {
        return error;
    }
};

export const apiGetDeletedPostOfCompany = async () => {
    try {
        const response = await axiosInstance({
            method: 'get',
            url: '/api/v1/post/delete-post-comp',
        });
        return response;
    } catch (error) {
        return error;
    }
};

export const apiApplyPost = async (query) => {
    try {
        const response = await axiosInstance({
            method: 'get',
            url: '/api/v1/post/apply',
            params: query,
        });
        return response;
    } catch (error) {
        return error;
    }
};

export const apiChangeStatusApplied = async (query) => {
    try {
        const response = await axiosInstance({
            method: 'put',
            url: '/api/v1/post/apply',
            params: query,
        });
        return response;
    } catch (error) {
        return error;
    }
};

export const apiGetPostById = async (id) => {
    try {
        const response = await axiosInstance({
            method: 'get',
            url: `/api/v1/post/${id}`,
        });
        return response;
    } catch (error) {
        return error;
    }
};

export const apiUpdatePost = async (payload, id) => {
    try {
        const response = await axiosInstance({
            method: 'put',
            url: `/api/v1/post/${id}`,
            data: payload,
        });
        return response;
    } catch (error) {
        return error;
    }
};

export const apiDeletePost = async (id) => {
    try {
        const response = await axiosInstance({
            method: 'delete',
            url: `/api/v1/post/${id}`,
        });
        return response;
    } catch (error) {
        return error;
    }
};
