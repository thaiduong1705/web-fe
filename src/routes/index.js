//import { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaste, faUser, faBuilding, faHome } from '@fortawesome/free-solid-svg-icons';

import {
    CandidatePage,
    CompanyPage,
    CreateCandidate,
    CreateCompany,
    CreatePost,
    DetailCandidate,
    DetailCompany,
    DetailPage,
    Homepage,
    Jobpage,
    ListCandidates,
    ListCompanies,
    ListPosts,
} from '~/pages';
import UpdatePost from '~/components/UpdatePost';
import Login from '~/pages/Login';
import RemovedListPosts from '~/pages/Jobpage/removedListPost';

export const publicRoutes = [
    {
        title: 'Đăng nhập',
        path: '/dang-nhap',
        component: Login,
    },
];
export const privateRoutes = [
    {
        path: '/',
        icon: <FontAwesomeIcon icon={faHome} />,
        title: 'Trang chủ',
        component: Homepage,
    },

    {
        title: 'Bài tuyển dụng',
        path: '/viec-lam',
        icon: <FontAwesomeIcon icon={faPaste} />,
        component: Jobpage,
        subRoutes: [
            {
                path: '',
                component: ListPosts,
            },
            {
                path: 'tao-viec-lam',
                component: CreatePost,
            },
            {
                path: 'chi-tiet/:name/:id',
                component: DetailPage,
            },
            {
                path: 'chinh-sua/:id',
                component: UpdatePost,
            },
            {
                path: 'bai-viet-bi-an',
                component: RemovedListPosts,
            },
        ],
        subNav: [
            {
                title: 'Danh sách tuyển dụng',
                path: '/viec-lam/',
            },
            {
                title: 'Thêm bài tuyển dụng',
                path: '/viec-lam/tao-viec-lam',
            },
        ],
    },

    {
        title: 'Nhà tuyển dụng',
        path: '/nha-tuyen-dung',
        icon: <FontAwesomeIcon icon={faBuilding} />,
        component: CompanyPage,
        subRoutes: [
            {
                path: '',
                component: ListCompanies,
            },
            {
                path: 'tao-moi',
                component: CreateCompany,
            },
            {
                path: 'chi-tiet/:name/:id',
                component: DetailCompany,
            },
            {
                path: 'chinh-sua/:id',
                component: UpdatePost,
            },
        ],
        subNav: [
            {
                title: 'Danh sách nhà tuyển dụng',
                path: '/nha-tuyen-dung/',
            },
            {
                title: 'Thêm nhà tuyển dụng',
                path: '/nha-tuyen-dung/tao-moi',
            },
        ],
    },

    {
        title: 'Hồ sơ ứng viên',
        path: '/ung-vien',
        icon: <FontAwesomeIcon icon={faUser} />,
        component: CandidatePage,
        subRoutes: [
            {
                path: '',
                component: ListCandidates,
            },
            {
                path: 'tao-ung-vien',
                component: CreateCandidate,
            },
            {
                path: 'chi-tiet/:id',
                component: DetailCandidate,
            },
            {
                path: 'chinh-sua/:id',
                component: UpdatePost,
            },
        ],
        subNav: [
            {
                title: 'Danh sách ứng viên',
                path: '/ung-vien/',
            },
            {
                title: 'Thêm ứng viên',
                path: '/ung-vien/tao-ung-vien',
            },
        ],
    },
];
