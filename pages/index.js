import { Fragment, useContext, useEffect} from 'react';
import {Login} from '../context/login'
import fetch from 'isomorphic-unfetch'
import LoginForm from '../components/Login'
import LoggedIn from '../components/LoggedIn'

export default function Home(props) {
  const {login, user} = props;

  const context = useContext(Login);
  const { login:contextLogin, user:contextUser} = context.loginContext || {};

  useEffect(()=>{
    if(login){
      context.setLogin({login, user})
    }else{
      context.setLogin({
        login: false,
        user: {}
      })
    }
  }, [])

  return (
    <Fragment>
      <div className='homepage-container'>
          {contextLogin?<LoggedIn user={user}/>:<LoginForm/>}
      </div>
      <style jsx>{`
      .homepage-container {
        padding: 20px;
        position: relative;
        width: 100%;
        height: 100vh;
        box-sizing: border-box;
      }
      
      `}</style>
    </Fragment>
  );
}
Home.getInitialProps= async () =>{
  try {
    let user = await fetch('http://localhost:3000/api/profile')
    if(user){
      let data = await user.json();
      return {
        user: data,
        login: true
      }
    }else {
      return{
        login: false,
        user: {}
      }
    }
  }catch (error) {
    return {login: false}
  }
}