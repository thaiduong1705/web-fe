import axios from 'axios';
export const apiUploadImagesCompany = async (formData) => {
    try {
        console.log('go');
        const response = await axios({
            method: 'post',
            url: `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload/`,
            data: formData,
        });
        console.log(response);
        return response;
    } catch (error) {
        return error;
    }
};
