import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';

import { publicRoutes, privateRoutes } from './routes';
import Sidebar from './components/Sidebar';
import './App.css';
import { Switch } from '@mui/material';

function App() {
    const activemenu = true;
    return (
        <Router>
            <div>
                <div className="flex fixed dark:bg-main-dark-bg">
                    <h1 className="underline text-3xl">App</h1>
                    <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
                        <Tooltip title="Setting">
                            <IconButton className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white bg-blue-300 border-r-8">
                                <FontAwesomeIcon icon={faGear} />
                            </IconButton>
                        </Tooltip>
                    </div>
                </div>
                {activemenu ? (
                    <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
                        <Sidebar />
                    </div>
                ) : (
                    <div
                        className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${
                            activemenu ? 'md:ml-72' : 'flex-2'
                        }`}
                    >
                        <Sidebar />
                    </div>
                )}
                <div className="bg-main-bg dark:bg-main-dark-bg flex-1">
                    <div>
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
                </div>
            </div>
        </Router>
    );
}

export default App;
