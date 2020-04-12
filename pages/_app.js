import React from 'react'
import '../style/home.css'
import {ThemeProvider} from '../context/theme'
import {LoginProvider} from '../context/login'
import {TasksProvider} from '../context/Tasks'



export default function MyApp({ Component, pageProps }) {
  return(
  <ThemeProvider>
      <LoginProvider>
        <TasksProvider>
          <Component {...pageProps} />
        </TasksProvider>
      </LoginProvider>
    </ThemeProvider>
  )
}