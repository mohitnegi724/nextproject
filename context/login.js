import {createContext, useState} from 'react';


export const Login = createContext({
    loginState: false,
    user: {}
})

export const LoginProvider =props=>{
    const[loginState, setLoginState] = useState(false)
    const [user, setUser] = useState({})
    return(
    <Login.Provider value={{
        loginState,
        user,
        setLogin:(loginStatus, user)=>{
            setLoginState(loginStatus)
            setUser(user)
        }}}>
        {props.children}
    </Login.Provider>
    )
}