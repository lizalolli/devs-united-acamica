import React from 'react'
import {AppContext , useAppContext} from "../context/AppContext";
import { Navigate } from "react-router-dom";
import AddTweet from '../components/AddTweet';
import TweetsList from '../components/TweetsList';
import Navigation from '../components/Navigation';
import Login from '../views/Login'


const Tweets = () => {

    const { user } = useAppContext();
    console.log(user)

    return (
        <div>
            <Navigation/>
            <h1>Dev United</h1>
            {!user ? (
                <>
                    <Navigate to="/" /> 
                </>
            ) : (
                <>
                    <div className="user-profile">
                        <img className="user-profile-pic" src={user.photoURL} alt=""/>
                        <p>¡Hola {user.displayName}!</p>
                    </div>
                    <AddTweet/>
                    <TweetsList/>
                </>  
            )}
        </div>
    )
}

export default Tweets
