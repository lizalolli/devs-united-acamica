import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Login'
import App from '../App'
import Home from '../views/Home'
import Index from '../views/Index'
import Navigation from '../components/Navigation';

const Main = () => {
    return (
        <div>
            <Navigation/>
            <Routes>
                {/*<Navigation/>*/}
                <Route exact path="/" element={<Index/>} />
                <Route path="/App" element={<App/>} />
                <Route path="/Login" element={<Login/>} />
                <Route path="/Home" element={<Home/>} />
            </Routes>
        </div>
    );
}

export default Main
 