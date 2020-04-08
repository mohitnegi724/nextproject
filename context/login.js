import {createContext, useState} from 'react';


export const Login = createContext({
    login: false
})

export const LoginProvider =props=>{
    const[login, setLogin] = useState({login: false})
    return(
    <Login.Provider value={{
        login,
        setLogin:val=>{
            setLogin(val)
        }}}>
        {props.children}
    </Login.Provider>
    )
}