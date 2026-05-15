import { createContext, useContext, useState, useEffect } from 'react';
import { pqTheme } from '../tokens';

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(false);
  const theme = pqTheme(dark);

  useEffect(() => {
    document.body.style.background = dark ? '#0A1226' : '#F6F5F1';
  }, [dark]);

  return (
    <ThemeContext.Provider value={{ dark, setDark, theme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
