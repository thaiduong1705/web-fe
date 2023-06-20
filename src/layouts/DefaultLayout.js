import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from '~/components/Sidebar';
import Navbar from '~/components/Navbar';
import { useStateContext } from '~/contexts/Context';

const DefaultLayout = ({ children }) => {
    const { activeMenu, setActiveMenu } = useStateContext();

    const dispatch = useDispatch();
    return (
        <div className="bg-slate-100">
            <div>
                {activeMenu ? (
                    <div className="w-96 fixed sidebar dark:bg-secondary-dark-bg bg-white">
                        <Sidebar />
                    </div>
                ) : (
                    <div
                        className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${
                            activeMenu ? 'md:ml-96' : 'flex-2'
                        }`}
                    >
                        <Sidebar />
                    </div>
                )}
                <div
                    className={
                        activeMenu
                            ? 'dark:bg-main-dark-bg bg-slate-100 w-auto h-auto item-center md:ml-96'
                            : 'bg-main-bg dark:bg-main-dark-bg w-auto item-center justify-between'
                    }
                >
                    <Navbar />
                </div>
                <div className="ml-[40px] mr-[12px]">{children}</div>
            </div>
        </div>
    );
};

export default DefaultLayout;
