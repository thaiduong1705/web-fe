import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaste, faUser, faBuilding } from '@fortawesome/free-solid-svg-icons';

export const routes = [
    {
        title: 'Thống kê',
        path: '/summary',
        icon: '',
    },

    {
        title: 'Bài tuyển dụng',
        path: '/post',
        icon: <FontAwesomeIcon icon={faPaste} />,
    },

    {
        title: 'Hồ sơ nhà tuyển dụng',
        path: '/company',
        icon: <FontAwesomeIcon icon={faBuilding} />,
    },

    {
        title: 'Hồ sơ ứng viên',
        path: '/candidate',
        icon: <FontAwesomeIcon icon={faUser} />,
    },
];
