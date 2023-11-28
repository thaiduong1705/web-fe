import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { redirect, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { login } from '~/store/action/auth';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isLoggedIn, msg, update } = useSelector((state) => state.auth);
    const [payload, setPayload] = useState({
        username: '',
        password: '',
    });
    const handleSubmit = () => {
        dispatch(login(payload));
    };
    useEffect(() => {
        isLoggedIn &&
            Swal.fire({
                icon: 'success',
                title: 'Thành công!',
                width: '300px',
            }).then(() => navigate('/', { replace: true }));
    }, [isLoggedIn]);
    useEffect(() => {
        msg &&
            Swal.fire({
                icon: 'error',
                title: 'Oops',
                text: msg,
                width: '300px',
            });
    }, [update]);
    return (
        <div className="bg-gray-50 dark:bg-gray-900 h-full overflow-hidden">
            <img
                src="https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80"
                className="absolute z-0 h-full w-full object-cover"
                alt=""
            />
            <div className="absolute inset-0 z-0 h-full w-full bg-black/50 overflow-hidden"></div>
            <div className="flex flex-col top-1/4 left-2/4 -translate-x-[50%] px-[24px] py-[32px] mx-auto lg:py-0 w-[500px] absolute z-1">
                <button className="flex items-center justify-center mb-5 text-[24px] leading-[32px] font-semibold text-white dark:text-white">
                    Giới thiệu việc làm
                </button>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-[24px] space-y-[16px] md:space-y-[24px] sm:p-[32px]">
                        <h1
                            className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
                            onClick={() => {
                                console.log(isLoggedIn);
                            }}
                        >
                            Đăng nhập
                        </h1>
                        <div>
                            <label
                                htmlFor="userName"
                                className="block mb-[8px] text-[14px] leading-[20px] font-medium text-gray-900 dark:text-white"
                            >
                                Tên tài khoản
                            </label>
                            <input
                                type="text"
                                name="username"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-[14px] leading-[20px] rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-[10px] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder=""
                                value={payload.username}
                                onChange={(e) =>
                                    setPayload((prev) => {
                                        return {
                                            ...prev,
                                            username: e.target.value,
                                        };
                                    })
                                }
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="password"
                                className="block mb-[8px] text-[14px] leading-[20px] font-medium text-gray-900 dark:text-white"
                            >
                                Mật khẩu
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder=""
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-[14px] rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-[10px] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                value={payload.password}
                                onChange={(e) =>
                                    setPayload((prev) => {
                                        return {
                                            ...prev,
                                            password: e.target.value,
                                        };
                                    })
                                }
                            />
                        </div>
                        <div className="flex items-center justify-end">
                            <button
                                href="#"
                                className="text-[14px] font-medium text-primary-600 hover:underline dark:text-primary-500"
                            >
                                Quên mật khẩu?
                            </button>
                        </div>
                        <button
                            onClick={handleSubmit}
                            className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-[14px] px-[20px] py-[10px] text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        >
                            Đăng nhập
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
