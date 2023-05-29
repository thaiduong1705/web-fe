import React from 'react';

const Login = () => {
    return (
        <section className="bg-gray-50 dark:bg-gray-900 ">
            <div className="flex flex-col items-center justify-center px-[24px] py-[32px] mx-auto md:h-screen lg:py-0 w-[500px]">
                <button className="flex items-center mb-6 text-[24px] leading-[32px] font-semibold text-gray-900 dark:text-white">
                    Giới thiệu việc làm
                </button>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-[24px] space-y-[16px] md:space-y-[24px] sm:p-[32px]">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Đăng nhập
                        </h1>
                        <form className="space-y-[16px] md:space-y-[24px]" action="#">
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block mb-[8px] text-[14px] leading-[20px] font-medium text-gray-900 dark:text-white"
                                >
                                    Tên tài khoản
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-[14px] leading-[20px] rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-[10px] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder=""
                                    required=""
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
                                    id="password"
                                    placeholder=""
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-[14px] rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-[10px] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required=""
                                />
                            </div>
                            <div className="flex items-center justify-end">
                                <button
                                    href="#"
                                    className="text-[14px] font-medium text-primary-600 hover:underline dark:text-primary-500"
                                >
                                    Forgot password?
                                </button>
                            </div>
                            <button
                                type="submit"
                                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-[14px] px-[20px] py-[10px] text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            >
                                Sign in
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
