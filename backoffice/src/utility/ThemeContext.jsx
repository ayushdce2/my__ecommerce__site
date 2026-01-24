import React, { createContext, useState, useEffect, useContext } from "react";

// ================= CONTEXT =================
const AppThemeContext = createContext();

// Custom hook for easier usage
export const useAppTheme = () => useContext(AppThemeContext);

// ================= PROVIDER =================
const AppThemeProvider = ({ children }) => {
  // Theme state
  const [darkMode, setDarkMode] = useState(false);

  // Global loading state
  const [apiloading, setApiLoading] = useState(false);

  // Persist theme in localStorage
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
    <AppThemeContext.Provider
      value={{
        darkMode,
        toggleTheme,
        apiloading,
        setApiLoading, // expose setLoading for API calls
      }}
    >
      <div className={darkMode ? "dark" : ""}>
        {children}

        {/* ================= GLOBAL LOADING MODAL ================= */}
        {apiloading && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl flex flex-col items-center gap-4 shadow-lg">
              <div className="h-12 w-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              <p className="text-gray-800 dark:text-white font-medium">Loading...</p>
            </div>
          </div>
        )}
      </div>
    </AppThemeContext.Provider>
  );
};

export default AppThemeContext;
export { AppThemeProvider };
