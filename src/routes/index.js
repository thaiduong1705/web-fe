//import { Fragment } from 'react';
import { Homepage, Jobpage } from '~/pages';

export const publicRoutes = [
    {
        path: '/',
        component: Homepage,
    },
    {
        path: '/job',
        component: Jobpage,
    },
];
export const privateRoutes = [];
