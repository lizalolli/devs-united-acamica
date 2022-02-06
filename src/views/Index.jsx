import React from 'react'
import {firestore , storage , auth , loginConGoogle , logout} from '../firebase';
import {useEffect , useState, useRef, fragment} from 'react';
import Login from '../components/Login'
import devsLogo from '../images/devsLogo.svg'
import { Navigate } from "react-router-dom";

const Index = () => {

    return (
        <div className="index">
            <img src={devsLogo}/>
            <h1>Devs_<strong>United</strong></h1>
            <Login/>
            
        </div>
    )
}

export default Index
