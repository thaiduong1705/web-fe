import * as yup from 'yup';

export const companySchema = yup.object().shape({
    companyName: yup.string().required('Chưa nhập tên công ty hoặc sai định dạng'),
    email: yup.string().email('Sai định dạng email').required('Chưa nhập email hoặc sai định dạng'),
    phone: yup.string().max(10).required('Chưa nhập điện thoại hoặc sai định dạng'),
    address: yup.string().required('Chưa nhập địa chỉ công ty hoặc sai định dạng'),
    introduction: yup.string().required('Chưa nhập giới thiệu công ty hoặc sai định dạng'),
    companySize: yup.string().required('Chưa nhập quy mô công ty hoặc sai định dạng'),
    careerList: yup.array().min(1, 'Có ít nhất 1 lĩnh vực được chọn'),
});
