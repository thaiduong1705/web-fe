import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

import { publicRoutes } from '~/routes';
import { useStateContext } from '~/contexts/Context';

import styles from './Sidebar.module.css';
const Sidebar = () => {
    const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2 bg-blue-500';
    const normalLink =
        'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 hover:text-black hover:bg-blue-200 m-2';
    const { activeMenu, setActiveMenu } = useStateContext();
    return (
        <div className="ml-3 h-screen md:overflow-hidden overflow-auto ">
            {activeMenu && (
                <>
                    <div className="flex justify-between items-center">
                        <Link
                            to="/"
                            onClick={() => {}}
                            className="flex justify-center items-center gap-6 text-3xl mt-6 ml-3 font-extrabold tracking-tight dark:text-white text-slate-900"
                        >
                            <FontAwesomeIcon icon={faHouse} />
                            <span>Giới thiệu việc làm</span>
                        </Link>
                    </div>
                    <div className="mt-10">
                        {publicRoutes.map((route, index) => {
                            return (
                                <div className="flex justify-between">
                                    <NavLink
                                        to={route.path}
                                        key={index}
                                        className={({ isActive }) => (isActive ? activeLink : normalLink) + ' flex-1'}
                                        onClick={() => {
                                            setActiveMenu((prev) => true);
                                        }}
                                    >
                                        {route.icon}
                                        <span className="capitalize">{route.title}</span>
                                    </NavLink>
                                </div>
                            );
                        })}
                    </div>
                </>
            )}
        </div>
    );
};

export default Sidebar;
