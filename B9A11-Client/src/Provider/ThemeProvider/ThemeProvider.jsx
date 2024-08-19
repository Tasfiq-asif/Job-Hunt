import { createContext, useContext, useEffect, useState } from "react";


const ThemeContext = createContext();


export const useTheme = () => useContext(ThemeContext);

function ThemeProvider({children}) {
      const [theme, setTheme] = useState(() => {
        // Check if theme preference is stored in localStorage
        const storedTheme = localStorage.getItem("theme");
        // Return stored theme if available, otherwise default to 'light'
        return storedTheme ? storedTheme : "light";
      });

   const toggleTheme = () => {
     const newTheme = theme === "light" ? "dark" : "light";
     setTheme(newTheme);
     // Save theme preference to localStorage
     localStorage.setItem("theme", newTheme);
   };

   useEffect(() => {
     // Set the data-theme attribute on the root element
     document.documentElement.setAttribute("data-theme", theme);
   }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider