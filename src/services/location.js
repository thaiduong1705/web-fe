import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://provinces.open-api.vn/api',
});

export const getListProvinces = async () => {
    try {
        const response = await axiosInstance({
            method: 'get',
            url: '/p',
        });
        console.log(response);
        return response;
    } catch (error) {
        return error;
    }
};

export const getProvinceDistricts = async (code) => {
    try {
        const response = await axiosInstance({
            method: 'get',
            url: `/p/${code}`,
            params: {
                depth: 2,
            },
        });
        return response;
    } catch (error) {
        return error;
    }
};

export const getDistrictWards = async (code) => {
    try {
        const response = await axiosInstance({
            method: 'get',
            url: `/d/${code}`,
            params: {
                depth: 2,
            },
        });
        return response;
    } catch (error) {
        return error;
    }
};
