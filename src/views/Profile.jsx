import React from 'react'
import {fragment} from 'react'
import {useAppContext} from "../context/AppContext";
import { Navigate } from "react-router-dom";
import HeaderProfile from '../components/HeaderProfile'
import MyTweets from '../components/MyTweets'
import Favorites from '../components/Favorites'


const Profile = () => {

    const { user, handleToggle, Active } = useAppContext();

    if (!user) return (<Navigate to ="/"/>)

    return (
        <>
        <HeaderProfile/>
            <div className="container-background">
                <div className="container-tweets profile-info">
                    <div className="profile-img">
                        <img className="user-profile-pic" src={user.photoURL} alt=""/>
                    </div>
                    <h3>{user.displayName}</h3>
                    <img id="post" className={Active ? "d-block" : "d-none"} src="./images/posts.svg" alt="" onClick={handleToggle}/>
                    <img id="favorites" className={Active ? "d-none" : "d-block"} src="./images/favorites.svg" alt="" onClick={handleToggle}/>
                </div>
            </div>
            <div className="container-background-tweets">
                {Active ? <MyTweets/> : <Favorites/> }       
            </div>
        </>
    )
}

export default Profile
