import axiosInstance from '../axiosConfig';

export const apiGetCandidates = async () => {
    try {
        const response = await axiosInstance({
            method: 'get',
            url: '/api/v1/candidate/all',
        });
        return response;
    } catch (error) {
        return error;
    }
};

export const apiGetCandidate = async (id) => {
    try {
        const response = await axiosInstance({
            method: 'get',
            url: `/api/v1/candidate/get-candidate/${id}`,
        });
        return response;
    } catch (error) {
        return error;
    }
};

export const apiGetCandidateLimit = async (query) => {
    try {
        const response = await axiosInstance({
            method: 'get',
            url: `/api/v1/candidate/limit`,
            params: query,
        });
        return response;
    } catch (error) {
        return error;
    }
};

export const apiCreateCandidate = async (candiate) => {
    try {
        const request = await axiosInstance({
            method: 'post',
            url: '/api/v1/candidate/create-candidate',
            data: candiate,
        });
        return request;
    } catch (error) {
        return error;
    }
};

export const apiUpdateCandidate = async (candiate) => {
    try {
        const request = await axiosInstance({
            method: 'put',
            url: '/api/v1/candidate/update-candidate',
            data: candiate,
        });
        return request;
    } catch (error) {
        return error;
    }
};
