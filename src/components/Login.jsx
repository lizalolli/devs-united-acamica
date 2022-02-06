import React from 'react'
import {useEffect , useState, useRef, fragment} from 'react';
import {firestore , storage , auth , loginConGoogle , logout} from '../firebase';
import App from '../App'
import Index from '../views/Index'

const Login = (props) => {

    return (
        <div>
            <button className="login-btn" onClick={loginConGoogle}>Log in</button>        
            {/*<div className="user-profile">
                <img className="user-profile-pic" src={props.user.photoURL} alt=""/>
                <p>¡Hola {props.user.displayName}!</p>
            </div>*/}
        </div>
    )
}


export default Login
