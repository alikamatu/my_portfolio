import { createContext, useEffect, useState } from "react";

export const DarkModeContext = createContext();

export const DarkModeContextProvider = ({ children }) => {
  const storedDarkMode = localStorage.getItem("darkMode");
  console.log("Stored darkMode:", storedDarkMode);
  const initialDarkMode = storedDarkMode !== undefined ? storedDarkMode : false;
  const [darkMode, setDarkMode] = useState(initialDarkMode);

  const toggle = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggle }}>
      {children}
    </DarkModeContext.Provider>
  );
};
