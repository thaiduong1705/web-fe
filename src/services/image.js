import axiosInstance from '~/axiosConfig';
export const apiUploadImagesCompany = async (formData) => {
    try {
        const response = await axiosInstance({
            method: 'post',
            url: `/api/v1/image/upload-image`,
            data: formData,
        });
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const apiRemoveImagesCompany = async (formData) => {
    try {
        const response = await axiosInstance({
            method: 'post',
            url: `/api/v1/image/delete-image`,
            data: formData,
        });
        return response;
    } catch (error) {
        console.log(error);
    }
};
