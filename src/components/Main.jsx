import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from '../views/Login'
import Home from '../views/Home'
import Navigation from '../components/Navigation';
import Tweets from '../views/Tweets';
import Profile from '../views/Profile'

const Main = () => {
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="/Tweets" element={<Tweets />} />
            </Routes>
        </div>
    );
}

export default Main
