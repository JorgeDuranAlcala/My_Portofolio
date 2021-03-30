import React, { createContext, useState, useContext } from "react";
import { ThemeProvider } from "styled-components";
import { theme, dark_theme } from "../theme";

const Context = createContext(null);

export const useGlobalState = () => useContext(Context);

export const ContextProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState("light");
  const [showModal, setShowModal] = useState(false);

  const value = { currentTheme, setCurrentTheme, showModal, setShowModal };

  return (
    <Context.Provider value={value}>
      <ThemeProvider theme={currentTheme !== "light" ? dark_theme : theme}>
        {children}
      </ThemeProvider>
    </Context.Provider>
  );
};
