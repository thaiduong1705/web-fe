import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';

import { publicRoutes, privateRoutes } from './routes';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import { useStateContext } from '~/contexts/Context';
import './App.css';
import { Switch } from '@mui/material';

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
                        ? 'dark:bg-main-dark-bg bg-main-bg w-auto h-[52px] item-center md:ml-96'
                        : 'bg-main-bg dark:bg-main-dark-bg w-auto item-center justify-between'
                }
            >
                <Navbar />
            </div>
            <div className="md:ml-96 w-auto">
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
