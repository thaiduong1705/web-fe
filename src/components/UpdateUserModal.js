import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { apiUpdateUser } from '~/services/user';
import { useNavigate } from 'react-router-dom';
const UpdateUserModal = ({ open, closeModal }) => {
    const { currentUser } = useSelector((state) => state.user);
    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [enable, setEnable] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = () => {
        Swal.fire({
            icon: 'question',
            title: 'Bạn chắc không',
            showCancelButton: true,
            showConfirmButton: true,
        }).then(async (result) => {
            if (result.isConfirmed) {
                const response = await apiUpdateUser({ newUser: userName, newPass: password });
                if (response.data.err === 0) {
                    Swal.fire({
                        icon: 'success',
                        title: response.data.msg,
                    }).then(() => {
                        closeModal();
                        navigate(0);
                    });
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: response.data.msg,
                    });
                }
            }
        });
    };

    useEffect(() => {
        setUsername(currentUser?.userName);
    }, [currentUser]);

    if (!open) return null;
    return ReactDOM.createPortal(
        <div className="fixed top-0 left-0 right-0 bottom-0 z-500 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 max-h-full flex justify-center items-center bg-overlay-70">
            <div className="bg-white rounded-lg shadow dark:bg-gray-700 w-[700px]">
                <div className=" relative flex items-start justify-between p-[16px] border-b rounded-t-[4px] dark:border-gray-600">
                    <h3 className="text-[20px] font-semibold text-gray-900 dark:text-white line-clamp-1 w-[calc(100%-10rem)] border-l-4 border-blue-500">
                        <p className="pl-3"> Chỉnh sửa thông tin tài khoản</p>
                    </h3>
                    <button
                        type="button"
                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-[20px] p-[6px] ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white absolute top-[16px] right-[16px]"
                        onClick={closeModal}
                    >
                        <FontAwesomeIcon icon={faClose} />
                    </button>
                </div>
                <div className="p-[24px] space-y-[24px]">
                    <div className="flex items-center">
                        <p className="font-semibold text-blue-500">Username: </p>
                        <input
                            value={userName}
                            onChange={(e) => setUsername(e.target.value)}
                            className="ml-[4px] border p-[4px]"
                        />
                    </div>

                    <div className="flex items-center">
                        <p className={`font-semibold text-blue-500 mr-[12px]`}>Thay đổi mật khẩu? </p>
                        <input type="checkbox" value={enable} onChange={(e) => setEnable(e.target.checked)} />
                    </div>

                    <div className="flex items-center">
                        <p className={`font-semibold text-blue-500 ${!enable && 'opacity-50'}`}>Password: </p>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="ml-[4px] border p-[4px]"
                            disabled={!enable}
                        />
                    </div>
                </div>
                <div className="flex items-center justify-end p-[24px] space-x-[8px] border-t border-gray-200 rounded-b-[4px] dark:border-gray-600">
                    <button
                        type="button"
                        className="text-white bg-blue-700 hover:bg-blue-800 outline-none font-medium rounded-lg text-[14px] px-[20px] py-[10px] text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={(e) => {
                            handleSubmit();
                        }}
                    >
                        Chỉnh sửa
                    </button>
                    <button
                        type="button"
                        className="text-gray-500 bg-white hover:bg-gray-100 outline-none rounded-lg border border-gray-200 text-[14px] px-[20px] py-[10px] font-medium hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                        onClick={closeModal}
                    >
                        Huỷ bỏ
                    </button>
                </div>
            </div>
        </div>,
        document.getElementById('portal'),
    );
};

export default UpdateUserModal;
