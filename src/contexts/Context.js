import React, { useState, useContext, createContext } from 'react';

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [currentMode, setCurrentMode] = useState('Light');
    return (
        <StateContext.Provider value={{ activeMenu, setActiveMenu, currentMode, setCurrentMode }}>
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);
