import React from 'react'
import {firestore , storage , auth , loginConGoogle , logout} from '../firebase';
import Login from "../components/Login";

const Home = (props) => {
    return (
        <div>
            <p>hola! esto es home</p>
            {/*<Login/>
            si está llogeado deebe mostrar main o app, donde está todo*/}
        </div>
    )
}

export default Home
