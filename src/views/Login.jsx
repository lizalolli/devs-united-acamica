import React from 'react'
import {useEffect , useState, useRef, fragment} from 'react';
import {firestore , storage , auth , loginConGoogle , logout} from '../firebase';
import App from '../App'

const Login = () => {
    return (
        <div>
            <div className="index">
                <img src='./images/logobig.svg'/>
                <button className="login-btn" onClick={loginConGoogle}>Log in</button> 
            </div>           
        </div>
    )
}


export default Login;
 