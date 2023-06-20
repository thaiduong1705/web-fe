import * as yup from 'yup';

const VNPhone = /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/;

export const companySchema = yup.object().shape({
    companyName: yup.string().required('Chưa nhập tên công ty hoặc sai định dạng'),
    email: yup.string().email('Sai định dạng email').required('Chưa nhập email hoặc sai định dạng'),
    phone: yup
        .string()
        .min(10)
        .required('Chưa nhập điện thoại hoặc sai định dạng')
        .matches(VNPhone, 'Số điện thoại không đúng định dạng'),
    address: yup.string().required('Chưa nhập địa chỉ công ty hoặc sai định dạng'),
    introduction: yup.string().required('Chưa nhập giới thiệu công ty hoặc sai định dạng'),
    companySize: yup.string().required('Chưa nhập quy mô công ty hoặc sai định dạng'),
    careerList: yup.array().min(1, 'Có ít nhất 1 lĩnh vực được chọn'),
});
