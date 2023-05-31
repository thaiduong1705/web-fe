import React from 'react';
import Sidebar from '~/components/Sidebar';
import Navbar from '~/components/Navbar';
import { useStateContext } from '~/contexts/Context';
const DefaultLayout = ({ children }) => {
    const { activeMenu, setActiveMenu } = useStateContext();
    return (
        <div>
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
                            ? 'dark:bg-main-dark-bg bg-main-bg w-auto h-auto item-center md:ml-96'
                            : 'bg-main-bg dark:bg-main-dark-bg w-auto item-center justify-between'
                    }
                >
                    <Navbar />
                </div>
                {children}
            </div>
        </div>
    );
};

export default DefaultLayout;
