import React, { useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    if (localStorage.theme === "dark") {
      return "dark";
    }
    if (localStorage.theme === "light") {
      return "light";
    }
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  });
  console.log(theme);

  const setThemeMode = (mode) => setTheme(mode);
  return (
    <ThemeContext.Provider value={{ theme, setThemeMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
