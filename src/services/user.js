import axiosInstance from '~/axiosConfig';
export const apiGetCurrent = async () => {
    try {
        const response = await axiosInstance({
            method: 'get',
            url: '/api/v1/user/get-current',
        });
        return response;
    } catch (error) {
        console.log(error);
        return error;
    }
};

export const apiUpdateUser = async (formData) => {
    try {
        const response = await axiosInstance({
            method: 'post',
            url: '/api/v1/user/update-user',
            data: formData,
        });
        return response;
    } catch (error) {
        console.log(error);
        return error;
    }
};
