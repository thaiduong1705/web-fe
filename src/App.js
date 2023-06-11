import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { publicRoutes, privateRoutes } from './routes';
import { getAcademicLevels, getCareers, getDistricts, getPositions, getWorkingTypes } from './store/action/otherData';
import './App.css';
import ProtectedRoutes from './utils/ProtectedRoutes';
import DefaultLayout from './layouts/DefaultLayout';
import { getCurrent } from '~/store/action/user';
function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAcademicLevels());
        dispatch(getCareers());
        dispatch(getDistricts());
        dispatch(getPositions());
        dispatch(getWorkingTypes());
    }, []);

    const { isLoggedIn } = useSelector((state) => state.auth);
    useEffect(() => {
        const id = setTimeout(() => {
            isLoggedIn && dispatch(getCurrent());
        }, 1000);
        return () => {
            clearTimeout(id);
        };
    }, [isLoggedIn]);

    return (
        <Router>
            <Routes>
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
                {publicRoutes.map((route, index) => {
                    const Page = route.component;
                    return <Route key={index} path={route.path} element={<Page />} />;
                })}
            </Routes>
        </Router>
    );
}

export default App;
