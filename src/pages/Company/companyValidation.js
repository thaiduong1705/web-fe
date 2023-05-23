import * as yup from 'yup';

export const companySchema = yup.object().shape({
    companyName: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.number().max(10).required(),
    address: yup.string().required(),
    introduction: yup.string().required(),
    companySize: yup.string().required(),
    careerList: yup
        .array()
        .min(1, 'Có ít nhất 1 lĩnh vực được chọn')
        .of(
            Yup.object().shape({
                id: Yup.string().required('Tên không được để trống'),
                value: Yup.string().required('Giá trị không được để trống'),
            }),
        ),
});
