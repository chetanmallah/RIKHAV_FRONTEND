// import React, { createContext, useState, useContext, useEffect } from 'react';

// // Create a context for the theme
// const ThemeContext = createContext();

// // Create a provider component to wrap your app and manage the theme state
// export const ThemeProvider = ({ children }) => {
//   // Retrieve the saved theme from localStorage or default to dark mode
//   const savedTheme = localStorage.getItem("theme") === "light" ? false : true;
 

//   const [isDarkMode, setIsDarkMode] = useState(savedTheme);

//   // Toggle the theme between dark and light
//   const toggleTheme = () => {
//     const newTheme = !isDarkMode;
//     setIsDarkMode(newTheme);
//     localStorage.setItem("theme", newTheme ? "dark" : "light"); // Save theme to localStorage
//   };

//   return (
//     <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };


// export const useTheme = () => useContext(ThemeContext);


// initally light theme 

import React, { createContext, useState } from "react";

// Create a context for the theme
const ThemeContext = createContext();

// Create a provider component to wrap your app and manage the theme state
export const ThemeProvider = ({ children }) => {
  // Start with light mode (default)
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle the theme between dark and light
  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light"); // Optionally save the theme
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => React.useContext(ThemeContext);
