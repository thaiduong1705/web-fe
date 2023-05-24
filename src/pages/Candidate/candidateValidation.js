import * as yup from 'yup';

export const candidateSchema = yup.object().shape({
    candidateName: yup.string().required('Chưa nhập tên ứng viên'),
    gender: yup.boolean().required('Chưa nhập giới tính ứng viên'),
    age: yup.number().required('Chưa nhập ngày sinh ứng viên'),
    candidateCivilId: yup.string().required('Chưa nhập CCCD/CMND ứng viên'),
    phoneNumber: yup.string().required('Chưa nhập số điện thoại ứng viên'),
    email: yup.string().email('Sai định dạng email').required('Chưa nhập email ứng viên'),
    homeAddress: yup.string().required('Chưa nhập địa chỉ ứng viên'),
    academicLevelId: yup.string().required('Chưa nhập trình độ văn hóa'),
    careerList: yup.array().min(1, 'Có ít nhất 1 ngành nghề được chọn'),
    experienceYear: yup.number().required('Chưa nhập thâm niên làm việc'),
    candidatePosition: yup.string().required('Chưa nhập quy mô công ty'),
    districtList: yup.array().min(1, 'Có ít nhất 1 khu vực được chọn'),
});
