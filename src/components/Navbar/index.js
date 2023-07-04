import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faUserTie, faRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons';
import { useStateContext } from '~/contexts/Context';
import { useDispatch, useSelector } from 'react-redux';

import { logout } from '~/store/action/auth';
import { getCurrent } from '~/store/action/user';
import UpdateUserModal from '../UpdateUserModal';
const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { currentUser } = useSelector((state) => state.user);

    const handleLogout = () => {
        dispatch(logout());
        navigate('/dang-nhap');
    };
    const [openUpdate, setOpenUpdate] = useState(false);
    return (
        <div className="flex justify-between mr-[16px] ml-[52px] py-2 bg-slate-100">
            <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={faUserTie} style={{ color: '#3282f6' }} />
                <span className="font-medium text-blue-500 pt-[4px]">JobProject</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer text-blue-500 text-14 font-medium p-2 group hover:bg-light-gray rounded-lg relative">
                <div>XIN CHÀO {currentUser.userName}</div>
                <img
                    className="rounded-full w-12 h-12"
                    src="https://cdn4.iconfinder.com/data/icons/green-shopper/1068/user.png"
                    alt="user-profile"
                />
                <FontAwesomeIcon icon={faCaretDown} style={{ color: '#3B82F6' }} />
                <div className="absolute top-[40px]  bg-slate-50 p-3 right-0 hidden group-hover:block z-10 w-[250px]">
                    <ul>
                        <li className="flex w-full py-[12px]">
                            <FontAwesomeIcon icon={faUser} className="m-2" />
                            <button
                                className="submenu-item mr-auto hover:opacity-70"
                                onClick={() => {
                                    setOpenUpdate(true);
                                }}
                            >
                                Thay đổi thông tin tài khoản
                            </button>
                        </li>
                        <li className="flex w-full py-[12px]">
                            <FontAwesomeIcon icon={faRightFromBracket} className="m-2" />
                            <button className="submenu-item mr-auto hover:opacity-70" onClick={handleLogout}>
                                Đăng xuất
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <UpdateUserModal open={openUpdate} closeModal={() => setOpenUpdate(false)} />
        </div>
    );
};

export default Navbar;
