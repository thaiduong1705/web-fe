import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCartShopping, faMessage, faBars } from '@fortawesome/free-solid-svg-icons';

import { routes } from '~/data/';
import { useStateContext } from '~/contexts/Context';
import { Tooltip } from '@mui/material';

const NavButton = ({ title, customFunc, color, dotColor, icon }) => {
    return (
        <Tooltip title={title}>
            <button
                type="button"
                onClick={customFunc}
                style={{ color }}
                className="relative text-xl rounded-full p-3 hover:bg-light-gray"
            >
                <span
                    style={{ background: dotColor }}
                    className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
                />
                {icon}
            </button>
        </Tooltip>
    );
};

const Navbar = () => {
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
        <div className="flex justify-between p-2 md:mx-6 relative">
            <NavButton
                title="Menu"
                customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
                color="blue"
                icon={<FontAwesomeIcon icon={faBars} />}
            />
            <div className="flex">
                <NavButton
                    title="Cart"
                    customFunc={() => {}}
                    color="blue"
                    icon={<FontAwesomeIcon icon={faCartShopping} />}
                />
                <NavButton
                    title="Chat"
                    customFunc={() => {}}
                    color="blue"
                    dotColor="#03C9D7"
                    icon={<FontAwesomeIcon icon={faMessage} />}
                />
                <NavButton
                    title="Notification"
                    customFunc={() => {}}
                    color="blue"
                    dotColor="rgb(254, 201, 15)"
                    icon={<FontAwesomeIcon icon={faBell} />}
                />
            </div>
        </div>
    );
};

export default Navbar;
