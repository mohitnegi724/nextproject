import React, {useContext, Fragment} from 'react';
import {ThemeContext} from '../context/theme';
import Navbar from '../components/Navbar'

export default function Layout(props){
  const context = useContext(ThemeContext);
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
