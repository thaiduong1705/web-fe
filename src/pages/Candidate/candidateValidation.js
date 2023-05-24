import * as yup from 'yup';

export const candidateSchema = yup.object().shape({
    candidateName: yup.string().required(),
    gender: yup.boolean().required(),
    age: yup.number().required(),
    candidateCivilId: yup.string().required(),
    phoneNumber: yup.string().required(),
    email: yup.string().email().required(),
    homeAddress: yup.string().required(),
    academicLevelId: yup.string().required(),
    careerList: yup.array().min(1, 'Có ít nhất 1 ngành nghề được chọn'),
    experienceYear: yup.number().required(),
    candidatePosition: yup.string().required(),
    districtList: yup.array().min(1, 'Có ít nhất 1 khu vực được chọn'),
});
