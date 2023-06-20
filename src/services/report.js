import axiosInstance from '~/axiosConfig';
export const apiGetReport = async () => {
    try {
        const response = await axiosInstance({
            method: 'get',
            url: '/api/v1/report/get-report',
        });
        return response;
    } catch (error) {
        console.log(error);
        return error;
    }
};
