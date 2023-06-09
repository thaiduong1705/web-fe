import * as yup from 'yup';

export const jobSchema = yup.object().shape({
    jobTitle: yup.string().required('Chưa nhập tên công việc'),
    needNumber: yup.number().required('Chưa nhập số lượng cần tuyển'),
    companyId: yup.string().required('Chưa nhập công ty'),
    positionId: yup.string().required('Chưa nhập vị trí tuyển dụng'),
    workingTypeId: yup.string().required('Chưa nhập loại hình làm việc'),
    academicLevelId: yup.string().required('Chưa nhập trình độ văn hóa'),
    endDate: yup.string().required('Chưa nhập ngày hết hạn bài đăng'),
    gender: yup.number().required('Chưa nhập giới tính'),
    workingAddress: yup.string().required('Chưa nhập địa chỉ làm việc'),
    experienceYear: yup.number().required('Chưa nhập thâm niên làm việc'),
    ageMin: yup.number().required('Chưa nhập độ tuổi tối thiểu'),
    ageMax: yup.number().required('Chưa nhập độ tuổi tối đa'),
    salaryMin: yup.number().required('Chưa nhập lương tối thiểu'),
    salaryMax: yup.number().required('Chưa nhập lương tối đa'),
    jobDescribe: yup.string().required('Chưa nhập mô tả công việc'),
    jobRequirement: yup.string().required('Chưa nhập yêu cầu công việc'),
    benefits: yup.string().required('Chưa nhập quyền lợi công việc'),
    careerList: yup.array().min(1, 'Có ít nhất 1 ngành nghề được chọn'),
    districtList: yup.array().min(1, 'Có ít nhất 1 khu vực được chọn'),
});
