import React from 'react'
import { useEffect, useState, useRef, fragment } from 'react';
import { firestore, storage, auth, loginConGoogle, logout } from '../firebase';
import App from '../App'

const Login = () => {

    return (
        <div className="container-login">
            <div className="img-login">
                <img src='./images/logobig.svg' />
            </div>
            <div className="content-login">
                <h1>¡BIENVENID@!</h1>
                <h5 className="intro-login">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h5>
                <button className="btn-login" onClick={loginConGoogle}><img src="./images/googleLogo.svg" />Sign in with Google</button>
                <p className="footer-login">© 2020 Devs_United - <span>BETA</span></p>
            </div>
        </div>
    )
}


export default Login;
