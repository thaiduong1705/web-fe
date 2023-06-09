import React, { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBell,
    faCartShopping,
    faMessage,
    faBars,
    faCircleUser,
    faCaretDown,
    faUserTie,
    faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { useStateContext } from '~/contexts/Context';
import { useDispatch, useSelector } from 'react-redux';

import { logout } from '~/store/action/auth';
import { getCurrent } from '~/store/action/user';
const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { isLoggedIn } = useSelector((state) => state.auth);
    const { currentUser } = useSelector((state) => state.user);

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

    useEffect(() => {
        const id = setTimeout(() => {
            isLoggedIn && dispatch(getCurrent());
        }, 1000);
        return () => {
            clearTimeout(id);
        };
    }, [isLoggedIn]);

    const handleActiveMenu = () => setActiveMenu(!activeMenu);

    const handleLogout = () => {
        dispatch(logout());
        navigate('/dang-nhap');
    };

    return (
        <div className="flex justify-between mx-[16px] border-b-1 border-gray-300">
            <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={faUserTie} style={{ color: '#3282f6' }} />
                <span className="font-medium text-blue-500 pt-[4px]">JobProject</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer p-2 group hover:bg-light-gray rounded-lg relative">
                <div>Xin chào {currentUser.userName}</div>
                <img
                    className="rounded-full w-12 h-12"
                    src="https://cdn4.iconfinder.com/data/icons/green-shopper/1068/user.png"
                    alt="user-profile"
                />
                <FontAwesomeIcon icon={faCaretDown} style={{ color: '#4B5563' }} />
                <div className="w-[170px] absolute top-[40px] text-start bg-slate-50 p-3 right-0 hidden group-hover:block">
                    <ul>
                        <li className="inline-flex w-full">
                            <FontAwesomeIcon icon={faRightFromBracket} className="m-2" />
                            <button className="submenu-item mr-auto" onClick={handleLogout}>
                                Đăng xuất
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
