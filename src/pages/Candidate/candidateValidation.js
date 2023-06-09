import * as yup from 'yup';

const VNPhone = /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/;

export const candidateSchema = yup.object().shape({
    candidateName: yup.string().required('Chưa nhập tên ứng viên'),
    gender: yup.boolean().required('Chưa nhập giới tính ứng viên'),
    age: yup.number().required('Chưa nhập ngày sinh ứng viên'),
    candidateCivilId: yup.string().required('Chưa nhập CCCD/CMND ứng viên'),
    phoneNumber: yup
        .string()
        .min(10)
        .required('Chưa nhập số điện thoại ứng viên')
        .matches(VNPhone, 'Số điện thoại không đúng định dạng'),
    email: yup.string().email('Sai định dạng email').required('Chưa nhập email ứng viên'),
    homeAddress: yup.string().required('Chưa nhập địa chỉ ứng viên'),
    academicLevelId: yup.string().required('Chưa nhập trình độ văn hóa'),
    careerList: yup.array().min(1, 'Có ít nhất 1 ngành nghề được chọn'),
    experienceYear: yup.number().required('Chưa nhập thâm niên làm việc'),
    positionId: yup.string().required('Chưa nhập cấp bậc mong muốn'),
    districtList: yup.array().min(1, 'Có ít nhất 1 khu vực được chọn'),
    CVImage: yup.string().required('Chưa có ảnh CV'),
    profileImage: yup.string().required('Chưa có ảnh chân dung ứng viên'),
});
