import React, { Fragment, useContext } from 'react'
import {ThemeContext} from '../context/theme';
import ThemeButton from '../components/ThemeButton';
import Link from 'next/link'

const Navbar = () => {
  const context = useContext(ThemeContext);
  return (
  <Fragment>
    <div className="navbarContainer" style= {{color: context.theme === 'light'? '#282c34': 'white'}}>
      <div className="logo">
        <Link href="/">
          <a>mohitnegi</a>
        </Link>
      </div>
      <div className='themeButtonRight'>
        <ThemeButton />
      </div>
    </div>
    <style jsx>
      {
      `
        .navbarContainer {
          // position: fixed;
          display: flex;
          align-items: center;
          justify-content: center;
          box-sizing: border-box;
          top:0;
          width: 100%;
          height: 40px;
          padding: 0px 5px;
        }
        .themeButtonRight {
          margin-left: auto;
          // padding-right: 20px;
          border-radius: 50%;
          background: transparent;
          transition: all 0.5s ease-in-out
        }
        a {
          transition: all 0.5s ease-in-out;
          text-decoration: none;
          color: inherit
        }
      `
      }
    </style>
  </Fragment>
)};

export default Navbar;