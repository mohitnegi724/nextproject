import React, {useContext, Fragment, useEffect} from 'react';
import {ThemeContext} from '../context/theme';
import {Login} from '../context/login';
import Navbar from '../components/Navbar'
import axios from 'axios';

export default function Layout(props){
  let context = useContext(ThemeContext);
  let userLoginContext = useContext(Login);

  useEffect(()=>{
    const apiurl = `${window.location.origin}/api/profile`
    axios.get(apiurl)
    .then(user=>{
      user = user.data
      return userLoginContext.setLogin({loginContext: true, user})
    })
    .catch(err=>{
      console.log(err)
      userLoginContext.setLogin({loginContext: false, user: {}})
    })
  }, [])
  return (
    <Fragment>
      <div className="layoutContainer" style={{
          background: context.theme === 'light'? 'white': '#282c34',
          color: context.theme === 'light'? '#282c34': 'white'
        }}>
        <Navbar />
        <div className="component">
          {props.children}
        </div>
      </div>
      <style jsx>{`
        * {
          transition: all 0.5s ease-in-out;
        }
        .layoutContainer {
          width: 100%;
          min-Height: 100vh;
          height: 100%;
          padding: 0px 20px;
          box-sizing: border-box;
        }
        .component {
          padding-top: 40px;
        }
      `}
      </style>
    </Fragment>
  )
};
