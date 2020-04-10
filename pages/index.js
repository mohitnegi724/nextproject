import { Fragment, useContext, useEffect} from 'react';
import {Login} from '../context/login'
import LoginForm from '../components/Login'
import LoggedIn from '../components/LoggedIn'

export default function Home() {
  const context = useContext(Login);
  const {contextLogin, user} = context.loginContext;

  return (
    <Fragment>
      <div className='homepage-container'>
          {context.loginContext|| context.loginContext.contextLogin ?<LoggedIn user={context.loginContext.user}/>:<LoginForm/>}
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
