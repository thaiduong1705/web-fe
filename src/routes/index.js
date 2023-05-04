//import { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaste, faUser, faBuilding } from '@fortawesome/free-solid-svg-icons';

import { CreatePost, Homepage, Jobpage, ListPosts } from '~/pages';

export const publicRoutes = [
    {
        path: '/',
        component: Homepage,
    },

    {
        title: 'Bài tuyển dụng',
        path: '/posts',
        icon: <FontAwesomeIcon icon={faPaste} />,
        component: Jobpage,
        subRoutes: [
            {
                path: '',
                component: ListPosts,
            },
            {
                path: 'create',
                component: CreatePost,
            },
        ],
    },

    // {
    //     title: 'Hồ sơ nhà tuyển dụng',
    //     path: '/company',
    //     icon: <FontAwesomeIcon icon={faBuilding} />,
    // },

    // {
    //     title: 'Hồ sơ ứng viên',
    //     path: '/candidate',
    //     icon: <FontAwesomeIcon icon={faUser} />,
    // },
];
export const privateRoutes = [];
