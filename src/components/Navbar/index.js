import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBell,
    faCartShopping,
    faMessage,
    faBars,
    faCircleUser,
    faCaretDown,
    faUserTie,
} from '@fortawesome/free-solid-svg-icons';

import { routes } from '~/data/';
import { useStateContext } from '~/contexts/Context';
import { Tooltip } from '@mui/material';
import Dropdown from './dropdown';

const NavButton = ({ title, customFunc, color, dotColor, icon, className }) => {
    return (
        <Tooltip title={title}>
            <button
                type="button"
                onClick={customFunc}
                style={{ color }}
                className="relative text-3xl rounded-full p-2 hover:bg-light-gray"
            >
                {icon}
            </button>
        </Tooltip>
    );
};

const Navbar = () => {
    const [dropdown, setDropdown] = useState(false);

    const { currentColor, activeMenu, setActiveMenu, handleClick, isClicked, setScreenSize, screenSize } =
        useStateContext();

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (screenSize <= 900) {
            setActiveMenu(false);
        } else {
            setActiveMenu(true);
        }
    }, [screenSize]);

    const handleActiveMenu = () => setActiveMenu(!activeMenu);

    return (
        <div className="flex justify-between mr-[16px]">
            <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={faUserTie} style={{ color: '#3282f6' }} />
                <span className="font-medium text-blue-500 pt-[4px]">JobProject</span>
            </div>
            <div className="flex items-center justify-end">
                <div
                    className="flex items-center gap-2 cursor-pointer p-2 hover:bg-light-gray rounded-lg"
                    onMouseEnter={() => setDropdown(true)}
                    onMouseLeave={() => setDropdown(false)}
                >
                    <img
                        className="rounded-full w-12 h-12"
                        src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/sb9bSAPV1fYDP9hKyhctQSprqtn.jpg"
                        alt="user-profile"
                    />
                    <FontAwesomeIcon icon={faCaretDown} style={{ color: '#4B5563' }} />
                </div>
                {dropdown && <Dropdown />}
            </div>
        </div>
    );
};

export default Navbar;
