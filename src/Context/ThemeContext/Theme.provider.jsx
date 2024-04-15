import React, { createContext, useContext, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { customTheme } from "../../Data/theme";

const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(customTheme);

  function isMobileDevice() {
    // Regular expression to match common mobile device keywords
    const mobileKeywords =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;

    // Check if the user agent string contains any of the mobile keywords
    return mobileKeywords.test(navigator.userAgent);
  }

  useEffect(() => {
    if (isMobileDevice()) {
      setTheme((prevTheme) => ({
        ...prevTheme,
        isMobile: true,
        navbarHt: "5rem",
      }));
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;

export const useThemeContext = () => useContext(ThemeContext);
