import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { publicRoutes, privateRoutes } from './routes';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { faGear } from '@fortawesome/free-solid-svg-icons';

import './App.css';

function App() {
    return (
        <Router>
            <div>
                <iframe
                    width="1280"
                    height="720"
                    src="https://www.youtube.com/embed/jx5hdo50a2M"
                    title="Build and Deploy a React Admin Dashboard App With Theming, Tables, Charts, Calendar, Kanban and More"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                ></iframe>
                <div className="flex relative dark:bg-main-dark-bg">
                    <div className="underline text-3xl"></div>
                    <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
                        <TooltipComponent content="Settings" position="Top">
                            <button>
                                <FontAwesomeIcon icon={faGear} />
                            </button>
                        </TooltipComponent>
                    </div>
                </div>
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        const Layout = route.layout;
                        return (
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
                </Routes>
            </div>
        </Router>
    );
}

export default App;
