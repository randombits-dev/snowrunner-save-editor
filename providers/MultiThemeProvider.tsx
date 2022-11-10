import {ThemeProvider} from "styled-components";
import {createContext, useContext, useState} from "react";

export interface MyTheme {
  background: string;
  action: string;
  border: string;
  color: string;
}

const light: MyTheme = {
  background: '#eee',
  action: '#fff',
  border: '#ccc',
  color: '#333'
};

const dark: MyTheme = {
  background: '#333',
  action: '#222',
  border: '#111',
  color: '#ccc'
};

type ThemeContextType = {
  theme: string;
  setTheme: (theme: string) => void;
}

const ThemeContext = createContext<ThemeContextType>(null);
export const useTheme = () => useContext(ThemeContext);

const MultiThemeProvider = ({children}) => {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <ThemeProvider theme={theme == 'light' ? light : dark}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
};

export default MultiThemeProvider;
