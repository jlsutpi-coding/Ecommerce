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

  const setThemeMode = (mode) => {
    setTheme(mode);
    localStorage.theme = mode;
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };
  return (
    <ThemeContext.Provider value={{ theme, setThemeMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
