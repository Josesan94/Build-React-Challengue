import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import logo from './images/build.png'
import './App.css';

 export const LoginButton=() => {
    const {loginWithRedirect} =useAuth0();

    return (
        <>
         <header className="App-header">
        <div> <img src={logo}/>
        <hr/>
        </div>
        <button  className="buttonLogin" onClick={()=> loginWithRedirect()}>
        Login or Register
        </button> 
        </header>
        </>
    )
};
