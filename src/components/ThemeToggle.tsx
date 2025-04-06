
import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Toggle } from "./ui/toggle";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode

  useEffect(() => {
    // Check local storage first
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setIsDarkMode(storedTheme === "dark");
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
    } else {
      // Set dark mode as default
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    
    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <Toggle 
      pressed={isDarkMode} 
      onPressedChange={toggleTheme}
      aria-label="Toggle dark mode"
      className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-full w-10 h-10 flex items-center justify-center relative group"
    >
      {isDarkMode ? (
        <Moon className="h-5 w-5 text-yellow-300 group-hover:animate-pulse" />
      ) : (
        <Sun className="h-5 w-5 text-yellow-500 group-hover:animate-pulse" />
      )}
      <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-700 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        <code>{isDarkMode ? "dark_mode: true" : "light_mode: true"}</code>
      </span>
    </Toggle>
  );
};

export default ThemeToggle;
