
import React, { createContext, useContext, useState, useEffect } from 'react';

type ThemeContextType = {
  readingMode: boolean;
  toggleReadingMode: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [readingMode, setReadingMode] = useState(false);

  const toggleReadingMode = () => {
    setReadingMode(prev => !prev);
  };

  // Apply the theme to the root element when it changes
  useEffect(() => {
    const rootElement = document.documentElement;
    if (readingMode) {
      rootElement.classList.add('reading-mode');
    } else {
      rootElement.classList.remove('reading-mode');
    }
  }, [readingMode]);

  return (
    <ThemeContext.Provider value={{ readingMode, toggleReadingMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
