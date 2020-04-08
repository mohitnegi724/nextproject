import {createContext, useState} from 'react'

export const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};


export const ThemeContext = createContext('light');
export const ThemeProvider = props=> {
  const [theme, setTheme] = useState('light');
  return(
    <ThemeContext.Provider value={
      {
        theme: theme,
        setTheme: val=>{
          setTheme(val)
        }
      }
    }>
      {props.children}
    </ThemeContext.Provider>
  )
}