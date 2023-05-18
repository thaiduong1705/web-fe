import axios from 'axios';
import instance from '../axiosConfig';

export const apiGetCompanies = async () => {
    try {
        const response = await instance({
            method: 'get',
            url: '/api/v1/company/all',
        });
        return response;
    } catch (error) {
        return error;
    }
};
