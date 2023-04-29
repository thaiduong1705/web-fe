import React, { useState, useContext, createContext } from 'react';

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
    const [screenSize, setScreenSize] = useState(undefined);
    const [activeMenu, setActiveMenu] = useState(true);
    const [currentMode, setCurrentMode] = useState('Light');
    const [currentColor, setCurrentColor] = useState('#03C9D7');
    const [themeSettings, setThemeSettings] = useState(false);
    const [isClicked, setIsClicked] = useState(undefined);

    const setMode = (e) => {
        setCurrentMode(e.target.value);
        localStorage.setItem('themeMode', e.target.value);
    };

    const setColor = (color) => {
        setCurrentColor(color);
        localStorage.setItem('colorMode', color);
    };

    // const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });

    return (
        // eslint-disable-next-line react/jsx-no-constructed-context-values
        <StateContext.Provider
            value={{
                currentColor,
                currentMode,
                activeMenu,
                screenSize,
                setScreenSize,
                isClicked,
                setIsClicked,
                setActiveMenu,
                setCurrentColor,
                setCurrentMode,
                setMode,
                setColor,
                themeSettings,
                setThemeSettings,
            }}
        >
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);
