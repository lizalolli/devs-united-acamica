import React from 'react'
import {firestore , storage , auth , loginConGoogle , logout} from '../firebase';
import Login from "./Login";
import Navigation from "../components/HeaderTweets";
import { useAppContext } from "../context/AppContext";
import { Navigate } from "react-router-dom";

const Home = () => {

    const { user,setUser } = useAppContext();

    return (
        <div>
            {user?.displayName ? <Navigate to="/Tweets" /> : <Login />}
        </div>
    )
}

export default Home
