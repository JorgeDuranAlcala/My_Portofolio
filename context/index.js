import React, { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { theme, dark_theme } from "../theme";

const Context = createContext(null)

export const ContextProvider = ({ children }) => {

    const [currentTheme, setCurrentTheme] = useState('light')

    const value = { currentTheme, setCurrentTheme }

    return <Context.Provider value={value}>
        <ThemeProvider theme={currentTheme !== 'light' ? dark_theme : theme}>
            { children }
        </ThemeProvider>
    </Context.Provider>
}