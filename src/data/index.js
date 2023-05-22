export const Gender = [
    {
        data: null,
        value: 'Tất cả giới tính',
    },
    {
        data: 0,
        value: 'Nam',
    },
    {
        data: 1,
        value: 'Nữ',
    },
];

export const Exp = [
    {
        data: null,
        value: 'Tất cả kinh nghiệm',
    },
    {
        data: 1,
        value: 'Dưới 1 năm',
    },
    {
        data: 2,
        value: '1 năm',
    },
    {
        data: 3,
        value: '2 năm',
    },
    {
        data: 4,
        value: '3 năm',
    },
    {
        data: 5,
        value: '4 năm',
    },
    {
        data: 999,
        value: 'Trên 5 năm',
    },
];

export const Salary = [
    {
        data: [],
        value: 'Tất cả mức lương',
    },
    {
        data: [0, 3],
        value: 'Dưới 3 triệu',
    },
    {
        data: [3, 5],
        value: 'Từ 3 đến 5 triệu',
    },
    {
        data: [5, 7],
        value: 'Từ 5 đến 7 triệu',
    },
    {
        data: [7, 10],
        value: 'Từ 7 đến 10 triệu',
    },
    {
        data: [10, 12],
        value: 'Từ 10 đến 12 triệu',
    },
    {
        data: [12, 15],
        value: 'Từ 12 đến 15 triệu',
    },
    {
        data: [15, 20],
        value: 'Từ 15 đến 20 triệu',
    },
    {
        data: [20, 25],
        value: 'Từ 20 đến 25 triệu',
    },
    {
        data: [0, 0],
        value: 'Thoả thuận',
    },
];

export const Age = [
    {
        min: 18,
        max: 25,
        value: 'Từ 18 đến 25 tuổi ',
    },
];

export const CreatedAt = [
    {
        data: [],
        value: 'Tất cả thời gian',
    },
    {
        data: [new Date(new Date() - 3 * 24 * 60 * 60 * 1000), new Date()],
        value: '3 ngày trước',
    },
    {
        data: [new Date(new Date() - 5 * 24 * 60 * 60 * 1000), new Date()],
        value: '5 ngày trước',
    },
    {
        data: [new Date(new Date() - 7 * 24 * 60 * 60 * 1000), new Date()],
        value: '1 tuần trước',
    },
    {
        data: [new Date(new Date() - 14 * 24 * 60 * 60 * 1000), new Date()],
        value: '2 tuần trước',
    },
    {
        data: [new Date(new Date() - 30 * 24 * 60 * 60 * 1000), new Date()],
        value: '1 tháng trước',
    },
];
