//import { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaste, faUser, faBuilding } from '@fortawesome/free-solid-svg-icons';

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

export const publicRoutes = [
    {
        path: '/',
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
                path: 'chi-tiet/:id',
                component: DetailPage,
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
        ],
    },
];
export const privateRoutes = [];
