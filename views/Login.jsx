import React from 'react'
import { loginConGoogle } from '../firebase';

const Login = () => {

    return (
        <div className="container-login">
            <div className="row">
                <div className="img-login col-xs-12 col-lg-6">
                    <img src='./images/logobig.svg' />
                </div>
                <div className="content-login col-xs-12 col-lg-6">
                    <h1>WELCOME, DEVELOPER!</h1>
                    <h5 className="intro-login">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h5>
                    <button className="btn-login" onClick={loginConGoogle}><img src="./images/googleLogo.svg" />Sign in with Google</button>
                    <p className="footer-login">© 2020 Devs_United - <span>BETA</span></p>
                </div>
            </div>
        </div>
    )
}


export default Login;
