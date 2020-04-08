import { Fragment, useContext, useEffect} from 'react';
import {Login} from '../context/login'
import fetch from 'isomorphic-unfetch'
import LoginForm from '../components/Login'
import LoggedIn from '../components/LoggedIn'

export default function Home(props) {
  const {login, user} = props;
  const context = useContext(Login);
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
          {login?<LoggedIn user={user}/>:<LoginForm/>}
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
Home.getInitialProps= async ctx =>{
  try {
    let user = await fetch('http://localhost:3000/api/profile')
    console.log(user)
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
    console.log({error})
    return {login: false}
  }
}