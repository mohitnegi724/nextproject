import {createContext, useState} from 'react';


export const Login = createContext({
    login: false
})

export const LoginProvider =props=>{
    const[loginState, setLoginState] = useState({login: false})
    return(
    <Login.Provider value={{
        loginContext: loginState,
        setLogin:val=>{
            setLoginState(val)
        }}}>
        {props.children}
    </Login.Provider>
    )
}