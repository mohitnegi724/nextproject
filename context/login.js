import {createContext, useState} from 'react';


export const Login = createContext({
    loginContext: false,
    user: {}
})

export const LoginProvider =props=>{
    const[loginState, setLoginState] = useState({
        loginContext: false,
        user: {}
    })
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