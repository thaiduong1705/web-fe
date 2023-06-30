import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

const DynamicPageTitle = () => {
    const location = useLocation();
    const { id, name } = useParams();
    useEffect(() => {
        const { pathname } = location;
        const routeTitleMap = {
            '/': 'Trang chủ',
            '/dang-nhap': 'Đăng nhập',
            '/viec-lam': 'Danh sách việc làm',
            '/viec-lam/tao-viec-lam': 'Tạo việc làm',
            [`/viec-lam/chi-tiet/${name}/${id}`]: `Bài tuyển dụng - ${name}`,
            [`/viec-lam/chinh-sua/${id}`]: `Chỉnh sửa bài tuyển dụng`,
            '/bai-viet-bi-an': 'Bài viết bị ẩn',

            '/nha-tuyen-dung': 'Nhà tuyển dụng',
            '/nha-tuyen-dung/tao-moi': 'Tạo nhà tuyển dụng mới',
            [`/nha-tuyen-dung/chi-tiet/${name}/${id}`]: `Nhà tuyển dụng - ${name}`,
            [`/nha-tuyen-dung/chinh-sua/${id}`]: `Chỉnh sửa nhà tuyển dụng`,

            '/ung-vien': 'Ứng viên',
            '/ung-vien/tao-ung-vien': 'Tạo ứng viên',
            [`/ung-vien/chi-tiet/${id}`]: 'Thông tin ứng viên',
            [`/ung-vien/chinh-sua/${id}`]: 'Chỉnh sửa ứng viên',

            // Add more routes and their corresponding titles as needed
        };

        document.title = routeTitleMap[pathname] || 'Default Title';
    }, [location, id, name]);

    return null; // Since this component doesn't render anything, return null
};

export default DynamicPageTitle;
