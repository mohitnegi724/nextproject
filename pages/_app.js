import '../style/home.css'
import {ThemeProvider} from '../context/theme'
import {LoginProvider} from '../context/login'

export default function MyApp({ Component, pageProps }) {
    return(
    <ThemeProvider>
        <LoginProvider>
          <Component {...pageProps} />
        </LoginProvider>
      </ThemeProvider>
    )
}