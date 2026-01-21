import React, { createContext, useState, useEffect } from "react";

const AppThemeContext = createContext();



const AppThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  // Optional: persist theme in localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme === "true") setDarkMode(true);
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  // Toggle theme function
  const toggleTheme = () => setDarkMode((prev) => !prev);

  return (
    <AppThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <div className={darkMode ? "dark" : ""}>{children}</div>
    </AppThemeContext.Provider>
  );
};



export default AppThemeContext;
export {AppThemeProvider}