import React,{useState,useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";

const ThemeDarkLight = () => {

        const dispatch = useDispatch();
      const theme = useSelector((state) => state.theme);
          useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <>
    
     <button
        onClick={() => dispatch({ type: "TOGGLE_THEME" })}
        className="px-6 py-3 rounded
          bg-gray-200 dark:bg-gray-700">
        {theme === "light" ? "Dark 🌙" : "Light ☀️"}
      </button>
    </>
  )
}

export default ThemeDarkLight