import React, { createContext, useContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { customTheme } from "../../Data/theme";

const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(customTheme);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;

export const useThemeContext = () => useContext(ThemeContext);
