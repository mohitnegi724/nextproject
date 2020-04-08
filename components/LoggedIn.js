import { Fragment, useContext } from "react";
import {Login} from '../context/login';
import axios from 'axios';

export default function LoggedIn(props) {
  const {profilePicture, username, email} = props.user;
  const context = useContext(Login);
  return(
    <Fragment>
      <div className="profileContainer">
        <img id="userPicture" src={profilePicture} alt="userPicture"/>
        <span className="underline"></span>
        <span id="username">{username}</span>
        <small id="userEmail">{email}</small>
        <span id="logout" onClick={()=>{
          axios.post('http://localhost:3000/api/logout')
          .then(res=>{
            if(res.status === 200){
              return context.setLogin({login: false})
            }
            throw new err
          })
          .catch(err=>{
            throw new err
          })
        }}>
          Logout
        </span>
      </div>
      <style jsx>
      {`
      .profileContainer {
        width: 180px;
        height: 200px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #674c4c;
      }
      #userPicture {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        object-fit: cover;
      }
      .underline{
        width:80%;
        height: 1px;
        background-color: white;
        margin: 15px
      }
      #username,
      #useremail {
        margin: 10px auto;
      }
      #username {
        color: white
      }
      #userEmail {
        color: #62b983
      }
      #logout {
        border-radius: 4px;
        padding: 8px 15px;
        color: black;
        cursor: pointer;
        background: #62b983;
        margin-top: auto;
      }
      `}
      </style>
    </Fragment>
  )
}