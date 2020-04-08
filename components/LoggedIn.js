import { useContext } from "react";
import {Login} from '../context/login';
import axios from 'axios';
import Link from 'next/link'

export default function LoggedIn(props) {
  const {profilePicture, username, email} = props.user;
  const context = useContext(Login);
  return(
    <div className="loggedInContainer">

      <div id="userSection">
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
        <Link href="/homepage">
          <a>
            Go to Main page
          </a>
        </Link>
      </div>

      <div id="quoteSection">
          <span className="quote">
            Never lower your target ; increase your actions.
          </span>
          <small className="author">
            -Grant Cardone
          </small>
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
      .loggedInContainer {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 100%;
      }
      #userSection {
        box-shadow: 0px 0px 0px 10px rgb(105, 105, 105);
        background: #674c4c;
        align-items: center;
        display: flex;
        justify-content: center;
        flex-direction: column;
        flex: 2;
      }
      #userSection a {
        color: white;
      }
      #quoteSection {
        background-color: dimgrey;
        padding: 0px 20px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-color: #674c4c;
        flex:8
      }
      .quote {
        font-size: 40px;
        color: #b7b7b7
      }
      .author {
        font-size: 15px;
        color: burlywood;
      }
      `}
      </style>
    </div>
  )
}