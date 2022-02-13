import React from 'react'
import {fragment} from 'react'
import {AppContext , useAppContext} from "../context/AppContext";
import { Navigate } from "react-router-dom";
import AddTweet from '../components/AddTweet';
import TweetsList from '../components/TweetsList';
import HeaderTweets from '../components/HeaderTweets';
import Login from '../views/Login'

import '../styles.css';


const Tweets = () => {

    const { user } = useAppContext();

    return (
        <>  
            <HeaderTweets/>
            <div className="container-background">
                <div className="container-tweets">
                    <div className="container-post-tweet">
                        {!user ? (
                            <>
                                <Navigate to="/" /> 
                            </>
                        ) : (
                            <>
                                <div className="tweet">
                                    <div className="img-tweet">
                                        <img className="user-profile-pic" src={user.photoURL} alt=""/>
                                    </div>
                                    <AddTweet/>
                                </div>
                                
                            </>  
                        )} 
                    </div>
                </div>
            </div>
            <div className="container-background-tweets">
                <div className="container-tweets">
                    <TweetsList/>
                </div>
            </div>
        </>
    )
}

export default Tweets
