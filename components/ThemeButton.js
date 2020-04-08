import { Fragment, useContext } from "react";
import {ThemeContext} from '../context/theme'

const ThemeButtonStyle = {
    width: '50px',
    borderRadius: '10px',
    backgroundColor: '#c4c4c4',
    cursor: 'pointer',
    display: 'flex',
    alignItems : 'center',
    height: '22px',
    padding: '0px 2px'
}

const ThemeButton = () => {
    const webTheme = useContext(ThemeContext)
    const buttonStyle = {
        width: '18px',
        height: '18px',
        transition: 'all 0.5s ease-in-out',
        borderRadius: '50%',
        backgroundColor: webTheme.theme==='light'?'#e5e5e5' : 'black',
        marginLeft: webTheme.theme==='light'?'0' : '32px',
        marginRight: webTheme.theme==='dark'?'0' : '32px'
    }
    return (
        <Fragment>
            <div style={ThemeButtonStyle} onClick={()=>webTheme.setTheme(webTheme.theme==='light'? 'dark':'light')}>
                <div style={buttonStyle}>
                </div>
            </div>
        </Fragment>  
    )
};
  
  export default ThemeButton;