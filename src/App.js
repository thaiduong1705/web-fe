import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { publicRoutes, privateRoutes } from './routes';
import { getAcademicLevels, getCareers, getDistricts, getPositions, getWorkingTypes } from './store/action/otherData';
import './App.css';
import ProtectedRoutes from './utils/ProtectedRoutes';
import DefaultLayout from './layouts/DefaultLayout';
import { getCurrent } from '~/store/action/user';
import DynamicPageTitle from './utils/DynamicPageTitle';
function App() {
    const [delayFinish, setDelayFinish] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAcademicLevels());
        dispatch(getCareers());
        dispatch(getPositions());
        dispatch(getWorkingTypes());
    }, []);
    const { isLoggedIn } = useSelector((state) => state.auth);
    useEffect(() => {
        const id = setTimeout(() => {
            setDelayFinish(true);
        }, 1500);
        return () => {
            clearTimeout(id);
        };
    }, [isLoggedIn]);

    useEffect(() => {
        const getuser = setTimeout(() => {
            isLoggedIn && dispatch(getCurrent());
        }, 1000);
        return () => {
            clearTimeout(getuser);
        };
    }, [isLoggedIn, dispatch]);
    return delayFinish ? (
        <Router>
            <DynamicPageTitle />
            <Routes>
                {publicRoutes.map((route, index) => {
                    const Page = route.component;
                    return <Route key={index} path={route.path} element={<Page />} />;
                })}
                <Route element={<ProtectedRoutes />}>
                    {privateRoutes.map((route, index) => {
                        const Page = route.component;
                        const Layout = DefaultLayout;
                        return route.subRoutes ? (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            >
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
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Route>
            </Routes>
        </Router>
    ) : null;
}

export default App;
