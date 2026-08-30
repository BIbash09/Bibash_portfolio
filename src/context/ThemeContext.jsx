import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

function getInitialTheme() {
  try {
    const savedTheme = window.localStorage.getItem('portfolio-theme');
    if (savedTheme) return savedTheme === 'dark';
  } catch {
    // Continue with the system preference when storage is unavailable.
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    try {
      window.localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');
    } catch {
      // Theme switching still works when storage is blocked.
    }
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
