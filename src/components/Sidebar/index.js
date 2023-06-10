import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

import { privateRoutes } from '~/routes';
import { useStateContext } from '~/contexts/Context';

import styles from './Sidebar.module.css';
const Sidebar = () => {
    const activeLink =
        'flex items-center gap-5 pl-[16px] pt-[12px] pb-[12px] pr-[16px] rounded-[8px] text-white font-medium text-md m-2 bg-blue-600';
    const normalLink =
        'flex items-center gap-5 pl-[16px] pt-[12px] pb-[12px] pr-[16px] rounded-[8px] text-md text-blue-600 font-medium dark:text-gray-200 hover:text-white hover:bg-blue-400 m-2 hover:transition-all';
    const { activeMenu, setActiveMenu } = useStateContext();
    return (
        <div className="ml-4 mt-4 rounded-[8px] h-[960px] w-[260px] bg-white p-3 fixed">
            {activeMenu && (
                <>
                    <div className="flex justify-between items-center border-b-1 border-blue-400 border-opacity-50">
                        <Link
                            to="/"
                            onClick={() => {}}
                            className="flex justify-center items-center gap-6 text-3xl mt-6 mb-6 ml-6 font-extrabold tracking-tight dark:text-white text-blue-600 antialiased"
                        >
                            <FontAwesomeIcon icon={faHouse} />
                            <span>Giới thiệu việc làm</span>
                        </Link>
                    </div>
                    <div className="mt-6">
                        {privateRoutes.map((route, index) => {
                            return (
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
                            );
                        })}
                    </div>
                </>
            )}
        </div>
    );
};

export default Sidebar;
