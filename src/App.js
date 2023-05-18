import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { publicRoutes, privateRoutes } from './routes';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import { useStateContext } from '~/contexts/Context';
import './App.css';

function App() {
    const { activeMenu, setActiveMenu } = useStateContext();
    return (
        <Router>
            {activeMenu ? (
                <div className="w-96 fixed sidebar dark:bg-secondary-dark-bg bg-white">
                    <Sidebar />
                </div>
            ) : (
                <div className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-96' : 'flex-2'}`}>
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
            <div className="w-auto">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        return route.subRoutes ? (
                            <Route key={index} path={route.path} element={<Page />}>
                                {route.subRoutes.map((subRoute, subIndex) => {
                                    const SubPage = subRoute.component;
                                    return (
                                        <Route
                                            key={subIndex}
                                            index={subRoute.path === '' ? true : false}
                                            element={<SubPage />}
                                            path={subRoute.path}
                                        />
                                    );
                                })}
                            </Route>
                        ) : (
                            <Route key={index} path={route.path} element={<Page />} />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
